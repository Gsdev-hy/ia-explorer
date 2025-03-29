
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Shield, HeartPulse, Building, Robot, Car, VideoIcon, ShoppingBag, School } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ApplicationExample {
  title: string;
  description: string;
  technologies: string[];
  benefits: string[];
  challenges: string[];
}

interface AIApplication {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: ApplicationExample[];
}

const MLApplications = () => {
  const [selectedTab, setSelectedTab] = useState("healthcare");
  
  const applications: AIApplication[] = [
    {
      id: "healthcare",
      name: "Santé",
      icon: <HeartPulse size={28} />,
      description: "L'IA révolutionne le secteur médical en améliorant le diagnostic, la découverte de médicaments et les soins personnalisés.",
      examples: [
        {
          title: "Détection précoce de maladies",
          description: "Algorithmes qui identifient les signes précoces de maladies comme le cancer à partir d'images médicales.",
          technologies: ["Vision par ordinateur", "CNN", "Deep Learning"],
          benefits: ["Diagnostics plus rapides", "Réduction des erreurs humaines", "Accessibilité accrue aux expertises médicales"],
          challenges: ["Explications des décisions", "Intégration avec les systèmes existants", "Questions réglementaires"]
        },
        {
          title: "Découverte de médicaments",
          description: "Modèles prédictifs qui accélèrent la découverte et le développement de nouveaux traitements.",
          technologies: ["Modèles génératifs", "Apprentissage par renforcement", "Simulation moléculaire"],
          benefits: ["Réduction significative des délais de R&D", "Baisse des coûts de développement", "Personnalisation des traitements"],
          challenges: ["Validation clinique", "Éthique et responsabilité", "Grandes quantités de données nécessaires"]
        }
      ]
    },
    {
      id: "finance",
      name: "Finance",
      icon: <Building size={28} />,
      description: "L'IA transforme les services financiers avec la détection de fraude, les investissements algorithmiques et l'analyse de risque.",
      examples: [
        {
          title: "Détection de fraudes",
          description: "Systèmes qui identifient les transactions suspectes en temps réel en analysant les comportements et tendances.",
          technologies: ["Apprentissage non supervisé", "Détection d'anomalies", "Analyse de graphes"],
          benefits: ["Réduction des pertes financières", "Protection client améliorée", "Adaptation aux nouvelles méthodes de fraude"],
          challenges: ["Faux positifs", "Confidentialité des données", "Complexité technique"]
        },
        {
          title: "Trading algorithmique",
          description: "Modèles prédictifs qui analysent les marchés financiers pour guider les décisions d'investissement.",
          technologies: ["Apprentissage par renforcement", "Séries temporelles", "NLP pour l'analyse de sentiment"],
          benefits: ["Réactivité accrue aux évolutions du marché", "Réduction des biais émotionnels", "Diversification optimisée"],
          challenges: ["Risques systémiques", "Suroptimisation", "Dépendance technologique"]
        }
      ]
    },
    {
      id: "automotive",
      name: "Automobile",
      icon: <Car size={28} />,
      description: "L'IA permet le développement de véhicules autonomes et de systèmes d'assistance à la conduite avancés.",
      examples: [
        {
          title: "Conduite autonome",
          description: "Systèmes intégrant de multiples capteurs et algorithmes pour permettre aux véhicules de naviguer sans intervention humaine.",
          technologies: ["Vision par ordinateur", "Fusion de capteurs", "Apprentissage par renforcement"],
          benefits: ["Réduction des accidents", "Optimisation du trafic", "Accessibilité pour tous"],
          challenges: ["Sécurité critique", "Environnements imprévisibles", "Questions légales et éthiques"]
        },
        {
          title: "Maintenance prédictive",
          description: "Prédiction des pannes et problèmes mécaniques avant qu'ils ne surviennent pour optimiser la maintenance.",
          technologies: ["IoT", "Analyse prédictive", "Traitement de séries temporelles"],
          benefits: ["Réduction des coûts d'entretien", "Fiabilité améliorée", "Durée de vie prolongée des véhicules"],
          challenges: ["Intégration avec les systèmes existants", "Précision des prédictions", "Coûts d'implémentation"]
        }
      ]
    },
    {
      id: "entertainment",
      name: "Divertissement",
      icon: <VideoIcon size={28} />,
      description: "L'IA révolutionne la création et la personnalisation du contenu dans l'industrie du divertissement.",
      examples: [
        {
          title: "Recommandation de contenu",
          description: "Algorithmes qui analysent les préférences des utilisateurs pour suggérer des films, séries et musiques pertinents.",
          technologies: ["Filtrage collaboratif", "Deep Learning", "Analyse comportementale"],
          benefits: ["Engagement utilisateur accru", "Découverte de contenu facilité", "Fidélisation améliorée"],
          challenges: ["Bulles de filtres", "Diversité des recommandations", "Vie privée"]
        },
        {
          title: "Création de contenu",
          description: "IA générative capable de créer des images, de la musique, des textes et même des séquences vidéo.",
          technologies: ["GAN", "Transformers", "Réseaux neuronaux récurrents"],
          benefits: ["Nouvelles formes d'expression artistique", "Production accélérée", "Réduction des coûts"],
          challenges: ["Droits d'auteur", "Authenticité", "Impact sur les créateurs humains"]
        }
      ]
    },
    {
      id: "retail",
      name: "Commerce",
      icon: <ShoppingBag size={28} />,
      description: "L'IA transforme l'expérience d'achat avec la personnalisation, l'optimisation des stocks et le service client automatisé.",
      examples: [
        {
          title: "Personnalisation des achats",
          description: "Systèmes qui adaptent l'expérience d'achat en fonction du comportement et des préférences de chaque client.",
          technologies: ["Apprentissage automatique", "Analyse en temps réel", "NLP"],
          benefits: ["Augmentation des ventes", "Satisfaction client améliorée", "Fidélisation accrue"],
          challenges: ["Équilibre entre personnalisation et vie privée", "Intégration multicanal", "Qualité des données"]
        },
        {
          title: "Gestion intelligente des stocks",
          description: "Prédiction de la demande et optimisation des niveaux de stock pour réduire les coûts et éviter les ruptures.",
          technologies: ["Prévision de séries temporelles", "Optimisation", "Big Data"],
          benefits: ["Réduction des coûts de stockage", "Minimisation des ruptures", "Chaîne d'approvisionnement optimisée"],
          challenges: ["Facteurs externes imprévisibles", "Complexité des chaînes logistiques", "Qualité des données historiques"]
        }
      ]
    },
    {
      id: "education",
      name: "Éducation",
      icon: <School size={28} />,
      description: "L'IA permet de personnaliser l'apprentissage, d'automatiser les tâches administratives et d'améliorer l'accès à l'éducation.",
      examples: [
        {
          title: "Apprentissage adaptatif",
          description: "Plateformes qui adaptent le contenu éducatif au rythme et au style d'apprentissage de chaque étudiant.",
          technologies: ["Apprentissage automatique", "Analyse comportementale", "Systèmes de recommandation"],
          benefits: ["Efficacité d'apprentissage améliorée", "Motivation accrue", "Identification précoce des difficultés"],
          challenges: ["Équité et accès", "Protection des données des mineurs", "Intégration pédagogique"]
        },
        {
          title: "Tutorat intelligent",
          description: "Assistants IA qui fournissent un soutien personnalisé et des explications adaptées aux besoins de l'apprenant.",
          technologies: ["NLP", "Systèmes de dialogue", "Modélisation cognitive"],
          benefits: ["Soutien disponible 24/7", "Feedback immédiat", "Adaptation aux différents styles d'apprentissage"],
          challenges: ["Limitations dans la compréhension profonde", "Dépendance technologique", "Rôle des enseignants humains"]
        }
      ]
    },
    {
      id: "security",
      name: "Cybersécurité",
      icon: <Shield size={28} />,
      description: "L'IA renforce la sécurité informatique avec la détection de menaces, l'analyse comportementale et la réponse automatisée.",
      examples: [
        {
          title: "Détection d'intrusions",
          description: "Systèmes qui identifient les comportements suspects et les tentatives d'accès non autorisés en temps réel.",
          technologies: ["Apprentissage non supervisé", "Détection d'anomalies", "Analyse de réseau"],
          benefits: ["Détection rapide des menaces", "Réduction des faux positifs", "Adaptation aux nouvelles menaces"],
          challenges: ["Course technologique avec les attaquants", "Volumes massifs de données à traiter", "Complexité des attaques modernes"]
        },
        {
          title: "Analyse prédictive des menaces",
          description: "Anticipation des vulnérabilités et des attaques potentielles avant qu'elles ne se manifestent.",
          technologies: ["Big Data", "Analyse comportementale", "Apprentissage profond"],
          benefits: ["Approche proactive", "Protection continue", "Réduction des risques"],
          challenges: ["Précision des prédictions", "Ressources nécessaires", "Complexité d'implémentation"]
        }
      ]
    }
  ];
  
  const selectedApplication = applications.find(app => app.id === selectedTab) || applications[0];
  
  return (
    <div className="w-full mt-12 mb-20">
      <div className="mb-8">
        <h3 className="heading-sm mb-4">Applications de l'IA par secteur</h3>
        <p className="text-muted-foreground mb-8">
          L'intelligence artificielle transforme profondément de nombreux secteurs, apportant des innovations 
          significatives et de nouvelles opportunités. Explorez les applications principales par domaine.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {applications.map((app) => (
            <motion.button
              key={app.id}
              onClick={() => setSelectedTab(app.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                selectedTab === app.id 
                ? "bg-primary text-white border-primary" 
                : "bg-secondary/30 border-muted-foreground/20 hover:bg-secondary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {app.icon}
              <span>{app.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
      
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <Card className="lg:col-span-1 h-fit border-primary/10">
          <CardHeader>
            <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              {selectedApplication.icon}
            </div>
            <CardTitle className="text-xl">{selectedApplication.name}</CardTitle>
            <CardDescription>{selectedApplication.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Technologies clés</h4>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(selectedApplication.examples.flatMap(ex => ex.technologies))).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary/40 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Impact transformateur</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {Array.from(new Set(selectedApplication.examples.flatMap(ex => ex.benefits))).slice(0, 5).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs mt-0.5">+</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue={selectedApplication.examples[0].title.toLowerCase().replace(/\s+/g, '-')}>
            <TabsList className="w-full justify-start mb-4 overflow-x-auto">
              {selectedApplication.examples.map((example, i) => (
                <TabsTrigger key={i} value={example.title.toLowerCase().replace(/\s+/g, '-')}>
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {selectedApplication.examples.map((example, i) => (
              <TabsContent key={i} value={example.title.toLowerCase().replace(/\s+/g, '-')}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Technologies</h4>
                          <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                            {example.technologies.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Bénéfices</h4>
                          <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                            {example.benefits.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Défis</h4>
                          <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                            {example.challenges.map((challenge, i) => (
                              <li key={i}>{challenge}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-secondary/30 rounded-lg mt-4 border border-border">
                          <h4 className="text-sm font-medium mb-1">À retenir</h4>
                          <p className="text-sm text-muted-foreground">
                            L'application de l'IA dans ce domaine montre comment les différents types d'IA 
                            (apprentissage supervisé, non supervisé, etc.) peuvent être combinés pour résoudre 
                            des problèmes complexes et créer de la valeur.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default MLApplications;
