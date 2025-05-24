
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Brain, Image, Type, BarChart3, Zap, User, Clock, Camera, MessageSquare, FileText, Music } from 'lucide-react';
import Hero from '@/components/Hero';

const SimulateurIA = () => {
  const [imagePrompt, setImagePrompt] = useState('');
  const [imageStyle, setImageStyle] = useState('realiste');
  const [textPrompt, setTextPrompt] = useState('');
  const [textType, setTextType] = useState('article');
  const [classificationText, setClassificationText] = useState('');
  const [classificationType, setClassificationType] = useState('sentiment');
  const [chatMessage, setChatMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>({});

  const imageStyles = [
    { value: 'realiste', label: 'Réaliste' },
    { value: 'artistique', label: 'Artistique' },
    { value: 'cartoon', label: 'Cartoon' },
    { value: 'cyberpunk', label: 'Cyberpunk' }
  ];

  const textTypes = [
    { value: 'article', label: 'Article de blog' },
    { value: 'story', label: 'Histoire courte' },
    { value: 'email', label: 'Email professionnel' },
    { value: 'resume', label: 'Résumé' }
  ];

  const classificationTypes = [
    { value: 'sentiment', label: 'Analyse de sentiment' },
    { value: 'topic', label: 'Classification par sujet' },
    { value: 'language', label: 'Détection de langue' },
    { value: 'spam', label: 'Détection de spam' }
  ];

  const simulateImageGeneration = async () => {
    if (!imagePrompt.trim()) return;
    
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const styleDescriptions = {
      realiste: "Image photoréaliste haute définition",
      artistique: "Œuvre d'art stylisée",
      cartoon: "Illustration colorée et ludique",
      cyberpunk: "Ambiance futuriste néon"
    };
    
    setResults(prev => ({
      ...prev,
      image: {
        prompt: imagePrompt,
        style: imageStyle,
        result: `${styleDescriptions[imageStyle]} générée avec succès ! L'IA a interprété "${imagePrompt}" dans un style ${imageStyle}.`,
        confidence: Math.floor(Math.random() * 20) + 80,
        processingTime: "3.2s",
        resolution: "1024x1024",
        model: "Diffusion-XL"
      }
    }));
    
    setIsProcessing(false);
  };

  const simulateTextGeneration = async () => {
    if (!textPrompt.trim()) return;
    
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const responses = {
      article: `# ${textPrompt}

L'intelligence artificielle représente aujourd'hui l'une des révolutions technologiques les plus importantes de notre époque. Cette technologie transforme progressivement notre façon de travailler, d'apprendre et d'interagir avec le monde qui nous entoure.

## Applications actuelles

Les domaines d'application sont vastes : de la reconnaissance vocale aux véhicules autonomes, en passant par la médecine personnalisée et l'analyse prédictive...`,
      
      story: `Il était une fois, dans un laboratoire futuriste, un scientifique passionné qui travaillait sur "${textPrompt}". Les écrans clignotaient autour de lui, affichant des algorithmes complexes et des données en temps réel. Soudain, une découverte extraordinaire allait changer le cours de l'histoire...`,
      
      email: `Objet: ${textPrompt}

Bonjour,

J'espère que ce message vous trouve en bonne santé. Je vous contacte aujourd'hui concernant ${textPrompt}. 

Après analyse approfondie, je souhaiterais partager avec vous quelques points importants qui méritent notre attention...

Cordialement,
Assistant IA`,
      
      resume: `Résumé exécutif : ${textPrompt}

Points clés :
• Analyse contextuelle des enjeux principaux
• Identification des opportunités et défis
• Recommandations stratégiques
• Plan d'action proposé

Cette synthèse présente les éléments essentiels pour une compréhension globale du sujet.`
    };
    
    setResults(prev => ({
      ...prev,
      text: {
        prompt: textPrompt,
        type: textType,
        result: responses[textType] || responses.article,
        confidence: Math.floor(Math.random() * 15) + 85,
        processingTime: "2.1s",
        wordCount: Math.floor(Math.random() * 200) + 150,
        model: "GPT-4-Turbo"
      }
    }));
    
    setIsProcessing(false);
  };

  const simulateClassification = async () => {
    if (!classificationText.trim()) return;
    
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const classifications = {
      sentiment: [
        { name: "Positif", confidence: Math.floor(Math.random() * 40) + 60 },
        { name: "Neutre", confidence: Math.floor(Math.random() * 30) + 10 },
        { name: "Négatif", confidence: Math.floor(Math.random() * 20) + 5 }
      ],
      topic: [
        { name: "Technologie", confidence: Math.floor(Math.random() * 50) + 40 },
        { name: "Business", confidence: Math.floor(Math.random() * 30) + 20 },
        { name: "Education", confidence: Math.floor(Math.random() * 25) + 15 }
      ],
      language: [
        { name: "Français", confidence: 95 },
        { name: "Anglais", confidence: 3 },
        { name: "Espagnol", confidence: 2 }
      ],
      spam: [
        { name: "Légitime", confidence: Math.floor(Math.random() * 40) + 60 },
        { name: "Spam", confidence: Math.floor(Math.random() * 30) + 10 }
      ]
    };
    
    setResults(prev => ({
      ...prev,
      classification: {
        text: classificationText,
        type: classificationType,
        categories: classifications[classificationType],
        processingTime: "1.2s",
        model: "BERT-Classification"
      }
    }));
    
    setIsProcessing(false);
  };

  const simulateChat = async () => {
    if (!chatMessage.trim()) return;
    
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1800));
    
    const responses = [
      "C'est une excellente question ! L'intelligence artificielle fonctionne en analysant de grandes quantités de données pour identifier des patterns et faire des prédictions.",
      "Je comprends votre interrogation. En effet, l'IA moderne utilise des réseaux de neurones artificiels inspirés du fonctionnement du cerveau humain.",
      "Très intéressant ! Ce sujet touche aux fondements même de l'apprentissage automatique et de la reconnaissance de formes.",
      "Permettez-moi de vous expliquer de manière simple : l'IA apprend comme un enfant, en observant de nombreux exemples et en s'améliorant avec l'expérience."
    ];
    
    setResults(prev => ({
      ...prev,
      chat: {
        userMessage: chatMessage,
        aiResponse: responses[Math.floor(Math.random() * responses.length)],
        confidence: Math.floor(Math.random() * 10) + 90,
        processingTime: "1.8s",
        model: "ChatGPT-4"
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
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="generation-images" className="gap-2">
                <Image className="h-4 w-4" />
                Images
              </TabsTrigger>
              <TabsTrigger value="generation-texte" className="gap-2">
                <Type className="h-4 w-4" />
                Texte
              </TabsTrigger>
              <TabsTrigger value="classification" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Classification
              </TabsTrigger>
              <TabsTrigger value="chat" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Chat IA
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Description de l'image</label>
                      <Textarea
                        placeholder="Ex: Un chat orange qui joue dans un jardin fleuri au coucher du soleil"
                        value={imagePrompt}
                        onChange={(e) => setImagePrompt(e.target.value)}
                        className="min-h-[80px]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Style artistique</label>
                      <Select value={imageStyle} onValueChange={setImageStyle}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {imageStyles.map((style) => (
                            <SelectItem key={style.value} value={style.value}>
                              {style.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
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
                        <Camera className="h-4 w-4 mr-2" />
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
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{results.image.model}</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {results.image.processingTime}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm"><strong>Prompt:</strong> {results.image.prompt}</p>
                          <p className="text-sm"><strong>Style:</strong> {results.image.style}</p>
                          <p className="text-sm"><strong>Résolution:</strong> {results.image.resolution}</p>
                          <p className="text-sm">{results.image.result}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Qualité:</span>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Sujet ou instruction</label>
                      <Input
                        placeholder="Ex: L'avenir de l'intelligence artificielle"
                        value={textPrompt}
                        onChange={(e) => setTextPrompt(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Type de contenu</label>
                      <Select value={textType} onValueChange={setTextType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {textTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
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
                        <FileText className="h-4 w-4 mr-2" />
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
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{results.text.model}</span>
                              <span>{results.text.wordCount} mots</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {results.text.processingTime}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm"><strong>Sujet:</strong> {results.text.prompt}</p>
                          <p className="text-sm"><strong>Type:</strong> {textTypes.find(t => t.value === results.text.type)?.label}</p>
                          <div className="bg-white dark:bg-gray-800 p-4 rounded border max-h-60 overflow-y-auto">
                            <pre className="text-sm whitespace-pre-wrap">{results.text.result}</pre>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Pertinence:</span>
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
                    Classification et analyse de texte
                  </CardTitle>
                  <CardDescription>
                    Analysez et classifiez du texte selon différents critères
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Texte à analyser</label>
                      <Textarea
                        placeholder="Ex: J'adore cette nouvelle technologie, elle va révolutionner notre façon de travailler !"
                        value={classificationText}
                        onChange={(e) => setClassificationText(e.target.value)}
                        className="min-h-[80px]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Type d'analyse</label>
                      <Select value={classificationType} onValueChange={setClassificationType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {classificationTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
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
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Analyser le texte
                      </>
                    )}
                  </Button>

                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Classification en cours...</div>
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
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{results.classification.model}</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {results.classification.processingTime}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm"><strong>Texte analysé:</strong> {results.classification.text}</p>
                          <p className="text-sm"><strong>Type d'analyse:</strong> {classificationTypes.find(t => t.value === results.classification.type)?.label}</p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Résultats:</p>
                            {results.classification.categories.map((category, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <span className="text-sm w-20">{category.name}</span>
                                <Progress value={category.confidence} className="flex-1" />
                                <span className="text-sm font-medium w-12">{category.confidence}%</span>
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

            <TabsContent value="chat" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Assistant conversationnel IA
                  </CardTitle>
                  <CardDescription>
                    Testez les capacités conversationnelles d'un assistant IA
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Votre message</label>
                    <Textarea
                      placeholder="Ex: Comment fonctionne l'intelligence artificielle ?"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={simulateChat} 
                    disabled={isProcessing || !chatMessage.trim()}
                    className="w-full"
                  >
                    {isProcessing ? (
                      <>
                        <Zap className="h-4 w-4 mr-2 animate-spin" />
                        L'IA réfléchit...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Envoyer à l'IA
                      </>
                    )}
                  </Button>

                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">L'assistant IA formule sa réponse...</div>
                      <Progress value={70} className="w-full" />
                    </div>
                  )}

                  {results.chat && (
                    <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900">
                              Conversation
                            </Badge>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{results.chat.model}</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {results.chat.processingTime}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Vous :</p>
                              <p className="text-sm">{results.chat.userMessage}</p>
                            </div>
                            
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Assistant IA :</p>
                              <p className="text-sm">{results.chat.aiResponse}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Pertinence de la réponse:</span>
                            <Progress value={results.chat.confidence} className="flex-1" />
                            <span className="text-sm font-medium">{results.chat.confidence}%</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Chat conversationnel
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les assistants IA combinent compréhension du langage naturel et génération 
                    de réponses contextuelles pour simuler une conversation.
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
