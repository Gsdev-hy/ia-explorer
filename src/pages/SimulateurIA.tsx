import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Play, BarChart3, BookOpen, Zap, Database, Brain } from 'lucide-react';
import DatasetGenerator, { DataPoint } from '@/components/ml/DatasetGenerator';
import TrainingSimulator from '@/components/ml/TrainingSimulator';
import AlgorithmComparison from '@/components/ml/AlgorithmComparison';
import InteractiveLearningModule from '@/components/ml/InteractiveLearningModule';
import NeuralNetworkAnimation from '@/components/ml/NeuralNetworkAnimation';
import DataTrainingSimulator from '@/components/courses/supervised-learning/DataTrainingSimulator';

const SimulateurIA = () => {
  const [currentDataset, setCurrentDataset] = useState<DataPoint[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<'neural_network' | 'svm' | 'random_forest' | 'knn'>('neural_network');

  const handleDatasetGenerated = (dataset: DataPoint[]) => {
    setCurrentDataset(dataset);
  };

  const navigateToGenerator = () => {
    const generatorTab = document.querySelector('[value="generator"]') as HTMLElement;
    generatorTab?.click();
  };

  return (
    <>
      <Hero
        title="Simulateur d'Entraînement IA"
        subtitle="Simulez et visualisez l'entraînement de modèles d'IA en temps réel. Comprenez les algorithmes d'apprentissage de manière interactive et pédagogique."
      />
      
      <section className="section-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-lg mb-4">
            <Play className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Outil interactif maintenant disponible</span>
          </div>
        </div>

        {/* Présentation des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                Génération de Données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Créez des datasets synthétiques pour tester différents algorithmes d'apprentissage automatique.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Datasets de classification, régression et clustering</li>
                <li>• Contrôle du bruit et de la complexité</li>
                <li>• Export des données générées</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-500" />
                Visualisations en Temps Réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Observez l'évolution des métriques d'entraînement et la convergence des modèles en direct.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Graphiques de loss et accuracy en temps réel</li>
                <li>• Animation du processus d'apprentissage</li>
                <li>• Détection du surapprentissage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-500" />
                Apprentissage Interactif
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Apprenez les concepts fondamentaux du machine learning à travers des quiz et des explications.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Quiz interactifs avec explications</li>
                <li>• Comparaison d'algorithmes</li>
                <li>• Modules pédagogiques détaillés</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interface principale avec onglets */}
        <Tabs defaultValue="generator" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="generator" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Données</span>
            </TabsTrigger>
            <TabsTrigger value="training" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Entraînement</span>
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Comparaison</span>
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Apprentissage</span>
            </TabsTrigger>
            <TabsTrigger value="demo" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">Démo</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <DatasetGenerator onDatasetGenerated={handleDatasetGenerated} />
            
            {currentDataset.length > 0 && (
              <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium text-green-800 dark:text-green-200">
                      Dataset généré avec succès !
                    </span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    {currentDataset.length} points de données ont été créés. 
                    Vous pouvez maintenant passer à l'onglet "Entraînement" pour simuler l'apprentissage.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            {currentDataset.length > 0 ? (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium">Algorithme :</span>
                  <div className="flex gap-2">
                    {(['neural_network', 'svm', 'random_forest', 'knn'] as const).map(algo => (
                      <Button
                        key={algo}
                        variant={selectedAlgorithm === algo ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedAlgorithm(algo)}
                        className="capitalize"
                      >
                        {algo.replace('_', ' ')}
                      </Button>
                    ))}
                  </div>
                </div>
                <TrainingSimulator dataset={currentDataset} algorithm={selectedAlgorithm} />
              </>
            ) : (
              <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
                <CardContent className="pt-6 text-center">
                  <Database className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="font-medium text-amber-800 dark:text-amber-200 mb-2">
                    Aucun dataset disponible
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mb-4">
                    Générez d'abord un dataset dans l'onglet "Données" pour commencer l'entraînement.
                  </p>
                  <Button 
                    onClick={navigateToGenerator}
                    size="sm"
                  >
                    Générer un Dataset
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            {currentDataset.length > 0 ? (
              <AlgorithmComparison dataset={currentDataset} />
            ) : (
              <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
                <CardContent className="pt-6 text-center">
                  <BarChart3 className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="font-medium text-amber-800 dark:text-amber-200 mb-2">
                    Comparaison nécessite des données
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mb-4">
                    Générez un dataset pour comparer les performances des différents algorithmes.
                  </p>
                  <Button 
                    onClick={navigateToGenerator}
                    size="sm"
                  >
                    Générer un Dataset
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <InteractiveLearningModule />
          </TabsContent>

          <TabsContent value="demo" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Animation du Réseau de Neurones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <NeuralNetworkAnimation />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Simulateur d'Entraînement Avancé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <DataTrainingSimulator />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Section informative */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">🎯 Objectifs Pédagogiques</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Compréhension Pratique</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualisez concrètement comment les algorithmes d'IA apprennent à partir de données.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expérimentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Testez différents paramètres et observez leur impact sur les performances.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Apprentissage Actif</h4>
                  <p className="text-sm text-muted-foreground">
                    Consolidez vos connaissances avec des quiz et des explications détaillées.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default SimulateurIA;
