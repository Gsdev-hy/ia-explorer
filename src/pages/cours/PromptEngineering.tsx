
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import LessonSection from '@/components/courses/LessonSection';
import ZoomOn from '@/components/courses/ZoomOn';
import CodeExample from '@/components/courses/CodeExample';
import CourseConclusion from '@/components/courses/CourseConclusion';
import Illustration from '@/components/courses/Illustration';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Target, 
  MessageSquare, 
  Lightbulb, 
  Zap, 
  Settings,
  BookOpen,
  Code,
  Users,
  CheckCircle2,
  Info,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const PromptEngineering = () => {
  const didYouKnowItems = [
    {
      title: "L'origine du terme",
      content: "Le terme 'prompt engineering' a émergé avec GPT-3 en 2020, quand les développeurs ont réalisé que la façon de formuler les questions influençait drastiquement la qualité des réponses."
    },
    {
      title: "Économie cognitive",
      content: "Un bon prompt peut économiser jusqu'à 80% du temps de traitement et améliorer la précision des réponses de 60% selon des études récentes."
    },
    {
      title: "Métier d'avenir",
      content: "Le 'Prompt Engineer' est devenu un métier à part entière avec des salaires pouvant atteindre 300k$ par an dans la Silicon Valley."
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        <Hero
          title="Maîtriser les Prompts"
          subtitle="Guide Complet du Prompt Engineering"
        />

        <div className="section-container">
          <CourseHeader
            title="Maîtriser les Prompts : Guide Complet du Prompt Engineering"
            subtitle="Apprenez l'art et la science de communiquer efficacement avec l'IA"
            author="Geoffroy Streit"
            authorDescription="Expert en IA et fondateur d'IA Explorer"
            duration="3-4 heures"
            level="Débutant à Intermédiaire"
            audience="Professionnels, étudiants, curieux"
            tags={["Prompt Engineering", "Communication IA", "Pratique", "Interne"]}
          />

          {/* Section Le saviez-vous ? */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Le saviez-vous ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {didYouKnowItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <CourseModule
            title="Introduction au Prompt Engineering"
            description="Découvrez les fondements de cette discipline émergente"
            modules={[
              {
                icon: <Brain className="h-5 w-5" />,
                title: "Qu'est-ce qu'un prompt ?",
                items: [
                  "Définition et rôle dans l'IA",
                  "Analogie avec les instructions culinaires",
                  "Impact sur la qualité des réponses"
                ]
              },
              {
                icon: <Target className="h-5 w-5" />,
                title: "Pourquoi c'est important ?",
                items: [
                  "Optimisation des résultats",
                  "Gain de temps et d'efficacité",
                  "Réduction des erreurs"
                ]
              },
              {
                icon: <MessageSquare className="h-5 w-5" />,
                title: "Types de prompts",
                items: [
                  "Prompts informatifs",
                  "Prompts créatifs",
                  "Prompts analytiques"
                ]
              }
            ]}
          />

          <LessonSection
            title="Comprendre le fonctionnement des modèles de langage"
            icon={<Brain className="h-6 w-6" />}
            delay={1}
          >
            <div className="space-y-4">
              <p>
                Pour maîtriser le <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted decoration-primary">
                    prompt engineering
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Art de formuler des instructions optimales pour obtenir les meilleurs résultats d'une IA</p>
                  </TooltipContent>
                </Tooltip>, il faut d'abord comprendre comment "pensent" les modèles de langage.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800 mb-1">Analogie : Le traducteur expert</h4>
                    <p className="text-blue-700 text-sm">
                      Imaginez un traducteur polyglotte qui connaît des millions de textes par cœur. Plus vous lui donnez de contexte précis, 
                      plus sa traduction sera fidèle à vos attentes. C'est exactement ainsi que fonctionne un modèle de langage IA.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Les <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted decoration-primary">
                    LLM (Large Language Models)
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Modèles de langage de grande taille entraînés sur d'énormes corpus de texte</p>
                  </TooltipContent>
                </Tooltip> prédisent le mot suivant le plus probable en se basant sur le contexte fourni. 
                Cette compréhension est cruciale pour optimiser vos prompts.
              </p>
            </div>
          </LessonSection>

          <ZoomOn title="La structure STAR pour des prompts efficaces">
            <div className="space-y-4">
              <p className="mb-4">La méthode STAR vous aide à structurer vos prompts de manière optimale :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    <strong>S</strong>ituation
                  </Badge>
                  <p className="text-sm">Définissez le contexte et l'environnement</p>
                  
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                    <strong>T</strong>âche
                  </Badge>
                  <p className="text-sm">Précisez ce que vous voulez accomplir</p>
                </div>
                <div className="space-y-3">
                  <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                    <strong>A</strong>ction
                  </Badge>
                  <p className="text-sm">Décrivez les actions à entreprendre</p>
                  
                  <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                    <strong>R</strong>ésultat
                  </Badge>
                  <p className="text-sm">Spécifiez le format souhaité</p>
                </div>
              </div>
            </div>
          </ZoomOn>

          <LessonSection
            title="Les techniques fondamentales"
            icon={<Lightbulb className="h-6 w-6" />}
            delay={2}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  1. La spécificité avant tout
                </h4>
                <p className="mb-3">Plus votre prompt est spécifique, meilleur sera le résultat. Évitez les formulations vagues.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-red-800 mb-2">❌ Prompt vague</h5>
                      <p className="text-sm text-red-700">"Écris un article sur l'IA"</p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-green-800 mb-2">✅ Prompt spécifique</h5>
                      <p className="text-sm text-green-700">"Écris un article de 800 mots sur l'impact de l'IA dans l'éducation, destiné aux enseignants, avec 3 exemples concrets et une conclusion sur les défis éthiques"</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  2. Le rôle et le contexte
                </h4>
                <p className="mb-3">Donnez un rôle à l'IA pour orienter ses réponses dans la bonne direction.</p>
                
                <CodeExample
                  title="Exemple de prompt avec rôle"
                  language="Prompt"
                  code={`Tu es un expert en cybersécurité avec 15 ans d'expérience.
Explique à un dirigeant d'entreprise (non-technique) les 5 principales menaces 
de sécurité liées à l'IA, en utilisant des analogies simples et en proposant 
des solutions concrètes pour chaque menace.

Format : 
- Titre de la menace
- Analogie explicative
- Impact potentiel
- Solution recommandée`}
                  explanation="Ce prompt définit clairement le rôle, l'audience, le format et les attentes."
                />
              </div>
            </div>
          </LessonSection>

          <LessonSection
            title="Techniques avancées"
            icon={<Zap className="h-6 w-6" />}
            delay={3}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Chain of Thought (Chaîne de raisonnement)</h4>
                <p className="mb-3">
                  Demandez à l'IA d'expliquer son raisonnement étape par étape. Cette technique améliore 
                  considérablement la qualité des réponses pour les tâches complexes.
                </p>
                
                <CodeExample
                  title="Exemple de Chain of Thought"
                  language="Prompt"
                  code={`Problème : Une entreprise veut réduire ses coûts énergétiques de 30% en 2 ans.

Résous ce problème étape par étape :
1. Analyse d'abord les principales sources de consommation énergétique
2. Identifie les leviers d'action possibles
3. Estime l'impact de chaque levier
4. Propose un plan d'action priorisé
5. Calcule le ROI de chaque action

Montre ton raisonnement pour chaque étape.`}
                  explanation="L'IA va détailler son processus de réflexion, rendant la solution plus fiable et compréhensible."
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Few-Shot Learning (Apprentissage par exemples)</h4>
                <p className="mb-3">
                  Fournissez des exemples pour guider l'IA vers le style ou format souhaité.
                </p>
                
                <CodeExample
                  title="Exemple de Few-Shot Learning"
                  language="Prompt"
                  code={`Transforme ces descriptions techniques en langage simple pour des clients :

Exemple 1:
Technique : "Algorithme de machine learning supervisé avec réseau de neurones profonds"
Simple : "Intelligence artificielle qui apprend à partir d'exemples pour faire des prédictions"

Exemple 2:
Technique : "API REST avec authentification OAuth 2.0"
Simple : "Pont numérique sécurisé pour connecter différentes applications"

À ton tour :
Technique : "Base de données NoSQL distribuée avec réplication multi-maître"`}
                  explanation="Les exemples montrent le style et le niveau de simplification attendu."
                />
              </div>
            </div>
          </LessonSection>

          <ZoomOn title="Les erreurs courantes à éviter">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h5 className="font-medium text-red-600">❌ À éviter</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• Prompts trop longs et confus</li>
                    <li>• Instructions contradictoires</li>
                    <li>• Manque de contexte</li>
                    <li>• Attentes irréalistes</li>
                    <li>• Pas de format spécifié</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium text-green-600">✅ Bonnes pratiques</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• Structure claire et logique</li>
                    <li>• Une instruction principale</li>
                    <li>• Contexte suffisant</li>
                    <li>• Objectifs réalisables</li>
                    <li>• Format de sortie défini</li>
                  </ul>
                </div>
              </div>
            </div>
          </ZoomOn>

          <LessonSection
            title="Optimisation et itération"
            icon={<Settings className="h-6 w-6" />}
            delay={4}
          >
            <div className="space-y-4">
              <p>
                Le <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted decoration-primary">
                    prompt engineering
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Processus itératif d'amélioration continue des instructions données à l'IA</p>
                  </TooltipContent>
                </Tooltip> est un processus itératif. Voici comment optimiser vos prompts :
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-amber-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-800 mb-1">Méthode d'optimisation</h4>
                    <ol className="text-amber-700 text-sm space-y-1 list-decimal list-inside">
                      <li>Testez votre prompt initial</li>
                      <li>Analysez les lacunes dans la réponse</li>
                      <li>Ajustez progressivement</li>
                      <li>Testez à nouveau</li>
                      <li>Répétez jusqu'à satisfaction</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <p className="text-sm text-muted-foreground">d'amélioration moyenne après 3 itérations</p>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">5-10</div>
                  <p className="text-sm text-muted-foreground">tests recommandés pour un prompt optimal</p>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">2x</div>
                  <p className="text-sm text-muted-foreground">gain de temps après optimisation</p>
                </Card>
              </div>
            </div>
          </LessonSection>

          <CourseConclusion
            title="Maîtrisez l'art du prompt engineering"
            description="Félicitations ! Vous avez découvert les fondements du prompt engineering. Cette compétence vous ouvrira de nouvelles possibilités avec l'IA."
            learningPoints={[
              "Comprendre le fonctionnement des modèles de langage",
              "Structurer des prompts efficaces avec la méthode STAR",
              "Utiliser les techniques avancées (Chain of Thought, Few-Shot)",
              "Éviter les erreurs courantes et optimiser itérativement",
              "Adapter vos prompts selon le contexte et l'objectif"
            ]}
            nextSteps={[
              "Pratiquez avec différents types de tâches",
              "Explorez les prompts spécialisés pour votre domaine",
              "Suivez le cours 'IA et Créativité' pour approfondir",
              "Rejoignez des communautés de prompt engineers",
              "Testez avec différents modèles d'IA"
            ]}
          />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default PromptEngineering;
