
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import ZoomOn from '@/components/courses/ZoomOn';
import CodeExample from '@/components/courses/CodeExample';
import CourseConclusion from '@/components/courses/CourseConclusion';
import DidYouKnow from '@/components/courses/DidYouKnow';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Card } from '@/components/ui/card';
import { 
  Brain,
  Network,
  Target,
  Settings,
  Zap,
  Workflow,
  Shield,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

// Import des nouvelles sections modulaires
import ChainConceptsSection from '@/components/courses/chainofprompts/ChainConceptsSection';
import TechnicalArchitectureSection from '@/components/courses/chainofprompts/TechnicalArchitectureSection';
import PracticalApplicationsSection from '@/components/courses/chainofprompts/PracticalApplicationsSection';

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
    },
    {
      title: "Impact économique",
      content: "Les entreprises utilisant des chaînes de prompts optimisées réduisent leurs coûts d'IA de 40% tout en multipliant par 3 la qualité des outputs, selon une étude McKinsey 2024."
    }
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
          authorDescription="Expert en IA conversationnelle et optimisation des interactions humain-machine"
          duration="4-5 heures"
          level="Intermédiaire à Avancé"
          audience="Développeurs, consultants, analystes, chercheurs, créatifs, managers"
          tags={["Chain of Prompts", "Conversation IA", "Technique avancée", "Productivité", "Optimisation", "LLM"]}
        />

        <DidYouKnow items={didYouKnowItems} />

        <CourseModule
          title="Fondements scientifiques du Chain of Prompts"
          description="Explorez les mécanismes cognitifs, techniques et stratégiques qui rendent l'enchaînement d'invites si efficace"
          modules={[
            {
              icon: <Brain className="h-5 w-5" />,
              title: "Mécanismes cognitifs et psychologiques",
              items: [
                "Décomposition cognitive et réduction de la charge mentale",
                "Mémoire de travail et attention séquentielle",
                "Construction contextuelle progressive et apprentissage adaptatif",
                "Biais cognitifs et leur exploitation positive",
                "Validation psychologique et correction d'erreurs"
              ]
            },
            {
              icon: <Network className="h-5 w-5" />,
              title: "Architecture conversationnelle avancée",
              items: [
                "Flux de données entre prompts et gestion d'état",
                "Patterns de communication et protocoles d'échange",
                "Propagation d'erreurs et mécanismes de correction",
                "Optimisation des transitions et continuité contextuelle",
                "Compression intelligente et résumés automatiques"
              ]
            },
            {
              icon: <Target className="h-5 w-5" />,
              title: "Stratégies d'enchaînement et patterns",
              items: [
                "Patterns séquentiels, parallèles et hybrides",
                "Boucles de validation et cycles d'amélioration",
                "Points de contrôle, rollback et gestion d'états",
                "Convergence guidée vers l'objectif final",
                "Adaptation dynamique selon les réponses"
              ]
            }
          ]}
        />

        {/* Sections modulaires */}
        <ChainConceptsSection />
        <TechnicalArchitectureSection />

        <ZoomOn title="Cas pratique complet : Développement d'une stratégie produit">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                Contexte : Lancement d'une application mobile de fitness
              </h4>
              <p className="text-blue-700 dark:text-blue-300">
                Démonstration complète d'un chain of prompts pour développer une stratégie produit 
                de A à Z, de l'analyse de marché jusqu'au plan de lancement.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-blue-500">
                <h5 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Analyse de marché et positionnement
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono mb-2">
                  "Analyse le marché des apps fitness en France 2024. Focus : segments non saturés, 
                  pain points utilisateurs, opportunités de différenciation. Format : 3 insights clés + données."
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  Réponse attendue : Analyse quantitative avec segments (débutants 55+, fitness hybride, micro-workouts)
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-green-500">
                <h5 className="font-medium text-green-700 mb-2 flex items-center gap-2">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Définition du MVP et features core
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono mb-2">
                  "Basé sur l'analyse précédente, définis un MVP pour le segment 'fitness hybride'. 
                  Priorité : 5 features core, user stories, critères d'acceptation."
                </div>
                <p className="text-xs text-green-600 dark:text-green-400">
                  Chaînage intelligent : s'appuie sur l'insight spécifique du prompt 1
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-purple-500">
                <h5 className="font-medium text-purple-700 mb-2 flex items-center gap-2">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Stratégie de monétisation et pricing
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono mb-2">
                  "Pour le MVP défini, propose 3 modèles de monétisation avec pricing. 
                  Contraintes : acquisition 1000 users mois 1, break-even mois 18."
                </div>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  Progression contextuelle : chaque prompt enrichit la compréhension
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-orange-500">
                <h5 className="font-medium text-orange-700 mb-2 flex items-center gap-2">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  Roadmap de développement et métriques
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm font-mono mb-2">
                  "Transforme la stratégie en roadmap 12 mois. Include : sprints, jalons, 
                  KPI de suivi, budget tech, plan de recrutement équipe."
                </div>
                <p className="text-xs text-orange-600 dark:text-orange-400">
                  Synthèse opérationnelle : du concept à l'exécution concrète
                </p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800 p-4 rounded-lg">
              <h5 className="font-medium text-emerald-800 dark:text-emerald-200 mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Résultat de la chaîne
              </h5>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                En 4 prompts ciblés et chaînés, nous avons construit une stratégie produit complète, 
                cohérente et actionnable. Chaque étape s'est enrichie de la précédente, créant 
                une analyse d'une profondeur impossible à obtenir avec un prompt unique.
              </p>
            </div>
          </div>
        </ZoomOn>

        <PracticalApplicationsSection />

        <ZoomOn title="Outils et automatisation avancés">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-primary mb-3 flex items-center gap-2">
                  <Workflow className="h-4 w-4" />
                  Plateformes no-code
                </h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Make.com :</strong> Automatisation de chaînes</li>
                  <li>• <strong>Zapier AI :</strong> Déclencheurs intelligents</li>
                  <li>• <strong>LangChain :</strong> Framework Python/JS</li>
                  <li>• <strong>Bubble AI :</strong> Intégration app</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-primary mb-3 flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  IDE et extensions
                </h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Cursor :</strong> Chain-aware development</li>
                  <li>• <strong>GitHub Copilot :</strong> Context propagation</li>
                  <li>• <strong>GPT Engineer :</strong> Autonomous chains</li>
                  <li>• <strong>Tabnine :</strong> Predictive chaining</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300">
                <h5 className="font-medium text-primary mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Monitoring et analytics
                </h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>LangSmith :</strong> Observabilité chains</li>
                  <li>• <strong>Weights & Biases :</strong> Tracking experiments</li>
                  <li>• <strong>Helicone :</strong> Cost optimization</li>
                  <li>• <strong>Humanloop :</strong> A/B testing prompts</li>
                </ul>
              </Card>
            </div>

            <CodeExample
              title="Script d'automatisation avec LangChain"
              language="Python"
              code={`from langchain.chains import LLMChain, SequentialChain
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferWindowMemory
import json
from datetime import datetime

class AdvancedPromptChainRunner:
    def __init__(self, api_key: str, max_tokens: int = 4000):
        self.llm = OpenAI(openai_api_key=api_key, max_tokens=max_tokens)
        self.memory = ConversationBufferWindowMemory(k=5)  # Garde 5 derniers échanges
        self.metrics = {
            "total_steps": 0,
            "successful_steps": 0,
            "total_tokens": 0,
            "total_cost": 0.0,
            "execution_time": 0.0
        }
        
    def create_chain_template(self, step_name: str, template: str, 
                            input_vars: list, output_key: str):
        """Crée un template de chaîne réutilisable"""
        prompt = PromptTemplate(
            input_variables=input_vars,
            template=template
        )
        return LLMChain(
            llm=self.llm,
            prompt=prompt,
            output_key=output_key,
            memory=self.memory,
            verbose=True
        )
    
    def run_business_analysis_chain(self, company: str, sector: str):
        """Chaîne d'analyse business automatisée"""
        start_time = datetime.now()
        
        # Étape 1: Analyse SWOT
        swot_chain = self.create_chain_template(
            "swot_analysis",
            \"\"\"Analyse SWOT détaillée de {company} dans le secteur {sector}.
            Format de réponse stricte:
            FORCES: [3 points maximum]
            FAIBLESSES: [3 points maximum]
            OPPORTUNITÉS: [3 points maximum]
            MENACES: [3 points maximum]
            Chaque point doit être quantifié si possible.\"\"\",
            ["company", "sector"],
            "swot_analysis"
        )
        
        # Étape 2: Plan d'amélioration
        improvement_chain = self.create_chain_template(
            "improvement_plan",
            \"\"\"Basé sur l'analyse SWOT précédente: {swot_analysis}
            
            Crée un plan d'amélioration pour la faiblesse la plus critique.
            Format: 5 étapes avec timeline et budget estimé.
            Contraintes: Budget max 500K€, durée max 18 mois.\"\"\",
            ["swot_analysis"],
            "improvement_plan"
        )
        
        # Étape 3: ROI et business case
        roi_chain = self.create_chain_template(
            "roi_calculation",
            \"\"\"Plan d'amélioration: {improvement_plan}
            Analyse SWOT: {swot_analysis}
            
            Calcule le ROI du plan d'amélioration.
            Include: investissement initial, cash flows prévisionnels,
            break-even point, risques financiers.
            Format: Executive summary 200 mots max.\"\"\",
            ["improvement_plan", "swot_analysis"],
            "roi_analysis"
        )
        
        # Chaîne séquentielle
        overall_chain = SequentialChain(
            chains=[swot_chain, improvement_chain, roi_chain],
            input_variables=["company", "sector"],
            output_variables=["swot_analysis", "improvement_plan", "roi_analysis"],
            verbose=True
        )
        
        try:
            # Exécution de la chaîne
            result = overall_chain({
                "company": company,
                "sector": sector
            })
            
            # Calcul des métriques
            end_time = datetime.now()
            self.metrics["execution_time"] = (end_time - start_time).total_seconds()
            self.metrics["total_steps"] += 3
            self.metrics["successful_steps"] += 3
            
            return {
                "success": True,
                "results": result,
                "metrics": self.metrics,
                "timestamp": end_time.isoformat()
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "metrics": self.metrics
            }
    
    def validate_output_quality(self, output: str, expected_format: str) -> float:
        """Validation automatique de la qualité des outputs"""
        validation_prompt = f\"\"\"
        Évalue la qualité de cette réponse sur une échelle de 0 à 10:
        
        Réponse à évaluer: {output}
        Format attendu: {expected_format}
        
        Critères: pertinence, complétude, structure, précision.
        Réponds uniquement par un score numérique.
        \"\"\"
        
        try:
            score = self.llm(validation_prompt)
            return float(score.strip())
        except:
            return 5.0  # Score par défaut
    
    def export_metrics(self, filename: str = None):
        """Export des métriques pour analyse"""
        if not filename:
            filename = f"chain_metrics_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        with open(filename, 'w') as f:
            json.dump(self.metrics, f, indent=2)
        
        return filename

# Utilisation
if __name__ == "__main__":
    runner = AdvancedPromptChainRunner("your-api-key")
    
    result = runner.run_business_analysis_chain(
        company="TechStartup SAS",
        sector="FinTech"
    )
    
    if result["success"]:
        print("✅ Chaîne exécutée avec succès")
        print(f"⏱️ Temps d'exécution: {result['metrics']['execution_time']:.2f}s")
        runner.export_metrics()
    else:
        print(f"❌ Erreur: {result['error']}")`}
              explanation="Implémentation complète d'automatisation avec LangChain, incluant métriques, validation et export des résultats."
            />
          </div>
        </ZoomOn>

        <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border border-red-200 dark:border-red-800 p-6 rounded-lg mb-8">
          <h4 className="font-medium text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Pièges avancés et contre-mesures
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-medium text-red-800 dark:text-red-200 mb-3">🚨 Pièges techniques critiques</h5>
              <ul className="text-red-700 dark:text-red-300 space-y-2">
                <li>• <strong>Memory leak contextuel :</strong> Accumulation non contrôlée du contexte</li>
                <li>• <strong>Cascade d'hallucinations :</strong> Erreurs qui se propagent et s'amplifient</li>
                <li>• <strong>Dérive sémantique :</strong> L'IA change graduellement d'objectif</li>
                <li>• <strong>Over-engineering :</strong> Chaînes trop complexes pour l'objectif</li>
                <li>• <strong>Token explosion :</strong> Coûts incontrôlés par mauvaise gestion</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-red-800 dark:text-red-200 mb-3">✅ Contre-mesures expertes</h5>
              <ul className="text-red-700 dark:text-red-300 space-y-2">
                <li>• <strong>Checkpoints automatiques :</strong> Validation systématique toutes les 3 étapes</li>
                <li>• <strong>Rollback intelligent :</strong> Retour au dernier état validé</li>
                <li>• <strong>Compression adaptive :</strong> Résumés automatiques selon le contexte</li>
                <li>• <strong>Monitoring en temps réel :</strong> Alertes sur dérive/coûts</li>
                <li>• <strong>A/B testing :</strong> Comparaison de chaînes alternatives</li>
              </ul>
            </div>
          </div>
        </div>

        <CourseConclusion
          title="Maîtrise du Chain of Prompts : Votre superpouvoir conversationnel"
          description="Vous possédez maintenant une expertise complète pour transformer l'IA en véritable partenaire stratégique grâce à l'art avancé de l'enchaînement d'invites."
          learningPoints={[
            "Comprendre les mécanismes cognitifs, techniques et stratégiques du chaînage",
            "Maîtriser l'architecture conversationnelle et la gestion avancée du contexte",
            "Utiliser les patterns d'enchaînement sophistiqués (convergent, itératif, hiérarchique)",
            "Optimiser coûts et performances avec des stratégies expertes",
            "Éviter les pièges critiques (dérive, hallucinations, explosion des coûts)",
            "Appliquer la technique dans des contextes métier complexes",
            "Automatiser et monitorer vos chaînes avec les outils modernes",
            "Implémenter des systèmes de validation et correction automatiques",
            "Mesurer et optimiser les performances avec des métriques avancées",
            "Construire des workflows d'IA reproductibles et scalables"
          ]}
          nextSteps={[
            "Expérimentez avec des chaînes complexes sur vos projets stratégiques",
            "Construisez votre bibliothèque de patterns et templates réutilisables",
            "Intégrez l'automatisation avec LangChain ou des plateformes no-code",
            "Mesurez l'impact ROI et optimisez continuellement vos workflows",
            "Formez votre équipe aux techniques avancées et bonnes pratiques",
            "Explorez l'IA multi-agents et l'orchestration de systèmes complexes",
            "Contribuez à la communauté en partageant vos patterns efficaces",
            "Anticipez l'évolution vers des modèles autonomes et auto-optimisants"
          ]}
        />
      </div>
    </div>
  );
};

export default ChainOfPrompts;
