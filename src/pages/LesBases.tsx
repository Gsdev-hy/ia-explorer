
import React from 'react';
import Hero from '@/components/Hero';
import AIMemoryTypes from '@/components/memory/AIMemoryTypes';
import ConceptsFoundamentaux from '@/components/basics/ConceptsFoundamentaux';
import AnalogiePedagogique from '@/components/basics/AnalogiePedagogique';
import CapacitesIA from '@/components/basics/CapacitesIA';
import ExemplesPratiques from '@/components/basics/ExemplesPratiques';
import PointsCles from '@/components/basics/PointsCles';

const LesBases = () => {
  return (
    <>
      <Hero
        title="Les bases de l'IA"
        subtitle="Découvrez les concepts fondamentaux de l'intelligence artificielle expliqués simplement et de manière accessible à tous."
      />

      <section className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Concepts fondamentaux */}
          <ConceptsFoundamentaux />

          {/* Analogie pédagogique */}
          <AnalogiePedagogique />

          {/* Capacités de l'IA */}
          <CapacitesIA />

          {/* Exemples pratiques */}
          <ExemplesPratiques />

          {/* Section Mémoire dans les systèmes d'IA */}
          <AIMemoryTypes />

          {/* Points clés à retenir */}
          <PointsCles />

        </div>
      </section>
    </>
  );
};

export default LesBases;
