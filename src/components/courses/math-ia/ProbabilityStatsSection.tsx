
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, Dice6, AlertCircle } from 'lucide-react';
import InteractiveExample from '../InteractiveExample';
import ZoomOn from '../ZoomOn';

const ProbabilityStatsSection: React.FC = () => {
  const [diceRolls, setDiceRolls] = useState(100);
  const [confidenceLevel, setConfidenceLevel] = useState([95]);
  
  // Simulation simple de lancers de dés
  const simulateDiceRolls = (n: number) => {
    const results = new Array(6).fill(0);
    for (let i = 0; i < n; i++) {
      const roll = Math.floor(Math.random() * 6);
      results[roll]++;
    }
    return results.map(count => (count / n) * 100);
  };

  const [diceResults, setDiceResults] = useState(simulateDiceRolls(100));

  const updateSimulation = () => {
    setDiceResults(simulateDiceRolls(diceRolls));
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-orange-500" />
            Probabilités et Statistiques : Naviguer dans l'Incertitude
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4">
            Le monde réel est plein d'incertitude. Les probabilités et statistiques donnent à l'IA 
            les outils pour prendre des décisions intelligentes même quand l'information est incomplète.
          </p>
          
          <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🎲 Analogie du Médecin</h4>
            <p className="text-orange-700 dark:text-orange-300">
              Un médecin ne peut jamais être 100% certain d'un diagnostic. Il utilise les probabilités : 
              "D'après vos symptômes, il y a 80% de chances que ce soit une grippe, 15% un rhume, 5% autre chose." 
              L'IA raisonne de la même façon !
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Concepts fondamentaux */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Les Probabilités : Quantifier l'Incertain</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Une probabilité est un nombre entre 0 et 1 qui mesure nos chances qu'un événement se produise.
            </p>
            
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <h5 className="font-medium mb-2">Exemples concrets :</h5>
                <ul className="space-y-2 text-sm">
                  <li><Badge variant="outline">Météo</Badge> 70% de chances de pluie demain</li>
                  <li><Badge variant="outline">Email</Badge> 95% de chances que ce soit un spam</li>
                  <li><Badge variant="outline">Photo</Badge> 88% de chances que ce soit un chat</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Règle d'or</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Toutes les probabilités d'un événement complet = 100%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Les Statistiques : Apprendre des Données</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Les statistiques transforment des données brutes en informations utilisables.
            </p>
            
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <h5 className="font-medium mb-2">Mesures importantes :</h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>Moyenne :</strong> La valeur "typique"</li>
                  <li><strong>Médiane :</strong> La valeur du "milieu"</li>
                  <li><strong>Écart-type :</strong> À quel point les données varient</li>
                  <li><strong>Corrélation :</strong> Comment deux variables sont liées</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simulation interactive */}
      <InteractiveExample title="Simulation : Loi des Grands Nombres">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Contrôles</h4>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Nombre de lancers de dé : {diceRolls}
              </label>
              <Slider
                value={[diceRolls]}
                onValueChange={(value) => setDiceRolls(value[0])}
                max={10000}
                min={10}
                step={10}
                className="w-full"
              />
            </div>

            <Button onClick={updateSimulation} className="w-full">
              <Dice6 className="h-4 w-4 mr-2" />
              Lancer les dés !
            </Button>

            <div className="bg-muted/50 p-3 rounded-lg text-sm">
              <h5 className="font-medium mb-2">Théorie vs Réalité</h5>
              <p>Théoriquement, chaque face devrait apparaître 16.67% du temps (1/6).</p>
              <p className="text-muted-foreground text-xs mt-1">
                Plus vous lancez de dés, plus vous vous rapprochez de cette valeur !
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Résultats de la Simulation</h4>
            
            <svg width="300" height="200" className="border rounded-lg bg-background dark:bg-card">
              {/* Barres du graphique */}
              {diceResults.map((percentage, index) => (
                <g key={index}>
                  <rect
                    x={20 + index * 45}
                    y={180 - percentage * 1.5}
                    width={35}
                    height={percentage * 1.5}
                    fill={`hsl(${index * 60}, 70%, 50%)`}
                    className="transition-all duration-500"
                  />
                  <text
                    x={37 + index * 45}
                    y={195}
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize="12"
                  >
                    {index + 1}
                  </text>
                  <text
                    x={37 + index * 45}
                    y={175 - percentage * 1.5}
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize="10"
                  >
                    {percentage.toFixed(1)}%
                  </text>
                </g>
              ))}
              
              {/* Ligne théorique */}
              <line
                x1="20"
                y1={180 - 16.67 * 1.5}
                x2="290"
                y2={180 - 16.67 * 1.5}
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              <text x="250" y={175 - 16.67 * 1.5} fill="#EF4444" fontSize="10">
                16.67% (théorique)
              </text>
            </svg>

            <div className="text-xs text-muted-foreground">
              <p><strong>Observation :</strong> Avec peu de lancers, les résultats sont aléatoires.</p>
              <p>Avec beaucoup de lancers, ils se rapprochent de 16.67% !</p>
            </div>
          </div>
        </div>
      </InteractiveExample>

      {/* Théorème de Bayes */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
            🧠 Le Théorème de Bayes : Le Cœur de l'IA Probabiliste
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Le théorème de Bayes permet de "retourner" les probabilités et est au cœur de nombreux algorithmes d'IA.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">Exemple : Diagnostic Médical</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Question :</strong> "J'ai de la fièvre, quelle est la probabilité que j'aie la grippe ?"</li>
                <li><strong>Bayes dit :</strong> Ça dépend de combien de personnes ont la grippe actuellement !</li>
                <li><strong>Formule :</strong> P(Grippe|Fièvre) = P(Fièvre|Grippe) × P(Grippe) / P(Fièvre)</li>
              </ul>
            </div>
            
            <div className="bg-background p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">En IA :</h5>
              <ul className="text-sm space-y-1">
                <li>🔍 <strong>Classification :</strong> "Cette email est-il un spam ?"</li>
                <li>🤖 <strong>Reconnaissance :</strong> "Cette image contient-elle un chat ?"</li>
                <li>🎯 <strong>Recommandation :</strong> "Cet utilisateur aimera-t-il ce film ?"</li>
                <li>📊 <strong>Prédiction :</strong> "Le cours de cette action va-t-il monter ?"</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications en IA */}
      <ZoomOn
        title="Applications Cruciales en IA"
        items={[
          {
            icon: <AlertCircle className="h-5 w-5" />,
            title: "Classification Bayésienne Naïve",
            description: "Filtre anti-spam, analyse de sentiment, diagnostic médical",
            example: "Gmail utilise Bayes pour détecter 99.9% des spams"
          },
          {
            icon: <TrendingUp className="h-5 w-5" />,
            title: "Réseaux Bayésiens",
            description: "Modéliser des relations causales complexes avec incertitude",
            example: "Voiture autonome : probabilité d'accident selon météo, trafic, etc."
          },
          {
            icon: <BarChart3 className="h-5 w-5" />,
            title: "Apprentissage par Renforcement",
            description: "L'agent apprend dans un environnement incertain",
            example: "AlphaGo évalue probabilités de victoire pour chaque coup"
          }
        ]}
      />

      {/* Exercice pratique */}
      <Card className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-950/20 dark:to-yellow-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-green-800 dark:text-green-200">
            🎯 Cas Pratique : Détecteur de Spam
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              Supposons que vous développez un filtre anti-spam. Voici vos données :
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-red-500">2%</div>
                <div className="text-sm">des emails sont des spams</div>
              </div>
              <div className="bg-background p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-blue-500">80%</div>
                <div className="text-sm">des spams contiennent "GRATUIT"</div>
              </div>
              <div className="bg-background p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-green-500">5%</div>
                <div className="text-sm">des emails normaux contiennent "GRATUIT"</div>
              </div>
            </div>
            
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
              <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Question : Un email contient "GRATUIT". Quelle est la probabilité que ce soit un spam ?
              </h5>
              <div className="text-sm text-yellow-700 dark:text-yellow-300">
                <p><strong>Réponse avec Bayes :</strong> Environ 25% !</p>
                <p className="text-xs mt-2">
                  Même si "GRATUIT" apparaît souvent dans les spams, comme les spams sont rares (2%), 
                  la plupart des emails avec "GRATUIT" sont quand même légitimes.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProbabilityStatsSection;
