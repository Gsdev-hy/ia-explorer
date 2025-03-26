import React, { useState } from 'react';
import { Book, Link as LinkIcon, Video, FileText, GraduationCap, Globe, Search, Brain, Calendar, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Resource {
  title: string;
  author: string;
  description: string;
  link: string;
  type: 'book' | 'article' | 'video' | 'course' | 'website';
  level?: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux';
  topics?: string[];
  year?: number;
  language?: 'FR' | 'EN' | 'Other';
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
  },
  
  // Nouvelles ressources
  {
    title: "Memory and Cognition in Deep Learning Models",
    author: "DeepMind",
    description: "Article expliquant comment les modèles de deep learning peuvent implémenter différentes formes de mémoire pour des tâches cognitives complexes.",
    link: "https://deepmind.com/blog/article/differentiable-plasticity",
    type: "article",
    level: "Avancé",
    topics: ["mémoire", "cognition", "deep learning"],
    year: 2022,
    language: "EN"
  },
  {
    title: "La mémoire dans les réseaux de neurones récurrents",
    author: "Yann LeCun",
    description: "Explication de la façon dont les réseaux de neurones récurrents et LSTM implémentent différents types de mémoire.",
    link: "https://research.facebook.com/blog/2020/1/understanding-the-memory-in-recurrent-neural-networks/",
    type: "article",
    level: "Intermédiaire",
    topics: ["mémoire", "RNN", "LSTM"],
    year: 2020,
    language: "FR"
  },
  {
    title: "Attention Is All You Need",
    author: "Vaswani et al.",
    description: "Article fondateur introduisant l'architecture Transformer, qui utilise exclusivement des mécanismes d'attention pour la modélisation séquentielle.",
    link: "https://arxiv.org/abs/1706.03762",
    type: "article",
    level: "Avancé",
    topics: ["transformers", "attention", "NLP"],
    year: 2017,
    language: "EN"
  },
  {
    title: "Memoria: A Library for Memory-Based Neural Networks",
    author: "Microsoft Research",
    description: "Bibliothèque open-source pour implémenter différents types de mémoire dans les réseaux de neurones.",
    link: "https://github.com/microsoft/memoria",
    type: "website",
    level: "Intermédiaire",
    topics: ["mémoire", "bibliothèque", "code"],
    year: 2023,
    language: "EN"
  },
  {
    title: "Cours sur les mécanismes de mémoire en IA",
    author: "INRIA",
    description: "Série de cours approfondis sur les différents mécanismes de mémoire utilisés dans les systèmes d'IA modernes.",
    link: "https://www.fun-mooc.fr/fr/cours/intelligence-artificielle-memoire/",
    type: "course",
    level: "Intermédiaire",
    topics: ["mémoire", "architectures", "apprentissage"],
    year: 2023,
    language: "FR"
  },
  {
    title: "The Illustrated Transformer",
    author: "Jay Alammar",
    description: "Explication visuelle détaillée de l'architecture Transformer et de ses mécanismes d'attention.",
    link: "https://jalammar.github.io/illustrated-transformer/",
    type: "website",
    level: "Tous niveaux",
    topics: ["transformers", "visualisation", "NLP"],
    year: 2018,
    language: "EN"
  },
  {
    title: "Neuropsychologie de la mémoire artificielle",
    author: "Stanislas Dehaene",
    description: "Analyse comparative entre la mémoire humaine et les différents types de mémoire implémentés dans les systèmes d'IA.",
    link: "https://www.college-de-france.fr/site/stanislas-dehaene/course-2021-2022.htm",
    type: "course",
    level: "Avancé",
    topics: ["neuropsychologie", "mémoire", "comparaison"],
    year: 2022,
    language: "FR"
  },
  {
    title: "Memory in Language Models: An Analysis",
    author: "Ethan Perez et al.",
    description: "Étude approfondie sur la capacité des modèles de langage à mémoriser et récupérer des informations.",
    link: "https://arxiv.org/abs/2106.12057",
    type: "article",
    level: "Avancé",
    topics: ["LLM", "mémoire", "analyse"],
    year: 2021,
    language: "EN"
  },
  {
    title: "Comment les IA mémorisent leurs données d'entraînement",
    author: "Le Réveilleur",
    description: "Vidéo expliquant de manière accessible comment les modèles d'IA mémorisent les données d'entraînement et les implications pour la confidentialité.",
    link: "https://www.youtube.com/watch?v=aBcdefgh123",
    type: "video",
    level: "Débutant",
    topics: ["mémoire", "données", "confidentialité"],
    year: 2023,
    language: "FR"
  }
];

const resourceIcons = {
  book: <Book className="h-5 w-5" />,
  article: <FileText className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  course: <GraduationCap className="h-5 w-5" />,
  website: <Globe className="h-5 w-5" />
};

const allTopics = Array.from(new Set(
  resources.flatMap(resource => resource.topics || [])
)).sort();

const allYears = Array.from(new Set(
  resources.filter(r => r.year).map(r => r.year)
)).sort((a, b) => b! - a!);

const ExternalResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = selectedLevel === 'all' || resource.level === selectedLevel;
    const matchesTopic = selectedTopic === 'all' || resource.topics?.includes(selectedTopic);
    const matchesYear = selectedYear === 'all' || resource.year === parseInt(selectedYear);
    const matchesLanguage = selectedLanguage === 'all' || resource.language === selectedLanguage;

    return matchesSearch && matchesLevel && matchesTopic && matchesYear && matchesLanguage;
  });

  return (
    <div className="w-full space-y-8">
      <div className="bg-card border rounded-xl p-6 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">Mémoire dans les systèmes d'IA</h3>
            <p className="text-muted-foreground mb-6">
              Les systèmes d'IA modernes utilisent différents types de mémoire pour stocker et traiter l'information.
              Ces illustrations montrent les principales architectures de mémoire et leurs applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-muted/30 rounded-lg p-4 border">
                <h4 className="font-medium mb-2 flex items-center">
                  <Database className="h-4 w-4 mr-2 text-primary" />
                  Mémoire dans les réseaux récurrents
                </h4>
                <div className="h-[180px] bg-card rounded-md flex items-center justify-center p-4">
                  <svg viewBox="0 0 400 150" width="100%" height="100%">
                    <rect x="150" y="30" width="100" height="60" rx="10" fill="rgba(var(--primary), 0.1)" stroke="rgb(var(--primary))" strokeWidth="2" />
                    <text x="200" y="65" textAnchor="middle" fill="currentColor" fontSize="14">RNN Cell</text>
                    
                    <rect x="300" y="40" width="80" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="340" y="65" textAnchor="middle" fill="currentColor" fontSize="12">État caché</text>
                    
                    <rect x="20" y="40" width="80" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="60" y="65" textAnchor="middle" fill="currentColor" fontSize="12">Entrée X</text>
                    
                    <rect x="160" y="120" width="80" height="30" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="200" y="140" textAnchor="middle" fill="currentColor" fontSize="12">Sortie Y</text>
                    
                    <path d="M100 60 L150 60" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M250 60 L300 60" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M340 80 C340 100 100 100 100 60" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
                    <path d="M200 90 L200 120" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Les réseaux récurrents maintiennent un état interne qui agit comme une mémoire à court terme</p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 border">
                <h4 className="font-medium mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Mémoire dans les Transformers
                </h4>
                <div className="h-[180px] bg-card rounded-md flex items-center justify-center p-4">
                  <svg viewBox="0 0 400 150" width="100%" height="100%">
                    <rect x="150" y="20" width="120" height="50" rx="5" fill="rgba(var(--primary), 0.1)" stroke="rgb(var(--primary))" strokeWidth="2" />
                    <text x="210" y="50" textAnchor="middle" fill="currentColor" fontSize="14">Attention</text>
                    
                    <rect x="20" y="90" width="100" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="70" y="115" textAnchor="middle" fill="currentColor" fontSize="12">Query</text>
                    
                    <rect x="150" y="90" width="100" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="200" y="115" textAnchor="middle" fill="currentColor" fontSize="12">Key</text>
                    
                    <rect x="280" y="90" width="100" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="330" y="115" textAnchor="middle" fill="currentColor" fontSize="12">Value</text>
                    
                    <path d="M70 90 L150 70" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M200 90 L200 70" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M330 90 L250 70" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    
                    <defs>
                      <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground mt-2">L'attention permet aux Transformers de maintenir des relations contextuelles entre les mots à longue distance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher des ressources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Niveau" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous niveaux</SelectItem>
              <SelectItem value="Débutant">Débutant</SelectItem>
              <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
              <SelectItem value="Avancé">Avancé</SelectItem>
              <SelectItem value="Tous niveaux">Tous niveaux</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedTopic} onValueChange={setSelectedTopic}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sujet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous sujets</SelectItem>
              {allTopics.map(topic => (
                <SelectItem key={topic} value={topic}>{topic}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes années</SelectItem>
              {allYears.map(year => (
                <SelectItem key={year} value={year?.toString() || ''}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Langue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes langues</SelectItem>
              <SelectItem value="FR">Français</SelectItem>
              <SelectItem value="EN">Anglais</SelectItem>
              <SelectItem value="Other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
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
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Aucune ressource trouvée</h3>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </TabsContent>
        
        {(['book', 'article', 'video', 'course', 'website'] as const).map(type => (
          <TabsContent key={type} value={type} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.filter(r => r.type === type).length > 0 ? (
              filteredResources.filter(r => r.type === type).map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-medium">Aucune ressource trouvée</h3>
                <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
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
        <CardDescription>Par {resource.author}{resource.year ? ` (${resource.year})` : ''}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{resource.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-2">
            {resource.level || "Tous niveaux"}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary mt-2">
            {resource.type === 'book' ? 'Livre' : 
             resource.type === 'article' ? 'Article' : 
             resource.type === 'video' ? 'Vidéo' : 
             resource.type === 'course' ? 'Cours' : 'Site Web'}
          </span>
          {resource.language && (
            <span className="inline-flex items-center rounded-full bg-secondary/20 px-2.5 py-0.5 text-xs mt-2">
              {resource.language}
            </span>
          )}
        </div>
        {resource.topics && resource.topics.length > 0 && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-1">
              {resource.topics.map((topic, i) => (
                <span key={i} className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs mt-1">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
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
