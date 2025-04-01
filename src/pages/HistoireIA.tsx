
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Timeline } from '@/components';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Brain, Lightbulb, Robot, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Page présentant l'histoire de l'IA et l'évolution des technologies
 * @returns {JSX.Element} Le composant de la page Histoire de l'IA
 */
const HistoireIA = () => {
  const [activeEra, setActiveEra] = useState("pioneers");
  
  const eras = [
    {
      id: "pioneers",
      title: "Pionniers (1950-1970)",
      description: "Les fondements théoriques et les premiers pas de l'IA",
      icon: <Lightbulb className="h-5 w-5" />,
      content: (
        <div className="mt-6 space-y-4">
          <p>Cette période marque la naissance conceptuelle de l'IA. Des scientifiques visionnaires comme Alan Turing, John McCarthy, Marvin Minsky et Claude Shannon ont posé les bases théoriques et philosophiques de cette discipline.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">Test de Turing (1950)</h4>
              <p className="text-muted-foreground">Alan Turing propose une méthode pour déterminer si une machine peut "penser", évaluant sa capacité à tenir une conversation indiscernable de celle d'un humain.</p>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                <p className="text-sm italic">"Une machine pourra être qualifiée d'intelligente si elle peut se faire passer pour un humain lors d'une conversation à l'aveugle." - Alan Turing</p>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">Conférence de Dartmouth (1956)</h4>
              <p className="text-muted-foreground">John McCarthy organise cette conférence historique où le terme "Intelligence Artificielle" est officiellement adopté, marquant la naissance de l'IA comme discipline académique.</p>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg text-sm">
                <p>Participants clés:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>John McCarthy</li>
                  <li>Marvin Minsky</li>
                  <li>Claude Shannon</li>
                  <li>Nathaniel Rochester</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-medium text-lg mb-4">Premiers programmes IA</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary/30">
                    <th className="p-3 text-left">Programme</th>
                    <th className="p-3 text-left">Année</th>
                    <th className="p-3 text-left">Créateur</th>
                    <th className="p-3 text-left">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/40">
                    <td className="p-3 font-medium">Logic Theorist</td>
                    <td className="p-3">1956</td>
                    <td className="p-3">Allen Newell & Herbert Simon</td>
                    <td className="p-3">Premier programme capable de prouver des théorèmes mathématiques</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="p-3 font-medium">General Problem Solver</td>
                    <td className="p-3">1957</td>
                    <td className="p-3">Newell & Simon</td>
                    <td className="p-3">Résolution de problèmes génériques par des méthodes heuristiques</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="p-3 font-medium">ELIZA</td>
                    <td className="p-3">1966</td>
                    <td className="p-3">Joseph Weizenbaum</td>
                    <td className="p-3">Premier chatbot simulant un psychothérapeute</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">SHRDLU</td>
                    <td className="p-3">1968-70</td>
                    <td className="p-3">Terry Winograd</td>
                    <td className="p-3">Compréhension du langage naturel dans un monde virtuel de blocs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "winters",
      title: "Hivers de l'IA (1970-1990)",
      description: "Périodes de désillusion et de financement réduit",
      icon: <Brain className="h-5 w-5" />,
      content: (
        <div className="mt-6 space-y-4">
          <p>Après l'enthousiasme initial, l'IA a traversé des périodes difficiles appelées "hivers", caractérisées par des attentes non satisfaites, des limitations techniques et des réductions drastiques de financement.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">Premier hiver (1974-1980)</h4>
              <p className="text-muted-foreground">Suite au rapport Lighthill critiquant sévèrement les progrès de l'IA, les financements gouvernementaux ont été drastiquement réduits, particulièrement au Royaume-Uni.</p>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                <p className="text-sm"><span className="font-medium">Causes:</span> Promesses exagérées, limitations des ordinateurs de l'époque, approches trop simplistes face à la complexité des problèmes.</p>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">Deuxième hiver (1987-1993)</h4>
              <p className="text-muted-foreground">L'effondrement du marché des systèmes experts et des ordinateurs LISP a provoqué une nouvelle période de pessimisme.</p>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                <p className="text-sm"><span className="font-medium">Impact:</span> Fermeture de nombreuses entreprises d'IA, réorientation de la recherche vers des objectifs plus modestes et spécifiques.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 glass-card p-5 rounded-xl">
            <h4 className="font-medium text-lg mb-4">Leçons des hivers de l'IA</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-2">Humilité scientifique</h5>
                <p className="text-sm text-muted-foreground">Importance de reconnaître la complexité des problèmes et les limites des technologies actuelles.</p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-2">Approche incrémentale</h5>
                <p className="text-sm text-muted-foreground">Privilégier les avancées progressives et vérifiables aux promesses révolutionnaires.</p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-2">Diversification</h5>
                <p className="text-sm text-muted-foreground">Développement de multiples approches complémentaires plutôt qu'une méthode unique.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 border border-dashed border-primary/40 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-medium">Malgré les difficultés...</h4>
            </div>
            <p className="text-muted-foreground">Ces périodes difficiles n'ont pas arrêté totalement la recherche. Des avancées importantes ont continué d'émerger, comme le développement de l'algorithme de backpropagation par Geoffrey Hinton (1986), ouvrant la voie au renouveau des réseaux de neurones.</p>
          </div>
        </div>
      )
    },
    {
      id: "renaissance",
      title: "Renaissance (1990-2010)",
      description: "Renouveau avec l'apprentissage automatique",
      icon: <Robot className="h-5 w-5" />,
      content: (
        <div className="mt-6 space-y-4">
          <p>Après les hivers, l'IA a connu une renaissance grâce à l'apprentissage automatique, l'augmentation de la puissance de calcul et l'explosion des données disponibles.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">Deep Blue (1997)</h4>
              <p className="text-muted-foreground">L'ordinateur d'IBM bat le champion du monde d'échecs Garry Kasparov, marquant la première victoire majeure d'une IA contre un humain dans un jeu intellectuel complexe.</p>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                <p className="text-sm">Bien que fonctionnant principalement par force brute plutôt que par "intelligence" au sens humain, cette victoire a captivé l'imagination du public et marqué un tournant symbolique.</p>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">Machine Learning</h4>
              <p className="text-muted-foreground">Transition de l'IA basée sur des règles vers l'apprentissage statistique à partir des données, avec des algorithmes comme les SVM, les forêts aléatoires et les premiers réseaux de neurones modernes.</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Random Forests</span>
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Support Vector Machines</span>
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Boosting</span>
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Neural Networks</span>
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Bayesian Networks</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 glass-card p-5 rounded-xl">
            <h4 className="font-medium text-lg mb-3">Applications concrètes émergentes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-1">Robotique</h5>
                <p className="text-sm text-muted-foreground">ASIMO de Honda (2000), premier robot humanoïde capable de marcher de façon naturelle.</p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-1">Reconnaissance vocale</h5>
                <p className="text-sm text-muted-foreground">Système Dragon Naturally Speaking (1997) pour dicter des textes.</p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-1">Internet</h5>
                <p className="text-sm text-muted-foreground">Moteurs de recherche comme Google (1998) utilisant des algorithmes de ranking.</p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-1">Véhicules</h5>
                <p className="text-sm text-muted-foreground">DARPA Grand Challenge (2004) pour véhicules autonomes dans le désert.</p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-1">Recommandation</h5>
                <p className="text-sm text-muted-foreground">Systèmes de recommandation d'Amazon (2003) et Netflix (2006).</p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <h5 className="font-medium mb-1">Santé</h5>
                <p className="text-sm text-muted-foreground">Aide au diagnostic par analyse d'images médicales (2008).</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "deeplearning",
      title: "Ère du Deep Learning (2010-2020)",
      description: "L'explosion des réseaux de neurones profonds",
      icon: <Code className="h-5 w-5" />,
      content: (
        <div className="mt-6 space-y-4">
          <p>La disponibilité de GPU puissants, l'abondance de données et les avancées algorithmiques ont conduit à une révolution du deep learning, transformant de nombreux domaines.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">ImageNet et AlexNet (2012)</h4>
              <p className="text-muted-foreground">Le réseau de neurones convolutifs d'Alex Krizhevsky réduit drastiquement le taux d'erreur en classification d'images, marquant le début de la révolution du deep learning.</p>
              <div className="mt-4 bg-secondary/20 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Taux d'erreur en classification</span>
                  <span className="text-sm text-muted-foreground">2010-2015</span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-xs">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                      <span>Méthodes traditionnelles</span>
                    </div>
                    <div className="text-xs">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                      <span>Deep Learning</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                    <div style={{ width: "73%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                    <div style={{ width: "63%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                    <div style={{ width: "48%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                    <div style={{ width: "37%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                    <div style={{ width: "16%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-secondary">
                    <div style={{ width: "4%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">Percées majeures</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">2014</span>
                  </div>
                  <div>
                    <h5 className="font-medium">GANs</h5>
                    <p className="text-sm text-muted-foreground">Ian Goodfellow invente les Generative Adversarial Networks, capables de générer des images réalistes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">2016</span>
                  </div>
                  <div>
                    <h5 className="font-medium">AlphaGo</h5>
                    <p className="text-sm text-muted-foreground">L'IA de DeepMind bat le champion du monde de Go Lee Sedol, un jeu considéré comme trop complexe pour les machines.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">2017</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Transformers</h5>
                    <p className="text-sm text-muted-foreground">Google introduit l'architecture Transformer, révolutionnant le traitement du langage naturel.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">2018</span>
                  </div>
                  <div>
                    <h5 className="font-medium">BERT</h5>
                    <p className="text-sm text-muted-foreground">Google lance BERT, modèle pré-entraîné qui établit de nouveaux records en compréhension du langage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-5 border border-primary/20 rounded-lg bg-primary/5">
            <h4 className="font-medium text-lg mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <span>Impact technologique et sociétal</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Démocratisation des outils</h5>
                <p className="text-sm text-muted-foreground">Frameworks open-source comme TensorFlow (2015) et PyTorch (2016) ont rendu le deep learning accessible à un public plus large de développeurs et chercheurs.</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-secondary/40 rounded text-xs">TensorFlow</span>
                  <span className="px-2 py-1 bg-secondary/40 rounded text-xs">PyTorch</span>
                  <span className="px-2 py-1 bg-secondary/40 rounded text-xs">Keras</span>
                </div>
              </div>
              <div>
                <h5 className="font-medium mb-2">Applications grand public</h5>
                <p className="text-sm text-muted-foreground">Assistants vocaux, traduction automatique, filtres photo, recommandations personnalisées sont devenus omniprésents dans la vie quotidienne.</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-secondary/40 rounded text-xs">Siri</span>
                  <span className="px-2 py-1 bg-secondary/40 rounded text-xs">Alexa</span>
                  <span className="px-2 py-1 bg-secondary/40 rounded text-xs">Google Translate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "generative",
      title: "Ère générative (2020-présent)",
      description: "Explosion des capacités créatives et multimodales",
      icon: <Rocket className="h-5 w-5" />,
      content: (
        <div className="mt-6 space-y-4">
          <p>L'IA est entrée dans une nouvelle phase marquée par des modèles multimodaux massifs capables de générer du contenu créatif de haute qualité et d'interagir de façon naturelle avec les humains.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">LLMs et ChatGPT</h4>
              <p className="text-muted-foreground">L'émergence des Large Language Models comme GPT-3 (2020) puis ChatGPT (2022) a démocratisé l'accès à des IA conversationnelles puissantes.</p>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded text-xs font-medium mt-0.5">2020</div>
                    <div>
                      <p className="text-sm font-medium">GPT-3</p>
                      <p className="text-xs text-muted-foreground">175 milliards de paramètres, génération de texte de qualité</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded text-xs font-medium mt-0.5">2022</div>
                    <div>
                      <p className="text-sm font-medium">ChatGPT</p>
                      <p className="text-xs text-muted-foreground">Interface conversationnelle, RLHF, adoption massive</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded text-xs font-medium mt-0.5">2023</div>
                    <div>
                      <p className="text-sm font-medium">GPT-4</p>
                      <p className="text-xs text-muted-foreground">Multimodalité, raisonnement amélioré, compétences avancées</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-medium text-lg mb-2">IA Générative Multimodale</h4>
              <p className="text-muted-foreground">Émergence de modèles capables de comprendre et générer différents types de contenus: texte, images, audio, vidéo.</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Images</h5>
                  <p className="text-xs text-muted-foreground">DALL-E, Midjourney, Stable Diffusion</p>
                  <div className="mt-2 h-20 bg-secondary/40 rounded flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Génération d'images à partir de texte</span>
                  </div>
                </div>
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Audio</h5>
                  <p className="text-xs text-muted-foreground">AudioLM, MusicLM, Whisper</p>
                  <div className="mt-2 h-20 bg-secondary/40 rounded flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Synthèse vocale et musique</span>
                  </div>
                </div>
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Vidéo</h5>
                  <p className="text-xs text-muted-foreground">Gen-2, Sora, Runway</p>
                  <div className="mt-2 h-20 bg-secondary/40 rounded flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Animation et génération vidéo</span>
                  </div>
                </div>
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Code</h5>
                  <p className="text-xs text-muted-foreground">Copilot, Code Interpreter</p>
                  <div className="mt-2 h-20 bg-secondary/40 rounded flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Génération et assistance au code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-medium text-lg mb-4">Tendances actuelles et perspectives</h4>
            <div className="space-y-4">
              <div className="p-4 bg-secondary/10 rounded-lg flex gap-4">
                <div className="p-2 bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">IA de plus en plus contextuelle</h5>
                  <p className="text-sm text-muted-foreground">Les systèmes actuels intègrent davantage de contexte, de mémoire à long terme et comprennent mieux les nuances et intentions humaines.</p>
                </div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg flex gap-4">
                <div className="p-2 bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Agents autonomes</h5>
                  <p className="text-sm text-muted-foreground">Développement d'IA capables d'exécuter des séquences d'actions complexes, de planifier et d'interagir avec des APIs et services web.</p>
                </div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg flex gap-4">
                <div className="p-2 bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <Robot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Défis éthiques grandissants</h5>
                  <p className="text-sm text-muted-foreground">Questions de biais, vie privée, désinformation, impact sur l'emploi deviennent centrales dans le développement responsable de l'IA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Hero
        title="Histoire de l'Intelligence Artificielle"
        subtitle="Explorez l'évolution des technologies d'IA depuis leurs origines jusqu'aux développements contemporains."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Chronologie"
          title="Évolution de l'IA au fil du temps"
          description="Découvrez les moments clés, les avancées technologiques et les événements qui ont façonné le développement de l'intelligence artificielle depuis ses débuts."
          center
        />

        <div className="mt-12">
          <Timeline />
        </div>
      </section>

      <section className="section-container py-20">
        <SectionHeading
          pretitle="Périodes clés"
          title="Une histoire en cinq grandes ères"
          description="L'histoire de l'IA peut se découper en périodes distinctes, chacune marquée par des approches, des défis et des percées spécifiques."
          center
        />
        
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-8">
            {eras.map((era) => (
              <button
                key={era.id}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                  activeEra === era.id ? 'bg-primary/20 shadow-lg' : 'bg-secondary/5 hover:bg-secondary/10'
                }`}
                onClick={() => setActiveEra(era.id)}
              >
                <div className={`p-3 rounded-full mb-3 ${
                  activeEra === era.id ? 'bg-primary/20' : 'bg-secondary/20'
                }`}>
                  {era.icon}
                </div>
                <h3 className="text-sm font-medium mb-1">{era.title}</h3>
                <p className="text-xs text-muted-foreground text-center">{era.description}</p>
              </button>
            ))}
          </div>
          
          <motion.div
            key={activeEra}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 rounded-xl"
          >
            {eras.find(era => era.id === activeEra)?.content}
          </motion.div>
        </div>
      </section>

      <section className="section-container py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            pretitle="Réflexion"
            title="L'IA à travers le prisme de la science-fiction"
            description="La culture populaire et la science-fiction ont joué un rôle important dans la perception de l'IA par le grand public et ont parfois même inspiré les chercheurs."
            center
          />
          
          <Tabs defaultValue="literature" className="mt-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="literature">Littérature</TabsTrigger>
              <TabsTrigger value="cinema">Cinéma</TabsTrigger>
              <TabsTrigger value="influence">Influence</TabsTrigger>
            </TabsList>
            <TabsContent value="literature" className="mt-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-4">L'IA dans la littérature</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Œuvres pionnières</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-secondary/20 rounded-lg">
                        <h5 className="font-medium">R.U.R. (1920)</h5>
                        <p className="text-sm text-muted-foreground">La pièce de Karel Čapek qui introduit le terme "robot"</p>
                      </div>
                      <div className="p-3 bg-secondary/20 rounded-lg">
                        <h5 className="font-medium">I, Robot (1950)</h5>
                        <p className="text-sm text-muted-foreground">Collection de nouvelles d'Isaac Asimov introduisant les trois lois de la robotique</p>
                      </div>
                      <div className="p-3 bg-secondary/20 rounded-lg">
                        <h5 className="font-medium">Le Cycle de Fondation (1951-1953)</h5>
                        <p className="text-sm text-muted-foreground">Toujours d'Asimov, avec le concept de psychohistoire, prédécesseur conceptuel du big data</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Œuvres modernes</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-secondary/20 rounded-lg">
                        <h5 className="font-medium">Neuromancien (1984)</h5>
                        <p className="text-sm text-muted-foreground">William Gibson imagine le cyberespace et des intelligences artificielles surpuissantes</p>
                      </div>
                      <div className="p-3 bg-secondary/20 rounded-lg">
                        <h5 className="font-medium">Le Cycle de la Culture (1987-2012)</h5>
                        <p className="text-sm text-muted-foreground">Iain M. Banks présente une société utopique dirigée par des IA bienveillantes appelées "Minds"</p>
                      </div>
                      <div className="p-3 bg-secondary/20 rounded-lg">
                        <h5 className="font-medium">Hyperion (1989)</h5>
                        <p className="text-sm text-muted-foreground">Dan Simmons imagine le TechnoCentre, un collectif d'IAs aux motivations complexes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cinema" className="mt-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-4">L'IA au cinéma</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-medium mb-2">Dystopies</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">1968</span>
                        <span className="text-sm">2001, l'Odyssée de l'espace (HAL 9000)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">1984</span>
                        <span className="text-sm">Terminator (Skynet)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">1999</span>
                        <span className="text-sm">Matrix (Les Machines)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-medium mb-2">Visions nuancées</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">1982</span>
                        <span className="text-sm">Blade Runner (Réplicants)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">2001</span>
                        <span className="text-sm">A.I. Intelligence Artificielle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">2013</span>
                        <span className="text-sm">Her (Samantha)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-medium mb-2">Réflexions philosophiques</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">2014</span>
                        <span className="text-sm">Ex Machina (Ava)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">2015</span>
                        <span className="text-sm">Chappie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 px-1 py-0.5 rounded text-xs mt-0.5">2018</span>
                        <span className="text-sm">Upgrade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="influence" className="mt-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-4">Influence réciproque fiction/réalité</h3>
                <p className="mb-6">La science-fiction et la recherche en IA s'influencent mutuellement, créant une boucle de rétroaction culturelle et scientifique.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border border-primary/20 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>De la fiction à la science</span>
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm">Les interfaces vocales de Star Trek ont inspiré les assistants vocaux modernes</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm">Les trois lois de la robotique d'Asimov influencent les discussions sur l'éthique de l'IA</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm">Le concept de Singularité technologique popularisé par Vernor Vinge est devenu un sujet de recherche sérieux</p>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 border border-primary/20 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span>De la science à la fiction</span>
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm">Les progrès de la robotique humanodïe de Boston Dynamics ont inspiré l'épisode "Metalhead" de Black Mirror</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm">Le développement des assistants virtuels a influencé le film "Her" de Spike Jonze</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm">Les débats sur la sécurité de l'IA ont inspiré des films comme "Ex Machina" et "Transcendance"</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Approfondir vos connaissances"
            description="Découvrez d'autres aspects de l'intelligence artificielle en explorant les sections suivantes."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/ressources">
                Ressources Externes
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/cas-usage">
                Cas d'usage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoireIA;
