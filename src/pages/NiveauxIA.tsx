import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';

/**
 * Page sur les différents niveaux d'IA (ANI, AGI, ASI)
 * @returns {JSX.Element} Le composant de la page des niveaux d'IA
 */
const NiveauxIA = () => {
  return (
    <>
      <Hero
        title="Les Niveaux de l'Intelligence Artificielle"
        subtitle="Comprendre la distinction entre l'IA faible, l'IA forte et l'IA superintelligente : implications, défis et perspectives."
      />

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8 text-center">
            L'évolution de l'intelligence artificielle est souvent catégorisée en trois niveaux distincts, 
            chacun représentant un palier significatif dans les capacités et l'autonomie des systèmes.
          </p>
          
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/pics/ia_levels.jpg"
              alt="Niveaux d'intelligence artificielle"
              className="w-full h-auto shadow-md"
            />
          </div>
          
          <SectionHeading
            title="Intelligence Artificielle Étroite (ANI)"
            description="L'IA faible, ou ANI, est spécialisée dans une tâche unique et ne possède pas de conscience ni de capacité de raisonnement général."
          />
          <p className="text-muted-foreground mb-8">
            Ce niveau d'IA excelle dans des domaines spécifiques comme la reconnaissance vocale, la vision par ordinateur ou les jeux de stratégie. 
            Les systèmes d'ANI sont omniprésents dans notre quotidien, des assistants virtuels aux algorithmes de recommandation.
          </p>

          <SectionHeading
            title="Intelligence Artificielle Générale (AGI)"
            description="L'IA forte, ou AGI, possède une capacité de compréhension, d'apprentissage et d'adaptation comparable à celle d'un être humain."
          />
          <p className="text-muted-foreground mb-8">
            Ce niveau d'IA est capable de résoudre des problèmes complexes, de généraliser ses connaissances et de transférer son apprentissage à de nouveaux domaines. 
            L'AGI reste un objectif de recherche ambitieux, avec des implications profondes pour l'avenir de l'humanité.
          </p>

          <SectionHeading
            title="Superintelligence Artificielle (ASI)"
            description="L'ASI représente un niveau d'IA hypothétique dépassant l'intelligence humaine dans tous les domaines, avec une capacité d'innovation et de création inégalée."
          />
          <p className="text-muted-foreground mb-8">
            Ce niveau d'IA soulève des questions éthiques et existentielles majeures, concernant le contrôle, l'alignement des valeurs et l'impact sur la société. 
            L'ASI est un sujet de spéculation intense, avec des scénarios allant de l'utopie technologique à la menace existentielle.
          </p>
        </div>
      </section>
    </>
  );
};

export default NiveauxIA;
