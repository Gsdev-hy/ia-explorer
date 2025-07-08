import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Save, Send, Download, Eye, EyeOff, ZoomIn } from 'lucide-react';

interface ImageProvider {
  id: string;
  name: string;
  apiUrl: string;
  models?: string[];
  headers: (apiKey: string) => Record<string, string>;
  buildPayload: (prompt: string, model?: string) => any;
  parseResponse: (response: any) => string;
}

const imageProviders: ImageProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI DALL-E',
    apiUrl: 'https://api.openai.com/v1/images/generations',
    models: ['dall-e-3', 'dall-e-2'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string = 'dall-e-3') => ({
      model,
      prompt,
      n: 1,
      size: '1024x1024'
    }),
    parseResponse: (response: any) => response.data?.[0]?.url || ''
  },
  {
    id: 'stability',
    name: 'Stability AI',
    apiUrl: 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      text_prompts: [{ text: prompt }],
      cfg_scale: 7,
      height: 1024,
      width: 1024,
      steps: 30
    }),
    parseResponse: (response: any) => {
      const base64 = response.artifacts?.[0]?.base64;
      return base64 ? `data:image/png;base64,${base64}` : '';
    }
  },
  {
    id: 'replicate',
    name: 'Replicate',
    apiUrl: 'https://api.replicate.com/v1/predictions',
    models: ['stability-ai/sdxl', 'black-forest-labs/flux-schnell'],
    headers: (apiKey: string) => ({
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string = 'black-forest-labs/flux-schnell') => ({
      version: model,
      input: { prompt }
    }),
    parseResponse: (response: any) => response.output?.[0] || ''
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    apiUrl: 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      inputs: prompt
    }),
    parseResponse: (response: any) => {
      // HuggingFace retourne souvent un blob
      return URL.createObjectURL(response);
    }
  },
  {
    id: 'leonardo',
    name: 'Leonardo AI',
    apiUrl: 'https://cloud.leonardo.ai/api/rest/v1/generations',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      prompt,
      modelId: 'aa77f04e-3eec-4034-9c07-d0f619684628',
      width: 1024,
      height: 1024,
      num_images: 1
    }),
    parseResponse: (response: any) => response.sdGenerationJob?.generationId || ''
  }
];

const ImageTester = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedProvider = localStorage.getItem('image-provider');
    const savedModel = localStorage.getItem('image-model');
    const savedApiKey = localStorage.getItem('image-api-key');
    const savedPrompt = localStorage.getItem('image-prompt');

    if (savedProvider) setSelectedProvider(savedProvider);
    if (savedModel) setSelectedModel(savedModel);
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedPrompt) setPrompt(savedPrompt);
  }, []);

  const saveApiKey = () => {
    localStorage.setItem('image-provider', selectedProvider);
    localStorage.setItem('image-model', selectedModel);
    localStorage.setItem('image-api-key', apiKey);
    localStorage.setItem('image-prompt', prompt);
    addLog('✅ Configuration sauvegardée dans le localStorage');
  };

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => `${prev}[${timestamp}] ${message}\n`);
  };

  const testAPI = async () => {
    if (!selectedProvider || !apiKey || !prompt) {
      addLog('❌ Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsLoading(true);
    setImageUrl('');
    addLog(`🚀 Début de la génération avec ${selectedProvider}`);

    try {
      const provider = imageProviders.find(p => p.id === selectedProvider);
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
      if (selectedProvider === 'huggingface') {
        data = await response.blob();
        const imageUrl = URL.createObjectURL(data);
        setImageUrl(imageUrl);
        addLog('✅ Image générée avec succès');
      } else {
        data = await response.json();
        addLog(`📦 Réponse brute: ${JSON.stringify(data, null, 2)}`);
        
        const parsedImageUrl = provider.parseResponse(data);
        setImageUrl(parsedImageUrl);
        addLog('✅ Image générée avec succès');
      }

    } catch (error: any) {
      addLog(`❌ Erreur: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const element = document.createElement('a');
      element.href = url;
      element.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      window.URL.revokeObjectURL(url);
      addLog('💾 Image téléchargée');
    } catch (error: any) {
      addLog(`❌ Erreur lors du téléchargement: ${error.message}`);
    }
  };

  const provider = imageProviders.find(p => p.id === selectedProvider);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Configuration du fournisseur Text-to-Image
            <Badge variant="secondary">{imageProviders.length} fournisseurs</Badge>
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
                  {imageProviders.map(provider => (
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
          <CardTitle>Génération d'image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prompt de description</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Décrivez l'image que vous souhaitez générer..."
              rows={4}
            />
          </div>

          <Button 
            onClick={testAPI} 
            disabled={isLoading || !selectedProvider || !apiKey || !prompt}
            className="w-full gap-2"
          >
            <Send className="h-4 w-4" />
            {isLoading ? 'Génération en cours...' : 'Générer l\'image'}
          </Button>
        </CardContent>
      </Card>

      {imageUrl && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Image générée
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ZoomIn className="h-4 w-4 mr-2" />
                      Agrandir
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Image en taille réelle</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center">
                      <img 
                        src={imageUrl} 
                        alt="Image générée" 
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="sm" onClick={downloadImage}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img 
                src={imageUrl} 
                alt="Image générée" 
                className="max-w-full h-auto max-h-96 object-contain rounded-lg border border-border"
              />
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
    </div>
  );
};

export default ImageTester;