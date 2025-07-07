
import React from 'react';
import Hero from '../../components/Hero';
import BackToResourcesButton from '../../components/courses/BackToResourcesButton';
import CourseHeader from '../../components/courses/CourseHeader';
import CourseConclusion from '../../components/courses/CourseConclusion';
import LessonSection from '../../components/courses/LessonSection';
import { Network, Scale, Users, BarChart3, ShoppingCart, Search } from 'lucide-react';

// Composants refactorisés
import IntroductionSection from '../../components/courses/unsupervised-learning/IntroductionSection';
import SupervisedVsUnsupervisedComparison from '../../components/courses/unsupervised-learning/SupervisedVsUnsupervisedComparison';
import UnsupervisedTypesComparison from '../../components/courses/unsupervised-learning/UnsupervisedTypesComparison';
import ClusteringSection from '../../components/courses/unsupervised-learning/ClusteringSection';
import DimensionalityReductionSection from '../../components/courses/unsupervised-learning/DimensionalityReductionSection';
import AssociationRulesSection from '../../components/courses/unsupervised-learning/AssociationRulesSection';
import ChallengesSection from '../../components/courses/unsupervised-learning/ChallengesSection';

const ApprentissageNonSupervise = () => {
  return (
    <>
      <Hero
        title="Apprentissage Non Supervisé"
        subtitle="Découvrez comment l'IA peut identifier des structures cachées dans les données sans exemples étiquetés"
      />

      <section className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="Maîtriser l'Apprentissage Non Supervisé"
          author="Geoffroy Streit"
          duration="2h30"
          level="Débutant à Intermédiaire"
          audience="Étudiants, professionnels, data scientists"
          tags={["Machine Learning", "Data Science", "Clustering", "Analyse de Données"]}
        />

        {/* Introduction pédagogique */}
        <IntroductionSection />

        {/* Comparaison Supervisé vs Non Supervisé */}
        <LessonSection 
          title="Supervisé vs Non Supervisé : Comprendre la différence" 
          icon={<Scale className="h-6 w-6" />}
        >
          <SupervisedVsUnsupervisedComparison />
        </LessonSection>

        {/* Types d'apprentissage non supervisé */}
        <LessonSection 
          title="Les trois grandes familles d'apprentissage non supervisé" 
          icon={<Network className="h-6 w-6" />}
        >
          <UnsupervisedTypesComparison />
        </LessonSection>

        {/* Sections spécialisées */}
        <ClusteringSection />
        <DimensionalityReductionSection />
        <AssociationRulesSection />
        <ChallengesSection />

        <CourseConclusion
          title="Maîtriser l'art de la découverte de données"
          summary="L'apprentissage non supervisé est un outil puissant pour explorer et comprendre des données complexes. Bien qu'il présente des défis uniques, il offre des possibilités infinies de découverte et d'innovation dans l'analyse de données."
          learningPoints={[
            "Le clustering révèle des groupes naturels dans les données",
            "La réduction de dimensionnalité simplifie la complexité",
            "Les règles d'association découvrent des relations cachées",
            "L'interprétation des résultats nécessite une expertise métier",
            "La validation des résultats est cruciale mais complexe",
            "La comparaison avec l'apprentissage supervisé aide à choisir la bonne approche"
          ]}
          nextSteps={[
            "Pratiquer avec des datasets réels (Iris, Wine, Mall Customers)",
            "Apprendre les algorithmes avancés (DBSCAN, t-SNE, UMAP)",
            "Étudier les applications spécialisées par domaine",
            "Développer des compétences en visualisation de données",
            "Explorer les techniques hybrides (semi-supervisé)",
            "Intégrer ces techniques dans des projets complets"
          ]}
        />
      </section>
    </>
  );
};

export default ApprentissageNonSupervise;
