
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, ArrowRight, RotateCw, Scale } from 'lucide-react';
import InteractiveExample from '../InteractiveExample';

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
              <div className="font-mono text-xs bg-card p-2 rounded border">
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
      <InteractiveExample 
        title="Opérations sur les Vecteurs"
        description="Explorez les opérations fondamentales de l'algèbre linéaire"
        steps={[
          {
            title: "Addition de vecteurs",
            description: "Additionner deux vecteurs : [a,b] + [c,d] = [a+c, b+d]"
          },
          {
            title: "Multiplication par un scalaire",
            description: "Multiplier un vecteur par un nombre : k × [a,b] = [k×a, k×b]"
          },
          {
            title: "Interprétation géométrique",
            description: "Voir les vecteurs comme des flèches dans l'espace"
          }
        ]}
        finalMessage="Ces opérations simples sont la base de tous les calculs en IA !"
      />

      {/* Applications en IA */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-green-800 dark:text-green-200">
            🚀 Applications Concrètes en IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <RotateCw className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold">Transformation d'images</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Rotation, redimensionnement, filtres - tout est fait avec des matrices
              </p>
              <p className="text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                Une matrice 3x3 peut faire tourner une image de 45°
              </p>
            </div>
            
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="h-5 w-5 text-green-600" />
                <h5 className="font-semibold">Réduction de dimensionnalité</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Passer de 1000 dimensions à 2 pour visualiser les données
              </p>
              <p className="text-xs bg-green-100 dark:bg-green-900/30 p-2 rounded">
                PCA utilise la décomposition de matrices
              </p>
            </div>
            
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-purple-600" />
                <h5 className="font-semibold">Réseaux de neurones</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Chaque couche est une multiplication matricielle
              </p>
              <p className="text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                Entrée × Poids + Biais = Sortie
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
            <div className="bg-card p-4 rounded-lg border">
              <h5 className="font-medium mb-2">Matrice des Notes</h5>
              <div className="font-mono text-sm">
                <div>      Math  Phys</div>
                <div>Alice  [16,   14]</div>
                <div>Bob    [12,   18]</div>
                <div>Clara  [15,   16]</div>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded-lg border">
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
