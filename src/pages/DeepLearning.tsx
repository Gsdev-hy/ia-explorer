import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BookOpen, ChevronRight, BarChart, Network, Layers, Code, Zap, Target, Lightbulb } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import DidYouKnow from '@/components/courses/DidYouKnow';
import AnalogyBox from '@/components/courses/AnalogyBox';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import StatsGrid from '@/components/courses/StatsGrid';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';

/**
 * Page du cours sur le Deep Learning pratique
 * @returns {JSX.Element} Le composant de la page
 */
const DeepLearning = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "Quelle est la principale différence entre TensorFlow et PyTorch?",
      options: [
        "TensorFlow est uniquement pour le deep learning, PyTorch pour le machine learning classique",
        "TensorFlow utilise le graphe statique par défaut, PyTorch utilise une approche de graphe dynamique",
        "TensorFlow est open source, PyTorch est propriétaire",
        "TensorFlow ne peut pas être utilisé pour la vision par ordinateur"
      ],
      correctAnswer: 1,
      explanation: "TensorFlow utilise traditionnellement un graphe statique (bien que TF 2.x ait ajouté un mode eager), tandis que PyTorch utilise une approche de graphe dynamique qui permet un débogage plus facile et une flexibilité dans la construction des modèles."
    },
    {
      question: "Quel est le rôle des fonctions d'activation dans un réseau de neurones?",
      options: [
        "Elles déterminent la vitesse d'apprentissage du modèle",
        "Elles introduisent des non-linéarités dans le modèle",
        "Elles servent uniquement à normaliser les données",
        "Elles contrôlent le nombre de couches du réseau"
      ],
      correctAnswer: 1,
      explanation: "Les fonctions d'activation introduisent des non-linéarités dans le modèle, permettant au réseau d'apprendre des relations complexes et non linéaires dans les données."
    },
    {
      question: "Qu'est-ce que le problème de disparition du gradient (vanishing gradient) dans les réseaux de neurones profonds?",
      options: [
        "Les gradients deviennent trop grands et causent une explosion de l'apprentissage",
        "Les gradients deviennent très petits et l'apprentissage ralentit ou s'arrête",
        "Les couches cachées disparaissent pendant l'entraînement",
        "Le réseau ne peut pas apprendre de motifs locaux"
      ],
      correctAnswer: 1,
      explanation: "Le problème de disparition du gradient survient lorsque les gradients deviennent extrêmement petits lors de la rétropropagation, ce qui rend l'apprentissage très lent ou impossible dans les couches profondes du réseau."
    },
    {
      question: "Quelle architecture est spécifiquement conçue pour la vision par ordinateur?",
      options: [
        "RNN (Recurrent Neural Network)",
        "Transformer",
        "CNN (Convolutional Neural Network)",
        "AE (Autoencoder)"
      ],
      correctAnswer: 2,
      explanation: "Les réseaux de neurones convolutifs (CNN) sont spécialement conçus pour traiter des données avec une topologie en grille comme les images, grâce à leurs opérations de convolution qui captent les motifs locaux et la hiérarchie de caractéristiques."
    },
    {
      question: "Qu'est-ce que le transfert learning (apprentissage par transfert)?",
      options: [
        "Transférer un modèle d'un framework à un autre (TensorFlow à PyTorch)",
        "Utiliser un modèle préentraîné et le réajuster sur une nouvelle tâche",
        "Transférer l'apprentissage d'un utilisateur à un autre",
        "L'apprentissage de plusieurs tâches simultanément"
      ],
      correctAnswer: 1,
      explanation: "L'apprentissage par transfert est une technique où un modèle développé pour une tâche est réutilisé comme point de départ pour un modèle sur une seconde tâche, permettant d'exploiter les connaissances acquises précédemment."
    }
  ];

  const didYouKnowItems = [
    {
      title: "Inspiration biologique",
      content: "Les réseaux de neurones artificiels s'inspirent du fonctionnement du cerveau humain, mais de manière très simplifiée. Un neurone biologique a environ 7000 connexions synaptiques en moyenne."
    },
    {
      title: "Puissance de calcul",
      content: "L'entraînement de GPT-3 a nécessité environ 314 zettajoules d'énergie, équivalent à la consommation électrique de 126 foyers danois pendant un an."
    },
    {
      title: "Données d'entraînement",
      content: "ImageNet, l'un des datasets les plus influents en vision par ordinateur, contient plus de 14 millions d'images étiquetées dans plus de 20 000 catégories."
    }
  ];

  const statsData = [
    {
      value: "175B",
      description: "Paramètres dans GPT-3",
      bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50"
    },
    {
      value: "99.9%",
      description: "Précision en reconnaissance faciale",
      bgGradient: "from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50"
    },
    {
      value: "2012",
      description: "Révolution AlexNet en vision",
      bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50"
    }
  ];

  const learningModules = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Fondamentaux théoriques",
      items: [
        "Neurones artificiels et perceptrons",
        "Fonctions d'activation et leurs propriétés",
        "Rétropropagation et optimisation",
        "Régularisation et généralisation"
      ]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Implémentation pratique",
      items: [
        "TensorFlow et Keras en pratique",
        "PyTorch pour la recherche",
        "Préparation et augmentation des données",
        "Débogage et optimisation des modèles"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Applications concrètes",
      items: [
        "Classification d'images médicales",
        "Détection d'objets en temps réel",
        "Génération de texte créatif",
        "Prédiction de séries temporelles"
      ]
    }
  ];

  return (
    <>
      <BackToResourcesButton />
      
      <Hero
        title="Deep Learning Pratique : De la Théorie à l'Application"
        subtitle="Maîtrisez l'art des réseaux de neurones profonds à travers une approche progressive et pratique, de la théorie fondamentale aux applications industrielles"
      />

      <section className="section-container mb-10">
        <CourseHeader
          title="Deep Learning Pratique"
          subtitle="Un voyage complet dans l'univers des réseaux de neurones profonds"
          author="Dr. Geoffroy Streit"
          authorDescription="Expert en Intelligence Artificielle et Machine Learning, 15 ans d'expérience en recherche et industrie"
          duration="10-12 semaines (6-8h/semaine)"
          level="Intermédiaire à Avancé"
          audience="Développeurs, Data Scientists, Ingénieurs IA"
          tags={["Deep Learning", "TensorFlow", "PyTorch", "Pratique", "Projets"]}
        />

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">🚀 Bienvenue dans l'aventure du Deep Learning !</h3>
            <p className="text-lg mb-4 text-foreground">
              Imaginez pouvoir créer des systèmes qui reconnaissent des visages dans une foule, qui comprennent le langage humain, 
              ou qui génèrent des œuvres d'art originales. C'est exactement ce que vous allez apprendre dans ce cours !
            </p>
            <p className="mb-4 text-foreground">
              Le Deep Learning n'est plus de la science-fiction. Aujourd'hui, il révolutionne la médecine avec des diagnostics 
              plus précis, transforme l'industrie automobile avec les voitures autonomes, et change notre façon de communiquer 
              avec les assistants vocaux intelligents.
            </p>
            <p className="font-medium text-primary">
              Ce cours vous guide pas à pas, de la compréhension des concepts fondamentaux jusqu'à la création de vos propres 
              modèles prêts pour la production. Préparez-vous à transformer votre carrière !
            </p>
          </div>

          <AnalogyBox
            title="Le Deep Learning, c'est comme apprendre à conduire"
            content="Au début, vous devez consciemment penser à chaque action : vérifier les rétroviseurs, actionner le clignotant, évaluer les distances. Avec la pratique, ces actions deviennent automatiques. De même, un réseau de neurones 'apprend' en ajustant progressivement ses connexions jusqu'à reconnaître automatiquement des motifs complexes dans les données."
            variant="info"
          />
        </div>

        <DidYouKnow items={didYouKnowItems} />

        <StatsGrid stats={statsData} />

        <CourseModule
          title="Programme du cours"
          description="Un parcours structuré en 7 modules, chacun construisant sur les connaissances précédentes"
          modules={learningModules}
        />

        <div className="max-w-4xl mx-auto">
          {/* Module 1: Introduction et Fondamentaux */}
          <LessonSection title="Module 1 : Introduction et Fondamentaux du Deep Learning" icon={<Brain size={24} />} delay={1}>
            <p className="text-lg mb-4">
              Bienvenue dans le monde fascinant du Deep Learning ! Avant de plonger dans le code, prenons le temps de comprendre 
              ce qui rend cette technologie si révolutionnaire.
            </p>
            
            <ZoomOn title="Qu'est-ce qui rend le Deep Learning si spécial ?">
              <p className="mb-3">
                Contrairement aux approches traditionnelles de programmation où nous écrivons des règles explicites, 
                le Deep Learning permet aux machines d'apprendre ces règles automatiquement à partir d'exemples.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Apprentissage automatique des caractéristiques :</strong> Plus besoin d'extraire manuellement les features importantes</li>
                <li><strong>Capacité de généralisation :</strong> Un modèle bien entraîné peut traiter des données qu'il n'a jamais vues</li>
                <li><strong>Évolutivité :</strong> Plus de données = de meilleures performances (contrairement aux algorithmes classiques)</li>
              </ul>
            </ZoomOn>

            <Illustration 
              src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="Réseau de neurones connectés, représentation visuelle du deep learning"
              caption="Le Deep Learning s'inspire du fonctionnement du cerveau humain avec des couches de neurones interconnectés"
              width="2/3"
            />

            <h4 className="text-xl font-semibold mt-6 mb-3">Le neurone artificiel : brique de base</h4>
            <p className="mb-4">
              Tout commence par un <TechnicalTooltip term="Neurone artificiel" definition="Unité de calcul élémentaire qui reçoit des entrées, les pondère, et produit une sortie via une fonction d'activation">neurone artificiel</TechnicalTooltip>, 
              une version simplifiée d'un neurone biologique.
            </p>

            <CodeExample 
              title="Implémentation d'un neurone simple"
              language="python"
              code={`import numpy as np
import matplotlib.pyplot as plt

class Neurone:
    def __init__(self, nb_entrees):
        # Initialisation aléatoire des poids (distribution normale)
        self.poids = np.random.normal(0, 0.1, nb_entrees)
        self.biais = np.random.normal(0, 0.1)
        
    def sigmoid(self, x):
        """Fonction d'activation sigmoid : sortie entre 0 et 1"""
        return 1 / (1 + np.exp(-np.clip(x, -500, 500)))  # clip pour éviter overflow
    
    def relu(self, x):
        """Fonction d'activation ReLU : max(0, x)"""
        return np.maximum(0, x)
    
    def forward(self, entrees, activation='sigmoid'):
        """Propagation avant : calcul de la sortie"""
        # Étape 1: Somme pondérée
        somme_ponderee = np.dot(entrees, self.poids) + self.biais
        
        # Étape 2: Application de la fonction d'activation
        if activation == 'sigmoid':
            sortie = self.sigmoid(somme_ponderee)
        elif activation == 'relu':
            sortie = self.relu(somme_ponderee)
        else:
            raise ValueError("Activation non supportée")
            
        return sortie
    
    def visualiser_activation(self, x_range=(-10, 10)):
        """Visualise les fonctions d'activation"""
        x = np.linspace(x_range[0], x_range[1], 1000)
        
        plt.figure(figsize=(12, 4))
        
        plt.subplot(1, 2, 1)
        plt.plot(x, self.sigmoid(x), 'b-', linewidth=2)
        plt.title('Fonction Sigmoid')
        plt.xlabel('Entrée')
        plt.ylabel('Sortie')
        plt.grid(True, alpha=0.3)
        
        plt.subplot(1, 2, 2)
        plt.plot(x, self.relu(x), 'r-', linewidth=2)
        plt.title('Fonction ReLU')
        plt.xlabel('Entrée')
        plt.ylabel('Sortie')
        plt.grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.show()

# Exemple d'utilisation pratique
if __name__ == "__main__":
    # Création d'un neurone avec 3 entrées
    neurone = Neurone(3)
    
    # Données d'exemple : [taille, âge, salaire_normalisé]
    entrees = np.array([0.8, 0.3, 0.6])
    
    # Test avec différentes activations
    sortie_sigmoid = neurone.forward(entrees, 'sigmoid')
    sortie_relu = neurone.forward(entrees, 'relu')
    
    print(f"Entrées: {entrees}")
    print(f"Poids: {neurone.poids}")
    print(f"Biais: {neurone.biais:.3f}")
    print(f"Sortie (Sigmoid): {sortie_sigmoid:.3f}")
    print(f"Sortie (ReLU): {sortie_relu:.3f}")
    
    # Visualisation des fonctions d'activation
    neurone.visualiser_activation()`}
              explanation="Ce code illustre le fonctionnement d'un neurone artificiel avec deux fonctions d'activation populaires. Remarquez comment les poids et le biais influencent la décision finale."
            />

            <AnalogyBox
              title="Analogie : Le neurone comme un portier de boîte de nuit"
              content="Imaginez un portier qui doit décider qui peut entrer. Il regarde plusieurs critères (âge, tenue, etc.), donne un poids à chacun selon leur importance, fait la somme, et si le total dépasse son seuil, il laisse entrer la personne. C'est exactement ce que fait un neurone artificiel !"
            />
          </LessonSection>

          {/* Module 2: Architectures de réseaux */}
          <LessonSection title="Module 2 : Architectures et Propagation" icon={<Network size={24} />} delay={2}>
            <p className="text-lg mb-4">
              Maintenant que vous comprenez le neurone individuel, découvrons comment les assembler pour créer des 
              <TechnicalTooltip term="Réseau de neurones multicouches" definition="Architecture composée de plusieurs couches de neurones où chaque couche reçoit les sorties de la couche précédente">réseaux de neurones multicouches</TechnicalTooltip> 
              capables de résoudre des problèmes complexes.
            </p>

            <ZoomOn title="L'architecture feedforward : le modèle de base">
              <p className="mb-3">
                Dans un réseau feedforward, l'information circule dans une seule direction, de l'entrée vers la sortie :
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Couche d'entrée :</strong> Reçoit les données brutes (pixels d'image, mots, etc.)</li>
                <li><strong>Couches cachées :</strong> Extraient progressivement des caractéristiques de plus en plus abstraites</li>
                <li><strong>Couche de sortie :</strong> Produit la prédiction finale</li>
              </ol>
            </ZoomOn>

            <CodeExample 
              title="Réseau de neurones complet avec NumPy"
              language="python"
              code={`import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

class ReseauNeurones:
    def __init__(self, architecture):
        """
        architecture: liste des tailles de couches [entrée, cachée1, cachée2, ..., sortie]
        Exemple: [784, 128, 64, 10] pour MNIST
        """
        self.architecture = architecture
        self.nb_couches = len(architecture)
        
        # Initialisation des poids et biais (méthode Xavier/Glorot)
        self.poids = {}
        self.biais = {}
        
        for i in range(1, self.nb_couches):
            # Xavier initialization: améliore la convergence
            fan_in = architecture[i-1]
            fan_out = architecture[i]
            limite = np.sqrt(6.0 / (fan_in + fan_out))
            
            self.poids[f'W{i}'] = np.random.uniform(-limite, limite, 
                                                   (architecture[i-1], architecture[i]))
            self.biais[f'b{i}'] = np.zeros((1, architecture[i]))
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-np.clip(x, -500, 500)))
    
    def sigmoid_derivee(self, x):
        s = self.sigmoid(x)
        return s * (1 - s)
    
    def relu(self, x):
        return np.maximum(0, x)
    
    def relu_derivee(self, x):
        return (x > 0).astype(float)
    
    def softmax(self, x):
        """Pour classification multiclasse"""
        exp_x = np.exp(x - np.max(x, axis=1, keepdims=True))
        return exp_x / np.sum(exp_x, axis=1, keepdims=True)
    
    def propagation_avant(self, X):
        """Forward pass : calcul des activations de toutes les couches"""
        activations = {'A0': X}  # Entrée
        z_values = {}  # Valeurs avant activation
        
        for i in range(1, self.nb_couches):
            # Calcul de z = W*a + b
            z = np.dot(activations[f'A{i-1}'], self.poids[f'W{i}']) + self.biais[f'b{i}']
            z_values[f'Z{i}'] = z
            
            # Application de la fonction d'activation
            if i == self.nb_couches - 1:  # Dernière couche
                activations[f'A{i}'] = self.softmax(z)
            else:  # Couches cachées
                activations[f'A{i}'] = self.relu(z)
        
        return activations, z_values
    
    def cout_entropie_croisee(self, y_pred, y_true):
        """Fonction de coût pour classification"""
        m = y_true.shape[0]
        # Éviter log(0)
        y_pred_clip = np.clip(y_pred, 1e-12, 1 - 1e-12)
        cout = -np.sum(y_true * np.log(y_pred_clip)) / m
        return cout
    
    def retropropagation(self, X, y):
        """Backward pass : calcul des gradients"""
        m = X.shape[0]
        
        # Forward pass
        activations, z_values = self.propagation_avant(X)
        
        # Stockage des gradients
        gradients_poids = {}
        gradients_biais = {}
        
        # Gradient de la dernière couche (sortie)
        dA = activations[f'A{self.nb_couches-1}'] - y  # Dérivée softmax + entropie croisée
        
        # Rétropropagation à travers toutes les couches
        for i in range(self.nb_couches-1, 0, -1):
            # Gradients des poids et biais
            gradients_poids[f'W{i}'] = np.dot(activations[f'A{i-1}'].T, dA) / m
            gradients_biais[f'b{i}'] = np.sum(dA, axis=0, keepdims=True) / m
            
            if i > 1:  # Pas pour la première couche
                # Gradient de l'activation précédente
                dA = np.dot(dA, self.poids[f'W{i}'].T) * self.relu_derivee(z_values[f'Z{i-1}'])
        
        return gradients_poids, gradients_biais
    
    def mise_a_jour_parametres(self, gradients_poids, gradients_biais, taux_apprentissage):
        """Mise à jour des poids et biais"""
        for i in range(1, self.nb_couches):
            self.poids[f'W{i}'] -= taux_apprentissage * gradients_poids[f'W{i}']
            self.biais[f'b{i}'] -= taux_apprentissage * gradients_biais[f'b{i}']
    
    def entrainer(self, X, y, epochs=1000, taux_apprentissage=0.01, verbose=True):
        """Entraînement du réseau"""
        historique_cout = []
        
        for epoch in range(epochs):
            # Forward et backward pass
            gradients_poids, gradients_biais = self.retropropagation(X, y)
            
            # Mise à jour des paramètres
            self.mise_a_jour_parametres(gradients_poids, gradients_biais, taux_apprentissage)
            
            # Calcul et stockage du coût
            if epoch % 100 == 0:
                activations, _ = self.propagation_avant(X)
                cout = self.cout_entropie_croisee(activations[f'A{self.nb_couches-1}'], y)
                historique_cout.append(cout)
                
                if verbose:
                    print(f"Epoch {epoch}, Coût: {cout:.4f}")
        
        return historique_cout
    
    def predire(self, X):
        """Prédiction sur de nouvelles données"""
        activations, _ = self.propagation_avant(X)
        predictions = activations[f'A{self.nb_couches-1}']
        return np.argmax(predictions, axis=1)

# Exemple d'utilisation sur un dataset synthétique
if __name__ == "__main__":
    # Génération de données synthétiques
    X, y = make_classification(n_samples=1000, n_features=20, n_classes=3, 
                             n_clusters_per_class=1, random_state=42)
    
    # Conversion en one-hot encoding pour y
    y_onehot = np.eye(3)[y]
    
    # Division train/test
    X_train, X_test, y_train, y_test = train_test_split(X, y_onehot, test_size=0.2, random_state=42)
    
    # Normalisation des données
    X_train = (X_train - np.mean(X_train, axis=0)) / np.std(X_train, axis=0)
    X_test = (X_test - np.mean(X_test, axis=0)) / np.std(X_test, axis=0)
    
    # Création et entraînement du réseau
    # Architecture: 20 entrées -> 50 -> 25 -> 3 sorties
    reseau = ReseauNeurones([20, 50, 25, 3])
    
    print("Début de l'entraînement...")
    historique = reseau.entrainer(X_train, y_train, epochs=1000, taux_apprentissage=0.1)
    
    # Évaluation
    predictions = reseau.predire(X_test)
    y_test_labels = np.argmax(y_test, axis=1)
    precision = np.mean(predictions == y_test_labels)
    
    print(f"\nPrécision sur l'ensemble de test: {precision:.3f}")
    
    # Visualisation de l'apprentissage
    plt.figure(figsize=(10, 6))
    plt.plot(range(0, 1000, 100), historique)
    plt.title('Évolution du coût pendant l\'entraînement')
    plt.xlabel('Epochs')
    plt.ylabel('Coût (Entropie croisée)')
    plt.grid(True, alpha=0.3)
    plt.show()`}
              explanation="Cette implémentation complète montre tous les éléments clés : propagation avant, rétropropagation, et optimisation. Notez l'utilisation de l'initialisation Xavier et la normalisation des données pour améliorer la convergence."
            />

            <AnalogyBox
              title="La rétropropagation : apprendre de ses erreurs"
              content="Imaginez un chef cuisiner qui goûte son plat et réalise qu'il est trop salé. Il va 'remonter' sa recette : peut-être a-t-il mis trop de sel à l'étape 3, ou utilisé un bouillon trop salé à l'étape 1. La rétropropagation fonctionne de même : elle part de l'erreur finale et remonte pour identifier quels 'ingrédients' (poids) ajuster."
              variant="tip"
            />
          </LessonSection>

          {/* Module 3: TensorFlow et Keras */}
          <LessonSection title="Module 3 : Maîtriser TensorFlow et Keras" icon={<Layers size={24} />} delay={3}>
            <p className="text-lg mb-4">
              Maintenant que vous comprenez la théorie, passons à la pratique avec TensorFlow et Keras, 
              les outils les plus populaires pour le Deep Learning industriel.
            </p>

            <ZoomOn title="Pourquoi TensorFlow + Keras ?">
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-primary mb-1">🚀 Productivité</h5>
                  <p className="text-sm">Keras offre une API intuitive qui vous permet de prototyper rapidement</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-1">🏭 Production</h5>
                  <p className="text-sm">TensorFlow Serving facilite le déploiement de modèles à grande échelle</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-1">📱 Mobilité</h5>
                  <p className="text-sm">TensorFlow Lite permet d'exécuter des modèles sur smartphones et IoT</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-1">🌐 Écosystème</h5>
                  <p className="text-sm">TensorBoard, TensorFlow Extended (TFX), et bien d'autres outils intégrés</p>
                </div>
              </div>
            </ZoomOn>

            <CodeExample 
              title="Projet complet : Classification d'images avec CNN"
              language="python"
              code={`import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns

# Configuration pour reproductibilité
tf.random.set_seed(42)
np.random.seed(42)

class ClassificateurImages:
    def __init__(self, input_shape, num_classes):
        self.input_shape = input_shape
        self.num_classes = num_classes
        self.model = None
        self.history = None
    
    def creer_modele_cnn(self):
        """Création d'un CNN moderne avec bonnes pratiques"""
        model = keras.Sequential([
            # Première bloc convolutif
            layers.Conv2D(32, (3, 3), activation='relu', input_shape=self.input_shape),
            layers.BatchNormalization(),  # Normalisation par batch
            layers.Conv2D(32, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Dropout(0.25),  # Régularisation
            
            # Deuxième bloc convolutif
            layers.Conv2D(64, (3, 3), activation='relu'),
            layers.BatchNormalization(),
            layers.Conv2D(64, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Dropout(0.25),
            
            # Troisième bloc convolutif
            layers.Conv2D(128, (3, 3), activation='relu'),
            layers.BatchNormalization(),
            layers.Dropout(0.25),
            
            # Partie fully connected
            layers.GlobalAveragePooling2D(),  # Alternative à Flatten
            layers.Dense(512, activation='relu'),
            layers.BatchNormalization(),
            layers.Dropout(0.5),
            layers.Dense(self.num_classes, activation='softmax')
        ])
        
        self.model = model
        return model
    
    def compiler_modele(self, learning_rate=0.001):
        """Configuration de l'optimiseur et des métriques"""
        optimizer = keras.optimizers.Adam(
            learning_rate=learning_rate,
            beta_1=0.9,
            beta_2=0.999,
            epsilon=1e-7
        )
        
        self.model.compile(
            optimizer=optimizer,
            loss='categorical_crossentropy',
            metrics=['accuracy', 'top_5_accuracy']
        )
    
    def configurer_callbacks(self):
        """Configuration des callbacks pour l'entraînement"""
        callbacks = [
            # Réduction du learning rate quand la loss stagne
            keras.callbacks.ReduceLROnPlateau(
                monitor='val_loss',
                factor=0.2,
                patience=5,
                min_lr=1e-7,
                verbose=1
            ),
            
            # Arrêt précoce si pas d'amélioration
            keras.callbacks.EarlyStopping(
                monitor='val_accuracy',
                patience=10,
                restore_best_weights=True,
                verbose=1
            ),
            
            # Sauvegarde du meilleur modèle
            keras.callbacks.ModelCheckpoint(
                filepath='meilleur_modele.h5',
                monitor='val_accuracy',
                save_best_only=True,
                verbose=1
            )
        ]
        return callbacks
    
    def augmentation_donnees(self):
        """Générateur d'augmentation de données"""
        train_datagen = keras.preprocessing.image.ImageDataGenerator(
            rescale=1./255,              # Normalisation
            rotation_range=20,           # Rotation aléatoire
            width_shift_range=0.2,       # Décalage horizontal
            height_shift_range=0.2,      # Décalage vertical
            horizontal_flip=True,        # Miroir horizontal
            zoom_range=0.2,              # Zoom aléatoire
            fill_mode='nearest'          # Remplissage des pixels manquants
        )
        
        val_datagen = keras.preprocessing.image.ImageDataGenerator(
            rescale=1./255  # Seulement normalisation pour validation
        )
        
        return train_datagen, val_datagen
    
    def entrainer(self, x_train, y_train, x_val, y_val, epochs=50, batch_size=32):
        """Entraînement du modèle avec toutes les bonnes pratiques"""
        
        # Configuration des callbacks
        callbacks = self.configurer_callbacks()
        
        # Entraînement
        print("Début de l'entraînement...")
        self.history = self.model.fit(
            x_train, y_train,
            batch_size=batch_size,
            epochs=epochs,
            validation_data=(x_val, y_val),
            callbacks=callbacks,
            verbose=1
        )
        
        return self.history
    
    def evaluer_performance(self, x_test, y_test):
        """Évaluation complète du modèle"""
        # Prédictions
        predictions = self.model.predict(x_test)
        predicted_classes = np.argmax(predictions, axis=1)
        true_classes = np.argmax(y_test, axis=1)
        
        # Métriques de base
        test_loss, test_accuracy, test_top5 = self.model.evaluate(x_test, y_test, verbose=0)
        
        print(f"Performance sur l'ensemble de test:")
        print(f"Perte: {test_loss:.4f}")
        print(f"Précision: {test_accuracy:.4f}")
        print(f"Top-5 Accuracy: {test_top5:.4f}")
        
        # Rapport de classification détaillé
        print("\nRapport de classification:")
        print(classification_report(true_classes, predicted_classes))
        
        # Matrice de confusion
        cm = confusion_matrix(true_classes, predicted_classes)
        plt.figure(figsize=(10, 8))
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
        plt.title('Matrice de Confusion')
        plt.ylabel('Vraies étiquettes')
        plt.xlabel('Prédictions')
        plt.show()
        
        return {
            'test_loss': test_loss,
            'test_accuracy': test_accuracy,
            'test_top5': test_top5,
            'predictions': predictions
        }
    
    def visualiser_apprentissage(self):
        """Visualisation des courbes d'apprentissage"""
        if self.history is None:
            print("Aucun historique d'entraînement disponible")
            return
        
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        
        # Précision
        axes[0, 0].plot(self.history.history['accuracy'], label='Train')
        axes[0, 0].plot(self.history.history['val_accuracy'], label='Validation')
        axes[0, 0].set_title('Précision du modèle')
        axes[0, 0].set_xlabel('Epoch')
        axes[0, 0].set_ylabel('Précision')
        axes[0, 0].legend()
        axes[0, 0].grid(True, alpha=0.3)
        
        # Perte
        axes[0, 1].plot(self.history.history['loss'], label='Train')
        axes[0, 1].plot(self.history.history['val_loss'], label='Validation')
        axes[0, 1].set_title('Perte du modèle')
        axes[0, 1].set_xlabel('Epoch')
        axes[0, 1].set_ylabel('Perte')
        axes[0, 1].legend()
        axes[0, 1].grid(True, alpha=0.3)
        
        # Learning rate (si disponible)
        if 'lr' in self.history.history:
            axes[1, 0].plot(self.history.history['lr'])
            axes[1, 0].set_title('Taux d\'apprentissage')
            axes[1, 0].set_xlabel('Epoch')
            axes[1, 0].set_ylabel('Learning Rate')
            axes[1, 0].set_yscale('log')
            axes[1, 0].grid(True, alpha=0.3)
        
        # Top-5 accuracy
        if 'top_5_accuracy' in self.history.history:
            axes[1, 1].plot(self.history.history['top_5_accuracy'], label='Train')
            axes[1, 1].plot(self.history.history['val_top_5_accuracy'], label='Validation')
            axes[1, 1].set_title('Top-5 Accuracy')
            axes[1, 1].set_xlabel('Epoch')
            axes[1, 1].set_ylabel('Top-5 Accuracy')
            axes[1, 1].legend()
            axes[1, 1].grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.show()

# Exemple d'utilisation avec CIFAR-10
if __name__ == "__main__":
    # Chargement des données CIFAR-10
    print("Chargement des données CIFAR-10...")
    (x_train, y_train), (x_test, y_test) = keras.datasets.cifar10.load_data()
    
    # Informations sur le dataset
    print(f"Forme des données d'entraînement: {x_train.shape}")
    print(f"Forme des étiquettes d'entraînement: {y_train.shape}")
    print(f"Nombre de classes: {len(np.unique(y_train))}")
    
    # Préparation des données
    x_train = x_train.astype('float32')
    x_test = x_test.astype('float32')
    
    # Conversion en one-hot encoding
    num_classes = 10
    y_train = keras.utils.to_categorical(y_train, num_classes)
    y_test = keras.utils.to_categorical(y_test, num_classes)
    
    # Division train/validation
    from sklearn.model_selection import train_test_split
    x_train, x_val, y_train, y_val = train_test_split(
        x_train, y_train, test_size=0.2, random_state=42
    )
    
    # Normalisation simple (sera faite aussi dans l'augmentation)
    x_train = x_train / 255.0
    x_val = x_val / 255.0
    x_test = x_test / 255.0
    
    # Création et entraînement du modèle
    classificateur = ClassificateurImages(
        input_shape=(32, 32, 3),
        num_classes=num_classes
    )
    
    # Construction du modèle
    model = classificateur.creer_modele_cnn()
    classificateur.compiler_modele(learning_rate=0.001)
    
    # Affichage de l'architecture
    print("\nArchitecture du modèle:")
    model.summary()
    
    # Entraînement
    history = classificateur.entrainer(
        x_train, y_train,
        x_val, y_val,
        epochs=30,
        batch_size=32
    )
    
    # Visualisation de l'apprentissage
    classificateur.visualiser_apprentissage()
    
    # Évaluation finale
    resultats = classificateur.evaluer_performance(x_test, y_test)
    
    print(f"\nEntraînement terminé !")
    print(f"Précision finale: {resultats['test_accuracy']:.3f}`)}
              explanation="Ce code montre une implémentation complète et professionnelle d'un classificateur d'images avec toutes les bonnes pratiques : augmentation de données, callbacks, régularisation, et évaluation complète."
            />
          </LessonSection>

          {/* Module 4: PyTorch */}
          <LessonSection title="Module 4 : PyTorch pour la Recherche et l'Innovation" icon={<Code size={24} />} delay={4}>
            <p className="text-lg mb-4">
              PyTorch a révolutionné la recherche en Deep Learning grâce à sa philosophie "define-by-run" qui permet 
              une flexibilité maximale. Découvrons pourquoi il est devenu l'outil de choix des chercheurs.
            </p>

            <ZoomOn title="PyTorch vs TensorFlow : Quand utiliser quoi ?">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🔬 PyTorch - Idéal pour :</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Recherche et prototypage rapide</li>
                    <li>• Architectures dynamiques (RNN variables)</li>
                    <li>• Débogage interactif</li>
                    <li>• Apprentissage des concepts</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🏭 TensorFlow - Idéal pour :</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Déploiement en production</li>
                    <li>• Applications mobiles (TF Lite)</li>
                    <li>• Pipelines ML complets (TFX)</li>
                    <li>• Équipes grandes et structurées</li>
                  </ul>
                </div>
              </div>
            </ZoomOn>

            <CodeExample 
              title="Architecture avancée avec PyTorch : ResNet personnalisé"
              language="python"
              code={`import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
from torch.utils.data import DataLoader, Dataset
import torchvision
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import numpy as np
from tqdm import tqdm

class BlockResiduel(nn.Module):
    """Bloc résiduel de base pour ResNet"""
    def __init__(self, in_channels, out_channels, stride=1, downsample=None):
        super(BlockResiduel, self).__init__()
        
        # Première convolution
        self.conv1 = nn.Conv2d(in_channels, out_channels, kernel_size=3, 
                              stride=stride, padding=1, bias=False)
        self.bn1 = nn.BatchNorm2d(out_channels)
        
        # Deuxième convolution
        self.conv2 = nn.Conv2d(out_channels, out_channels, kernel_size=3,
                              stride=1, padding=1, bias=False)
        self.bn2 = nn.BatchNorm2d(out_channels)
        
        # Connection résiduelle (skip connection)
        self.downsample = downsample
        self.relu = nn.ReLU(inplace=True)
        
    def forward(self, x):
        identity = x  # Sauvegarde pour la connexion résiduelle
        
        # Première convolution + BN + ReLU
        out = self.conv1(x)
        out = self.bn1(out)
        out = self.relu(out)
        
        # Deuxième convolution + BN
        out = self.conv2(out)
        out = self.bn2(out)
        
        # Ajustement de la connexion résiduelle si nécessaire
        if self.downsample is not None:
            identity = self.downsample(x)
        
        # Addition résiduelle
        out += identity
        out = self.relu(out)
        
        return out

class ResNetPersonnalise(nn.Module):
    """ResNet adapté pour CIFAR-10"""
    def __init__(self, num_classes=10):
        super(ResNetPersonnalise, self).__init__()
        
        # Couche d'entrée (adaptée pour CIFAR-10: 32x32)
        self.conv1 = nn.Conv2d(3, 64, kernel_size=3, stride=1, padding=1, bias=False)
        self.bn1 = nn.BatchNorm2d(64)
        self.relu = nn.ReLU(inplace=True)
        
        # Couches résiduelles
        self.layer1 = self._make_layer(64, 64, 2, stride=1)
        self.layer2 = self._make_layer(64, 128, 2, stride=2)
        self.layer3 = self._make_layer(128, 256, 2, stride=2)
        self.layer4 = self._make_layer(256, 512, 2, stride=2)
        
        # Couche finale
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.fc = nn.Linear(512, num_classes)
        
        # Initialisation des poids
        self._initialize_weights()
    
    def _make_layer(self, in_channels, out_channels, blocks, stride=1):
        """Création d'une couche avec plusieurs blocs résiduels"""
        downsample = None
        
        # Si changement de dimension, créer une connexion de downsample
        if stride != 1 or in_channels != out_channels:
            downsample = nn.Sequential(
                nn.Conv2d(in_channels, out_channels, kernel_size=1, 
                         stride=stride, bias=False),
                nn.BatchNorm2d(out_channels)
            )
        
        layers = []
        layers.append(BlockResiduel(in_channels, out_channels, stride, downsample))
        
        # Ajouter les blocs restants
        for _ in range(1, blocks):
            layers.append(BlockResiduel(out_channels, out_channels))
        
        return nn.Sequential(*layers)
    
    def _initialize_weights(self):
        """Initialisation des poids (méthode He)"""
        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight, mode='fan_out', nonlinearity='relu')
            elif isinstance(m, nn.BatchNorm2d):
                nn.init.constant_(m.weight, 1)
                nn.init.constant_(m.bias, 0)
    
    def forward(self, x):
        # Couche d'entrée
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)
        
        # Couches résiduelles
        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        x = self.layer4(x)
        
        # Couche finale
        x = self.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)
        
        return x

class EntraineurResNet:
    """Classe pour gérer l'entraînement du modèle"""
    def __init__(self, model, device='cuda' if torch.cuda.is_available() else 'cpu'):
        self.model = model.to(device)
        self.device = device
        self.train_losses = []
        self.train_accuracies = []
        self.val_losses = []
        self.val_accuracies = []
    
    def configurer_optimiseur(self, learning_rate=0.1, momentum=0.9, weight_decay=1e-4):
        """Configuration de l'optimiseur et du scheduler"""
        self.optimizer = optim.SGD(
            self.model.parameters(),
            lr=learning_rate,
            momentum=momentum,
            weight_decay=weight_decay
        )
        
        # Scheduler pour réduire le learning rate
        self.scheduler = optim.lr_scheduler.StepLR(
            self.optimizer, 
            step_size=30, 
            gamma=0.1
        )
        
        self.criterion = nn.CrossEntropyLoss()
    
    def entrainer_une_epoch(self, train_loader):
        """Entraînement pour une époque"""
        self.model.train()
        running_loss = 0.0
        correct = 0
        total = 0
        
        pbar = tqdm(train_loader, desc='Training')
        for batch_idx, (data, target) in enumerate(pbar):
            data, target = data.to(self.device), target.to(self.device)
            
            # Forward pass
            self.optimizer.zero_grad()
            output = self.model(data)
            loss = self.criterion(output, target)
            
            # Backward pass
            loss.backward()
            self.optimizer.step()
            
            # Statistiques
            running_loss += loss.item()
            _, predicted = output.max(1)
            total += target.size(0)
            correct += predicted.eq(target).sum().item()
            
            # Mise à jour de la barre de progression
            pbar.set_postfix({
                'Loss': f'{running_loss/(batch_idx+1):.3f}',
                'Acc': f'{100.*correct/total:.2f}%'
            })
        
        epoch_loss = running_loss / len(train_loader)
        epoch_acc = 100. * correct / total
        
        return epoch_loss, epoch_acc
    
    def valider(self, val_loader):
        """Validation du modèle"""
        self.model.eval()
        val_loss = 0.0
        correct = 0
        total = 0
        
        with torch.no_grad():
            for data, target in val_loader:
                data, target = data.to(self.device), target.to(self.device)
                output = self.model(data)
                val_loss += self.criterion(output, target).item()
                
                _, predicted = output.max(1)
                total += target.size(0)
                correct += predicted.eq(target).sum().item()
        
        val_loss /= len(val_loader)
        val_acc = 100. * correct / total
        
        return val_loss, val_acc
    
    def entrainer(self, train_loader, val_loader, num_epochs=100):
        """Boucle d'entraînement complète"""
        print(f"Entraînement sur {self.device}")
        print(f"Nombre de paramètres: {sum(p.numel() for p in self.model.parameters())}")
        
        for epoch in range(num_epochs):
            print(f'\nEpoch {epoch+1}/{num_epochs}')
            
            # Entraînement
            train_loss, train_acc = self.entrainer_une_epoch(train_loader)
            
            # Validation
            val_loss, val_acc = self.valider(val_loader)
            
            # Mise à jour du scheduler
            self.scheduler.step()
            
            # Sauvegarde des métriques
            self.train_losses.append(train_loss)
            self.train_accuracies.append(train_acc)
            self.val_losses.append(val_loss)
            self.val_accuracies.append(val_acc)
            
            print(f'Train Loss: {train_loss:.3f}, Train Acc: {train_acc:.2f}%')
            print(f'Val Loss: {val_loss:.3f}, Val Acc: {val_acc:.2f}%')
            print(f'Learning Rate: {self.optimizer.param_groups[0]["lr"]:.6f}')
    
    def visualiser_resultats(self):
        """Visualisation des courbes d'apprentissage"""
        fig, axes = plt.subplots(1, 2, figsize=(15, 5))
        
        # Perte
        axes[0].plot(self.train_losses, label='Train')
        axes[0].plot(self.val_losses, label='Validation')
        axes[0].set_title('Évolution de la perte')
        axes[0].set_xlabel('Epochs')
        axes[0].set_ylabel('Loss')
        axes[0].legend()
        axes[0].grid(True, alpha=0.3)
        
        # Précision
        axes[1].plot(self.train_accuracies, label='Train')
        axes[1].plot(self.val_accuracies, label='Validation')
        axes[1].set_title('Évolution de la précision')
        axes[1].set_xlabel('Epochs')
        axes[1].set_ylabel('Accuracy (%)')
        axes[1].legend()
        axes[1].grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.show()

# Exemple d'utilisation
if __name__ == "__main__":
    # Configuration
    batch_size = 128
    num_epochs = 50
    
    # Transformations de données avec augmentation
    transform_train = transforms.Compose([
        transforms.RandomCrop(32, padding=4),
        transforms.RandomHorizontalFlip(),
        transforms.ToTensor(),
        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))
    ])
    
    transform_test = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))
    ])
    
    # Chargement des données CIFAR-10
    trainset = torchvision.datasets.CIFAR10(
        root='./data', train=True, download=True, transform=transform_train
    )
    trainloader = DataLoader(trainset, batch_size=batch_size, shuffle=True, num_workers=2)
    
    testset = torchvision.datasets.CIFAR10(
        root='./data', train=False, download=True, transform=transform_test
    )
    testloader = DataLoader(testset, batch_size=batch_size, shuffle=False, num_workers=2)
    
    print(f"Dataset chargé: {len(trainset)} exemples d'entraînement, {len(testset)} de test")
    
    # Création du modèle
    model = ResNetPersonnalise(num_classes=10)
    
    # Configuration de l'entraîneur
    entraineur = EntraineurResNet(model)
    entraineur.configurer_optimiseur(learning_rate=0.1)
    
    # Entraînement
    entraineur.entrainer(trainloader, testloader, num_epochs=num_epochs)
    
    # Visualisation des résultats
    entraineur.visualiser_resultats()
    
    print("\nEntraînement terminé !")
  </>);
};

export default DeepLearning;
