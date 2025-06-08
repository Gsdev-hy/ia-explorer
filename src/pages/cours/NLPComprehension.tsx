import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';
import ConceptCard from '@/components/courses/nlp/ConceptCard';
import ArchitectureComparison from '@/components/courses/nlp/ArchitectureComparison';
import TransformerVisualizer from '@/components/courses/nlp/TransformerVisualizer';
import ProcessFlow from '@/components/courses/nlp/ProcessFlow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  MessageSquare, 
  Brain, 
  Layers, 
  Zap, 
  Book, 
  Languages,
  Cpu,
  Network,
  Target,
  FileText,
  Bot,
  Lightbulb,
  Scissors,
  Hash,
  Calculator,
  Eye,
  Shuffle,
  TrendingUp,
  Users,
  Globe,
  Shield,
  AlertTriangle,
  Sparkles,
  Code,
  Database,
  ChartBar,
  Clock,
  Rocket,
  ChevronDown
} from 'lucide-react';

const NLPComprehension = () => {
  const headerProps = {
    title: "Comprendre le Traitement du Langage Naturel (NLP) et les LLM",
    subtitle: "Du texte brut aux modèles de langage les plus avancés : un voyage au cœur de la compréhension artificielle",
    author: "Geoffroy Streit",
    authorDescription: "Expert en intelligence artificielle et traitement du langage",
    duration: "6-8 heures",
    level: "Intermédiaire à Avancé",
    audience: "Curieux de technologie, développeurs, étudiants",
    tags: ["NLP", "LLM", "Transformers", "Deep Learning", "IA Générative", "2024"]
  };

  // Données pour les modules restructurés avec explications dépliables
  const module1Data = [
    {
      icon: <Languages className="h-5 w-5 text-primary" />,
      title: "Le défi du langage",
      items: [
        "Pourquoi le langage humain est-il si complexe ?",
        "Ambiguïté, contexte et nuances culturelles",
        "Différences entre communication humaine et machine",
        "Histoire des premières tentatives automatiques",
        "Échecs et leçons des systèmes symboliques",
        "L'évolution vers l'approche statistique"
      ],
      expandedExplanations: [
        {
          title: "Pourquoi le langage humain est-il si complexe ?",
          content: "Le langage humain n'est pas qu'un simple système de symboles. Il porte en lui des millénaires d'évolution culturelle et cognitive. Contrairement aux langages de programmation qui sont précis et sans ambiguïté, le langage naturel regorge d'implicites, de références contextuelles et de sous-entendus. Chaque phrase peut avoir plusieurs interprétations selon le contexte, l'intonation, ou même le silence qui l'entoure."
        },
        {
          title: "Ambiguïté, contexte et nuances culturelles",
          content: "L'ambiguïté est omniprésente dans le langage. Le mot 'avocat' peut désigner un fruit ou un juriste. La phrase 'Il a vu l'homme avec les jumelles' peut signifier que l'homme avait des jumelles ou que la personne utilisait des jumelles pour le voir. Les nuances culturelles ajoutent une complexité supplémentaire : l'ironie, le sarcasme, les références culturelles partagées, les expressions idiomatiques qui n'ont aucun sens littéral."
        },
        {
          title: "Différences entre communication humaine et machine",
          content: "Les humains communiquent avec tout leur être : gestes, expressions faciales, ton de voix, contexte situationnel. Nous inférons constamment les intentions, comblons les blancs, et adaptons notre interprétation en temps réel. Les machines, elles, ont longtemps été limitées à des règles explicites et des correspondances directes, incapables de cette flexibilité naturelle."
        },
        {
          title: "Histoire des premières tentatives automatiques",
          content: "Dès les années 1950, les pionniers de l'informatique rêvaient de machines capables de comprendre et traduire les langues. Les premiers systèmes étaient basés sur des dictionnaires bilingues et des règles grammaticales simples. L'optimisme était énorme : on pensait résoudre la traduction automatique en quelques années. La réalité s'est avérée bien plus complexe."
        },
        {
          title: "Échecs et leçons des systèmes symboliques",
          content: "Les approches symboliques des années 60-80 tentaient de codifier toutes les règles du langage. Résultat : des systèmes fragiles, incapables de gérer les exceptions, les néologismes, ou les usages créatifs. Chaque nouvelle règle créait de nouveaux cas particuliers. Cette approche, bien que logique, s'est heurtée à la nature fondamentalement statistique et évolutive du langage."
        },
        {
          title: "L'évolution vers l'approche statistique",
          content: "Les années 90 marquent un tournant : plutôt que d'essayer de programmer toutes les règles, pourquoi ne pas laisser les machines apprendre des patterns dans d'énormes corpus de texte ? Cette révolution statistique, puis neuronale, a ouvert la voie aux succès actuels du NLP. Les machines ont commencé à 'sentir' le langage plutôt qu'à le disséquer."
        }
      ]
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Approches historiques",
      items: [
        "Systèmes à base de règles grammaticales",
        "Dictionnaires et ontologies",
        "Analyse syntaxique et sémantique",
        "Limitations des approches symboliques",
        "Transition vers l'apprentissage automatique",
        "Naissance du NLP moderne"
      ],
      expandedExplanations: [
        {
          title: "Systèmes à base de règles grammaticales",
          content: "Les premiers systèmes NLP tentaient de reproduire l'analyse grammaticale humaine. Ils utilisaient des grammaires formelles, des arbres syntaxiques, et des règles de transformation. Chaque langue nécessitait des années de travail linguistique pour établir toutes les règles. Ces systèmes étaient précis sur les cas qu'ils connaissaient, mais cassants face à l'inattendu."
        },
        {
          title: "Dictionnaires et ontologies",
          content: "L'idée était séduisante : créer des dictionnaires exhaustifs reliant chaque mot à son sens, ses synonymes, ses relations sémantiques. Des projets comme WordNet ont tenté de cartographier tout le savoir humain en réseaux de concepts. Mais le sens d'un mot dépend tellement de son contexte que ces approches restaient limitées."
        },
        {
          title: "Analyse syntaxique et sémantique",
          content: "Ces systèmes décomposaient méticuleusement chaque phrase : identification du sujet, verbe, complément, puis interprétation du sens global. L'approche était logique mais butait sur la complexité réelle du langage. Une phrase simple comme 'Time flies like an arrow' peut avoir plusieurs analyses syntaxiques valides."
        },
        {
          title: "Limitations des approches symboliques",
          content: "Le principal problème était la rigidité. Ces systèmes ne savaient pas gérer l'ambiguïté, les fautes de frappe, les néologismes, ou les usages créatifs. Ils demandaient des années de développement pour chaque langue et domaine. Pire, ils ne s'amélioraient pas avec l'usage, contrairement aux humains."
        },
        {
          title: "Transition vers l'apprentissage automatique",
          content: "Les années 90 voient l'émergence d'approches statistiques. Au lieu de programmer des règles, on laisse les algorithmes découvrir des patterns dans de grandes quantités de texte. Les modèles de n-grammes, puis les méthodes d'apprentissage supervisé, commencent à montrer des résultats prometteurs sur des tâches spécifiques."
        },
        {
          title: "Naissance du NLP moderne",
          content: "L'avènement d'internet fournit soudain d'énormes corpus de texte. Les algorithmes d'apprentissage automatique deviennent plus sophistiqués. Les réseaux de neurones font leur retour. Cette convergence de données massives, d'algorithmes puissants et de capacité de calcul accrue donne naissance au NLP moderne que nous connaissons."
        }
      ]
    },
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Objectifs modernes",
      items: [
        "Compréhension du sens et de l'intention",
        "Génération de texte cohérent et créatif",
        "Traduction fidèle et nuancée",
        "Interaction naturelle homme-machine",
        "Analyse de sentiment et d'émotion",
        "Résumé et synthèse automatiques"
      ],
      expandedExplanations: [
        {
          title: "Compréhension du sens et de l'intention",
          content: "L'objectif ultime n'est plus seulement de reconnaître des mots, mais de saisir ce que la personne veut vraiment dire. Cela implique de comprendre les intentions cachées, les émotions sous-jacentes, et même ce qui n'est pas dit explicitement. Les modèles modernes commencent à développer une forme de 'théorie de l'esprit' artificielle."
        },
        {
          title: "Génération de texte cohérent et créatif",
          content: "Aller au-delà de la simple restitution d'informations pour créer du contenu original, cohérent et adapté au contexte. Cela inclut l'écriture créative, la génération de code, la création de contenus marketing personnalisés, ou même la composition poétique. L'IA devient un partenaire créatif."
        },
        {
          title: "Traduction fidèle et nuancée",
          content: "Dépasser la traduction mot-à-mot pour capturer les nuances culturelles, les jeux de mots, les références implicites. Une bonne traduction moderne préserve non seulement le sens, mais aussi le ton, le style et l'intention de l'auteur original. C'est un défi qui touche à l'essence même de la communication interculturelle."
        },
        {
          title: "Interaction naturelle homme-machine",
          content: "Créer des interfaces où parler à une machine se rapproche de parler à un humain compréhensif. Cela implique de gérer les interruptions, les changements de sujet, les références à des conversations précédentes, et même les silences significatifs. L'objectif est une fluidité conversationnelle naturelle."
        },
        {
          title: "Analyse de sentiment et d'émotion",
          content: "Identifier non seulement ce qui est dit, mais comment c'est dit. Détecter la frustration dans un email de service client, l'enthousiasme dans un avis produit, ou la nostalgie dans un post sur les réseaux sociaux. Cette capacité ouvre des applications en psychologie, marketing, et relations humaines."
        },
        {
          title: "Résumé et synthèse automatiques",
          content: "Face à l'explosion informationnelle, les systèmes doivent savoir extraire l'essentiel de documents volumineux, synthétiser des points de vue multiples, et présenter l'information de manière structurée et accessible. C'est devenu crucial pour la gestion des connaissances et la prise de décision."
        }
      ]
    }
  ];

  const module2Data = [
    {
      icon: <Scissors className="h-5 w-5 text-primary" />,
      title: "Tokenisation avancée",
      items: [
        "Découpage intelligent du texte",
        "Gestion des langues agglutinantes",
        "Tokenisation par sous-mots (BPE, SentencePiece)",
        "Traitement des emojis et caractères spéciaux",
        "Gestion multilingue et scripts non-latins",
        "Impact sur les performances des modèles"
      ]
    },
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: "Représentations vectorielles",
      items: [
        "Evolution de One-Hot vers les embeddings",
        "Word2Vec : Skip-gram et CBOW",
        "GloVe et FastText",
        "Embeddings contextuels (ELMo, BERT)",
        "Espaces sémantiques et analogies",
        "Visualisation et interprétation"
      ]
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "Modèles de langage",
      items: [
        "N-grammes et chaînes de Markov",
        "Estimation de probabilités",
        "Lissage et gestion du vocabulaire",
        "Métriques d'évaluation (perplexité)",
        "Modèles neuronaux de langage",
        "Vers les architectures modernes"
      ]
    }
  ];

  const nlpProcessSteps = [
    {
      title: "Tokenisation",
      description: "Découpage du texte en unités traitables",
      input: "Bonjour le monde!",
      output: "['Bonjour', 'le', 'monde', '!']",
      transformation: "Segmentation intelligente basée sur les espaces, la ponctuation et les règles linguistiques",
      icon: <Scissors className="h-4 w-4" />
    },
    {
      title: "Normalisation",
      description: "Standardisation et nettoyage",
      input: "['Bonjour', 'le', 'monde', '!']",
      output: "['bonjour', 'le', 'monde', '!']",
      transformation: "Conversion en minuscules, suppression des accents, normalisation Unicode",
      icon: <Hash className="h-4 w-4" />
    },
    {
      title: "Vectorisation",
      description: "Conversion en représentations numériques",
      input: "['bonjour', 'le', 'monde', '!']",
      output: "[[0.2, -0.1, 0.8], [0.1, 0.5, -0.3], ...]",
      transformation: "Mapping vers des embeddings pré-entraînés ou apprentis",
      icon: <Calculator className="h-4 w-4" />
    },
    {
      title: "Traitement",
      description: "Application du modèle NLP",
      input: "Vecteurs d'embeddings",
      output: "Représentations contextuelles",
      transformation: "Réseau de neurones, Transformer, ou autre architecture",
      icon: <Brain className="h-4 w-4" />
    }
  ];

  const conceptsData = [
    {
      title: "Tokenisation",
      description: "Processus de découpage du texte en unités plus petites appelées tokens, qui peuvent être des mots, des sous-mots ou des caractères.",
      example: "\"Intelligence artificielle\" → [\"Intelligence\", \"artificielle\"]",
      difficulty: "Débutant" as const,
      icon: <Scissors className="h-5 w-5" />,
      analogy: "Comme découper une phrase en mots individuels pour pouvoir les analyser un par un.",
      technicalDetails: [
        "Gestion de la ponctuation et des espaces",
        "Traitement des contractions et élisions",
        "Support multilingue et caractères Unicode",
        "Optimisation pour le vocabulaire du modèle"
      ],
      applications: ["Preprocessing", "Analyse syntaxique", "Recherche"]
    },
    {
      title: "Embeddings",
      description: "Représentations vectorielles denses qui capturent la sémantique des mots dans un espace multidimensionnel.",
      example: "\"roi\" - \"homme\" + \"femme\" ≈ \"reine\"",
      difficulty: "Intermédiaire" as const,
      icon: <Network className="h-5 w-5" />,
      analogy: "Comme placer chaque mot sur une carte géante où les mots similaires sont proches les uns des autres.",
      technicalDetails: [
        "Dimensions typiques : 100-1024",
        "Apprentissage par co-occurrence",
        "Propriétés d'analogie sémantique",
        "Mise à jour continue pendant l'entraînement"
      ],
      applications: ["Similarité", "Analogies", "Classification", "Clustering"]
    },
    {
      title: "Attention",
      description: "Mécanisme permettant au modèle de se concentrer sur les parties pertinentes de l'entrée lors du traitement.",
      example: "Dans 'Le chat noir mange', 'mange' fait attention à 'chat'",
      difficulty: "Avancé" as const,
      icon: <Eye className="h-5 w-5" />,
      analogy: "Comme votre cerveau qui se concentre automatiquement sur les mots importants quand vous lisez une phrase.",
      technicalDetails: [
        "Calcul des scores d'attention",
        "Softmax pour la normalisation",
        "Multi-head attention",
        "Self-attention vs cross-attention"
      ],
      applications: ["Traduction", "Résumé", "Question-réponse", "Génération"]
    }
  ];

  const didYouKnowItems = [
    {
      title: "Ambiguïté du langage",
      content: "La phrase anglaise 'Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo' est grammaticalement correcte ! Elle signifie que les bisons de Buffalo (ville) que d'autres bisons de Buffalo intimident, intimident eux-mêmes d'autres bisons de Buffalo."
    },
    {
      title: "Vocabulaire de GPT-4",
      content: "GPT-4 utilise un vocabulaire d'environ 100,000 tokens, permettant de représenter efficacement la plupart des langues du monde. Chaque token peut représenter un mot entier, une partie de mot, ou même des caractères spéciaux."
    },
    {
      title: "Puissance des Transformers",
      content: "L'architecture Transformer a révolutionné le NLP en 2017. Aujourd'hui, pratiquement tous les grands modèles de langage (GPT, BERT, T5, PaLM) utilisent cette architecture ou ses variantes."
    },
    {
      title: "Échelle des LLM",
      content: "GPT-3 a été entraîné sur environ 45 TB de texte, équivalent à 45 millions de livres. L'entraînement a nécessité des milliers de GPU pendant plusieurs semaines, coûtant plusieurs millions de dollars."
    },
    {
      title: "Émergence des capacités",
      content: "Les grandes modèles montrent des 'capacités émergentes' : des aptitudes qui apparaissent soudainement au-delà d'une certaine taille, comme le raisonnement mathématique ou la programmation, sans avoir été explicitement entraînés pour ces tâches."
    },
    {
      title: "Multilinguisme",
      content: "Les LLM modernes peuvent traduire entre plus de 100 langues, même pour des paires de langues qu'ils n'ont jamais vues ensemble pendant l'entraînement, grâce à leur représentation interne commune des concepts."
    }
  ];

  // Composant pour les sections dépliables
  const ExpandableSection = ({ title, content }: { title: string; content: string }) => (
    <Collapsible className="border rounded-lg">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left hover:bg-muted/50 transition-colors">
        <span className="font-medium text-foreground">{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      </CollapsibleContent>
    </Collapsible>
  );

  // Composant pour les modules avec sections dépliables
  const ModuleWithExpandable = ({ module }: { module: any }) => (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">{module.icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-3">{module.title}</h4>
          <ul className="space-y-2 mb-4">
            {module.items.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          {module.expandedExplanations && (
            <div className="space-y-3">
              <h5 className="font-medium text-primary">Explications détaillées :</h5>
              {module.expandedExplanations.map((explanation: any, index: number) => (
                <ExpandableSection 
                  key={index}
                  title={explanation.title}
                  content={explanation.content}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Hero
        title={headerProps.title}
        subtitle={headerProps.subtitle}
      />

      <section className="section-container">
        <CourseHeader {...headerProps} />

        {/* Introduction enrichie */}
        <CourseModule
          title="Introduction : L'odyssée de la compréhension automatique"
          description="Embarquez dans un voyage fascinant à travers l'évolution du traitement du langage naturel"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  Imaginez un monde où vous pourriez discuter avec votre ordinateur comme avec votre meilleur ami, 
                  lui demander d'analyser des milliers de documents en quelques secondes, de traduire 
                  instantanément n'importe quel texte, ou encore de créer des histoires captivantes sur commande. 
                  Ce monde n'est plus de la science-fiction : c'est notre réalité d'aujourd'hui, rendue possible 
                  par les avancées spectaculaires du traitement du langage naturel.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      Le défi titanesque
                    </h4>
                    <p className="text-muted-foreground">
                      Le langage humain est l'une des capacités les plus complexes de notre espèce. 
                      Nous jonglons naturellement avec l'ambiguïté, les métaphores, l'ironie, 
                      les références culturelles... Enseigner cette maîtrise à une machine représente 
                      l'un des défis les plus fascinants de l'intelligence artificielle.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      L'évolution fulgurante
                    </h4>
                    <p className="text-muted-foreground">
                      En seulement quelques décennies, nous sommes passés de simples correcteurs 
                      orthographiques à des IA capables de converser, créer, analyser et comprendre 
                      le langage avec une sophistication qui rivalise parfois avec les humains.
                    </p>
                  </div>
                </div>

                <AnalogyBox 
                  title="Le langage : notre superpouvoir evolutif"
                  content="Si les humains dominent la planète, c'est en grande partie grâce au langage. Cette capacité unique nous permet de transmettre des idées complexes, de collaborer à grande échelle, et d'accumuler les connaissances de génération en génération. Reproduire artificiellement cette capacité, c'est toucher à l'essence même de l'intelligence humaine."
                  variant="tip"
                />

                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-6 rounded-lg">
                  <h4 className="font-medium flex items-center gap-2 mb-4">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Votre parcours d'apprentissage
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium mb-2 text-foreground">Ce que vous découvrirez :</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Comment une machine "lit" et "comprend" un texte</li>
                        <li>• Les étapes de transformation du langage en nombres</li>
                        <li>• L'évolution des correcteurs aux IA conversationnelles</li>
                        <li>• Les secrets des modèles comme ChatGPT et Claude</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-foreground">Compétences acquises :</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Comprendre les enjeux du NLP moderne</li>
                        <li>• Maîtriser les concepts clés (tokens, embeddings, attention)</li>
                        <li>• Saisir le fonctionnement des Transformers</li>
                        <li>• Appréhender les capacités et limites des LLM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 étendu avec sections dépliables */}
        <CourseModule
          title="Module 1 : Comprendre le défi de la compréhension automatique"
          description="Plongez dans la complexité fascinante du langage humain et découvrez pourquoi il est si difficile à automatiser"
        >
          <div className="space-y-8">
            {module1Data.map((module, index) => (
              <ModuleWithExpandable key={index} module={module} />
            ))}
          </div>
        </CourseModule>

        <ZoomOn title="L'exemple révélateur de la traduction automatique">
          <div className="space-y-4">
            <p className="text-foreground">
              En 1954, lors de la première démonstration publique de traduction automatique, 
              IBM traduit avec fierté 60 phrases du russe vers l'anglais. Les chercheurs prédisent 
              alors que le problème sera résolu "dans trois à cinq ans au maximum"...
            </p>
            
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-400">
              <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">Exemple d'échec historique :</h5>
              <div className="space-y-2 text-sm">
                <p className="text-red-800 dark:text-red-200"><strong>Phrase originale (anglais) :</strong> "The spirit is willing, but the flesh is weak."</p>
                <p className="text-red-800 dark:text-red-200"><strong>Traduction en russe puis retour en anglais :</strong> "The vodka is good, but the meat is rotten."</p>
              </div>
            </div>

            <p className="text-foreground">
              Soixante-dix ans plus tard, nous avons DeepL et Google Translate qui traduisent 
              instantanément dans plus de 100 langues avec une qualité remarquable. Mais le chemin 
              a été semé d'embûches qui nous ont appris énormément sur la nature du langage :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-medium text-foreground">Défis identifiés :</h5>
                <div className="space-y-2">
                  <ExpandableSection 
                    title="Ambiguïté lexicale"
                    content="Un même mot peut avoir plusieurs sens selon le contexte. Par exemple, 'bank' peut signifier 'banque' ou 'rive'. Les systèmes doivent comprendre le contexte pour choisir la bonne interprétation, ce qui nécessite une compréhension sémantique profonde."
                  />
                  <ExpandableSection 
                    title="Références contextuelles"
                    content="Les pronoms, les références temporelles ('hier', 'maintenant'), et les références situationnelles ('ici', 'là-bas') nécessitent de maintenir un modèle du contexte conversationnel et situationnel pour être correctement interprétées."
                  />
                  <ExpandableSection 
                    title="Expressions idiomatiques"
                    content="Des expressions comme 'il pleut des cordes' ne peuvent pas être traduites littéralement. Chaque culture a ses propres expressions idiomatiques qui nécessitent une connaissance culturelle profonde pour être comprises et traduites appropriément."
                  />
                  <ExpandableSection 
                    title="Nuances culturelles"
                    content="Les niveaux de politesse, les références culturelles implicites, et les connotations varient énormément entre les cultures. Une traduction fidèle doit capturer non seulement le sens, mais aussi le ton et les implications culturelles."
                  />
                  <ExpandableSection 
                    title="Sous-entendus et implicites"
                    content="Beaucoup de communication humaine repose sur ce qui n'est pas dit explicitement. L'ironie, le sarcasme, les sous-entendus nécessitent une compréhension du contexte social et des intentions du locuteur."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-foreground">Solutions développées :</h5>
                <div className="space-y-2">
                  <ExpandableSection 
                    title="Approches statistiques"
                    content="L'utilisation de corpus parallèles massifs pour apprendre les correspondances statistiques entre les langues. Cette approche capture automatiquement les patterns de traduction sans programmation explicite de règles."
                  />
                  <ExpandableSection 
                    title="Modèles neuronaux"
                    content="Les réseaux de neurones permettent de capturer des relations complexes et non-linéaires entre les mots et concepts. Ils peuvent apprendre des représentations distribuées qui capturent la sémantique de manière plus flexible."
                  />
                  <ExpandableSection 
                    title="Attention et contexte"
                    content="Les mécanismes d'attention permettent aux modèles de se concentrer sur les parties pertinentes du contexte lors de la traduction. Cela résout en partie le problème des références contextuelles et de l'ambiguïté."
                  />
                  <ExpandableSection 
                    title="Apprentissage sur corpus massifs"
                    content="L'utilisation de téraoctets de texte parallèle permet aux modèles d'apprendre automatiquement les nuances, expressions idiomatiques et variations culturelles sans programmation explicite."
                  />
                  <ExpandableSection 
                    title="Architectures Transformer"
                    content="Ces architectures révolutionnaires permettent de traiter l'ensemble du contexte simultanément, capturant des dépendances à long terme et améliorant considérablement la qualité de la traduction."
                  />
                </div>
              </div>
            </div>
          </div>
        </ZoomOn>

        {/* Nouveau processus flow pour la compréhension */}
        <div className="my-12">
          <ProcessFlow
            title="Pipeline de traitement NLP moderne"
            description="Découvrez étape par étape comment un texte brut devient compréhensible pour une machine"
            steps={nlpProcessSteps}
          />
        </div>

        {/* Module 2 avec cartes de concepts */}
        <CourseModule
          title="Module 2 : Les fondamentaux techniques du NLP"
          description="Maîtrisez les concepts essentiels qui transforment le texte en données exploitables"
          modules={module2Data}
        />

        {/* Section de cartes de concepts */}
        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Concepts clés en profondeur</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conceptsData.map((concept, index) => (
              <ConceptCard key={index} {...concept} />
            ))}
          </div>
        </div>

        <DidYouKnow items={didYouKnowItems.slice(0, 3)} />

        {/* Module 3 : Révolution des Transformers avec visualisation */}
        <CourseModule
          title="Module 3 : La révolution Transformer"
          description="Explorez l'architecture qui a transformé le NLP et donné naissance aux LLM modernes"
        >
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  "Attention Is All You Need" : L'article qui a tout changé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg text-foreground">
                    Le 12 juin 2017, une équipe de Google publie un article de 11 pages qui va 
                    révolutionner l'intelligence artificielle. Le titre, provocateur, annonce 
                    que l'attention est tout ce dont on a besoin. Cette déclaration audacieuse 
                    s'avérera prophétique.
                  </p>
                  
                  <AnalogyBox 
                    title="L'attention : comme votre cerveau lit une phrase"
                    content="Quand vous lisez 'Le chat que j'ai vu hier dormait paisiblement', votre cerveau ne traite pas chaque mot isolément. Il fait automatiquement des liens : 'dormait' se rapporte à 'chat', 'hier' modifie 'vu', etc. Le mécanisme d'attention reproduit exactement cette capacité naturelle."
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                      <h5 className="font-medium text-red-900 dark:text-red-100 mb-3">Avant les Transformers (RNN/LSTM)</h5>
                      <ul className="text-red-800 dark:text-red-200 space-y-2 text-sm">
                        <li>• <strong>Traitement séquentiel</strong> : mot par mot, lentement</li>
                        <li>• <strong>Mémoire limitée</strong> : oubli des éléments distants</li>
                        <li>• <strong>Pas de parallélisation</strong> : impossible d'accélérer</li>
                        <li>• <strong>Gradient vanishing</strong> : difficultés d'apprentissage</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                      <h5 className="font-medium text-green-900 dark:text-green-100 mb-3">Avec les Transformers</h5>
                      <ul className="text-green-800 dark:text-green-200 space-y-2 text-sm">
                        <li>• <strong>Traitement parallèle</strong> : tous les mots simultanément</li>
                        <li>• <strong>Attention globale</strong> : chaque mot "voit" tous les autres</li>
                        <li>• <strong>Scalabilité</strong> : plus de données = meilleures performances</li>
                        <li>• <strong>Transfert learning</strong> : réutilisation sur d'autres tâches</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visualisateur de Transformer */}
            <TransformerVisualizer />
          </div>
        </CourseModule>

        {/* Comparaison d'architectures */}
        <div className="my-12">
          <ArchitectureComparison />
        </div>

        {/* Module 4 : LLM avec statistiques impressionnantes */}
        <CourseModule
          title="Module 4 : L'ère des Large Language Models (LLM)"
          description="Découvrez comment l'échelle a révélé des capacités émergentes extraordinaires"
        >
          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-lg text-foreground">
                    Les <TechnicalTooltip 
                      term="Large Language Models" 
                      definition="Modèles de langage entraînés sur d'énormes quantités de texte avec des milliards de paramètres"
                    >
                      Large Language Models (LLM)
                    </TechnicalTooltip> ne sont pas simplement des modèles plus gros. 
                    Au-delà d'une certaine taille critique, ils développent des capacités surprenantes 
                    qui n'étaient pas présentes dans les versions plus petites : c'est ce qu'on appelle 
                    les "capacités émergentes".
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-lg border">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Capacités émergentes des LLM
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Raisonnement</h5>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Logique déductive</li>
                          <li>• Résolution de problèmes</li>
                          <li>• Mathématiques</li>
                          <li>• Analogies complexes</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Créativité</h5>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Écriture créative</li>
                          <li>• Poésie et littérature</li>
                          <li>• Humour et jeux de mots</li>
                          <li>• Innovation conceptuelle</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Technique</h5>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Programmation</li>
                          <li>• Debugging</li>
                          <li>• Architecture logicielle</li>
                          <li>• Optimisation de code</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline évolutive des LLM */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-foreground">L'escalade vers l'intelligence</h4>
                    <div className="space-y-4">
                      {[
                        {
                          name: "GPT-1",
                          year: "2018",
                          params: "117M",
                          achievement: "Preuve de concept du pre-training",
                          icon: <Brain className="h-6 w-6" />,
                          color: "bg-blue-100 border-blue-300 dark:bg-blue-950/20 dark:border-blue-700"
                        },
                        {
                          name: "GPT-2",
                          year: "2019",
                          params: "1.5B",
                          achievement: "Génération de texte cohérent",
                          icon: <FileText className="h-6 w-6" />,
                          color: "bg-green-100 border-green-300 dark:bg-green-950/20 dark:border-green-700"
                        },
                        {
                          name: "GPT-3",
                          year: "2020",
                          params: "175B",
                          achievement: "Capacités émergentes, few-shot learning",
                          icon: <Lightbulb className="h-6 w-6" />,
                          color: "bg-yellow-100 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-700"
                        },
                        {
                          name: "ChatGPT",
                          year: "2022",
                          params: "~175B",
                          achievement: "Interface conversationnelle grand public",
                          icon: <MessageSquare className="h-6 w-6" />,
                          color: "bg-purple-100 border-purple-300 dark:bg-purple-950/20 dark:border-purple-700"
                        },
                        {
                          name: "GPT-4",
                          year: "2023",
                          params: "~1.8T",
                          achievement: "Multimodalité, raisonnement avancé",
                          icon: <Eye className="h-6 w-6" />,
                          color: "bg-red-100 border-red-300 dark:bg-red-950/20 dark:border-red-700"
                        }
                      ].map((model, index) => (
                        <div key={index} className={`p-4 rounded-lg border-2 ${model.color}`}>
                          <div className="flex items-center gap-4">
                            <div className="text-primary">{model.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="font-semibold text-foreground">{model.name}</h5>
                                <Badge variant="outline">{model.year}</Badge>
                                <Badge>{model.params} paramètres</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{model.achievement}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ZoomOn title="L'effet d'échelle : quand la quantité devient qualité">
              <div className="space-y-4">
                <p className="text-foreground">
                  Une découverte fascinante du deep learning est que certaines capacités 
                  n'apparaissent qu'au-delà d'une taille critique. C'est le phénomène des 
                  "capacités émergentes" : des aptitudes qui surgissent soudainement sans 
                  avoir été explicitement programmées.
                </p>
                
                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-l-4 border-amber-400">
                  <h5 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Exemple concret :</h5>
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    GPT-3 avec 175 milliards de paramètres peut résoudre des problèmes 
                    mathématiques complexes, alors que GPT-2 avec 1.5 milliards ne le pouvait pas. 
                    Cette capacité n'a pas été programmée : elle a émergé naturellement de l'échelle.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2 text-foreground">Facteurs d'émergence :</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Taille du modèle (paramètres)</li>
                      <li>• Quantité de données d'entraînement</li>
                      <li>• Qualité et diversité du corpus</li>
                      <li>• Puissance computationnelle</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-foreground">Capacités émergentes typiques :</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Raisonnement multi-étapes</li>
                      <li>• Programmation et debugging</li>
                      <li>• Créativité et originalité</li>
                      <li>• Théorie de l'esprit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ZoomOn>
          </div>
        </CourseModule>

        <DidYouKnow items={didYouKnowItems.slice(3)} />

        {/* Module 5 : Applications et défis */}
        <CourseModule
          title="Module 5 : Applications révolutionnaires et défis sociétaux"
          description="Explorez l'impact transformateur du NLP sur notre société et ses enjeux"
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Applications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    Applications révolutionnaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        category: "Communication",
                        icon: <Globe className="h-4 w-4" />,
                        items: ["Traduction instantanée", "Assistants vocaux", "Chatbots intelligents", "Synthèse vocale"]
                      },
                      {
                        category: "Productivité",
                        icon: <Code className="h-4 w-4" />,
                        items: ["Génération de code", "Rédaction assistée", "Résumé automatique", "Analyse de documents"]
                      },
                      {
                        category: "Créativité",
                        icon: <Sparkles className="h-4 w-4" />,
                        items: ["Écriture créative", "Brainstorming", "Scénarisation", "Composition musicale"]
                      },
                      {
                        category: "Analyse",
                        icon: <ChartBar className="h-4 w-4" />,
                        items: ["Sentiment analysis", "Détection de fake news", "Veille stratégique", "Recherche académique"]
                      }
                    ].map((section, index) => (
                      <div key={index} className="space-y-2">
                        <h5 className="font-medium flex items-center gap-2 text-foreground">
                          {section.icon}
                          {section.category}
                        </h5>
                        <ul className="text-sm text-muted-foreground ml-6 space-y-1">
                          {section.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Défis et enjeux */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    Défis et enjeux critiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        category: "Éthique",
                        icon: <Shield className="h-4 w-4" />,
                        items: ["Biais algorithmiques", "Équité et inclusion", "Transparence des décisions", "Responsabilité"]
                      },
                      {
                        category: "Société",
                        icon: <Users className="h-4 w-4" />,
                        items: ["Impact sur l'emploi", "Désinformation", "Dépendance technologique", "Fracture numérique"]
                      },
                      {
                        category: "Technique",
                        icon: <Database className="h-4 w-4" />,
                        items: ["Hallucinations", "Robustesse", "Interprétabilité", "Sécurité"]
                      },
                      {
                        category: "Environnement",
                        icon: <Globe className="h-4 w-4" />,
                        items: ["Empreinte carbone", "Consommation énergétique", "Durabilité", "Optimisation"]
                      }
                    ].map((section, index) => (
                      <div key={index} className="space-y-2">
                        <h5 className="font-medium flex items-center gap-2 text-foreground">
                          {section.icon}
                          {section.category}
                        </h5>
                        <ul className="text-sm text-muted-foreground ml-6 space-y-1">
                          {section.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section spéciale sur les hallucinations */}
            <ZoomOn title="Les hallucinations des LLM : quand l'IA invente">
              <div className="space-y-4">
                <p className="text-foreground">
                  Un phénomène fascinant et problématique des LLM est leur tendance à "halluciner" : 
                  générer des informations plausibles mais factuellement incorrectes. Ces modèles 
                  excellent à produire du texte cohérent, mais ils ne "savent" pas vraiment 
                  distinguer le vrai du faux.
                </p>
                
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-400">
                  <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">Exemple d'hallucination :</h5>
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    <strong>Question :</strong> "Qui a écrit 'Le Guide Galactique de l'IA' ?"<br/>
                    <strong>Réponse hallucinée :</strong> "Ce livre a été écrit par Douglas Neural en 2019, 
                    s'inspirant de Douglas Adams. Il explore les implications philosophiques de l'IA..."
                    <br/><br/>
                    <em>Ce livre n'existe pas, mais la réponse semble crédible !</em>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2 text-foreground">Causes des hallucinations :</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Données d'entraînement incomplètes</li>
                      <li>• Pression pour générer du contenu</li>
                      <li>• Confusion entre patterns et faits</li>
                      <li>• Absence de vérification factuelle</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-foreground">Solutions en développement :</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Retrieval-Augmented Generation (RAG)</li>
                      <li>• Fact-checking automatique</li>
                      <li>• Fine-tuning sur données vérifiées</li>
                      <li>• Modèles de confiance et incertitude</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ZoomOn>
          </div>
        </CourseModule>

        {/* Module 6 : Vers l'avenir */}
        <CourseModule
          title="Module 6 : Horizons futurs du NLP"
          description="Explorez les frontières actuelles et les développements à venir"
        >
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-lg text-foreground">
                    Le NLP moderne n'en est qu'à ses débuts. Les prochaines années promettent 
                    des avancées révolutionnaires qui transformeront encore davantage notre 
                    rapport au langage et à l'information.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Multimodalité",
                        icon: <Eye className="h-6 w-6" />,
                        description: "Intégration texte, image, audio et vidéo dans un modèle unifié",
                        trends: ["Vision-Language Models", "Audio-Visual Understanding", "Embodied AI"]
                      },
                      {
                        title: "Efficacité",
                        icon: <Zap className="h-6 w-6" />,
                        description: "Modèles plus performants avec moins de ressources",
                        trends: ["Distillation de modèles", "Architectures efficaces", "Quantification"]
                      },
                      {
                        title: "Spécialisation",
                        icon: <Target className="h-6 w-6" />,
                        description: "Modèles experts pour des domaines spécifiques",
                        trends: ["Medical NLP", "Legal AI", "Scientific Discovery"]
                      },
                      {
                        title: "Personnalisation",
                        icon: <Users className="h-6 w-6" />,
                        description: "IA adaptée aux préférences individuelles",
                        trends: ["Few-shot learning", "Meta-learning", "Federated Learning"]
                      },
                      {
                        title: "Raisonnement",
                        icon: <Brain className="h-6 w-6" />,
                        description: "Capacités de raisonnement logique avancées",
                        trends: ["Chain-of-Thought", "Tool Usage", "Mathematical Reasoning"]
                      },
                      {
                        title: "Interaction",
                        icon: <MessageSquare className="h-6 w-6" />,
                        description: "Interfaces conversationnelles naturelles",
                        trends: ["Voice AI", "Emotional Intelligence", "Social Awareness"]
                      }
                    ].map((trend, index) => (
                      <Card key={index} className="border-primary/20">
                        <CardContent className="p-4">
                          <div className="text-primary mb-3">{trend.icon}</div>
                          <h4 className="font-semibold mb-2 text-foreground">{trend.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{trend.description}</p>
                          <div className="space-y-1">
                            {trend.trends.map((t, i) => (
                              <Badge key={i} variant="outline" className="text-xs mr-1">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Conclusion enrichie */}
        <CourseConclusion
          title="Conclusion : Vous maîtrisez maintenant les fondements du NLP moderne"
          description="Récapitulatif de votre parcours et ouverture vers l'avenir"
          learningPoints={[
            "Comprendre les défis fondamentaux du traitement du langage naturel",
            "Maîtriser les concepts clés : tokenisation, embeddings, attention, Transformers",
            "Saisir l'importance révolutionnaire de l'architecture Transformer",
            "Appréhender le fonctionnement et les capacités émergentes des LLM",
            "Identifier les applications concrètes et les enjeux sociétaux",
            "Connaître les horizons futurs et les défis à relever"
          ]}
          nextSteps={[
            "Approfondissez avec les techniques de prompt engineering avancé",
            "Explorez le fine-tuning de modèles pour des tâches spécifiques",
            "Découvrez les modèles multimodaux (GPT-4V, DALL-E, etc.)",
            "Initiez-vous au développement d'applications NLP concrètes",
            "Participez aux communautés de recherche et open source",
            "Suivez les dernières publications scientifiques du domaine"
          ]}
        />
      </section>
    </>
  );
};

export default NLPComprehension;
