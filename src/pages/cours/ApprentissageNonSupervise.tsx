
import React from 'react';
import Hero from '../../components/Hero';
import BackToResourcesButton from '../../components/courses/BackToResourcesButton';
import CourseHeader from '../../components/courses/CourseHeader';
import LessonSection from '../../components/courses/LessonSection';
import InteractiveExample from '../../components/courses/InteractiveExample';
import DidYouKnow from '../../components/courses/DidYouKnow';
import ZoomOn from '../../components/courses/ZoomOn';
import AnalogyBox from '../../components/courses/AnalogyBox';
import ExpandableSection from '../../components/courses/ExpandableSection';
import Illustration from '../../components/courses/Illustration';
import CourseConclusion from '../../components/courses/CourseConclusion';
import ClusteringVisualization from '../../components/courses/unsupervised-learning/ClusteringVisualization';
import DimensionalityReductionDemo from '../../components/courses/unsupervised-learning/DimensionalityReductionDemo';
import AssociationRulesDemo from '../../components/courses/unsupervised-learning/AssociationRulesDemo';
import UnsupervisedTypesComparison from '../../components/courses/unsupervised-learning/UnsupervisedTypesComparison';
import { Lightbulb, Network, Search, Shuffle, TrendingUp, Users, ShoppingCart, Database } from 'lucide-react';

