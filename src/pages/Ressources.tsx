
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { ExternalResources } from '@/components';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lightbulb, BookMarked, Mail, Brain, PlusCircle, BookCheck, Info, ExternalLink, Link2, Book, FileText, Video, Pencil, BookmarkPlus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AddResourceForm } from '@/components/resources/AddResourceForm';
import { QuizDialog } from '@/components/resources/QuizDialog';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

// Ressources réelles
const realResources = [
  {
    title: "Cours Introduction au Deep Learning",
    source: "Collège de France",
    author: "Yann LeCun",
    type: "cours",
    link: "https://www.college-de-france.fr/site/yann-lecun/course-2016-02-04-14h00.htm",
    tags: ["deep learning", "fondamentaux", "cours"],
    year: 2022,
    description: "Série de cours sur les fondements du deep learning par l'un des pionniers du domaine."
  },
  {
    title: "Intelligence artificielle : avec quoi les étudiants doivent-ils se familiariser ?",
    source: "The Conversation",
    author: "Serge Abiteboul",
    type: "article",
    link: "https://theconversation.com/intelligence-artificielle-avec-quoi-les-etudiants-doivent-ils-se-familiariser-213183",
    tags: ["éducation", "IA générale", "introduction"],
    year: 2023,
    description: "Article explorant les compétences essentielles en IA pour les étudiants."
  },
  {
    title: "Elements of AI",
    source: "Université d'Helsinki",
    author: "Université d'Helsinki et Reaktor",
    type: "cours",
    link: "https://www.elementsofai.fr/",
    tags: ["introduction", "cours", "gratuit"],
    year: 2023, 
    description: "Cours interactif gratuit sur les concepts fondamentaux de l'IA, accessible à tous."
  },
  {
    title: "Artificial Intelligence - A Modern Approach (4e édition, traduction française)",
    source: "Pearson",
    author: "Stuart Russell et Peter Norvig",
    type: "livre",
    link: "https://www.pearson.fr/book/?gcoi=27440100827370",
    tags: ["manuel", "référence", "IA générale"],
    year: 2020,
    description: "L'ouvrage de référence sur l'IA, couvrant l'ensemble des approches modernes."
  },
  {
    title: "L'IA expliquée à mon boss",
    source: "Dunod",
    author: "Emmanuel Manceau et Romain Chaumais",
    type: "livre",
    link: "https://www.dunod.com/sciences-techniques/ia-expliquee-mon-boss",
    tags: ["vulgarisation", "business", "introduction"],
    year: 2023,
    description: "Livre accessible expliquant les aspects pratiques de l'IA pour le monde professionnel."
  },
  {
    title: "Fondamentaux du Deep Learning",
    source: "O'Reilly",
    author: "Nikhil Buduma et Nicholas Locascio",
    type: "livre",
    link: "https://www.eyrolles.com/Informatique/Livre/fondamentaux-du-deep-learning-9782412034438/",
    tags: ["deep learning", "neural networks", "programmation"],
    year: 2022,
    description: "Introduction technique au deep learning avec exemples pratiques."
  },
  {
    title: "L'intelligence artificielle pas à pas",
    source: "Eyrolles",
    author: "Vincent Renvoizé",
    type: "livre",
    link: "https://www.eyrolles.com/Informatique/Livre/l-intelligence-artificielle-pas-a-pas-9782212675610/",
    tags: ["programmation", "python", "débutant"],
    year: 2024,
    description: "Approche progressive de l'IA avec des exemples concrets en Python."
  },
  {
    title: "Coursera - Machine Learning",
    source: "Coursera",
    author: "Andrew Ng",
    type: "cours",
    link: "https://www.coursera.org/learn/machine-learning",
    tags: ["machine learning", "cours", "fondamentaux"],
    year: 2024,
    description: "Le cours emblématique d'Andrew Ng sur le machine learning, disponible en plusieurs langues."
  },
  {
    title: "AI for Everyone",
    source: "Coursera",
    author: "Andrew Ng",
    type: "cours",
    link: "https://www.coursera.org/learn/ai-for-everyone",
    tags: ["introduction", "non-technique", "cours"],
    year: 2023,
    description: "Cours non-technique sur l'IA, accessible à tous, disponible en français."
  },
  {
    title: "Intelligence artificielle - Données massives et algorithmes",
    source: "La Découverte",
    author: "Jean-Gabriel Ganascia",
    type: "livre",
    link: "https://www.editionsladecouverte.fr/intelligence_artificielle-9782707199935",
    tags: ["sociologie", "philosophie", "éthique"],
    year: 2024,
    description: "Analyse des enjeux sociétaux et éthiques de l'IA par un expert reconnu."
  },
  {
    title: "La chaîne YouTube d'Hugo Larochelle",
    source: "YouTube",
    author: "Hugo Larochelle",
    type: "vidéo",
    link: "https://www.youtube.com/@hugolarochelle",
    tags: ["deep learning", "vidéo", "cours"],
    year: 2024,
    description: "Série de cours vidéo approfondis sur le deep learning par un chercheur Google."
  },
  {
    title: "Podcast La French Tech",
    source: "La French Tech",
    author: "Divers",
    type: "podcast",
    link: "https://lafrenchtech.com/fr/",
    tags: ["tech", "innovation", "podcast"],
    year: 2025,
    description: "Épisodes sur les avancées en IA et l'écosystème tech français."
  }
];

