
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { 
  Briefcase, Building2, Stethoscope, BookOpen, Scale, ShoppingBag, 
  Truck, Factory, Music, Dumbbell, Microscope, Landmark, FileVideo, 
  Network, Bot, Brain, Zap, CheckCircle, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Page présentant les cas d'usage concrets de l'IA
 * @returns {JSX.Element} Le composant de la page des cas d'usage
 */
const CasUsage = () => {
  const [activeTab, setActiveTab] = useState('professionnels');

  const sectors = [
    {
      name: 'Santé',
      icon: <Stethoscope className="h-5 w-5" />,
      description: 'Diagnostic assisté, découverte de médicaments, imagerie médicale améliorée',
      examples: [
        'Détection précoce de maladies via l\'analyse d\'images médicales',
        'Prédiction des épidémies et gestion des ressources hospitalières',
        'Création de traitements personnalisés basés sur le génome'
      ]
    },
    {
      name: 'Éducation',
      icon: <BookOpen className="h-5 w-5" />,
      description: 'Apprentissage personnalisé, évaluation automatisée, assistance pédagogique',
      examples: [
        'Systèmes adaptatifs ajustant le contenu selon le rythme de l\'apprenant',
        'Outils de correction automatique pour les enseignants',
        'Assistants virtuels pour répondre aux questions des étudiants'
      ]
    },
    {
      name: 'Finance',
      icon: <Landmark className="h-5 w-5" />,
      description: 'Détection de fraudes, trading algorithmique, évaluation des risques',
      examples: [
        'Modèles prédictifs pour les investissements et la gestion de portefeuille',
        'Systèmes d\'alerte pour les transactions suspectes',
        'Chatbots de service client pour les opérations bancaires'
      ]
    },
    {
      name: 'Juridique',
      icon: <Scale className="h-5 w-5" />,
      description: 'Analyse de contrats, recherche juridique, prédiction des décisions',
      examples: [
        'Examen automatisé de documents juridiques complexes',
        'Systèmes d\'aide à la décision pour les juges et avocats',
        'Analyse prédictive des résultats de procès basée sur des cas similaires'
      ]
    },
    {
      name: 'Commerce',
      icon: <ShoppingBag className="h-5 w-5" />,
      description: 'Recommandations personnalisées, optimisation des prix, service client automatisé',
      examples: [
        'Moteurs de recommandation adaptés aux préférences des utilisateurs',
        'Prévision de la demande et gestion des stocks optimisée',
        'Assistants virtuels pour l\'expérience d\'achat en ligne'
      ]
    },
    {
      name: 'Industrie',
      icon: <Factory className="h-5 w-5" />,
      description: 'Maintenance prédictive, optimisation de production, contrôle qualité',
      examples: [
        'Détection anticipée des pannes d\'équipement',
        'Optimisation des processus de fabrication et réduction des déchets',
        'Systèmes de vision par ordinateur pour l\'inspection qualité'
      ]
    },
    {
      name: 'Logistique',
      icon: <Truck className="h-5 w-5" />,
      description: 'Optimisation des itinéraires, gestion de flotte, prévision de demande',
      examples: [
        'Planification dynamique des routes de livraison',
        'Prédiction des besoins de maintenance pour les véhicules',
        'Optimisation des chaînes d\'approvisionnement mondiales'
      ]
    },
    {
      name: 'Divertissement',
      icon: <Music className="h-5 w-5" />,
      description: 'Création de contenu, recommandations personnalisées, effets spéciaux',
      examples: [
        'Génération de musique et d\'art assistée par IA',
        'Systèmes de recommandation pour les plateformes de streaming',
        'Animation et rendu 3D améliorés pour les films et jeux'
      ]
    },
    {
      name: 'Sport',
      icon: <Dumbbell className="h-5 w-5" />,
      description: 'Analyse de performance, prévention des blessures, stratégies de jeu',
      examples: [
        'Analyse vidéo des techniques et des performances des athlètes',
        'Prédiction et prévention des blessures via des données biométriques',
        'Planification tactique basée sur l\'analyse des adversaires'
      ]
    },
    {
      name: 'Recherche',
      icon: <Microscope className="h-5 w-5" />,
      description: 'Analyse de données complexes, modélisation, accélération des découvertes',
      examples: [
        'Simulation de processus biologiques pour la recherche médicale',
        'Analyse de vastes ensembles de données astronomiques',
        'Modélisation climatique et prévision des catastrophes naturelles'
      ]
    }
  ];

  // Exemples concrets détaillés pour la section "Explorer en détail"
  const detailedExamples = [
    {
      title: "Diagnostic médical assisté par IA",
      sector: "Santé",
      description: "Utilisation d'algorithmes de deep learning pour analyser des images médicales (radiographies, IRM, scanners) et détecter des anomalies avec une précision égale ou supérieure à celle des radiologues humains.",
      impact: "Détection précoce des cancers, réduction des erreurs de diagnostic, accélération du traitement des examens médicaux.",
      technology: "Réseaux de neurones convolutifs (CNN), vision par ordinateur",
      realWorldCase: "L'outil IDx-DR de la FDA qui détecte la rétinopathie diabétique sans intervention humaine, avec une sensibilité de plus de 87%."
    },
    {
      title: "Systèmes d'alerte précoce en finance",
      sector: "Finance",
      description: "Surveillance continue des transactions et des activités financières pour détecter les comportements frauduleux ou les anomalies avant qu'ils ne causent des dommages significatifs.",
      impact: "Réduction des pertes dues aux fraudes, protection des consommateurs, maintien de l'intégrité des systèmes financiers.",
      technology: "Apprentissage par renforcement, détection d'anomalies, analyse comportementale",
      realWorldCase: "Mastercard utilise l'IA pour analyser 75 milliards de transactions annuelles, réduisant les faux positifs de 50% dans la détection de fraudes."
    },
    {
      title: "Assistants pédagogiques personnalisés",
      sector: "Éducation",
      description: "Plateformes éducatives qui s'adaptent au rythme, style d'apprentissage et niveau de compétence de chaque étudiant, offrant un contenu et des exercices personnalisés.",
      impact: "Amélioration des résultats d'apprentissage, réduction des abandons scolaires, soutien aux enseignants dans la différenciation pédagogique.",
      technology: "Systèmes de tutorat intelligents, modèles prédictifs, traitement du langage naturel",
      realWorldCase: "Duolingo utilise l'IA pour adapter ses leçons de langue en fonction des performances de l'utilisateur, augmentant les taux de rétention de 12%."
    },
    {
      title: "Maintenance prédictive industrielle",
      sector: "Industrie",
      description: "Analyse des données des capteurs des équipements industriels pour prédire les pannes avant qu'elles ne se produisent, permettant une maintenance proactive plutôt que réactive.",
      impact: "Réduction des temps d'arrêt, optimisation des coûts de maintenance, prolongation de la durée de vie des équipements.",
      technology: "Internet des objets (IoT), analyse prédictive, apprentissage automatique",
      realWorldCase: "Siemens a réduit les temps d'arrêt non planifiés de 30% dans ses usines de fabrication grâce à ses systèmes de maintenance prédictive."
    },
    {
      title: "Optimisation logistique du dernier kilomètre",
      sector: "Logistique",
      description: "Algorithmes qui optimisent les itinéraires de livraison en tenant compte du trafic en temps réel, des conditions météorologiques, des préférences des clients et de nombreux autres facteurs.",
      impact: "Réduction des coûts de livraison, diminution de l'empreinte carbone, amélioration de la satisfaction client.",
      technology: "Optimisation combinatoire, algorithmes génétiques, apprentissage par renforcement",
      realWorldCase: "UPS économise annuellement 10 millions de gallons de carburant grâce à son système ORION qui optimise les itinéraires des chauffeurs-livreurs."
    },
    {
      title: "Analyse juridique automatisée",
      sector: "Juridique",
      description: "Outils d'IA qui analysent des milliers de documents juridiques pour extraire des informations pertinentes, identifier des précédents et évaluer les risques contractuels.",
      impact: "Accélération de la recherche juridique, réduction des coûts, amélioration de la précision des analyses.",
      technology: "Traitement du langage naturel (NLP), extraction d'information, classification de texte",
      realWorldCase: "JPMorgan Chase utilise le système COIN qui analyse les contrats en quelques secondes, un travail qui prenait auparavant 360 000 heures d'avocat par an."
    }
  ];

  const renderDetailedExample = (example) => (
    <Card key={example.title} className="mb-8 overflow-hidden border-primary/10">
      <CardHeader className="bg-primary/5 border-b border-primary/10">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold">{example.title}</CardTitle>
            <CardDescription className="mt-1">Secteur: {example.sector}</CardDescription>
          </div>
          <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Cas concret
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium uppercase text-muted-foreground mb-1">Description</h4>
            <p>{example.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-primary mb-2">Impact</h4>
              <p className="text-sm">{example.impact}</p>
            </div>
            
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-primary mb-2">Technologies</h4>
              <p className="text-sm">{example.technology}</p>
            </div>
            
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-primary mb-2">Exemple réel</h4>
              <p className="text-sm">{example.realWorldCase}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderResourceLinks = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Types d'IA</CardTitle>
          </div>
          <CardDescription>Comprendre les différentes catégories d'intelligence artificielle</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">IA symbolique vs connexionniste</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">IA faible, forte et générale</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/types-ia">Explorer les types d'IA</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Machine Learning</CardTitle>
          </div>
          <CardDescription>Découvrir les techniques d'apprentissage automatique</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Apprentissage supervisé et non supervisé</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Réseaux de neurones et deep learning</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/machine-learning">Explorer le Machine Learning</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <>
      <Hero
        title="Cas d'usage de l'IA"
        subtitle="Découvrez comment l'intelligence artificielle transforme les industries et révolutionne notre quotidien à travers des applications concrètes."
      />

      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/pics/usage.jpg" 
              alt="Cas d'usage de l'IA" 
              className="w-full h-64 object-cover object-center"
            />
          </div>
          
          <SectionHeading
            pretitle="Secteurs"
            title="L'IA dans tous les domaines d'activité"
            description="L'intelligence artificielle transforme profondément de nombreux secteurs économiques et sociaux, apportant efficacité, précision et innovation."
            center
          />

          <Tabs 
            defaultValue="professionnels" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-16"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="professionnels">Secteurs professionnels</TabsTrigger>
              <TabsTrigger value="applications">Applications pratiques</TabsTrigger>
            </TabsList>
            
            <TabsContent value="professionnels" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-full bg-primary/10 text-primary">
                            {sector.icon}
                          </div>
                          <CardTitle className="text-lg">{sector.name}</CardTitle>
                        </div>
                        <CardDescription>{sector.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-sm font-medium mb-2">Exemples d'applications:</h4>
                        <ul className="space-y-1">
                          {sector.examples.map((example, i) => (
                            <li key={i} className="text-sm flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Reconnaissance d'images",
                    icon: <FileVideo className="h-5 w-5" />,
                    description: "Identification et classification d'objets, de personnes ou de scènes dans des images et vidéos",
                    examples: [
                      "Diagnostic médical par analyse d'images radiologiques",
                      "Reconnaissance faciale pour la sécurité et l'authentification",
                      "Contrôle qualité automatisé dans les chaînes de production"
                    ]
                  },
                  {
                    name: "Traitement du langage naturel",
                    icon: <Bot className="h-5 w-5" />,
                    description: "Compréhension, génération et traduction de textes et de la parole humaine",
                    examples: [
                      "Assistants virtuels comme Siri, Alexa ou Google Assistant",
                      "Analyse des sentiments dans les réseaux sociaux",
                      "Traduction automatique et sous-titrage en temps réel"
                    ]
                  },
                  {
                    name: "Systèmes de recommandation",
                    icon: <Zap className="h-5 w-5" />,
                    description: "Prédiction des préférences utilisateurs pour suggérer des produits ou contenus pertinents",
                    examples: [
                      "Recommandations de films sur Netflix ou produits sur Amazon",
                      "Suggestions personnalisées de musique sur Spotify",
                      "Fil d'actualité personnalisé sur les réseaux sociaux"
                    ]
                  },
                  {
                    name: "Robotique intelligente",
                    icon: <Factory className="h-5 w-5" />,
                    description: "Robots dotés de capacités de perception, de prise de décision et d'adaptation",
                    examples: [
                      "Robots autonomes dans les entrepôts logistiques",
                      "Robots chirurgicaux assistants pour opérations de précision",
                      "Véhicules autonomes et drones de livraison"
                    ]
                  },
                  {
                    name: "Prévision et optimisation",
                    icon: <Network className="h-5 w-5" />,
                    description: "Analyse de données historiques pour prédire des tendances et optimiser des processus",
                    examples: [
                      "Prévision de la demande pour la gestion des stocks",
                      "Maintenance prédictive dans l'industrie",
                      "Optimisation de la consommation énergétique des bâtiments"
                    ]
                  },
                  {
                    name: "Assistance à la décision",
                    icon: <Brain className="h-5 w-5" />,
                    description: "Systèmes d'aide à la prise de décision basés sur l'analyse de données complexes",
                    examples: [
                      "Aide au diagnostic médical et plans de traitement",
                      "Évaluation des risques dans les assurances et la finance",
                      "Analyse prédictive pour les décisions commerciales stratégiques"
                    ]
                  }
                ].map((application, index) => (
                  <motion.div
                    key={application.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-full bg-primary/10 text-primary">
                            {application.icon}
                          </div>
                          <CardTitle className="text-lg">{application.name}</CardTitle>
                        </div>
                        <CardDescription>{application.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-sm font-medium mb-2">Applications concrètes:</h4>
                        <ul className="space-y-1">
                          {application.examples.map((example, i) => (
                            <li key={i} className="text-sm flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <SectionHeading
            pretitle="Approfondissement"
            title="Explorer en détail"
            description="Découvrez des exemples concrets d'applications d'IA qui révolutionnent différents secteurs, avec une analyse détaillée de leur fonctionnement et de leur impact."
            center
          />
          
          <div className="space-y-8 mt-10">
            {detailedExamples.map(example => renderDetailedExample(example))}
          </div>
          
          <SectionHeading
            pretitle="Ressources"
            title="Pour aller plus loin"
            description="Explorez nos autres sections pour approfondir votre compréhension des technologies d'IA et leur application."
            center
          />
          
          {renderResourceLinks()}
        </div>
      </section>
    </>
  );
};

export default CasUsage;
