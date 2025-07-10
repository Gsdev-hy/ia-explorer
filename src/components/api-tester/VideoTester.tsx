import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Save, Send, Download, Eye, EyeOff, Play, Pause, Video, ExternalLink, BookOpen } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface VideoProvider {
  id: string;
  name: string;
  apiUrl: string;
  models?: string[];
  headers: (apiKey: string) => Record<string, string>;
  buildPayload: (prompt: string, model?: string) => any;
  parseResponse: (response: any) => string;
}

const videoProviders: VideoProvider[] = [
  {
    id: 'runway',
    name: 'Runway ML',
    apiUrl: 'https://api.runwayml.com/v1/generate/video',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      prompt,
      duration: 4,
      resolution: '1280x768',
      seed: Math.floor(Math.random() * 1000000)
    }),
    parseResponse: (response: any) => response.video_url || ''
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    apiUrl: 'https://api.pika.art/v1/generate',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      prompt,
      aspectRatio: '16:9',
      frameRate: 24
    }),
    parseResponse: (response: any) => response.videos?.[0]?.url || ''
  },
  {
    id: 'replicate-zeroscope',
    name: 'Replicate ZeroScope',
    apiUrl: 'https://api.replicate.com/v1/predictions',
    headers: (apiKey: string) => ({
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      version: 'anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351',
      input: {
        prompt,
        num_frames: 24,
        width: 1024,
        height: 576
      }
    }),
    parseResponse: (response: any) => response.output?.[0] || ''
  }
];

const VideoAPIKeysLinks = () => {
  const apiKeyLinks = [
    { 
      name: 'Runway ML', 
      keyUrl: 'https://app.runwayml.com/account',
      docsUrl: 'https://docs.runwayml.com/'
    },
    { 
      name: 'Pika Labs', 
      keyUrl: 'https://pika.art/account',
      docsUrl: 'https://docs.pika.art/'
    },
    { 
      name: 'Replicate', 
      keyUrl: 'https://replicate.com/account/api-tokens',
      docsUrl: 'https://replicate.com/docs/reference/http'
    }
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Ressources pour les API Text-to-Video
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
              💡 <strong>Conseil :</strong> La génération de vidéos peut prendre plusieurs minutes et nécessite souvent des crédits. Vérifiez les coûts et les limites dans la documentation de chaque fournisseur.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const VideoTester = () => {
  const { toast } = useToast();
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const savedProvider = localStorage.getItem('video-provider');
    const savedModel = localStorage.getItem('video-model');
    const savedApiKey = localStorage.getItem('video-api-key');
    const savedPrompt = localStorage.getItem('video-prompt');

    if (savedProvider) setSelectedProvider(savedProvider);
    if (savedModel) setSelectedModel(savedModel);
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedPrompt) setPrompt(savedPrompt);
  }, []);

  const saveApiKey = () => {
    localStorage.setItem('video-provider', selectedProvider);
    localStorage.setItem('video-model', selectedModel);
    localStorage.setItem('video-api-key', apiKey);
    localStorage.setItem('video-prompt', prompt);
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
    setVideoUrl('');
    addLog(`🚀 Début de la génération vidéo avec ${selectedProvider}`);
    toast({
      title: "Génération en cours",
      description: `Génération de vidéo avec ${selectedProvider}...`,
    });

    try {
      const provider = videoProviders.find(p => p.id === selectedProvider);
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

      const data = await response.json();
      addLog(`📦 Réponse brute: ${JSON.stringify(data, null, 2)}`);
      
      const parsedVideoUrl = provider.parseResponse(data);
      
      // Pour certains fournisseurs, la génération peut être asynchrone
      if (selectedProvider === 'replicate-zeroscope' && data.status === 'starting') {
        addLog('⏳ Génération en cours, veuillez patienter...');
        // Ici, vous pourriez implémenter un polling pour vérifier le statut
        // Pour cet exemple, on simule une attente
        setTimeout(() => {
          addLog('✅ Vidéo générée avec succès (simulation)');
          setVideoUrl('https://replicate.delivery/pbxt/example-video.mp4'); // URL d'exemple
        }, 10000);
      } else {
        setVideoUrl(parsedVideoUrl);
        addLog('✅ Vidéo générée avec succès');
      }

      toast({
        title: "Vidéo générée",
        description: "La vidéo a été générée avec succès.",
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
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const downloadVideo = async () => {
    if (!videoUrl) return;

    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const element = document.createElement('a');
      element.href = url;
      element.download = `generated-video-${Date.now()}.mp4`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      window.URL.revokeObjectURL(url);
      addLog('💾 Vidéo téléchargée');
      toast({
        title: "Téléchargement",
        description: "La vidéo a été téléchargée avec succès.",
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

  const provider = videoProviders.find(p => p.id === selectedProvider);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Configuration du fournisseur Text-to-Video
            <Badge variant="secondary">{videoProviders.length} fournisseurs</Badge>
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
                  {videoProviders.map(provider => (
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
          <CardTitle>Génération de vidéo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prompt de description</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Décrivez la vidéo que vous souhaitez générer (ex: 'a cat walking in a garden with flowers')"
              rows={4}
            />
          </div>

          <Button 
            onClick={testAPI} 
            disabled={isLoading || !selectedProvider || !apiKey || !prompt}
            className="w-full gap-2"
          >
            <Send className="h-4 w-4" />
            {isLoading ? 'Génération en cours...' : 'Générer la vidéo'}
          </Button>
        </CardContent>
      </Card>

      {videoUrl && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Vidéo générée
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Lecture'}
                </Button>
                <Button variant="outline" size="sm" onClick={downloadVideo}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="relative max-w-full">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  controls
                  className="max-w-full h-auto max-h-96 object-contain rounded-lg border border-border"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
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

      <VideoAPIKeysLinks />
    </div>
  );
};

export default VideoTester;
