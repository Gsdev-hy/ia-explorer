
import React, { useState } from 'react';
import { Brain, MessageSquare, EyeIcon, Bot, BarChart3 } from 'lucide-react';
import AINodeGraph from './visualization/AINodeGraph';
import AITypeExplanation from './visualization/AITypeExplanation';
import AICapabilitiesChart from './visualization/AICapabilitiesChart';

/**
 * Visualisation des différents types d'IA et leurs caractéristiques
 */
const AITypesVisualization: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("LLM");
  
  return (
    <div className="w-full mt-8">
      <div className="relative w-full h-[350px] mb-12 border rounded-xl bg-gradient-to-b from-secondary/20 to-secondary/5 overflow-hidden shadow-sm">
        <AINodeGraph onNodeSelect={setSelectedType} />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-background/70 px-2 py-1 rounded-md">
          Cliquez sur un nœud pour voir les détails
        </div>
      </div>
      
      <AITypeExplanation selectedType={selectedType} />
      
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
