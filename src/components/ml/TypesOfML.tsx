
import { Brain, Network, Bot, Database } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * Composant présentant les différents types de Machine Learning
 * @returns {JSX.Element} Le composant TypesOfML
 */
const TypesOfML = () => {
  return (
    <section className="py-20 bg-background/50">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeading
          pretitle="Classification"
          title="Types de Machine Learning"
          description="Le machine learning se divise en plusieurs approches distinctes, chacune adaptée à des cas d'usage et des types de données spécifiques."
          center
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Apprentissage supervisé */}
          <Card className="border-primary/10 shadow-md animate-fade-in">
            <CardHeader className="pb-3">
              <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <Database size={24} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Apprentissage supervisé</CardTitle>
              <CardDescription>
                Apprendre à partir d'exemples étiquetés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L'apprentissage supervisé utilise des données d'entraînement étiquetées pour apprendre à prédire 
                des résultats ou classifier des données nouvelles.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Classification</span> : Attribution d'une catégorie à une donnée
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Régression</span> : Prédiction d'une valeur continue
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Algorithmes</span> : Régression linéaire, arbres de décision, SVM, k-NN
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apprentissage non supervisé */}
          <Card className="border-primary/10 shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardHeader className="pb-3">
              <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <Network size={24} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Apprentissage non supervisé</CardTitle>
              <CardDescription>
                Découvrir des structures cachées dans les données
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L'apprentissage non supervisé identifie des motifs et des relations dans des données 
                non étiquetées, sans indication préalable sur les résultats attendus.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Clustering</span> : Regroupement d'instances similaires
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Réduction de dimensions</span> : Compression de l'information
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Algorithmes</span> : K-means, DBSCAN, PCA, autoencodeurs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apprentissage semi-supervisé */}
          <Card className="border-primary/10 shadow-md animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardHeader className="pb-3">
              <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <Brain size={24} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Apprentissage semi-supervisé</CardTitle>
              <CardDescription>
                Combiner données étiquetées et non étiquetées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L'apprentissage semi-supervisé utilise à la fois des données étiquetées et non étiquetées pour 
                améliorer les performances d'apprentissage, notamment quand l'étiquetage est coûteux.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Auto-apprentissage</span> : Utiliser le modèle pour étiqueter de nouvelles données
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Co-apprentissage</span> : Utiliser plusieurs modèles qui s'enrichissent mutuellement
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Applications</span> : Reconnaissance d'image, analyse de texte
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apprentissage par renforcement */}
          <Card className="border-primary/10 shadow-md animate-fade-in" style={{ animationDelay: '300ms' }}>
            <CardHeader className="pb-3">
              <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <Bot size={24} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Apprentissage par renforcement</CardTitle>
              <CardDescription>
                Apprendre par essai et récompense
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L'apprentissage par renforcement entraîne des agents à prendre des décisions optimales 
                en recevant des récompenses ou pénalités suite à leurs actions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Principes</span> : Agent, environnement, action, récompense
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Algorithmes</span> : Q-learning, Deep Q-Network (DQN), PPO
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Applications</span> : Jeux, robotique, véhicules autonomes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TypesOfML;
