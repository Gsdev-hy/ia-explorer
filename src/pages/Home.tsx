import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, BrainCircuit, GraduationCap, Code, FileSearch2, Lightbulb } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Hero
        title="Comprendre l'Intelligence Artificielle"
        subtitle="Explorez le monde de l'IA : concepts clés, applications concrètes et enjeux éthiques."
      />

      <section className="section-container">
        <SectionHeading 
          title="Pourquoi s'intéresser à l'IA ?"
          description="L'intelligence artificielle transforme notre monde. Découvrez comment elle fonctionne et comment elle peut être utilisée."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Sparkles className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Innovation et Créativité</h3>
              <p className="text-sm text-muted-foreground">
                L'IA ouvre de nouvelles perspectives pour la création de solutions innovantes dans tous les domaines.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BrainCircuit className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Compréhension Approfondie</h3>
              <p className="text-sm text-muted-foreground">
                Explorez les mécanismes de l'IA, des réseaux de neurones aux algorithmes d'apprentissage.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <GraduationCap className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Opportunités de Carrière</h3>
              <p className="text-sm text-muted-foreground">
                Découvrez les métiers de l'IA et les compétences nécessaires pour réussir dans ce domaine en pleine expansion.
              </p>
            </CardContent>
          </Card>
        </div>

        <SectionHeading 
          title="Comprendre l'intelligence artificielle"
          description="Découvrez les concepts clés, les applications et les enjeux de l'IA"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Types d'IA</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Explorez les différentes catégories d'IA, de l'IA faible à l'IA forte, et leurs caractéristiques.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/types-ia">En savoir plus</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <FileSearch2 className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Cas d'Usage</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Découvrez des exemples concrets d'applications de l'IA dans divers secteurs d'activité.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/cas-usage">Explorer les cas d'usage</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Ressources</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Accédez à une sélection de ressources pour approfondir vos connaissances sur l'IA.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/ressources">Consulter les ressources</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button asChild size="lg">
            <Link to="/types-ia">Explorer les types d'IA</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/ia-expliquee-aux-enfants">L'IA expliquée aux enfants</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
