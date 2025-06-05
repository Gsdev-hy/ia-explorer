
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Lightbulb
} from 'lucide-react';

const NLPComprehension = () => {
  const headerProps = {
    title: "Comprendre le Traitement du Langage Naturel (NLP) et les LLM",
    subtitle: "Du texte brut aux modèles de langage les plus avancés : un voyage au cœur de la compréhension artificielle",
    author: "Geoffroy Streit",
    authorDescription: "Expert en intelligence artificielle et traitement du langage",
    duration: "3-4 heures",
    level: "Intermédiaire",
    audience: "Curieux de technologie",
    tags: ["NLP", "LLM", "Traitement du langage", "Transformers", "2024"]
  };

  const module1Data = [
    {
      icon: <Languages className="h-5 w-5 text-primary" />,
      title: "Le défi du langage",
      items: [
        "Ambiguïté et contexte dans le langage humain",
        "Différences entre communication humaine et machine",
        "Histoire des premières tentatives de traduction automatique",
        "Pourquoi le langage est-il si complexe à traiter ?",
        "Les enjeux de la compréhension automatique"
      ]
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Premières approches",
      items: [
        "Analyse lexicale et syntaxique",
        "Règles grammaticales et exceptions",
        "Dictionnaires et bases de connaissances",
        "Limites des approches symboliques",
        "Transition vers l'apprentissage automatique"
      ]
    },
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Objectifs du NLP moderne",
      items: [
        "Comprendre le sens et l'intention",
        "Génération de texte cohérent",
        "Traduction précise et nuancée",
        "Interaction naturelle avec les machines",
        "Applications dans la vie quotidienne"
      ]
    }
  ];

  const module2Data = [
    {
      icon: <Bot className="h-5 w-5 text-primary" />,
      title: "Tokenisation",
      items: [
        "Découpage du texte en unités traitables",
        "Gestion de la ponctuation et des espaces",
        "Tokenisation par mots vs sous-mots",
        "Encodage et vocabulaires",
        "Cas particuliers et langues non-latines"
      ]
    },
    {
      icon: <Network className="h-5 w-5 text-primary" />,
      title: "Représentations vectorielles",
      items: [
        "De la forme symbolique aux nombres",
        "Embeddings de mots (Word2Vec, GloVe)",
        "Espaces sémantiques multidimensionnels",
        "Similarité et distance entre concepts",
        "Évolution vers les représentations contextuelles"
      ]
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: "Modèles de langage statistiques",
      items: [
        "Prédiction du mot suivant",
        "N-grammes et probabilités conditionnelles",
        "Lissage et gestion de la rareté",
        "Évaluation par perplexité",
        "Limites des approches statistiques classiques"
      ]
    }
  ];

  const didYouKnowItems = [
    {
      title: "Ambiguïté du langage",
      content: "La phrase 'Time flies like an arrow' peut être interprétée de 5 façons différentes en anglais ! Cela illustre pourquoi l'ambiguïté est l'un des défis majeurs du NLP."
    },
    {
      title: "Vocabulaire de ChatGPT",
      content: "GPT-3 utilise un vocabulaire d'environ 50 000 tokens, permettant de représenter efficacement la plupart des textes en utilisant des sous-mots plutôt que des mots entiers."
    },
    {
      title: "Puissance des Transformers",
      content: "L'architecture Transformer, inventée en 2017, a révolutionné le NLP en permettant le traitement parallèle et la capture de dépendances à long terme dans le texte."
    }
  ];

  return (
    <>
      <Hero
        title={headerProps.title}
        subtitle={headerProps.subtitle}
      />

      <section className="section-container">
        <CourseHeader {...headerProps} />

        {/* Introduction */}
        <CourseModule
          title="Introduction : Quand les machines apprennent à parler"
          description="Découvrez comment l'IA moderne comprend et génère le langage humain"
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-6">
                Imaginez pouvoir discuter avec votre ordinateur comme avec un ami, lui demander 
                d'écrire un poème, de résumer un document complexe ou de traduire un texte 
                dans une langue que vous ne connaissez pas. Cette réalité, qui semblait 
                relever de la science-fiction il y a encore quelques années, est aujourd'hui 
                à portée de clic grâce aux avancées spectaculaires du traitement du langage naturel.
              </p>
              
              <AnalogyBox 
                title="Le langage : notre superpouvoir humain"
                content="Le langage est ce qui nous distingue le plus des autres espèces. Nous utilisons des symboles abstraits (les mots) pour communiquer des idées complexes, des émotions, et même des concepts qui n'existent pas physiquement. Enseigner cette capacité à une machine représente l'un des défis les plus fascinants de l'intelligence artificielle."
                variant="tip"
              />

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-medium flex items-center gap-2 mb-3">
                  <Lightbulb className="h-4 w-4" />
                  Ce que vous allez découvrir
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Comment une machine "lit" et "comprend" un texte</li>
                  <li>• Les étapes qui transforment des mots en nombres</li>
                  <li>• L'évolution du simple correcteur orthographique aux IA conversationnelles</li>
                  <li>• Les secrets des modèles comme ChatGPT et leurs capacités extraordinaires</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 : Comprendre le défi */}
        <CourseModule
          title="Module 1 : Le défi de la compréhension automatique"
          description="Pourquoi faire comprendre le langage à une machine est-il si complexe ?"
          modules={module1Data}
        />

        <ZoomOn title="L'exemple de la traduction automatique">
          <p className="mb-3">
            Prenons l'exemple de la traduction. En 1954, IBM présente fièrement son système 
            de traduction automatique capable de traduire 60 phrases du russe vers l'anglais. 
            Les chercheurs pensaient qu'en quelques années, le problème serait résolu...
          </p>
          <p className="mb-3">
            Soixante-dix ans plus tard, nous avons Google Translate et DeepL qui traduisent 
            instantanément dans plus de 100 langues. Mais le chemin a été semé d'embûches : 
            <TechnicalTooltip 
              term="Ambiguïté lexicale" 
              definition="Quand un même mot peut avoir plusieurs sens selon le contexte"
            >
              ambiguïté lexicale
            </TechnicalTooltip>, nuances culturelles, expressions idiomatiques...
          </p>
          <p>
            Cette évolution illustre parfaitement la complexité du langage et l'ingéniosité 
            des solutions développées par les chercheurs en NLP.
          </p>
        </ZoomOn>

        {/* Module 2 : Fondamentaux techniques */}
        <CourseModule
          title="Module 2 : Les fondamentaux du traitement du texte"
          description="De la phrase à la représentation numérique : les étapes essentielles"
          modules={module2Data}
        />

        <AnalogyBox 
          title="Les mots comme des coordonnées GPS"
          content="Imaginez que chaque mot soit un lieu sur une carte géante. Les mots similaires seraient des voisins (comme 'chien' et 'chat' dans le quartier des animaux), tandis que des mots très différents seraient aux antipodes. C'est exactement ce que font les embeddings : ils placent les mots dans un espace mathématique où la distance reflète leur similarité sémantique !"
        />

        <DidYouKnow items={didYouKnowItems} />

        {/* Module 3 : Révolution des Transformers */}
        <CourseModule
          title="Module 3 : La révolution Transformer"
          description="Comment une architecture a changé la donne en NLP"
        >
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  L'innovation révolutionnaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  En 2017, l'équipe de Google publie l'article "Attention Is All You Need" 
                  qui introduit l'architecture Transformer. Cette innovation va révolutionner 
                  le domaine du NLP et donner naissance aux modèles de langage modernes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">Avant les Transformers</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Traitement séquentiel lent</li>
                      <li>• Difficulté avec les longues séquences</li>
                      <li>• Perte d'information à long terme</li>
                      <li>• Parallélisation limitée</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">Avec les Transformers</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Traitement parallèle efficace</li>
                      <li>• Attention à long terme</li>
                      <li>• Capture des relations complexes</li>
                      <li>• Scalabilité exceptionnelle</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ZoomOn title="Le mécanisme d'attention expliqué simplement">
              <p className="mb-3">
                Imaginez que vous lisez une phrase complexe. Votre cerveau ne traite pas 
                chaque mot isolément - il fait constamment des liens entre les mots pour 
                comprendre le sens global. Par exemple, dans "Le chat que j'ai vu hier 
                dormait sur le toit", vous reliez automatiquement "dormait" à "chat".
              </p>
              <p>
                Le mécanisme d'attention fait exactement cela : il permet au modèle de 
                "regarder" tous les autres mots de la phrase quand il traite un mot 
                particulier, créant ainsi une compréhension contextuelle riche.
              </p>
            </ZoomOn>
          </div>
        </CourseModule>

        {/* Module 4 : Les Large Language Models */}
        <CourseModule
          title="Module 4 : L'ère des Large Language Models (LLM)"
          description="De GPT à ChatGPT : quand la taille change tout"
        >
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  Les <TechnicalTooltip 
                    term="Large Language Models" 
                    definition="Modèles de langage entraînés sur d'énormes quantités de texte avec des milliards de paramètres"
                  >
                    Large Language Models (LLM)
                  </TechnicalTooltip> représentent l'aboutissement actuel du NLP. 
                  Ces modèles géants, entraînés sur une grande partie d'Internet, 
                  démontrent des capacités surprenantes qui dépassent la simple prédiction de mots.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-medium mb-2">GPT-1 (2018)</h4>
                    <Badge variant="outline" className="mb-2">117M paramètres</Badge>
                    <p className="text-sm">Première démonstration du potentiel des Transformers pour la génération</p>
                  </div>
                  <div className="text-center">
                    <Layers className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-medium mb-2">GPT-3 (2020)</h4>
                    <Badge variant="outline" className="mb-2">175B paramètres</Badge>
                    <p className="text-sm">Capacités émergentes : raisonnement, créativité, programmation</p>
                  </div>
                  <div className="text-center">
                    <MessageSquare className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-medium mb-2">ChatGPT (2022)</h4>
                    <Badge variant="outline" className="mb-2">Optimisé pour le dialogue</Badge>
                    <p className="text-sm">Interface conversationnelle naturelle et assistance intelligente</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AnalogyBox 
              title="La bibliothèque universelle dans votre poche"
              content="Imaginez avoir accès instantané à une bibliothèque contenant tous les livres, articles et conversations jamais écrits, avec un bibliothécaire génial capable de comprendre vos questions et de synthétiser les réponses. C'est essentiellement ce que représente un LLM : une compression intelligente de la connaissance humaine accessible par le dialogue."
            />
          </div>
        </CourseModule>

        {/* Module 5 : Applications et impact */}
        <CourseModule
          title="Module 5 : Applications et impact sociétal"
          description="Comment le NLP transforme notre quotidien"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Applications actuelles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Assistants virtuels</strong> : Siri, Alexa, Google Assistant</li>
                  <li>• <strong>Traduction</strong> : Google Translate, DeepL</li>
                  <li>• <strong>Rédaction assistée</strong> : Grammarly, ChatGPT</li>
                  <li>• <strong>Analyse de sentiment</strong> : Réseaux sociaux, avis clients</li>
                  <li>• <strong>Résumé automatique</strong> : Articles, documents</li>
                  <li>• <strong>Programmation</strong> : GitHub Copilot, CodeT5</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enjeux et défis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Biais et équité</strong> : Représentations déséquilibrées</li>
                  <li>• <strong>Désinformation</strong> : Génération de faux contenus</li>
                  <li>• <strong>Vie privée</strong> : Protection des données personnelles</li>
                  <li>• <strong>Emploi</strong> : Automatisation de tâches intellectuelles</li>
                  <li>• <strong>Énergie</strong> : Coût environnemental de l'entraînement</li>
                  <li>• <strong>Régulation</strong> : Encadrement de l'IA générative</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Vers une communication homme-machine naturelle"
          description="Récapitulatif de votre exploration du NLP et perspectives d'avenir"
          learningPoints={[
            "Comprendre les défis fondamentaux du traitement du langage naturel",
            "Maîtriser les concepts clés : tokenisation, embeddings, attention",
            "Saisir l'importance révolutionnaire de l'architecture Transformer",
            "Appréhender le fonctionnement et les capacités des LLM modernes",
            "Identifier les applications concrètes et les enjeux sociétaux du NLP"
          ]}
          nextSteps={[
            "Explorer les techniques avancées de prompt engineering",
            "Apprendre à fine-tuner des modèles pour des tâches spécifiques",
            "Découvrir les modèles multimodaux (texte + image)",
            "S'initier au développement d'applications NLP",
            "Suivre les dernières recherches et innovations du domaine"
          ]}
        />
      </section>
    </>
  );
};

export default NLPComprehension;
