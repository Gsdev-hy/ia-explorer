
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import ConceptsSection from '@/components/courses/supervised-learning/ConceptsSection';
import TypesSection from '@/components/courses/supervised-learning/TypesSection';
import AlgorithmsSection from '@/components/courses/supervised-learning/AlgorithmsSection';
import ApplicationsSection from '@/components/courses/supervised-learning/ApplicationsSection';
import ChallengesSection from '@/components/courses/supervised-learning/ChallengesSection';
import AlgorithmInteractiveSchema from '@/components/courses/supervised-learning/AlgorithmInteractiveSchema';
import ConceptIllustration from '@/components/courses/supervised-learning/ConceptIllustration';
import DetailedProcessExample from '@/components/courses/supervised-learning/DetailedProcessExample';
import PerformanceVisualizer from '@/components/courses/supervised-learning/PerformanceVisualizer';
import DataTrainingSimulator from '@/components/courses/supervised-learning/DataTrainingSimulator';
import InteractiveChart from '@/components/courses/supervised-learning/InteractiveChart';
import LessonSection from '@/components/courses/LessonSection';
import DidYouKnow from '@/components/courses/DidYouKnow';
import CourseConclusion from '@/components/courses/CourseConclusion';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Brain, Lightbulb, BookOpen, Zap, Target } from 'lucide-react';

