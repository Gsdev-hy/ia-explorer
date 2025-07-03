
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import LessonSection from '@/components/courses/LessonSection';
import AnalogyBox from '@/components/courses/AnalogyBox';
import InteractiveExample from '@/components/courses/InteractiveExample';
import InteractiveChart from '@/components/courses/supervised-learning/InteractiveChart';
import QuickFactBox from '@/components/courses/QuickFactBox';
import DidYouKnow from '@/components/courses/DidYouKnow';
import CourseConclusion from '@/components/courses/CourseConclusion';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Lightbulb, Target, TrendingUp, Users, BookOpen, Brain } from 'lucide-react';

const ApprentissageSupervise = () => {
  const exampleSteps = [
    {
      title: "Collecte des données",
      description: "Rassembler des exemples avec leurs réponses connues (ex: photos de chats et chiens étiquetées)",
      result: "Dataset de 1000 photos : 500 chats + 500 chiens"
    },
    {
      title: "Entraînement du modèle",
      description: "L'algorithme apprend à reconnaître les patterns dans les données",
      result: "Modèle capable de distinguer les caractéristiques des chats vs chiens"
    },
    {
      title: "Test et validation",
      description: "Vérifier les performances sur de nouvelles données non vues",
      result: "Précision de 95% sur 200 nouvelles photos"
    },
    {
      title: "Utilisation en production",
      description: "Déployer le modèle pour classifier de nouvelles images",
      result: "Application mobile qui identifie automatiquement chats et chiens"
    }
  ];

  return (
    <>
      <Hero
        title="Les Bases de l'Apprentissage Supervisé"
        subtitle="Découvrez les fondamentaux du machine learning avec des exemples concrets et des visualisations interactives"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="Maîtriser l'Apprentissage Supervisé"
          description="Un guide complet et accessible pour comprendre comment les machines apprennent à partir d'exemples"
          level="Débutant"
          duration="3 heures"
          tags={['Machine Learning', 'Classification', 'Régression', 'Algorithmes']}
          author="Geoffroy Streit"
        />

        {/* Introduction accessible */}
        <LessonSection
          title="Introduction : Qu'est-ce que l'apprentissage supervisé ?"
          icon={<Lightbulb className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Imaginez que vous apprenez à un enfant à reconnaître des animaux. Vous lui montrez des photos en disant 
              "Ça, c'est un chat" ou "Ça, c'est un chien". Après avoir vu de nombreux exemples, l'enfant devient capable 
              de reconnaître ces animaux par lui-même sur de nouvelles photos.
            </p>
            
            <p className="leading-relaxed">
              L'<strong>apprentissage supervisé</strong> fonctionne exactement de la même manière : nous montrons à un 
              algorithme de nombreux exemples avec leurs "bonnes réponses" (appelées étiquettes), et il apprend à faire 
              des prédictions sur de nouvelles données qu'il n'a jamais vues.
            </p>

            <AnalogyBox
              title="Analogie : Le professeur et l'élève"
              description="L'apprentissage supervisé, c'est comme avoir un professeur très patient qui corrige chaque exercice. L'algorithme (l'élève) s'améliore en voyant ses erreurs et en ajustant sa compréhension jusqu'à donner les bonnes réponses."
            />
          </div>
        </LessonSection>

        {/* Les deux types principaux */}
        <LessonSection
          title="Les deux familles de l'apprentissage supervisé"
          icon={<Target className="h-6 w-6" />}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Classification</h3>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                Prédire une <strong>catégorie</strong> ou une <strong>classe</strong>
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Exemples :</strong></p>
                <ul className="list-disc pl-4 space-y-1 text-blue-600 dark:text-blue-300">
                  <li>Email spam ou non-spam</li>
                  <li>Diagnostic médical (maladie A, B ou C)</li>
                  <li>Reconnaissance d'images (chat, chien, oiseau)</li>
                  <li>Sentiment d'un commentaire (positif, négatif, neutre)</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Régression</h3>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                Prédire une <strong>valeur numérique</strong> continue
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Exemples :</strong></p>
                <ul className="list-disc pl-4 space-y-1 text-green-600 dark:text-green-300">
                  <li>Prix d'une maison</li>
                  <li>Température demain</li>
                  <li>Nombre de ventes prévisionnelles</li>
                  <li>Note d'un film (1 à 10)</li>
                </ul>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Visualisation interactive */}
        <LessonSection
          title="Visualisation Interactive"
          icon={<Brain className="h-6 w-6" />}
        >
          <InteractiveChart />
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>💡 Astuce :</strong> Basculez entre les onglets "Classification" et "Régression" pour voir 
              la différence entre prédire une catégorie et prédire une valeur numérique.
            </p>
          </div>
        </LessonSection>

        {/* Processus étape par étape */}
        <LessonSection
          title="Le processus complet : De l'idée au modèle fonctionnel"
          icon={<BookOpen className="h-6 w-6" />}
        >
          <InteractiveExample
            title="Exemple pratique : Créer un classificateur de photos"
            description="Suivez les étapes pour comprendre comment construire un système de reconnaissance d'images"
            steps={exampleSteps}
            finalMessage="Félicitations ! Vous avez créé votre premier modèle d'apprentissage supervisé. Ce processus est la base de nombreuses applications IA que nous utilisons quotidiennement."
          />
        </LessonSection>

        {/* Algorithmes populaires */}
        <LessonSection
          title="Les algorithmes stars de l'apprentissage supervisé"
          icon={<Target className="h-6 w-6" />}
        >
          <div className="grid gap-4">
            <div className="grid md:grid-cols-3 gap-4">
              <QuickFactBox
                title="Régression Linéaire"
                description="L'algorithme le plus simple pour prédire des valeurs numériques. Comme tracer la meilleure ligne droite dans un nuage de points."
                icon="📈"
              />
              <QuickFactBox
                title="Arbres de Décision"
                description="Fonctionne comme un questionnaire : 'Si âge > 30 ET salaire > 50k, alors crédit accordé'. Très intuitif !"
                icon="🌳"
              />
              <QuickFactBox
                title="Réseaux de Neurones"
                description="Inspirés du cerveau humain, ils excellent pour les tâches complexes comme la reconnaissance d'images."
                icon="🧠"
              />
            </div>
            
            <DidYouKnow
              fact="Random Forest utilise des centaines d'arbres de décision qui 'votent' ensemble pour donner une prédiction plus fiable. C'est le pouvoir de l'intelligence collective !"
            />
          </div>
        </LessonSection>

        {/* Applications dans la vraie vie */}
        <LessonSection
          title="Applications dans la vraie vie"
          icon={<Lightbulb className="h-6 w-6" />}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">💰 Finance & Économie</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Détection de fraude :</strong> Identifier les transactions suspectes</li>
                <li>• <strong>Scoring crédit :</strong> Évaluer le risque d'un emprunteur</li>
                <li>• <strong>Trading algorithmique :</strong> Prédire les mouvements de marché</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">🏥 Santé & Médecine</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Diagnostic médical :</strong> Détecter des maladies sur des images</li>
                <li>• <strong>Découverte de médicaments :</strong> Prédire l'efficacité des molécules</li>
                <li>• <strong>Personnalisation des traitements :</strong> Adapter les soins au patient</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">🛒 E-commerce & Marketing</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Systèmes de recommandation :</strong> "Les clients ayant acheté ceci..."</li>
                <li>• <strong>Optimisation des prix :</strong> Ajuster les tarifs en temps réel</li>
                <li>• <strong>Personnalisation :</strong> Adapter le contenu à chaque utilisateur</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">🚗 Transport & Mobilité</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Véhicules autonomes :</strong> Reconnaître panneaux et obstacles</li>
                <li>• <strong>Optimisation de routes :</strong> Calculer les meilleurs itinéraires</li>
                <li>• <strong>Maintenance prédictive :</strong> Anticiper les pannes</li>
              </ul>
            </div>
          </div>
        </LessonSection>

        <CourseConclusion
          title="Félicitations ! Vous maîtrisez maintenant les bases"
          summary="Vous avez découvert les principes fondamentaux de l'apprentissage supervisé, les différences entre classification et régression, et vu des exemples concrets d'applications. Vous êtes maintenant prêt à approfondir avec des cours plus techniques !"
          nextSteps={[
            "Explorez les algorithmes spécifiques en détail",
            "Apprenez Python et les bibliothèques de machine learning",
            "Pratiquez avec des datasets réels sur Kaggle",
            "Découvrez le deep learning pour des tâches plus complexes"
          ]}
        />
      </div>
    </>
  );
};

export default ApprentissageSupervise;
