
import React, { useState } from 'react';
import { Brain, MessageSquare, EyeIcon, Bot, BarChart3 } from 'lucide-react';
import AINodeGraph from './visualization/AINodeGraph';
import AITypeExplanation from './visualization/AITypeExplanation';
import AICapabilitiesChart from './visualization/AICapabilitiesChart';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Visualisation des différents types d'IA et leurs caractéristiques
 */
const AITypesVisualization: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("LLM");
  
  return (
    <div className="w-full mt-8">
      <div className="relative w-full h-[450px] mb-12 border rounded-xl bg-gradient-to-b from-secondary/20 to-secondary/5 overflow-hidden shadow-sm">
        <AINodeGraph onNodeSelect={setSelectedType} />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-background/70 px-2 py-1 rounded-md">
          Cliquez sur un nœud pour voir les détails
        </div>
      </div>
      
      <AITypeExplanation selectedType={selectedType} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <h3 className="heading-sm mb-4">Types d'IA et spécificités</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <MessageSquare size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Modèles de Langage (LLM)</p>
                  <p className="text-sm text-muted-foreground">Spécialisés dans le traitement et la génération de texte</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <EyeIcon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Réseaux Convolutifs (CNN)</p>
                  <p className="text-sm text-muted-foreground">Spécialisés dans le traitement d'images et la vision par ordinateur</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <Bot size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Apprentissage par Renforcement (RL)</p>
                  <p className="text-sm text-muted-foreground">Apprentissage par interaction avec un environnement</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <BarChart3 size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">IA Explicable (XAI)</p>
                  <p className="text-sm text-muted-foreground">Techniques pour comprendre le fonctionnement des modèles complexes</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="heading-sm mb-4">Hiérarchie des systèmes d'IA</h3>
            <div className="w-full relative">
              <div className="flex flex-col space-y-6">
                <div className="p-4 bg-secondary/10 rounded-lg border border-primary/10">
                  <h4 className="font-medium">Intelligence Artificielle Générale (AGI)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Systèmes capables de résoudre des problèmes nouveaux dans de multiples domaines, 
                    avec des capacités comparables ou supérieures à l'intelligence humaine.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/5 rounded-lg border border-primary/5">
                    <h4 className="font-medium">IA spécialisée par domaine</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Systèmes experts conçus pour exceller dans des domaines spécifiques 
                      comme la médecine, la finance ou le droit.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg border border-primary/5">
                    <h4 className="font-medium">IA spécialisée par tâche</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Systèmes conçus pour exceller dans des tâches spécifiques comme la vision par ordinateur, 
                      le traitement du langage ou la planification.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/5 rounded-lg border border-primary/5">
                  <h4 className="font-medium">Apprentissage automatique (Machine Learning)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Algorithmes qui apprennent à partir de données et s'améliorent avec l'expérience
                    (apprentissage supervisé, non supervisé, par renforcement).
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="heading-sm mb-4">Comparaison des capacités par type d'IA</h3>
      <p className="text-muted-foreground mb-4">
        Ce graphique radar compare les performances relatives des différents types d'IA sur des dimensions clés comme
        le traitement du langage, la vision, le raisonnement et la capacité d'adaptation.
      </p>
      
      <AICapabilitiesChart />
    </div>
  );
};

export default AITypesVisualization;
