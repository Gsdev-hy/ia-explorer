
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, BookOpen, ChevronRight, FileText, MessageCircle, BarChart } from 'lucide-react';

/**
 * Page du cours sur le Traitement du Langage Naturel
 * @returns {JSX.Element} Le composant de la page
 */
const NLPConcepts = () => {
  return (
    <>
      <Hero
        title="Traitement du Langage Naturel (NLP) : Concepts et Outils"
        subtitle="Maîtrisez les techniques modernes de compréhension et génération automatique du langage"
      />

      <section className="section-container mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <SectionHeading title="À propos de ce cours" />
              <p className="text-lg mb-4">
                Le traitement du langage naturel (NLP) est l'un des domaines les plus dynamiques de l'intelligence artificielle. Ce cours vous présente les concepts fondamentaux et les techniques avancées qui permettent aux machines de comprendre et de générer du langage humain.
              </p>
              <p className="mb-4">
                Des modèles de type transformer comme BERT et GPT aux techniques d'embedding et d'analyse sémantique, vous découvrirez comment développer des applications puissantes qui interagissent avec le langage naturel de façon intelligente.
              </p>
            </div>

            <div className="mb-8">
              <SectionHeading title="Ce que vous apprendrez" />
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les fondements théoriques du traitement automatique du langage</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les techniques de prétraitement et de tokenisation du texte</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les modèles d'embedding et de représentation vectorielle des mots</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'architecture et le fonctionnement des modèles transformer</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La mise en œuvre de projets NLP concrets (classification, génération, QA)</span>
                </li>
              </ul>
            </div>

            <div>
              <SectionHeading title="Plan du cours" />
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Module 1: Introduction au NLP
                    </h3>
                    <p className="text-muted-foreground">Histoire du NLP, applications modernes, défis particuliers et opportunités actuelles.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Module 2: Prétraitement et tokenisation du texte
                    </h3>
                    <p className="text-muted-foreground">Nettoyage de texte, normalisation, tokenisation par mots et sous-mots, stemming et lemmatisation.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Module 3: Représentation vectorielle du texte
                    </h3>
                    <p className="text-muted-foreground">Bag of words, TF-IDF, word embeddings (Word2Vec, GloVe, FastText) et contextual embeddings.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Module 4: Les modèles transformer et l'attention
                    </h3>
                    <p className="text-muted-foreground">Architecture transformer, mécanisme d'attention, modèles BERT, GPT et leurs variantes.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Module 5: Classification de texte et analyse de sentiment
                    </h3>
                    <p className="text-muted-foreground">Techniques de classification, fine-tuning de modèles préentraînés, analyse de sentiment et d'émotion.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Module 6: Génération de texte et résumé automatique
                    </h3>
                    <p className="text-muted-foreground">Modèles génératifs, techniques de décoding, évaluation de texte généré et résumé extractif vs abstractif.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Module 7: Question-réponse et dialogue
                    </h3>
                    <p className="text-muted-foreground">Systèmes de QA, extraction d'information, chatbots et agents conversationnels avancés.</p>
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
                    <p>Intermédiaire à Avancé</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Durée</h4>
                    <p>7 semaines (4-6 heures/semaine)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Prérequis</h4>
                    <p>Bonnes connaissances en Python et expérience de base en Deep Learning. Une familiarité avec PyTorch ou TensorFlow est recommandée.</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Ressources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Matériel de cours complet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Notebooks pratiques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Exemples de code annotés</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span>Projets d'application réels</span>
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

export default NLPConcepts;
