
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Timeline } from '@/components';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Page présentant l'histoire de l'IA et l'évolution des technologies
 * @returns {JSX.Element} Le composant de la page Histoire de l'IA
 */
const HistoireIA = () => {
  return (
    <>
      <Hero
        title="Histoire de l'Intelligence Artificielle"
        subtitle="Explorez l'évolution des technologies d'IA depuis leurs origines jusqu'aux développements contemporains."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Chronologie"
          title="Évolution de l'IA au fil du temps"
          description="Découvrez les moments clés, les avancées technologiques et les événements qui ont façonné le développement de l'intelligence artificielle depuis ses débuts."
          center
        />

        <div className="mt-12 px-4">
          <Timeline />
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Approfondir vos connaissances"
            description="Découvrez d'autres aspects de l'intelligence artificielle en explorant les sections suivantes."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/ressources">
                Ressources Externes
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/cas-usage">
                Cas d'usage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoireIA;
