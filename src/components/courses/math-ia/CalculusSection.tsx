
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
      <InteractiveExample 
        title="Explorer une Fonction et sa Dérivée"
        description="Manipulez les paramètres pour voir comment la dérivée indique la direction du changement"
        steps={[
          {
            title: "Observer la fonction",
            description: "f(x) = x² - 4x + 3 est une parabole avec un minimum en x = 2"
          },
          {
            title: "Calculer la dérivée",
            description: "f'(x) = 2x - 4 nous donne la pente en chaque point"
          },
          {
            title: "Identifier les points critiques",
            description: "Quand f'(x) = 0, on a x = 2 (le minimum de la fonction)"
          }
        ]}
        finalMessage="La dérivée est l'outil fondamental qui permet à l'IA d'apprendre en indiquant la direction d'amélioration !"
      />

      {/* Le saviez-vous */}
      <DidYouKnow
        items={[
          {
            title: "Réseaux de neurones modernes",
            content: "Un réseau de neurones moderne peut avoir des milliards de paramètres à optimiser !"
          },
          {
            title: "Rétropropagation",
            content: "La rétropropagation utilise la règle de dérivation en chaîne pour calculer tous les gradients"
          },
          {
            title: "Optimiseur Adam",
            content: "Adam, l'optimiseur le plus populaire, combine gradient et momentum pour accélérer l'apprentissage"
          }
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
            <div className="p-4 bg-card rounded-lg border">
              <h5 className="font-semibold mb-2">Reconnaissance d'Images</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Un réseau voit une photo de chat et prédit "chien". La dérivée lui montre comment ajuster 
                ses millions de paramètres pour mieux reconnaître les chats.
              </p>
              <div className="text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                Gradient → Ajustement → Amélioration
              </div>
            </div>
            
            <div className="p-4 bg-card rounded-lg border">
              <h5 className="font-semibold mb-2">Traduction Automatique</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Le modèle traduit mal une phrase. La descente de gradient optimise les poids pour 
                produire de meilleures traductions.
              </p>
              <div className="text-xs bg-green-100 dark:bg-green-900/30 p-2 rounded">
                Erreur → Gradient → Correction
              </div>
            </div>
            
            <div className="p-4 bg-card rounded-lg border">
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
