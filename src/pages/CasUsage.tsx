import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Card from '@/components/Card';
import { FeatureGrid } from '@/components';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Factory, ShoppingBag, Building2, Stethoscope, 
  Bus, Car, Shield, BadgeDollarSign, BookOpen, 
  BrainCircuit, Bot, ArrowRight, Check, X, Lightbulb,
  ChevronRight, LineChart, UserRound, Briefcase, Settings,
  Code, PencilRuler, CloudRain, Heart, HelpCircle, Zap,
  Search, BarChart2, PieChart, Users, Brain, Network,
  FileUp, Share2, Clock, Layers, RefreshCw, Database,
  Map, Smartphone, Upload, MessageCircle, ImagePlus,
  Gauge, Tool, Cpu, Share, ArrowUpRight, Eye,
  CircleDot, Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card as ShadcnCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

/**
 * Page présentant des cas d'usage de l'IA dans différents secteurs
 * @returns {JSX.Element} Le composant de la page Cas d'Usage
 */
const CasUsage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSector, setSelectedSector] = useState('manufacturing');
  const detailsRef = useRef(null);
  
  // Animation variants for the motion components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const scrollToDetails = (sectorId) => {
    setActiveTab('details');
    setSelectedSector(sectorId);
    if (detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const casUsages = [
    {
      title: "Industrie manufacturière",
      description: "Optimisation de la chaîne de production, maintenance prédictive des équipements, contrôle qualité automatisé.",
      icon: <Factory size={24} />,
      link: "#",
      id: "manufacturing"
    },
    {
      title: "Commerce de détail",
      description: "Personnalisation de l'expérience client, gestion des stocks optimisée, prédiction des ventes.",
      icon: <ShoppingBag size={24} />,
      link: "#",
      id: "retail"
    },
    {
      title: "Secteur public",
      description: "Amélioration des services aux citoyens, optimisation des infrastructures urbaines, gestion des ressources.",
      icon: <Building2 size={24} />,
      link: "#",
      id: "public"
    },
    {
      title: "Santé",
      description: "Diagnostic médical assisté, découverte de nouveaux médicaments, suivi personnalisé des patients.",
      icon: <Stethoscope size={24} />,
      link: "#",
      id: "healthcare"
    },
    {
      title: "Transport",
      description: "Véhicules autonomes, optimisation des itinéraires, gestion du trafic en temps réel.",
      icon: <Bus size={24} />,
      link: "#",
      id: "transport"
    },
    {
      title: "Automobile",
      description: "Aide à la conduite avancée, maintenance prédictive des véhicules, personnalisation de l'expérience de conduite.",
      icon: <Car size={24} />,
      link: "#",
      id: "automotive"
    },
    {
      title: "Sécurité",
      description: "Surveillance intelligente, détection de fraudes, analyse prédictive des risques.",
      icon: <Shield size={24} />,
      link: "#",
      id: "security"
    },
    {
      title: "Finance",
      description: "Analyse des risques, détection de fraudes, conseil financier personnalisé.",
      icon: <BadgeDollarSign size={24} />,
      link: "#",
      id: "finance"
    },
    {
      title: "Éducation",
      description: "Personnalisation de l'apprentissage, tutorat intelligent, évaluation automatisée.",
      icon: <BookOpen size={24} />,
      link: "#",
      id: "education"
    },
    {
      title: "Recherche",
      description: "Analyse de données massives, simulation et modélisation, découverte de connaissances.",
      icon: <BrainCircuit size={24} />,
      link: "#",
      id: "research"
    },
    {
      title: "Robotique",
      description: "Automatisation des tâches, assistance aux personnes, exploration de milieux hostiles.",
      icon: <Bot size={24} />,
      link: "#",
      id: "robotics"
    },
  ];

  const sectorDetails = {
    manufacturing: {
      title: "L'IA dans l'industrie manufacturière",
      subtitle: "Transformation des processus de production et optimisation de la chaîne de valeur",
      icon: <Factory size={32} className="text-primary" />,
      description: "L'industrie manufacturière adopte l'IA pour automatiser la production, optimiser les opérations et anticiper les pannes d'équipement, améliorant ainsi la productivité tout en réduisant les coûts.",
      applications: [
        {
          title: "Maintenance prédictive",
          description: "L'IA analyse les données des capteurs pour détecter les anomalies et prédire les défaillances avant qu'elles ne surviennent.",
          icon: <Settings className="h-5 w-5 text-primary" />,
          benefits: [
            "Réduction des temps d'arrêt non planifiés de 30-50%",
            "Augmentation de la durée de vie des équipements de 20-40%",
            "Réduction des coûts de maintenance de 25-30%"
          ],
          example: "L'usine Siemens d'Amberg utilise des capteurs et l'IA pour surveiller 50 millions de points de données par jour, réduisant les pannes de 80%."
        },
        {
          title: "Contrôle qualité automatisé",
          description: "Systèmes de vision par ordinateur capables d'inspecter les produits en temps réel et de détecter les défauts invisibles à l'œil humain.",
          icon: <Check className="h-5 w-5 text-primary" />,
          benefits: [
            "Détection de défauts améliorée de 90%",
            "Accélération du processus d'inspection de 300%",
            "Réduction des retours clients de 25%"
          ],
          example: "BMW utilise des caméras et l'IA pour inspecter la qualité de la peinture et des assemblages, détectant des défauts microscopiques avec une précision de 99,8%."
        },
        {
          title: "Optimisation de la production",
          description: "Algorithmes qui analysent les données de production pour identifier les goulots d'étranglement et suggérer des améliorations de processus.",
          icon: <LineChart className="h-5 w-5 text-primary" />,
          benefits: [
            "Augmentation de la productivité de 15-20%",
            "Réduction des déchets de 25%", 
            "Économies d'énergie de 10-15%"
          ],
          example: "Foxconn a remplacé 60 000 travailleurs par des robots intelligents dans certaines usines, augmentant la production de 30% tout en améliorant la qualité."
        }
      ],
      challenges: [
        "Intégration avec des systèmes existants parfois obsolètes",
        "Nécessite d'importantes quantités de données historiques",
        "Formation du personnel aux nouvelles technologies",
        "Investissement initial conséquent"
      ],
      casStudy: {
        company: "FANUC",
        title: "Robots intelligents et maintenance prédictive",
        description: "FANUC, leader mondial des robots industriels, a déployé des systèmes de maintenance prédictive basés sur l'IA qui surveillent en permanence le comportement des robots. Ces systèmes peuvent identifier de minuscules variations indiquant un problème potentiel des jours ou semaines avant une défaillance.",
        results: [
          "Réduction de 85% des temps d'arrêt non planifiés",
          "Économies de millions de dollars pour les clients en évitant les interruptions de production",
          "Augmentation de 15% de la durée de vie des équipements",
          "ROI typique en moins de 12 mois pour les clients"
        ],
        quote: "L'IA ne remplace pas nos techniciens, elle les rend plus efficaces en leur permettant de se concentrer sur les problèmes critiques plutôt que sur la maintenance de routine.",
        author: "Directeur de l'innovation, FANUC Europe"
      }
    },
    healthcare: {
      title: "L'IA dans le secteur de la santé",
      subtitle: "Révolution du diagnostic, du traitement et de la recherche médicale",
      icon: <Stethoscope size={32} className="text-primary" />,
      description: "L'intelligence artificielle transforme le secteur de la santé en améliorant la précision des diagnostics, en personnalisant les traitements et en accélérant la découverte de médicaments, promettant des soins de meilleure qualité à moindre coût.",
      applications: [
        {
          title: "Diagnostic assisté par IA",
          description: "Systèmes capables d'analyser des images médicales et d'autres données pour aider les médecins à détecter des maladies plus tôt et avec plus de précision.",
          icon: <HelpCircle className="h-5 w-5 text-primary" />,
          benefits: [
            "Amélioration de la précision diagnostique de 5-10%",
            "Détection plus précoce des pathologies",
            "Réduction du temps de diagnostic de 30-40%"
          ],
          example: "DeepMind a développé un système d'IA qui peut détecter plus de 50 maladies oculaires à partir de scans OCT avec une précision comparable aux ophtalmologistes experts."
        },
        {
          title: "Médecine personnalisée",
          description: "Utilisation de l'IA pour analyser le profil génétique, le mode de vie et les antécédents médicaux d'un patient afin de personnaliser les traitements.",
          icon: <UserRound className="h-5 w-5 text-primary" />,
          benefits: [
            "Augmentation de l'efficacité des traitements de 20-30%",
            "Réduction des effets secondaires de 15-25%",
            "Amélioration des résultats cliniques de 10-20%"
          ],
          example: "La Mayo Clinic utilise l'IA pour analyser le génome des patients atteints de cancer et identifier les traitements les plus susceptibles d'être efficaces pour chaque individu."
        },
        {
          title: "Découverte de médicaments",
          description: "Algorithmes qui accélèrent la recherche pharmaceutique en prédisant les interactions moléculaires et en identifiant des composés prometteurs.",
          icon: <Zap className="h-5 w-5 text-primary" />,
          benefits: [
            "Réduction du temps de développement de 3-5 ans",
            "Baisse des coûts de R&D de 25-30%",
            "Identification de nouvelles cibles thérapeutiques"
          ],
          example: "Insilico Medicine a utilisé l'IA pour créer un médicament candidat contre la fibrose pulmonaire en 18 mois au lieu des 3-5 ans habituels, et à une fraction du coût."
        }
      ],
      challenges: [
        "Protection des données sensibles des patients",
        "Intégration aux systèmes de santé existants",
        "Questions éthiques et réglementaires",
        "Besoin de validation clinique rigoureuse"
      ],
      casStudy: {
        company: "Cleveland Clinic",
        title: "Diagnostic précoce des AVC par IA",
        description: "La Cleveland Clinic a mis en œuvre un système d'IA qui analyse les images de tomodensitométrie cérébrale pour détecter les signes d'accident vasculaire cérébral (AVC) en quelques minutes. Ce système alerte immédiatement l'équipe médicale quand un traitement urgent est nécessaire.",
        results: [
          "Réduction du temps de diagnostic de 60 minutes à 6 minutes",
          "Hausse de 32% du nombre de patients recevant un traitement dans les 45 minutes cruciales suivant leur arrivée",
          "Amélioration de 23% des résultats favorables pour les patients",
          "Réduction des séquelles à long terme et des coûts hospitaliers"
        ],
        quote: "Chaque minute compte lors d'un AVC. Grâce à l'IA, nous pouvons désormais intervenir bien plus rapidement, ce qui se traduit directement par des vies sauvées et moins de handicaps permanents.",
        author: "Neurologue en chef, Cleveland Clinic"
      }
    },
    finance: {
      title: "L'IA dans le secteur financier",
      subtitle: "Transformation de la gestion des risques, détection des fraudes et services personnalisés",
      icon: <BadgeDollarSign size={32} className="text-primary" />,
      description: "Le secteur financier exploite l'IA pour analyser d'énormes volumes de données en temps réel, automatiser les processus, détecter les fraudes et fournir des conseils financiers personnalisés, révolutionnant ainsi les services bancaires et d'investissement.",
      applications: [
        {
          title: "Détection des fraudes",
          description: "Systèmes d'IA qui surveillent en continu les transactions pour identifier les comportements suspects et les tentatives de fraude.",
          icon: <Shield className="h-5 w-5 text-primary" />,
          benefits: [
            "Réduction des fraudes de 60-80%",
            "Diminution des faux positifs de 50%",
            "Économies de millions d'euros pour les institutions financières"
          ],
          example: "Mastercard utilise l'IA pour analyser plus de 75 milliards de transactions par an, identifiant les comportements frauduleux avec une précision de 99,7%."
        },
        {
          title: "Évaluation des risques",
          description: "Algorithmes prédictifs qui évaluent la solvabilité des emprunteurs et les risques d'investissement avec plus de précision que les méthodes traditionnelles.",
          icon: <ChevronRight className="h-5 w-5 text-primary" />,
          benefits: [
            "Amélioration de la précision des scores de crédit de 15-25%",
            "Réduction des défauts de paiement de 10-20%",
            "Accès au crédit pour des populations traditionnellement mal desservies"
          ],
          example: "Upstart utilise l'IA pour évaluer plus de 1 600 variables dans les demandes de prêt, permettant à ses partenaires bancaires d'approuver 27% de demandeurs en plus tout en maintenant les mêmes taux de défaut."
        },
        {
          title: "Robo-conseillers",
          description: "Plateformes automatisées qui fournissent des conseils d'investissement personnalisés et gèrent des portefeuilles en fonction des objectifs et de la tolérance au risque des clients.",
          icon: <Bot className="h-5 w-5 text-primary" />,
          benefits: [
            "Frais 50-80% inférieurs aux conseillers traditionnels",
            "Accessibilité 24/7 aux services financiers",
            "Élimination des biais émotionnels dans les décisions d'investissement"
          ],
          example: "Betterment gère plus de 33 milliards de dollars d'actifs pour plus de 700 000 clients, offrant des stratégies d'investissement personnalisées avec des frais minimaux."
        }
      ],
      challenges: [
        "Conformité aux réglementations financières strictes",
        "Explication des décisions algorithmiques (explainability)",
        "Protection des données financières sensibles",
        "Risques systémiques liés à l'automatisation"
      ],
      casStudy: {
        company: "JPMorgan Chase",
        title: "COiN - Contract Intelligence Platform",
        description: "JPMorgan Chase a déployé un système d'IA appelé COiN (Contract Intelligence) qui analyse les documents juridiques et extrait les informations et clauses importantes. Ce système peut examiner en quelques secondes des contrats qui prendraient normalement des milliers d'heures de travail humain.",
        results: [
          "Réduction du temps d'examen des contrats de 360 000 heures par an à quelques heures",
          "Diminution de 80% des erreurs dans l'analyse des documents",
          "Économies estimées à plus de 150 millions de dollars",
          "Réaffectation des juristes à des tâches à plus haute valeur ajoutée"
        ],
        quote: "L'IA nous permet de faire en quelques secondes ce qui prenait auparavant des mois. Cela libère nos talents juridiques pour qu'ils se concentrent sur les aspects stratégiques plutôt que sur des tâches répétitives.",
        author: "Directeur de l'innovation, JPMorgan Chase"
      }
    },
    education: {
      title: "L'IA dans l'éducation",
      subtitle: "Personnalisation de l'apprentissage et transformation pédagogique",
      icon: <BookOpen size={32} className="text-primary" />,
      description: "L'IA redéfinit l'éducation en permettant un apprentissage personnalisé adapté aux besoins individuels, en automatisant les tâches administratives et en fournissant des analyses approfondies sur la progression des élèves.",
      applications: [
        {
          title: "Apprentissage adaptatif",
          description: "Plateformes éducatives qui s'adaptent en temps réel au niveau, au rythme et au style d'apprentissage de chaque élève.",
          icon: <UserRound className="h-5 w-5 text-primary" />,
          benefits: [
            "Amélioration des résultats d'apprentissage de 30%",
            "Réduction du temps nécessaire à la maîtrise des concepts de 40%",
            "Augmentation de l'engagement et de la motivation des élèves"
          ],
          example: "Khan Academy utilise l'IA pour analyser les réponses des élèves et leur proposer des exercices adaptés à leur niveau, accélérant ainsi leur progression."
        },
        {
          title: "Tutorat intelligent",
          description: "Systèmes d'IA qui jouent le rôle de tuteurs personnels, offrant un retour immédiat et des explications adaptées aux difficultés spécifiques de l'apprenant.",
          icon: <Heart className="h-5 w-5 text-primary" />,
          benefits: [
            "Assistance disponible 24/7 pour les élèves",
            "Feedback personnalisé sur les erreurs et misconceptions",
            "Complémentarité avec l'enseignement humain"
          ],
          example: "Carnegie Learning a développé un tuteur mathématique intelligent utilisé par plus d'un demi-million d'élèves, améliorant leurs performances deux fois plus rapidement que les méthodes traditionnelles."
        },
        {
          title: "Automatisation administrative",
          description: "Outils qui automatisent la correction, la notation et d'autres tâches administratives, permettant aux enseignants de se concentrer sur l'interaction avec les élèves.",
          icon: <Check className="h-5 w-5 text-primary" />,
          benefits: [
            "Réduction de 70% du temps consacré aux tâches administratives",
            "Évaluations plus cohérentes et objectives",
            "Identification précoce des élèves en difficulté"
          ],
          example: "Gradescope utilise l'IA pour corriger automatiquement les copies et fournir des analyses détaillées, économisant aux enseignants des centaines d'heures de travail."
        }
      ],
      challenges: [
        "Accès équitable aux technologies éducatives",
        "Protection des données des mineurs",
        "Maintien de l'interaction humaine essentielle à l'éducation",
        "Formation des enseignants aux nouvelles technologies"
      ],
      casStudy: {
        company: "Centre scolaire Arizona State University + Dreambox",
        title: "Apprentissage adaptatif à grande échelle",
        description: "Arizona State University a intégré la plateforme d'apprentissage adaptatif DreamBox dans plusieurs de ses cours de mathématiques. Le système analyse en continu les réponses des étudiants, adaptant le contenu et le niveau de difficulté en temps réel pour optimiser l'apprentissage de chaque élève.",
        results: [
          "Augmentation de 18% des taux de réussite aux examens finaux",
          "Réduction de 27% du taux d'abandon dans les cours de mathématiques",
          "Amélioration de 35% des scores des étudiants initialement en difficulté",
          "Économies substantielles grâce à la diminution des besoins de soutien individuel"
        ],
        quote: "L'apprentissage adaptatif ne remplace pas l'enseignant, il transforme son rôle. Au lieu de dispenser le même contenu à tous, nous pouvons désormais nous concentrer sur les besoins spécifiques de chaque étudiant.",
        author: "Doyen de l'innovation pédagogique, ASU"
      }
    }
  };

  const expertQuotes = {
    manufacturing: [
      {
        quote: "L'IA industrielle permet désormais d'anticiper les problèmes de qualité avant même qu'ils ne surviennent, transformant complètement notre approche de la production.",
        author: "Marie Dubois",
        role: "Directrice d'usine, Renault Group"
      },
      {
        quote: "La maintenance prédictive basée sur l'IA nous a permis de réduire nos temps d'arrêt non planifiés de 78% en seulement 18 mois d'implémentation.",
        author: "Thomas Legrand",
        role: "Responsable maintenance, Schneider Electric"
      }
    ],
    healthcare: [
      {
        quote: "Les algorithmes de diagnostic assisté nous permettent de détecter des anomalies subtiles qui auraient pu passer inaperçues, sauvant littéralement des vies.",
        author: "Dr. Sophie Martin",
        role: "Chef du service de radiologie, CHU de Bordeaux"
      },
      {
        quote: "Grâce à l'IA, nous avons réduit de 35% le temps nécessaire pour analyser les données génomiques complexes des patients atteints de cancer.",
        author: "Prof. Antoine Mercier",
        role: "Directeur de recherche, Institut Curie"
      }
    ],
    finance: [
      {
        quote: "Nos systèmes de détection de fraude basés sur l'IA ont permis d'identifier des schémas de fraude complexes qui échappaient à nos contrôles traditionnels.",
        author: "Jeanne Moreau",
        role: "Chief Risk Officer, BNP Paribas"
      },
      {
        quote: "L'automatisation intelligente de l'analyse de crédit nous a permis d'augmenter notre capacité de traitement de 200% tout en améliorant la précision des décisions.",
        author: "Alexandre Petit",
        role: "Directeur de l'innovation, Crédit Agricole"
      }
    ],
    education: [
      {
        quote: "L'apprentissage adaptatif transforme l'expérience éducative en permettant à chaque élève d'avancer à son propre rythme, selon ses besoins spécifiques.",
        author: "Claire Dupont",
        role: "Directrice pédagogique, Académie de Paris"
      },
      {
        quote: "Nos tuteurs virtuels ont permis d'augmenter de 42% les résultats des élèves en difficulté, en leur offrant un soutien personnalisé disponible 24/7.",
        author: "Dr. Laurent Bernard",
        role: "Chercheur en sciences de l'éducation, Université de Lyon"
      }
    ]
  };

  const visualizationData = {
    manufacturing: {
      title: "Adoption de l'IA dans l'industrie manufacturière",
      description: "Pourcentage d'entreprises du secteur qui ont adopté différentes technologies d'IA",
      data: [
        { name: "Maintenance prédictive", value: 68 },
        { name: "Contrôle qualité", value: 72 },
        { name: "Optimisation de production", value: 56 },
        { name: "Gestion de chaîne logistique", value: 48 },
        { name: "Conception assistée", value: 41 }
      ]
    },
    healthcare: {
      title: "Impact de l'IA dans le secteur de la santé",
      description: "Amélioration des indicateurs clés grâce à l'IA (en %)",
      data: [
        { name: "Précision des diagnostics", value: 62 },
        { name: "Réduction temps d'attente", value: 47 },
        { name: "Efficacité des traitements", value: 53 },
        { name: "Réduction des coûts", value: 38 },
        { name: "Satisfaction patients", value: 44 }
      ]
    },
    finance: {
      title: "Technologies d'IA dans les services financiers",
      description: "Répartition des investissements en IA dans le secteur financier",
      data: [
        { name: "Détection de fraude", value: 34 },
        { name: "Trading algorithmique", value: 28 },
        { name: "Analyse de risque", value: 23 },
        { name: "Service client", value: 15 }
      ]
    },
    education: {
      title: "Impact de l'IA sur les résultats d'apprentissage",
      description: "Amélioration des performances des élèves utilisant des outils d'IA",
      data: [
        { name: "Mathématiques", value: 35 },
        { name: "Sciences", value: 29 },
        { name: "Langues", value: 24 },
        { name: "Compétences techniques", value: 48 }
      ]
    }
  };

  const innovativeProjects = {
    manufacturing: [
      {
        title: "Jumeaux numériques en production",
        description: "Création de répliques virtuelles des chaînes de production pour simuler et optimiser les processus en temps réel.",
        icon: <RefreshCw />,
        company: "Siemens",
        results: "Réduction des temps de configuration de 60%, amélioration du rendement de 25%"
      },
      {
        title: "Robots collaboratifs intelligents",
        description: "Robots équipés d'IA capables d'apprendre et de s'adapter aux tâches et aux environnements changeants.",
        icon: <Bot />,
        company: "ABB",
        results: "Augmentation de la productivité de 40%, réduction des accidents de travail de 80%"
      },
      {
        title: "Inspection visuelle automatisée",
        description: "Systèmes de vision par ordinateur qui détectent les défauts invisibles à l'œil humain sur les lignes de production.",
        icon: <Eye />,
        company: "NVIDIA & BMW",
        results: "Détection de défauts améliorée de 95%, réduction des retours clients de 30%"
      }
    ],
    healthcare: [
      {
        title: "Diagnostic assisté par IA",
        description: "Algorithmes qui analysent les images médicales pour aider à la détection précoce des maladies.",
        icon: <Search />,
        company: "Google Health & DeepMind",
        results: "Détection du cancer du sein améliorée de 8,5%, réduction des faux positifs de 5,7%"
      },
      {
        title: "Médecine personnalisée",
        description: "Utilisation de l'IA pour adapter les traitements au profil génétique spécifique de chaque patient.",
        icon: <UserRound />,
        company: "Foundation Medicine",
        results: "Efficacité des traitements contre le cancer améliorée de 40% pour les patients ciblés"
      },
      {
        title: "Surveillance à distance des patients",
        description: "Dispositifs connectés et IA pour surveiller les patients à domicile et prévenir les complications.",
        icon: <Activity />,
        company: "AliveCor & Mayo Clinic",
        results: "Réduction des réadmissions hospitalières de 52%, détection précoce améliorée de 73%"
      }
    ],
    finance: [
      {
        title: "Détection de fraude en temps réel",
        description: "Systèmes qui analysent les transactions en temps réel pour identifier les comportements suspects.",
        icon: <Shield />,
        company: "Feedzai & Citibank",
        results: "Réduction des fraudes de 75%, diminution des faux positifs de 50%"
      },
      {
        title: "Assistants financiers virtuels",
        description: "Chatbots intelligents qui offrent des conseils financiers personnalisés 24/7.",
        icon: <MessageCircle />,
        company: "Bank of America (Erica)",
        results: "20 millions d'utilisateurs actifs, 400 millions de requêtes traitées"
      },
      {
        title: "Analyse prédictive des marchés",
        description: "Modèles prédictifs qui anticipent les tendances des marchés financiers.",
        icon: <LineChart />,
        company: "JP Morgan",
        results: "Amélioration de 23% de la précision des prévisions, 15% d'augmentation du ROI"
      }
    ],
    education: [
      {
        title: "Plateformes d'apprentissage adaptatif",
        description: "Systèmes qui adaptent le contenu éducatif au niveau et au style d'apprentissage de chaque élève.",
        icon: <Brain />,
        company: "Carnegie Learning",
        results: "Amélioration des résultats en mathématiques de 83% par rapport aux méthodes traditionnelles"
      },
      {
        title: "Tuteurs intelligents",
        description: "Assistants virtuels qui fournissent un soutien personnalisé pour les matières complexes.",
        icon: <BookOpen />,
        company: "Duolingo",
        results: "500 millions d'utilisateurs, efficacité d'apprentissage des langues multipliée par 3"
      },
      {
        title: "Évaluation automatisée",
        description: "Outils d'IA qui notent et fournissent des retours détaillés sur les travaux des étudiants.",
        icon: <Check />,
        company: "Turnitin",
        results: "Réduction de 70% du temps de correction, amélioration de 40% de la qualité des retours"
      }
    ]
  };

  const userTestimonials = {
    manufacturing: [
      {
        quote: "L'IA nous a permis de réduire nos déchets de production de 32% tout en augmentant notre rendement. C'est une véritable révolution pour notre usine.",
        name: "Laurent Girard",
        role: "Responsable de production, Michelin",
        image: "/placeholder.svg"
      },
      {
        quote: "Grâce à la maintenance prédictive, nous avons pu éviter 18 arrêts majeurs l'année dernière, représentant des économies de plus de 5 millions d'euros.",
        name: "Isabelle Blanc",
        role: "Directrice technique, ArcelorMittal",
        image: "/placeholder.svg"
      }
    ],
    healthcare: [
      {
        quote: "L'assistant IA m'aide à analyser les dossiers médicaux complexes en quelques minutes au lieu de plusieurs heures, me permettant de consacrer plus de temps à mes patients.",
        name: "Dr. Paul Dupont",
        role: "Médecin généraliste, Paris",
        image: "/placeholder.svg"
      },
      {
        quote: "Le système d'IA a détecté une anomalie subtile dans ma radiographie que deux radiologues avaient manquée. Cette détection précoce a littéralement sauvé ma vie.",
        name: "Marie Leclerc",
        role: "Patiente",
        image: "/placeholder.svg"
      }
    ],
    finance: [
      {
        quote: "Notre robo-conseiller nous a permis d'offrir des services d'investissement professionnels à des clients qui n'auraient jamais eu accès à un conseiller traditionnel.",
        name: "Jean-Pierre Moreau",
        role: "Directeur clientèle, Société Générale",
        image: "/placeholder.svg"
      },
      {
        quote: "L'IA a détecté une tentative de fraude sur mon compte à 3h du matin et a bloqué la transaction avant même que je ne m'en rende compte.",
        name: "Sophie Martin",
        role: "Cliente bancaire",
        image: "/placeholder.svg"
      }
    ],
    education: [
      {
        quote: "L'outil d'apprentissage adaptatif a permis à mon fils dyslexique de progresser à son rythme en lecture. Sa confiance en lui s'est considérablement améliorée.",
        name: "Nathalie Leroy",
        role: "Parent d'élève",
        image: "/placeholder.svg"
      },
      {
        quote: "L'automatisation des tâches administratives par l'IA me permet de consacrer 40% de temps en plus à l'accompagnement individualisé de mes élèves.",
        name: "Michel Dubois",
        role: "Enseignant de mathématiques, Lycée Henri IV",
        image: "/placeholder.svg"
      }
    ]
  };

  const renderInnovativeProjects = (sector) => (
    <div className="mt-6 space-y-5">
      <h4 className="text-lg font-medium">Projets innovants</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {innovativeProjects[sector].map((project, idx) => (
          <ShadcnCard key={idx} className="h-full border-primary/10 hover:border-primary/30 transition-all">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mb-2">
                {project.icon}
              </div>
              <CardTitle className="text-base">{project.title}</CardTitle>
              <CardDescription>{project.company}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="bg-secondary/20 p-2 rounded-md w-full text-xs">
                <span className="font-medium text-primary">Résultats: </span>
                {project.results}
              </div>
            </CardFooter>
          </ShadcnCard>
        ))}
      </div>
    </div>
  );

  const renderVisualizationSection = (sector) => (
    <div className="mt-8 p-5 bg-secondary/20 rounded-lg">
      <h4 className="text-lg font-medium mb-2">{visualizationData[sector].title}</h4>
      <p className="text-sm text-muted-foreground mb-4">{visualizationData[sector].description}</p>
      <div className="grid grid-cols-1 gap-2">
        {visualizationData[sector].data.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <div className="text-sm w-48 font-medium">{item.name}</div>
            <div className="flex-1 h-4 bg-secondary/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${item.value}%` }}
                role="progressbar"
                aria-valuenow={item.value}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="text-sm font-medium w-12 text-right">{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExpertInsights = (sector) => (
    <div className="mt-8">
      <h4 className="text-lg font-medium mb-4">Paroles d'experts</h4>
      <Carousel className="w-full">
        <CarouselContent>
          {expertQuotes[sector].map((item, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-4">
                <ShadcnCard className="h-full">
                  <CardContent className="pt-6">
                    <blockquote className="text-sm italic mb-4">
                      "{item.quote}"
                    </blockquote>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.author}</p>
                        <p className="text-xs text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </ShadcnCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );

  const renderUserTestimonials = (sector) => (
    <div className="mt-8">
      <h4 className="text-lg font-medium mb-4">Témoignages d'utilisateurs</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userTestimonials[sector].map((item, idx) => (
          <div key={idx} className="p-4 bg-secondary/10 rounded-lg">
            <p className="text-sm italic mb-3">"{item.quote}"</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20"></div>
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResourceLinks = (sector) => {
    const resources = {
      manufacturing: [
        { title: "Guide: Implémentation de l'IA dans la production industrielle", url: "#", icon: <FileUp size={16} /> },
        { title: "Webinar: Maintenance prédictive et IA", url: "#", icon: <Video size={16} /> },
        { title: "Étude de cas: Transformation digitale chez Schneider Electric", url: "#", icon: <BookOpen size={16} /> }
      ],
      healthcare: [
        { title: "Livre blanc: IA et éthique médicale", url: "#", icon: <FileUp size={16} /> },
        { title: "Conférence: IA en imagerie médicale", url: "#", icon: <Video size={16} /> },
        { title: "Étude: Impact de l'IA sur les diagnostics précoces", url: "#", icon: <BookOpen size={16} /> }
      ],
      finance: [
        { title: "Guide: Sécurité des systèmes d'IA dans la finance", url: "#", icon: <FileUp size={16} /> },
        { title: "Webinar: IA et compliance réglementaire", url: "#", icon: <Video size={16} /> },
        { title: "Rapport: Évolution des applications d'IA en finance", url: "#", icon: <BookOpen size={16} /> }
      ],
      education: [
        { title: "Guide: Intégration de l'IA dans le curriculum scolaire", url: "#", icon: <FileUp size={16} /> },
        { title: "Webinar: Personnalisation de l'apprentissage par l'IA", url: "#", icon: <Video size={16} /> },
        { title: "Étude: Impact de l'IA sur les résultats d'apprentissage", url: "#", icon: <BookOpen size={16} /> }
      ]
    };

    return (
      <div className="mt-8 bg-primary/5 p-4 rounded-lg border border-primary/10">
        <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
          <BookOpen size={18} className="text-primary" /> 
          Ressources complémentaires
        </h4>
        <div className="space-y-2">
          {resources[sector].map((item, idx) => (
            <a 
              key={idx} 
              href={item.url} 
              className="flex items-center gap-2 p-2 hover:bg-primary/10 rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-1 rounded-full bg-primary/10">
                {item.icon}
              </div>
              <span className="text-sm">{item.title}</span>
              <ArrowUpRight size={14} className="ml-auto" />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Hero
        title="Cas d'usage de l'IA"
        subtitle="Découvrez comment l'intelligence artificielle est appliquée dans divers secteurs pour résoudre des problèmes concrets et créer de la valeur."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Secteurs"
          title="Applications concrètes de l'IA"
          description="L'IA transforme de nombreux domaines d'activité, de l'industrie à la santé en passant par le commerce et les services publics."
          center
        />

        <div className="mt-10">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="details">Explorer en détail</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {casUsages.map((usage, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full"
                  >
                    <Card
                      title={usage.title}
                      description={usage.description}
                      icon={usage.icon}
                      className="h-full cursor-pointer"
                      onClick={() => scrollToDetails(usage.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6" ref={detailsRef}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-2">
                  {casUsages.slice(0, 5).map((sector) => (
                    <button
                      key={sector.id}
                      className={`w-full p-4 text-left rounded-lg transition-all flex items-center gap-3 ${
                        selectedSector === sector.id 
                          ? 'bg-primary/20 shadow-md' 
                          : 'hover:bg-secondary/30'
                      }`}
                      onClick={() => setSelectedSector(sector.id)}
                    >
                      <div className={`p-2 rounded-full ${
                        selectedSector === sector.id ? 'bg-primary/20' : 'bg-secondary/20'
                      }`}>
                        {sector.icon}
                      </div>
                      <span className="font-medium">{sector.title}</span>
                    </button>
                  ))}
                </div>
                <div className="md:col-span-3">
                  {sectorDetails[selectedSector] && (
                    <motion.div
                      key={selectedSector}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="glass-card p-6 rounded-xl">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            {sectorDetails[selectedSector].icon}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold">{sectorDetails[selectedSector].title}</h2>
                            <p className="text-muted-foreground">{sectorDetails[selectedSector].subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="mb-8 text-lg">{sectorDetails[selectedSector].description}</p>
                        
                        <h3 className="font-medium text-xl mb-4">Applications principales</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          {sectorDetails[selectedSector].applications.map((app, index) => (
                            <div key={index} className="border border-border p-4 rounded-lg bg-secondary/5">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-full bg-primary/10">
                                  {app.icon}
                                </div>
                                <h4 className="font-medium">{app.title}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">{app.description}</p>
                              <div className="space-y-2">
                                {app.benefits.map((benefit, i) => (
                                  <div key={i} className="flex items-start gap-2 text-sm">
                                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                                <p className="text-xs italic">
                                  <span className="font-medium text-sm">Exemple: </span>
                                  {app.example}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {renderVisualizationSection(selectedSector)}
                        
                        {renderInnovativeProjects(selectedSector)}
                        
                        {renderExpertInsights(selectedSector)}
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-8">
                          <div className="md:col-span-1">
                            <h3 className="font-medium text-lg mb-4">Défis principaux</h3>
                            <div className="space-y-2">
                              {sectorDetails[selectedSector].challenges.map((challenge, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="md:col-span-2 p-5 border border-dashed border-primary/50 rounded-lg">
                            <h3 className="font-medium text-lg mb-1">Étude de cas</h3>
                            <h4 className="text-xl font-bold mb-3">
                              {sectorDetails[selectedSector].casStudy.company}: {sectorDetails[selectedSector].casStudy.title}
                            </h4>
                            <p className="mb-4 text-sm">{sectorDetails[selectedSector].casStudy.description}</p>
                            
                            <h5 className="font-medium mb-2 text-sm">Résultats clés:</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                              {sectorDetails[selectedSector].casStudy.results.map((result, i) => (
                                <div key={i} className="flex items-start gap-2 bg-secondary/10 p-2 rounded">
                                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{result}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <p className="text-sm italic">
                                "{sectorDetails[selectedSector].casStudy.quote}"
                              </p>
                              <p className="text-xs text-right mt-2 text-muted-foreground">
                                — {sectorDetails[selectedSector].casStudy.author}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {renderUserTestimonials(selectedSector)}
                        
                        {renderResourceLinks(selectedSector)}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section-container py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            pretitle="Tendances"
            title="L'évolution des applications de l'IA"
            description="Comment les cas d'usage de l'IA évoluent avec les avancées technologiques et les besoins du marché."
            center
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-5 rounded-xl">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">IA générative</h3>
              <p className="text-muted-foreground mb-4">Les modèles génératifs comme GPT-4, DALL-E et Midjourney transforment la création de contenu, la programmation et la conception.</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Rédaction de contenu marketing optimisé pour le SEO</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Assistance à la programmation et débogage de code</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Génération d'images, mockups et prototypes</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card p-5 rounded-xl">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automatisation intelligente</h3>
              <p className="text-muted-foreground mb-4">L'IA permet d'automatiser des processus complexes nécessitant auparavant un jugement humain.</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Automatisation du service client avec des chatbots avancés</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Traitement automatisé des documents juridiques et contractuels</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Analyses financières et rapports automatisés</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card p-5 rounded-xl">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PencilRuler className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">IA embarquée</h3>
              <p className="text-muted-foreground mb-4">Intégration de l'IA directement dans les produits et appareils, sans nécessiter de connexion cloud.</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Caméras intelligentes avec détection d'objets en temps réel</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Appareils IoT capables de prendre des décisions localement</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Smartphones avec traitement IA amélioré pour la photo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full mt-1">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vers des applications plus responsables</h3>
                <p>Les organisations adoptent progressivement des approches plus éthiques et responsables dans leurs usages de l'IA.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Pratiques émergentes</h4>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Tests rigoureux pour détecter et réduire les biais dans les modèles</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Transparence accrue sur les capacités et limites des systèmes d'IA</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">Développement de la surveillance humaine pour les décisions critiques</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Tendances réglementaires</h4>
                <div className="flex items-start gap-2">
                  <CloudRain className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">L'AI Act européen établit un cadre pour les applications à haut risque</p>
                </div>
                <div className="flex items-start gap-2">
                  <CloudRain className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Exigences croissantes de documentation et d'audit des systèmes d'IA</p>
                </div>
                <div className="flex items-start gap-2">
                  <CloudRain className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Convergence internationale vers des standards d'IA responsable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Approfondir les connaissances"
            description="Découvrez d'autres aspects de l'intelligence artificielle en explorant les sections suivantes."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/niveaux-ia">
                Niveaux d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/ia-multimodale">
                IA Multimodale
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasUsage;
