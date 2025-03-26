import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Search, BookMarked, Brain } from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'general' | 'technical' | 'ethical' | 'memory';
}

const aiTerms: GlossaryTerm[] = [
  {
    term: "Intelligence Artificielle",
    definition: "Ensemble de technologies permettant à des machines de simuler des fonctions cognitives humaines comme l'apprentissage, la résolution de problèmes et la prise de décision.",
    category: "general"
  },
  {
    term: "Machine Learning",
    definition: "Branche de l'IA qui permet aux systèmes d'apprendre et de s'améliorer à partir de l'expérience sans être explicitement programmés.",
    category: "general"
  },
  {
    term: "Deep Learning",
    definition: "Sous-ensemble du machine learning basé sur des réseaux de neurones artificiels avec plusieurs couches (réseaux profonds) pour modéliser des abstractions de haut niveau.",
    category: "technical"
  },
  {
    term: "Réseau de neurones",
    definition: "Modèle de calcul inspiré du fonctionnement des neurones biologiques, constitué de nœuds interconnectés organisés en couches qui transmettent et traitent des signaux.",
    category: "technical"
  },
  {
    term: "NLP (Natural Language Processing)",
    definition: "Domaine de l'IA qui se concentre sur l'interaction entre les ordinateurs et le langage humain, permettant aux machines de comprendre, interpréter et générer du texte.",
    category: "technical"
  },
  {
    term: "Apprentissage supervisé",
    definition: "Technique d'apprentissage où l'algorithme est entraîné sur des données étiquetées, avec des entrées et sorties connues.",
    category: "technical"
  },
  {
    term: "Apprentissage non supervisé",
    definition: "Technique d'apprentissage où l'algorithme trouve des structures ou des motifs dans des données non étiquetées.",
    category: "technical"
  },
  {
    term: "Apprentissage par renforcement",
    definition: "Technique d'apprentissage où un agent apprend à prendre des décisions en effectuant des actions dans un environnement pour maximiser une récompense.",
    category: "technical"
  },
  {
    term: "Biais algorithmique",
    definition: "Erreur systématique dans un système d'IA qui conduit à des résultats injustes ou discriminatoires, souvent le reflet de préjugés sociaux existants dans les données d'entraînement.",
    category: "ethical"
  },
  {
    term: "Transparence algorithmique",
    definition: "Principe selon lequel les processus, caractéristiques et décisions d'un algorithme doivent être visibles et compréhensibles pour les utilisateurs et parties prenantes.",
    category: "ethical"
  },
  {
    term: "Explicabilité",
    definition: "Capacité d'un système d'IA à expliquer ses décisions ou prédictions d'une manière compréhensible par les humains.",
    category: "ethical"
  },
  {
    term: "IA générative",
    definition: "Systèmes d'IA capables de créer du contenu original comme du texte, des images, de la musique ou de la vidéo à partir de données d'entraînement.",
    category: "technical"
  },
  {
    term: "IA étroite (ou faible)",
    definition: "IA conçue et entraînée pour une tâche spécifique, comme la reconnaissance d'images ou la traduction automatique.",
    category: "general"
  },
  {
    term: "IA générale (ou forte)",
    definition: "IA hypothétique possédant des capacités cognitives comparables à celles des humains, capable de résoudre n'importe quel problème intellectuel.",
    category: "general"
  },
  {
    term: "Boîte noire",
    definition: "Système d'IA dont le fonctionnement interne n'est pas visible ou compréhensible pour les utilisateurs ou même les développeurs.",
    category: "ethical"
  },
  {
    term: "Data mining",
    definition: "Processus d'extraction de connaissances et de motifs à partir de grandes quantités de données.",
    category: "technical"
  },
  {
    term: "API (Application Programming Interface)",
    definition: "Interface permettant à différents logiciels de communiquer entre eux, souvent utilisée pour accéder à des services d'IA.",
    category: "technical"
  },
  {
    term: "RGPD",
    definition: "Règlement Général sur la Protection des Données, cadre juridique de l'UE qui définit les règles relatives à la protection des données personnelles.",
    category: "ethical"
  },
  {
    term: "AI Act",
    definition: "Proposition de règlement européen visant à encadrer le développement et l'utilisation de l'intelligence artificielle selon une approche basée sur les risques.",
    category: "ethical"
  },
  {
    term: "Computer vision",
    definition: "Domaine de l'IA qui permet aux ordinateurs de voir, identifier et traiter des images comme le font les humains.",
    category: "technical"
  },
  {
    term: "Mémoire à court terme",
    definition: "Composante de la mémoire d'un système d'IA qui stocke temporairement les informations nécessaires au traitement d'une tâche en cours, similaire à la RAM d'un ordinateur.",
    category: "memory"
  },
  {
    term: "Mémoire à long terme",
    definition: "Stockage persistant des connaissances et expériences acquises par un système d'IA au cours de son apprentissage, permettant leur réutilisation future.",
    category: "memory"
  },
  {
    term: "Mémoire épisodique",
    definition: "Type de mémoire à long terme qui permet à un système d'IA de se souvenir d'événements spécifiques ou d'expériences passées dans leur contexte temporel.",
    category: "memory"
  },
  {
    term: "Mémoire sémantique",
    definition: "Type de mémoire à long terme qui stocke des connaissances générales, des faits et des concepts indépendamment de l'expérience personnelle.",
    category: "memory"
  },
  {
    term: "Mémoire procédurale",
    definition: "Stockage des séquences d'actions ou de procédures permettant à un système d'IA d'effectuer des tâches sans avoir à réapprendre les étapes.",
    category: "memory"
  },
  {
    term: "Mémoire de travail",
    definition: "Système cognitif permettant le stockage temporaire et la manipulation des informations nécessaires à l'exécution de tâches complexes.",
    category: "memory"
  },
  {
    term: "Mémoire de contexte",
    definition: "Capacité d'un modèle d'IA à se souvenir et à utiliser les informations des interactions ou séquences précédentes dans une conversation ou un traitement de données.",
    category: "memory"
  },
  {
    term: "Mémoire associative",
    definition: "Système de stockage qui permet de récupérer des informations à partir d'un contenu partiel, en établissant des liens entre différentes données.",
    category: "memory"
  },
  {
    term: "Mémoire perceptive",
    definition: "Capacité d'un système d'IA à stocker et à traiter des informations sensorielles comme les images, les sons ou les données tactiles.",
    category: "memory"
  },
  {
    term: "Transformer",
    definition: "Architecture de réseau neuronal qui utilise des mécanismes d'attention pour traiter les séquences de données, permettant de capturer les dépendances à long terme dans les textes.",
    category: "technical"
  },
  {
    term: "Attention (mécanisme d')",
    definition: "Technique utilisée dans les réseaux de neurones qui permet au modèle de se concentrer sur différentes parties des données d'entrée lors du traitement.",
    category: "technical"
  },
  {
    term: "Embeddings",
    definition: "Représentations vectorielles de mots, phrases ou autres entités qui capturent leur signification sémantique dans un espace multidimensionnel.",
    category: "technical"
  },
  {
    term: "Transfer learning",
    definition: "Technique qui permet de réutiliser un modèle préentraîné sur une tâche pour améliorer l'apprentissage sur une tâche différente mais connexe.",
    category: "technical"
  },
  {
    term: "Fine-tuning",
    definition: "Processus d'ajustement d'un modèle préentraîné sur des données spécifiques à une tâche pour améliorer ses performances sur cette tâche.",
    category: "technical"
  }
];

const TermsGlossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'technical' | 'ethical' | 'memory'>('all');

  const filteredTerms = aiTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedTerms = [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-6 mb-8">
        <div className="bg-card border rounded-xl p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Comprendre les mémoires en IA</h3>
              <p className="text-muted-foreground text-sm">
                Les différents types de mémoire en IA permettent de stocker et traiter 
                l'information de manière temporaire ou permanente, similaire à la cognition humaine.
              </p>
              
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="w-full h-[200px] bg-card flex items-center justify-center rounded-md overflow-hidden">
                  <svg width="90%" height="180" viewBox="0 0 800 300" className="mx-auto">
                    {/* Mémoire à court terme */}
                    <rect x="50" y="50" width="200" height="80" rx="10" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="2" />
                    <text x="150" y="95" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Mémoire à court terme</text>
                    
                    {/* Mémoire à long terme */}
                    <rect x="550" y="50" width="200" height="200" rx="10" fill="rgba(var(--primary), 0.1)" stroke="rgb(var(--primary))" strokeWidth="2" />
                    <text x="650" y="80" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Mémoire à long terme</text>
                    
                    {/* Sous-types de mémoire à long terme */}
                    <rect x="570" y="100" width="160" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="650" y="125" textAnchor="middle" fill="currentColor" fontSize="14">Sémantique</text>
                    
                    <rect x="570" y="150" width="160" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="650" y="175" textAnchor="middle" fill="currentColor" fontSize="14">Épisodique</text>
                    
                    <rect x="570" y="200" width="160" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="650" y="225" textAnchor="middle" fill="currentColor" fontSize="14">Procédurale</text>
                    
                    {/* Mémoire de contexte */}
                    <rect x="300" y="150" width="200" height="80" rx="10" fill="rgba(var(--primary), 0.15)" stroke="rgb(var(--primary))" strokeWidth="2" />
                    <text x="400" y="195" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Mémoire de contexte</text>
                    
                    {/* Flèches */}
                    <path d="M250 90 L300 90 L300 150" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M500 190 L550 190" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M150 130 L150 150 L300 150" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un terme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex overflow-x-auto py-1 gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              activeCategory === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setActiveCategory('general')}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              activeCategory === 'general' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Généraux
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              activeCategory === 'technical' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Techniques
          </button>
          <button
            onClick={() => setActiveCategory('ethical')}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              activeCategory === 'ethical' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Éthiques
          </button>
          <button
            onClick={() => setActiveCategory('memory')}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              activeCategory === 'memory' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Mémoire
          </button>
        </div>
      </div>

      {sortedTerms.length === 0 ? (
        <div className="text-center py-10">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium">Aucun terme trouvé</h3>
          <p className="text-muted-foreground">Essayez une autre recherche ou catégorie</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedTerms.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-between items-start">
                  <span>{item.term}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.category === 'general' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                      : item.category === 'technical' 
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' 
                        : item.category === 'ethical'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                  }`}>
                    {item.category === 'general' 
                      ? 'Général' 
                      : item.category === 'technical' 
                        ? 'Technique' 
                        : item.category === 'ethical'
                          ? 'Éthique'
                          : 'Mémoire'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.definition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TermsGlossary;
