
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Lightbulb, 
  Zap, 
  Target, 
  Users, 
  BookOpen, 
  TrendingUp,
  Eye,
  Ear,
  MessageCircle,
  Calculator,
  Cog,
  Sparkles
} from 'lucide-react';
import Hero from '@/components/Hero';
import { AIMemoryTypes } from '@/components/memory/AIMemoryTypes';

const LesBases = () => {
  return (
    <>
      <Hero
        title="Les bases de l'IA"
        subtitle="Découvrez les concepts fondamentaux de l'intelligence artificielle expliqués simplement et de manière accessible à tous."
      />

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Qu'est-ce que l'Intelligence Artificielle ?
              </CardTitle>
              <CardDescription className="text-base">
                L'intelligence artificielle (IA) est la capacité d'une machine à imiter l'intelligence humaine pour effectuer des tâches et s'améliorer de manière autonome.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Apprendre</h3>
                  <p className="text-sm text-muted-foreground">À partir de données et d'expériences</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Raisonner</h3>
                  <p className="text-sm text-muted-foreground">Analyser et tirer des conclusions</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <Zap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Agir</h3>
                  <p className="text-sm text-muted-foreground">Prendre des décisions et résoudre des problèmes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Concepts fondamentaux */}
          <Tabs defaultValue="definition" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="definition">Définitions</TabsTrigger>
              <TabsTrigger value="fonctionnement">Fonctionnement</TabsTrigger>
              <TabsTrigger value="capacites">Capacités</TabsTrigger>
              <TabsTrigger value="exemples">Exemples</TabsTrigger>
            </TabsList>
            
            <TabsContent value="definition" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Intelligence Artificielle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Système informatique capable d'effectuer des tâches qui nécessitent normalement l'intelligence humaine.
                    </p>
                    <Badge variant="outline">Concept général</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Machine Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Méthode qui permet aux machines d'apprendre automatiquement à partir de données.
                    </p>
                    <Badge variant="outline">Sous-domaine de l'IA</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Deep Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Technique utilisant des réseaux de neurones artificiels pour apprendre des patterns complexes.
                    </p>
                    <Badge variant="outline">Sous-domaine du ML</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Cog className="h-5 w-5" />
                      Algorithme
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ensemble d'instructions que suit l'ordinateur pour résoudre un problème spécifique.
                    </p>
                    <Badge variant="outline">Fondement technique</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="fonctionnement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comment l'IA apprend-elle ?</CardTitle>
                  <CardDescription>
                    Processus d'apprentissage automatique expliqué étape par étape
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-semibold">1</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Collecte de données</h3>
                        <p className="text-sm text-muted-foreground">L'IA a besoin de grandes quantités de données pour apprendre. Ces données peuvent être des images, du texte, des sons, etc.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-sm font-semibold">2</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Entraînement</h3>
                        <p className="text-sm text-muted-foreground">L'algorithme analyse les données pour identifier des patterns et des relations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-sm font-semibold">3</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Validation</h3>
                        <p className="text-sm text-muted-foreground">Le modèle est testé sur de nouvelles données pour vérifier ses performances.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-sm font-semibold">4</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Déploiement</h3>
                        <p className="text-sm text-muted-foreground">Une fois validé, le modèle peut être utilisé pour faire des prédictions sur de nouvelles données.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analogie avec l'apprentissage humain</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Comme un enfant qui apprend à reconnaître des animaux :</strong><br/>
                      • Il voit de nombreuses photos d'animaux avec leurs noms<br/>
                      • Il identifie les caractéristiques (oreilles, queue, taille...)<br/>
                      • Il s'entraîne à deviner le nom de nouveaux animaux<br/>
                      • Avec le temps, il devient de plus en plus précis
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="capacites" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <Eye className="h-8 w-8 text-blue-500 mx-auto" />
                    <CardTitle className="text-lg">Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Reconnaître et analyser des images, détecter des objets, lire du texte
                    </p>
                    <Progress value={85} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Niveau de maturité: Avancé</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Ear className="h-8 w-8 text-green-500 mx-auto" />
                    <CardTitle className="text-lg">Audition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comprendre la parole, reconnaître des sons, analyser de la musique
                    </p>
                    <Progress value={90} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Niveau de maturité: Très avancé</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <MessageCircle className="h-8 w-8 text-purple-500 mx-auto" />
                    <CardTitle className="text-lg">Langage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comprendre et générer du texte, traduire, résumer
                    </p>
                    <Progress value={95} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Niveau de maturité: Expert</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Calculator className="h-8 w-8 text-orange-500 mx-auto" />
                    <CardTitle className="text-lg">Calcul</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Résoudre des problèmes mathématiques complexes, optimiser
                    </p>
                    <Progress value={98} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Niveau de maturité: Surhumain</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Target className="h-8 w-8 text-red-500 mx-auto" />
                    <CardTitle className="text-lg">Prédiction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Anticiper des tendances, prévoir des événements
                    </p>
                    <Progress value={70} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Niveau de maturité: En développement</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Users className="h-8 w-8 text-teal-500 mx-auto" />
                    <CardTitle className="text-lg">Interaction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Converser naturellement, comprendre les émotions
                    </p>
                    <Progress value={75} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Niveau de maturité: Avancé</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="exemples" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dans votre quotidien</CardTitle>
                    <CardDescription>L'IA que vous utilisez déjà sans le savoir</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">📱</Badge>
                        <div>
                          <p className="font-medium">Assistant vocal</p>
                          <p className="text-sm text-muted-foreground">Siri, Alexa, Google Assistant</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">🎵</Badge>
                        <div>
                          <p className="font-medium">Recommandations musicales</p>
                          <p className="text-sm text-muted-foreground">Spotify, Apple Music, YouTube</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">🛒</Badge>
                        <div>
                          <p className="font-medium">Suggestions d'achat</p>
                          <p className="text-sm text-muted-foreground">Amazon, Netflix, réseaux sociaux</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">🚗</Badge>
                        <div>
                          <p className="font-medium">Navigation GPS</p>
                          <p className="text-sm text-muted-foreground">Google Maps, Waze</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Applications professionnelles</CardTitle>
                    <CardDescription>L'IA transforme le monde du travail</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">🏥</Badge>
                        <div>
                          <p className="font-medium">Diagnostic médical</p>
                          <p className="text-sm text-muted-foreground">Analyse d'images, détection précoce</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">💰</Badge>
                        <div>
                          <p className="font-medium">Finance</p>
                          <p className="text-sm text-muted-foreground">Détection de fraude, trading</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">🎓</Badge>
                        <div>
                          <p className="font-medium">Éducation</p>
                          <p className="text-sm text-muted-foreground">Apprentissage personnalisé</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5">🏭</Badge>
                        <div>
                          <p className="font-medium">Industrie</p>
                          <p className="text-sm text-muted-foreground">Automatisation, maintenance prédictive</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Section Mémoire dans les systèmes d'IA déplacée depuis Ressources */}
          <div className="mb-8">
            <AIMemoryTypes />
          </div>

          {/* Concepts clés à retenir */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Points clés à retenir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-green-700 dark:text-green-400">✅ Ce que l'IA peut faire</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Traiter de grandes quantités de données rapidement</li>
                    <li>• Identifier des patterns complexes</li>
                    <li>• Automatiser des tâches répétitives</li>
                    <li>• Faire des prédictions basées sur des données</li>
                    <li>• Apprendre et s'améliorer avec l'expérience</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-orange-700 dark:text-orange-400">⚠️ Limites actuelles</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Besoin de beaucoup de données pour bien fonctionner</li>
                    <li>• Difficulté avec des situations totalement nouvelles</li>
                    <li>• Manque de véritable compréhension du monde</li>
                    <li>• Peut reproduire des biais présents dans les données</li>
                    <li>• Résultats parfois difficiles à expliquer</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <Card className="mt-8 text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Prêt à en apprendre plus ?</h3>
              <p className="text-muted-foreground mb-4">
                Explorez nos autres sections pour approfondir vos connaissances
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Types d'IA
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Cas d'usage
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Ressources
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default LesBases;
