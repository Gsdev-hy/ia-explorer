
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BookOpen, ChevronRight, BarChart, Network, Layers, Code } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';

/**
 * Page du cours sur les bases du Deep Learning
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

  return (
    <>
      <Hero
        title="Les Bases du Deep Learning avec TensorFlow ou PyTorch"
        subtitle="Découvrez les fondamentaux des réseaux de neurones profonds et maîtrisez les frameworks les plus populaires"
      />

      <section className="section-container mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <SectionHeading title="À propos de ce cours" />
              <p className="text-lg mb-4">
                Le Deep Learning a révolutionné le domaine de l'intelligence artificielle ces dernières années. Ce cours vous guide à travers les concepts fondamentaux du Deep Learning et vous apprend à utiliser TensorFlow et PyTorch, les deux frameworks les plus populaires dans l'industrie.
              </p>
              <p className="mb-4">
                Vous découvrirez comment fonctionnent les réseaux de neurones profonds, comment les entraîner efficacement, et comment les appliquer à des problèmes concrets comme la classification d'images, la reconnaissance de texte ou la génération de contenu.
              </p>
            </div>

            <div className="mb-8">
              <SectionHeading title="Ce que vous apprendrez" />
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les concepts fondamentaux des réseaux de neurones et du Deep Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La création et l'entraînement de modèles avec TensorFlow et Keras</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Le développement de réseaux de neurones avec PyTorch</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'optimisation et le déploiement de modèles de Deep Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Des projets pratiques dans la vision par ordinateur et le traitement du langage</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <SectionHeading title="Plan du cours" />
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      Module 1: Introduction au Deep Learning
                    </h3>
                    <p className="text-muted-foreground">Histoire, applications actuelles, concepts de base et différence avec le machine learning traditionnel.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Network className="h-5 w-5 text-primary" />
                      Module 2: Architecture des réseaux de neurones
                    </h3>
                    <p className="text-muted-foreground">Perceptrons, réseaux multicouches, fonctions d'activation, propagation avant et rétropropagation.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      Module 3: Premiers pas avec TensorFlow et Keras
                    </h3>
                    <p className="text-muted-foreground">Installation, structure de base, tenseurs, création et entraînement de modèles simples.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      Module 4: Développement avec PyTorch
                    </h3>
                    <p className="text-muted-foreground">Tenseurs PyTorch, autograd, création de modèles personnalisés et entraînement.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Module 5: Réseaux convolutifs (CNN) pour la vision par ordinateur
                    </h3>
                    <p className="text-muted-foreground">Convolutions, pooling, architectures populaires (VGG, ResNet) et transfer learning.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Network className="h-5 w-5 text-primary" />
                      Module 6: Réseaux récurrents (RNN) et traitement de séquences
                    </h3>
                    <p className="text-muted-foreground">RNN, LSTM, GRU et applications en traitement du langage naturel et séries temporelles.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      Module 7: Optimisation et déploiement
                    </h3>
                    <p className="text-muted-foreground">Hyperparamètres, régularisation, optimiseurs avancés, quantification et déploiement de modèles.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contenu détaillé des leçons */}
            <LessonSection title="Fondamentaux du Deep Learning" icon={<Brain size={24} />} delay={1}>
              <p>
                Le Deep Learning (apprentissage profond) est une branche du Machine Learning qui utilise des réseaux de neurones avec plusieurs couches cachées pour modéliser des abstractions de haut niveau dans les données.
              </p>
              
              <Illustration 
                src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Réseau de neurones connectés, représentation visuelle du deep learning"
                caption="Le Deep Learning s'inspire du fonctionnement du cerveau humain avec des couches de neurones interconnectés"
                width="2/3"
              />
              
              <ZoomOn title="Deep Learning vs Machine Learning classique">
                <p>
                  Le Deep Learning se distingue du Machine Learning classique par plusieurs aspects fondamentaux :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Extraction automatique des caractéristiques :</strong> Contrairement au ML classique qui nécessite une ingénierie manuelle des caractéristiques, le DL extrait automatiquement les caractéristiques pertinentes.
                  </li>
                  <li>
                    <strong>Capacités de représentation :</strong> Les modèles profonds peuvent apprendre des représentations hiérarchiques complexes des données.
                  </li>
                  <li>
                    <strong>Volume de données :</strong> Le DL nécessite généralement de plus grands volumes de données pour être efficace.
                  </li>
                  <li>
                    <strong>Ressources computationnelles :</strong> L'entraînement des modèles de DL exige des ressources de calcul significativement plus importantes (GPU, TPU).
                  </li>
                </ul>
              </ZoomOn>
              
              <p className="mt-4">
                Un réseau de neurones profond est composé de plusieurs couches de neurones artificiels, où chaque neurone calcule une fonction des entrées qu'il reçoit, puis applique une fonction d'activation non linéaire au résultat.
              </p>

              <CodeExample 
                title="Neurone artificiel en Python"
                language="python"
                code={`import numpy as np

class Neurone:
    def __init__(self, nb_entrees):
        # Initialisation aléatoire des poids
        self.poids = np.random.randn(nb_entrees) * 0.1
        self.biais = np.random.randn() * 0.1
        
    def fonction_activation_sigmoid(self, x):
        # Fonction d'activation sigmoid
        return 1 / (1 + np.exp(-x))
    
    def forward(self, entrees):
        # Calcul de la somme pondérée
        somme = np.dot(entrees, self.poids) + self.biais
        # Application de la fonction d'activation
        sortie = self.fonction_activation_sigmoid(somme)
        return sortie

# Exemple d'utilisation
nb_entrees = 3
neurone = Neurone(nb_entrees)
entrees = np.array([0.5, 0.3, 0.2])
sortie = neurone.forward(entrees)

print(f"Entrées: {entrees}")
print(f"Poids: {neurone.poids}")
print(f"Biais: {neurone.biais}")
print(f"Sortie: {sortie}")`}
                explanation="Ce code illustre le fonctionnement basique d'un neurone artificiel avec une fonction d'activation sigmoid. Dans un réseau de neurones profond, ces neurones sont organisés en couches."
              />
            </LessonSection>

            <LessonSection title="Introduction à TensorFlow et Keras" icon={<Layers size={24} />} delay={2}>
              <p>
                TensorFlow est une bibliothèque open-source développée par Google pour l'apprentissage automatique et le deep learning. Keras est une API de haut niveau qui s'exécute sur TensorFlow, rendant la construction et l'entraînement de modèles plus simple et plus intuitive.
              </p>

              <ZoomOn title="Points forts de TensorFlow">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Écosystème complet pour le développement et le déploiement de modèles</li>
                  <li>TensorBoard pour la visualisation et le monitoring</li>
                  <li>TensorFlow Lite pour le déploiement sur appareils mobiles et embarqués</li>
                  <li>TensorFlow Serving pour le déploiement en production</li>
                  <li>Support solide de l'industrie et grande communauté</li>
                </ul>
              </ZoomOn>

              <CodeExample 
                title="Premier modèle avec TensorFlow et Keras"
                language="python"
                code={`import tensorflow as tf
from tensorflow import keras
import numpy as np

# Charger le dataset MNIST
mnist = keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Prétraitement des données
x_train = x_train / 255.0
x_test = x_test / 255.0

# Construire un modèle simple
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),  # Aplatir l'image 28x28 en un vecteur 784
    keras.layers.Dense(128, activation='relu'),   # Couche cachée avec 128 neurones et activation ReLU
    keras.layers.Dropout(0.2),                   # Dropout pour réduire l'overfitting
    keras.layers.Dense(10, activation='softmax')  # Couche de sortie pour les 10 classes (chiffres 0-9)
])

# Compiler le modèle
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Résumé du modèle
model.summary()

# Entraîner le modèle
model.fit(x_train, y_train, epochs=5, validation_data=(x_test, y_test))

# Évaluer le modèle
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f'Précision sur l\'ensemble de test: {test_acc}')`}
                explanation="Ce code montre comment construire un réseau de neurones simple pour la classification des chiffres manuscrits MNIST avec TensorFlow et Keras."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Interface de développement avec du code TensorFlow"
                caption="TensorFlow et Keras simplifient considérablement la construction de modèles de deep learning"
                width="2/3"
              />

              <p className="mt-4">
                L'un des grands avantages de Keras est sa simplicité d'utilisation. En quelques lignes de code, vous pouvez construire des architectures complexes comme des réseaux convolutifs (CNN) ou récurrents (RNN).
              </p>
            </LessonSection>

            <LessonSection title="Développement avec PyTorch" icon={<Code size={24} />} delay={3}>
              <p>
                PyTorch est un framework de deep learning développé par Facebook qui est devenu très populaire dans la communauté de recherche en IA en raison de sa flexibilité et de sa facilité de débogage.
              </p>

              <ZoomOn title="Points forts de PyTorch">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Approche impérative (définition dynamique des graphes de calcul)</li>
                  <li>Syntaxe proche de NumPy et intuitive</li>
                  <li>Facilité de débogage (comme du Python standard)</li>
                  <li>Communauté de recherche très active, nombreuses implémentations d'articles récents</li>
                  <li>TorchScript pour la portabilité et l'optimisation des modèles</li>
                </ul>
              </ZoomOn>

              <CodeExample 
                title="Premier modèle avec PyTorch"
                language="python"
                code={`import torch
import torch.nn as nn
import torch.optim as optim
import torchvision
import torchvision.transforms as transforms

# Paramètres
batch_size = 64
learning_rate = 0.01
num_epochs = 5

# Préparation des données MNIST
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.1307,), (0.3081,))
])

train_dataset = torchvision.datasets.MNIST(
    root='./data', 
    train=True, 
    transform=transform, 
    download=True
)
test_dataset = torchvision.datasets.MNIST(
    root='./data', 
    train=False, 
    transform=transform
)

train_loader = torch.utils.data.DataLoader(
    dataset=train_dataset, 
    batch_size=batch_size, 
    shuffle=True
)
test_loader = torch.utils.data.DataLoader(
    dataset=test_dataset, 
    batch_size=batch_size, 
    shuffle=False
)

# Définir le modèle
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28*28, 128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, 10)
        )
        
    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits

# Instancier le modèle et définir la fonction de perte et l'optimiseur
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = SimpleNN().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=learning_rate)

# Boucle d'entraînement
for epoch in range(num_epochs):
    for i, (images, labels) in enumerate(train_loader):
        images = images.to(device)
        labels = labels.to(device)
        
        # Forward pass
        outputs = model(images)
        loss = criterion(outputs, labels)
        
        # Backward et optimize
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        if (i+1) % 100 == 0:
            print(f'Epoch [{epoch+1}/{num_epochs}], Step [{i+1}/{len(train_loader)}], Loss: {loss.item():.4f}')

# Évaluation du modèle
model.eval()
with torch.no_grad():
    correct = 0
    total = 0
    for images, labels in test_loader:
        images = images.to(device)
        labels = labels.to(device)
        outputs = model(images)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()
    
    print(f'Précision du modèle sur 10000 images de test: {100 * correct / total:.2f}%')`}
                explanation="Ce code illustre la création et l'entraînement d'un réseau de neurones simple pour la classification des chiffres MNIST avec PyTorch."
              />

              <p className="mt-4">
                PyTorch se distingue par son approche "define-by-run" qui permet de modifier dynamiquement le graphe de calcul pendant l'exécution, ce qui facilite l'expérimentation et le prototypage de nouvelles architectures.
              </p>

              <Illustration 
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Visualisation d'un réseau de neurones convolutif"
                caption="PyTorch facilite l'implémentation et le prototypage d'architectures avancées comme les CNN"
                width="2/3"
              />
            </LessonSection>

            {/* Quiz du cours */}
            <CourseQuiz
              title="Quiz : Les bases du Deep Learning"
              questions={quizQuestions}
            />

          </div>

          <div className="md:w-1/3">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Informations sur le cours</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Auteur</h4>
                    <p>Geoffroy Streit</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Niveau</h4>
                    <p>Intermédiaire</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Durée</h4>
                    <p>8 semaines (4-6 heures/semaine)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Prérequis</h4>
                    <p>Connaissance de base en Python et notions fondamentales d'algèbre linéaire et de calcul différentiel.</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Ressources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Notes de cours détaillées</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary" />
                        <span>Notebooks Jupyter</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-primary" />
                        <span>Projets guidés</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary" />
                        <span>Visualisations interactives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeepLearning;
