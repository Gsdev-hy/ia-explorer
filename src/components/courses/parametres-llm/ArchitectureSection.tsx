
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Layers, 
  Brain,
  FileText,
  TrendingUp,
  TrendingDown,
  Info
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import StatsGrid from '@/components/courses/StatsGrid';

const ArchitectureSection = () => {
  const architectureStats = [
    { value: "175B", description: "paramètres dans GPT-3" },
    { value: "4096", description: "dimension des embeddings typique" },
    { value: "96", description: "couches dans les plus gros modèles" },
    { value: "128K", description: "tokens de contexte max (GPT-4 Turbo)" }
  ];

  const architectureData = [
    {
      param: "Nombre de paramètres",
      description: "Taille du modèle exprimée en milliards (7B, 70B, 175B)",
      impact: "↑ Capacité d'abstraction, ↓ Rapidité d'inférence",
      examples: "GPT-3: 175B, LLaMA-2-7B: 7B, PaLM-2: 540B",
      icon: <Brain className="h-5 w-5 text-blue-500" />
    },
    {
      param: "Architecture",
      description: "Type de Transformer utilisé",
      impact: "Détermine les tâches possibles et l'efficacité",
      examples: "GPT (decoder-only), BERT (encoder-only), T5 (encoder-decoder)",
      icon: <Settings className="h-5 w-5 text-purple-500" />
    },
    {
      param: "Nombre de couches",
      description: "Profondeur du réseau neuronal",
      impact: "↑ Complexité des motifs appris, ↑ Latence",
      examples: "GPT-3: 96 couches, LLaMA-7B: 32 couches",
      icon: <Layers className="h-5 w-5 text-green-500" />
    },
    {
      param: "Dimension des embeddings",
      description: "Taille des vecteurs représentant chaque token",
      impact: "↑ Finesse sémantique, ↑ Mémoire requise",
      examples: "GPT-3: 12288, LLaMA-7B: 4096, BERT-base: 768",
      icon: <FileText className="h-5 w-5 text-orange-500" />
    }
  ];

  return (
    <LessonSection
      title="I. Paramètres Fondamentaux d'Architecture"
      icon={<Settings className="h-6 w-6" />}
      delay={0}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
          <p className="text-lg leading-relaxed text-blue-800 dark:text-blue-200">
            L'architecture d'un LLM définit sa structure fondamentale et détermine ses capacités. 
            Ces paramètres sont fixés lors de la conception et ne peuvent pas être modifiés après l'entraînement.
          </p>
        </div>

        <StatsGrid stats={architectureStats} columns={4} />

        <div className="space-y-4">
          {architectureData.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  {item.icon}
                  <TechnicalTooltip 
                    term={item.param}
                    definition={item.description}
                  >
                    {item.param}
                  </TechnicalTooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      Impact
                    </Badge>
                    <span className="text-sm">{item.impact}</span>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Exemples concrets :
                    </p>
                    <p className="text-sm">{item.examples}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <TrendingUp className="h-5 w-5" />
                Avantages des gros modèles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• <strong>Capacités émergentes :</strong> Raisonnement complexe, créativité</li>
                <li>• <strong>Généralisation :</strong> Performance sur des tâches non vues</li>
                <li>• <strong>Compréhension nuancée :</strong> Subtilités linguistiques</li>
                <li>• <strong>Few-shot learning :</strong> Apprentissage avec peu d'exemples</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                <TrendingDown className="h-5 w-5" />
                Contraintes des gros modèles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-amber-600 dark:text-amber-400">
                <li>• <strong>Coût computationnel :</strong> GPU/TPU puissants requis</li>
                <li>• <strong>Latence élevée :</strong> Temps de réponse plus longs</li>
                <li>• <strong>Mémoire :</strong> RAM importante nécessaire</li>
                <li>• <strong>Énergie :</strong> Consommation électrique significative</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                💡 Conseil pratique : Comment choisir la taille ?
              </h4>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• <strong>7B-13B :</strong> Applications temps réel, chatbots simples</li>
                <li>• <strong>30B-70B :</strong> Équilibre performance/coût pour la plupart des usages</li>
                <li>• <strong>175B+ :</strong> Tâches complexes nécessitant le meilleur raisonnement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default ArchitectureSection;
