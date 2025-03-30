import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { MessageSquare, Eye, Network, Cpu, BrainCircuit, BarChart3, Code, Sparkles, Layers } from 'lucide-react';
import AITypesVisualization from '../components/ml/AITypesVisualization';
import AIComparisonTable from '../components/ml/AIComparisonTable';
import MLApplications from '../components/ml/MLApplications';
import AIArchitecturesVisualization from '../components/ml/AIArchitecturesVisualization';
import { motion } from 'framer-motion';

/**
 * Page sur les différents types d'IA
 * @returns {JSX.Element} Le composant de la page des types d'IA
 */
const TypesIA = () => {
  return (
    <>
      <Hero
        title="Les Types d'Intelligence Artificielle"
        subtitle="Explorez les différentes approches technologiques de l'IA : modèles de langage, réseaux neuronaux, analyse prédictive et plus encore."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Taxonomie"
          title="Les principales familles d'IA"
          description="L'intelligence artificielle regroupe différentes approches et technologies, chacune avec ses forces, faiblesses et domaines d'application privilégiés."
          center
        />

        <AITypesVisualization />
        
        <div className="mb-16">
          <AIComparisonTable />
        </div>
        
        <AIArchitecturesVisualization />
        
        <MLApplications />

        <div className="mt-24 space-y-24">
          {/* LLM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                <MessageSquare size={32} className="text-primary" />
              </div>
              <h3 className="heading-lg mb-4">Modèles de Langage (LLM)</h3>
              <p className="mb-4 text-muted-foreground">
                Les Large Language Models (LLM) sont des modèles d'IA entraînés sur d'immenses corpus de texte 
                pour comprendre et générer du langage humain de manière cohérente et contextuelle.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Capable de générer du texte, traduire, résumer et répondre à des questions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Utilisés dans les chatbots, assistants virtuels et outils de création de contenu</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Exemples : GPT-4, Claude, LLaMA, Mistral</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-2xl animate-slide-right">
              <h4 className="text-lg font-semibold mb-4">Fonctionnement technique</h4>
              <p className="mb-4">
                Les LLM utilisent des architectures basées sur les transformers avec des mécanismes d'attention 
                pour traiter le texte. Ils sont entraînés en deux phases :
              </p>
              <ol className="space-y-3 ml-6 list-decimal text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Pré-entraînement :</span> Le modèle apprend 
                  les structures du langage sur d'énormes corpus de texte.
                </li>
                <li>
                  <span className="font-medium text-foreground">Fine-tuning :</span> Le modèle est affiné 
                  sur des tâches spécifiques avec des données annotées.
                </li>
              </ol>
              <div className="mt-6 p-4 rounded-lg bg-secondary/40">
                <h5 className="font-medium mb-2">Avancées récentes</h5>
                <p className="text-sm text-muted-foreground">
                  L'émergence de techniques comme RLHF (Reinforcement Learning from Human Feedback) 
                  a considérablement amélioré l'alignement des LLM avec les attentes humaines, 
                  réduisant les sorties problématiques et améliorant l'utilité des réponses.
                </p>
              </div>
            </div>
          </div>

          {/* RAG */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-6 rounded-2xl animate-slide-left">
              <h4 className="text-lg font-semibold mb-4">Architecture RAG</h4>
              <div className="mb-6 p-5 rounded-lg bg-secondary/40">
                <ol className="space-y-3 ml-4 list-decimal">
                  <li>
                    <span className="font-medium">Indexation des connaissances :</span>{" "}
                    <span className="text-muted-foreground">Les documents sont transformés en vecteurs et stockés dans une base vectorielle</span>
                  </li>
                  <li>
                    <span className="font-medium">Recherche sémantique :</span>{" "}
                    <span className="text-muted-foreground">Lors d'une requête, le système identifie les informations pertinentes</span>
                  </li>
                  <li>
                    <span className="font-medium">Augmentation :</span>{" "}
                    <span className="text-muted-foreground">Le LLM reçoit à la fois la requête et les informations pertinentes</span>
                  </li>
                  <li>
                    <span className="font-medium">Génération :</span>{" "}
                    <span className="text-muted-foreground">Le LLM génère une réponse fondée sur les connaissances fournies</span>
                  </li>
                </ol>
              </div>
              <p className="text-sm text-muted-foreground">
                Cette approche combine les forces des bases de connaissances structurées avec la 
                fluidité des modèles de langage, permettant des réponses à la fois précises et naturelles.
              </p>
            </div>
            <div className="order-1 lg:order-2 animate-slide-right">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                <Code size={32} className="text-primary" />
              </div>
              <h3 className="heading-lg mb-4">Retrieval-Augmented Generation (RAG)</h3>
              <p className="mb-4 text-muted-foreground">
                Le RAG est une approche qui améliore les LLM en les connectant à des sources d'information externes, 
                leur permettant de fournir des réponses basées sur des données actuelles et vérifiables.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Réduit les hallucinations en ancrant les réponses dans des sources fiables</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Permet d'accéder à des informations récentes non incluses dans l'entraînement</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Applications : assistants documentaires, systèmes de support client, recherche avancée</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Réseaux de Neurones Convolutifs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="heading-lg mb-4">Réseaux de Neurones Convolutifs (CNN)</h3>
              <p className="mb-4 text-muted-foreground">
                Les CNN sont des architectures de deep learning spécialement conçues pour traiter des données 
                structurées en grille, comme les images, en utilisant des opérations de convolution.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Excellents pour la reconnaissance d'images, la classification et la segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Utilisés dans la vision par ordinateur, l'imagerie médicale et la surveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Architectures connues : ResNet, VGG, EfficientNet</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-2xl animate-slide-right">
              <h4 className="text-lg font-semibold mb-4">Structure d'un CNN</h4>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">Couches de convolution</h5>
                  <p className="text-sm text-muted-foreground">
                    Appliquent des filtres pour détecter des motifs locaux (contours, textures, formes)
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">Couches de pooling</h5>
                  <p className="text-sm text-muted-foreground">
                    Réduisent la dimension spatiale pour extraire les caractéristiques les plus importantes
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">Couches entièrement connectées</h5>
                  <p className="text-sm text-muted-foreground">
                    Intègrent toutes les caractéristiques pour la classification finale
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Cette architecture hiérarchique permet aux CNN d'apprendre progressivement des 
                représentations de plus en plus abstraites d'une image, des contours simples 
                jusqu'aux objets complexes.
              </p>
            </div>
          </div>

          {/* Traitement du Langage Naturel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-6 rounded-2xl animate-slide-left">
              <h4 className="text-lg font-semibold mb-4">Tâches principales du NLP</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                  <div>
                    <h5 className="font-medium">Analyse grammaticale</h5>
                    <p className="text-sm text-muted-foreground">Tokenisation, analyse syntaxique, étiquetage grammatical</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                  <div>
                    <h5 className="font-medium">Compréhension sémantique</h5>
                    <p className="text-sm text-muted-foreground">Extraction d'entités, analyse de sentiment, résolution de références</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                  <div>
                    <h5 className="font-medium">Génération de texte</h5>
                    <p className="text-sm text-muted-foreground">Traduction, résumé, dialogue, création de contenu</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                L'avènement des transformers et de l'attention a révolutionné le NLP, permettant 
                une meilleure capture des dépendances à longue distance dans le texte.
              </p>
            </div>
            <div className="order-1 lg:order-2 animate-slide-right">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                <MessageSquare size={32} className="text-primary" />
              </div>
              <h3 className="heading-lg mb-4">Traitement du Langage Naturel (NLP)</h3>
              <p className="mb-4 text-muted-foreground">
                Le NLP est un domaine de l'IA qui vise à permettre aux machines de comprendre, 
                interpréter et générer du langage humain de manière utile et significative.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Couvre la compréhension et la génération de texte dans plusieurs langues</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Applications : traduction automatique, analyse de sentiment, chatbots</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Technologies: word embeddings, transformers, BERT, T5</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Intelligence Artificielle Générale */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                <BrainCircuit size={32} className="text-primary" />
              </div>
              <h3 className="heading-lg mb-4">Intelligence Artificielle Générale (AGI)</h3>
              <p className="mb-4 text-muted-foreground">
                L'AGI fait référence à une intelligence artificielle hypothétique qui pourrait comprendre, 
                apprendre et appliquer des connaissances à travers un large éventail de tâches, à un niveau égal ou supérieur à celui d'un humain.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Capacité d'apprendre et de raisonner à travers différents domaines</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Transfert de connaissances entre différentes tâches</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>N'existe pas encore mais représente un objectif à long terme de la recherche</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-2xl animate-slide-right">
              <h4 className="text-lg font-semibold mb-4">Approches vers l'AGI</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">Scaling Laws</h5>
                  <p className="text-sm text-muted-foreground">
                    Théorie selon laquelle augmenter la taille des modèles, des données et de la puissance 
                    de calcul conduirait progressivement à des capacités de plus en plus générales.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">Approches neurosymboliques</h5>
                  <p className="text-sm text-muted-foreground">
                    Combinaison de réseaux neuronaux avec des systèmes symboliques pour allier l'apprentissage 
                    statistique à la logique formelle.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">Architecture cognitive</h5>
                  <p className="text-sm text-muted-foreground">
                    Création de systèmes inspirés par la structure et le fonctionnement du cerveau humain, 
                    intégrant perception, mémoire, attention et raisonnement.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-secondary/20 border border-secondary">
                <p className="text-sm text-muted-foreground italic">
                  "Le chemin vers l'AGI soulève des questions fondamentales sur la conscience, 
                  la sécurité et l'alignement avec les valeurs humaines. Son développement nécessite 
                  une approche multidisciplinaire et prudente."
                </p>
              </div>
            </div>
          </div>

          {/* IA Explicable */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-6 rounded-2xl animate-slide-left">
              <h4 className="text-lg font-semibold mb-4">Techniques d'explicabilité</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">LIME (Local Interpretable Model-agnostic Explanations)</h5>
                  <p className="text-sm text-muted-foreground">
                    Approxime localement le modèle complexe par un modèle plus simple et interprétable.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">SHAP (SHapley Additive exPlanations)</h5>
                  <p className="text-sm text-muted-foreground">
                    Attribue à chaque caractéristique une valeur d'importance basée sur la théorie des jeux.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/40">
                  <h5 className="font-medium">Cartes d'activation et attention</h5>
                  <p className="text-sm text-muted-foreground">
                    Visualise les régions d'une image ou les mots d'un texte qui influencent le plus la décision.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Ces techniques permettent d'ouvrir la "boîte noire" des algorithmes complexes, 
                facilitant leur audit, leur amélioration et leur acceptation dans des contextes critiques.
              </p>
            </div>
            <div className="order-1 lg:order-2 animate-slide-right">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                <BarChart3 size={32} className="text-primary" />
              </div>
              <h3 className="heading-lg mb-4">IA Explicable (XAI)</h3>
              <p className="mb-4 text-muted-foreground">
                L'IA explicable (XAI) désigne des systèmes d'intelligence artificielle dont les décisions 
                peuvent être comprises et interprétées par les humains, contrairement aux "boîtes noires".
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Essentielle dans les domaines réglementés comme la finance et la santé</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Favorise la confiance des utilisateurs et facilite la détection des biais</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                  <span>Permet de répondre aux exigences légales comme le "droit à l'explication" du RGPD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container mt-12">
        <SectionHeading
          pretitle="Innovations"
          title="Tendances émergentes en IA"
          description="Découvrez les dernières avancées qui redéfinissent les frontières de l'intelligence artificielle."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Sparkles size={24} className="text-primary" />
            </div>
            <h3 className="heading-sm mb-2">IA Fondation</h3>
            <p className="text-muted-foreground">
              Les modèles de fondation sont entraînés sur d'immenses quantités de données non spécifiques, 
              puis adaptés à des tâches particulières. Ils représentent une évolution majeure vers des 
              systèmes plus polyvalents.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Layers size={24} className="text-primary" />
            </div>
            <h3 className="heading-sm mb-2">IA Multimodale</h3>
            <p className="text-muted-foreground">
              Ces systèmes intègrent et traitent simultanément plusieurs types de données : texte, 
              images, audio et vidéo. Ils permettent une compréhension plus complète et contextuelle 
              du monde.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Network size={24} className="text-primary" />
            </div>
            <h3 className="heading-sm mb-2">IA Fédérée</h3>
            <p className="text-muted-foreground">
              L'apprentissage fédéré permet d'entraîner des modèles sur des appareils décentralisés 
              sans partager les données brutes, préservant ainsi la confidentialité tout en bénéficiant 
              de données diversifiées.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container bg-secondary/30 rounded-3xl my-12">
        <SectionHeading
          pretitle="Convergence"
          title="L'avenir réside dans l'intégration"
          description="Les frontières entre ces différents types d'IA s'estompent progressivement. Les systèmes les plus performants combinent souvent plusieurs approches pour tirer parti de leurs forces respectives."
          center
        />

        <div className="max-w-3xl mx-auto mt-8 glass-card rounded-2xl p-8 animate-fade-in">
          <h3 className="heading-sm mb-4">Tendances émergentes</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
              <p>Modèles multimodaux intégrant texte, image, audio et vidéo</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
              <p>Systèmes hybrides combinant apprentissage profond et raisonnement symbolique</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
              <p>Architectures modulaires permettant de composer différentes capacités</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
              <p>IA collaborative intégrant étroitement l'humain dans la boucle de décision</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TypesIA;
