
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { TrendingUp, TrendingDown, Target, Zap } from 'lucide-react';
import InteractiveExample from '../InteractiveExample';
import DidYouKnow from '../DidYouKnow';

const CalculusSection: React.FC = () => {
  const [xValue, setXValue] = useState([2]);
  
  // Fonction exemple : f(x) = x² - 4x + 3
  const f = (x: number) => x * x - 4 * x + 3;
  const derivative = (x: number) => 2 * x - 4;
  
  const currentY = f(xValue[0]);
  const currentSlope = derivative(xValue[0]);

  const generatePoints = () => {
    const points = [];
    for (let x = -1; x <= 6; x += 0.1) {
      points.push({ x: x * 40 + 50, y: 200 - (f(x) + 5) * 15 });
    }
    return points;
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Le Calcul Différentiel : Le Moteur de l'Apprentissage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4">
            Si l'algèbre linéaire est le langage de l'IA, le calcul différentiel est son moteur d'apprentissage. 
            Il permet à l'IA de s'améliorer progressivement en "sentant" dans quelle direction aller.
          </p>
          
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🎯 Analogie du GPS</h4>
            <p className="text-green-700 dark:text-green-300">
              Imaginez que vous conduisez dans le brouillard. Vous ne voyez que quelques mètres devant vous, 
              mais votre GPS vous dit "tournez légèrement à droite" ou "continuez tout droit". 
              C'est exactement ce que fait la dérivée : elle indique la direction à suivre pour s'améliorer !
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Concepts fondamentaux */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              La Dérivée : La Direction du Changement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              La dérivée nous dit si une fonction monte, descend, et à quelle vitesse.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Dérivée positive</div>
                  <div className="text-xs text-muted-foreground">La fonction monte → on va dans la bonne direction</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                <TrendingDown className="h-5 w-5 text-red-600" />
                <div>
                  <div className="font-medium">Dérivée négative</div>
                  <div className="text-xs text-muted-foreground">La fonction descend → on doit changer de direction</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-950/30 rounded-lg">
                <Target className="h-5 w-5 text-gray-600" />
                <div>
                  <div className="font-medium">Dérivée nulle</div>
                  <div className="text-xs text-muted-foreground">Point critique → minimum, maximum ou plateau</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5" />
              La Descente de Gradient
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              L'algorithme que utilise l'IA pour apprendre en suivant la pente.
            </p>
            
            <div className="bg-muted/50 p-3 rounded-lg">
              <h5 className="font-medium mb-2">Algorithme simple :</h5>
              <ol className="space-y-1 text-sm">
                <li>1. Calculer l'erreur actuelle</li>
                <li>2. Calculer la dérivée (dans quelle direction aller)</li>
                <li>3. Faire un petit pas dans cette direction</li>
                <li>4. Répéter jusqu'à convergence</li>
              </ol>
            </div>
            
            <div className="text-xs text-muted-foreground bg-yellow-50 dark:bg-yellow-950/30 p-2 rounded">
              💡 C'est comme descendre une montagne dans le brouillard en suivant la pente !
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visualisation interactive */}
      <InteractiveExample title="Explorer une Fonction et sa Dérivée">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Fonction : f(x) = x² - 4x + 3</h4>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Position x = {xValue[0]}
              </label>
              <Slider
                value={xValue}
                onValueChange={setXValue}
                max={5}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-muted/50 rounded">
                <span>f({xValue[0]}) =</span>
                <span className="font-mono">{currentY.toFixed(2)}</span>
              </div>
              <div className="flex justify-between p-2 bg-muted/50 rounded">
                <span>f'({xValue[0]}) =</span>
                <span className="font-mono">{currentSlope.toFixed(2)}</span>
              </div>
              
              <div className="mt-3 p-3 rounded-lg text-center">
                {currentSlope > 0.1 ? (
                  <div className="text-green-600 dark:text-green-400">
                    <TrendingUp className="h-5 w-5 mx-auto mb-1" />
                    <div className="font-medium">Fonction croissante</div>
                    <div className="text-xs">La dérivée est positive</div>
                  </div>
                ) : currentSlope < -0.1 ? (
                  <div className="text-red-600 dark:text-red-400">
                    <TrendingDown className="h-5 w-5 mx-auto mb-1" />
                    <div className="font-medium">Fonction décroissante</div>
                    <div className="text-xs">La dérivée est négative</div>
                  </div>
                ) : (
                  <div className="text-yellow-600 dark:text-yellow-400">
                    <Target className="h-5 w-5 mx-auto mb-1" />
                    <div className="font-medium">Point critique</div>
                    <div className="text-xs">La dérivée est proche de zéro</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Visualisation</h4>
            
            <svg width="300" height="250" className="border rounded-lg bg-background dark:bg-card">
              {/* Grille */}
              <defs>
                <pattern id="calculus-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="300" height="250" fill="url(#calculus-grid)" />
              
              {/* Axes */}
              <line x1="50" y1="0" x2="50" y2="250" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <line x1="0" y1="200" x2="300" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              
              {/* Fonction */}
              <path
                d={`M ${generatePoints().map(p => `${p.x},${p.y}`).join(' L ')}`}
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Point actuel */}
              <circle
                cx={xValue[0] * 40 + 50}
                cy={200 - (currentY + 5) * 15}
                r="4"
                fill="#EF4444"
              />
              
              {/* Tangente */}
              <line
                x1={xValue[0] * 40 + 50 - 30}
                y1={200 - (currentY + 5) * 15 + currentSlope * 30 * 15}
                x2={xValue[0] * 40 + 50 + 30}
                y2={200 - (currentY + 5) * 15 - currentSlope * 30 * 15}
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              {/* Labels */}
              <text x="60" y="15" fill="hsl(var(--foreground))" fontSize="12">f(x) = x² - 4x + 3</text>
              <text x="10" y="190" fill="hsl(var(--foreground))" fontSize="10">0</text>
            </svg>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-blue-500"></div>
                <span>Fonction f(x)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-red-500 rounded-full"></div>
                <span>Point actuel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-green-500 border-dashed border"></div>
                <span>Tangente (pente = dérivée)</span>
              </div>
            </div>
          </div>
        </div>
      </InteractiveExample>

      {/* Le saviez-vous */}
      <DidYouKnow
        title="Pourquoi le calcul différentiel révolutionne l'IA ?"
        facts={[
          "Un réseau de neurones moderne peut avoir des milliards de paramètres à optimiser !",
          "La rétropropagation utilise la règle de dérivation en chaîne pour calculer tous les gradients",
          "Adam, l'optimiseur le plus populaire, combine gradient et momentum pour accélérer l'apprentissage",
          "Le calcul automatique des dérivées (autodiff) permet de différencier n'importe quel programme !"
        ]}
      />

      {/* Applications pratiques */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-purple-800 dark:text-purple-200">
            🚀 Applications Concrètes en IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border">
              <h5 className="font-semibold mb-2">Reconnaissance d'Images</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Un réseau voit une photo de chat et prédit "chien". La dérivée lui montre comment ajuster 
                ses millions de paramètres pour mieux reconnaître les chats.
              </p>
              <div className="text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                Gradient → Ajustement → Amélioration
              </div>
            </div>
            
            <div className="p-4 bg-background rounded-lg border">
              <h5 className="font-semibold mb-2">Traduction Automatique</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Le modèle traduit mal une phrase. La descente de gradient optimise les poids pour 
                produire de meilleures traductions.
              </p>
              <div className="text-xs bg-green-100 dark:bg-green-900/30 p-2 rounded">
                Erreur → Gradient → Correction
              </div>
            </div>
            
            <div className="p-4 bg-background rounded-lg border">
              <h5 className="font-semibold mb-2">Jeux Vidéo (IA)</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Une IA apprend à jouer aux échecs. Chaque défaite génère des gradients qui 
                améliorent sa stratégie.
              </p>
              <div className="text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                Partie → Analyse → Progression
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculusSection;
