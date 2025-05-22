
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Code, BookOpen, PlayCircle, FileText, ChevronRight, Terminal, Database, BarChart } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';

/**
 * Page du cours d'initiation à Python pour l'IA
 * @returns {JSX.Element} Le composant de la page
 */
const PythonIA = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "Quelle est la syntaxe correcte pour créer une liste en Python?",
      options: [
        "array(1, 2, 3)",
        "[1, 2, 3]",
        "{1, 2, 3}",
        "(1, 2, 3)"
      ],
      correctAnswer: 1,
      explanation: "En Python, une liste est définie à l'aide de crochets [ ]. Les accolades { } sont utilisées pour les ensembles ou les dictionnaires, et les parenthèses ( ) pour les tuples."
    },
    {
      question: "Quelle bibliothèque Python est principalement utilisée pour la manipulation de tableaux numériques en IA?",
      options: [
        "Pandas",
        "Matplotlib",
        "NumPy",
        "Scikit-learn"
      ],
      correctAnswer: 2,
      explanation: "NumPy est la bibliothèque fondamentale pour le calcul scientifique en Python, fournissant des structures de données efficaces pour les tableaux multidimensionnels essentiels au traitement des données en IA."
    },
    {
      question: "Comment importer correctement la bibliothèque Pandas avec son alias conventionnel?",
      options: [
        "import pandas",
        "import pandas as pd",
        "from pandas import *",
        "require pandas"
      ],
      correctAnswer: 1,
      explanation: "La convention en Python est d'importer Pandas avec l'alias 'pd' pour faciliter l'écriture du code tout en indiquant clairement l'origine des fonctions."
    },
    {
      question: "Quelle instruction Python suivante est correcte pour créer une fonction?",
      options: [
        "function maFonction():",
        "def maFonction():",
        "create maFonction():",
        "func maFonction():"
      ],
      correctAnswer: 1,
      explanation: "En Python, le mot-clé 'def' est utilisé pour définir une fonction, suivi du nom de la fonction et de parenthèses pour les paramètres."
    },
    {
      question: "Quelle bibliothèque Python est utilisée pour créer des visualisations de données?",
      options: [
        "NumPy",
        "Scikit-learn",
        "Pandas",
        "Matplotlib"
      ],
      correctAnswer: 3,
      explanation: "Matplotlib est la bibliothèque de visualisation standard en Python, utilisée pour créer des graphiques statiques, interactifs et informatifs."
    }
  ];

  return (
    <>
      <Hero
        title="Initiation à Python pour l'Intelligence Artificielle"
        subtitle="Apprenez les bases de la programmation Python spécifiquement orientées vers les applications d'IA"
      />

      <section className="section-container mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <SectionHeading title="À propos de ce cours" />
              <p className="text-lg mb-4">
                Python est devenu le langage de programmation de choix pour le développement d'applications d'intelligence artificielle. Ce cours vous guidera à travers les concepts fondamentaux de Python, spécifiquement orientés vers l'utilisation dans le domaine de l'IA.
              </p>
              <p className="mb-4">
                Que vous soyez débutant en programmation ou que vous souhaitiez approfondir vos connaissances en Python pour l'IA, ce cours vous fournira les compétences essentielles pour commencer à développer vos propres solutions d'IA.
              </p>
            </div>

            <div className="mb-8">
              <SectionHeading title="Ce que vous apprendrez" />
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les bases de la syntaxe Python et les structures de données essentielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La manipulation de données avec NumPy et Pandas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La visualisation de données avec Matplotlib et Seaborn</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'introduction aux bibliothèques d'IA comme scikit-learn</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Des projets pratiques pour consolider vos connaissances</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <SectionHeading title="Plan du cours" />
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 1: Introduction à Python et à son écosystème
                    </h3>
                    <p className="text-muted-foreground">Installation de Python, premiers scripts, variables, types de données, et opérateurs.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 2: Structures de données et contrôle de flux
                    </h3>
                    <p className="text-muted-foreground">Listes, dictionnaires, tuples, sets, conditions, boucles et fonctions.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 3: Programmation orientée objet en Python
                    </h3>
                    <p className="text-muted-foreground">Classes, objets, héritage, encapsulation et bonnes pratiques de programmation.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 4: NumPy et manipulation de tableaux
                    </h3>
                    <p className="text-muted-foreground">Tableaux NumPy, opérations mathématiques et manipulation de données multidimensionnelles.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 5: Pandas pour l'analyse de données
                    </h3>
                    <p className="text-muted-foreground">DataFrames, séries, importation/exportation de données et prétraitement pour l'IA.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 6: Visualisation de données et introduction à scikit-learn
                    </h3>
                    <p className="text-muted-foreground">Matplotlib, Seaborn et premiers pas avec scikit-learn pour l'apprentissage automatique.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contenu détaillé des leçons */}
            <LessonSection title="Introduction à Python et son écosystème" icon={<Terminal size={24} />} delay={1}>
              <p>
                Python est aujourd'hui l'un des langages les plus utilisés dans le domaine de l'intelligence artificielle en raison de sa syntaxe claire, sa facilité d'apprentissage et son vaste écosystème de bibliothèques spécialisées.
              </p>
              
              <ZoomOn title="Pourquoi Python pour l'IA ?">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Syntaxe claire et intuitive qui facilite l'implémentation rapide d'idées</li>
                  <li>Écosystème riche de bibliothèques dédiées à l'IA (NumPy, Pandas, scikit-learn, TensorFlow, PyTorch)</li>
                  <li>Grande communauté qui développe et maintient des outils open-source</li>
                  <li>Intégration facile avec d'autres technologies et systèmes</li>
                </ul>
              </ZoomOn>

              <CodeExample 
                title="Votre premier script Python"
                language="python"
                code={`# Un simple programme pour illustrer la syntaxe Python
print("Bienvenue dans le cours Python pour l'IA !")

# Variables et types de données
nom = "Python"
version = 3.9
est_puissant = True

# Affichage formaté
print(f"{nom} version {version} est un langage puissant : {est_puissant}")

# Une simple fonction
def saluer(nom):
    return f"Bonjour, {nom} !"

# Appel de la fonction
message = saluer("développeur IA")
print(message)`}
                explanation="Ce script simple illustre la syntaxe de base de Python, y compris les variables, types de données, f-strings et fonctions."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Développeur travaillant sur du code Python"
                caption="Python est un langage accessible aux débutants tout en étant puissant pour les applications avancées"
                width="2/3"
              />
            </LessonSection>

            <LessonSection title="Structures de données pour l'IA" icon={<Database size={24} />} delay={2}>
              <p>
                Les structures de données sont fondamentales en Python, particulièrement pour l'IA où la manipulation efficace des données est essentielle. Python offre plusieurs types de structures de données intégrées qui sont couramment utilisées dans les applications d'IA.
              </p>

              <CodeExample 
                title="Structures de données essentielles"
                language="python"
                code={`# Listes - collection ordonnée et modifiable
features = ["taille", "poids", "âge", "revenu"]
print(f"Première caractéristique : {features[0]}")

# Dictionnaires - collection de paires clé-valeur
modele = {
    "nom": "Random Forest",
    "précision": 0.92,
    "hyperparamètres": {
        "n_estimators": 100,
        "max_depth": 10
    }
}
print(f"Précision du modèle : {modele['précision']}")

# Tuples - collection ordonnée et non modifiable
dimensions = (1920, 1080)  # Résolution d'image
print(f"Largeur de l'image : {dimensions[0]}px")

# Sets - collection non ordonnée sans doublons
categories = {"sport", "politique", "technologie", "santé"}
print(f"Nombre de catégories : {len(categories)}")

# Compréhension de liste - création de liste concise
carrés = [x**2 for x in range(5)]
print(f"Carrés des 5 premiers nombres : {carrés}")
`}
                explanation="Ces structures de données sont essentielles pour stocker et manipuler les données en Python, particulièrement dans le contexte de l'IA."
              />

              <ZoomOn title="NumPy : la fondation des bibliothèques de calcul scientifique">
                <p>
                  NumPy est la bibliothèque fondamentale pour le calcul scientifique en Python. Elle fournit :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Des tableaux N-dimensionnels efficaces (ndarray)</li>
                  <li>Des fonctions mathématiques sophistiquées pour opérer sur ces tableaux</li>
                  <li>Des outils pour intégrer du code C/C++ et Fortran</li>
                  <li>Une algèbre linéaire, transformée de Fourier, et génération de nombres aléatoires</li>
                </ul>
                <p className="mt-2">
                  NumPy sert de base à presque toutes les bibliothèques d'IA en Python comme Pandas, scikit-learn, TensorFlow et PyTorch.
                </p>
              </ZoomOn>

              <CodeExample 
                title="Manipulation de données avec NumPy"
                language="python"
                code={`import numpy as np

# Création d'un tableau NumPy à partir d'une liste
arr = np.array([1, 2, 3, 4, 5])
print("Tableau NumPy:", arr)

# Opérations vectorisées (rapides et efficaces)
print("Tableau multiplié par 2:", arr * 2)
print("Carré de chaque élément:", arr ** 2)
print("Somme des éléments:", np.sum(arr))

# Création d'une matrice 2D
matrice = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Matrice:\n", matrice)
print("Forme de la matrice:", matrice.shape)

# Opérations matricielles
print("Transposée de la matrice:\n", matrice.T)

# Génération de données aléatoires (utile pour l'initialisation en IA)
donnees_aleatoires = np.random.randn(3, 3)  # Échantillons de distribution normale
print("Données aléatoires:\n", donnees_aleatoires)`}
                explanation="NumPy permet de manipuler efficacement des tableaux multidimensionnels, ce qui est essentiel pour les applications d'IA."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Visualisation de données sous forme de matrices et tableaux"
                caption="NumPy permet de manipuler efficacement des données multidimensionnelles"
                width="2/3"
              />
            </LessonSection>

            <LessonSection title="Visualisation des données avec Python" icon={<BarChart size={24} />} delay={3}>
              <p>
                La visualisation des données est une étape cruciale dans le développement de solutions d'IA. Python offre d'excellentes bibliothèques comme Matplotlib et Seaborn pour créer des visualisations informatives et esthétiques.
              </p>

              <CodeExample 
                title="Visualisation avec Matplotlib"
                language="python"
                code={`import matplotlib.pyplot as plt
import numpy as np

# Générer des données
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Créer une figure avec deux sous-graphiques
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

# Premier graphique - courbe sinusoïdale
ax1.plot(x, y1, 'b-', linewidth=2, label='sin(x)')
ax1.set_title('Fonction Sinus')
ax1.set_xlabel('x')
ax1.set_ylabel('sin(x)')
ax1.grid(True)
ax1.legend()

# Deuxième graphique - courbe cosinus
ax2.plot(x, y2, 'r-', linewidth=2, label='cos(x)')
ax2.set_title('Fonction Cosinus')
ax2.set_xlabel('x')
ax2.set_ylabel('cos(x)')
ax2.grid(True)
ax2.legend()

# Ajuster l'espacement
plt.tight_layout()

# Afficher le graphique
plt.show()`}
                explanation="Matplotlib permet de créer des visualisations personnalisables de données scientifiques et est largement utilisé dans l'analyse de données pour l'IA."
              />

              <ZoomOn title="Pandas pour l'analyse de données">
                <p>
                  Pandas est une bibliothèque Python essentielle pour la manipulation et l'analyse de données, offrant des structures de données comme les DataFrames qui sont parfaites pour travailler avec des données tabulaires.
                </p>
                <p className="mt-2">
                  Avantages principaux de Pandas :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Manipulation intuitive des données avec les DataFrames</li>
                  <li>Fonctions puissantes pour la fusion, le filtrage et la transformation de données</li>
                  <li>Gestion efficace des valeurs manquantes</li>
                  <li>Outils intégrés pour la lecture et l'écriture de divers formats de fichiers (CSV, Excel, SQL, etc.)</li>
                  <li>Intégration facile avec d'autres bibliothèques d'analyse de données et d'apprentissage automatique</li>
                </ul>
              </ZoomOn>

              <CodeExample 
                title="Analyse de données avec Pandas"
                language="python"
                code={`import pandas as pd
import matplotlib.pyplot as plt

# Créer un DataFrame
donnees = {
    'nom': ['Alice', 'Bob', 'Charlie', 'David', 'Emma'],
    'age': [25, 30, 35, 40, 45],
    'ville': ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille'],
    'score_test': [85, 92, 78, 95, 88]
}
df = pd.DataFrame(donnees)

# Afficher les premières lignes
print("Aperçu des données:")
print(df.head())

# Statistiques descriptives
print("\\nStatistiques descriptives:")
print(df.describe())

# Filtrage des données
print("\\nPersonnes de plus de 30 ans:")
print(df[df['age'] > 30])

# Groupement et agrégation
print("\\nScore moyen par ville:")
print(df.groupby('ville')['score_test'].mean())

# Visualisation avec Pandas (qui utilise Matplotlib)
df.plot(kind='bar', x='nom', y='score_test', title='Scores par personne')
plt.tight_layout()
plt.show()

# Créer un graphique à secteurs pour la distribution des villes
df['ville'].value_counts().plot(kind='pie', autopct='%1.1f%%')
plt.title('Distribution des villes')
plt.ylabel('')  # Masquer le label de l'axe y
plt.show()`}
                explanation="Pandas est indispensable pour la préparation et l'analyse des données avant de les utiliser dans des modèles d'IA."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Visualisation de données avec graphiques"
                caption="La visualisation est essentielle pour comprendre les tendances et relations dans les données"
                width="2/3"
              />
            </LessonSection>

            {/* Quiz du cours */}
            <CourseQuiz
              title="Quiz : Python pour l'Intelligence Artificielle"
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
                    <p>Débutant à Intermédiaire</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Durée</h4>
                    <p>6 semaines (3-5 heures/semaine)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Prérequis</h4>
                    <p>Aucune expérience en programmation requise, mais une familiarité avec les concepts informatiques de base est un plus.</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Ressources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Notes de cours complètes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span>Exercices pratiques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-primary" />
                        <span>Vidéos tutorielles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Projets guidés</span>
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

export default PythonIA;
