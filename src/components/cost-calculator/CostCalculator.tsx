
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';
import { aiProvidersData, AIProvider } from './aiProvidersData';
import CostComparison from './CostComparison';
import UsageEstimator from './UsageEstimator';
import CostSaver from './CostSaver';

interface CostCalculation {
  providerId: string;
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
  inputCost: number;
  outputCost: number;
}

const CostCalculator = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>('openai');
  const [selectedModel, setSelectedModel] = useState<string>('gpt-4o');
  const [inputTokens, setInputTokens] = useState<number>(1000);
  const [outputTokens, setOutputTokens] = useState<number>(500);
  const [usageType, setUsageType] = useState<string>('monthly');
  const [calculations, setCalculations] = useState<CostCalculation[]>([]);

  const selectedProviderData = useMemo(() => {
    return aiProvidersData.find(p => p.id === selectedProvider);
  }, [selectedProvider]);

  const selectedModelData = useMemo(() => {
    return selectedProviderData?.models.find(m => m.id === selectedModel);
  }, [selectedProviderData, selectedModel]);

  const calculateCost = useMemo(() => {
    if (!selectedModelData) return null;

    const pricing = selectedModelData.pricing[0]; // Prendre le premier tier de pricing
    const inputCost = (inputTokens / 1000000) * pricing.inputPrice;
    const outputCost = (outputTokens / 1000000) * pricing.outputPrice;
    const totalCost = inputCost + outputCost;

    return {
      inputCost,
      outputCost,
      totalCost,
      pricing
    };
  }, [selectedModelData, inputTokens, outputTokens]);

  const currentCalculation = useMemo(() => {
    if (!calculateCost || !selectedProviderData) return null;
    
    return {
      provider: selectedProviderData.name,
      model: selectedModelData?.name || '',
      inputTokens,
      outputTokens,
      totalCost: calculateCost.totalCost,
      usageType
    };
  }, [calculateCost, selectedProviderData, selectedModelData, inputTokens, outputTokens, usageType]);

  const addToComparison = () => {
    if (!calculateCost || !selectedProviderData) return;

    const newCalculation: CostCalculation = {
      providerId: selectedProvider,
      modelId: selectedModel,
      inputTokens,
      outputTokens,
      totalCost: calculateCost.totalCost,
      inputCost: calculateCost.inputCost,
      outputCost: calculateCost.outputCost
    };

    setCalculations(prev => {
      const filtered = prev.filter(calc => 
        !(calc.providerId === selectedProvider && calc.modelId === selectedModel)
      );
      return [...filtered, newCalculation];
    });
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calculator">Calculateur</TabsTrigger>
          <TabsTrigger value="comparison">Comparaison</TabsTrigger>
          <TabsTrigger value="estimator">Estimateur d'usage</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
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
                          {provider.name}
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
                      {selectedProviderData?.models.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          {model.name}
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Estimation des coûts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedModelData && calculateCost && (
                  <>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Modèle sélectionné:</span>
                        <span className="font-medium">{selectedModelData.name}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Prix entrée (par 1M tokens):</span>
                        <span className="font-medium">${calculateCost.pricing.inputPrice.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Prix sortie (par 1M tokens):</span>
                        <span className="font-medium">${calculateCost.pricing.outputPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Coût tokens d'entrée:</span>
                        <span>${calculateCost.inputCost.toFixed(4)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Coût tokens de sortie:</span>
                        <span>${calculateCost.outputCost.toFixed(4)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center font-semibold text-lg">
                        <span>Coût total:</span>
                        <span className="text-primary">${calculateCost.totalCost.toFixed(4)}</span>
                      </div>

                      {usageType !== 'single' && (
                        <div className="flex justify-between items-center text-lg font-bold border-t pt-3">
                          <span>Coût {usageType === 'daily' ? 'quotidien' : usageType === 'monthly' ? 'mensuel' : 'annuel'}:</span>
                          <span className="text-primary">
                            ${(calculateCost.totalCost * 
                              (usageType === 'daily' ? 1 : usageType === 'monthly' ? 30 : 365)
                            ).toFixed(2)}
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={addToComparison}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                    >
                      Ajouter à la comparaison
                    </button>
                  </>
                )}

                {selectedModelData && (
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Fonctionnalités:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedModelData.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison">
          <CostComparison calculations={calculations} setCalculations={setCalculations} />
        </TabsContent>

        <TabsContent value="estimator">
          <UsageEstimator />
        </TabsContent>

        <TabsContent value="history">
          <CostSaver currentCalculation={currentCalculation} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CostCalculator;
