
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Target, Zap, TrendingDown, RotateCcw } from 'lucide-react';
import InteractiveExample from '../InteractiveExample';
import DidYouKnow from '../DidYouKnow';

const OptimizationSection: React.FC = () => {
  const [learningRate, setLearningRate] = useState([0.1]);
  const [currentPosition, setCurrentPosition] = useState(4);
  const [iteration, setIteration] = useState(0);
  const [history, setHistory] = useState<Array<{x: number, y: number}>>([]);
  
  // Fonction à optimiser : f(x) = (x-2)² + 1
  const f = (x: number) => Math.pow(x - 2, 2) + 1;
  const derivative = (x: number) => 2 * (x - 2);
  
  const step = () => {
    const grad = derivative(currentPosition);
    const newPosition = currentPosition - learningRate[0] * grad;
    const newY = f(newPosition);
    
    setHistory(prev => [...prev, {x: currentPosition, y: f(currentPosition)}]);
    setCurrentPosition(newPosition);
    setIteration(prev => prev + 1);
  };

  const reset = () => {
    setCurrentPosition(4);
    setIteration(0);
    setHistory([]);
  };

  const generateFunctionPoints = () => {
    const points = [];
    for (let x = -1; x <= 5; x += 0.1) {
      points.push({
        x: x * 40 + 50,
        y: 200 - f(x) * 30
      });
    }
    return points;
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-500" />
            Optimisation : Trouver la Meilleure Solution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4">
            L'optimisation, c'est l'art de trouver la meilleure solution parmi toutes les possibilités. 
            En IA, on cherche constamment à minimiser les erreurs ou maximiser les performances.
          </p>
          
          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🏔️ Analogie de l'Alpiniste</h4>
            <p className="text-purple-700 dark:text-purple-300">
              Imaginez un alpiniste dans le brouillard qui cherche le point le plus bas d'une vallée. 
              Il ne voit que ses pieds, mais il sent la pente. En suivant toujours la descente la plus raide, 
              il finira par atteindre le fond ! C'est exactement la descente de gradient.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Types d'optimisation */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Optimisation Locale vs Globale
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                <h5 className="font-medium text-green-800 dark:text-green-200">✅ Minimum Global</h5>
                <p className="text-sm text-green-700 dark:text-green-300">
                  La meilleure solution possible dans tout l'espace de recherche
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg">
                <h5 className="font-medium text-yellow-800 dark:text-yellow-200">⚠️ Minimum Local</h5>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Une solution localement optimale, mais pas forcément la meilleure globalement
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                <h5 className="font-medium text-blue-800 dark:text-blue-200">🎯 Le Défi</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Comment éviter de se retrouver coincé dans un minimum local ?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Hyperparamètres d'Optimisation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <h5 className="font-medium mb-2">Taux d'Apprentissage (Learning Rate)</h5>
                <ul className="text-sm space-y-1">
                  <li>🐌 <strong>Trop petit :</strong> Apprentissage très lent</li>
                  <li>🏃 <strong>Trop grand :</strong> On rate le minimum, ça oscille</li>
                  <li>🎯 <strong>Juste bien :</strong> Convergence rapide et stable</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <h5 className="font-medium mb-2">Techniques Avancées</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Momentum :</strong> "Élan" pour traverser les petites bosses</li>
                  <li><strong>Learning Rate adaptatif :</strong> S'ajuste automatiquement</li>
                  <li><strong>Adam :</strong> Combine plusieurs techniques intelligemment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simulation interactive */}
      <InteractiveExample 
        title="Simulation : Descente de Gradient en Action"
        description="Observez comment l'algorithme trouve le minimum d'une fonction"
        steps={[
          {
            title: "Position initiale",
            description: "On démarre loin du minimum optimal (x = 4 au lieu de x = 2)"
          },
          {
            title: "Calcul du gradient",
            description: "La dérivée nous indique dans quelle direction descendre"
          },
          {
            title: "Pas d'optimisation",
            description: "On fait un pas proportionnel au learning rate dans la direction opposée au gradient"
          },
          {
            title: "Convergence",
            description: "On répète jusqu'à atteindre le minimum (gradient ≈ 0)"
          }
        ]}
        finalMessage="Avec le bon learning rate, l'algorithme converge vers le minimum global !"
      />

      {/* Le saviez-vous */}
      <DidYouKnow
        items={[
          {
            title: "GPT-3 et l'optimisation",
            content: "GPT-3 a été optimisé avec 175 milliards de paramètres - imaginez la complexité !"
          },
          {
            title: "Descente de gradient stochastique",
            content: "La descente de gradient stochastique traite les données par petits lots pour accélérer l'apprentissage"
          },
          {
            title: "Réseaux antagonistes (GAN)",
            content: "Les GAN font s'optimiser deux réseaux l'un contre l'autre"
          }
        ]}
      />

      {/* Problèmes courants */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-red-800 dark:text-red-200">
            ⚠️ Problèmes Courants et Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h5 className="font-semibold">🚨 Problèmes Fréquents</h5>
              
              <div className="bg-card p-3 rounded-lg border">
                <h6 className="font-medium text-red-600 dark:text-red-400">Explosion du Gradient</h6>
                <p className="text-sm text-muted-foreground">
                  Les gradients deviennent énormes, l'apprentissage diverge
                </p>
              </div>
              
              <div className="bg-card p-3 rounded-lg border">
                <h6 className="font-medium text-yellow-600 dark:text-yellow-400">Vanishing Gradient</h6>
                <p className="text-sm text-muted-foreground">
                  Les gradients deviennent minuscules, l'apprentissage s'arrête
                </p>
              </div>
              
              <div className="bg-card p-3 rounded-lg border">
                <h6 className="font-medium text-blue-600 dark:text-blue-400">Plateaux</h6>
                <p className="text-sm text-muted-foreground">
                  Zones plates où le gradient est presque nul
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold">✅ Solutions Modernes</h5>
              
              <div className="bg-card p-3 rounded-lg border">
                <h6 className="font-medium text-green-600 dark:text-green-400">Gradient Clipping</h6>
                <p className="text-sm text-muted-foreground">
                  Limiter la taille maximale des gradients
                </p>
              </div>
              
              <div className="bg-card p-3 rounded-lg border">
                <h6 className="font-medium text-green-600 dark:text-green-400">Normalisation</h6>
                <p className="text-sm text-muted-foreground">
                  Batch norm, layer norm pour stabiliser l'apprentissage
                </p>
              </div>
              
              <div className="bg-card p-3 rounded-lg border">
                <h6 className="font-medium text-green-600 dark:text-green-400">Architectures Modernes</h6>
                <p className="text-sm text-muted-foreground">
                  ResNet, Transformers avec connexions résiduelles
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OptimizationSection;
