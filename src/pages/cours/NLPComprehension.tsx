
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BookOpen, MessageSquare, Zap, Target, Lightbulb, Network, Code, Layers } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import DidYouKnow from '@/components/courses/DidYouKnow';
import AnalogyBox from '@/components/courses/AnalogyBox';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import StatsGrid from '@/components/courses/StatsGrid';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ConceptCard from '@/components/courses/nlp/ConceptCard';
import ArchitectureComparison from '@/components/courses/nlp/ArchitectureComparison';
import InteractiveNLPDemo from '@/components/courses/nlp/InteractiveNLPDemo';

/**
 * Page du cours sur le NLP et les LLM
 * @returns {JSX.Element} Le composant de la page
 */
const NLPComprehension = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "Qu'est-ce qui distingue principalement les Transformers des RNN traditionnels ?",
      options: [
        "Les Transformers utilisent uniquement des couches de convolution",
        "Les Transformers traitent les séquences en parallèle grâce au mécanisme d'attention",
        "Les Transformers ne peuvent traiter que des textes courts",
        "Les Transformers n'utilisent pas de réseaux de neurones"
      ],
      correctAnswer: 1,
      explanation: "Les Transformers révolutionnent le NLP en traitant toute la séquence en parallèle grâce au mécanisme d'attention, contrairement aux RNN qui traitent séquentiellement."
    },
    {
      question: "Que signifie 'BERT' et quelle est sa spécificité ?",
      options: [
        "Basic Encoding Representation Transformer - spécialisé dans la génération",
        "Bidirectional Encoder Representations from Transformers - comprend le contexte dans les deux sens",
        "Bilateral Encoding Recursive Transformer - utilise la récursion",
        "Binary Embedding Relational Transformer - traite uniquement du binaire"
      ],
      correctAnswer: 1,
      explanation: "BERT (Bidirectional Encoder Representations from Transformers) révolutionne la compréhension en analysant le contexte dans les deux directions, permettant une meilleure compréhension du sens."
    },
    {
      question: "Quelle est la différence principale entre GPT et BERT ?",
      options: [
        "GPT est bidirectionnel, BERT est unidirectionnel",
        "GPT génère du texte (décodeur), BERT comprend le texte (encodeur)",
        "GPT utilise l'attention, BERT utilise la convolution",
        "Il n'y a aucune différence significative"
      ],
      correctAnswer: 1,
      explanation: "GPT est optimisé pour la génération de texte (architecture décodeur), tandis que BERT excelle dans la compréhension et l'analyse (architecture encodeur)."
    },
    {
      question: "Qu'est-ce que le 'fine-tuning' dans le contexte des LLM ?",
      options: [
        "Réduire la taille du modèle pour économiser la mémoire",
        "Ajuster un modèle pré-entraîné sur une tâche spécifique",
        "Augmenter le nombre de paramètres du modèle",
        "Nettoyer les données d'entraînement"
      ],
      correctAnswer: 1,
      explanation: "Le fine-tuning consiste à prendre un modèle déjà entraîné sur une large base de données et à l'affiner sur une tâche ou un domaine spécifique pour améliorer ses performances."
    },
    {
      question: "Que représente le mécanisme d'attention dans les Transformers ?",
      options: [
        "La capacité du modèle à se concentrer sur les parties pertinentes de l'entrée",
        "Un système pour éviter la surcharge computationnelle",
        "Une méthode pour compresser les données",
        "Un algorithme de tri des mots par importance"
      ],
      correctAnswer: 0,
      explanation: "L'attention permet au modèle de 'faire attention' aux parties les plus pertinentes de la séquence d'entrée pour chaque prédiction, comme nous le faisons naturellement en lisant."
    }
  ];

  const didYouKnowItems = [
    {
      title: "Révolution Transformer",
      content: "L'architecture Transformer, introduite en 2017 avec le papier 'Attention Is All You Need', a révolutionné le NLP en remplaçant les RNN par des mécanismes d'attention pure."
    },
    {
      title: "Puissance de GPT-3",
      content: "GPT-3 contient 175 milliards de paramètres et peut réaliser des tâches qu'il n'a jamais vues pendant l'entraînement, démontrant des capacités d'apprentissage en contexte impressionnantes."
    },
    {
      title: "Données d'entraînement",
      content: "Les grands modèles de langage sont entraînés sur des téraoctets de texte, incluant des livres, articles, sites web, représentant une grande partie de la connaissance humaine écrite."
    }
  ];

  const statsData = [
    {
      value: "2017",
      description: "Année de l'invention des Transformers",
      bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50"
    },
    {
      value: "175B",
      description: "Paramètres dans GPT-3",
      bgGradient: "from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50"
    },
    {
      value: "100+",
      description: "Langues supportées par les LLM modernes",
      bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50"
    }
  ];

  const learningModules = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Fondamentaux du NLP",
      items: [
        "Tokenisation et prétraitement",
        "Représentations vectorielles (embeddings)",
        "Architectures de base (RNN, LSTM)",
        "Métriques d'évaluation en NLP"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "L'ère des Transformers",
      items: [
        "Mécanisme d'attention expliqué",
        "Architecture Transformer détaillée",
        "BERT vs GPT : comprendre les différences",
        "Fine-tuning et transfer learning"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Applications pratiques",
      items: [
        "Analyse de sentiment en temps réel",
        "Systèmes de questions-réponses",
        "Résumé automatique de texte",
        "Génération de contenu créatif"
      ]
    }
  ];

  return (
    <>
      <BackToResourcesButton />
      
      <Hero
        title="NLP et LLM : Comprendre le Traitement du Langage"
        subtitle="Explorez l'univers fascinant du traitement automatique du langage naturel, des bases théoriques aux modèles de langage les plus avancés"
      />

      <section className="section-container mb-10">
        <CourseHeader
          title="NLP et LLM : Comprendre le Traitement du Langage"
          subtitle="Un voyage dans l'art de faire comprendre le langage humain aux machines"
          author="Dr. Sarah Dubois"
          authorDescription="Experte en NLP et Intelligence Artificielle, 12 ans de recherche en traitement du langage"
          duration="8-10 semaines (5-7h/semaine)"
          level="Intermédiaire"
          audience="Développeurs, Data Scientists, Linguistes computationnels"
          tags={["NLP", "LLM", "Transformers", "BERT", "GPT", "Pratique"]}
        />

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">🗣️ Bienvenue dans l'art de la communication machine-humain !</h3>
            <p className="text-lg mb-4 text-foreground">
              Imaginez un monde où les machines comprennent non seulement nos mots, mais aussi nos émotions, notre contexte, 
              et même nos non-dits. C'est exactement ce que vous allez découvrir dans ce voyage au cœur du NLP !
            </p>
            <p className="mb-4 text-foreground">
              Du simple correcteur orthographique aux assistants virtuels en passant par la traduction instantanée, 
              le traitement du langage naturel transforme notre façon d'interagir avec la technologie. Aujourd'hui, 
              des modèles comme ChatGPT révolutionnent notre rapport à l'information et à la créativité.
            </p>
            <p className="font-medium text-primary">
              Ce cours vous guide pas à pas, de la compréhension des mécanismes fondamentaux jusqu'à la maîtrise 
              des architectures les plus avancées. Préparez-vous à percer les mystères du langage artificiel !
            </p>
          </div>

          <AnalogyBox
            title="Le NLP, c'est comme apprendre une langue étrangère"
            content="Quand vous apprenez une nouvelle langue, vous commencez par les mots (vocabulaire), puis les règles (grammaire), et enfin le contexte (culture). Les machines font pareil : elles apprennent d'abord à reconnaître les mots, puis leurs relations, et enfin le sens global. La différence ? Elles peuvent traiter des millions de textes en quelques heures !"
            variant="info"
          />
        </div>

        <DidYouKnow items={didYouKnowItems} />

        <StatsGrid stats={statsData} />

        <CourseModule
          title="Programme du cours"
          description="Un parcours structuré en 6 modules, de la théorie aux applications concrètes"
          modules={learningModules}
        />

        <div className="max-w-4xl mx-auto">
          {/* Module 1: Introduction au NLP */}
          <LessonSection title="Module 1 : Les Fondamentaux du Traitement du Langage" icon={<MessageSquare size={24} />} delay={1}>
            <p className="text-lg mb-4">
              Bienvenue dans l'univers passionnant du NLP ! Mais d'abord, une question simple : 
              comment faites-vous pour comprendre cette phrase que vous lisez en ce moment ?
            </p>
            
            <ZoomOn title="Le défi de la compréhension automatique">
              <p className="mb-3">
                Pour nous, humains, comprendre le langage semble naturel. Mais pour une machine, c'est un défi colossal :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ambiguïté :</strong> "Il a vu l'homme avec des jumelles" - qui a les jumelles ?</li>
                <li><strong>Contexte :</strong> "Ça craint" peut être positif ou négatif selon la situation</li>
                <li><strong>Références :</strong> "Il est parti" - qui est "il" ?</li>
                <li><strong>Implicite :</strong> "Il fait chaud ici" peut signifier "ouvrez la fenêtre"</li>
              </ul>
            </ZoomOn>

            <Illustration 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="Ordinateur portable affichant du code, représentant le traitement automatique du langage"
              caption="Le NLP transforme le langage humain en données que les machines peuvent comprendre et traiter"
              width="2/3"
            />

            <h4 className="text-xl font-semibold mt-6 mb-3">Les étapes du traitement du langage</h4>
            <p className="mb-4">
              Le NLP décompose la compréhension du langage en plusieurs étapes, comme un chef qui prépare un plat complexe :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <ConceptCard
                icon={<Layers className="h-5 w-5" />}
                title="Tokenisation"
                description="Découper le texte en unités plus petites (mots, sous-mots)"
                examples={["'Hello world' → ['Hello', 'world']", "'I'm' → ['I', 'am'] ou ['I', \"'\", 'm']"]}
                color="blue"
              />
              <ConceptCard
                icon={<Brain className="h-5 w-5" />}
                title="Analyse syntaxique"
                description="Comprendre la structure grammaticale des phrases"
                examples={["Identifier sujet, verbe, complément", "Détecter les relations entre mots"]}
                color="green"
              />
              <ConceptCard
                icon={<Target className="h-5 w-5" />}
                title="Analyse sémantique"
                description="Extraire le sens et les concepts"
                examples={["Détection d'entités (personnes, lieux)", "Relations entre concepts"]}
                color="purple"
              />
              <ConceptCard
                icon={<Lightbulb className="h-5 w-5" />}
                title="Compréhension pragmatique"
                description="Interpréter selon le contexte et l'intention"
                examples={["Détection d'ironie", "Intentions cachées"]}
                color="orange"
              />
            </div>

            <CodeExample 
              title="Premier exemple : Analyse de sentiment simple"
              language="python"
              code={`import re
from collections import Counter

class AnalyseurSentiment:
    def __init__(self):
        # Dictionnaires de mots positifs et négatifs
        self.mots_positifs = {
            'excellent', 'fantastique', 'génial', 'super', 'parfait',
            'adore', 'aime', 'content', 'heureux', 'satisfait'
        }
        self.mots_negatifs = {
            'horrible', 'nul', 'déteste', 'mauvais', 'terrible',
            'déçu', 'triste', 'énervé', 'frustré', 'catastrophique'
        }
    
    def nettoyer_texte(self, texte):
        """Nettoie et prépare le texte pour l'analyse"""
        # Conversion en minuscules
        texte = texte.lower()
        # Suppression de la ponctuation
        texte = re.sub(r'[^\w\s]', '', texte)
        # Division en mots
        mots = texte.split()
        return mots
    
    def analyser_sentiment(self, texte):
        """Analyse le sentiment d'un texte"""
        mots = self.nettoyer_texte(texte)
        
        score_positif = sum(1 for mot in mots if mot in self.mots_positifs)
        score_negatif = sum(1 for mot in mots if mot in self.mots_negatifs)
        
        # Calcul du sentiment
        if score_positif > score_negatif:
            return "positif", score_positif / len(mots)
        elif score_negatif > score_positif:
            return "négatif", score_negatif / len(mots)
        else:
            return "neutre", 0.0

# Exemple d'utilisation
analyseur = AnalyseurSentiment()
texte = "J'adore ce produit, il est fantastique !"
sentiment, confiance = analyseur.analyser_sentiment(texte)
print(f"Sentiment: {sentiment} (confiance: {confiance:.2f})")`}
              explanation="Ce code illustre les bases de l'analyse de sentiment avec une approche simple basée sur des dictionnaires. Bien que basique, cette méthode montre les principes fondamentaux du NLP."
            />

            <AnalogyBox
              title="Les embeddings : donner une adresse aux mots"
              content="Imaginez que chaque mot de la langue française ait une adresse unique dans un espace multidimensionnel. Les mots similaires habitent dans le même quartier ! 'Roi' et 'Reine' seraient voisins, tout comme 'Paris' et 'Londres'. C'est exactement ce que font les embeddings : ils donnent une 'adresse numérique' à chaque mot."
              variant="tip"
            />
          </LessonSection>

          {/* Module 2: Architectures et Evolution */}
          <LessonSection title="Module 2 : L'Évolution des Architectures NLP" icon={<Network size={24} />} delay={2}>
            <p className="text-lg mb-4">
              L'histoire du NLP ressemble à l'évolution des transports : des premiers pas hésitants aux 
              <TechnicalTooltip term="Transformer" definition="Architecture révolutionnaire basée sur l'attention, qui traite les séquences en parallèle">révolutions technologiques</TechnicalTooltip> 
              qui transforment tout !
            </p>

            <ZoomOn title="La révolution des Transformers : pourquoi tout a changé ?">
              <p className="mb-3">
                En 2017, le papier "Attention Is All You Need" révolutionne le NLP en une phrase : 
                "Et si on arrêtait de traiter le texte mot par mot et qu'on regardait tout en même temps ?"
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Parallélisation :</strong> Plus besoin d'attendre le mot précédent pour traiter le suivant</li>
                <li><strong>Attention globale :</strong> Chaque mot peut "faire attention" à tous les autres</li>
                <li><strong>Scalabilité :</strong> Plus de données = de meilleures performances</li>
                <li><strong>Transfer learning :</strong> Un modèle peut apprendre une tâche puis s'adapter à d'autres</li>
              </ul>
            </ZoomOn>

            <h4 className="text-xl font-semibold mt-6 mb-4">Comparaison des architectures</h4>
            <ArchitectureComparison />

            <CodeExample 
              title="Comprendre l'attention : un mécanisme simplifié"
              language="python"
              code={`import numpy as np

def attention_simplifiee(query, keys, values):
    """
    Implémentation simplifiée du mécanisme d'attention
    
    query: ce qu'on cherche à comprendre
    keys: les éléments sur lesquels on peut se concentrer  
    values: l'information associée à chaque key
    """
    # Étape 1: Calculer les scores d'attention
    scores = np.dot(query, keys.T)  # Produit scalaire
    
    # Étape 2: Normaliser avec softmax
    attention_weights = np.exp(scores) / np.sum(np.exp(scores))
    
    # Étape 3: Combiner les valeurs selon les poids
    output = np.dot(attention_weights, values)
    
    return output, attention_weights

# Exemple concret
# Phrase: "Le chat mange la souris"
# On veut comprendre "mange" en fonction du contexte

# Représentations simplifiées (dans la réalité, ce sont des vecteurs de 512+ dimensions)
mots = ["Le", "chat", "mange", "la", "souris"]
embeddings = np.array([
    [0.1, 0.2, 0.1],  # Le
    [0.8, 0.1, 0.2],  # chat (animal)
    [0.3, 0.9, 0.4],  # mange (action)
    [0.1, 0.1, 0.1],  # la
    [0.7, 0.2, 0.3]   # souris (animal)
])

# Query: on veut comprendre "mange"
query = embeddings[2]  # "mange"
keys = embeddings      # tous les mots
values = embeddings    # mêmes valeurs pour simplifier

resultat, poids = attention_simplifiee(query, keys, values)

print("Poids d'attention pour 'mange':")
for mot, poids_mot in zip(mots, poids):
    print(f"{mot}: {poids_mot:.3f}")

# Le modèle fait attention surtout à "chat" et "souris" 
# pour comprendre l'action "mange"`}
              explanation="Cette implémentation simplifiée montre comment l'attention permet au modèle de se concentrer sur les parties pertinentes de la séquence. Dans la réalité, les Transformers utilisent une attention multi-têtes beaucoup plus sophistiquée."
            />
          </LessonSection>

          {/* Module 3: LLM et Applications */}
          <LessonSection title="Module 3 : Les Grands Modèles de Langage (LLM)" icon={<Brain size={24} />} delay={3}>
            <p className="text-lg mb-4">
              Les LLM représentent l'aboutissement de décennies de recherche en NLP. Mais comment un modèle 
              peut-il apprendre à écrire, traduire, résumer et même programmer ?
            </p>

            <ZoomOn title="Le secret des LLM : l'apprentissage sur Internet entier">
              <p className="mb-3">
                Les grands modèles de langage sont entraînés sur des quantités astronomiques de texte :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Livres et articles :</strong> Millions d'ouvrages numérisés</li>
                <li><strong>Pages web :</strong> Billions de pages indexées</li>
                <li><strong>Forums et discussions :</strong> Conversations humaines réelles</li>
                <li><strong>Code source :</strong> Repositories GitHub publics</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Résultat : ces modèles "connaissent" une grande partie de la connaissance humaine écrite !
              </p>
            </ZoomOn>

            <h4 className="text-xl font-semibold mt-6 mb-4">Démo interactive : Découvrez le NLP en action</h4>
            <InteractiveNLPDemo />

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Applications révolutionnaires des LLM
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">🎯 Assistants conversationnels</h5>
                  <p className="text-sm text-muted-foreground">
                    ChatGPT, Claude, Bard : des IA capables de conversations naturelles sur tous les sujets
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">🌍 Traduction instantanée</h5>
                  <p className="text-sm text-muted-foreground">
                    DeepL, Google Translate : traduction de qualité professionnelle en temps réel
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">✍️ Génération de contenu</h5>
                  <p className="text-sm text-muted-foreground">
                    Articles, emails, code : création automatique de contenu personnalisé
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">🔍 Analyse intelligente</h5>
                  <p className="text-sm text-muted-foreground">
                    Résumé de documents, extraction d'informations, analyse de sentiment
                  </p>
                </div>
              </div>
            </div>

            <AnalogyBox
              title="BERT vs GPT : L'élève studieux vs le conteur créatif"
              content="Imaginez deux étudiants : BERT lit attentivement tout un texte avant de répondre aux questions (bidirectionnel), excellent pour comprendre. GPT lit de gauche à droite et imagine la suite (unidirectionnel), excellent pour créer. Chacun a sa spécialité, comme un analyste vs un écrivain !"
            />
          </LessonSection>

          {/* Quiz */}
          <div className="mt-16">
            <CourseQuiz 
              questions={quizQuestions}
              title="Quiz : Testez votre compréhension du NLP"
            />
          </div>

          {/* Conclusion */}
          <div className="mt-16">
            <CourseConclusion
              title="Bravo ! Vous maîtrisez maintenant les fondamentaux du NLP et des LLM"
              description="Vous avez exploré un domaine en pleine révolution. Voici vos nouvelles compétences et comment continuer votre apprentissage."
              learningPoints={[
                "Compréhension des enjeux et défis du traitement automatique du langage",
                "Maîtrise des architectures clés : RNN, LSTM, Transformers",
                "Connaissance des modèles phares : BERT, GPT et leurs applications",
                "Capacité à analyser et choisir la bonne approche selon le problème"
              ]}
              nextSteps={[
                "Expérimentez avec les API d'OpenAI, Hugging Face ou Google",
                "Créez votre premier chatbot ou analyseur de sentiment",
                "Rejoignez la communauté NLP française sur Discord et LinkedIn",
                "Explorez les cours avancés sur le fine-tuning et le RAG"
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NLPComprehension;
