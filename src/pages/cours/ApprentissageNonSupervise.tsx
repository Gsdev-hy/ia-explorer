
import React from 'react';
import Hero from '../../components/Hero';
import BackToResourcesButton from '../../components/courses/BackToResourcesButton';
import CourseHeader from '../../components/courses/CourseHeader';
import CourseConclusion from '../../components/courses/CourseConclusion';
import { Network } from 'lucide-react';

// Composants refactorisés
import IntroductionSection from '../../components/courses/unsupervised-learning/IntroductionSection';
import UnsupervisedTypesComparison from '../../components/courses/unsupervised-learning/UnsupervisedTypesComparison';
import ClusteringSection from '../../components/courses/unsupervised-learning/ClusteringSection';
import DimensionalityReductionSection from '../../components/courses/unsupervised-learning/DimensionalityReductionSection';
import AssociationRulesSection from '../../components/courses/unsupervised-learning/AssociationRulesSection';
import ChallengesSection from '../../components/courses/unsupervised-learning/ChallengesSection';
import LessonSection from '../../components/courses/LessonSection';

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
        <IntroductionSection />

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