const ApprentissageNonSupervise = () => {
  return (
    <>
      <Hero
        title="Apprentissage non supervisé"
        subtitle="Découvrez comment l'IA peut identifier des structures cachées dans les données sans exemples étiquetés"
      />

      <section className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="Les bases de l'apprentissage non supervisé"
          author="Geoffroy Streit"
          duration="45-60 minutes"
          level="Débutant à Intermédiaire"
          audience="Étudiants, professionnels, curieux"
          tags={["Machine Learning", "Data Science", "IA", "Algorithmes"]}
        />

        {/* Introduction pédagogique */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="h-7 w-7 text-amber-500" />
              Introduction : Qu'est-ce que l'apprentissage non supervisé ?
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Imaginez que vous êtes un explorateur qui découvre une nouvelle terre avec des milliers d'objets mystérieux éparpillés. 
                Votre mission ? Comprendre l'organisation de ces objets, identifier des groupes naturels, et découvrir des patterns cachés... 
                mais sans aucune indication préalable sur ce qu'il faut chercher !
              </p>
              
              <p>
                C'est exactement le défi de l'<strong>apprentissage non supervisé</strong> : analyser des données brutes pour y découvrir 
                des structures cachées, des groupes naturels, ou des relations intéressantes, sans avoir d'exemples de "bonnes réponses" 
                pour guider l'algorithme.
              </p>
              
              <p>
                Contrairement à l'apprentissage supervisé qui apprend à partir d'exemples étiquetés (comme "cette photo contient un chat"), 
                l'apprentissage non supervisé explore des données sans étiquettes et tente de révéler leur organisation intrinsèque.
              </p>
            </div>
          </div>

          <AnalogyBox
            title="Analogie : Le détective des données"
            content="Un détective qui arrive sur une scène de crime sans témoin ni indices évidents. Il doit observer attentivement tous les éléments présents, identifier des patterns, regrouper les indices similaires, et formuler des hypothèses sur ce qui s'est passé. L'apprentissage non supervisé fonctionne de la même manière avec les données !"
            variant="info"
          />
        </div>

        {/* Types d'apprentissage non supervisé */}
        <LessonSection 
          title="Les trois grandes familles d'apprentissage non supervisé" 
          icon={<Network className="h-6 w-6" />}
        >
          <UnsupervisedTypesComparison />
        </LessonSection>

        {/* Clustering en détail */}
        <LessonSection 
          title="Le clustering : Identifier des groupes naturels" 
          icon={<Users className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg">
              Le clustering est probablement la technique la plus intuitive de l'apprentissage non supervisé. 
              L'objectif est de diviser un ensemble de données en groupes (clusters) où les éléments d'un même groupe 
              se ressemblent plus entre eux qu'avec les éléments des autres groupes.
            </p>

            <ZoomOn title="Algorithme K-means en action">
              <p className="mb-4">
                K-means est l'un des algorithmes de clustering les plus populaires. Voici comment il fonctionne :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Choisir le nombre de clusters (K) à créer</li>
                <li>Placer aléatoirement K "centres" dans l'espace des données</li>
                <li>Assigner chaque point au centre le plus proche</li>
                <li>Recalculer la position des centres en fonction des points assignés</li>
                <li>Répéter les étapes 3-4 jusqu'à convergence</li>
              </ol>
            </ZoomOn>

            <ClusteringVisualization />

            <DidYouKnow
              items={[
                {
                  title: "Clusters naturels",
                  content: "Dans la nature, de nombreux phénomènes forment spontanément des clusters : les galaxies dans l'univers, les espèces animales par habitat, ou même les goûts musicaux par génération !"
                },
                {
                  title: "Netflix et clustering",
                  content: "Netflix utilise le clustering pour regrouper les utilisateurs ayant des goûts similaires et recommander des contenus. Votre profil fait probablement partie d'un cluster !"
                },
                {
                  title: "Marketing ciblé",
                  content: "Les entreprises utilisent le clustering pour segmenter leurs clients en groupes homogènes et adapter leurs stratégies marketing à chaque segment."
                }
              ]}
            />
          </div>
        </LessonSection>

        {/* Réduction de dimensionnalité */}
        <LessonSection 
          title="Réduction de dimensionnalité : Simplifier pour mieux comprendre" 
          icon={<TrendingUp className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg">
              Imaginez que vous essayez de comprendre un objet complexe en 3D en ne regardant que son ombre en 2D. 
              La réduction de dimensionnalité fait exactement cela : elle projette des données complexes à haute dimension 
              dans un espace plus simple, tout en préservant les informations les plus importantes.
            </p>

            <AnalogyBox
              title="L'analogie de la carte géographique"
              content="Une carte est une projection 2D de notre monde 3D. Elle perd certaines informations (comme le relief), mais permet de naviguer efficacement. La réduction de dimensionnalité crée des 'cartes' de données complexes."
              variant="tip"
            />

            <DimensionalityReductionDemo />

            <ExpandableSection title="Applications pratiques" icon={<Database className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Visualisation de données</h4>
                    <p className="text-sm">Représenter graphiquement des datasets avec des centaines de variables.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Compression d'images</h4>
                    <p className="text-sm">Réduire la taille des fichiers tout en préservant la qualité visuelle.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Recommandations</h4>
                    <p className="text-sm">Identifier des utilisateurs similaires dans un espace de préférences simplifié.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Détection d'anomalies</h4>
                    <p className="text-sm">Identifier des points inhabituels dans un espace de dimension réduite.</p>
                  </div>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </LessonSection>

        {/* Règles d'association */}
        <LessonSection 
          title="Règles d'association : Découvrir des liens cachés" 
          icon={<ShoppingCart className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg">
              "Les personnes qui achètent du pain achètent souvent du lait" - voilà le type de découverte que permettent 
              les règles d'association. Cette technique identifie des relations fréquentes entre différents éléments 
              dans un dataset.
            </p>

            <AssociationRulesDemo />

            <InteractiveExample
              title="Analyse du panier de marché"
              description="Voyons comment un supermarché peut découvrir des associations entre produits"
              steps={[
                {
                  title: "Collecte des données",
                  description: "Enregistrer tous les achats : Ticket 1 {Pain, Lait, Œufs}, Ticket 2 {Pain, Beurre}, etc.",
                  result: "Base de données de 10,000 tickets de caisse"
                },
                {
                  title: "Calcul des fréquences",
                  description: "Identifier les combinaisons fréquentes : Pain+Lait apparaît dans 30% des tickets",
                  result: "Pain → Lait (Support: 30%, Confiance: 80%)"
                },
                {
                  title: "Génération des règles",
                  description: "Créer des règles : Si Pain alors Lait (probabilité 80%)",
                  result: "15 règles d'association découvertes"
                },
                {
                  title: "Application pratique",
                  description: "Placer le lait près du pain, proposer des promotions groupées",
                  result: "Augmentation des ventes de 12%"
                }
              ]}
              finalMessage="Les règles d'association permettent de découvrir des patterns cachés qui peuvent transformer une stratégie commerciale !"
            />
          </div>
        </LessonSection>

        {/* Défis et limitations */}
        <LessonSection 
          title="Défis et limitations de l'apprentissage non supervisé" 
          icon={<Search className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Principales difficultés</h3>
              <ul className="space-y-2 text-amber-700 dark:text-amber-300">
                <li>• <strong>Évaluation subjective</strong> : Pas de "vérité terrain" pour valider les résultats</li>
                <li>• <strong>Choix des paramètres</strong> : Difficile de déterminer le nombre optimal de clusters</li>
                <li>• <strong>Interprétation</strong> : Les patterns découverts ne sont pas toujours significatifs</li>
                <li>• <strong>Dimensionnalité</strong> : Performance dégradée avec trop de variables</li>
                <li>• <strong>Bruit dans les données</strong> : Sensibilité aux données aberrantes</li>
              </ul>
            </div>

            <ExpandableSection title="Stratégies pour surmonter ces défis">
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Validation croisée</h4>
                    <p>Utiliser plusieurs méthodes et comparer les résultats pour identifier les patterns robustes.</p>
                  </div>
                  <div className="border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Expertise métier</h4>
                    <p>Collaborer avec des experts du domaine pour interpréter et valider les découvertes.</p>
                  </div>
                  <div className="border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Préparation des données</h4>
                    <p>Nettoyer soigneusement les données et gérer les valeurs aberrantes avant l'analyse.</p>
                  </div>
                  <div className="border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Tests de robustesse</h4>
                    <p>Vérifier que les résultats restent cohérents avec différents paramètres.</p>
                  </div>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </LessonSection>

        <CourseConclusion
          title="Maîtriser l'art de la découverte"
          summary="L'apprentissage non supervisé est un outil puissant pour explorer et comprendre des données complexes. Bien qu'il présente des défis uniques, il offre des possibilités infinies de découverte et d'innovation."
          learningPoints={[
            "Le clustering révèle des groupes naturels dans les données",
            "La réduction de dimensionnalité simplifie la complexité",
            "Les règles d'association découvrent des relations cachées",
            "L'interprétation des résultats nécessite une expertise métier",
            "La validation des résultats est cruciale mais complexe"
          ]}
          nextSteps={[
            "Pratiquer avec des datasets réels",
            "Apprendre les algorithmes avancés (DBSCAN, t-SNE)",
            "Étudier les applications spécialisées par domaine",
            "Développer des compétences en visualisation de données"
          ]}
        />
      </section>
    </>
  );
};

export default ApprentissageNonSupervise;
