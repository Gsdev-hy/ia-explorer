
import React, { useState } from 'react';
import { 
  Calendar, ChevronsUpDown, History, Brain, 
  Bot, Calculator, BrainCircuit, BadgeCheck, 
  Network, Globe, Cpu, Rocket, Car
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1950",
    title: "Test de Turing",
    description: "Alan Turing propose un test pour déterminer si une machine peut penser.",
    icon: <Brain className="h-5 w-5" />,
    details: "Le test de Turing propose un critère selon lequel une machine peut être considérée comme 'pensante' si un évaluateur humain ne peut pas distinguer de façon fiable les réponses de la machine de celles d'un humain."
  },
  {
    year: "1956",
    title: "Conférence de Dartmouth",
    description: "Naissance officielle du terme 'Intelligence Artificielle'.",
    icon: <Calendar className="h-5 w-5" />,
    details: "Organisée par John McCarthy, Marvin Minsky, Nathaniel Rochester et Claude Shannon, cette conférence a défini l'IA comme discipline scientifique et a établi ses objectifs fondamentaux."
  },
  {
    year: "1966-1973",
    title: "Premier hiver de l'IA",
    description: "Période de réduction des financements et de l'intérêt pour l'IA.",
    icon: <History className="h-5 w-5" />,
    details: "Suite à des promesses non tenues et des attentes trop élevées, les gouvernements et les investisseurs ont réduit leurs financements pour la recherche en IA."
  },
  {
    year: "1980",
    title: "Systèmes experts",
    description: "Développement de systèmes de règles pour résoudre des problèmes complexes.",
    icon: <Calculator className="h-5 w-5" />,
    details: "Ces systèmes utilisaient des règles 'si-alors' pour prendre des décisions dans des domaines spécialisés comme le diagnostic médical ou la prospection pétrolière."
  },
  {
    year: "1987-1993",
    title: "Deuxième hiver de l'IA",
    description: "Nouvelle période de désintérêt et de réduction des investissements.",
    icon: <History className="h-5 w-5" />,
    details: "L'effondrement du marché des systèmes experts et des ordinateurs LISP a conduit à une nouvelle période de scepticisme envers l'IA."
  },
  {
    year: "1997",
    title: "Deep Blue",
    description: "L'ordinateur d'IBM bat le champion du monde d'échecs Garry Kasparov.",
    icon: <Cpu className="h-5 w-5" />,
    details: "Cette victoire historique a marqué un tournant dans la perception publique des capacités de l'IA, même si Deep Blue utilisait principalement une approche de force brute."
  },
  {
    year: "2006",
    title: "Deep Learning",
    description: "Émergence du deep learning moderne avec les réseaux de neurones profonds.",
    icon: <BrainCircuit className="h-5 w-5" />,
    details: "Geoffrey Hinton introduit une méthode efficace pour entraîner les réseaux de neurones profonds, ouvrant la voie à une nouvelle ère pour l'IA."
  },
  {
    year: "2011",
    title: "Watson d'IBM",
    description: "Watson remporte le jeu télévisé Jeopardy! contre des champions humains.",
    icon: <BadgeCheck className="h-5 w-5" />,
    details: "Watson a démontré la capacité de l'IA à comprendre le langage naturel et à traiter des informations complexes et ambiguës."
  },
  {
    year: "2012",
    title: "AlexNet",
    description: "Percée majeure dans la reconnaissance d'images avec les réseaux de neurones convolutifs.",
    icon: <Network className="h-5 w-5" />,
    details: "AlexNet a réduit de moitié le taux d'erreur dans la compétition ImageNet, démontrant la puissance des réseaux de neurones profonds pour la vision par ordinateur."
  },
  {
    year: "2016",
    title: "AlphaGo",
    description: "L'IA de DeepMind bat le champion du monde de Go Lee Sedol.",
    icon: <Globe className="h-5 w-5" />,
    details: "Cette victoire était remarquable car le jeu de Go était considéré comme trop complexe pour être maîtrisé par les ordinateurs en raison du nombre astronomique de configurations possibles."
  },
  {
    year: "2018",
    title: "Transformer et BERT",
    description: "Révolution dans le traitement du langage naturel avec l'architecture Transformer.",
    icon: <Bot className="h-5 w-5" />,
    details: "Ces modèles ont transformé le NLP en permettant une meilleure compréhension du contexte et des relations entre les mots dans un texte."
  },
  {
    year: "2020",
    title: "GPT-3",
    description: "Modèle de langage à grande échelle capable de générer du texte humain.",
    icon: <Bot className="h-5 w-5" />,
    details: "Avec ses 175 milliards de paramètres, GPT-3 a démontré des capacités impressionnantes pour générer du texte cohérent et contextuel sur une variété de sujets."
  },
  {
    year: "2023",
    title: "IA générative",
    description: "Explosion des modèles d'IA capables de générer du texte, des images et du code.",
    icon: <Rocket className="h-5 w-5" />,
    details: "L'IA générative est devenue accessible au grand public, permettant la création de contenus créatifs et l'automatisation de tâches complexes."
  },
  {
    year: "2024+",
    title: "IA et robotique avancée",
    description: "Intégration de l'IA dans les systèmes autonomes et la robotique.",
    icon: <Car className="h-5 w-5" />,
    details: "L'avenir de l'IA s'oriente vers des systèmes plus autonomes, capables d'interagir avec le monde physique de manière sûre et efficace."
  }
];

const Timeline = () => {
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({});

  const toggleItem = (year: string) => {
    setOpenItems(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/70 before:to-muted md:before:mx-auto md:before:ml-0">
      {timelineEvents.map((event, index) => (
        <div key={event.year} className={`relative flex items-start md:justify-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="md:w-1/2 md:px-8">
            <Card className={`w-full ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} transform transition-all hover:shadow-lg`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">{event.title}</CardTitle>
                  <span className="inline-flex items-center justify-center rounded bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
                    {event.year}
                  </span>
                </div>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              
              {event.details && (
                <Collapsible open={openItems[event.year]} onOpenChange={() => toggleItem(event.year)}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full flex justify-between">
                      <span>Plus de détails</span>
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{event.details}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </Card>
          </div>
          
          <div className="absolute left-4 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:relative md:left-0 md:top-0">
            {event.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
