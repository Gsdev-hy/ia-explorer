
import React, { useState } from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { MessageSquare, EyeIcon, Bot, BarChart3, Zap, Network, FileText } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

// Données étendues pour inclure plus de dimensions et d'IA
const radarData = [
  {
    type: "LLM",
    langage: 95,
    raisonnement: 80,
    vision: 30,
    adaptation: 75,
    généralisation: 70,
    coût: 85,
    rapidité: 65,
    explicabilité: 40,
    multimodalité: 60,
    robustesse: 60,
    fiabilité: 55,
    icon: <MessageSquare className="w-4 h-4" />
  },
  {
    type: "CNN",
    langage: 10, 
    raisonnement: 20,
    vision: 95,
    adaptation: 50,
    généralisation: 60,
    coût: 50,
    rapidité: 80,
    explicabilité: 30,
    multimodalité: 40,
    robustesse: 70,
    fiabilité: 75,
    icon: <EyeIcon className="w-4 h-4" />
  },
  {
    type: "RL",
    langage: 20,
    raisonnement: 85,
    vision: 60,
    adaptation: 90,
    généralisation: 75,
    coût: 70,
    rapidité: 40,
    explicabilité: 35,
    multimodalité: 50,
    robustesse: 65,
    fiabilité: 60,
    icon: <Bot className="w-4 h-4" />
  },
  {
    type: "XAI",
    langage: 60,
    raisonnement: 75,
    vision: 65,
    adaptation: 60,
    généralisation: 55,
    coût: 60,
    rapidité: 55,
    explicabilité: 95,
    multimodalité: 45,
    robustesse: 70,
    fiabilité: 80,
    icon: <BarChart3 className="w-4 h-4" />
  },
  {
    type: "AGI",
    langage: 85,
    raisonnement: 90,
    vision: 85,
    adaptation: 95,
    généralisation: 95,
    coût: 90,
    rapidité: 80,
    explicabilité: 75,
    multimodalité: 90,
    robustesse: 85,
    fiabilité: 90,
    icon: <Zap className="w-4 h-4" />
  },
  {
    type: "RAG",
    langage: 90,
    raisonnement: 70,
    vision: 40,
    adaptation: 65,
    généralisation: 60,
    coût: 75,
    rapidité: 50,
    explicabilité: 80,
    multimodalité: 60,
    robustesse: 75,
    fiabilité: 85,
    icon: <FileText className="w-4 h-4" />
  },
  {
    type: "GAN",
    langage: 30,
    raisonnement: 50,
    vision: 90,
    adaptation: 60,
    généralisation: 65,
    coût: 65,
    rapidité: 70,
    explicabilité: 25,
    multimodalité: 75,
    robustesse: 50,
    fiabilité: 40,
    icon: <Network className="w-4 h-4" />
  }
];

// Légendes pour chaque dimension
const dimensionDescriptions = {
  langage: "Capacité à comprendre et générer du langage naturel",
  raisonnement: "Capacité à faire des déductions logiques et à résoudre des problèmes",
  vision: "Capacité à analyser et interpréter des images",
  adaptation: "Capacité à s'adapter à de nouvelles situations",
  généralisation: "Capacité à appliquer l'apprentissage à de nouveaux contextes",
  coût: "Ressources de calcul nécessaires (score élevé = coût élevé)",
  rapidité: "Vitesse d'inférence et d'apprentissage",
  explicabilité: "Capacité à expliquer les décisions prises",
  multimodalité: "Capacité à traiter différents types de données (texte, image, audio, etc.)",
  robustesse: "Résistance aux perturbations et aux données adverses",
  fiabilité: "Constance et précision des résultats"
};

const dimensionCategories = {
  capacités: ["langage", "raisonnement", "vision", "adaptation", "généralisation", "multimodalité"],
  technique: ["rapidité", "coût", "explicabilité", "généralisation", "robustesse", "fiabilité"],
  application: ["langage", "vision", "raisonnement", "multimodalité", "adaptation", "explicabilité"]
};

