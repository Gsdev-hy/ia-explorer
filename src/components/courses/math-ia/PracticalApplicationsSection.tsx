
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Camera, MessageSquare, Car, TrendingUp, Stethoscope } from 'lucide-react';

const PracticalApplicationsSection: React.FC = () => {
  const applications = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Vision par Ordinateur",
      description: "Comment l'IA 'voit' et comprend les images",
      mathConcepts: ["Convolution (algèbre)", "Backpropagation (calcul)", "Softmax (probabilités)"],
      example: "Un réseau CNN utilise des convolutions (multiplication matricielle) pour détecter des contours, puis optimise ses filtres par descente de gradient.",
      realWorld: "Reconnaissance faciale, diagnostic médical par imagerie, voitures autonomes"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Traitement du Langage",
      description: "Comment l'IA comprend et génère du texte",
      mathConcepts: ["Embeddings (vecteurs)", "Attention (algèbre)", "Transformers (matrices)"],
      example: "ChatGPT encode chaque mot comme un vecteur de 4096 dimensions, puis utilise l'attention pour comprendre les relations entre les mots.",
      realWorld: "Traduction automatique, chatbots, résumé de texte, génération d'articles"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Finance Algorithmique",
      description: "Prédiction et optimisation financière",
      mathConcepts: ["Séries temporelles", "Optimisation de portefeuille", "Monte Carlo"],
      example: "Un algorithme utilise des statistiques pour détecter des patterns dans les cours, puis optimise le portefeuille selon le ratio de Sharpe.",
      realWorld: "Trading haute fréquence, gestion de risque, détection de fraude"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Véhicules Autonomes",
      description: "Navigation intelligente et sécurisée",
      mathConcepts: ["Kalman Filter", "SLAM", "Reinforcement Learning"],
      example: "Le filtre de Kalman combine les données GPS (probabilités) avec les capteurs (matrices de covariance) pour localiser précisément le véhicule.",
      realWorld: "Tesla Autopilot, Waymo, livraison autonome de colis"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "IA Médicale",
      description: "Diagnostic et traitement assistés",
      mathConcepts: ["Classification bayésienne", "Deep Learning", "Analyse d'images"],
      example: "Un réseau analyse des millions de pixels d'une radio pulmonaire, calcule les probabilités de différentes pathologies selon Bayes.",
      realWorld: "Détection du cancer, personnalisation des traitements, découverte de médicaments"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Recommandation",
      description: "Suggestions personnalisées intelligentes",
      mathConcepts: ["Factorisation matricielle", "Clustering", "Collaborative filtering"],
      example: "Netflix décompose la matrice utilisateurs×films pour trouver des patterns cachés, puis utilise la similarité cosinus pour recommander.",
      realWorld: "Netflix, Spotify, Amazon, YouTube, réseaux sociaux"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-green-500" />
            Voir les Mathématiques en Action
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4">
            Maintenant que nous avons exploré les concepts fondamentaux, voyons comment ces mathématiques 
            se concrétisent dans des applications réelles d'IA qui transforment notre monde.
          </p>
          
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🔗 Tout est Connecté</h4>
            <p className="text-green-700 dark:text-green-300">
              Chaque application IA combine tous les concepts mathématiques que nous avons vus. 
              L'algèbre linéaire structure les données, le calcul optimise les paramètres, 
              les probabilités gèrent l'incertitude, et l'optimisation trouve les meilleures solutions !
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Applications détaillées */}
      <div className="space-y-6">
        {applications.map((app, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {app.icon}
                </div>
                <div>
                  <div className="text-xl">{app.title}</div>
                  <div className="text-sm text-muted-foreground font-normal">{app.description}</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-2">🧮 Concepts Mathématiques Clés</h5>
                    <div className="flex flex-wrap gap-2">
                      {app.mathConcepts.map((concept, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {concept}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h5 className="font-semibold mb-2">🔬 Exemple Technique</h5>
                    <p className="text-sm">{app.example}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-2">🌍 Applications Réelles</h5>
                    <p className="text-sm text-muted-foreground">{app.realWorld}</p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">💡 Impact</h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Ces mathématiques permettent de traiter des millions de données en temps réel 
                      et d'apprendre automatiquement des patterns complexes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cas d'étude complexe */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
            🔍 Cas d'Étude : ChatGPT et les Transformers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold">Architecture Transformer</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Utilise massivement l'algèbre linéaire pour l'attention multi-têtes
              </p>
              <p className="text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                Matrices Q, K, V de taille [seq_len, d_model] calculées en parallèle
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h5 className="font-semibold">Entraînement</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Optimisation de 175 milliards de paramètres par descente de gradient
              </p>
              <p className="text-xs bg-green-100 dark:bg-green-900/30 p-2 rounded">
                Adam optimizer avec learning rate scheduling
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <h5 className="font-semibold">Génération</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Échantillonnage probabiliste pour générer du texte cohérent
              </p>
              <p className="text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                Softmax + température pour contrôler la créativité
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Défis actuels */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <CardHeader>
          <CardTitle className="text-lg text-purple-800 dark:text-purple-200">
            🚀 Défis Mathématiques de l'IA Moderne
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold">🎯 Défis Techniques</h5>
              
              <div className="space-y-3">
                <div className="bg-card p-3 rounded-lg border">
                  <h6 className="font-medium">Scalabilité</h6>
                  <p className="text-sm text-muted-foreground">
                    Comment optimiser des modèles avec des trilliards de paramètres ?
                  </p>
                </div>
                
                <div className="bg-card p-3 rounded-lg border">
                  <h6 className="font-medium">Efficacité Énergétique</h6>
                  <p className="text-sm text-muted-foreground">
                    Réduire les calculs matriciels tout en gardant les performances
                  </p>
                </div>
                
                <div className="bg-card p-3 rounded-lg border">
                  <h6 className="font-medium">Généralisation</h6>
                  <p className="text-sm text-muted-foreground">
                    Éviter le surapprentissage avec des fonctions de régularisation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">🔬 Recherches Actuelles</h5>
              
              <div className="space-y-3">
                <div className="bg-card p-3 rounded-lg border">
                  <h6 className="font-medium">Calcul Quantique</h6>
                  <p className="text-sm text-muted-foreground">
                    Exploiter la superposition quantique pour l'optimisation
                  </p>
                </div>
                
                <div className="bg-card p-3 rounded-lg border">
                  <h6 className="font-medium">IA Neurosymbolique</h6>
                  <p className="text-sm text-muted-foreground">
                    Combiner logique symbolique et apprentissage statistique
                  </p>
                </div>
                
                <div className="bg-card p-3 rounded-lg border">
                  <h6 className="font-medium">Causalité</h6>
                  <p className="text-sm text-muted-foreground">
                    Aller au-delà des corrélations vers la compréhension causale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Message final motivant */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-center text-primary">
            🎓 Félicitations ! Vous Maîtrisez les Bases
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg">
            Vous comprenez maintenant les fondements mathématiques qui font fonctionner l'IA moderne. 
            Ces concepts sont vos outils pour créer, comprendre et améliorer les systèmes intelligents de demain.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🧮</div>
              <div className="text-sm font-medium">Algèbre Linéaire</div>
              <div className="text-xs text-muted-foreground">Maîtrisée</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-sm font-medium">Calcul Différentiel</div>
              <div className="text-xs text-muted-foreground">Maîtrisé</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎲</div>
              <div className="text-sm font-medium">Probabilités</div>
              <div className="text-xs text-muted-foreground">Maîtrisées</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm font-medium">Optimisation</div>
              <div className="text-xs text-muted-foreground">Maîtrisée</div>
            </div>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg mt-6">
            <p className="text-sm text-primary">
              <strong>Prochaine étape :</strong> Appliquez ces connaissances dans des projets concrets ! 
              L'IA n'aura plus de secrets mathématiques pour vous.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PracticalApplicationsSection;
