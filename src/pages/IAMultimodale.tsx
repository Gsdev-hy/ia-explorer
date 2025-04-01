
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import ApplicationsSection from '@/components/multimodal/ApplicationsSection';
import PromptingSection from '@/components/multimodal/PromptingSection';
import ExploreMoreSection from '@/components/common/ExploreMoreSection';

/**
 * Page dédiée aux IA multimodales et à la création assistée par IA
 * @returns {JSX.Element} Le composant de la page IA Multimodale
 */
const IAMultimodale = () => {
  const [activeTab, setActiveTab] = useState("applications");

  const exploreLinks = [
    {
      to: "/ethique",
      label: "Éthique de l'IA",
      variant: "default" as const
    },
    {
      to: "/types-ia",
      label: "Types d'IA",
      variant: "outline" as const
    },
    {
      to: "/machine-learning",
      label: "Machine Learning",
      variant: "secondary" as const
    }
  ];

  return (
    <>
      <Hero
        title="IA et Création Multimodale"
        subtitle="Découvrez comment les technologies d'intelligence artificielle transforment la création dans tous les domaines artistiques et techniques."
        primaryAction={{
          label: "Explorer les exemples",
          href: "#applications-creatives"
        }}
        secondaryAction={{
          label: "Astuces de prompting",
          href: "#prompting-efficace"
        }}
      />

      <ApplicationsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <PromptingSection />
      
      <ExploreMoreSection links={exploreLinks} />
    </>
  );
};

export default IAMultimodale;