const AICapabilitiesChart: React.FC = () => {
  const [chartView, setChartView] = useState<'tous' | 'technique' | 'application'>('tous');
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["LLM", "CNN", "RL", "XAI", "AGI"]);
  const [activeAnimation, setActiveAnimation] = useState<boolean>(false);

  const toggleAIType = (type: string) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length > 1) {  // Garder au moins un type sélectionné
        setSelectedTypes(selectedTypes.filter(t => t !== type));
      }
    } else {
      setSelectedTypes([...selectedTypes, type]);
      setActiveAnimation(true);
      setTimeout(() => setActiveAnimation(false), 700);
    }
  };

  // Filtrer les données en fonction des types d'IA sélectionnés
  const filteredData = radarData.filter(item => selectedTypes.includes(item.type));

  // Définir les dimensions à afficher selon la vue sélectionnée
  let dimensions: Record<string, { label: string }> = {};
  
  if (chartView === 'tous') {
    dimensions = {
      langage: { label: "Langage" },
      raisonnement: { label: "Raisonnement" },
      vision: { label: "Vision" },
      adaptation: { label: "Adaptation" },
      généralisation: { label: "Généralisation" },
      coût: { label: "Coût calcul" },
      rapidité: { label: "Rapidité" },
      explicabilité: { label: "Explicabilité" },
      multimodalité: { label: "Multimodalité" }
    };
  } else if (chartView === 'technique') {
    dimensions = {
      rapidité: { label: "Rapidité" },
      coût: { label: "Coût calcul" },
      explicabilité: { label: "Explicabilité" },
      robustesse: { label: "Robustesse" },
      fiabilité: { label: "Fiabilité" },
      généralisation: { label: "Généralisation" }
    };
  } else if (chartView === 'application') {
    dimensions = {
      langage: { label: "Langage" },
      vision: { label: "Vision" },
      raisonnement: { label: "Raisonnement" },
      multimodalité: { label: "Multimodalité" },
      adaptation: { label: "Adaptation" },
      explicabilité: { label: "Explicabilité" }
    };
  }

  // Déterminer les couleurs pour chaque type d'IA
  const typeColors: Record<string, string> = {
    "LLM": "#8b5cf6", // Violet
    "CNN": "#0ea5e9", // Bleu
    "RL": "#f97316",  // Orange
    "XAI": "#10b981", // Vert
    "AGI": "#ef4444", // Rouge
    "RAG": "#8b5cf6", // Violet clair
    "GAN": "#ec4899"  // Rose
  };

  const compareTypes = (selectedTypes.length === 2) ? (
    <div className="mt-8 p-6 border rounded-lg bg-secondary/5">
      <h3 className="text-lg font-semibold mb-4">Comparaison directe : {selectedTypes.join(' vs ')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(dimensions).map(dim => {
          const type1 = filteredData.find(d => d.type === selectedTypes[0]);
          const type2 = filteredData.find(d => d.type === selectedTypes[1]);
          
          if (!type1 || !type2) return null;
          
          const value1 = type1[dim as keyof typeof type1] as number;
          const value2 = type2[dim as keyof typeof type2] as number;
          const diff = value1 - value2;
          const winner = diff > 0 ? selectedTypes[0] : (diff < 0 ? selectedTypes[1] : "Égalité");
          const winnerColor = diff > 0 ? typeColors[selectedTypes[0]] : (diff < 0 ? typeColors[selectedTypes[1]] : "#64748b");
          
          return (
            <div key={dim} className="flex items-center gap-4">
              <div className="w-32 font-medium">{dimensions[dim].label}</div>
              <div className="flex-1 h-6 bg-secondary/20 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 bottom-0 left-0"
                  style={{ backgroundColor: typeColors[selectedTypes[0]], width: `${value1}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${value1}%` }}
                  transition={{ duration: 1, type: "spring" }}
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between px-2 items-center text-xs text-white font-medium">
                  <span>{value1}</span>
                  <span>{value2}</span>
                </div>
              </div>
              <div className="flex-1 h-6 bg-secondary/20 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 bottom-0 right-0"
                  style={{ backgroundColor: typeColors[selectedTypes[1]], width: `${value2}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${value2}%` }}
                  transition={{ duration: 1, type: "spring" }}
                />
              </div>
              <div 
                className="w-20 text-xs font-medium text-center rounded-full py-1 px-2" 
                style={{ backgroundColor: `${winnerColor}30`, color: winnerColor }}
              >
                {winner}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;

  return (
    <div className="w-full mt-4">
      <div className="mb-6">
        <Tabs defaultValue="tous" onValueChange={(value) => setChartView(value as 'tous' | 'technique' | 'application')}>
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="tous">Toutes les dimensions</TabsTrigger>
            <TabsTrigger value="technique">Caractéristiques techniques</TabsTrigger>
            <TabsTrigger value="application">Applications pratiques</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {radarData.map((item) => (
          <Button 
            key={item.type} 
            size="sm"
            variant={selectedTypes.includes(item.type) ? "default" : "outline"}
            onClick={() => toggleAIType(item.type)}
            style={{ 
              backgroundColor: selectedTypes.includes(item.type) ? typeColors[item.type] : 'transparent',
              borderColor: typeColors[item.type],
              color: selectedTypes.includes(item.type) ? 'white' : typeColors[item.type]
            }}
            className="transition-all duration-200"
          >
            {item.icon}
            <span className="ml-1">{item.type}</span>
          </Button>
        ))}
      </div>

      <motion.div 
        className="w-full h-[500px]"
        animate={{ opacity: activeAnimation ? [1, 0.7, 1] : 1 }}
        transition={{ duration: 0.7 }}
      >
        <ChartContainer
          className="w-full h-full"
          config={dimensions}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={filteredData} margin={{ top: 20, right: 30, bottom: 30, left: 20 }}>
              <PolarGrid stroke="#64748b40" />
              <PolarAngleAxis 
                dataKey="type" 
                tick={{ fill: "var(--foreground)", fontSize: 12 }} 
              />
              <PolarRadiusAxis 
                domain={[0, 100]} 
                tick={{ fill: "var(--muted-foreground)" }} 
                tickCount={5}
              />
              
              {filteredData.map((entry) => {
                const dimensionsToUse = Object.keys(dimensions);
                return dimensionsToUse.map((dimension) => (
                  <Radar
                    key={`${entry.type}-${dimension}`}
                    name={entry.type}
                    dataKey={dimension}
                    stroke={typeColors[entry.type]}
                    fill={typeColors[entry.type]}
                    fillOpacity={0.4}
                    dot={true}
                  />
                ));
              })}
              
              <ChartTooltip 
                content={
                  <ChartTooltipContent 
                    formatter={(value, name, props) => {
                      // Customisation du texte de l'infobulle
                      const dimensionKey = props.dataKey as string;
                      if (dimensionKey && dimensionDescriptions[dimensionKey as keyof typeof dimensionDescriptions]) {
                        return (
                          <div>
                            <div className="font-semibold">{value}/100</div>
                            <div className="text-xs opacity-80 max-w-[200px] mt-1">
                              {dimensionDescriptions[dimensionKey as keyof typeof dimensionDescriptions]}
                            </div>
                          </div>
                        );
                      }
                      return `${value}/100`;
                    }}
                  />
                } 
              />
              
              <Legend 
                align="center" 
                verticalAlign="bottom" 
                layout="horizontal"
                wrapperStyle={{ 
                  paddingTop: '20px', 
                  bottom: '10px',
                  fontSize: '12px',
                  opacity: 0.8
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </motion.div>
      
      {compareTypes}
      
      <div className="mt-6 text-sm text-muted-foreground text-center">
        <p>Score de 0 à 100 pour chaque dimension. Survolez le graphique pour plus de détails.</p>
      </div>
    </div>
  );
};

export default AICapabilitiesChart;
