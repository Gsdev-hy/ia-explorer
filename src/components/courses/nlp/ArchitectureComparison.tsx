
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, X, Zap, Brain, Clock } from 'lucide-react';

interface ArchitectureData {
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  useCases: string[];
  complexity: 'Faible' | 'Moyenne' | 'Élevée';
  performance: 'Bonne' | 'Très bonne' | 'Excellente';
}

const ArchitectureComparison: React.FC = () => {
  const architectures: ArchitectureData[] = [
    {
      name: "RNN (Récurrent)",
      description: "Traite les séquences mot par mot en gardant une mémoire du contexte",
      strengths: ["Mémoire du contexte", "Bon pour les séquences courtes"],
      weaknesses: ["Problème de gradient", "Lent à entraîner"],
      useCases: ["Analyse de sentiment simple", "Classification de texte court"],
      complexity: "Moyenne",
      performance: "Bonne"
    },
    {
      name: "LSTM/GRU",
      description: "Version améliorée des RNN avec mécanismes de mémoire sophistiqués",
      strengths: ["Mémoire long terme", "Évite la disparition du gradient"],
      weaknesses: ["Toujours séquentiel", "Complexité computationnelle"],
      useCases: ["Traduction automatique", "Génération de texte"],
      complexity: "Élevée",
      performance: "Très bonne"
    },
    {
      name: "Transformer",
      description: "Architecture basée sur l'attention, traite tout le texte en parallèle",
      strengths: ["Parallélisation", "Attention globale", "Performance exceptionnelle"],
      weaknesses: ["Consommation mémoire", "Besoin de beaucoup de données"],
      useCases: ["GPT, BERT", "Tâches complexes de NLP"],
      complexity: "Élevée",
      performance: "Excellente"
    }
  ];

  const getComplexityIcon = (complexity: string) => {
    switch (complexity) {
      case 'Faible': return <Zap className="h-4 w-4 text-green-500" />;
      case 'Moyenne': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Élevée': return <Brain className="h-4 w-4 text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {architectures.map((arch, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{arch.name}</h4>
                  <p className="text-sm text-muted-foreground">{arch.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  {getComplexityIcon(arch.complexity)}
                  <span className="text-sm">Complexité: {arch.complexity}</span>
                  <Badge variant="secondary">{arch.performance}</Badge>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2 text-green-700 dark:text-green-300">Points forts</h5>
                  <ul className="space-y-1">
                    {arch.strengths.map((strength, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2 text-red-700 dark:text-red-300">Limitations</h5>
                  <ul className="space-y-1">
                    {arch.weaknesses.map((weakness, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <X className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Cas d'usage</h5>
                  <div className="flex flex-wrap gap-1">
                    {arch.useCases.map((useCase, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureComparison;
