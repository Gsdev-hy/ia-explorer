
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Image, 
  Music, 
  FileText, 
  Database, 
  Filter,
  Zap,
  BarChart3,
  Brain,
  Mic,
  Video,
  Globe,
  Shield,
  GitBranch
} from 'lucide-react';

interface NodeTemplate {
  id: string;
  type: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  configurable: boolean;
  cost: string;
  complexity: 'simple' | 'moyen' | 'avancé';
}

const nodeTemplates: NodeTemplate[] = [
  // AI Models
  {
    id: 'gpt-4',
    type: 'llm',
    label: 'GPT-4 Turbo',
    description: 'Modèle de langage avancé pour génération et analyse',
    icon: <MessageSquare className="h-4 w-4" />,
    category: 'IA Générative',
    configurable: true,
    cost: '$0.03/1K tokens',
    complexity: 'simple'
  },
  {
    id: 'claude-3',
    type: 'llm',
    label: 'Claude 3 Sonnet',
    description: 'Assistant IA pour analyse et raisonnement complexe',
    icon: <Brain className="h-4 w-4" />,
    category: 'IA Générative',
    configurable: true,
    cost: '$0.015/1K tokens',
    complexity: 'simple'
  },
  {
    id: 'dalle-3',
    type: 'imageGen',
    label: 'DALL-E 3',
    description: 'Génération d\'images haute qualité à partir de texte',
    icon: <Image className="h-4 w-4" />,
    category: 'IA Générative',
    configurable: true,
    cost: '$0.08/image',
    complexity: 'simple'
  },
  {
    id: 'whisper',
    type: 'audioProcessor',
    label: 'Whisper',
    description: 'Transcription et traduction audio automatique',
    icon: <Mic className="h-4 w-4" />,
    category: 'IA Générative',
    configurable: true,
    cost: '$0.006/minute',
    complexity: 'simple'
  },
  
  // Processing
  {
    id: 'text-embeddings',
    type: 'textProcessor',
    label: 'Text Embeddings',
    description: 'Vectorisation de texte pour recherche sémantique',
    icon: <FileText className="h-4 w-4" />,
    category: 'Traitement',
    configurable: true,
    cost: '$0.0001/1K tokens',
    complexity: 'moyen'
  },
  {
    id: 'sentiment-analysis',
    type: 'analyzer',
    label: 'Analyse de Sentiment',
    description: 'Classification émotionnelle de texte',
    icon: <BarChart3 className="h-4 w-4" />,
    category: 'Traitement',
    configurable: true,
    cost: '$0.002/analyse',
    complexity: 'simple'
  },
  {
    id: 'content-filter',
    type: 'filter',
    label: 'Filtre de Contenu',
    description: 'Modération et filtrage automatique',
    icon: <Shield className="h-4 w-4" />,
    category: 'Traitement',
    configurable: true,
    cost: '$0.001/analyse',
    complexity: 'simple'
  },
  
  // Data Sources
  {
    id: 'web-scraper',
    type: 'dataSource',
    label: 'Web Scraper',
    description: 'Extraction de données depuis des sites web',
    icon: <Globe className="h-4 w-4" />,
    category: 'Sources',
    configurable: true,
    cost: 'Variable',
    complexity: 'avancé'
  },
  {
    id: 'database-query',
    type: 'dataSource',
    label: 'Requête BDD',
    description: 'Connexion et requête base de données',
    icon: <Database className="h-4 w-4" />,
    category: 'Sources',
    configurable: true,
    cost: 'Gratuit',
    complexity: 'moyen'
  },
  
  // Control Flow
  {
    id: 'conditional',
    type: 'control',
    label: 'Condition',
    description: 'Branchement conditionnel du workflow',
    icon: <GitBranch className="h-4 w-4" />,
    category: 'Contrôle',
    configurable: true,
    cost: 'Gratuit',
    complexity: 'moyen'
  },
  {
    id: 'webhook',
    type: 'trigger',
    label: 'Webhook',
    description: 'Déclenchement par événement externe',
    icon: <Zap className="h-4 w-4" />,
    category: 'Contrôle',
    configurable: true,
    cost: 'Gratuit',
    complexity: 'simple'
  },
  
  // Advanced
  {
    id: 'video-analysis',
    type: 'videoProcessor',
    label: 'Analyse Vidéo',
    description: 'Traitement et analyse de contenu vidéo',
    icon: <Video className="h-4 w-4" />,
    category: 'IA Avancée',
    configurable: true,
    cost: '$0.15/minute',
    complexity: 'avancé'
  },
  {
    id: 'music-generation',
    type: 'audioGen',
    label: 'Génération Musicale',
    description: 'Création de musique par IA',
    icon: <Music className="h-4 w-4" />,
    category: 'IA Avancée',
    configurable: true,
    cost: '$0.25/génération',
    complexity: 'avancé'
  }
];

const WorkflowNodeLibrary: React.FC = () => {
  const categories = [...new Set(nodeTemplates.map(node => node.category))];

  const onDragStart = (event: React.DragEvent, nodeTemplate: NodeTemplate) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeTemplate));
    event.dataTransfer.effectAllowed = 'move';
  };

  const getComplexityColor = (complexity: NodeTemplate['complexity']) => {
    switch (complexity) {
      case 'simple':
        return 'bg-green-100 text-green-800';
      case 'moyen':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancé':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
      {categories.map(category => (
        <div key={category}>
          <h3 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide">
            {category}
          </h3>
          <div className="space-y-2">
            {nodeTemplates
              .filter(node => node.category === category)
              .map(node => (
                <Card
                  key={node.id}
                  className="cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={(e) => onDragStart(e, node)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start gap-2">
                      <div className="text-primary">
                        {node.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate">
                            {node.label}
                          </h4>
                          <Badge 
                            className={`text-xs ${getComplexityColor(node.complexity)}`}
                            variant="secondary"
                          >
                            {node.complexity}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                          {node.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-blue-600 font-medium">
                            {node.cost}
                          </span>
                          {node.configurable && (
                            <Badge variant="outline" className="text-xs">
                              Config
                            </Badge>
                          )}
                        </div>
                      </div>
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

export default WorkflowNodeLibrary;
