import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Save, Send, Download, Eye, EyeOff, Play, Pause, Volume2, ExternalLink, BookOpen } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface MusicProvider {
  id: string;
  name: string;
  apiUrl: string;
  models?: string[];
  headers: (apiKey: string) => Record<string, string>;
  buildPayload: (prompt: string, model?: string) => any;
  parseResponse: (response: any) => string;
}

const musicProviders: MusicProvider[] = [
  {
    id: 'suno',
    name: 'Suno AI',
    apiUrl: 'https://api.sunoai.com/v1/generate',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      prompt,
      make_instrumental: false,
      wait_audio: true
    }),
    parseResponse: (response: any) => response.audio_url || ''
  },
  {
    id: 'musicgen',
    name: 'MusicGen (Meta)',
    apiUrl: 'https://api-inference.huggingface.co/models/facebook/musicgen-small',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      inputs: prompt,
      parameters: {
        duration: 30
      }
    }),
    parseResponse: (response: any) => {
      // MusicGen via HuggingFace retourne souvent un blob audio
      return URL.createObjectURL(response);
    }
  },
  {
    id: 'replicate-musicgen',
    name: 'Replicate MusicGen',
    apiUrl: 'https://api.replicate.com/v1/predictions',
    headers: (apiKey: string) => ({
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      version: 'facebook/musicgen:7a76a8258b23fae65c5a22debb8841d1d7e816b75c2f24218cd2bd8573787906',
      input: {
        prompt,
        duration: 30
      }
    }),
    parseResponse: (response: any) => response.output || ''
  }
];

