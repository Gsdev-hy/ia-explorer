
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BookOpen, ChevronRight, BarChart, Network, Layers } from 'lucide-react';

/**
 * Page du cours sur les bases du Deep Learning
 * @returns {JSX.Element} Le composant de la page
 */
const DeepLearning = () => {
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

            <div>
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
