
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Brain, Database, Robot, Workflow, BarChart3, Network, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Page sur les différentes approches de Machine Learning
 * @returns {JSX.Element} Le composant de la page Machine Learning
 */
const MachineLearning = () => {
  return (
    <>
      <Hero
        title="Machine Learning"
        subtitle="Découvrez les différentes approches d'apprentissage automatique : supervisé, non supervisé, par renforcement et bien plus encore."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Fondamentaux"
          title="Qu'est-ce que le Machine Learning ?"
          description="Le machine learning est un sous-domaine de l'intelligence artificielle qui permet aux ordinateurs d'apprendre et de s'améliorer à partir de l'expérience sans être explicitement programmés."
          center
        />

        <div className="mt-12 max-w-4xl mx-auto glass-card rounded-2xl p-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Principes fondamentaux</h3>
              <p className="text-muted-foreground mb-4">
                Le machine learning repose sur l'idée que les systèmes peuvent apprendre à partir de données,
                identifier des modèles et prendre des décisions avec une intervention humaine minimale.
              </p>
              <p className="text-muted-foreground">
                Contrairement à la programmation traditionnelle où des règles explicites sont codées,
                le machine learning permet aux systèmes de générer leurs propres règles en analysant des données.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse [animation-delay:200ms]"></div>
                <div className="absolute inset-8 rounded-full bg-primary/15 animate-pulse [animation-delay:400ms]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-20 h-20 text-primary/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <SectionHeading
            pretitle="Typologie"
            title="Les principales approches"
            description="Le machine learning se divise en plusieurs approches, chacune adaptée à différents types de problèmes et de données."
            center
          />

          <div className="mt-16 space-y-24">
            {/* Apprentissage supervisé */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-left">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                  <Database size={32} className="text-primary" />
                </div>
                <h3 className="heading-lg mb-4">Apprentissage supervisé</h3>
                <p className="mb-4 text-muted-foreground">
                  L'apprentissage supervisé utilise des données étiquetées pour entraîner des modèles à faire 
                  des prédictions ou à prendre des décisions. Il apprend à partir d'exemples fournis avec les réponses correctes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Régression : prédiction de valeurs continues (prix, température)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Classification : attribution de catégories (spam/non-spam, diagnostic médical)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Algorithmes : régression linéaire, SVM, arbres de décision, réseaux de neurones</span>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-2xl animate-slide-right">
                <h4 className="text-lg font-semibold mb-4">Processus d'apprentissage supervisé</h4>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">1. Collecte de données étiquetées</h5>
                    <p className="text-sm text-muted-foreground">
                      Acquisition d'un ensemble de données où chaque exemple est associé à une étiquette ou une valeur cible
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">2. Préparation des données</h5>
                    <p className="text-sm text-muted-foreground">
                      Nettoyage, normalisation et division des données en ensembles d'entraînement et de test
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">3. Entraînement du modèle</h5>
                    <p className="text-sm text-muted-foreground">
                      Le modèle apprend les relations entre les caractéristiques d'entrée et les étiquettes de sortie
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">4. Évaluation et ajustement</h5>
                    <p className="text-sm text-muted-foreground">
                      Mesure de la performance sur des données de validation et optimisation des hyperparamètres
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apprentissage non supervisé */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 glass-card p-6 rounded-2xl animate-slide-left">
                <h4 className="text-lg font-semibold mb-4">Applications courantes</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                    <div>
                      <h5 className="font-medium">Segmentation client</h5>
                      <p className="text-sm text-muted-foreground">Identification de groupes de clients aux comportements similaires pour le marketing ciblé</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                    <div>
                      <h5 className="font-medium">Détection d'anomalies</h5>
                      <p className="text-sm text-muted-foreground">Identification de comportements inhabituels pour la détection de fraudes ou de défaillances</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                    <div>
                      <h5 className="font-medium">Réduction de dimensionnalité</h5>
                      <p className="text-sm text-muted-foreground">Simplification des données tout en préservant l'information essentielle</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-secondary/20 border border-secondary">
                  <p className="text-sm text-muted-foreground italic">
                    "L'apprentissage non supervisé nous permet de découvrir des structures cachées dans les 
                    données que nous n'aurions peut-être jamais imaginées. C'est comme explorer une carte sans légende."
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-slide-right">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                  <Network size={32} className="text-primary" />
                </div>
                <h3 className="heading-lg mb-4">Apprentissage non supervisé</h3>
                <p className="mb-4 text-muted-foreground">
                  L'apprentissage non supervisé identifie des motifs et des structures dans des données non étiquetées,
                  sans guidance préalable sur ce qui doit être recherché.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Clustering : regroupement d'instances similaires (K-means, DBSCAN)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Association : découverte de relations entre variables (règles d'association)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Réduction de dimensions : compression de données (PCA, t-SNE, autoencodeurs)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Apprentissage par renforcement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-left">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                  <Robot size={32} className="text-primary" />
                </div>
                <h3 className="heading-lg mb-4">Apprentissage par renforcement</h3>
                <p className="mb-4 text-muted-foreground">
                  L'apprentissage par renforcement entraîne des agents à prendre des séquences de décisions 
                  en maximisant une récompense cumulative à travers des essais et erreurs dans un environnement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Basé sur le principe d'essai-erreur et de récompense/pénalité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Applications : jeux vidéo, robotique, optimisation de systèmes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Algorithmes : Q-learning, SARSA, Deep Q Network (DQN), PPO</span>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-2xl animate-slide-right">
                <h4 className="text-lg font-semibold mb-4">Éléments clés</h4>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Agent</h5>
                    <p className="text-sm text-muted-foreground">
                      Entité qui apprend à prendre des décisions pour atteindre un objectif
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Environnement</h5>
                    <p className="text-sm text-muted-foreground">
                      Contexte dans lequel l'agent évolue et avec lequel il interagit
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Actions</h5>
                    <p className="text-sm text-muted-foreground">
                      Décisions que l'agent peut prendre pour modifier son état dans l'environnement
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Récompenses</h5>
                    <p className="text-sm text-muted-foreground">
                      Signaux positifs ou négatifs reçus en fonction des actions prises
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Politique</h5>
                    <p className="text-sm text-muted-foreground">
                      Stratégie que l'agent utilise pour déterminer ses actions en fonction de son état
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apprentissage profond */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 glass-card p-6 rounded-2xl animate-slide-left">
                <h4 className="text-lg font-semibold mb-4">Architectures populaires</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Réseaux de neurones convolutifs (CNN)</h5>
                    <p className="text-sm text-muted-foreground">
                      Excellents pour le traitement d'images et la vision par ordinateur
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Réseaux de neurones récurrents (RNN)</h5>
                    <p className="text-sm text-muted-foreground">
                      Adaptés aux données séquentielles comme le texte ou les séries temporelles
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Transformers</h5>
                    <p className="text-sm text-muted-foreground">
                      Architecture basée sur l'attention révolutionnant le traitement du langage naturel
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/40">
                    <h5 className="font-medium">Réseaux antagonistes génératifs (GAN)</h5>
                    <p className="text-sm text-muted-foreground">
                      Permettent de générer du contenu réaliste comme des images ou de la musique
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-slide-right">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                  <Share2 size={32} className="text-primary" />
                </div>
                <h3 className="heading-lg mb-4">Apprentissage profond (Deep Learning)</h3>
                <p className="mb-4 text-muted-foreground">
                  L'apprentissage profond est un sous-ensemble du machine learning utilisant des réseaux 
                  de neurones artificiels avec plusieurs couches pour modéliser des abstractions de haut niveau.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Capable d'extraire automatiquement des caractéristiques pertinentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Particulièrement efficace pour les données non structurées (images, texte, audio)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                    <span>Nécessite de grandes quantités de données et une puissance de calcul importante</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-secondary/30 rounded-3xl my-12">
        <SectionHeading
          pretitle="Mise en œuvre"
          title="Du concept à la pratique"
          description="La mise en œuvre d'un projet de machine learning suit généralement un processus structuré en plusieurs étapes clés."
          center
        />

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl animate-fade-in">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Compréhension du problème</h3>
              <p className="text-sm text-muted-foreground text-center">
                Définir clairement l'objectif, les métriques de succès et la valeur commerciale du projet
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Collecte et préparation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Acquérir, nettoyer et transformer les données pour les rendre exploitables
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Choix de l'approche</h3>
              <p className="text-sm text-muted-foreground text-center">
                Sélectionner la technique de machine learning la plus appropriée au problème
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Modélisation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Développer le modèle, le former sur les données d'entraînement et l'optimiser
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Évaluation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Mesurer les performances du modèle sur des données de test selon les métriques définies
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">6</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Déploiement</h3>
              <p className="text-sm text-muted-foreground text-center">
                Intégrer le modèle dans un environnement de production et le rendre accessible
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Exploration"
            title="Découvrez plus"
            description="Approfondissez vos connaissances en explorant les autres sections du site."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/niveaux-ia">
                Niveaux d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/cas-usage">
                Cas d'usage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachineLearning;

