
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
import { MessageSquare, EyeIcon, Bot, BarChart3, Zap } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

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
    icon: <Zap className="w-4 h-4" />
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
  multimodalité: "Capacité à traiter différents types de données (texte, image, audio, etc.)"
};

const AICapabilitiesChart: React.FC = () => {
  const [chartView, setChartView] = useState<'tous' | 'technique' | 'application'>('tous');
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["LLM", "CNN", "RL", "XAI", "AGI"]);

  const toggleAIType = (type: string) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length > 1) {  // Garder au moins un type sélectionné
        setSelectedTypes(selectedTypes.filter(t => t !== type));
      }
    } else {
      setSelectedTypes([...selectedTypes, type]);
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
      explicabilité: { label: "Explicabilité" },
      multimodalité: { label: "Multimodalité" }
    };
  } else if (chartView === 'technique') {
    dimensions = {
      rapidité: { label: "Rapidité" },
      coût: { label: "Coût calcul" },
      explicabilité: { label: "Explicabilité" },
      généralisation: { label: "Généralisation" }
    };
  } else if (chartView === 'application') {
    dimensions = {
      langage: { label: "Langage" },
      vision: { label: "Vision" },
      raisonnement: { label: "Raisonnement" },
      multimodalité: { label: "Multimodalité" },
      adaptation: { label: "Adaptation" }
    };
  }

  // Déterminer les couleurs pour chaque type d'IA
  const typeColors: Record<string, string> = {
    "LLM": "#8b5cf6", // Violet
    "CNN": "#0ea5e9", // Bleu
    "RL": "#f97316",  // Orange
    "XAI": "#10b981", // Vert
    "AGI": "#ef4444"  // Rouge
  };

  return (
    <div className="w-full h-[500px] mt-4">
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
          >
            {item.icon}
            <span className="ml-1">{item.type}</span>
          </Button>
        ))}
      </div>

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
            
            {filteredData.map((entry) => (
              <Radar
                key={entry.type}
                name={entry.type}
                dataKey={Object.keys(dimensions)[0]}
                stroke={typeColors[entry.type]}
                fill={typeColors[entry.type]}
                fillOpacity={0.4}
              />
            ))}
            
            {Object.keys(dimensions).map((dimension, index) => (
              <Radar
                key={dimension}
                name={dimensions[dimension].label}
                dataKey={dimension}
                stroke={typeColors[filteredData[0]?.type || "LLM"]}
                fill={typeColors[filteredData[0]?.type || "LLM"]}
                fillOpacity={0}
                dot={true}
              />
            ))}
            
            <ChartTooltip 
              content={
                <ChartTooltipContent 
                  formatValue={(value, name, props) => {
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
      
      <div className="mt-6 text-sm text-muted-foreground text-center">
        <p>Score de 0 à 100 pour chaque dimension. Survolez le graphique pour plus de détails.</p>
      </div>
    </div>
  );
};

export default AICapabilitiesChart;
