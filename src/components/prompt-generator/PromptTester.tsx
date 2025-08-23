
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Play, Loader2, Copy, ThumbsUp, ThumbsDown, BarChart3 } from 'lucide-react';
import { toast } from 'sonner';

interface PromptTestResult {
  id: string;
  prompt: string;
  model: string;
  response: string;
  timestamp: Date;
  rating?: number;
  tokens: number;
  responseTime: number;
}

interface PromptTesterProps {
  prompt: string;
  onTestComplete: (result: PromptTestResult) => void;
}

const PromptTester: React.FC<PromptTesterProps> = ({ prompt, onTestComplete }) => {
  const [selectedModel, setSelectedModel] = useState('gpt-4o-mini');
  const [testResults, setTestResults] = useState<PromptTestResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');

  const models = [
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini', provider: 'OpenAI' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI' },
    { id: 'claude-3-haiku', name: 'Claude 3 Haiku', provider: 'Anthropic' },
    { id: 'gemini-flash', name: 'Gemini Flash', provider: 'Google' }
  ];

  const testPrompt = async () => {
    if (!prompt.trim()) {
      toast.error('Aucun prompt à tester');
      return;
    }

    setIsLoading(true);
    setCurrentResponse('');

    try {
      // Simulation d'appel API (à remplacer par de vrais appels)
      const startTime = Date.now();
      
      // Simuler une réponse (en production, ici on ferait l'appel API réel)
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
      
      const mockResponses = [
        "Voici une réponse détaillée à votre demande. L'IA a traité le prompt et généré ce contenu en fonction des instructions fournies.",
        "Cette réponse simule ce qu'un modèle d'IA produirait pour votre prompt. Dans un environnement réel, vous obtiendriez la vraie réponse du modèle sélectionné.",
        "Le prompt a été traité avec succès. Cette réponse démontre comment l'IA interpréterait et répondrait à vos instructions spécifiques.",
        "Réponse générée par simulation. En intégrant de vraies APIs, vous pourriez tester vos prompts avec différents modèles d'IA en temps réel."
      ];
      
      const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const endTime = Date.now();
      
      const result: PromptTestResult = {
        id: Date.now().toString(),
        prompt: prompt,
        model: selectedModel,
        response: response,
        timestamp: new Date(),
        tokens: Math.floor(Math.random() * 500) + 100,
        responseTime: endTime - startTime
      };

      setCurrentResponse(response);
      setTestResults(prev => [result, ...prev.slice(0, 4)]); // Garder les 5 derniers résultats
      onTestComplete(result);
      
      toast.success('Test complété avec succès !');
    } catch (error) {
      toast.error('Erreur lors du test du prompt');
      console.error('Test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const rateResponse = (resultId: string, rating: number) => {
    setTestResults(prev => 
      prev.map(result => 
        result.id === resultId ? { ...result, rating } : result
      )
    );
    toast.success(`Réponse notée ${rating}/5`);
  };

  const copyResponse = (response: string) => {
    navigator.clipboard.writeText(response);
    toast.success('Réponse copiée');
  };

  const selectedModelInfo = models.find(m => m.id === selectedModel);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Testeur de Prompt
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Modèle d'IA</label>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {models.map(model => (
                  <SelectItem key={model.id} value={model.id}>
                    <div className="flex items-center gap-2">
                      <span>{model.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {model.provider}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Prompt à tester</label>
            <Textarea
              value={prompt}
              readOnly
              className="min-h-[120px] bg-muted"
              placeholder="Générez un prompt pour le tester ici..."
            />
          </div>

          <Button 
            onClick={testPrompt} 
            disabled={!prompt.trim() || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Play className="h-4 w-4 mr-2" />
            )}
            {isLoading ? 'Test en cours...' : `Tester avec ${selectedModelInfo?.name}`}
          </Button>
        </CardContent>
      </Card>

      {/* Réponse actuelle */}
      {currentResponse && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Réponse du modèle</CardTitle>
              <div className="flex items-center gap-2">
                <Badge>{selectedModelInfo?.name}</Badge>
                <Button variant="outline" size="sm" onClick={() => copyResponse(currentResponse)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="whitespace-pre-wrap text-sm">{currentResponse}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Noter cette réponse :</span>
              {[1, 2, 3, 4, 5].map(rating => (
                <Button
                  key={rating}
                  variant="outline"
                  size="sm"
                  onClick={() => rateResponse(testResults[0]?.id, rating)}
                  className="p-1"
                >
                  {rating}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Historique des tests */}
      {testResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Historique des tests ({testResults.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {testResults.map(result => (
              <div key={result.id} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{result.model}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {result.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{result.tokens} tokens</span>
                    <span>{result.responseTime}ms</span>
                    {result.rating && (
                      <Badge variant="secondary">{result.rating}/5</Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm bg-muted p-2 rounded truncate">
                  {result.response}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PromptTester;