const MusicAPIKeysLinks = () => {
  const apiKeyLinks = [
    { 
      name: 'Suno AI', 
      keyUrl: 'https://app.suno.ai/account',
      docsUrl: 'https://docs.suno.ai/'
    },
    { 
      name: 'Udio', 
      keyUrl: 'https://www.udio.com/settings',
      docsUrl: 'https://docs.udio.com/'
    }
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Ressources pour les API Text-to-Music
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Clés API</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {apiKeyLinks.map((link) => (
                <div key={link.name} className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 justify-start gap-2"
                    onClick={() => window.open(link.keyUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.name}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(link.docsUrl, '_blank')}
                    title="Documentation"
                  >
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Conseil :</strong> La génération de musique par IA peut prendre plusieurs minutes. Consultez les limites de durée et de qualité dans la documentation de chaque fournisseur.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MusicTester = () => {
  const { toast } = useToast();
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const savedProvider = localStorage.getItem('music-provider');
    const savedModel = localStorage.getItem('music-model');
    const savedApiKey = localStorage.getItem('music-api-key');
    const savedPrompt = localStorage.getItem('music-prompt');

    if (savedProvider) setSelectedProvider(savedProvider);
    if (savedModel) setSelectedModel(savedModel);
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedPrompt) setPrompt(savedPrompt);
  }, []);

  const saveApiKey = () => {
    localStorage.setItem('music-provider', selectedProvider);
    localStorage.setItem('music-model', selectedModel);
    localStorage.setItem('music-api-key', apiKey);
    localStorage.setItem('music-prompt', prompt);
    addLog('✅ Configuration sauvegardée dans le localStorage');
    toast({
      title: "Configuration sauvegardée",
      description: "Vos paramètres ont été enregistrés dans le stockage local.",
    });
  };

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => `${prev}[${timestamp}] ${message}\n`);
  };

  const testAPI = async () => {
    if (!selectedProvider || !apiKey || !prompt) {
      addLog('❌ Veuillez remplir tous les champs obligatoires');
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAudioUrl('');
    addLog(`🚀 Début de la génération musicale avec ${selectedProvider}`);
    toast({
      title: "Génération en cours",
      description: `Génération de musique avec ${selectedProvider}...`,
    });

    try {
      const provider = musicProviders.find(p => p.id === selectedProvider);
      if (!provider) throw new Error('Fournisseur non trouvé');

      const payload = provider.buildPayload(prompt, selectedModel);
      
      addLog(`📡 Envoi de la requête vers ${provider.apiUrl}`);
      addLog(`📝 Payload: ${JSON.stringify(payload, null, 2)}`);

      const response = await fetch(provider.apiUrl, {
        method: 'POST',
        headers: provider.headers(apiKey),
        body: JSON.stringify(payload)
      });

      addLog(`📨 Statut de la réponse: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erreur API: ${response.status} - ${errorText}`);
      }

      let data;
      if (selectedProvider === 'musicgen') {
        // HuggingFace retourne un blob audio
        data = await response.blob();
        const audioUrl = URL.createObjectURL(data);
        setAudioUrl(audioUrl);
        addLog('✅ Musique générée avec succès');
      } else {
        data = await response.json();
        addLog(`📦 Réponse brute: ${JSON.stringify(data, null, 2)}`);
        
        const parsedAudioUrl = provider.parseResponse(data);
        setAudioUrl(parsedAudioUrl);
        addLog('✅ Musique générée avec succès');
      }

      toast({
        title: "Musique générée",
        description: "La musique a été générée avec succès.",
      });

    } catch (error: any) {
      addLog(`❌ Erreur: ${error.message}`);
      toast({
        title: "Erreur de génération",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const downloadAudio = async () => {
    if (!audioUrl) return;

    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const element = document.createElement('a');
      element.href = url;
      element.download = `generated-music-${Date.now()}.wav`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      window.URL.revokeObjectURL(url);
      addLog('💾 Fichier audio téléchargé');
      toast({
        title: "Téléchargement",
        description: "Le fichier audio a été téléchargé avec succès.",
      });
    } catch (error: any) {
      addLog(`❌ Erreur lors du téléchargement: ${error.message}`);
      toast({
        title: "Erreur de téléchargement",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const provider = musicProviders.find(p => p.id === selectedProvider);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Configuration du fournisseur Text-to-Music
            <Badge variant="secondary">{musicProviders.length} fournisseurs</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Fournisseur</label>
              <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un fournisseur" />
                </SelectTrigger>
                <SelectContent>
                  {musicProviders.map(provider => (
                    <SelectItem key={provider.id} value={provider.id}>
                      {provider.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {provider?.models && (
              <div>
                <label className="text-sm font-medium mb-2 block">Modèle</label>
                <Select 
                  value={selectedModel} 
                  onValueChange={setSelectedModel}
                  disabled={!selectedProvider}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un modèle" />
                  </SelectTrigger>
                  <SelectContent>
                    {provider.models.map(model => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Clé API</label>
            <div className="flex gap-2">
              <Input
                type={showApiKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Entrez votre clé API"
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              <Button onClick={saveApiKey} className="gap-2">
                <Save className="h-4 w-4" />
                Sauvegarder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Génération de musique</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prompt de description</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Décrivez la musique que vous souhaitez générer (ex: 'upbeat jazz with piano and saxophone')"
              rows={4}
            />
          </div>

          <Button 
            onClick={testAPI} 
            disabled={isLoading || !selectedProvider || !apiKey || !prompt}
            className="w-full gap-2"
          >
            <Send className="h-4 w-4" />
            {isLoading ? 'Génération en cours...' : 'Générer la musique'}
          </Button>
        </CardContent>
      </Card>

      {audioUrl && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Musique générée
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Lecture'}
                </Button>
                <Button variant="outline" size="sm" onClick={downloadAudio}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <audio
                  ref={audioRef}
                  src={audioUrl}
                  controls
                  className="w-full"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  Votre navigateur ne supporte pas la lecture audio.
                </audio>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Logs de communication</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={logs}
            readOnly
            rows={10}
            className="font-mono text-xs bg-muted/30 dark:bg-muted/20"
            placeholder="Les logs d'API apparaîtront ici..."
          />
        </CardContent>
      </Card>

      <MusicAPIKeysLinks />
    </div>
  );
};

export default MusicTester;
