
import React from 'react';
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
  ResponsiveContainer
} from 'recharts';
import { MessageSquare, EyeIcon, Bot, BarChart3 } from 'lucide-react';

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

const AICapabilitiesChart: React.FC = () => {
  return (
    <div className="w-full h-96">
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

export default AICapabilitiesChart;
