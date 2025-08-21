
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, Lightbulb } from 'lucide-react';

const GenerateurPrompts = () => {
  return (
    <>
      <Hero
        title="Générateur de Prompts Intelligent"
        subtitle="Créez des prompts optimisés pour tous vos cas d'usage avec des templates professionnels et un système d'optimisation automatique"
      />
      
      <section className="section-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-lg mb-4">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Outil en cours de développement</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Templates professionnels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Accédez à une bibliothèque de templates de prompts optimisés pour différents secteurs et cas d'usage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Optimisation automatique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                L'IA analyse et améliore vos prompts pour maximiser leur efficacité et leur précision.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Test A/B intégré</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Testez différentes versions de vos prompts et comparez leurs performances en temps réel.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default GenerateurPrompts;
