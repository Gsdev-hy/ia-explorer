
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Brain, Lightbulb, Target } from 'lucide-react';
import AnalogiePedagogique from '../AnalogiePedagogique';
import DidYouKnow from '../DidYouKnow';

const MathIntroductionSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction principale */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Pourquoi les Mathématiques sont Essentielles en IA ?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            L'intelligence artificielle peut sembler magique, mais elle repose entièrement sur des 
            fondements mathématiques solides. Chaque algorithme, chaque prédiction, chaque décision 
            d'une IA découle de calculs mathématiques précis.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Sans les Maths</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                L'IA serait comme une recette de cuisine sans ingrédients : impossible à réaliser !
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Avec les Maths</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                L'IA devient un outil puissant capable d'apprendre, de prédire et de résoudre des problèmes complexes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analogie pédagogique */}
      <AnalogiePedagogique
        title="L'IA comme un Chef Cuisinier Expert"
        description="Imaginez l'IA comme un chef cuisinier qui doit préparer des plats parfaits pour des milliers de clients aux goûts différents..."
        elements={[
          {
            aspect: "Les Ingrédients",
            explanation: "Ce sont les données d'entrée",
            mathConcept: "Représentées par des vecteurs et matrices"
          },
          {
            aspect: "La Recette",
            explanation: "C'est l'algorithme d'apprentissage",
            mathConcept: "Basée sur des fonctions mathématiques"
          },
          {
            aspect: "L'Ajustement du Goût",
            explanation: "C'est l'optimisation des paramètres",
            mathConcept: "Utilise le calcul différentiel et la dérivée"
          },
          {
            aspect: "La Satisfaction Client",
            explanation: "C'est la fonction de coût à minimiser",
            mathConcept: "Mesurée par des métriques statistiques"
          }
        ]}
      />

      {/* Les 4 piliers mathématiques */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Algèbre Linéaire</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3">
              Le langage pour manipuler les données
            </p>
            <div className="space-y-1">
              <Badge variant="secondary" className="text-xs">Vecteurs</Badge>
              <Badge variant="secondary" className="text-xs">Matrices</Badge>
              <Badge variant="secondary" className="text-xs">Transformations</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Calcul Différentiel</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3">
              Comment l'IA apprend et s'améliore
            </p>
            <div className="space-y-1">
              <Badge variant="secondary" className="text-xs">Dérivées</Badge>
              <Badge variant="secondary" className="text-xs">Gradients</Badge>
              <Badge variant="secondary" className="text-xs">Optimisation</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <Lightbulb className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Probabilités</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3">
              Gérer l'incertitude et faire des prédictions
            </p>
            <div className="space-y-1">
              <Badge variant="secondary" className="text-xs">Distributions</Badge>
              <Badge variant="secondary" className="text-xs">Bayes</Badge>
              <Badge variant="secondary" className="text-xs">Inférence</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Statistiques</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3">
              Analyser et comprendre les données
            </p>
            <div className="space-y-1">
              <Badge variant="secondary" className="text-xs">Moyennes</Badge>
              <Badge variant="secondary" className="text-xs">Variance</Badge>
              <Badge variant="secondary" className="text-xs">Corrélations</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Le saviez-vous */}
      <DidYouKnow
        items={[
          {
            title: "Histoire des mathématiques",
            content: "L'algèbre linéaire date du 3ème siècle avec les mathématiciens chinois"
          },
          {
            title: "Calcul différentiel",
            content: "Le calcul différentiel a été développé par Newton et Leibniz au 17ème siècle"
          },
          {
            title: "Probabilités",
            content: "Les probabilités sont nées avec les jeux de hasard au 16ème siècle"
          }
        ]}
      />

      {/* Approche pédagogique */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Notre Approche Pédagogique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h4 className="font-semibold mb-2">Intuition d'abord</h4>
              <p className="text-sm text-muted-foreground">
                Comprendre le "pourquoi" avant le "comment"
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h4 className="font-semibold mb-2">Visualisation</h4>
              <p className="text-sm text-muted-foreground">
                Des graphiques et animations pour "voir" les maths
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h4 className="font-semibold mb-2">Applications concrètes</h4>
              <p className="text-sm text-muted-foreground">
                Voir comment ces maths sont utilisées en pratique
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MathIntroductionSection;