const ApprentissageSupervise = () => {
  const didYouKnowFacts = [
    {
      title: "L'apprentissage supervisé représente 70% des applications IA actuelles",
      content: "De la reconnaissance vocale aux recommandations Netflix, l'apprentissage supervisé alimente la majorité des services IA que nous utilisons quotidiennement."
    },
    {
      title: "Un modèle peut apprendre de millions d'exemples en quelques heures", 
      content: "Grâce aux GPU modernes, des algorithmes peuvent traiter des téraoctets de données étiquetées en un temps record, révolutionnant la vitesse de développement."
    },
    {
      title: "80% du temps d'un projet IA est consacré aux données",
      content: "Nettoyer, labelliser et préparer les données représente la majorité du travail. Les algorithmes ne sont que la pointe de l'iceberg !"
    },
    {
      title: "Certains modèles atteignent des performances surhumaines",
      content: "En imagerie médicale, les IA détectent certains cancers avec une précision supérieure aux radiologues experts, sauvant des milliers de vies."
    }
  ];

  return (
    <>
      <Hero
        title="Maîtriser l'Apprentissage Supervisé"
        subtitle="Le guide complet et interactif pour comprendre, pratiquer et exceller dans l'apprentissage supervisé - de la théorie à la pratique professionnelle"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="L'Apprentissage Supervisé : De Débutant à Expert"
          subtitle="Votre parcours complet vers la maîtrise du Machine Learning avec simulations interactives"
          author="Geoffroy Streit"
          authorDescription="Expert en Intelligence Artificielle et Machine Learning, 10+ ans d'expérience"
          level="Débutant à Intermédiaire"
          duration="8-10 heures"
          audience="Étudiants, professionnels, curieux de tech"
          tags={['Machine Learning', 'Classification', 'Régression', 'Algorithmes', 'IA Pratique', 'Data Science']}
        />

        {/* Introduction avec illustrations conceptuelles */}
        <ConceptsSection />

        {/* Illustrations interactives des concepts */}
        <LessonSection
          title="Concepts Visuels Interactifs"
          icon={<Lightbulb className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Les concepts abstraits deviennent concrets grâce à ces illustrations interactives. 
              Explorez visuellement les fondamentaux de l'apprentissage supervisé !
            </p>
            <ConceptIllustration />
          </div>
        </LessonSection>

        {/* Types avec exemples enrichis */}
        <TypesSection />

        {/* Schémas interactifs des algorithmes stars */}
        <LessonSection
          title="Algorithmes en Action - Simulation Interactive"
          icon={<Zap className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Découvrez comment fonctionnent réellement les algorithmes d'apprentissage supervisé 
              grâce à cette simulation interactive étape par étape.
            </p>
            <AlgorithmInteractiveSchema />
          </div>
        </LessonSection>

        {/* Visualisation comparative des performances */}
        <LessonSection
          title="Comparateur de Performance"
          icon={<Target className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Comparez objectivement les forces et faiblesses de chaque algorithme 
              pour faire le bon choix selon votre projet.
            </p>
            <PerformanceVisualizer />
          </div>
        </LessonSection>

        {/* Simulateur d'entraînement de données */}
        <LessonSection
          title="Laboratoire d'Entraînement"
          icon={<Brain className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Expérimentez avec différents paramètres et observez en temps réel 
              comment un modèle apprend à partir de vos données.
            </p>
            <DataTrainingSimulator />
          </div>
        </LessonSection>

        {/* Visualisation interactive classique */}
        <LessonSection
          title="Visualisation Interactive : Voir l'IA Apprendre"
          icon={<Brain className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Rien ne vaut l'expérience visuelle pour comprendre ! Cette démonstration interactive 
              vous montre en temps réel comment un algorithme apprend à classifier et faire des régressions.
            </p>
            
            <InteractiveChart />
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Dans la classification :</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  L'algorithme trace une frontière de décision (ligne jaune) qui sépare au mieux 
                  les deux classes. Chaque nouveau point sera classé selon sa position par rapport à cette ligne.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">📈 Dans la régression :</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  L'algorithme trace la ligne qui passe le plus près possible de tous les points. 
                  Cette ligne permet de prédire la valeur Y pour n'importe quelle valeur X.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Processus détaillé étape par étape */}
        <LessonSection
          title="Projet Complet : De l'Idée à la Production"
          icon={<BookOpen className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Suivons ensemble la création d'un vrai projet de machine learning, depuis l'idée 
              jusqu'au déploiement en production. Chaque étape révèle les défis réels 
              et les solutions pratiques utilisées par les professionnels.
            </p>
            <DetailedProcessExample />
          </div>
        </LessonSection>

        {/* Algorithmes détaillés */}
        <AlgorithmsSection />

        {/* Applications avec cas d'études réels */}
        <ApplicationsSection />

        {/* Défis et bonnes pratiques */}
        <ChallengesSection />

        {/* Faits fascinants enrichis */}
        <DidYouKnow items={didYouKnowFacts} />

        {/* Conclusion enrichie */}
        <CourseConclusion
          title="🎓 Félicitations ! Vous êtes maintenant un Expert en Apprentissage Supervisé"
          summary="Vous maîtrisez maintenant les concepts fondamentaux, les algorithmes principaux, les applications réelles et les bonnes pratiques de l'apprentissage supervisé. Grâce aux simulations interactives, vous avez une compréhension pratique et visuelle des processus d'apprentissage."
          nextSteps={[
            "🐍 Apprenez Python et les bibliothèques essentielles (scikit-learn, pandas, matplotlib)",
            "📊 Pratiquez sur des datasets réels via Kaggle, Google Colab ou GitHub",
            "🧠 Explorez le Deep Learning avec TensorFlow ou PyTorch",
            "☁️ Découvrez le MLOps et le déploiement sur AWS/GCP/Azure",
            "📚 Approfondissez avec des cours avancés (Andrew Ng, Fast.ai)",
            "🤝 Rejoignez des communautés (Reddit r/MachineLearning, Discord AI)",
            "💼 Construisez un portfolio avec 3-5 projets complets sur GitHub",
            "🔬 Expérimentez avec les simulateurs de ce cours pour solidifier vos connaissances"
          ]}
          learningPoints={[
            "Les concepts fondamentaux avec visualisations interactives",
            "La différence pratique entre classification et régression", 
            "Le fonctionnement interne des algorithmes principaux",
            "Le processus complet de développement d'un projet ML",
            "Les applications révolutionnaires dans tous les secteurs",
            "Les défis réels et comment les surmonter en pratique",
            "L'expérience hands-on grâce aux simulations et visualisations"
          ]}
        />
      </div>
    </>
  );
};

export default ApprentissageSupervise;
