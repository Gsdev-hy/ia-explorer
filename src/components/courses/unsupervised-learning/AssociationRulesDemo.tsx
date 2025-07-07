
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, TrendingUp, Zap } from 'lucide-react';

interface MarketBasket {
  id: number;
  items: string[];
}

interface AssociationRule {
  antecedent: string[];
  consequent: string[];
  support: number;
  confidence: number;
  lift: number;
}

const AssociationRulesDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const marketBaskets: MarketBasket[] = [
    { id: 1, items: ['Pain', 'Lait', 'Œufs'] },
    { id: 2, items: ['Pain', 'Beurre'] },
    { id: 3, items: ['Lait', 'Œufs', 'Fromage'] },
    { id: 4, items: ['Pain', 'Lait', 'Beurre'] },
    { id: 5, items: ['Œufs', 'Fromage', 'Lait'] },
    { id: 6, items: ['Pain', 'Confiture'] },
    { id: 7, items: ['Pain', 'Lait', 'Œufs', 'Beurre'] },
    { id: 8, items: ['Lait', 'Céréales'] },
    { id: 9, items: ['Pain', 'Fromage'] },
    { id: 10, items: ['Lait', 'Œufs', 'Pain'] }
  ];

  const associationRules: AssociationRule[] = [
    {
      antecedent: ['Pain'],
      consequent: ['Lait'],
      support: 0.5,
      confidence: 0.71,
      lift: 1.18
    },
    {
      antecedent: ['Œufs'],
      consequent: ['Lait'],
      support: 0.4,
      confidence: 0.8,
      lift: 1.33
    },
    {
      antecedent: ['Pain', 'Lait'],
      consequent: ['Œufs'],
      support: 0.3,
      confidence: 0.6,
      lift: 1.2
    }
  ];

  const steps = [
    {
      title: "Données brutes",
      description: "Tickets de caisse du supermarché"
    },
    {
      title: "Calcul des fréquences",
      description: "Identifier les items et combinaisons fréquents"
    },
    {
      title: "Génération des règles",
      description: "Créer les règles d'association avec leurs métriques"
    },
    {
      title: "Interprétation",
      description: "Analyser les résultats pour la prise de décision"
    }
  ];

  const getItemColor = (item: string) => {
    const colors: { [key: string]: string } = {
      'Pain': 'bg-orange-100 text-orange-800',
      'Lait': 'bg-blue-100 text-blue-800',
      'Œufs': 'bg-yellow-100 text-yellow-800',
      'Beurre': 'bg-green-100 text-green-800',
      'Fromage': 'bg-purple-100 text-purple-800',
      'Confiture': 'bg-pink-100 text-pink-800',
      'Céréales': 'bg-indigo-100 text-indigo-800'
    };
    return colors[item] || 'bg-gray-100 text-gray-800';
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h4 className="font-medium">Tickets de caisse collectés</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {marketBaskets.map((basket) => (
                <div key={basket.id} className="border rounded-lg p-3 bg-muted/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="font-medium text-sm">Ticket #{basket.id}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {basket.items.map((item, index) => (
                      <Badge key={index} variant="secondary" className={`text-xs ${getItemColor(item)}`}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h4 className="font-medium">Fréquences des items</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { item: 'Pain', freq: 7, percent: 70 },
                { item: 'Lait', freq: 6, percent: 60 },
                { item: 'Œufs', freq: 5, percent: 50 },
                { item: 'Beurre', freq: 3, percent: 30 },
                { item: 'Fromage', freq: 3, percent: 30 },
                { item: 'Confiture', freq: 1, percent: 10 },
                { item: 'Céréales', freq: 1, percent: 10 }
              ].map((data) => (
                <div key={data.item} className="text-center p-3 border rounded-lg">
                  <Badge className={`mb-2 ${getItemColor(data.item)}`}>
                    {data.item}
                  </Badge>
                  <div className="text-lg font-bold">{data.freq}/10</div>
                  <div className="text-sm text-muted-foreground">{data.percent}%</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h4 className="font-medium">Règles d'association découvertes</h4>
            <div className="space-y-3">
              {associationRules.map((rule, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {rule.antecedent.map((item, i) => (
                        <Badge key={i} className={getItemColor(item)}>
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <span className="text-lg">→</span>
                    <div className="flex gap-1">
                      {rule.consequent.map((item, i) => (
                        <Badge key={i} className={getItemColor(item)}>
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Support:</span> {(rule.support * 100).toFixed(0)}%
                    </div>
                    <div>
                      <span className="font-medium">Confiance:</span> {(rule.confidence * 100).toFixed(0)}%
                    </div>
                    <div>
                      <span className="font-medium">Lift:</span> {rule.lift.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h4 className="font-medium">Applications pratiques</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-950/30">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800 dark:text-green-200">Recommandations</span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  "Les clients qui achètent du pain achètent souvent du lait" → 
                  Proposer du lait lors de l'achat de pain
                </p>
              </div>
              
              <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-800 dark:text-blue-200">Placement produits</span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Placer les produits associés près les uns des autres 
                  pour faciliter les achats groupés
                </p>
              </div>
              
              <div className="border rounded-lg p-4 bg-purple-50 dark:bg-purple-950/30">
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingCart className="h-4 w-4 text-purple-600" />
                  <span className="font-medium text-purple-800 dark:text-purple-200">Promotions</span>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Créer des offres groupées basées sur les associations 
                  les plus fortes (ex: pain + lait + œufs)
                </p>
              </div>
              
              <div className="border rounded-lg p-4 bg-orange-50 dark:bg-orange-950/30">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-orange-600" />
                  <span className="font-medium text-orange-800 dark:text-orange-200">Inventory</span>
                </div>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Ajuster les stocks en fonction des associations : 
                  plus de lait quand on reçoit plus de pain
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5 text-primary" />
          Analyse du panier de marché - Démonstration interactive
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Navigation des étapes */}
          <div className="flex gap-2 flex-wrap">
            {steps.map((step, index) => (
              <Button
                key={index}
                variant={currentStep === index ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentStep(index)}
                className="flex flex-col items-center p-3 h-auto"
              >
                <div className="font-medium">{index + 1}</div>
                <div className="text-xs">{step.title}</div>
              </Button>
            ))}
          </div>

          {/* Indicateur de progression */}
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">Étape {currentStep + 1}/4:</div>
            <div className="text-sm text-muted-foreground">{steps[currentStep].description}</div>
          </div>

          {/* Contenu de l'étape */}
          <div className="min-h-[300px]">
            {renderStep()}
          </div>

          {/* Contrôles de navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Précédent
            </Button>
            <Button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
            >
              Suivant
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssociationRulesDemo;
