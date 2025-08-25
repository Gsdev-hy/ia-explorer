
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search,
  Star,
  Users,
  Clock,
  DollarSign,
  Zap,
  Brain,
  Image,
  MessageSquare,
  BarChart3,
  Code,
  Mail,
  ShoppingCart,
  Globe,
  ExternalLink
} from 'lucide-react';
import { Node, Edge } from '@xyflow/react';
import { Link } from 'react-router-dom';

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'avancé';
  estimatedTime: string;
  estimatedCost: string;
  rating: number;
  usageCount: number;
  tags: string[];
  icon: React.ReactNode;
  nodes: Node[];
  edges: Edge[];
  author: string;
}

interface WorkflowTemplateLibraryProps {
  onLoadTemplate: (template: WorkflowTemplate) => void;
}

const workflowTemplates: WorkflowTemplate[] = [
  {
    id: 'content-automation',
    name: 'Automatisation Contenu Blog',
    description: 'Pipeline complet pour générer, optimiser et publier du contenu de blog automatiquement',
    category: 'Marketing',
    difficulty: 'moyen',
    estimatedTime: '15-30 min',
    estimatedCost: '$0.20/article',
    rating: 4.8,
    usageCount: 1250,
    tags: ['SEO', 'Contenu', 'Blog', 'Automatisation'],
    icon: <Brain className="h-4 w-4" />,
    nodes: [],
    edges: [],
    author: 'Geoffroy Streit'
  },
  {
    id: 'customer-service-bot',
    name: 'Chatbot Service Client RAG',
    description: 'Assistant intelligent avec base de connaissances et escalation automatique',
    category: 'Support',
    difficulty: 'avancé',
    estimatedTime: '45-60 min',
    estimatedCost: '$0.15/conversation',
    rating: 4.9,
    usageCount: 890,
    tags: ['RAG', 'Chatbot', 'Support', 'IA Conversationnelle'],
    icon: <MessageSquare className="h-4 w-4" />,
    nodes: [],
    edges: [],
    author: 'Geoffroy Streit'
  },
  {
    id: 'image-processing-pipeline',
    name: 'Pipeline Traitement Images',
    description: 'Traitement automatique d\'images avec redimensionnement, compression et génération de variantes',
    category: 'Multimédia',
    difficulty: 'moyen',
    estimatedTime: '20-35 min',
    estimatedCost: '$0.08/image',
    rating: 4.6,
    usageCount: 1420,
    tags: ['Images', 'Traitement', 'Optimisation', 'API'],
    icon: <Image className="h-4 w-4" />,
    nodes: [],
    edges: [],
    author: 'Geoffroy Streit'
  },
  {
    id: 'data-analysis-workflow',
    name: 'Analyse de Données Avancée',
    description: 'Workflow d\'analyse de données avec nettoyage, transformation et visualisation automatique',
    category: 'Analytics',
    difficulty: 'avancé',
    estimatedTime: '60-90 min',
    estimatedCost: '$0.25/dataset',
    rating: 4.7,
    usageCount: 750,
    tags: ['Données', 'Analytics', 'Visualisation', 'ML'],
    icon: <BarChart3 className="h-4 w-4" />,
    nodes: [],
    edges: [],
    author: 'Geoffroy Streit'
  },
  {
    id: 'code-review-automation',
    name: 'Révision Code Automatisée',
    description: 'Système de révision de code avec analyse de qualité, tests et suggestions d\'amélioration',
    category: 'Développement',
    difficulty: 'avancé',
    estimatedTime: '40-60 min',
    estimatedCost: '$0.12/révision',
    rating: 4.8,
    usageCount: 680,
    tags: ['Code', 'Qualité', 'Tests', 'DevOps'],
    icon: <Code className="h-4 w-4" />,
    nodes: [],
    edges: [],
    author: 'Geoffroy Streit'
  },
  {
    id: 'email-marketing-optimizer',
    name: 'Optimiseur Email Marketing',
    description: 'Campagne email intelligente avec segmentation, A/B testing et optimisation automatique',
    category: 'Marketing',
    difficulty: 'moyen',
    estimatedTime: '25-40 min',
    estimatedCost: '$0.05/email',
    rating: 4.5,
    usageCount: 1850,
    tags: ['Email', 'Marketing', 'A/B Test', 'Segmentation'],
    icon: <Mail className="h-4 w-4" />,
    nodes: [],
    edges: [],
    author: 'Geoffroy Streit'
  }
];

const WorkflowTemplateLibrary: React.FC<WorkflowTemplateLibraryProps> = ({ onLoadTemplate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(workflowTemplates.map(t => t.category))];

  const getDifficultyColor = (difficulty: WorkflowTemplate['difficulty']) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'moyen': return 'bg-yellow-100 text-yellow-800';
      case 'avancé': return 'bg-red-100 text-red-800';
    }
  };

  const filteredTemplates = workflowTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="h-full flex flex-col">
      {/* Lien retour vers les ressources */}
      <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20 flex-shrink-0">
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Plus d'outils IA dans</span>
          <Button variant="link" className="p-0 h-auto text-primary font-medium" asChild>
            <Link to="/ressources?tab=outils#resources" className="flex items-center gap-1">
              les Ressources
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Recherche et filtres */}
      <div className="space-y-3 flex-shrink-0 px-1">
        <Input
          placeholder="Rechercher un template..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        
        <div className="flex flex-wrap gap-1">
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'secondary'}
              className="cursor-pointer text-xs"
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'Tous' : category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div className="flex-1 overflow-y-auto mt-4 px-1">
        <div className="space-y-4">
          {filteredTemplates.map(template => (
            <Card key={template.id} className="hover:shadow-md transition-shadow border-l-4 border-l-primary/30">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {template.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base mb-1 break-words">
                      {template.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-2 break-words">
                      {template.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      <Badge 
                        className={`text-xs ${getDifficultyColor(template.difficulty)}`}
                        variant="secondary"
                      >
                        {template.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {template.estimatedTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {template.estimatedCost}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {template.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {template.usageCount}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {template.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-muted-foreground">
                    Par {template.author}
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => onLoadTemplate(template)}
                    className="flex items-center gap-1"
                  >
                    <Zap className="h-3 w-3" />
                    Utiliser ce template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredTemplates.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2" />
              <p>Aucun template trouvé pour "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowTemplateLibrary;
