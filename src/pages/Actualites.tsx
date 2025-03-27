
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import IANews from '@/components/news/IANews';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rss, ExternalLink, Lightbulb, Newspaper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Page d'actualités sur l'intelligence artificielle
 * @returns {JSX.Element} Le composant de la page Actualités
 */
const Actualites = () => {
  return (
    <>
      <Hero
        title="Actualités de l'IA"
        subtitle="Restez informé des dernières avancées et innovations dans le domaine de l'intelligence artificielle."
      />

      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            pretitle="Veille technologique"
            title="Les dernières nouvelles de l'IA"
            description="Suivez l'évolution rapide des technologies d'intelligence artificielle à travers une sélection d'articles provenant des sources les plus pertinentes du domaine."
            center
          />

          <Card className="mb-8 border border-dashed">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Rss className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">Actualisation automatique</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Cette page se met à jour automatiquement via des flux RSS pour vous fournir les dernières informations.
                    Les articles sont rafraîchis toutes les 30 minutes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-10">
            <IANews />
          </div>
        </div>
      </section>

      <section className="section-container bg-muted/30 rounded-3xl py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Newspaper className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="heading-lg mb-3">Approfondir vos connaissances</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Au-delà des actualités, explorez nos autres sections pour comprendre les fondements et les applications pratiques de l'intelligence artificielle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ressources pédagogiques</h3>
              <p className="text-muted-foreground mb-4">Consultez notre bibliothèque de ressources externes pour approfondir vos connaissances en IA.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/ressources">Explorer les ressources</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <ExternalLink className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Glossaire technique</h3>
              <p className="text-muted-foreground mb-4">Comprendre le vocabulaire spécifique de l'IA est essentiel pour suivre son actualité.</p>
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

export default Actualites;
