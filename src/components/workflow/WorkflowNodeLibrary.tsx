
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
  BarChart3
} from 'lucide-react';

interface NodeTemplate {
  id: string;
  type: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  configurable: boolean;
}

const nodeTemplates: NodeTemplate[] = [
  {
    id: 'llm-node',
    type: 'llm',
    label: 'LLM Chat',
    description: 'Génération de texte avec GPT, Claude, etc.',
    icon: <MessageSquare className="h-4 w-4" />,
    category: 'AI',
    configurable: true
  },
  {
    id: 'image-gen',
    type: 'imageGen',
    label: 'Génération d\'image',
    description: 'DALL-E, Midjourney, Stable Diffusion',
    icon: <Image className="h-4 w-4" />,
    category: 'AI',
    configurable: true
  },
  {
    id: 'audio-gen',
    type: 'audioGen',
    label: 'Génération audio',
    description: 'Synthèse vocale et génération musicale',
    icon: <Music className="h-4 w-4" />,
    category: 'AI',
    configurable: true
  },
  {
    id: 'text-processor',
    type: 'textProcessor',
    label: 'Traitement de texte',
    description: 'Analyse, résumé, traduction',
    icon: <FileText className="h-4 w-4" />,
    category: 'Processing',
    configurable: true
  },
  {
    id: 'data-source',
    type: 'dataSource',
    label: 'Source de données',
    description: 'API, base de données, fichiers',
    icon: <Database className="h-4 w-4" />,
    category: 'Input',
    configurable: true
  },
  {
    id: 'filter',
    type: 'filter',
    label: 'Filtre',
    description: 'Filtrage et validation des données',
    icon: <Filter className="h-4 w-4" />,
    category: 'Processing',
    configurable: true
  },
  {
    id: 'trigger',
    type: 'trigger',
    label: 'Déclencheur',
    description: 'Webhook, timer, événement',
    icon: <Zap className="h-4 w-4" />,
    category: 'Control',
    configurable: true
  },
  {
    id: 'analytics',
    type: 'analytics',
    label: 'Analytics',
    description: 'Métriques et analyse de performance',
    icon: <BarChart3 className="h-4 w-4" />,
    category: 'Output',
    configurable: false
  }
];

const WorkflowNodeLibrary: React.FC = () => {
  const categories = [...new Set(nodeTemplates.map(node => node.category))];

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="p-4 space-y-4">
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
                  onDragStart={(e) => onDragStart(e, node.type)}
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
                          {node.configurable && (
                            <Badge variant="secondary" className="text-xs">
                              Config
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {node.description}
                        </p>
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
