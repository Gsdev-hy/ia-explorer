
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Code, BookOpen, PlayCircle, FileText, ChevronRight } from 'lucide-react';

/**
 * Page du cours d'initiation à Python pour l'IA
 * @returns {JSX.Element} Le composant de la page
 */
const PythonIA = () => {
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

            <div>
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
