
import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, Brain, Lightbulb, ArrowLeft, BookOpen, Layers, Bot, Puzzle, Server, BarChart, Bot as BotIcon, Code, Users, Database, Cpu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExploreMoreSection from '@/components/common/ExploreMoreSection';

/**
 * Page détaillée sur les LLM et techniques RLHF
 * @returns {JSX.Element} Le composant de la page LLM Details
 */
const LLMDetails = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const rlhfSteps = [
    {
      title: "Collection des données",
      description: "Rassemblement d'un grand ensemble de données de démonstrations humaines qui montrent le comportement souhaité du modèle",
      icon: <Database className="h-5 w-5 text-primary" />
    },
    {
      title: "Pré-entraînement du modèle",
      description: "Entraînement d'un modèle de base sur un large corpus de texte pour apprendre les structures et patterns du langage",
      icon: <Layers className="h-5 w-5 text-primary" />
    },
    {
      title: "Fine-tuning supervisé (SFT)",
      description: "Affiner le modèle pré-entraîné sur des exemples de haute qualité fournis par des humains",
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      title: "Création du modèle de récompense",
      description: "Entraînement d'un modèle distinct pour évaluer la qualité des réponses selon les préférences humaines",
      icon: <BarChart className="h-5 w-5 text-primary" />
    },
    {
      title: "Optimisation par RL",
      description: "Application de l'apprentissage par renforcement pour optimiser le modèle en utilisant les signaux du modèle de récompense",
      icon: <Puzzle className="h-5 w-5 text-primary" />
    },
    {
      title: "Itération et évaluation",
      description: "Cycle continu d'amélioration en testant le modèle et en récoltant de nouveaux feedbacks humains",
      icon: <Users className="h-5 w-5 text-primary" />
    }
  ];

  const exploreLinks = [
    {
      to: "/types-ia",
      label: "Types d'IA",
      variant: "default" as const
    },
    {
      to: "/machine-learning",
      label: "Machine Learning",
      variant: "outline" as const
    },
    {
      to: "/ethique",
      label: "Enjeux éthiques",
      variant: "secondary" as const
    }
  ];

  return (
    <main className="pb-16">
      <Hero
        title="Large Language Models et RLHF"
        subtitle="Découvrez en profondeur le fonctionnement des modèles de langage modernes et comment la technique RLHF a révolutionné leur alignement avec les valeurs humaines."
      />

      <div className="section-container">
        <Link to="/types-ia" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Retour aux types d'IA
        </Link>

        <section className="mb-16">
          <SectionHeading
            pretitle="Fondamentaux"
            title="Qu'est-ce qu'un LLM ?"
            description="Les Large Language Models (LLM) sont des architectures d'intelligence artificielle entraînées sur d'immenses corpus de texte pour comprendre et générer du langage humain."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Architecture des LLM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Les LLM modernes sont basés sur l'architecture Transformer introduite par Google en 2017. Cette architecture utilise un mécanisme d'attention qui permet au modèle de peser différemment l'importance de différents mots dans une phrase.
                  </p>
                  <div className="aspect-video bg-muted/50 rounded-lg p-4 flex items-center justify-center border">
                    <svg viewBox="0 0 800 400" className="w-full max-w-md">
                      {/* Model Architecture Visualization */}
                      <rect x="250" y="20" width="300" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
                      <text x="400" y="55" textAnchor="middle" fill="currentColor" fontSize="16">Entrée (Texte tokenisé)</text>

                      <rect x="250" y="100" width="300" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
                      <text x="400" y="135" textAnchor="middle" fill="currentColor" fontSize="16">Embedding</text>

                      <rect x="250" y="180" width="300" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
                      <text x="400" y="215" textAnchor="middle" fill="currentColor" fontSize="16">Couches d'attention (Transformers)</text>

                      <rect x="250" y="260" width="300" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
                      <text x="400" y="295" textAnchor="middle" fill="currentColor" fontSize="16">Couche de sortie</text>

                      <rect x="250" y="340" width="300" height="40" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
                      <text x="400" y="365" textAnchor="middle" fill="currentColor" fontSize="16">Prédiction du prochain token</text>

                      {/* Connecting lines */}
                      <line x1="400" y1="80" x2="400" y2="100" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="400" y1="160" x2="400" y2="180" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="400" y1="240" x2="400" y2="260" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="400" y1="320" x2="400" y2="340" stroke="rgb(var(--primary))" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cette architecture permet au modèle de capturer des dépendances à longue distance dans le texte, ce qui était difficile avec les architectures précédentes comme les RNN et LSTM.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Évolution historique des LLM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Les LLM ont connu une évolution rapide depuis 2018, avec une augmentation constante de leur taille et de leurs capacités.
                  </p>
                  <div className="relative h-60 border rounded-lg p-4 bg-muted/30">
                    <div className="absolute bottom-4 left-4 right-4 h-0.5 bg-primary/20"></div>
                    
                    {/* Timeline nodes */}
                    <div className="absolute bottom-4 left-[5%] -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary mb-1"></div>
                      <div className="text-xs text-muted-foreground mb-1">2018</div>
                      <div className="max-w-[80px] text-xs font-medium">BERT (340M)</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-[20%] -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary mb-1"></div>
                      <div className="text-xs text-muted-foreground mb-1">2019</div>
                      <div className="max-w-[80px] text-xs font-medium">GPT-2 (1.5B)</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-[40%] -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary mb-1"></div>
                      <div className="text-xs text-muted-foreground mb-1">2020</div>
                      <div className="max-w-[80px] text-xs font-medium">GPT-3 (175B)</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-[60%] -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary mb-1"></div>
                      <div className="text-xs text-muted-foreground mb-1">2022</div>
                      <div className="max-w-[80px] text-xs font-medium">ChatGPT, Claude</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-[80%] -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary mb-1"></div>
                      <div className="text-xs text-muted-foreground mb-1">2023</div>
                      <div className="max-w-[80px] text-xs font-medium">GPT-4, Gemini</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-[95%] -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary mb-1"></div>
                      <div className="text-xs text-muted-foreground mb-1">2025</div>
                      <div className="max-w-[80px] text-xs font-medium">GPT-5, Claude 4</div>
                    </div>
                    
                    {/* Growth curve */}
                    <svg viewBox="0 0 400 200" className="absolute bottom-8 left-4 right-4 h-36 w-[calc(100%-2rem)]">
                      <path 
                        d="M20,180 Q50,175 80,160 T160,120 T240,70 T320,20 T380,5" 
                        fill="none" 
                        stroke="rgb(var(--primary))" 
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    En 2025, nous observons des modèles optimisés qui battent des modèles plus grands grâce à de meilleures techniques d'entraînement et d'alignement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16" id="rlhf">
          <SectionHeading
            pretitle="Innovation clé"
            title="Reinforcement Learning from Human Feedback (RLHF)"
            description="Le RLHF est une technique d'apprentissage par renforcement qui utilise les retours humains pour aligner les modèles de langage avec les valeurs et attentes humaines."
          />

          <Tabs defaultValue="process" className="mt-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="process">Processus</TabsTrigger>
              <TabsTrigger value="benefits">Avantages</TabsTrigger>
              <TabsTrigger value="challenges">Défis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="process" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rlhfSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-muted/40 p-5 rounded-xl border border-primary/5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="font-medium text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="heading-sm mb-4 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  Schéma du processus RLHF
                </h3>
                <div className="aspect-video bg-background/80 rounded-lg p-4 flex items-center justify-center">
                  <svg viewBox="0 0 800 400" className="w-full max-w-2xl">
                    {/* RLHF Process Visualization */}
                    <rect x="50" y="50" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="150" y="85" textAnchor="middle" fill="currentColor" fontSize="16">Modèle de base pré-entraîné</text>

                    <rect x="300" y="50" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="400" y="85" textAnchor="middle" fill="currentColor" fontSize="16">Fine-tuning supervisé (SFT)</text>

                    <rect x="550" y="50" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="650" y="85" textAnchor="middle" fill="currentColor" fontSize="16">Modèle affiné par SFT</text>

                    <rect x="300" y="170" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="400" y="205" textAnchor="middle" fill="currentColor" fontSize="16">Entraînement du modèle de récompense</text>

                    <rect x="550" y="170" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="650" y="205" textAnchor="middle" fill="currentColor" fontSize="16">Modèle de récompense</text>

                    <rect x="300" y="290" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="400" y="325" textAnchor="middle" fill="currentColor" fontSize="16">Optimisation PPO</text>

                    <rect x="550" y="290" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.4" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="650" y="325" textAnchor="middle" fill="currentColor" fontSize="16">Modèle final aligné</text>

                    <rect x="50" y="170" width="200" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="150" y="205" textAnchor="middle" fill="currentColor" fontSize="14">Données de préférences humaines</text>

                    {/* Connecting arrows */}
                    <line x1="250" y1="80" x2="300" y2="80" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="500" y1="80" x2="550" y2="80" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="250" y1="200" x2="300" y2="200" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="500" y1="200" x2="550" y2="200" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="650" y1="110" x2="650" y2="170" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="650" y1="110" x2="400" y2="170" stroke="rgb(var(--primary))" strokeWidth="2" stroke-dasharray="5,5" />
                    <line x1="650" y1="230" x2="400" y2="290" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="650" y1="110" x2="400" y2="290" stroke="rgb(var(--primary))" strokeWidth="2" stroke-dasharray="5,5" />
                    <line x1="500" y1="320" x2="550" y2="320" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    {/* Arrowhead marker */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-muted/40 p-6 rounded-xl border border-primary/5"
                >
                  <h3 className="heading-sm mb-4">Amélioration des performances</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Réduction des hallucinations</span> : Les modèles entraînés avec RLHF sont plus susceptibles de reconnaître leurs limites et d'éviter de générer des informations incorrectes.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Meilleure compréhension de l'intention</span> : Le modèle s'adapte mieux aux nuances et aux ambiguïtés dans les requêtes des utilisateurs.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Réponses plus utiles</span> : Les réponses sont plus pertinentes, mieux structurées et plus directement applicables aux besoins des utilisateurs.
                      </p>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/40 p-6 rounded-xl border border-primary/5"
                >
                  <h3 className="heading-sm mb-4">Alignement avec les valeurs humaines</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Sécurité améliorée</span> : Réduction des contenus potentiellement nuisibles, offensants ou dangereux.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Comportement éthique</span> : Les modèles apprennent à refuser les demandes inappropriées et à encourager des comportements constructifs.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Adaptabilité culturelle</span> : Meilleure sensibilité aux différences culturelles et contextuelles dans les interactions.
                      </p>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/10"
              >
                <h3 className="heading-sm mb-3">Cas d'étude : Évolution de Claude avec RLHF</h3>
                <p className="text-muted-foreground mb-4">
                  Anthropic a démontré l'efficacité du RLHF avec Claude, en publiant des recherches montrant comment l'alignement progressif via RLHF a permis d'améliorer significativement les performances du modèle sur des tâches complexes tout en réduisant les comportements problématiques.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 border">
                    <h4 className="font-medium text-sm mb-2">Claude 1 (2022)</h4>
                    <p className="text-xs text-muted-foreground">Premiers cycles RLHF, réduction des contenus nocifs de 46%</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <h4 className="font-medium text-sm mb-2">Claude 2 (2023)</h4>
                    <p className="text-xs text-muted-foreground">Cycles RLHF améliorés, augmentation des scores d'utilité de 78%</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <h4 className="font-medium text-sm mb-2">Claude 3 Opus (2024)</h4>
                    <p className="text-xs text-muted-foreground">RLHF avancé avec données multimodales, amélioration de 92% sur les tâches de raisonnement</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <h4 className="font-medium text-sm mb-2">Claude 4 (2025)</h4>
                    <p className="text-xs text-muted-foreground">Nouvelle génération de RLHF, alignement préventif et performance de pointe</p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="challenges" className="mt-6">
              <div className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-muted/40 p-6 rounded-xl border border-primary/5"
                >
                  <h3 className="heading-sm mb-4">Défis techniques</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Server className="h-4 w-4 text-primary" />
                        Coût computationnel
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Le processus RLHF nécessite d'importantes ressources de calcul, particulièrement pour les grands modèles, ce qui limite son application généralisée.
                      </p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Diversité des annotateurs
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Les biais dans la sélection des annotateurs humains peuvent se refléter dans le comportement final du modèle.
                      </p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Bot className="h-4 w-4 text-primary" />
                        Instabilité d'entraînement
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Les algorithmes RL peuvent être instables et difficiles à faire converger, nécessitant un paramétrage minutieux.
                      </p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <BotIcon className="h-4 w-4 text-primary" />
                        Suroptimisation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Risque d'optimiser pour des métriques superficielles plutôt que pour une véritable amélioration de l'alignement.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-primary/5 rounded-xl border border-primary/10"
                >
                  <h3 className="heading-sm mb-4">Innovations récentes (2023-2025)</h3>
                  <div className="space-y-4">
                    <div className="bg-background/80 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Direct Preference Optimization (DPO)</h4>
                      <p className="text-sm text-muted-foreground">
                        Alternative plus efficace au RLHF traditionnel qui élimine le besoin d'un modèle de récompense séparé. Développée en 2023, cette approche réduit les coûts computationnels et améliore la stabilité.
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">RLHF itératif (iRLHF)</h4>
                      <p className="text-sm text-muted-foreground">
                        Processus cyclique qui intègre continuellement des retours humains pour raffiner le modèle. Utilisé par OpenAI et Anthropic depuis 2024, il permet une amélioration continue.
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Constitutional AI</h4>
                      <p className="text-sm text-muted-foreground">
                        Approche qui utilise un ensemble de principes (une "constitution") pour guider l'alignement. Développée par Anthropic, cette méthode réduit la dépendance aux annotateurs humains pour certains aspects.
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Collaborative RLHF (2025)</h4>
                      <p className="text-sm text-muted-foreground">
                        Nouvelle approche qui intègre des feedbacks de différentes parties prenantes (chercheurs, utilisateurs, éthiciens) pour un alignement plus démocratique et diversifié.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <SectionHeading
            pretitle="Applications concrètes"
            title="LLM et RLHF en pratique"
            description="Au-delà de la théorie, découvrez comment ces technologies sont appliquées concrètement dans différents secteurs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Santé et médecine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  En 2025, les LLM alignés par RLHF sont utilisés pour l'analyse de littérature médicale, la génération de résumés de recherche et l'assistance au diagnostic.
                </p>
                <p className="text-muted-foreground text-sm">
                  Exemple: MedicalGPT-3 utilise RLHF avec des retours de médecins spécialistes pour garantir des réponses médicalement précises et éthiquement responsables.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Éducation personnalisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Les tuteurs IA utilisent RLHF pour adapter leur style d'enseignement aux besoins individuels des étudiants, offrant un soutien personnalisé à grande échelle.
                </p>
                <p className="text-muted-foreground text-sm">
                  Exemple: EduGPT intègre les retours d'enseignants et d'étudiants pour optimiser ses explications et exercices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Création de contenu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Les LLM alignés permettent la génération de contenu créatif (articles, scripts, histoires) qui respecte les directives éditoriales et éthiques.
                </p>
                <p className="text-muted-foreground text-sm">
                  Exemple: StoryWeaver utilise RLHF pour maintenir la cohérence narrative tout en évitant les stéréotypes et contenus problématiques.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/20 border border-primary/10">
            <h3 className="heading-sm mb-4">L'avenir des LLM et du RLHF</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Tendances 2025-2026</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Démocratisation des outils RLHF pour permettre aux organisations de créer des LLM spécialisés alignés avec leurs valeurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Intégration de RLHF multimodal pour aligner les modèles sur des contenus visuels et audio en plus du texte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Réduction drastique des ressources nécessaires pour implémenter RLHF via des approches plus efficientes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Défis à résoudre</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Développer des méthodes d'évaluation plus robustes de l'alignement des modèles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Concilier les divergences culturelles et éthiques dans la définition de "l'alignement"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Garantir que les modèles restent alignés dans des contextes nouveaux ou imprévus</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="gap-1.5" asChild>
                <a href="https://arxiv.org/abs/2203.02155" target="_blank" rel="noopener noreferrer">
                  <span>Paper RLHF original</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5" asChild>
                <a href="https://huggingface.co/blog/rlhf" target="_blank" rel="noopener noreferrer">
                  <span>Guide Hugging Face</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5" asChild>
                <a href="https://www.anthropic.com/research" target="_blank" rel="noopener noreferrer">
                  <span>Recherche Anthropic</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <ExploreMoreSection links={exploreLinks} />
      </div>
    </main>
  );
};

export default LLMDetails;
