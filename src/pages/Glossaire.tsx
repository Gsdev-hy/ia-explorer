import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import TermsGlossary from '@/components/glossary/TermsGlossary';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Mail, BookOpen } from 'lucide-react';

const Glossaire = () => {
  return (
    <>
      <Hero
        title="Glossaire des termes d'IA"
        subtitle="Une collection de définitions pour comprendre le vocabulaire technique et éthique de l'intelligence artificielle."
      />

      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/pics/actu.jpg" 
              alt="Intelligence artificielle glossaire" 
              className="w-full h-64 object-cover object-center"
            />
          </div>
          
          <SectionHeading
            pretitle="Référence"
            title="Comprendre le vocabulaire de l'IA"
            description="Ce glossaire rassemble les termes techniques, généraux, éthiques et liés à la mémoire en intelligence artificielle."
            center
          />
          
          <div className="mt-10">
            <TermsGlossary />
          </div>

          <div className="mt-16 mb-8">
            <SectionHeading
              pretitle="Fonctionnement"
              title="Comprendre les mémoires en IA"
              description="Découvrez comment les différents types de mémoire permettent aux systèmes d'IA de stocker, traiter et récupérer l'information."
              center
            />
            
            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <div className="w-full h-[200px] bg-card flex items-center justify-center rounded-md overflow-hidden">
                <svg width="90%" height="180" viewBox="0 0 800 300" className="mx-auto">
                  {/* Mémoire à court terme */}
                  <rect x="50" y="50" width="200" height="80" rx="10" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="2" />
                  <text x="150" y="95" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Mémoire à court terme</text>
                  
                  {/* Mémoire à long terme */}
                  <rect x="550" y="50" width="200" height="200" rx="10" fill="rgba(var(--primary), 0.1)" stroke="rgb(var(--primary))" strokeWidth="2" />
                  <text x="650" y="80" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Mémoire à long terme</text>
                  
                  {/* Sous-types de mémoire à long terme */}
                  <rect x="570" y="100" width="160" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
                  <text x="650" y="125" textAnchor="middle" fill="currentColor" fontSize="14">Sémantique</text>
                  
                  <rect x="570" y="150" width="160" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
                  <text x="650" y="175" textAnchor="middle" fill="currentColor" fontSize="14">Épisodique</text>
                  
                  <rect x="570" y="200" width="160" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
                  <text x="650" y="225" textAnchor="middle" fill="currentColor" fontSize="14">Procédurale</text>
                  
                  {/* Mémoire de contexte */}
                  <rect x="300" y="150" width="200" height="80" rx="10" fill="rgba(var(--primary), 0.15)" stroke="rgb(var(--primary))" strokeWidth="2" />
                  <text x="400" y="195" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Mémoire de contexte</text>
                  
                  {/* Flèches */}
                  <path d="M250 90 L300 90 L300 150" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M500 190 L550 190" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M150 130 L150 150 L300 150" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>

          <Card className="mt-8 mb-16 border border-dashed">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">Les différents types de mémoire en IA</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Les systèmes d'IA modernes utilisent différents types de mémoire pour stocker et traiter l'information. 
                    Ces illustrations montrent les principales architectures de mémoire et leurs applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
            Explorez nos autres sections pour approfondir votre compréhension des technologies d'intelligence artificielle.
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
