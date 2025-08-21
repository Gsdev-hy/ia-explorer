
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Workflow, MousePointer, BarChart4 } from 'lucide-react';

const OptimiseurWorkflowIA = () => {
  return (
    <>
      <Hero
        title="Optimiseur de Workflow IA"
        subtitle="Créez et optimisez des chaînes de traitement IA complexes avec une interface visuelle. Automatisez vos processus métier avec l'IA"
      />
      
      <section className="section-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-lg mb-4">
            <Workflow className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Outil en cours de développement</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="h-5 w-5" />
                Interface drag & drop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Créez des pipelines IA complexes simplement en glissant-déposant des blocs fonctionnels.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart4 className="h-5 w-5" />
                Monitoring en temps réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Surveillez l'exécution de vos workflows avec des métriques de performance détaillées.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimisation automatique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Recevez des suggestions d'optimisation pour améliorer la vitesse et réduire les coûts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default OptimiseurWorkflowIA;