// Publications scientifiques
const scientificPublications = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    publication: "NIPS 2017",
    link: "https://arxiv.org/abs/1706.03762",
    year: 2017,
    description: "Article fondateur introduisant l'architecture Transformer, à la base des modèles LLM modernes."
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    authors: "He et al.",
    publication: "CVPR 2016",
    link: "https://arxiv.org/abs/1512.03385",
    year: 2016,
    description: "Introduction des réseaux résiduels (ResNet), une avancée majeure en vision par ordinateur."
  },
  {
    title: "Language Models are Few-Shot Learners",
    authors: "Brown et al.",
    publication: "NeurIPS 2020",
    link: "https://arxiv.org/abs/2005.14165",
    year: 2020,
    description: "Article présentant GPT-3 et les capacités d'apprentissage avec peu d'exemples."
  },
  {
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    authors: "Radford et al.",
    publication: "ICML 2021",
    link: "https://arxiv.org/abs/2103.00020",
    year: 2021,
    description: "Introduction de CLIP, un modèle multimodal texte-image révolutionnaire."
  }
];

// Outils et plateformes d'IA
const iaTools = [
  {
    name: "Hugging Face",
    category: "Plateforme",
    link: "https://huggingface.co/",
    description: "Bibliothèque et écosystème open-source pour les modèles de langage et d'autres modèles d'IA."
  },
  {
    name: "TensorFlow",
    category: "Framework",
    link: "https://www.tensorflow.org/",
    description: "Framework open-source pour le développement et l'entraînement de modèles de deep learning."
  },
  {
    name: "PyTorch",
    category: "Framework",
    link: "https://pytorch.org/",
    description: "Framework flexible de deep learning populaire dans la recherche en IA."
  },
  {
    name: "Kaggle",
    category: "Plateforme d'apprentissage",
    link: "https://www.kaggle.com/",
    description: "Communauté pour l'apprentissage du machine learning et la participation à des compétitions."
  },
  {
    name: "Scikit-learn",
    category: "Bibliothèque",
    link: "https://scikit-learn.org/",
    description: "Bibliothèque Python simple et efficace pour le machine learning classique."
  },
  {
    name: "Google Colab",
    category: "Environnement",
    link: "https://colab.research.google.com/",
    description: "Notebook Jupyter gratuit permettant d'utiliser des GPU pour l'entraînement de modèles."
  }
];

/**
 * Page présentant des ressources externes pour approfondir les connaissances en IA
 * @returns {JSX.Element} Le composant de la page Ressources
 */
