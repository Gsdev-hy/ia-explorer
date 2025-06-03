
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import LessonSection from '@/components/courses/LessonSection';
import ZoomOn from '@/components/courses/ZoomOn';
import CodeExample from '@/components/courses/CodeExample';
import CourseConclusion from '@/components/courses/CourseConclusion';
import DidYouKnow from '@/components/courses/DidYouKnow';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';
import StatsGrid from '@/components/courses/StatsGrid';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Target, 
  MessageSquare, 
  Lightbulb, 
  Zap, 
  Settings,
  CheckCircle2,
  TrendingUp,
  Users,
  Rocket
} from 'lucide-react';

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

  const statsData = [
    { value: "70%", description: "d'amélioration moyenne après 3 itérations" },
    { value: "5-10", description: "tests recommandés pour un prompt optimal" },
    { value: "2x", description: "gain de temps après optimisation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Hero
        title="Maîtriser les Prompts"
        subtitle="Guide Complet du Prompt Engineering"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
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

        <DidYouKnow items={didYouKnowItems} />

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
              Pour maîtriser le{' '}
              <TechnicalTooltip 
                term="Prompt Engineering"
                definition="Art de formuler des instructions optimales pour obtenir les meilleurs résultats d'une IA"
              >
                prompt engineering
              </TechnicalTooltip>, il faut d'abord comprendre comment "pensent" les modèles de langage.
            </p>
            
            <AnalogyBox
              title="Analogie : Le traducteur expert"
              content="Imaginez un traducteur polyglotte qui connaît des millions de textes par cœur. Plus vous lui donnez de contexte précis, plus sa traduction sera fidèle à vos attentes. C'est exactement ainsi que fonctionne un modèle de langage IA."
              variant="info"
            />

            <p>
              Les{' '}
              <TechnicalTooltip 
                term="LLM (Large Language Models)"
                definition="Modèles de langage de grande taille entraînés sur d'énormes corpus de texte"
              >
                LLM
              </TechnicalTooltip>{' '}
              prédisent le mot suivant le plus probable en se basant sur le contexte fourni. 
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

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                3. Les contraintes créatives
              </h4>
              <p className="mb-3">Paradoxalement, les contraintes stimulent la créativité et améliorent la précision.</p>
              
              <AnalogyBox
                title="Principe des contraintes"
                content="Comme un sculpteur qui révèle une statue en retirant le superflu du marbre, les contraintes dans un prompt aident l'IA à 'sculpter' une réponse précise en éliminant les possibilités non pertinentes."
                variant="tip"
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

            <div>
              <h4 className="font-semibold mb-3">Temperature et Top-p : Contrôler la créativité</h4>
              <p className="mb-3">
                Apprenez à ajuster ces paramètres pour contrôler le degré de créativité de l'IA.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <h5 className="font-medium text-blue-800 mb-2">Temperature : 0.1-0.3</h5>
                  <p className="text-sm text-blue-700">Réponses précises et cohérentes. Idéal pour l'analyse et les faits.</p>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
                  <h5 className="font-medium text-green-800 mb-2">Temperature : 0.5-0.7</h5>
                  <p className="text-sm text-green-700">Équilibre entre créativité et cohérence. Parfait pour la plupart des tâches.</p>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-purple-50 to-violet-50">
                  <h5 className="font-medium text-purple-800 mb-2">Temperature : 0.8-1.0</h5>
                  <p className="text-sm text-purple-700">Maximum de créativité. Idéal pour le brainstorming et l'art.</p>
                </Card>
              </div>
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
                  <li>• Négations complexes</li>
                  <li>• Jargon technique non expliqué</li>
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
                  <li>• Exemples concrets</li>
                  <li>• Langage positif et direct</li>
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
              Le{' '}
              <TechnicalTooltip 
                term="Prompt Engineering"
                definition="Processus itératif d'amélioration continue des instructions données à l'IA"
              >
                prompt engineering
              </TechnicalTooltip>{' '}
              est un processus itératif. Voici comment optimiser vos prompts :
            </p>
            
            <AnalogyBox
              title="Méthode d'optimisation"
              content="Comme un chef qui goûte et ajuste sa recette, testez votre prompt initial, analysez les lacunes, ajustez progressivement, testez à nouveau, et répétez jusqu'à satisfaction. Chaque itération vous rapproche du résultat parfait."
              variant="tip"
            />

            <StatsGrid stats={statsData} />

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Méthode A/B Testing pour prompts
              </h4>
              <p className="mb-3">Testez plusieurs versions de vos prompts pour identifier la plus efficace :</p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-4 rounded-lg">
                <ol className="space-y-2 text-sm">
                  <li><strong>1. Version A</strong> - Votre prompt initial</li>
                  <li><strong>2. Version B</strong> - Variante avec modification ciblée</li>
                  <li><strong>3. Test</strong> - Même tâche, conditions identiques</li>
                  <li><strong>4. Analyse</strong> - Comparez qualité, pertinence, temps</li>
                  <li><strong>5. Itération</strong> - Gardez le meilleur, testez une nouvelle variante</li>
                </ol>
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Prompts sectoriels et spécialisés"
          icon={<Users className="h-6 w-6" />}
          delay={5}
        >
          <div className="space-y-6">
            <p>Découvrez des exemples de prompts optimisés pour différents secteurs d'activité :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">🏥 Secteur médical</h4>
                <CodeExample
                  title="Prompt médical structuré"
                  language="Prompt"
                  code={`Tu es un médecin généraliste expérimenté. 
Un patient présente les symptômes suivants : [symptômes].

Analyse selon cette structure :
1. Hypothèses diagnostiques probables (3 max)
2. Examens complémentaires à prescrire
3. Questions d'anamnèse importantes
4. Signaux d'alarme à surveiller

Important : Recommande toujours une consultation médicale réelle.`}
                  explanation="Structure claire avec garde-fous éthiques pour le domaine médical."
                />
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-green-600">💼 Secteur business</h4>
                <CodeExample
                  title="Prompt d'analyse business"
                  language="Prompt"
                  code={`Tu es un consultant en stratégie senior chez McKinsey.
Analyse cette situation business : [contexte entreprise].

Framework d'analyse :
1. Diagnostic SWOT
2. Analyse des 5 forces de Porter
3. Recommandations stratégiques (3 priorités)
4. Plan d'implémentation (90 jours)
5. KPIs de suivi

Format : Executive summary + détail par section.`}
                  explanation="Utilise des frameworks reconnus pour structurer l'analyse business."
                />
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Outils et plateformes pour le prompt engineering"
          icon={<Rocket className="h-6 w-6" />}
          delay={6}
        >
          <div className="space-y-4">
            <p>Découvrez les meilleurs outils pour développer et tester vos prompts :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-primary mb-2">🧪 Outils de test</h5>
                <ul className="text-sm space-y-1">
                  <li>• PromptPerfect</li>
                  <li>• Prompt.dev</li>
                  <li>• AI Playground</li>
                  <li>• LangChain Hub</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-primary mb-2">📚 Librairies</h5>
                <ul className="text-sm space-y-1">
                  <li>• Awesome Prompts</li>
                  <li>• PromptBase</li>
                  <li>• FlowGPT</li>
                  <li>• Prompt Engineering Guide</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-primary mb-2">⚡ Optimisation</h5>
                <ul className="text-sm space-y-1">
                  <li>• Auto-optimizers</li>
                  <li>• A/B testing tools</li>
                  <li>• Performance analytics</li>
                  <li>• Cost calculators</li>
                </ul>
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
            "Adapter vos prompts selon le contexte et l'objectif",
            "Maîtriser les paramètres de créativité (temperature, top-p)",
            "Appliquer des frameworks sectoriels spécialisés"
          ]}
          nextSteps={[
            "Pratiquez avec différents types de tâches",
            "Explorez les prompts spécialisés pour votre domaine",
            "Suivez le cours 'IA et Créativité' pour approfondir",
            "Rejoignez des communautés de prompt engineers",
            "Testez avec différents modèles d'IA",
            "Créez votre propre bibliothèque de prompts",
            "Expérimentez avec les outils d'optimisation automatique"
          ]}
        />
      </div>
    </div>
  );
};

export default PromptEngineering;
