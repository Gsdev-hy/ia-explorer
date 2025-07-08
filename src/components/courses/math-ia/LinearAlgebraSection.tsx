
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, ArrowRight, RotateCw, Scale } from 'lucide-react';
import InteractiveExample from '../InteractiveExample';
import ZoomOn from '../ZoomOn';

const LinearAlgebraSection: React.FC = () => {
  const [vectorA, setVectorA] = useState([3, 2]);
  const [vectorB, setVectorB] = useState([1, 4]);
  const [scalarValue, setScalarValue] = useState([2]);

  const vectorSum = [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
  const scalarProduct = [vectorA[0] * scalarValue[0], vectorA[1] * scalarValue[0]];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            L'Algèbre Linéaire : Le Langage des Données
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4">
            L'algèbre linéaire est comme le système nerveux de l'IA. Elle permet de manipuler 
            et transformer les données de manière efficace et élégante.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Analogie Simple</h4>
            <p className="text-blue-700 dark:text-blue-300">
              Imaginez une image de 1000x1000 pixels. C'est 1 million de nombres ! 
              L'algèbre linéaire nous donne les outils pour manipuler ces énormes quantités 
              de données comme si c'était un seul objet mathématique.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Concepts fondamentaux */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Les Vecteurs : Des Listes Ordonnées</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Un vecteur, c'est simplement une liste de nombres qui représente quelque chose.
            </p>
            
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <h5 className="font-medium mb-2">Exemples concrets :</h5>
                <ul className="space-y-2 text-sm">
                  <li><Badge variant="outline">Position GPS</Badge> [48.8566, 2.3522] (Paris)</li>
                  <li><Badge variant="outline">Couleur RVB</Badge> [255, 128, 0] (Orange)</li>
                  <li><Badge variant="outline">Note d'étudiant</Badge> [16, 14, 18, 12] (Maths, Physique, Anglais, Histoire)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Les Matrices : Des Tableaux de Nombres</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Une matrice organise plusieurs vecteurs ensemble, comme un tableau Excel.
            </p>
            
            <div className="bg-muted/50 p-3 rounded-lg">
              <h5 className="font-medium mb-2">Une matrice d'image :</h5>
              <div className="font-mono text-xs bg-background p-2 rounded border">
                <div>255  128  64</div>
                <div>192  255  128</div>
                <div>64   192  255</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Chaque nombre représente l'intensité d'un pixel
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visualisation interactive */}
      <InteractiveExample title="Opérations sur les Vecteurs">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Contrôles Interactifs</h4>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Vecteur A : [{vectorA[0]}, {vectorA[1]}]
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-muted-foreground">X</label>
                    <Slider
                      value={[vectorA[0]]}
                      onValueChange={(value) => setVectorA([value[0], vectorA[1]])}
                      max={5}
                      min={-5}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Y</label>
                    <Slider
                      value={[vectorA[1]]}
                      onValueChange={(value) => setVectorA([vectorA[0], value[0]])}
                      max={5}
                      min={-5}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Vecteur B : [{vectorB[0]}, {vectorB[1]}]
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-muted-foreground">X</label>
                    <Slider
                      value={[vectorB[0]]}
                      onValueChange={(value) => setVectorB([value[0], vectorB[1]])}
                      max={5}
                      min={-5}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Y</label>
                    <Slider
                      value={[vectorB[1]]}
                      onValueChange={(value) => setVectorB([vectorB[0], value[0]])}
                      max={5}
                      min={-5}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Scalaire : {scalarValue[0]}
                </label>
                <Slider
                  value={scalarValue}
                  onValueChange={setScalarValue}
                  max={4}
                  min={0.5}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Visualisation</h4>
            
            <svg width="300" height="200" className="border rounded-lg bg-background dark:bg-card">
              {/* Grille */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="300" height="200" fill="url(#grid)" />
              
              {/* Axes */}
              <line x1="150" y1="0" x2="150" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <line x1="0" y1="100" x2="300" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              
              {/* Vecteur A */}
              <line 
                x1="150" y1="100" 
                x2={150 + vectorA[0] * 20} 
                y2={100 - vectorA[1] * 20} 
                stroke="#3B82F6" 
                strokeWidth="2" 
                markerEnd="url(#arrowhead-blue)"
              />
              
              {/* Vecteur B */}
              <line 
                x1="150" y1="100" 
                x2={150 + vectorB[0] * 20} 
                y2={100 - vectorB[1] * 20} 
                stroke="#EF4444" 
                strokeWidth="2" 
                markerEnd="url(#arrowhead-red)"
              />
              
              {/* Somme A + B */}
              <line 
                x1="150" y1="100" 
                x2={150 + vectorSum[0] * 20} 
                y2={100 - vectorSum[1] * 20} 
                stroke="#10B981" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead-green)"
              />
              
              <defs>
                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                </marker>
                <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                </marker>
                <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                </marker>
              </defs>
            </svg>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-blue-500"></div>
                <span>Vecteur A: [{vectorA[0]}, {vectorA[1]}]</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-red-500"></div>
                <span>Vecteur B: [{vectorB[0]}, {vectorB[1]}]</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-green-500 border-dashed border"></div>
                <span>A + B: [{vectorSum[0]}, {vectorSum[1]}]</span>
              </div>
            </div>
          </div>
        </div>
      </InteractiveExample>

      {/* Applications en IA */}
      <ZoomOn
        title="Applications Concrètes en IA"
        items={[
          {
            icon: <RotateCw className="h-5 w-5" />,
            title: "Transformation d'images",
            description: "Rotation, redimensionnement, filtres - tout est fait avec des matrices",
            example: "Une matrice 3x3 peut faire tourner une image de 45°"
          },
          {
            icon: <Scale className="h-5 w-5" />,
            title: "Réduction de dimensionnalité",
            description: "Passer de 1000 dimensions à 2 pour visualiser les données",
            example: "PCA (Analyse en Composantes Principales) utilise la décomposition de matrices"
          },
          {
            icon: <ArrowRight className="h-5 w-5" />,
            title: "Réseaux de neurones",
            description: "Chaque couche d'un réseau de neurones est une multiplication matricielle",
            example: "Un réseau simple : Entrée × Poids + Biais = Sortie"
          }
        ]}
      />

      {/* Exercice pratique */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-green-800 dark:text-green-200">
            💪 Défi Pratique : Comprendre les Multiplications Matricielles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Supposons que vous ayez une base de données de 3 étudiants avec leurs notes en 2 matières :
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded-lg border">
              <h5 className="font-medium mb-2">Matrice des Notes</h5>
              <div className="font-mono text-sm">
                <div>      Math  Phys</div>
                <div>Alice  [16,   14]</div>
                <div>Bob    [12,   18]</div>
                <div>Clara  [15,   16]</div>
              </div>
            </div>
            
            <div className="bg-background p-4 rounded-lg border">
              <h5 className="font-medium mb-2">Coefficients</h5>
              <div className="font-mono text-sm">
                <div>Math: coefficient 2</div>
                <div>Phys: coefficient 1</div>
                <div className="mt-2 text-muted-foreground">
                  Matrice × Vecteur = Moyennes pondérées
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">
              Résultat : Alice(15.3), Bob(14), Clara(15.3) - Tout ça en une seule opération matricielle !
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinearAlgebraSection;
