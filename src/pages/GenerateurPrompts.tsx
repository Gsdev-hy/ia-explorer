
import React from 'react';
import Hero from '@/components/Hero';
import PromptGenerator from '@/components/prompt-generator/PromptGenerator';

const GenerateurPrompts = () => {
  return (
    <>
      <Hero
        title="Générateur de Prompts Intelligent"
        subtitle="Créez des prompts optimisés pour tous vos cas d'usage avec des templates professionnels et un système d'optimisation automatique"
      />
      
      <section className="section-container">
        <PromptGenerator />
      </section>
    </>
  );
};

export default GenerateurPrompts;
