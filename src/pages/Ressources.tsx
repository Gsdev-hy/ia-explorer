
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { ExternalResources } from '@/components';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lightbulb, BookMarked } from 'lucide-react';

/**
 * Page présentant des ressources externes pour approfondir les connaissances en IA
 * @returns {JSX.Element} Le composant de la page Ressources
 */
const Ressources = () => {
  return (
    <>
      <Hero
        title="Ressources d'apprentissage"
        subtitle="Une sélection de ressources de qualité pour approfondir vos connaissances sur l'intelligence artificielle."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Bibliothèque"
          title="Ressources Externes"
          description="Explorez notre collection de livres, articles, vidéos, cours et sites web soigneusement sélectionnés pour enrichir votre compréhension de l'IA."
          center
        />
        
        <div className="mt-10">
          <ExternalResources />
        </div>
      </section>

      <section className="section-container bg-muted/30 rounded-3xl py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="heading-lg mb-3">Poursuivre l'apprentissage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Pour approfondir votre compréhension de l'IA, consultez également notre glossaire des termes techniques et explorez l'histoire des technologies d'intelligence artificielle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Histoire de l'IA</h3>
              <p className="text-muted-foreground mb-4">Découvrez les moments clés de l'évolution de l'intelligence artificielle à travers notre timeline interactive.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/histoire-ia">Explorer la chronologie</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <BookMarked className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Glossaire technique</h3>
              <p className="text-muted-foreground mb-4">Consultez notre glossaire complet des termes techniques liés à l'intelligence artificielle.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/glossaire">Consulter le glossaire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ressources;
