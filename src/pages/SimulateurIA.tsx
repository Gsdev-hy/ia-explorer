
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Image, Type, BarChart3, Zap, User, Clock } from 'lucide-react';
import Hero from '@/components/Hero';

const SimulateurIA = () => {
  const [imagePrompt, setImagePrompt] = useState('');
  const [textPrompt, setTextPrompt] = useState('');
  const [classificationText, setClassificationText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>({});

  const simulateImageGeneration = async () => {
    if (!imagePrompt.trim()) return;
    
    setIsProcessing(true);
    
    // Simulation du processus de génération d'image
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResults(prev => ({
      ...prev,
      image: {
        prompt: imagePrompt,
        result: "Image générée avec succès ! (Simulation)",
        confidence: 92,
        processingTime: "2.1s"
      }
    }));
    
    setIsProcessing(false);
  };

  const simulateTextGeneration = async () => {
    if (!textPrompt.trim()) return;
    
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const responses = [
      "L'intelligence artificielle est une technologie fascinante qui transforme notre monde...",
      "Dans un futur proche, les IA pourront nous aider à résoudre des problèmes complexes...",
      "L'apprentissage automatique permet aux machines d'apprendre à partir de données..."
    ];
    
    setResults(prev => ({
      ...prev,
      text: {
        prompt: textPrompt,
        result: responses[Math.floor(Math.random() * responses.length)],
        confidence: 88,
        processingTime: "1.5s"
      }
    }));
    
    setIsProcessing(false);
  };

  const simulateClassification = async () => {
    if (!classificationText.trim()) return;
    
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const categories = [
      { name: "Positif", confidence: 75 },
      { name: "Neutre", confidence: 20 },
      { name: "Négatif", confidence: 5 }
    ];
    
    setResults(prev => ({
      ...prev,
      classification: {
        text: classificationText,
        categories,
        processingTime: "1.0s"
      }
    }));
    
    setIsProcessing(false);
  };

  return (
    <>
      <Hero
        title="Simulateur d'IA"
        subtitle="Testez et comprenez le fonctionnement de différents concepts d'intelligence artificielle de manière interactive et éducative."
      />

      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Header avec info auteur */}
          <Card className="mb-8 bg-gradient-to-r from-primary/5 to-blue-50 dark:to-blue-950/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Créé par Geoffroy Streit</CardTitle>
                  <CardDescription>
                    Outil éducatif pour explorer les concepts fondamentaux de l'IA
                  </CardDescription>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ce simulateur vous permet d'expérimenter avec différents types d'IA sans avoir besoin de connaissances techniques approfondies. 
                Parfait pour comprendre le fonctionnement des modèles d'IA modernes.
              </p>
            </CardHeader>
          </Card>

          <Tabs defaultValue="generation-images" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="generation-images" className="gap-2">
                <Image className="h-4 w-4" />
                Génération d'images
              </TabsTrigger>
              <TabsTrigger value="generation-texte" className="gap-2">
                <Type className="h-4 w-4" />
                Génération de texte
              </TabsTrigger>
              <TabsTrigger value="classification" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Classification
              </TabsTrigger>
            </TabsList>

            <TabsContent value="generation-images" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Image className="h-5 w-5" />
                    Génération d'images par IA
                  </CardTitle>
                  <CardDescription>
                    Simulez le processus de génération d'images à partir d'une description textuelle
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description de l'image</label>
                    <Textarea
                      placeholder="Ex: Un chat orange qui joue dans un jardin fleuri au coucher du soleil"
                      value={imagePrompt}
                      onChange={(e) => setImagePrompt(e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={simulateImageGeneration} 
                    disabled={isProcessing || !imagePrompt.trim()}
                    className="w-full"
                  >
                    {isProcessing ? (
                      <>
                        <Zap className="h-4 w-4 mr-2 animate-spin" />
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        <Brain className="h-4 w-4 mr-2" />
                        Générer l'image
                      </>
                    )}
                  </Button>

                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Traitement de la demande...</div>
                      <Progress value={75} className="w-full" />
                    </div>
                  )}

                  {results.image && (
                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <CardContent className="pt-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-green-100 dark:bg-green-900">
                              Généré avec succès
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {results.image.processingTime}
                            </div>
                          </div>
                          <p className="text-sm"><strong>Prompt:</strong> {results.image.prompt}</p>
                          <p className="text-sm"><strong>Résultat:</strong> {results.image.result}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Confiance:</span>
                            <Progress value={results.image.confidence} className="flex-1" />
                            <span className="text-sm font-medium">{results.image.confidence}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="generation-texte" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="h-5 w-5" />
                    Génération de texte par IA
                  </CardTitle>
                  <CardDescription>
                    Testez la génération de contenu textuel avec des modèles de langage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Instruction ou début de texte</label>
                    <Input
                      placeholder="Ex: Écris un paragraphe sur l'avenir de l'IA"
                      value={textPrompt}
                      onChange={(e) => setTextPrompt(e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    onClick={simulateTextGeneration} 
                    disabled={isProcessing || !textPrompt.trim()}
                    className="w-full"
                  >
                    {isProcessing ? (
                      <>
                        <Zap className="h-4 w-4 mr-2 animate-spin" />
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        <Brain className="h-4 w-4 mr-2" />
                        Générer le texte
                      </>
                    )}
                  </Button>

                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Traitement de la demande...</div>
                      <Progress value={60} className="w-full" />
                    </div>
                  )}

                  {results.text && (
                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900">
                              Texte généré
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {results.text.processingTime}
                            </div>
                          </div>
                          <p className="text-sm"><strong>Prompt:</strong> {results.text.prompt}</p>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                            <p className="text-sm">{results.text.result}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Confiance:</span>
                            <Progress value={results.text.confidence} className="flex-1" />
                            <span className="text-sm font-medium">{results.text.confidence}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="classification" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Classification de sentiment
                  </CardTitle>
                  <CardDescription>
                    Analysez le sentiment d'un texte (positif, neutre, négatif)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Texte à analyser</label>
                    <Textarea
                      placeholder="Ex: J'adore cette nouvelle technologie, elle va révolutionner notre façon de travailler !"
                      value={classificationText}
                      onChange={(e) => setClassificationText(e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={simulateClassification} 
                    disabled={isProcessing || !classificationText.trim()}
                    className="w-full"
                  >
                    {isProcessing ? (
                      <>
                        <Zap className="h-4 w-4 mr-2 animate-spin" />
                        Analyse en cours...
                      </>
                    ) : (
                      <>
                        <Brain className="h-4 w-4 mr-2" />
                        Analyser le sentiment
                      </>
                    )}
                  </Button>

                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Analyse du sentiment...</div>
                      <Progress value={85} className="w-full" />
                    </div>
                  )}

                  {results.classification && (
                    <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900">
                              Analyse terminée
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {results.classification.processingTime}
                            </div>
                          </div>
                          <p className="text-sm"><strong>Texte analysé:</strong> {results.classification.text}</p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Résultats de classification:</p>
                            {results.classification.categories.map((category, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <span className="text-sm w-16">{category.name}</span>
                                <Progress value={category.confidence} className="flex-1" />
                                <span className="text-sm font-medium w-10">{category.confidence}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Section éducative */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Comment ça marche ?</CardTitle>
              <CardDescription>
                Comprendre les principes derrière ces simulations d'IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Image className="h-4 w-4" />
                    Génération d'images
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les modèles comme DALL-E ou Stable Diffusion utilisent des réseaux de diffusion 
                    pour créer des images à partir de descriptions textuelles.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Type className="h-4 w-4" />
                    Génération de texte
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les LLMs (Large Language Models) comme GPT prédisent le mot suivant 
                    en analysant le contexte et les patterns dans les données d'entraînement.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Classification
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les modèles de classification analysent le texte et assignent des probabilités 
                    à différentes catégories basées sur l'apprentissage supervisé.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default SimulateurIA;
