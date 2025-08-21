
import React from 'react';
import Hero from '@/components/Hero';
import CostCalculator from '@/components/cost-calculator/CostCalculator';

const CalculateurCoutsIA = () => {
  return (
    <>
      <Hero
        title="Calculateur de Coûts IA"
        subtitle="Estimez et comparez les coûts des différents services d'IA pour optimiser votre budget et prendre des décisions éclairées"
      />
      
      <section className="section-container">
        <CostCalculator />
      </section>
    </>
  );
};

export default CalculateurCoutsIA;
