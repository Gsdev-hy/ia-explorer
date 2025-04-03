
import React, { useState, useEffect } from 'react';
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
  
  // Effet pour gérer le scroll vers les sections lors du clic sur les liens d'ancrage
  useEffect(() => {
    // Fonction pour gérer le scroll vers un élément avec un ID spécifique
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Petit délai pour s'assurer que la page est chargée
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            // Scroll avec un offset pour tenir compte du header fixe
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
            
            // Log pour debugging
            console.log(`Scrolling to ${hash} at position ${element.offsetTop - 100}`);
          } else {
            console.log(`Element with id ${hash.substring(1)} not found`);
          }
        }, 300); // Augmentation du délai pour s'assurer que tous les éléments sont rendus
      }
    };

    // Vérifie si un hash est présent au chargement initial
    handleHashChange();
    
    // Ajoute un listener pour les changements de hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Nettoie le listener au démontage du composant
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
    <main>
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
      
      <div id="prompting-efficace">
        <PromptingSection />
      </div>
      
      <ExploreMoreSection links={exploreLinks} />
    </main>
  );
};

export default IAMultimodale;
