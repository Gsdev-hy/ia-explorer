import React, { useState } from 'react';
import { Bot, BookOpen, Brain, Lightbulb, CalendarDays, Award, Mail, ExternalLink, Globe, Clock, FileText } from 'lucide-react';
import { Timeline } from '@/components';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';

const HistoireIA = () => {
  const [activeEra, setActiveEra] = useState("golden-age");

  // Définition des ères de l'IA
  const eras = [
    {
      id: "inception",
      title: "Les débuts (1940-1960)",
      description: "Période fondatrice où les concepts théoriques et les premières expérimentations établissent les bases de l'IA.",
      events: [
        { year: "1943", event: "Premier modèle de neurone artificiel par McCulloch et Pitts" },
        { year: "1950", event: "Test de Turing proposé dans l'article 'Computing Machinery and Intelligence'" },
        { year: "1956", event: "Conférence de Dartmouth où le terme 'Intelligence Artificielle' est adopté" },
        { year: "1958", event: "Création du langage LISP par John McCarthy" },
      ]
    },
    {
      id: "golden-age",
      title: "L'âge d'or (1960-1975)",
      description: "Période d'optimisme où les premiers systèmes d'IA démontrent des capacités prometteuses.",
      events: [
        { year: "1964", event: "ELIZA, programme de traitement du langage naturel par Joseph Weizenbaum" },
        { year: "1965", event: "DENDRAL, premier système expert pour identifier les structures moléculaires" },
        { year: "1968", event: "HAL 9000 dans '2001, l'Odyssée de l'espace' influence la perception populaire de l'IA" },
        { year: "1969", event: "Première démonstration de SHRDLU capable de manipuler des objets virtuels" },
      ]
    },
    {
      id: "winter",
      title: "L'hiver de l'IA (1975-1990)",
      description: "Période de désillusion et de réduction des financements suite à des résultats en deçà des attentes.",
      events: [
        { year: "1973", event: "Rapport Lighthill au Royaume-Uni critique sévèrement les promesses de l'IA" },
        { year: "1984", event: "Effondrement du marché des systèmes experts" },
        { year: "1986", event: "Publication de 'Parallel Distributed Processing' introduisant la rétropropagation" },
        { year: "1988", event: "Regain d'intérêt pour les réseaux de neurones artificiels" },
      ]
    },
    {
      id: "revival",
      title: "Renaissance (1990-2010)",
      description: "Renouveau progressif avec l'émergence d'approches statistiques et la résolution de problèmes spécifiques.",
      events: [
        { year: "1997", event: "Deep Blue d'IBM bat Garry Kasparov aux échecs" },
        { year: "2005", event: "Robot Stanley remporte le DARPA Grand Challenge" },
        { year: "2006", event: "Geoffrey Hinton introduit les méthodes d'apprentissage profond efficaces" },
        { year: "2008", event: "Lancement de l'ImageNet par Fei-Fei Li" },
      ]
    },
    {
      id: "modern",
      title: "Ère moderne (2010-présent)",
      description: "Explosion des capacités avec l'apprentissage profond, la disponibilité des données massives et la puissance de calcul.",
      events: [
        { year: "2011", event: "Watson d'IBM gagne à Jeopardy!" },
        { year: "2012", event: "AlexNet révolutionne la vision par ordinateur au concours ImageNet" },
        { year: "2016", event: "AlphaGo bat le champion du monde de Go Lee Sedol" },
        { year: "2020", event: "GPT-3 démontre des capacités impressionnantes en génération de texte" },
        { year: "2022", event: "Explosion des IA génératives avec DALL-E 2, Midjourney et Stable Diffusion" },
        { year: "2023", event: "Large déploiement des assistants IA comme ChatGPT et Claude" },
      ]
    },
  ];

  return (
    <>
      <Hero
        title="Histoire de l'Intelligence Artificielle"
        subtitle="Découvrez les événements clés et l'évolution de l'intelligence artificielle à travers les époques."
      />
      
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/pics/history.jpg" 
              alt="Histoire de l'Intelligence Artificielle" 
              className="w-full h-64 object-cover object-center"
            />
          </div>
          
          <SectionHeading
            pretitle="Chronologie"
            title="Évolution de l'IA à travers le temps"
            description="Explorez les moments décisifs qui ont façonné le développement de l'intelligence artificielle depuis ses origines jusqu'à nos jours."
            center
          />
          
          <div className="mb-12">
            <Timeline />
          </div>

          {/* Nouvelle section: Navigation par ères */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Grandes Périodes de l'IA</h2>
            
            <Tabs defaultValue={activeEra} onValueChange={setActiveEra} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-6">
                {eras.map(era => (
                  <TabsTrigger key={era.id} value={era.id} className="text-xs md:text-sm">
                    {era.title.split('(')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {eras.map(era => (
                <TabsContent key={era.id} value={era.id} className="animate-fade-in">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CalendarDays className="mr-2 h-5 w-5 text-primary" />
                        {era.title}
                      </CardTitle>
                      <CardDescription>{era.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {era.events.map((event, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 mr-3 mt-1">
                              <div className="w-16 h-8 bg-primary/10 rounded flex items-center justify-center text-primary font-bold">
                                {event.year}
                              </div>
                            </div>
                            <div className="bg-secondary/10 p-3 rounded-lg flex-grow">
                              {event.event}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Défis et Controverses</h2>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/10 rounded-lg flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Défis éthiques grandissants</h5>
                    <p className="text-sm text-muted-foreground">Questions de biais, vie privée, désinformation, impact sur l'emploi deviennent centrales dans le développement responsable de l'IA.</p>
                  </div>
                </div>
                
                <Alert>
                  <AlertTitle>L'hiver de l'IA</AlertTitle>
                  <AlertDescription>
                    L'histoire de l'IA a connu plusieurs "hivers" - périodes de désillusion et de réduction des financements suite à des attentes trop élevées. Le premier s'est produit dans les années 1970, et un autre dans les années 1990.
                  </AlertDescription>
                </Alert>

                <div className="p-4 bg-secondary/10 rounded-lg flex gap-4">
                  <div className="p-2 bg-yellow-500/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Promesses exagérées</h5>
                    <p className="text-sm text-muted-foreground">L'enthousiasme pour l'IA a souvent conduit à des prédictions trop optimistes sur ses capacités à court terme, créant des cycles d'engouement suivis de déceptions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Impacts Culturels</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">L'IA a profondément influencé notre culture populaire, de HAL 9000 dans "2001: l'Odyssée de l'espace" aux récits contemporains sur la singularité technologique.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h5 className="font-medium mb-2">Littérature</h5>
                    <p className="text-sm">Isaac Asimov avec ses "Trois lois de la robotique" a façonné notre vision de l'éthique des machines.</p>
                  </div>
                  
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h5 className="font-medium mb-2">Cinéma</h5>
                    <p className="text-sm">De "Metropolis" (1927) à "Her" (2013), le cinéma explore notre relation avec l'intelligence artificielle.</p>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      <Globe className="inline-block mr-2 h-4 w-4" />
                      IA dans la culture populaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">2001, l'Odyssée de l'espace (1968)</span>
                      <span className="text-muted-foreground">HAL 9000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Blade Runner (1982)</span>
                      <span className="text-muted-foreground">Réplicants</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Terminator (1984)</span>
                      <span className="text-muted-foreground">Skynet</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Matrix (1999)</span>
                      <span className="text-muted-foreground">Intelligence artificielle collective</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Her (2013)</span>
                      <span className="text-muted-foreground">Samantha</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Figures Emblématiques</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alan Turing",
                  contribution: "Fondements théoriques, test de Turing",
                  years: "1912-1954"
                },
                {
                  name: "John McCarthy",
                  contribution: "Terme 'Intelligence Artificielle', LISP",
                  years: "1927-2011"
                },
                {
                  name: "Marvin Minsky",
                  contribution: "Co-fondateur du laboratoire d'IA du MIT",
                  years: "1927-2016"
                },
                {
                  name: "Geoffrey Hinton",
                  contribution: "Pionnier de l'apprentissage profond",
                  years: "1947-présent"
                },
                {
                  name: "Yann LeCun",
                  contribution: "CNNs, apprentissage profond",
                  years: "1960-présent"
                },
                {
                  name: "Yoshua Bengio",
                  contribution: "Apprentissage profond, réseaux de neurones",
                  years: "1964-présent"
                },
                {
                  name: "Fei-Fei Li",
                  contribution: "Vision par ordinateur, ImageNet",
                  years: "1976-présent"
                },
                {
                  name: "Andrew Ng",
                  contribution: "Apprentissage machine, éducation en IA",
                  years: "1976-présent"
                }
              ].map((person, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{person.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h5 className="font-medium">{person.name}</h5>
                  <p className="text-xs text-muted-foreground mt-1">{person.years}</p>
                  <p className="text-sm mt-2">{person.contribution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Publications Fondatrices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Computing Machinery and Intelligence",
                  author: "Alan Turing",
                  year: "1950",
                  description: "Article fondateur introduisant le célèbre 'test de Turing' et questionnant la possibilité des machines pensantes."
                },
                {
                  title: "A Logical Calculus of the Ideas Immanent in Nervous Activity",
                  author: "Warren McCulloch et Walter Pitts",
                  year: "1943",
                  description: "Premier modèle mathématique d'un neurone artificiel, posant les bases des réseaux neuronaux."
                },
                {
                  title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
                  author: "John McCarthy et al.",
                  year: "1955",
                  description: "Document proposant la conférence de Dartmouth qui a officialisé le terme 'Intelligence Artificielle'."
                },
                {
                  title: "Perceptrons",
                  author: "Marvin Minsky et Seymour Papert",
                  year: "1969",
                  description: "Ouvrage démontrant les limitations des perceptrons simples, contribuant au premier hiver de l'IA."
                }
              ].map((publication, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-secondary/5">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{publication.title}</CardTitle>
                      <span className="text-primary font-bold">{publication.year}</span>
                    </div>
                    <CardDescription>{publication.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm">{publication.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <section className="bg-muted/30 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Ressources pour approfondir</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Articles académiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://hal.science/hal-01983226" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Histoire de l'intelligence artificielle (Ganascia, 2018)</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://arxiv.org/abs/2004.08271" target="_blank" rel="noopener noreferrer" className="hover:text-primary">A Brief History of AI (Haenlein, 2020)</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Livres recommandés
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>Histoire de l'intelligence artificielle (Jean-Claude Heudin)</li>
                    <li>Homo Deus: Une brève histoire de l'avenir (Yuval Noah Harari)</li>
                    <li>The Quest for Artificial Intelligence (Nils J. Nilsson)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Sites internet
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://www.interstices.info/domaine/intelligence-artificielle/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Interstices - Intelligence Artificielle</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://histoire-ia.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Histoire-IA.fr</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link to="/ressources">
                  Explorer toutes nos ressources
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default HistoireIA;
