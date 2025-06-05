
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Layers, 
  Zap, 
  Code, 
  Database, 
  Camera,
  Cpu,
  ChartBar,
  Target,
  Settings
} from 'lucide-react';

const DeepLearningPratique = () => {
  const headerProps = {
    title: "Deep Learning Pratique",
    subtitle: "Maîtrisez les réseaux de neurones profonds par la pratique",
    author: "Geoffroy Streit",
    authorDescription: "Expert en intelligence artificielle et deep learning",
    duration: "4-5 heures",
    level: "Avancé",
    audience: "Développeurs et data scientists",
    tags: ["Deep Learning", "Pratique", "Réseaux de neurones", "2024"]
  };

  const module1Data = [
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: "Configuration de l'environnement",
      items: [
        "Installation de TensorFlow/PyTorch",
        "Configuration des GPU et CUDA",
        "Environnements virtuels Python",
        "Jupyter Notebooks pour l'expérimentation",
        "Outils de monitoring des performances"
      ]
    },
    {
      icon: <Database className="h-5 w-5 text-primary" />,
      title: "Préparation des données",
      items: [
        "Chargement et préprocessing des datasets",
        "Augmentation de données (data augmentation)",
        "Normalisation et standardisation",
        "Gestion des datasets volumineux",
        "Pipeline de données efficace"
      ]
    },
    {
      icon: <Layers className="h-5 w-5 text-primary" />,
      title: "Architecture des réseaux",
      items: [
        "Construction de CNN pour la vision",
        "RNN et LSTM pour les séquences",
        "Architectures Transformer",
        "Transfer learning et fine-tuning",
        "Optimisation des hyperparamètres"
      ]
    }
  ];

  const didYouKnowItems = [
    {
      title: "GPU vs CPU",
      content: "Un GPU moderne peut accélérer l'entraînement d'un réseau de neurones de 10 à 100 fois par rapport à un CPU grâce à son architecture parallèle optimisée pour les calculs matriciels."
    },
    {
      title: "Data Augmentation",
      content: "L'augmentation de données peut améliorer les performances d'un modèle de 5-15% en créant artificiellement plus de variété dans le dataset d'entraînement."
    },
    {
      title: "Transfer Learning",
      content: "Utiliser un modèle pré-entraîné peut réduire le temps d'entraînement de plusieurs jours à quelques heures tout en obtenant de meilleurs résultats."
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
          title="Introduction au Deep Learning Pratique"
          description="Passez de la théorie à la pratique avec des projets concrets"
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Le deep learning théorique c'est bien, mais savoir l'implémenter c'est mieux ! 
                Ce cours vous emmène dans l'univers concret du développement de réseaux de neurones, 
                du premier "Hello World" en TensorFlow jusqu'aux architectures les plus avancées.
              </p>
              
              <ZoomOn title="Pourquoi la pratique est essentielle">
                <p className="mb-3">
                  Imaginez apprendre à conduire uniquement avec des livres... C'est pareil pour le deep learning ! 
                  La théorie vous donne les bases, mais c'est en codant que vous développerez l'intuition 
                  nécessaire pour diagnostiquer les problèmes, optimiser les performances et créer des solutions innovantes.
                </p>
                <p>
                  Chaque ligne de code que vous écrirez vous rapprochera de la maîtrise de cette technologie révolutionnaire.
                </p>
              </ZoomOn>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 : Fondamentaux pratiques */}
        <CourseModule
          title="Module 1 : Fondamentaux pratiques"
          description="Maîtrisez les outils et concepts essentiels"
          modules={module1Data}
        />

        <DidYouKnow items={didYouKnowItems} />

        {/* Module 2 : Projets hands-on */}
        <CourseModule
          title="Module 2 : Projets hands-on"
          description="Construisez vos premiers modèles de A à Z"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  Classification d'images
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">Projet 1</Badge>
                  <p className="text-sm">
                    Construisez un classificateur d'images capable de reconnaître des objets 
                    du quotidien avec une précision de plus de 90%.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Dataset CIFAR-10</li>
                    <li>• Architecture CNN personnalisée</li>
                    <li>• Techniques d'optimisation</li>
                    <li>• Évaluation et métriques</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartBar className="h-5 w-5 text-primary" />
                  Prédiction de séries temporelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">Projet 2</Badge>
                  <p className="text-sm">
                    Développez un modèle LSTM pour prédire l'évolution des prix 
                    d'actions ou de cryptomonnaies.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Données financières réelles</li>
                    <li>• Preprocessing des séries temporelles</li>
                    <li>• Architecture LSTM/GRU</li>
                    <li>• Validation et backtesting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 3 : Optimisation et déploiement */}
        <CourseModule
          title="Module 3 : Optimisation et déploiement"
          description="Rendez vos modèles production-ready"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Cpu className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium mb-2">Optimisation</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Quantification des modèles</li>
                    <li>• Pruning et compression</li>
                    <li>• Optimisation des inférences</li>
                    <li>• Benchmarking</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium mb-2">Accélération</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Utilisation des TPUs</li>
                    <li>• Distributed training</li>
                    <li>• Mixed precision</li>
                    <li>• Optimisation mémoire</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium mb-2">Déploiement</h4>
                  <ul className="text-sm space-y-1">
                    <li>• APIs REST avec Flask/FastAPI</li>
                    <li>• Containerisation Docker</li>
                    <li>• Cloud deployment (AWS/GCP)</li>
                    <li>• Monitoring en production</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Vous êtes maintenant un praticien du Deep Learning"
          description="Récapitulatif de votre parcours pratique et prochaines étapes"
          learningPoints={[
            "Maîtriser l'environnement de développement deep learning",
            "Construire et entraîner des modèles performants",
            "Implémenter des architectures CNN, RNN et Transformer",
            "Optimiser les performances et déployer en production",
            "Diagnostiquer et résoudre les problèmes courants"
          ]}
          nextSteps={[
            "Explorer les architectures avancées (Vision Transformers, etc.)",
            "Approfondir le MLOps et l'automatisation",
            "Contribuer à des projets open source",
            "Participer à des compétitions Kaggle",
            "Développer votre propre framework ou bibliothèque"
          ]}
        />
      </section>
    </>
  );
};

export default DeepLearningPratique;
