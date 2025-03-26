
import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import TermsGlossary from '@/components/glossary/TermsGlossary';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Brain, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Page du glossaire des termes liés à l'IA
 * @returns {JSX.Element} Le composant de la page Glossaire
 */
const Glossaire = () => {
  return (
    <>
      <Hero
        title="Glossaire des termes d'IA"
        subtitle="Une collection de définitions pour comprendre le vocabulaire technique et éthique de l'intelligence artificielle."
      />

      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            pretitle="Référence"
            title="Comprendre le vocabulaire de l'IA"
            description="Ce glossaire rassemble les termes techniques, généraux, éthiques et liés à la mémoire en intelligence artificielle."
            center
          />

          <Card className="mb-8 border border-dashed">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">Les différents types de mémoire en IA</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Comme dans la cognition humaine, les systèmes d'IA utilisent différents types de mémoire pour traiter l'information.
                    Explorez les concepts de mémoire à court terme, mémoire à long terme, mémoire de contexte et bien plus.
                  </p>
                </div>
                <Button variant="outline" asChild className="whitespace-nowrap">
                  <Link to="/niveaux-ia">En savoir plus</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-10">
            <TermsGlossary />
          </div>
        </div>
      </section>

      <section className="section-container bg-muted/30 rounded-3xl py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="heading-lg mb-3">Enrichir votre connaissance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explorez nos autres sections pour approfondir votre compréhension des technologies d'intelligence artificielle, de leurs applications et des enjeux éthiques associés.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link to="/ethique">Éthique de l'IA</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/machine-learning">Machine Learning</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/cas-usage">Cas d'usage</Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex justify-center items-center text-sm text-muted-foreground">
            <Mail className="h-4 w-4 mr-2" />
            <span>Pour contribuer au glossaire ou signaler une erreur : </span>
            <a href="mailto:geoffroy.streit@gmail.com" className="ml-1 text-primary hover:underline">
              geoffroy.streit@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Glossaire;
