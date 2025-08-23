
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Workflow, 
  MousePointer, 
  BarChart4, 
  Play,
  Settings,
  TrendingUp,
  Zap,
  Database,
  GitBranch
} from 'lucide-react';
import WorkflowEditor from '@/components/workflow/WorkflowEditor';
import WorkflowOptimizer from '@/components/workflow/WorkflowOptimizer';
import { Node, Edge } from '@xyflow/react';

const OptimiseurWorkflowIA = () => {
  const [currentWorkflow, setCurrentWorkflow] = useState<{nodes: Node[], edges: Edge[]} | null>(null);

  const handleWorkflowSave = (workflow: {nodes: Node[], edges: Edge[]}) => {
    setCurrentWorkflow(workflow);
    console.log('Workflow sauvegardé:', workflow);
  };

  const handleWorkflowExecute = async (nodes: Node[], edges: Edge[]) => {
    console.log('Exécution du workflow:', { nodes, edges });
    // Ici on pourrait intégrer avec des APIs réelles
  };

  return (
    <>
      <Hero
        title="Optimiseur de Workflow IA"
        subtitle="Créez, optimisez et automatisez des chaînes de traitement IA complexes avec une interface visuelle intuitive"
      />
      
      <section className="section-container">
        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="editor" className="flex items-center gap-2">
              <MousePointer className="h-4 w-4" />
              Éditeur
            </TabsTrigger>
            <TabsTrigger value="optimizer" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Optimisation
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Fonctionnalités
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="h-5 w-5" />
                  Éditeur de Workflow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <WorkflowEditor 
                  onSave={handleWorkflowSave}
                  onExecute={handleWorkflowExecute}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimizer" className="mt-6">
            {currentWorkflow ? (
              <WorkflowOptimizer 
                nodes={currentWorkflow.nodes}
                edges={currentWorkflow.edges}
              />
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <BarChart4 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Aucun workflow à analyser</h3>
                  <p className="text-muted-foreground mb-4">
                    Créez et sauvegardez un workflow dans l'éditeur pour accéder aux analyses et optimisations.
                  </p>
                  <Button variant="outline">
                    Aller à l'éditeur
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MousePointer className="h-5 w-5" />
                    Interface drag & drop
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Créez des pipelines IA complexes simplement en glissant-déposant des blocs fonctionnels.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Nœuds IA pré-configurés</li>
                    <li>• Connecteurs visuels</li>
                    <li>• Validation en temps réel</li>
                    <li>• Templates prêts à l'emploi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Exécution & Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Surveillez l'exécution de vos workflows avec des métriques de performance détaillées.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Logs en temps réel</li>
                    <li>• Métriques de performance</li>
                    <li>• Gestion d'erreurs</li>
                    <li>• Retry automatique</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Optimisation automatique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Recevez des suggestions d'optimisation pour améliorer la vitesse et réduire les coûts.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Analyse des coûts</li>
                    <li>• Détection des goulots</li>
                    <li>• Suggestions IA</li>
                    <li>• Benchmarking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Connecteurs d'API
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Intégrez facilement différentes APIs et services IA dans vos workflows.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• OpenAI, Claude, Gemini</li>
                    <li>• DALL-E, Midjourney</li>
                    <li>• Services Azure, AWS</li>
                    <li>• APIs personnalisées</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Déclencheurs automatiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Automatisez vos workflows avec différents types de déclencheurs.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Webhooks</li>
                    <li>• Planification temporelle</li>
                    <li>• Événements système</li>
                    <li>• Déclenchement manuel</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5" />
                    Versioning & Partage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Gérez les versions de vos workflows et partagez-les avec votre équipe.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Contrôle de version</li>
                    <li>• Export/Import JSON</li>
                    <li>• Collaboration équipe</li>
                    <li>• Templates communautaires</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default OptimiseurWorkflowIA;
