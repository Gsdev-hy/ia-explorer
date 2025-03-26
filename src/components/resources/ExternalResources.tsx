
import React from 'react';
import { Book, Link as LinkIcon, Video, FileText, GraduationCap, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Resource {
  title: string;
  author: string;
  description: string;
  link: string;
  type: 'book' | 'article' | 'video' | 'course' | 'website';
  level?: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux';
}

const resources: Resource[] = [
  // Livres
  {
    title: "L'intelligence artificielle pour les nuls",
    author: "John Paul Mueller & Luca Massaron",
    description: "Introduction accessible aux concepts fondamentaux de l'IA, adaptée aux débutants.",
    link: "https://www.amazon.fr/LIntelligence-Artificielle-pour-Nuls-poche/dp/2412034731",
    type: "book",
    level: "Débutant"
  },
  {
    title: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom",
    description: "Exploration des implications potentielles du développement d'une IA supérieure à l'intelligence humaine.",
    link: "https://www.amazon.fr/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834",
    type: "book",
    level: "Avancé"
  },
  {
    title: "Deep Learning avec TensorFlow",
    author: "Aurélien Géron",
    description: "Guide pratique pour comprendre et utiliser TensorFlow pour le deep learning.",
    link: "https://www.amazon.fr/Deep-Learning-avec-TensorFlow-dapprentissage/dp/2100809121",
    type: "book",
    level: "Intermédiaire"
  },
  {
    title: "Le mythe de la singularité",
    author: "Jean-Gabriel Ganascia",
    description: "Analyse critique des discours sur la singularité technologique et l'avenir de l'IA.",
    link: "https://www.seuil.com/ouvrage/le-mythe-de-la-singularite-jean-gabriel-ganascia/9782021309997",
    type: "book",
    level: "Tous niveaux"
  },
  
  // Articles
  {
    title: "Intelligence artificielle: état de l'art et perspectives pour la France",
    author: "Office Parlementaire d'Évaluation des Choix Scientifiques et Technologiques",
    description: "Rapport détaillé sur l'état de l'IA en France et les perspectives d'avenir.",
    link: "https://www.senat.fr/notice-rapport/2016/r16-464-1-notice.html",
    type: "article",
    level: "Intermédiaire"
  },
  {
    title: "The AI Revolution: The Road to Superintelligence",
    author: "Tim Urban",
    description: "Article en deux parties explorant l'évolution de l'IA et ses implications futures.",
    link: "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
    type: "article",
    level: "Tous niveaux"
  },
  {
    title: "Ethique de l'IA: les principes de l'OCDE",
    author: "OCDE",
    description: "Principes directeurs pour une IA de confiance adoptés par les pays membres de l'OCDE.",
    link: "https://www.oecd.org/fr/numerique/intelligence-artificielle/principes/",
    type: "article",
    level: "Tous niveaux"
  },
  
  // Vidéos
  {
    title: "Introduction à l'intelligence artificielle",
    author: "Science Étonnante",
    description: "Série de vidéos expliquant les concepts fondamentaux de l'IA de manière accessible.",
    link: "https://www.youtube.com/playlist?list=PLtzmb84AoqRS0SN8VKvAxuGOdcINmtYUX",
    type: "video",
    level: "Débutant"
  },
  {
    title: "L'IA peut-elle devenir consciente?",
    author: "Le Vortex",
    description: "Discussion sur la possibilité d'une conscience artificielle et ses implications.",
    link: "https://www.youtube.com/watch?v=MXs_B_oX6G4",
    type: "video",
    level: "Tous niveaux"
  },
  {
    title: "Deep Learning Explained",
    author: "3Blue1Brown",
    description: "Explication visuelle du fonctionnement des réseaux de neurones et du deep learning.",
    link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    type: "video",
    level: "Intermédiaire"
  },
  
  // Cours
  {
    title: "Introduction to AI",
    author: "MIT OpenCourseWare",
    description: "Cours complet d'introduction à l'IA du MIT, couvrant les principes fondamentaux.",
    link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/",
    type: "course",
    level: "Intermédiaire"
  },
  {
    title: "Deep Learning Specialization",
    author: "Andrew Ng - Coursera",
    description: "Série de cours approfondis sur le deep learning, les réseaux de neurones et leurs applications.",
    link: "https://www.coursera.org/specializations/deep-learning",
    type: "course",
    level: "Intermédiaire"
  },
  {
    title: "Elements of AI",
    author: "Université d'Helsinki",
    description: "Cours gratuit d'introduction à l'IA pour le grand public.",
    link: "https://www.elementsofai.fr/",
    type: "course",
    level: "Débutant"
  },
  
  // Sites web
  {
    title: "AI Ethics Guidelines Global Inventory",
    author: "AlgorithmWatch",
    description: "Inventaire des lignes directrices éthiques pour l'IA dans le monde.",
    link: "https://inventory.algorithmwatch.org/",
    type: "website",
    level: "Tous niveaux"
  },
  {
    title: "The Neural Network Zoo",
    author: "The Asimov Institute",
    description: "Catalogue des différents types de réseaux de neurones avec illustrations.",
    link: "https://www.asimovinstitute.org/neural-network-zoo/",
    type: "website",
    level: "Intermédiaire"
  },
  {
    title: "Distill",
    author: "Distill.pub",
    description: "Revue interactive présentant des recherches en apprentissage automatique de manière visuelle.",
    link: "https://distill.pub/",
    type: "website",
    level: "Avancé"
  }
];

const resourceIcons = {
  book: <Book className="h-5 w-5" />,
  article: <FileText className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  course: <GraduationCap className="h-5 w-5" />,
  website: <Globe className="h-5 w-5" />
};

const ExternalResources = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="flex justify-center mb-8 max-w-[95%] mx-auto overflow-auto">
        <TabsTrigger value="all">Tous</TabsTrigger>
        <TabsTrigger value="book">Livres</TabsTrigger>
        <TabsTrigger value="article">Articles</TabsTrigger>
        <TabsTrigger value="video">Vidéos</TabsTrigger>
        <TabsTrigger value="course">Cours</TabsTrigger>
        <TabsTrigger value="website">Sites Web</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </TabsContent>
      
      {(['book', 'article', 'video', 'course', 'website'] as const).map(type => (
        <TabsContent key={type} value={type} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.filter(r => r.type === type).map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const icon = resourceIcons[resource.type];
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 p-2 rounded-full">
              {icon}
            </div>
            <CardTitle className="text-lg">{resource.title}</CardTitle>
          </div>
        </div>
        <CardDescription>Par {resource.author}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{resource.description}</p>
        <div className="mt-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-2">
            {resource.level || "Tous niveaux"}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary mt-2 ml-2">
            {resource.type === 'book' ? 'Livre' : 
             resource.type === 'article' ? 'Article' : 
             resource.type === 'video' ? 'Vidéo' : 
             resource.type === 'course' ? 'Cours' : 'Site Web'}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gap-2" asChild>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="h-4 w-4" />
            Consulter
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExternalResources;