const Ressources = () => {
  const [showAddResourceForm, setShowAddResourceForm] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("toutes");

  return (
    <>
      <Hero
        title="Ressources d'apprentissage"
        subtitle="Une sélection de ressources francophones gratuites et accessibles en ligne pour approfondir vos connaissances sur l'intelligence artificielle."
      />

      <section className="section-container">
        <Alert className="mb-8 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
          <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <AlertTitle>Avril 2025 - Site en construction</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            Cette section est en cours de développement. Certaines ressources présentées sont fictives ou servent d'exemples 
            et seront complétées prochainement. Les liens réels sont pleinement fonctionnels et mènent à du contenu de qualité.
          </AlertDescription>
        </Alert>

        <SectionHeading
          pretitle="Bibliothèque"
          title="Ressources Pédagogiques"
          description="Explorez notre collection de ressources en français et gratuites: articles, vidéos, cours et livres soigneusement sélectionnés pour enrichir votre compréhension de l'IA."
          center
        />
        
        <Card className="mb-8 border border-dashed">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">Contenu en français et accessible</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Notre sélection privilégie les ressources gratuites, accessibles en ligne et en français.
                  Utilisez les filtres pour trouver facilement les ressources qui vous intéressent en fonction de votre niveau ou du type de contenu recherché.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" asChild className="whitespace-nowrap">
                  <a href="#resources" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Voir les ressources
                  </a>
                </Button>
                <Button 
                  onClick={() => setShowQuizDialog(true)}
                  className="whitespace-nowrap gap-2"
                >
                  <BookCheck className="h-4 w-4" />
                  Quiz IA
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div id="resources" className="mt-10 scroll-mt-20">
          <Tabs defaultValue="toutes" className="w-full mb-8" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="toutes">Toutes</TabsTrigger>
              <TabsTrigger value="cours">Cours</TabsTrigger>
              <TabsTrigger value="livres">Livres</TabsTrigger>
              <TabsTrigger value="science">Publications</TabsTrigger>
              <TabsTrigger value="outils">Outils</TabsTrigger>
            </TabsList>
            
            <TabsContent value="toutes" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realResources.map((resource, index) => (
                  <ResourceCard 
                    key={index} 
                    title={resource.title}
                    source={resource.source}
                    description={resource.description}
                    link={resource.link}
                    type={resource.type}
                    year={resource.year}
                    tags={resource.tags}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cours" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realResources
                  .filter(resource => resource.type === "cours")
                  .map((resource, index) => (
                    <ResourceCard 
                      key={index} 
                      title={resource.title}
                      source={resource.source}
                      description={resource.description}
                      link={resource.link}
                      type={resource.type}
                      year={resource.year}
                      tags={resource.tags}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="livres" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realResources
                  .filter(resource => resource.type === "livre")
                  .map((resource, index) => (
                    <ResourceCard 
                      key={index} 
                      title={resource.title}
                      source={resource.source}
                      description={resource.description}
                      link={resource.link}
                      type={resource.type}
                      year={resource.year}
                      tags={resource.tags}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="science" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scientificPublications.map((pub, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          {pub.year}
                        </Badge>
                        <Badge variant="secondary">{pub.publication}</Badge>
                      </div>
                      <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 italic">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
                      <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                          Lire la publication
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="outils" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {iaTools.map((tool, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <Badge>{tool.category}</Badge>
                      </div>
                      <h3 className="text-lg font-medium mb-2">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                        <a href={tool.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Visiter
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <ExternalResources />
        </div>
      </section>

      <section className="section-container bg-muted/30 rounded-3xl py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="heading-lg mb-3">Poursuivre l'apprentissage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Pour approfondir votre compréhension de l'IA, consultez également notre glossaire des termes techniques et explorez l'histoire des technologies d'intelligence artificielle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Histoire de l'IA</h3>
              <p className="text-muted-foreground mb-4">Découvrez les moments clés de l'évolution de l'intelligence artificielle à travers notre timeline interactive.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/histoire-ia">Explorer la chronologie</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <BookMarked className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Glossaire technique</h3>
              <p className="text-muted-foreground mb-4">Consultez notre glossaire complet des termes techniques liés à l'intelligence artificielle.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/glossaire">Consulter le glossaire</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border max-w-2xl mx-auto">
            <BookCheck className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Testez vos connaissances</h3>
            <p className="text-muted-foreground mb-4">Mettez à l'épreuve vos connaissances sur l'intelligence artificielle avec notre quiz interactif.</p>
            <Button 
              onClick={() => setShowQuizDialog(true)}
              className="w-full"
            >
              Lancer le quiz
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>Pour suggérer une ressource : </span>
              <a href="mailto:geoffroy.streit@gmail.com" className="ml-1 text-primary hover:underline">
                geoffroy.streit@gmail.com
              </a>
            </div>
            <p className="mt-2 text-xs text-muted-foreground/70">
              Les ressources sont régulièrement mises à jour. Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
          
          <div className="mt-8">
            <Button 
              onClick={() => setShowAddResourceForm(true)}
              variant="outline"
              className="gap-2"
            >
              <PlusCircle className="h-4 w-4" />
              Proposer une ressource
            </Button>
          </div>
        </div>
      </section>
      
      <AddResourceForm 
        isOpen={showAddResourceForm} 
        onClose={() => setShowAddResourceForm(false)} 
      />

      <QuizDialog
        isOpen={showQuizDialog}
        onClose={() => setShowQuizDialog(false)}
      />
    </>
  );
};

// Composant carte de ressource
const ResourceCard = ({ title, source, description, link, type, year, tags }) => {
  const getIcon = () => {
    switch (type) {
      case 'cours': return <Book className="h-5 w-5" />;
      case 'livre': return <BookOpen className="h-5 w-5" />;
      case 'article': return <FileText className="h-5 w-5" />;
      case 'vidéo': return <Video className="h-5 w-5" />;
      case 'podcast': return <Pencil className="h-5 w-5" />;
      default: return <Link2 className="h-5 w-5" />;
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="mb-2">{type}</Badge>
          <Badge variant="secondary">{year}</Badge>
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-1">Source: {source}</p>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags && tags.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full gap-2" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Consulter
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Ressources;
