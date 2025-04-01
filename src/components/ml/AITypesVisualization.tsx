
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
    <div className="w-full mt-16">
      <div className="relative w-full h-[300px] mb-16 border rounded-xl bg-secondary/10 overflow-hidden">
        <AINodeGraph onNodeSelect={setSelectedType} />
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
