import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Play, BarChart3, BookOpen, Zap, Database, Brain, Settings } from 'lucide-react';
import DatasetGenerator, { DataPoint } from '@/components/ml/DatasetGenerator';
import TrainingSimulator from '@/components/ml/TrainingSimulator';
import AlgorithmComparison from '@/components/ml/AlgorithmComparison';
import InteractiveLearningModule from '@/components/ml/InteractiveLearningModule';
import NeuralNetworkAnimation from '@/components/ml/NeuralNetworkAnimation';
import DataTrainingSimulator from '@/components/courses/supervised-learning/DataTrainingSimulator';
import SimulatorHeader from '@/components/ml/simulator/SimulatorHeader';
import PresetSelector from '@/components/ml/simulator/PresetSelector';
import { TrainingPreset } from '@/components/ml/simulator/TrainingPresets';

const SimulateurIA = () => {
  const [currentDataset, setCurrentDataset] = useState<DataPoint[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<'neural_network' | 'svm' | 'random_forest' | 'knn'>('neural_network');
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [useCustomConfig, setUseCustomConfig] = useState(false);

  const handleDatasetGenerated = (dataset: DataPoint[]) => {
    setCurrentDataset(dataset);
  };

  const handlePresetSelect = (preset: TrainingPreset) => {
    setSelectedPreset(preset.id);
    setSelectedAlgorithm(preset.algorithm);
    
    // Générer le dataset selon le preset
    const syntheticDataset: DataPoint[] = [];
    for (let i = 0; i < preset.dataset.size; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const label = Math.floor(Math.random() * (preset.dataset.numClasses || 2));
      syntheticDataset.push({ x, y, label });
    }
    
    setCurrentDataset(syntheticDataset);
    setUseCustomConfig(false);
  };

  const handleCustomConfig = () => {
    setSelectedPreset(null);
    setUseCustomConfig(true);
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
        {/* En-tête avec créateur et lien retour */}
        <SimulatorHeader />

        {/* Présentation des fonctionnalités enrichies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-500" />
                Presets Configurés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Configurations prêtes à l'emploi pour différents scénarios d'apprentissage.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Configurations pour débutants et experts</li>
                <li>• Démonstrations de surapprentissage</li>
                <li>• Paramètres optimisés par cas d'usage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-500" />
                Génération Avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Créez des datasets synthétiques complexes avec contrôle précis du bruit et de la distribution.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Datasets multi-classes et multi-dimensionnels</li>
                <li>• Contrôle granulaire du bruit</li>
                <li>• Export et sauvegarde des configurations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                Métriques Enrichies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Observez des métriques détaillées avec alertes intelligentes et recommandations.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Détection automatique de surapprentissage</li>
                <li>• Estimation du temps de convergence</li>
                <li>• Alertes et conseils en temps réel</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-orange-500" />
                Apprentissage Guidé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Modules interactifs avec explications contextuelles et recommandations personnalisées.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Explications adaptées au niveau</li>
                <li>• Recommandations d'optimisation</li>
                <li>• Historique et comparaisons</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interface principale avec onglets enrichis */}
        <Tabs defaultValue="presets" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="presets" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Presets</span>
            </TabsTrigger>
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

          <TabsContent value="presets" className="space-y-6">
            <PresetSelector
              selectedPreset={selectedPreset}
              onPresetSelect={handlePresetSelect}
              onCustomConfig={handleCustomConfig}
            />
          </TabsContent>

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
            {currentDataset.length > 0 || selectedPreset ? (
              <>
                {selectedPreset && (
                  <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                        <span className="font-medium text-blue-800 dark:text-blue-200">
                          Preset actif: {selectedPreset}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
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
                    Configuration requise
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mb-4">
                    Sélectionnez un preset ou générez un dataset personnalisé pour commencer l'entraînement.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button onClick={() => document.querySelector('[value="presets"]')?.click()} size="sm">
                      Choisir un Preset
                    </Button>
                    <Button onClick={navigateToGenerator} size="sm" variant="outline">
                      Créer un Dataset
                    </Button>
                  </div>
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

        {/* Section informative mise à jour */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">🎯 Fonctionnalités Avancées</h3>
              <div className="grid md:grid-cols-4 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Presets Intelligents</h4>
                  <p className="text-sm text-muted-foreground">
                    Configurations prêtes pour différents niveaux et objectifs pédagogiques.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Détection Automatique</h4>
                  <p className="text-sm text-muted-foreground">
                    Alertes en temps réel pour le surapprentissage et les problèmes de convergence.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Export & Sauvegarde</h4>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez vos configurations et résultats pour analyse ultérieure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recommandations</h4>
                  <p className="text-sm text-muted-foreground">
                    Conseils personnalisés pour optimiser l'entraînement et les performances.
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
