
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RotateCcw, Brain, TrendingUp, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataPoint } from './DatasetGenerator';

interface TrainingMetrics {
  epoch: number;
  trainLoss: number;
  valLoss: number;
  trainAccuracy: number;
  valAccuracy: number;
  learningRate: number;
}

interface TrainingSimulatorProps {
  dataset: DataPoint[];
  algorithm: 'neural_network' | 'svm' | 'random_forest' | 'knn';
}

const TrainingSimulator: React.FC<TrainingSimulatorProps> = ({ dataset, algorithm }) => {
  const [isTraining, setIsTraining] = useState(false);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [maxEpochs, setMaxEpochs] = useState<number[]>([100]);
  const [learningRate, setLearningRate] = useState<number[]>([1]);
  const [batchSize, setBatchSize] = useState<number[]>([32]);
  const [metrics, setMetrics] = useState<TrainingMetrics[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState<TrainingMetrics | null>(null);

  // Simulation des métriques d'entraînement
  const simulateTrainingStep = useCallback((epoch: number): TrainingMetrics => {
    const progress = epoch / maxEpochs[0];
    const lr = learningRate[0] * 0.01;
    
    // Simulation réaliste de la convergence
    const baseTrainLoss = Math.exp(-progress * 3) * 2;
    const baseValLoss = Math.exp(-progress * 2.5) * 2.2;
    
    // Ajout de bruit réaliste
    const noise = () => (Math.random() - 0.5) * 0.1;
    
    const trainLoss = Math.max(0.05, baseTrainLoss + noise());
    const valLoss = Math.max(0.08, baseValLoss + noise() + (progress > 0.7 ? progress * 0.1 : 0));
    
    // Calcul de l'accuracy basé sur la loss
    const trainAccuracy = Math.min(98, (1 - trainLoss / 2) * 100);
    const valAccuracy = Math.min(95, (1 - valLoss / 2) * 100);
    
    return {
      epoch,
      trainLoss: parseFloat(trainLoss.toFixed(4)),
      valLoss: parseFloat(valLoss.toFixed(4)),
      trainAccuracy: parseFloat(trainAccuracy.toFixed(2)),
      valAccuracy: parseFloat(valAccuracy.toFixed(2)),
      learningRate: lr
    };
  }, [maxEpochs, learningRate]);

  // Boucle d'entraînement
  useEffect(() => {
    if (!isTraining || currentEpoch >= maxEpochs[0]) {
      if (currentEpoch >= maxEpochs[0]) {
        setIsTraining(false);
      }
      return;
    }

    const interval = setInterval(() => {
      const newMetrics = simulateTrainingStep(currentEpoch + 1);
      
      setMetrics(prev => [...prev, newMetrics]);
      setCurrentMetrics(newMetrics);
      setCurrentEpoch(prev => prev + 1);
      
      // Simulation de la vitesse d'entraînement
      const speed = Math.max(50, 200 - batchSize[0] * 2);
      
      if (currentEpoch + 1 >= maxEpochs[0]) {
        setIsTraining(false);
      }
    }, 100); // Animation rapide pour la démo

    return () => clearInterval(interval);
  }, [isTraining, currentEpoch, maxEpochs, batchSize, simulateTrainingStep]);

  const handleStartPause = () => {
    setIsTraining(!isTraining);
  };

  const handleReset = () => {
    setIsTraining(false);
    setCurrentEpoch(0);
    setMetrics([]);
    setCurrentMetrics(null);
  };

  const getAlgorithmInfo = () => {
    switch (algorithm) {
      case 'neural_network':
        return { name: 'Réseau de Neurones', icon: <Brain className="h-4 w-4" />, color: 'bg-purple-500' };
      case 'svm':
        return { name: 'SVM', icon: <Target className="h-4 w-4" />, color: 'bg-blue-500' };
      case 'random_forest':
        return { name: 'Random Forest', icon: <TrendingUp className="h-4 w-4" />, color: 'bg-green-500' };
      case 'knn':
        return { name: 'k-NN', icon: <Target className="h-4 w-4" />, color: 'bg-orange-500' };
      default:
        return { name: 'Algorithme', icon: <Brain className="h-4 w-4" />, color: 'bg-gray-500' };
    }
  };

  const algoInfo = getAlgorithmInfo();

  return (
    <div className="space-y-6">
      {/* Panneau de contrôle */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {algoInfo.icon}
            Simulateur d'Entraînement - {algoInfo.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Hyperparamètres */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Nombre d'époques</label>
                <Badge variant="secondary">{maxEpochs[0]}</Badge>
              </div>
              <Slider
                value={maxEpochs}
                onValueChange={setMaxEpochs}
                min={50}
                max={500}
                step={50}
                disabled={isTraining}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Taux d'apprentissage</label>
                <Badge variant="secondary">{(learningRate[0] * 0.01).toFixed(3)}</Badge>
              </div>
              <Slider
                value={learningRate}
                onValueChange={setLearningRate}
                min={1}
                max={100}
                step={1}
                disabled={isTraining}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Taille de batch</label>
                <Badge variant="secondary">{batchSize[0]}</Badge>
              </div>
              <Slider
                value={batchSize}
                onValueChange={setBatchSize}
                min={16}
                max={128}
                step={16}
                disabled={isTraining}
              />
            </div>
          </div>

          {/* Contrôles d'entraînement */}
          <div className="flex items-center gap-4">
            <Button onClick={handleStartPause} className="flex items-center gap-2">
              {isTraining ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isTraining ? 'Pause' : 'Démarrer'}
            </Button>
            
            <Button variant="outline" onClick={handleReset} disabled={isTraining}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Progression</span>
                <span className="text-sm text-muted-foreground">
                  {currentEpoch} / {maxEpochs[0]}
                </span>
              </div>
              <Progress value={(currentEpoch / maxEpochs[0]) * 100} />
            </div>
          </div>

          {/* Métriques actuelles */}
          {currentMetrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-sm font-medium">Loss (Train)</div>
                <div className="text-2xl font-bold text-blue-600">
                  {currentMetrics.trainLoss.toFixed(4)}
                </div>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-sm font-medium">Loss (Val)</div>
                <div className="text-2xl font-bold text-orange-600">
                  {currentMetrics.valLoss.toFixed(4)}
                </div>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-sm font-medium">Accuracy (Train)</div>
                <div className="text-2xl font-bold text-green-600">
                  {currentMetrics.trainAccuracy.toFixed(1)}%
                </div>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-sm font-medium">Accuracy (Val)</div>
                <div className="text-2xl font-bold text-purple-600">
                  {currentMetrics.valAccuracy.toFixed(1)}%
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Graphiques en temps réel */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Graphique de Loss */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution de la Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="trainLoss" 
                      stroke="#3b82f6" 
                      name="Training Loss"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="valLoss" 
                      stroke="#f97316" 
                      name="Validation Loss"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Graphique d'Accuracy */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution de l'Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="trainAccuracy" 
                      stroke="#22c55e" 
                      name="Training Accuracy"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="valAccuracy" 
                      stroke="#a855f7" 
                      name="Validation Accuracy"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Insights pédagogiques */}
      <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
        <CardHeader>
          <CardTitle className="text-green-800 dark:text-green-200">
            💡 Observations pédagogiques
          </CardTitle>
        </CardHeader>
        <CardContent className="text-green-700 dark:text-green-300">
          <div className="space-y-2 text-sm">
            {currentEpoch === 0 && (
              <p>• Cliquez sur "Démarrer" pour commencer la simulation d'entraînement</p>
            )}
            {currentEpoch > 0 && currentEpoch < 20 && (
              <p>• Phase d'apprentissage initial : les métriques évoluent rapidement</p>
            )}
            {currentEpoch >= 20 && currentEpoch < 50 && (
              <p>• Phase de stabilisation : l'algorithme affine sa compréhension des données</p>
            )}
            {currentEpoch >= 50 && (
              <p>• Phase de convergence : les améliorations deviennent plus subtiles</p>
            )}
            {currentMetrics && currentMetrics.valLoss > currentMetrics.trainLoss * 1.2 && (
              <p>• ⚠️ Possible surapprentissage détecté : la loss de validation diverge</p>
            )}
            {currentMetrics && currentMetrics.valAccuracy >= 90 && (
              <p>• ✅ Excellentes performances ! Le modèle généralise bien</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingSimulator;
