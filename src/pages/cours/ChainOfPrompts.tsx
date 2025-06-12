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
import InteractiveExample from '@/components/courses/InteractiveExample';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  Link, 
  Target, 
  Lightbulb, 
  Zap, 
  Settings,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Database,
  Code,
  BarChart3,
  ArrowRight,
  Workflow,
  GitBranch,
  Layers,
  Network,
  Cpu,
  Brain,
  Clock,
  DollarSign,
  Shield,
  Eye,
  Puzzle,
  Repeat,
  Filter,
  Users,
  Rocket
} from 'lucide-react';

const ChainOfPrompts = () => {
  const didYouKnowItems = [
    {
      title: "Révolution conversationnelle",
      content: "85% des utilisateurs d'IA avancés utilisent le chain of prompts sans le savoir, transformant instinctivement des tâches complexes en séquences de micro-interactions pour des résultats 300% plus précis."
    },
    {
      title: "Économie cognitive",
      content: "Le chain of prompts réduit la charge cognitive de 60% en décomposant les problèmes complexes, permettant à notre cerveau de traiter l'information par petites unités digestibles."
    },
    {
      title: "Performance des modèles",
      content: "Les LLM modernes atteignent 94% de précision sur des tâches complexes avec un chaînage optimal, contre seulement 67% avec des prompts isolés selon les études d'OpenAI et Anthropic."
    }
  ];

  const technicalStats = [
    { value: "128K", description: "tokens de contexte max (GPT-4)" },
    { value: "70%", description: "réduction coûts avec optimisation" },
    { value: "5x", description: "amélioration précision moyenne" },
    { value: "12", description: "étapes max recommandées" }
  ];

  const practicalStats = [
    { value: "89%", description: "succès avec validation d'étapes" },
    { value: "4.2x", description: "gain productivité développeurs" },
    { value: "45s", description: "temps moyen par itération" },
    { value: "€2.3K", description: "économies mensuelles moyennes" }
  ];

  const exampleSteps = [
    { title: "Contexte initial", description: "Définir clairement l'objectif global et le contexte" },
    { title: "Décomposition", description: "Identifier les sous-tâches et leur séquence logique" },
    { title: "Premier prompt", description: "Lancer avec une requête ciblée et spécifique" },
    { title: "Validation", description: "Vérifier la réponse avant de poursuivre l'enchaînement" },
    { title: "Itération", description: "Construire sur la réponse précédente avec précision" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-muted/10">
      <Hero
        title="Chain of Prompts"
        subtitle="Maîtriser l'Art de l'Enchaînement d'Invites"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="Chain of Prompts : Maîtriser l'Art de l'Enchaînement d'Invites"
          subtitle="Technique avancée pour construire des conversations complexes avec l'IA et obtenir des résultats d'expert"
          author="Geoffroy Streit"
          authorDescription="Expert en IA conversationnelle"
          duration="3-4 heures"
          level="Intermédiaire à Avancé"
          audience="Développeurs, consultants, analystes, chercheurs, créatifs"
          tags={["Chain of Prompts", "Conversation IA", "Technique avancée", "Productivité", "Optimisation"]}
        />

        <DidYouKnow items={didYouKnowItems} />

        <CourseModule
          title="Fondements du Chain of Prompts"
          description="Comprenez la science et la psychologie derrière l'enchaînement d'invites efficace"
          modules={[
            {
              icon: <Brain className="h-5 w-5" />,
              title: "Mécanismes cognitifs",
              items: [
                "Décomposition cognitive et charge mentale",
                "Mémoire de travail et attention séquentielle",
                "Construction contextuelle progressive",
                "Validation et correction d'erreurs"
              ]
            },
            {
              icon: <Network className="h-5 w-5" />,
              title: "Architecture conversationnelle",
              items: [
                "Flux de données entre prompts",
                "Gestion des états et du contexte",
                "Propagation d'erreurs et corrections",
                "Optimisation des transitions"
              ]
            },
            {
              icon: <Target className="h-5 w-5" />,
              title: "Stratégies d'enchaînement",
              items: [
                "Patterns séquentiels vs parallèles",
                "Boucles de validation et refinement",
                "Points de contrôle et rollback",
                "Convergence vers l'objectif final"
              ]
            }
          ]}
        />

        <LessonSection
          title="Qu'est-ce que le Chain of Prompts ?"
          icon={<MessageSquare className="h-6 w-6" />}
          delay={1}
        >
          <div className="space-y-4">
            <p>
              Le{' '}
              <TechnicalTooltip 
                term="Chain of Prompts"
                definition="Technique de communication avec l'IA consistant à enchaîner plusieurs requêtes successives, chaque nouvelle requête s'appuyant sur la réponse précédente pour construire progressivement une solution complexe"
              >
                chain of prompts
              </TechnicalTooltip>{' '}
              (chaîne de requêtes) est une technique fondamentale de communication avec l'IA qui transforme des problèmes complexes en séquences de micro-interactions ciblées.
            </p>
            
            <AnalogyBox
              title="Analogie : L'architecte et l'artisan"
              content="Imaginez construire une cathédrale. Au lieu de dire 'Construisez-moi une cathédrale' (prompt unique), vous commencez par 'Dessinez les fondations' (prompt 1), puis 'Érigez les piliers selon ce plan' (prompt 2), puis 'Ajoutez la voûte sur ces piliers' (prompt 3). Chaque étape s'appuie sur la précédente, créant progressivement un chef-d'œuvre."
              variant="info"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Processus séquentiel
                </h4>
                <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                  <li>1. <strong>Prompt initial :</strong> Question ou instruction de base</li>
                  <li>2. <strong>Réponse IA :</strong> Première solution ou information</li>
                  <li>3. <strong>Prompt de suivi :</strong> Refinement basé sur la réponse</li>
                  <li>4. <strong>Itération :</strong> Répétition jusqu'au résultat optimal</li>
                </ol>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Avantages clés
                </h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                  <li>• <strong>Précision :</strong> Résultats 5x plus précis</li>
                  <li>• <strong>Contrôle :</strong> Validation à chaque étape</li>
                  <li>• <strong>Flexibilité :</strong> Correction et adaptation en temps réel</li>
                  <li>• <strong>Complexité :</strong> Gestion de tâches sophistiquées</li>
                </ul>
              </Card>
            </div>

            <InteractiveExample
              title="Exemple concret : Création d'une stratégie marketing"
              description="Démonstration étape par étape d'un chain of prompts efficace"
              steps={exampleSteps}
              finalMessage="Stratégie marketing complète et personnalisée avec plan d'action détaillé"
            />
          </div>
        </LessonSection>

        <LessonSection
          title="Fonctionnement technique et architecture"
          icon={<Cpu className="h-6 w-6" />}
          delay={2}
        >
          <div className="space-y-4">
            <p>
              Comprendre l'architecture technique du chain of prompts est crucial pour optimiser vos interactions avec les LLM.
            </p>

            <StatsGrid stats={technicalStats} columns={4} />

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
              <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
                <Database className="h-5 w-5" />
                Gestion du contexte et des tokens
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Fenêtre de contexte</h5>
                  <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• GPT-4 Turbo : 128K tokens</li>
                    <li>• Claude 3 : 200K tokens</li>
                    <li>• Gemini Pro : 1M tokens</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Coûts optimisés</h5>
                  <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Prompts courts = moins cher</li>
                    <li>• Réutilisation de contexte</li>
                    <li>• Compression intelligente</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Stratégies techniques</h5>
                  <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Résumés automatiques</li>
                    <li>• Points de sauvegarde</li>
                    <li>• Validation d'étapes</li>
                  </ul>
                </div>
              </div>
            </div>

            <CodeExample
              title="Architecture API : Flux de données"
              language="TypeScript"
              code={`// Exemple d'implémentation de chain of prompts
interface ChainStep {
  prompt: string;
  response?: string;
  validated: boolean;
  tokens: number;
}

class PromptChain {
  private steps: ChainStep[] = [];
  private maxContextSize = 128000; // GPT-4 Turbo
  
  async executeStep(prompt: string): Promise<string> {
    // 1. Vérifier la taille du contexte
    const contextSize = this.calculateContextSize();
    if (contextSize > this.maxContextSize * 0.8) {
      await this.compressContext();
    }
    
    // 2. Construire le prompt avec historique
    const fullPrompt = this.buildContextualPrompt(prompt);
    
    // 3. Appel API
    const response = await this.callLLM(fullPrompt);
    
    // 4. Sauvegarder l'étape
    this.steps.push({
      prompt,
      response,
      validated: false,
      tokens: this.countTokens(prompt + response)
    });
    
    return response;
  }
  
  private buildContextualPrompt(newPrompt: string): string {
    const context = this.steps
      .filter(step => step.validated)
      .map(step => \`User: \${step.prompt}\nAssistant: \${step.response}\`)
      .join('\n\n');
      
    return \`\${context}\n\nUser: \${newPrompt}\`;
  }
}`}
              explanation="Architecture complète pour gérer l'enchaînement de prompts avec optimisation automatique du contexte et des coûts."
            />
          </div>
        </LessonSection>

        <ZoomOn title="Exemple pratique : Analyse de données en chaîne">
          <div className="space-y-4">
            <p className="mb-4">Démonstration complète d'un chain of prompts pour analyser un dataset de ventes :</p>
            
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-blue-500">
                <h5 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Prompt initial : Exploration des données
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono">
                  "Voici les 10 premières lignes de mon dataset de ventes. Colonnes : Date, Produit, Quantité, Prix, Client. Identifie 3 tendances principales en 3 phrases max."
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-green-500">
                <h5 className="font-medium text-green-700 mb-2 flex items-center gap-2">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Prompt de suivi : Approfondissement
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono">
                  "Pour la tendance #2 que tu as identifiée (saisonnalité), peux-tu créer un plan d'analyse détaillé avec les métriques à calculer ?"
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-purple-500">
                <h5 className="font-medium text-purple-700 mb-2 flex items-center gap-2">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Prompt de finalisation : Recommandations
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono">
                  "Basé sur l'analyse saisonnière précédente, propose 3 actions marketing concrètes avec budget estimé et ROI attendu."
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
              <h5 className="font-medium text-amber-800 dark:text-amber-200 mb-2">💡 Résultat</h5>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                En 3 étapes ciblées, nous sommes passés de données brutes à un plan d'action marketing chiffré et actionnable, 
                avec une précision et une pertinence impossible à obtenir avec un seul prompt généraliste.
              </p>
            </div>
          </div>
        </ZoomOn>

        <LessonSection
          title="Stratégies avancées et optimisations"
          icon={<Settings className="h-6 w-6" />}
          delay={3}
        >
          <div className="space-y-6">
            <p>
              Maîtrisez les techniques avancées pour maximiser l'efficacité de vos chaînes de prompts.
            </p>

            <StatsGrid stats={practicalStats} columns={4} />

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Techniques de validation et contrôle qualité
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800">
                  <h5 className="font-medium text-red-800 dark:text-red-200 mb-3">🚫 Pièges à éviter</h5>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                    <li>• <strong>Dérive contextuelle :</strong> L'IA perd le fil après 8-10 étapes</li>
                    <li>• <strong>Hallucinations en cascade :</strong> Erreurs qui se propagent</li>
                    <li>• <strong>Explosion des coûts :</strong> Contexte trop lourd</li>
                    <li>• <strong>Perte de contrôle :</strong> L'IA guide au lieu de suivre</li>
                  </ul>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-3">✅ Bonnes pratiques</h5>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                    <li>• <strong>Réancrage contextuel :</strong> Rappeler l'objectif principal</li>
                    <li>• <strong>Validation d'étapes :</strong> "Confirme que tu as compris..."</li>
                    <li>• <strong>Formatage strict :</strong> Limiter tokens et structure</li>
                    <li>• <strong>Points de contrôle :</strong> Sauvegardes intermédiaires</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                Chain of prompts pour le développement
              </h4>
              
              <CodeExample
                title="Workflow développement optimisé"
                language="Prompt Flow"
                code={`# Étape 1 : Analyse du besoin
"Voici ma fonction [code]. Améliore sa lisibilité sans changer le comportement. 
Stack technique : Python 3.9, contraintes : performance O(n)."

# Étape 2 : Documentation
"Prends la fonction refactorisée précédente. Ajoute une docstring Google Style 
et des type hints complets."

# Étape 3 : Tests
"Génère 5 tests unitaires pytest pour couvrir les edge cases de cette fonction. 
Format : arrange-act-assert."

# Étape 4 : Intégration
"Vérifie la cohérence avec le fichier utils.py du projet. Propose les imports 
nécessaires et les modifications d'interface si besoin."

# Étape 5 : Optimisation
"Analyse les performances avec cProfile. Propose 2 optimisations concrètes 
sans changer l'API publique."`}
                explanation="Séquence optimisée pour le développement : chaque étape build sur la précédente avec des contraintes techniques claires."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                Patterns d'enchaînement avancés
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-card border-border dark:bg-card dark:border-border">
                  <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <GitBranch className="h-4 w-4" />
                    Parallèle convergent
                  </h5>
                  <p className="text-sm text-card-foreground">
                    Explorez plusieurs pistes en parallèle puis convergez vers la meilleure solution.
                  </p>
                </Card>
                
                <Card className="p-4 bg-card border-border dark:bg-card dark:border-border">
                  <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <Repeat className="h-4 w-4" />
                    Boucle itérative
                  </h5>
                  <p className="text-sm text-card-foreground">
                    Répétez affiner → tester → corriger jusqu'à atteindre le niveau de qualité souhaité.
                  </p>
                </Card>
                
                <Card className="p-4 bg-card border-border dark:bg-card dark:border-border">
                  <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    Hiérarchique
                  </h5>
                  <p className="text-sm text-card-foreground">
                    Construisez par couches : fondations → structure → détails → finitions.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Cas d'usage métier et applications pratiques"
          icon={<Users className="h-6 w-6" />}
          delay={4}
        >
          <div className="space-y-6">
            <p>Découvrez comment appliquer le chain of prompts dans différents contextes professionnels :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">📊 Analyse business</h4>
                <CodeExample
                  title="Chain d'analyse stratégique"
                  language="Business Flow"
                  code={`1. "Analyse SWOT de [entreprise] dans le secteur [X]. 
   Focus sur les 3 forces/faiblesses principales."

2. "Pour la faiblesse #2 identifiée, propose un plan 
   d'amélioration en 5 étapes avec timeline."

3. "Chiffre l'impact financier de l'étape #3 du plan. 
   Hypothèses : budget 500K€, équipe 8 personnes."

4. "Rédige le business case pour le COMEX. 
   Format : problème-solution-ROI-risques."`}
                  explanation="Progression logique de l'analyse générale vers un business case actionnable."
                />
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-green-600">✍️ Création de contenu</h4>
                <CodeExample
                  title="Chain rédactionnelle"
                  language="Content Flow"
                  code={`1. "Écris une introduction accrocheuse sur [sujet] 
   pour un public [cible]. Tone: professionnel."

2. "Développe le point #2 de l'intro avec 3 exemples 
   concrets et des données chiffrées."

3. "Transforme ce développement en structure 
   article : H2, H3, bullet points."

4. "Ajoute un CTA percutant et optimise pour SEO 
   avec mots-clés [liste]."`}
                  explanation="Construction progressive d'un contenu optimisé et structuré."
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg">
              <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Template universel pour débuter
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
                {[
                  { step: "1", title: "CONTEXTE", desc: "Définis le cadre et l'objectif" },
                  { step: "2", title: "EXPLORATION", desc: "Collecte d'informations initiales" },
                  { step: "3", title: "ANALYSE", desc: "Traitement et structuration" },
                  { step: "4", title: "SYNTHÈSE", desc: "Recommandations et actions" },
                  { step: "5", title: "VALIDATION", desc: "Vérification et optimisation" }
                ].map((item, index) => (
                  <Card key={index} className="p-3 text-center bg-white/50 dark:bg-gray-800/50">
                    <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-1">{item.step}</div>
                    <div className="text-xs font-medium text-indigo-800 dark:text-indigo-200">{item.title}</div>
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">{item.desc}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Outils et automatisation"
          icon={<Zap className="h-6 w-6" />}
          delay={5}
        >
          <div className="space-y-4">
            <p>Optimisez vos chaînes de prompts avec les bons outils et automatisations :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-md transition-all duration-300 bg-card border-border">
                <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  IDE spécialisés
                </h5>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Cursor (dev avec IA)</li>
                  <li>• Claude Projects</li>
                  <li>• ChatGPT Custom GPTs</li>
                  <li>• Poe Assistant Builder</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300 bg-card border-border">
                <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <Workflow className="h-4 w-4" />
                  Automatisation
                </h5>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Zapier AI Actions</li>
                  <li>• LangChain</li>
                  <li>• AutoGPT</li>
                  <li>• Microsoft Power Automate</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300 bg-card border-border">
                <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Monitoring
                </h5>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Token tracking</li>
                  <li>• Performance analytics</li>
                  <li>• Cost optimization</li>
                  <li>• A/B testing prompts</li>
                </ul>
              </Card>
            </div>
          </div>
        </LessonSection>

        <CourseConclusion
          title="Maîtrise du Chain of Prompts : Votre superpouvoir conversationnel"
          description="Vous possédez maintenant les clés pour transformer l'IA en véritable partenaire de travail grâce à l'art de l'enchaînement d'invites."
          learningPoints={[
            "Comprendre les mécanismes cognitifs et techniques du chaînage",
            "Maîtriser l'architecture conversationnelle et la gestion du contexte",
            "Utiliser les patterns d'enchaînement avancés (parallèle, itératif, hiérarchique)",
            "Optimiser les coûts et performances avec les bonnes stratégies",
            "Éviter les pièges courants (dérive, hallucinations, explosion des coûts)",
            "Appliquer la technique dans différents contextes métier",
            "Automatiser et monitorer vos chaînes de prompts",
            "Utiliser le template universel en 5 étapes pour débuter"
          ]}
          nextSteps={[
            "Pratiquez avec le template universel sur vos projets actuels",
            "Créez votre bibliothèque de patterns d'enchaînement",
            "Expérimentez avec les outils d'automatisation",
            "Suivez 'Prompt Engineering' pour les fondamentaux",
            "Mesurez l'impact ROI dans vos workflows",
            "Formez votre équipe aux techniques avancées",
            "Rejoignez des communautés de prompt engineers",
            "Explorez les agents autonomes et l'IA orchestrée"
          ]}
        />
      </div>
    </div>
  );
};

export default ChainOfPrompts;
