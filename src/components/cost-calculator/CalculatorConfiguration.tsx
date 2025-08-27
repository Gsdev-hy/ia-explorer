
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Zap, Plus, Filter, Star, Clock } from 'lucide-react';
import { aiProvidersData, getModelCategories, getModelsByCategory, getRecommendedModels, getCheapestModels } from './aiProvidersData';

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
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const presetConfigs = [
    { name: 'Chatbot simple', input: 150, output: 200, description: 'Assistant conversationnel basique' },
    { name: 'Génération de contenu', input: 100, output: 800, description: 'Articles, blogs, descriptions' },
    { name: 'Assistant de code', input: 300, output: 400, description: 'Génération et révision de code' },
    { name: 'Analyse de documents', input: 2000, output: 300, description: 'Extraction d\'informations' },
    { name: 'Traduction', input: 500, output: 500, description: 'Traduction multilingue' },
    { name: 'Résumé automatique', input: 1500, output: 200, description: 'Synthèse de textes longs' },
    { name: 'Support client', input: 200, output: 250, description: 'Réponses FAQ automatisées' },
    { name: 'Création marketing', input: 80, output: 600, description: 'Publicités, slogans, emails' },
    { name: 'Recherche académique', input: 1000, output: 400, description: 'Analyse scientifique' },
    { name: 'Tutoriel interactif', input: 300, output: 700, description: 'Formation et explications' }
  ];

  const advancedPresets = [
    { name: 'RAG Enterprise', input: 3000, output: 800, description: 'Recherche augmentée par génération' },
    { name: 'Agent autonome', input: 500, output: 1200, description: 'IA qui planifie et exécute' },
    { name: 'Fine-tuning data', input: 2500, output: 100, description: 'Préparation de données d\'entraînement' },
    { name: 'Multi-agent workflow', input: 800, output: 1500, description: 'Coordination de plusieurs agents' },
    { name: 'Code review complet', input: 1500, output: 600, description: 'Analyse approfondie de code' },
    { name: 'Creative writing', input: 200, output: 2000, description: 'Écriture créative longue' }
  ];

  const applyPreset = (preset: { input: number; output: number }) => {
    setInputTokens(preset.input);
    setOutputTokens(preset.output);
  };

  const categories = getModelCategories();
  const recommendedModels = getRecommendedModels();
  const cheapestModels = getCheapestModels(3);

  const filteredModels = selectedProviderData?.models?.filter((model: any) => {
    if (categoryFilter === 'all') return true;
    return model.category === categoryFilter;
  }) || [];

  const applyQuickSelection = (providerId: string, modelId: string) => {
    setSelectedProvider(providerId);
    setSelectedModel(modelId);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Configuration avancée
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Configuration</TabsTrigger>
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
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
                        <span>{provider.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {provider.region}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category-filter">Filtrer par catégorie</Label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
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
                  {filteredModels.map((model: any) => (
                    <SelectItem key={model.id} value={model.id}>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <span>{model.name}</span>
                          {model.recommended && <Star className="h-3 w-3 text-yellow-500" />}
                          <Badge variant="outline" className="text-xs">
                            {model.speed}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">
                          {model.contextLength.toLocaleString()} tokens
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

            <Button onClick={addToComparison} className="w-full" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Ajouter à la comparaison
            </Button>
          </TabsContent>

          <TabsContent value="presets" className="space-y-4">
            <div className="space-y-3">
              <Label>Presets rapides</Label>
              <div className="grid grid-cols-1 gap-2">
                {presetConfigs.map((preset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => applyPreset(preset)}
                    className="justify-start h-auto p-3"
                  >
                    <div className="flex items-start gap-2 w-full">
                      <Zap className="h-4 w-4 mt-0.5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{preset.name}</div>
                        <div className="text-xs text-muted-foreground">{preset.description}</div>
                        <div className="text-xs text-primary mt-1">
                          {preset.input} → {preset.output} tokens
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Presets avancés</Label>
              <div className="grid grid-cols-1 gap-2">
                {advancedPresets.map((preset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => applyPreset(preset)}
                    className="justify-start h-auto p-3 border-dashed"
                  >
                    <div className="flex items-start gap-2 w-full">
                      <Settings className="h-4 w-4 mt-0.5 text-orange-500" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{preset.name}</div>
                        <div className="text-xs text-muted-foreground">{preset.description}</div>
                        <div className="text-xs text-orange-500 mt-1">
                          {preset.input} → {preset.output} tokens
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                Modèles recommandés
              </Label>
              <div className="space-y-2">
                {recommendedModels.slice(0, 5).map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const provider = aiProvidersData.find(p => p.name === item.provider);
                      if (provider) applyQuickSelection(provider.id, item.model.id);
                    }}
                    className="justify-start w-full"
                  >
                    <Star className="h-3 w-3 mr-2 text-yellow-500" />
                    <span className="text-sm">{item.provider} {item.model.name}</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {item.model.category}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                Plus économiques
              </Label>
              <div className="space-y-2">
                {cheapestModels.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const provider = aiProvidersData.find(p => p.name === item.provider);
                      if (provider) applyQuickSelection(provider.id, item.model.id);
                    }}
                    className="justify-start w-full"
                  >
                    <Clock className="h-3 w-3 mr-2 text-green-500" />
                    <span className="text-sm">{item.provider} {item.model.name}</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      ${item.avgPrice.toFixed(2)}/1M avg
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CalculatorConfiguration;
