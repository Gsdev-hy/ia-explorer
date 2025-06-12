
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Timer, 
  Target,
  TrendingUp,
  Database,
  Settings2
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import CodeExample from '@/components/courses/CodeExample';

const TrainingParametersSection = () => {
  const trainingConfigExample = `# Configuration d'entraînement typique pour un LLM
{
  "learning_rate": 1e-4,
  "batch_size": 2048,
  "optimizer": "AdamW",
  "weight_decay": 0.01,
  "warmup_steps": 2000,
  "max_steps": 100000,
  "gradient_clipping": 1.0,
  "scheduler": "cosine_with_warmup"
}

# Calcul du batch size effectif
effective_batch_size =  
  batch_size_per_device 
  * gradient_accumulation_steps 
  * num_gpus`;

  const trainingParamsData = [
    {
      param: "Learning Rate",
      description: "Vitesse d'ajustement des poids durant l'apprentissage",
      range: "1e-4 à 1e-6",
      impact: "Trop élevé → divergence; trop faible → stagnation",
      icon: <Zap className="h-5 w-5 text-yellow-500" />
    },
    {
      param: "Batch Size",
      description: "Nombre d'exemples traités par lot",
      range: "512 à 1M+ (megabatch)",
      impact: "↑ Stabilité, ↓ Variance du gradient, ↑ Mémoire GPU requise",
      icon: <Database className="h-5 w-5 text-blue-500" />
    },
    {
      param: "Optimiseur",
      description: "Algorithme de mise à jour des poids",
      range: "AdamW (préféré pour LLM), Adam, SGD",
      impact: "Affecte la vitesse et la qualité de convergence",
      icon: <Target className="h-5 w-5 text-purple-500" />
    },
    {
      param: "Weight Decay",
      description: "Pénalisation des grands poids (régularisation)",
      range: "0.01 à 0.1",
      impact: "↑ Généralisation, ↓ Surapprentissage",
      icon: <TrendingUp className="h-5 w-5 text-green-500" />
    },
    {
      param: "Warm-up Steps",
      description: "Période d'augmentation progressive du learning rate",
      range: "1% à 10% des steps totaux",
      impact: "Stabilise les premières phases d'apprentissage",
      icon: <Timer className="h-5 w-5 text-red-500" />
    }
  ];

  return (
    <LessonSection
      title="II. Hyperparamètres d'Entraînement"
      icon={<Settings2 className="h-6 w-6" />}
      delay={1}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
          <p className="text-lg leading-relaxed text-amber-800 dark:text-amber-200">
            Les hyperparamètres d'entraînement sont des variables qui contrôlent le processus d'apprentissage du modèle. 
            Contrairement aux paramètres d'architecture, ils sont fixés avant l'entraînement mais n'affectent pas 
            directement l'utilisation du modèle après déploiement.
          </p>
        </div>

        <div className="space-y-4">
          {trainingParamsData.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {item.icon}
                    <TechnicalTooltip 
                      term={item.param}
                      definition={item.description}
                    >
                      {item.param}
                    </TechnicalTooltip>
                  </CardTitle>
                  <Badge variant="outline" className="text-xs font-normal">
                    {item.range}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded text-sm">
                    <strong>Impact :</strong> {item.impact}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Database className="h-5 w-5" /> 
              Données d'entraînement
            </h4>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-blue-700 dark:text-blue-300">Volume :</strong> 1-10 To de texte (web, livres, code, etc.)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-blue-700 dark:text-blue-300">Langues :</strong> Distribution linguistique (60-70% anglais typiquement)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-blue-700 dark:text-blue-300">Qualité :</strong> Textes filtrés, nettoyés, déduplication
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-blue-700 dark:text-blue-300">Date limite :</strong> Cutoff des données (ex: janvier 2023)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-blue-700 dark:text-blue-300">Spécialisation :</strong> Corpus spécifiques (médical, juridique, code)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-green-700 dark:text-green-300">
              <Zap className="h-5 w-5" /> 
              Infrastructure typique
            </h4>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-green-700 dark:text-green-300">Hardware :</strong> Clusters de centaines/milliers de GPU A100/H100
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-green-700 dark:text-green-300">Durée :</strong> Semaines à mois d'entraînement continu
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-green-700 dark:text-green-300">Coût :</strong> Plusieurs millions $ pour les grands modèles
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-green-700 dark:text-green-300">Système :</strong> Distributed training avec data parallelism
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-green-700 dark:text-green-300">Frameworks :</strong> PyTorch Distributed, DeepSpeed, Megatron
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <CodeExample
          title="Configuration typique d'entraînement"
          language="json"
          code={trainingConfigExample}
          explanation="Les hyperparamètres d'entraînement sont généralement définis dans un fichier de configuration qui sera utilisé par le framework d'entraînement."
        />
      </div>
    </LessonSection>
  );
};

export default TrainingParametersSection;
