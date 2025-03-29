
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, MessageSquare, Bot, BarChart3, EyeIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
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

const radarData = [
  {
    type: "LLM",
    langage: 95,
    raisonnement: 80,
    vision: 30,
    adaptation: 75,
    généralisation: 70,
    coût: 85,
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
    icon: <BarChart3 className="w-4 h-4" />
  }
];

interface AINodeProps {
  icon: React.ReactNode;
  title: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  onHover: () => void;
}

const AINode: React.FC<AINodeProps> = ({ icon, title, x, y, color, delay, onHover }) => {
  return (
    <motion.div 
      className="absolute cursor-pointer"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay * 0.2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={onHover}
    >
      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${color} shadow-lg`}>
        {icon}
      </div>
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium">
        {title}
      </div>
    </motion.div>
  );
};

const AICapabilitiesChart: React.FC = () => {
  return (
    <div className="w-full h-96 mt-8">
      <ChartContainer
        className="w-full"
        config={{
          langage: { label: "Langage" },
          raisonnement: { label: "Raisonnement" },
          vision: { label: "Vision" },
          adaptation: { label: "Adaptation" },
          généralisation: { label: "Généralisation" },
          coût: { label: "Coût calcul" },
        }}
      >
        <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 30, left: 20 }}>
          <PolarGrid stroke="#64748b40" />
          <PolarAngleAxis dataKey="type" tick={{ fill: "var(--foreground)", fontSize: 12 }} />
          <PolarRadiusAxis domain={[0, 100]} tick={{ fill: "var(--muted-foreground)" }} />
          
          <Radar name="LLM" dataKey="langage" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
          <Radar name="CNN" dataKey="vision" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.5} />
          <Radar name="RL" dataKey="adaptation" stroke="#f97316" fill="#f97316" fillOpacity={0.5} />
          <Radar name="XAI" dataKey="raisonnement" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
          
          <ChartTooltip content={<ChartTooltipContent />} />
        </RadarChart>
      </ChartContainer>
    </div>
  );
};

interface AITypeExplanationProps {
  type: string;
  description: string;
}

const AITypesVisualization: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<string>("LLM");
  
  const explanations: Record<string, AITypeExplanationProps> = {
    "LLM": {
      type: "Modèles de Langage (LLM)",
      description: "Ces modèles traitent et génèrent du texte en se basant sur d'énormes corpus de données textuelles. Ils excellent dans la compréhension contextuelle et peuvent générer du contenu cohérent, traduire des langues, résumer des textes et répondre à des questions."
    },
    "CNN": {
      type: "Réseaux de Neurones Convolutifs (CNN)",
      description: "Spécialisés dans le traitement d'images, les CNN utilisent des filtres qui scannent les données visuelles pour identifier des motifs. Ils sont essentiels pour la reconnaissance d'objets, la classification d'images et même l'analyse médicale."
    },
    "RL": {
      type: "Apprentissage par Renforcement (RL)",
      description: "Ces systèmes apprennent par essai-erreur via un système de récompenses. Particulièrement efficaces pour les jeux, la robotique et les systèmes de contrôle, ils développent des stratégies optimales sans supervision directe."
    },
    "XAI": {
      type: "IA Explicable (XAI)",
      description: "L'IA explicable vise à rendre compréhensibles les décisions des systèmes complexes. Ces approches permettent aux humains de comprendre pourquoi une IA a pris une décision particulière, essentiel dans les domaines comme la médecine ou la finance."
    },
    "AGI": {
      type: "Intelligence Artificielle Générale (AGI)",
      description: "L'AGI représente des systèmes capables de comprendre, d'apprendre et d'appliquer des connaissances à travers différents domaines au niveau humain ou supérieur. Elle reste un objectif théorique poursuivi par la recherche."
    }
  };

  return (
    <div className="w-full mt-16">
      <div className="relative w-full h-[300px] mb-16 border rounded-xl bg-secondary/10 overflow-hidden">
        <AINode 
          icon={<MessageSquare className="text-white" />} 
          title="LLM" 
          x="20%" 
          y="40%" 
          color="bg-primary" 
          delay={0}
          onHover={() => setSelectedType("LLM")}
        />
        <AINode 
          icon={<EyeIcon className="text-white" />} 
          title="CNN" 
          x="40%" 
          y="20%" 
          color="bg-blue-500" 
          delay={1}
          onHover={() => setSelectedType("CNN")}
        />
        <AINode 
          icon={<Bot className="text-white" />} 
          title="RL" 
          x="60%" 
          y="40%" 
          color="bg-orange-500" 
          delay={2}
          onHover={() => setSelectedType("RL")}
        />
        <AINode 
          icon={<BarChart3 className="text-white" />} 
          title="XAI" 
          x="40%" 
          y="60%" 
          color="bg-green-500" 
          delay={3} 
          onHover={() => setSelectedType("XAI")}
        />
        <AINode 
          icon={<Brain className="text-white" />} 
          title="AGI" 
          x="80%" 
          y="40%" 
          color="bg-purple-600" 
          delay={4}
          onHover={() => setSelectedType("AGI")}
        />
        
        {/* Lignes de connexion */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <motion.line 
            x1="20%" y1="40%" x2="40%" y2="20%" 
            stroke="var(--border)" strokeWidth="1" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <motion.line 
            x1="40%" y1="20%" x2="60%" y2="40%" 
            stroke="var(--border)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
          <motion.line 
            x1="60%" y1="40%" x2="40%" y2="60%" 
            stroke="var(--border)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 1.4, duration: 1 }}
          />
          <motion.line 
            x1="40%" y1="60%" x2="20%" y2="40%" 
            stroke="var(--border)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 1.6, duration: 1 }}
          />
          <motion.line 
            x1="60%" y1="40%" x2="80%" y2="40%" 
            stroke="var(--border)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 1.8, duration: 1 }}
          />
        </svg>
      </div>
      
      <motion.div 
        className="p-6 mb-8 border rounded-xl bg-secondary/5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={selectedType}
      >
        <h3 className="text-xl font-semibold mb-2">{explanations[selectedType]?.type}</h3>
        <p className="text-muted-foreground">{explanations[selectedType]?.description}</p>
      </motion.div>
      
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
