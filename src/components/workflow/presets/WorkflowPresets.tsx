
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Image, 
  MessageSquare, 
  BarChart3,
  Zap,
  Database
} from 'lucide-react';
import { Node, Edge } from '@xyflow/react';

interface WorkflowPreset {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  nodes: Node[];
  edges: Edge[];
  estimatedCost: string;
  complexity: 'facile' | 'moyen' | 'avancé';
}

interface WorkflowPresetsProps {
  onLoadPreset: (preset: WorkflowPreset) => void;
}

const workflowPresets: WorkflowPreset[] = [
  {
    id: 'content-generation',
    name: 'Génération de Contenu',
    description: 'Pipeline automatisé pour créer du contenu textuel et visuel',
    category: 'Création',
    icon: <FileText className="h-4 w-4" />,
    estimatedCost: '$0.15/exécution',
    complexity: 'facile',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Sujet d\'article' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Génération texte GPT-4' },
        position: { x: 300, y: 100 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Génération image DALL-E' },
        position: { x: 500, y: 100 }
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Article complet' },
        position: { x: 700, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' }
    ]
  },
  {
    id: 'sentiment-analysis',
    name: 'Analyse de Sentiment',
    description: 'Analyse des retours clients avec classification automatique',
    category: 'Analyse',
    icon: <BarChart3 className="h-4 w-4" />,
    estimatedCost: '$0.08/exécution',
    complexity: 'moyen',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Commentaires clients' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Nettoyage données' },
        position: { x: 300, y: 100 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Analyse sentiment NLP' },
        position: { x: 500, y: 100 }
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Rapport d\'analyse' },
        position: { x: 700, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' }
    ]
  },
  {
    id: 'chatbot-automation',
    name: 'Chatbot Intelligent',
    description: 'Assistant conversationnel avec base de connaissances',
    category: 'Automatisation',
    icon: <MessageSquare className="h-4 w-4" />,
    estimatedCost: '$0.12/exécution',
    complexity: 'avancé',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Question utilisateur' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Recherche base connaissances' },
        position: { x: 300, y: 50 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Génération réponse LLM' },
        position: { x: 300, y: 150 }
      },
      {
        id: '4',
        type: 'default',
        data: { label: 'Fusion contexte' },
        position: { x: 500, y: 100 }
      },
      {
        id: '5',
        type: 'output',
        data: { label: 'Réponse personnalisée' },
        position: { x: 700, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
      { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
      { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' }
    ]
  }
];

const WorkflowPresets: React.FC<WorkflowPresetsProps> = ({ onLoadPreset }) => {
  const getComplexityColor = (complexity: WorkflowPreset['complexity']) => {
    switch (complexity) {
      case 'facile':
        return 'bg-green-100 text-green-800';
      case 'moyen':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancé':
        return 'bg-red-100 text-red-800';
    }
  };

  const categories = [...new Set(workflowPresets.map(preset => preset.category))];

  return (
    <div className="space-y-6">
      {categories.map(category => (
        <div key={category}>
          <h3 className="font-semibold text-lg mb-3">{category}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflowPresets
              .filter(preset => preset.category === category)
              .map(preset => (
                <Card key={preset.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      {preset.icon}
                      {preset.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge 
                        className={`text-xs ${getComplexityColor(preset.complexity)}`}
                        variant="secondary"
                      >
                        {preset.complexity}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {preset.estimatedCost}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {preset.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">
                        {preset.nodes.length} nœuds • {preset.edges.length} connexions
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => onLoadPreset(preset)}
                      >
                        Charger
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkflowPresets;
