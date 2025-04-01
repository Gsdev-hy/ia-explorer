
import React from 'react';
import Hero from '../components/Hero';
import EthicalPrinciplesSection from '@/components/ethics/EthicalPrinciplesSection';
import EthicalChallengesSection from '@/components/ethics/EthicalChallengesSection';
import RegulatoryFrameworkSection from '@/components/ethics/RegulatoryFrameworkSection';
import QuizSection from '@/components/ethics/QuizSection';
import ExploreMoreSection from '@/components/common/ExploreMoreSection';

/**
 * Page sur l'éthique de l'IA
 * @returns {JSX.Element} Le composant de la page Éthique
 */
const Ethique = () => {
  const exploreLinks = [
    {
      to: "/niveaux-ia",
      label: "Niveaux d'IA",
      variant: "default"
    },
    {
      to: "/types-ia",
      label: "Types d'IA",
      variant: "outline"
    },
    {
      to: "/glossaire",
      label: "Glossaire des termes",
      variant: "secondary"
    }
  ];

  return (
    <>
      <Hero
        title="Éthique de l'IA"
        subtitle="Explorer les enjeux éthiques et sociétaux soulevés par le développement et l'utilisation de l'intelligence artificielle."
      />

      <EthicalPrinciplesSection />
      
      <EthicalChallengesSection />
      
      <RegulatoryFrameworkSection />
      
      <QuizSection />
      
      <ExploreMoreSection links={exploreLinks} />
    </>
  );
};

export default Ethique;
