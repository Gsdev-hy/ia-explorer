
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Search } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'general' | 'technical' | 'ethical';
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
  }
];

const TermsGlossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'technical' | 'ethical'>('all');

  const filteredTerms = aiTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedTerms = [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="w-full">
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
        <div className="flex gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeCategory === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setActiveCategory('general')}
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeCategory === 'general' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Généraux
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeCategory === 'technical' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Techniques
          </button>
          <button
            onClick={() => setActiveCategory('ethical')}
            className={`px-3 py-1.5 rounded-full text-sm ${
              activeCategory === 'ethical' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Éthiques
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
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  }`}>
                    {item.category === 'general' 
                      ? 'Général' 
                      : item.category === 'technical' 
                        ? 'Technique' 
                        : 'Éthique'}
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
