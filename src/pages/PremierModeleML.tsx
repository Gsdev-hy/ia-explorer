
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, BookOpen, ChevronRight, Database, LineChart, Settings, ArrowRight } from 'lucide-react';

/**
 * Page du cours sur la création d'un premier modèle de machine learning
 * @returns {JSX.Element} Le composant de la page
 */
const PremierModeleML = () => {
  return (
    <>
      <Hero
        title="Construire son Premier Modèle de Machine Learning (pas à pas)"
        subtitle="Un guide pratique pour développer et déployer votre premier modèle d'apprentissage automatique"
      />

      <section className="section-container mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <SectionHeading title="À propos de ce cours" />
              <p className="text-lg mb-4">
                Ce cours pratique vous guide étape par étape dans la création de votre premier modèle de machine learning, de l'analyse initiale des données jusqu'au déploiement d'une solution fonctionnelle.
              </p>
              <p className="mb-4">
                Conçu comme un parcours complet, chaque module vous permettra d'acquérir les compétences nécessaires pour mener à bien un projet de machine learning de bout en bout, avec des exemples concrets et des cas d'usage réels.
              </p>
            </div>

            <div className="mb-8">
              <SectionHeading title="Ce que vous apprendrez" />
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les étapes clés d'un projet de machine learning complet</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'exploration, la préparation et le prétraitement des données</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La sélection, l'entraînement et l'évaluation de modèles avec scikit-learn</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'optimisation des hyperparamètres et l'amélioration de la performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Le déploiement et la maintenance de modèles en production</span>
                </li>
              </ul>
            </div>

            <div>
              <SectionHeading title="Plan du cours" />
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Module 1: Définition du problème et collecte des données
                    </h3>
                    <p className="text-muted-foreground">Formulation du problème, identification des sources de données, stratégies de collecte et considérations éthiques.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Module 2: Exploration et visualisation des données
                    </h3>
                    <p className="text-muted-foreground">Techniques d'analyse exploratoire, statistiques descriptives, visualisations pertinentes et identification des patterns.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Module 3: Préparation et prétraitement des données
                    </h3>
                    <p className="text-muted-foreground">Nettoyage des données, gestion des valeurs manquantes, encodage des variables catégorielles et normalisation.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      Module 4: Sélection de caractéristiques et feature engineering
                    </h3>
                    <p className="text-muted-foreground">Techniques de sélection de variables, création de nouvelles caractéristiques et transformation de données.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-primary" />
                      Module 5: Construction et entraînement du modèle
                    </h3>
                    <p className="text-muted-foreground">Choix de l'algorithme, split des données, entraînement du modèle et validation croisée.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Module 6: Évaluation et optimisation
                    </h3>
                    <p className="text-muted-foreground">Métriques d'évaluation, analyse des erreurs, optimisation des hyperparamètres et techniques avancées.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      Module 7: Déploiement et maintenance
                    </h3>
                    <p className="text-muted-foreground">Sérialisation du modèle, création d'API, déploiement en production et surveillance de la performance.</p>
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
                    <p>Intermédiaire</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Durée</h4>
                    <p>6 semaines (3-5 heures/semaine)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Prérequis</h4>
                    <p>Connaissance de base en Python et familiarité avec les concepts fondamentaux de statistiques et d'analyse de données.</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Ressources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Guide pas-à-pas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        <span>Jeux de données d'exemple</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        <span>Notebooks commentés</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        <span>Projet complet</span>
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

export default PremierModeleML;
