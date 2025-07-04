
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import ConceptsSection from '@/components/courses/supervised-learning/ConceptsSection';
import TypesSection from '@/components/courses/supervised-learning/TypesSection';
import InteractiveChart from '@/components/courses/supervised-learning/InteractiveChart';
import LessonSection from '@/components/courses/LessonSection';
import InteractiveExample from '@/components/courses/InteractiveExample';
import AlgorithmsSection from '@/components/courses/supervised-learning/AlgorithmsSection';
import ApplicationsSection from '@/components/courses/supervised-learning/ApplicationsSection';
import ChallengesSection from '@/components/courses/supervised-learning/ChallengesSection';
import DidYouKnow from '@/components/courses/DidYouKnow';
import CourseConclusion from '@/components/courses/CourseConclusion';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Brain, Lightbulb, BookOpen } from 'lucide-react';

const ApprentissageSupervise = () => {
  const exampleSteps = [
    {
      title: "📸 Collecte et étiquetage des données",
      description: "Rassembler 10,000 photos de chats et chiens, chacune étiquetée manuellement par des experts",
      result: "Dataset équilibré : 5,000 chats + 5,000 chiens avec labels de qualité"
    },
    {
      title: "🔍 Préparation et nettoyage",
      description: "Redimensionner images, supprimer doublons, vérifier qualité des étiquettes",
      result: "9,500 images nettoyées et standardisées (500×500 pixels)"
    },
    {
      title: "⚖️ Division des données",
      description: "Séparer intelligemment : 70% entraînement, 15% validation, 15% test",
      result: "6,650 train / 1,425 validation / 1,425 test - équilibrés par classe"
    },
    {
      title: "🧠 Entraînement du modèle",
      description: "Utiliser un réseau de neurones convolutionnel pendant 50 époques",
      result: "Modèle capable de distinguer chats vs chiens avec 94% de précision"
    },
    {
      title: "✅ Validation et optimisation",
      description: "Tester sur données de validation, ajuster hyperparamètres",
      result: "Précision optimisée à 96.5% avec réduction du sur-apprentissage"
    },
    {
      title: "🎯 Test final et évaluation",
      description: "Évaluation finale sur données jamais vues par le modèle",
      result: "Performance confirmée : 96% précision, 97% rappel sur données test"
    },
    {
      title: "🚀 Déploiement en production",
      description: "Intégrer le modèle dans une application mobile avec API",
      result: "App 'PetDetector' : identification instantanée avec confiance affichée"
    }
  ];

  const didYouKnowFacts = [
    {
      title: "Le coût de l'erreur",
      content: "En finance, une erreur de classification de 1% peut coûter des millions. C'est pourquoi les banques investissent massivement dans la qualité des données et la validation des modèles."
    },
    {
      title: "La malédiction de la dimensionnalité", 
      content: "Avec plus de 10,000 variables, il faut des millions d'exemples pour entraîner correctement. C'est pourquoi la sélection de variables est cruciale !"
    },
    {
      title: "L'effet réseau des données",
      content: "Google utilise 4 milliards de recherches par jour pour améliorer ses algorithmes. Plus d'utilisateurs = plus de données = meilleurs modèles = plus d'utilisateurs !"
    }
  ];

  return (
    <>
      <Hero
        title="Maîtriser l'Apprentissage Supervisé"
        subtitle="Le guide complet et interactif pour comprendre, appliquer et exceller dans l'apprentissage supervisé - de la théorie à la pratique professionnelle"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="L'Apprentissage Supervisé : De Débutant à Expert"
          subtitle="Votre parcours complet vers la maîtrise du Machine Learning"
          author="Geoffroy Streit"
          authorDescription="Expert en Intelligence Artificielle et Machine Learning, 10+ ans d'expérience"
          level="Débutant à Intermédiaire"
          duration="6-8 heures"
          audience="Étudiants, professionnels, curieux de tech"
          tags={['Machine Learning', 'Classification', 'Régression', 'Algorithmes', 'IA Pratique', 'Data Science']}
        />

        {/* Introduction enrichie avec nouveaux concepts */}
        <ConceptsSection />

        {/* Types détaillés avec exemples avancés */}
        <TypesSection />

        {/* Visualisation interactive améliorée */}
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
          title="Projet Complet : Créer un Classificateur Professionnel"
          icon={<BookOpen className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Suivons ensemble la création d'un vrai projet de machine learning, depuis l'idée 
              jusqu'au déploiement en production. Chaque étape révèle les défis réels 
              et les solutions pratiques utilisées par les professionnels.
            </p>
            
            <InteractiveExample
              title="🎯 Mission : Créer 'PetDetector' - L'app qui reconnaît chats et chiens"
              description="Découvrez les 7 étapes cruciales pour transformer une idée en application IA fonctionnelle"
              steps={exampleSteps}
              finalMessage="🎉 Félicitations ! Vous venez de découvrir le cycle complet de développement d'un projet d'IA. Ce processus rigoureux est utilisé par toutes les entreprises tech pour créer des solutions fiables et performantes."
            />
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">🚀 Prochaines évolutions possibles :</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-1 text-purple-700 dark:text-purple-300">
                  <li>• Ajouter plus d'espèces (oiseaux, reptiles...)</li>
                  <li>• Détecter races spécifiques</li>
                  <li>• Analyse de comportement animal</li>
                </ul>
                <ul className="space-y-1 text-purple-700 dark:text-purple-300">
                  <li>• Version temps réel (vidéo)</li>
                  <li>• Intégration réseaux sociaux</li>
                  <li>• Mode hors ligne pour téléphones</li>
                </ul>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Algorithmes détaillés avec nouveau composant */}
        <AlgorithmsSection />

        {/* Applications avec cas d'études réels */}
        <ApplicationsSection />

        {/* Nouveaux défis et bonnes pratiques */}
        <ChallengesSection />

        {/* Faits fascinants enrichis */}
        <DidYouKnow items={didYouKnowFacts} />

        {/* Conclusion enrichie avec parcours d'apprentissage */}
        <CourseConclusion
          title="🎓 Félicitations ! Vous êtes maintenant un Expert en Apprentissage Supervisé"
          summary="Vous maîtrisez maintenant les concepts fondamentaux, les algorithmes principaux, les applications réelles et les bonnes pratiques de l'apprentissage supervisé. Vous êtes prêt à tackle des projets concrets et à continuer votre montée en compétences !"
          nextSteps={[
            "🐍 Apprenez Python et les bibliothèques essentielles (scikit-learn, pandas, matplotlib)",
            "📊 Pratiquez sur des datasets réels via Kaggle, Google Colab ou GitHub",
            "🧠 Explorez le Deep Learning avec TensorFlow ou PyTorch",
            "☁️ Découvrez le MLOps et le déploiement sur AWS/GCP/Azure",
            "📚 Approfondissez avec des cours avancés (Andrew Ng, Fast.ai)",
            "🤝 Rejoignez des communautés (Reddit r/MachineLearning, Discord AI)",
            "💼 Construisez un portfolio avec 3-5 projets complets sur GitHub"
          ]}
          learningPoints={[
            "Les concepts fondamentaux et la différence classification/régression",
            "Les algorithmes principaux : forces, faiblesses, cas d'usage",
            "Le processus complet de développement d'un projet ML",
            "Les applications révolutionnaires dans tous les secteurs",
            "Les défis (sur-apprentissage, biais) et comment les surmonter",
            "Les bonnes pratiques pour des projets IA responsables et efficaces"
          ]}
        />
      </div>
    </>
  );
};

export default ApprentissageSupervise;
