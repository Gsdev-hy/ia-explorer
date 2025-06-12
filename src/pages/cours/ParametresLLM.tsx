
import React from 'react';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import CourseHeader from '@/components/courses/CourseHeader';
import ArchitectureSection from '@/components/courses/parametres-llm/ArchitectureSection';
import TrainingParametersSection from '@/components/courses/parametres-llm/TrainingParametersSection';
import InferenceParametersSection from '@/components/courses/parametres-llm/InferenceParametersSection';
import CapabilitiesSection from '@/components/courses/parametres-llm/CapabilitiesSection';
import OptimizationSection from '@/components/courses/parametres-llm/OptimizationSection';
import PracticalApplicationsSection from '@/components/courses/parametres-llm/PracticalApplicationsSection';
import CourseConclusion from '@/components/courses/CourseConclusion';

const ParametresLLM = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <BackToResourcesButton />
      
      <CourseHeader
        title="Paramètres des LLM : Comprendre et Optimiser les Modèles de Langage"
        subtitle="Cartographie complète des paramètres techniques et fonctionnels qui caractérisent un LLM pour choisir et configurer le bon modèle selon vos besoins"
        author="IA Explorer"
        authorDescription="Plateforme pédagogique spécialisée en intelligence artificielle"
        duration="3-4 heures"
        level="Intermédiaire"
        audience="Développeurs, data scientists, décideurs techniques"
        tags={["LLM", "Architecture", "Hyperparamètres", "Optimisation", "Performance", "Techniques"]}
      />

      {/* Section Architecture */}
      <ArchitectureSection />
      
      {/* Section Paramètres d'entraînement */}
      <TrainingParametersSection />
      
      {/* Section Paramètres d'inférence */}
      <InferenceParametersSection />
      
      {/* Section Capacités émergentes */}
      <CapabilitiesSection />
      
      {/* Section Optimisations */}
      <OptimizationSection />
      
      {/* Section Applications pratiques */}
      <PracticalApplicationsSection />
      
      {/* Conclusion */}
      <CourseConclusion
        title="Conclusion : Maîtrisez les paramètres pour optimiser vos LLM"
        description="Vous avez maintenant une cartographie complète des paramètres des LLM et savez comment les utiliser pour choisir et optimiser vos modèles."
        learningPoints={[
          "Comprendre l'architecture fondamentale des LLM et son impact sur les performances",
          "Maîtriser les hyperparamètres d'entraînement et d'inférence",
          "Identifier les capacités émergentes et les limitations structurelles",
          "Appliquer les techniques d'optimisation selon le contexte d'usage",
          "Choisir le bon modèle en fonction des besoins métier et contraintes techniques"
        ]}
        nextSteps={[
          "Expérimentez avec différents paramètres d'inférence sur vos cas d'usage",
          "Explorez les benchmarks pour comparer les modèles dans votre domaine",
          "Testez les techniques de quantization pour optimiser les coûts",
          "Suivez l'évolution des architectures émergentes (MoE, nouveaux Transformers)",
          "Rejoignez des communautés techniques pour partager vos expériences d'optimisation"
        ]}
      />
    </div>
  );
};

export default ParametresLLM;
