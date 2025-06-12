
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Thermometer, 
  Filter, 
  Repeat,
  Lightbulb,
  Settings,
  Sparkles,
  Play
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import InfoTooltip from '@/components/courses/InfoTooltip';
import InteractiveExample from '@/components/courses/InteractiveExample';
import { useState } from 'react';

interface ParameterCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  formatValue: (value: number) => string;
  tooltipContent: string;
  lowLabel: string;
  highLabel: string;
}

const ParameterCard: React.FC<ParameterCardProps> = ({
  icon,
  title,
  description,
  min,
  max,
  step,
  defaultValue,
  formatValue,
  tooltipContent,
  lowLabel,
  highLabel
}) => {
  const [value, setValue] = React.useState([defaultValue]);

  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-lg">
          {icon}
          <div className="flex items-center gap-2">
            {title}
            <InfoTooltip content={tooltipContent} />
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{lowLabel}</span>
            <span className="font-medium">{formatValue(value[0])}</span>
            <span>{highLabel}</span>
          </div>
          <Slider
            defaultValue={value}
            max={max}
            min={min}
            step={step}
            onValueChange={setValue}
            className="cursor-pointer"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full bg-muted/50 p-2 rounded text-xs">
          <strong>Utilisation recommandée :</strong> {
            title === "Temperature" ? (
              value[0] < 0.3 ? "Tâches factuelles, code" : 
              value[0] < 0.7 ? "Équilibre créativité/précision" : 
              "Contenu créatif, brainstorming"
            ) : title === "Top-p" ? (
              value[0] < 0.6 ? "Réponses très déterministes" :
              value[0] < 0.9 ? "Usage général" :
              "Maximum de diversité"
            ) : (
              value[0] < 1.1 ? "Répétitions naturelles autorisées" :
              value[0] < 1.5 ? "Évite les redondances" :
              "Forte diversification lexicale"
            )
          }
        </div>
      </CardFooter>
    </Card>
  );
};

const InferenceParametersSection = () => {
  const inferenceExamplePrompt = `// Exemple de configuration d'inférence avec OpenAI API
await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Écris un haiku sur l'IA" }],
  temperature: 0.7,
  top_p: 0.9,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  max_tokens: 150,
  stop: ["\n\n"]
});`;

  return (
    <LessonSection
      title="III. Hyperparamètres d'Inférence"
      icon={<Settings className="h-6 w-6" />}
      delay={2}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
          <p className="text-lg leading-relaxed text-green-800 dark:text-green-200">
            Les paramètres d'inférence sont les seuls que l'utilisateur peut contrôler directement lors de l'utilisation du modèle.
            Ils influencent la façon dont le modèle génère ses réponses sans modifier ses connaissances ou capacités sous-jacentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ParameterCard 
            icon={<Thermometer className="h-5 w-5 text-red-500" />}
            title="Temperature"
            description="Contrôle l'aléatoire dans la sélection des tokens"
            min={0}
            max={2}
            step={0.1}
            defaultValue={0.7}
            formatValue={(v) => v.toFixed(1)}
            tooltipContent="Plus la température est élevée, plus les réponses sont créatives mais potentiellement moins précises."
            lowLabel="Prévisible (0)"
            highLabel="Aléatoire (2)"
          />
          
          <ParameterCard 
            icon={<Filter className="h-5 w-5 text-blue-500" />}
            title="Top-p (Nucleus)"
            description="Filtrage par probabilité cumulée"
            min={0.1}
            max={1}
            step={0.05}
            defaultValue={0.8}
            formatValue={(v) => v.toFixed(2)}
            tooltipContent="Ne considère que les tokens dont la probabilité cumulée atteint p. Une valeur plus basse limite le choix aux tokens les plus probables."
            lowLabel="Restreint (0.1)"
            highLabel="Diversifié (1)"
          />
          
          <ParameterCard 
            icon={<Repeat className="h-5 w-5 text-purple-500" />}
            title="Repetition Penalty"
            description="Pénalise les tokens déjà utilisés"
            min={1}
            max={2}
            step={0.1}
            defaultValue={1.1}
            formatValue={(v) => v.toFixed(1)}
            tooltipContent="Une valeur élevée évite les répétitions mais peut rendre le texte moins naturel."
            lowLabel="Naturel (1)"
            highLabel="Anti-répétition (2)"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                Impacts de la temperature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Badge variant="outline" className="mb-2 bg-white dark:bg-gray-800">Temperature = 0.2</Badge>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    "L'intelligence artificielle est un domaine de l'informatique qui vise à créer des machines capables de simuler l'intelligence humaine. Les applications incluent la reconnaissance d'images, le traitement du langage naturel et la prise de décision automatisée."
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Badge variant="outline" className="mb-2 bg-white dark:bg-gray-800">Temperature = 0.7</Badge>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    "L'intelligence artificielle révolutionne notre façon d'interagir avec la technologie. Comme un explorateur digital dans l'océan des données, elle navigue entre algorithmes et intuitions, apprenant constamment de ses expériences. Cette symbiose entre créativité artificielle et ingéniosité humaine ouvre des horizons fascinants."
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
                  <Badge variant="outline" className="mb-2 bg-white dark:bg-gray-800">Temperature = 1.5</Badge>
                  <p className="text-sm text-pink-800 dark:text-pink-200">
                    "L'intelligence artificielle danse sur les frontières du possible ! Orchestre numérique jouant des symphonies d'algorithmes, elle rêve en pixels et respire en données. Parfois oracle moderne, parfois poète binaire, elle métamorphose nos interactions dans une valse technologique où l'imprévisible devient créateur d'émerveillement ✨"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                Conseils pratiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 dark:text-blue-300">Utilisez temperature = 0</h4>
                    <p className="text-sm text-muted-foreground">Pour du code, des faits précis, des traductions exactes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 dark:text-green-300">Combinez temperature et top-p</h4>
                    <p className="text-sm text-muted-foreground">Pour un meilleur équilibre créativité/cohérence (T=0.7, top-p=0.8)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-700 dark:text-amber-300">Ajustez le repetition penalty</h4>
                    <p className="text-sm text-muted-foreground">Pour les textes longs (1.1-1.2 évite les boucles de répétition)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 dark:text-purple-300">Testez plusieurs configurations</h4>
                    <p className="text-sm text-muted-foreground">Créez des presets adaptés à différents types de contenus</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <InteractiveExample 
          title="Impact des paramètres d'inférence"
          description="Voyez comment les différents réglages modifient la réponse à un même prompt"
          steps={[
            {
              title: "Prompt initial",
              description: "\"Explique-moi ce qu'est l'intelligence artificielle\"",
              result: "Le prompt est envoyé au modèle avec différents paramètres."
            },
            {
              title: "Temperature basse (0.2)",
              description: "Le modèle privilégie les réponses les plus probables",
              result: "Réponse factuelle, précise et structurée. Colle aux définitions standard."
            },
            {
              title: "Temperature moyenne (0.7)",
              description: "Le modèle équilibre créativité et pertinence",
              result: "Réponse avec plus d'analogies et de nuances, tout en restant informative."
            },
            {
              title: "Temperature haute (1.5)",
              description: "Le modèle favorise l'originalité et la diversité",
              result: "Réponse créative, métaphorique et potentiellement moins conventionnelle."
            }
          ]}
          finalMessage="La température est le paramètre le plus impactant sur le style de réponse. Pour des applications critiques, utilisez des températures basses."
        />
      </div>
    </LessonSection>
  );
};

export default InferenceParametersSection;
