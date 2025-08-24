
import React from 'react';
import Hero from '@/components/Hero';
import PromptGenerator from '@/components/prompt-generator/PromptGenerator';

const GenerateurPrompts = () => {
  return (
    <>      
      <section className="section-container">
        <PromptGenerator />
      </section>
    </>
  );
};

export default GenerateurPrompts;
