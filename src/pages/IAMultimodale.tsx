
import React, { useState, useEffect, useCallback } from 'react';
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
  
  // Fonction améliorée pour gérer le scroll vers un élément avec offset
  const scrollToElement = useCallback((elementId: string, offset: number = 100) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Attendre un peu pour s'assurer que tous les éléments sont rendus
      setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
        console.log(`Scrolling to ${elementId} at position ${elementPosition - offset}`);
      }, 50);
    } else {
      console.log(`Element with id ${elementId} not found`);
    }
  }, []);

  // Effet pour gérer le scroll vers les sections lors du clic sur les liens d'ancrage
  useEffect(() => {
    // Fonction pour intercepter les clics sur les liens d'ancrage
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const hash = anchor.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          const id = hash.substring(1);
          scrollToElement(id);
        }
      }
    };

    // Ajouter un listener pour les clics
    document.addEventListener('click', handleAnchorClick);

    // Vérifier si un hash est présent au chargement initial
    if (window.location.hash) {
      // Petit délai pour s'assurer que la page est chargée
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        scrollToElement(id);
      }, 500);
    }
    
    // Nettoyer les listeners au démontage du composant
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [scrollToElement]);

  // Effet pour observer les sections visibles et mettre à jour le hash de l'URL
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Mettre à jour l'URL sans déclencher de scroll
          history.replaceState(null, '', `#${id}`);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
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

      <section id="applications-creatives">
        <ApplicationsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
      
      <section id="prompting-efficace">
        <PromptingSection />
      </section>
      
      <ExploreMoreSection links={exploreLinks} />
    </main>
  );
};

export default IAMultimodale;
