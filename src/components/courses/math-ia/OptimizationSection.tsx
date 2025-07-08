
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
      <InteractiveExample title="Simulation : Descente de Gradient en Action">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Contrôles de l'Optimisation</h4>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Taux d'apprentissage : {learningRate[0]}
              </label>
              <Slider
                value={learningRate}
                onValueChange={setLearningRate}
                max={0.5}
                min={0.01}
                step={0.01}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Influence la taille des "pas" vers l'optimum
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button onClick={step} disabled={Math.abs(currentPosition - 2) < 0.001}>
                <Zap className="h-4 w-4 mr-2" />
                Faire un pas
              </Button>
              <Button onClick={reset} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Recommencer
              </Button>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg text-sm">
              <h5 className="font-medium mb-2">État actuel :</h5>
              <div className="space-y-1">
                <div>Position x = {currentPosition.toFixed(3)}</div>
                <div>Valeur f(x) = {f(currentPosition).toFixed(3)}</div>
                <div>Gradient = {derivative(currentPosition).toFixed(3)}</div>
                <div>Itération = {iteration}</div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground bg-blue-50 dark:bg-blue-950/30 p-2 rounded">
              💡 <strong>Objectif :</strong> Atteindre x = 2 où f(x) est minimale (f(2) = 1)
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Visualisation du Processus</h4>
            
            <svg width="300" height="250" className="border rounded-lg bg-background dark:bg-card">
              {/* Grille */}
              <defs>
                <pattern id="opt-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="300" height="250" fill="url(#opt-grid)" />
              
              {/* Fonction */}
              <path
                d={`M ${generateFunctionPoints().map(p => `${p.x},${p.y}`).join(' L ')}`}
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Historique des positions */}
              {history.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x * 40 + 50}
                  cy={200 - point.y * 30}
                  r="2"
                  fill="#10B981"
                  opacity={0.6}
                />
              ))}
              
              {/* Position actuelle */}
              <circle
                cx={currentPosition * 40 + 50}
                cy={200 - f(currentPosition) * 30}
                r="5"
                fill="#EF4444"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              
              {/* Minimum global */}
              <circle
                cx={2 * 40 + 50}
                cy={200 - 1 * 30}
                r="4"
                fill="#10B981"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              
              {/* Labels */}
              <text x="10" y="20" fill="hsl(var(--foreground))" fontSize="12">f(x) = (x-2)² + 1</text>
              <text x="10" y="235" fill="hsl(var(--foreground))" fontSize="10">x</text>
            </svg>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-blue-500"></div>
                <span>Fonction à optimiser</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-red-500 rounded-full"></div>
                <span>Position actuelle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-green-500 rounded-full"></div>
                <span>Optimum global (x=2, f=1)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
                <span>Historique des positions</span>
              </div>
            </div>
          </div>
        </div>
      </InteractiveExample>

      {/* Le saviez-vous */}
      <DidYouKnow
        title="Faits fascinants sur l'optimisation en IA"
        facts={[
          "GPT-3 a été optimisé avec 175 milliards de paramètres - imaginez la complexité !",
          "La descente de gradient stochastique traite les données par petits lots pour accélérer l'apprentissage",
          "Les GAN (réseaux antagonistes) font s'optimiser deux réseaux l'un contre l'autre",
          "L'optimisation bayésienne peut trouver de bons hyperparamètres avec très peu d'essais"
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
              
              <div className="bg-background p-3 rounded-lg border">
                <h6 className="font-medium text-red-600 dark:text-red-400">Explosion du Gradient</h6>
                <p className="text-sm text-muted-foreground">
                  Les gradients deviennent énormes, l'apprentissage diverge
                </p>
              </div>
              
              <div className="bg-background p-3 rounded-lg border">
                <h6 className="font-medium text-yellow-600 dark:text-yellow-400">Vanishing Gradient</h6>
                <p className="text-sm text-muted-foreground">
                  Les gradients deviennent minuscules, l'apprentissage s'arrête
                </p>
              </div>
              
              <div className="bg-background p-3 rounded-lg border">
                <h6 className="font-medium text-blue-600 dark:text-blue-400">Plateaux</h6>
                <p className="text-sm text-muted-foreground">
                  Zones plates où le gradient est presque nul
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold">✅ Solutions Modernes</h5>
              
              <div className="bg-background p-3 rounded-lg border">
                <h6 className="font-medium text-green-600 dark:text-green-400">Gradient Clipping</h6>
                <p className="text-sm text-muted-foreground">
                  Limiter la taille maximale des gradients
                </p>
              </div>
              
              <div className="bg-background p-3 rounded-lg border">
                <h6 className="font-medium text-green-600 dark:text-green-400">Normalisation</h6>
                <p className="text-sm text-muted-foreground">
                  Batch norm, layer norm pour stabiliser l'apprentissage
                </p>
              </div>
              
              <div className="bg-background p-3 rounded-lg border">
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
