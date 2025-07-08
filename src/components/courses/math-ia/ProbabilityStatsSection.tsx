
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, Dice6, AlertCircle } from 'lucide-react';
import InteractiveExample from '../InteractiveExample';

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
      <InteractiveExample 
        title="Simulation : Loi des Grands Nombres"
        description="Découvrez comment les probabilités se comportent avec de nombreux essais"
        steps={[
          {
            title: "Faible nombre d'essais",
            description: "Avec peu de lancers, les résultats sont très aléatoires et éloignés de la théorie"
          },
          {
            title: "Nombre modéré d'essais",
            description: "On commence à voir une tendance vers les valeurs théoriques"
          },
          {
            title: "Grand nombre d'essais",
            description: "Les résultats convergent vers 16.67% pour chaque face du dé"
          }
        ]}
        finalMessage="Plus on fait d'essais, plus on se rapproche de la probabilité théorique ! C'est la loi des grands nombres."
      />

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
            <div className="bg-card p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">Exemple : Diagnostic Médical</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Question :</strong> "J'ai de la fièvre, quelle est la probabilité que j'aie la grippe ?"</li>
                <li><strong>Bayes dit :</strong> Ça dépend de combien de personnes ont la grippe actuellement !</li>
                <li><strong>Formule :</strong> P(Grippe|Fièvre) = P(Fièvre|Grippe) × P(Grippe) / P(Fièvre)</li>
              </ul>
            </div>
            
            <div className="bg-card p-4 rounded-lg border">
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
      <Card className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-950/20 dark:to-yellow-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-green-800 dark:text-green-200">
            🚀 Applications Cruciales en IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <h5 className="font-semibold">Classification Bayésienne</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Filtre anti-spam, analyse de sentiment, diagnostic médical
              </p>
              <p className="text-xs bg-red-100 dark:bg-red-900/30 p-2 rounded">
                Gmail utilise Bayes pour détecter 99.9% des spams
              </p>
            </div>
            
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold">Réseaux Bayésiens</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Modéliser des relations causales complexes avec incertitude
              </p>
              <p className="text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                Voiture autonome : probabilité d'accident selon météo, trafic, etc.
              </p>
            </div>
            
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                <h5 className="font-semibold">Apprentissage par Renforcement</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                L'agent apprend dans un environnement incertain
              </p>
              <p className="text-xs bg-green-100 dark:bg-green-900/30 p-2 rounded">
                AlphaGo évalue probabilités de victoire pour chaque coup
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
              <div className="bg-card p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-red-500">2%</div>
                <div className="text-sm">des emails sont des spams</div>
              </div>
              <div className="bg-card p-4 rounded-lg border text-center">
                <div className="text-2xl font-bold text-blue-500">80%</div>
                <div className="text-sm">des spams contiennent "GRATUIT"</div>
              </div>
              <div className="bg-card p-4 rounded-lg border text-center">
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
