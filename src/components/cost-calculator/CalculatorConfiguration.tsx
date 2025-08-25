
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Settings, Zap, Plus } from 'lucide-react';
import { aiProvidersData } from './aiProvidersData';

interface CalculatorConfigurationProps {
  selectedProvider: string;
  setSelectedProvider: (value: string) => void;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  inputTokens: number;
  setInputTokens: (value: number) => void;
  outputTokens: number;
  setOutputTokens: (value: number) => void;
  usageType: string;
  setUsageType: (value: string) => void;
  selectedProviderData: any;
  addToComparison: () => void;
}

const CalculatorConfiguration: React.FC<CalculatorConfigurationProps> = ({
  selectedProvider,
  setSelectedProvider,
  selectedModel,
  setSelectedModel,
  inputTokens,
  setInputTokens,
  outputTokens,
  setOutputTokens,
  usageType,
  setUsageType,
  selectedProviderData,
  addToComparison
}) => {
  const presetConfigs = [
    { name: 'Chatbot simple', input: 150, output: 200 },
    { name: 'Génération de contenu', input: 100, output: 800 },
    { name: 'Assistant de code', input: 300, output: 400 },
    { name: 'Analyse de documents', input: 2000, output: 300 },
    { name: 'Traduction', input: 500, output: 500 },
    { name: 'Résumé automatique', input: 1500, output: 200 }
  ];

  const applyPreset = (preset: { input: number; output: number }) => {
    setInputTokens(preset.input);
    setOutputTokens(preset.output);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="provider">Fournisseur IA</Label>
          <Select value={selectedProvider} onValueChange={setSelectedProvider}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un fournisseur" />
            </SelectTrigger>
            <SelectContent>
              {aiProvidersData.map((provider) => (
                <SelectItem key={provider.id} value={provider.id}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {provider.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Modèle</Label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un modèle" />
            </SelectTrigger>
            <SelectContent>
              {selectedProviderData?.models.map((model: any) => (
                <SelectItem key={model.id} value={model.id}>
                  <div className="flex items-center justify-between w-full">
                    <span>{model.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {model.contextLength.toLocaleString()} tokens
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Presets rapides</Label>
          <div className="grid grid-cols-2 gap-2">
            {presetConfigs.map((preset, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => applyPreset(preset)}
                className="text-xs h-8 justify-start"
              >
                <Zap className="h-3 w-3 mr-1" />
                {preset.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="input-tokens">Tokens d'entrée</Label>
            <Input
              id="input-tokens"
              type="number"
              value={inputTokens}
              onChange={(e) => setInputTokens(Number(e.target.value))}
              placeholder="1000"
              min="1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="output-tokens">Tokens de sortie</Label>
            <Input
              id="output-tokens"
              type="number"
              value={outputTokens}
              onChange={(e) => setOutputTokens(Number(e.target.value))}
              placeholder="500"
              min="1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="usage-type">Type d'usage</Label>
          <Select value={usageType} onValueChange={setUsageType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Requête unique</SelectItem>
              <SelectItem value="daily">Usage quotidien</SelectItem>
              <SelectItem value="monthly">Usage mensuel</SelectItem>
              <SelectItem value="yearly">Usage annuel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={addToComparison}
          className="w-full"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Ajouter à la comparaison
        </Button>
      </CardContent>
    </Card>
  );
};

export default CalculatorConfiguration;
