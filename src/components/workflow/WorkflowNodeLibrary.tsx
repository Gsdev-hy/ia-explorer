
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Brain, 
  FileText, 
  Image, 
  Music, 
  Video, 
  MessageSquare, 
  Database, 
  Zap,
  BarChart3,
  Filter,
  Settings,
  Code,
  Globe,
  Mail,
  ShoppingCart,
  Search,
  Shield,
  Puzzle,
  Target,
  Lightbulb,
  Cpu,
  Eye,
  Mic,
  Users,
  Calendar,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

interface NodeCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  nodes: WorkflowNode[];
}

interface WorkflowNode {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  complexity: 'débutant' | 'intermédiaire' | 'avancé';
  cost: string;
  inputs: string[];
  outputs: string[];
}

const workflowNodes: WorkflowNode[] = [
  // Nœuds de traitement de texte
  {
    id: 'gpt4-processor',
    name: 'Processeur GPT-4',
    description: 'Traitement de texte avancé avec GPT-4 Turbo',
    icon: <Brain className="h-4 w-4" />,
    category: 'llm',
    complexity: 'intermédiaire',
    cost: '$0.03/1K tokens',
    inputs: ['Texte', 'Instructions'],
    outputs: ['Texte généré', 'Métadonnées']
  },
  {
    id: 'claude-3-processor',
    name: 'Processeur Claude 3',
    description: 'Analyse et génération avec Claude 3 Opus',
    icon: <MessageSquare className="h-4 w-4" />,
    category: 'llm',
    complexity: 'intermédiaire',
    cost: '$0.015/1K tokens',
    inputs: ['Texte', 'Contexte'],
    outputs: ['Réponse', 'Score confiance']
  },
  {
    id: 'text-embedding',
    name: 'Embedding Vectoriel',
    description: 'Conversion texte en vecteurs pour recherche sémantique',
    icon: <Puzzle className="h-4 w-4" />,
    category: 'llm',
    complexity: 'avancé',
    cost: '$0.0001/1K tokens',
    inputs: ['Texte'],
    outputs: ['Vecteur', 'Dimension']
  },
  {
    id: 'sentiment-analyzer',
    name: 'Analyseur de Sentiment',
    description: 'Détection d\'émotion et sentiment dans le texte',
    icon: <BarChart3 className="h-4 w-4" />,
    category: 'analyse',
    complexity: 'débutant',
    cost: '$0.005/requête',
    inputs: ['Texte'],
    outputs: ['Sentiment', 'Score', 'Émotions']
  },

  // Nœuds de génération d'images
  {
    id: 'dalle3-generator',
    name: 'Générateur DALL-E 3',
    description: 'Création d\'images haute qualité à partir de texte',
    icon: <Image className="h-4 w-4" />,
    category: 'image',
    complexity: 'débutant',
    cost: '$0.04/image',
    inputs: ['Prompt', 'Style'],
    outputs: ['Image', 'URL', 'Métadonnées']
  },
  {
    id: 'midjourney-api',
    name: 'Midjourney API',
    description: 'Génération artistique via l\'API Midjourney',
    icon: <Lightbulb className="h-4 w-4" />,
    category: 'image',
    complexity: 'intermédiaire',
    cost: '$0.06/image',
    inputs: ['Prompt', 'Paramètres'],
    outputs: ['Image', 'Variations']
  },
  {
    id: 'image-upscaler',
    name: 'Amélioration d\'Image',
    description: 'Augmentation de résolution et amélioration qualité',
    icon: <Eye className="h-4 w-4" />,
    category: 'image',
    complexity: 'intermédiaire',
    cost: '$0.02/image',
    inputs: ['Image source'],
    outputs: ['Image HD', 'Facteur zoom']
  },

  // Nœuds audio et vidéo
  {
    id: 'whisper-transcription',
    name: 'Transcription Whisper',
    description: 'Conversion audio/vidéo en texte avec Whisper',
    icon: <Mic className="h-4 w-4" />,
    category: 'audio',
    complexity: 'débutant',
    cost: '$0.006/minute',
    inputs: ['Audio/Vidéo'],
    outputs: ['Transcription', 'Timestamps']
  },
  {
    id: 'elevenlabs-tts',
    name: 'Synthèse Vocale ElevenLabs',
    description: 'Génération de voix réaliste à partir de texte',
    icon: <Music className="h-4 w-4" />,
    category: 'audio',
    complexity: 'intermédiaire',
    cost: '$0.30/1K caractères',
    inputs: ['Texte', 'Voix'],
    outputs: ['Audio', 'Format']
  },
  {
    id: 'video-generator',
    name: 'Générateur Vidéo IA',
    description: 'Création de vidéos courtes à partir d\'images et texte',
    icon: <Video className="h-4 w-4" />,
    category: 'video',
    complexity: 'avancé',
    cost: '$0.12/seconde',
    inputs: ['Images', 'Script'],
    outputs: ['Vidéo', 'Durée']
  },

  // Nœuds de données et traitement
  {
    id: 'web-scraper',
    name: 'Extracteur Web',
    description: 'Extraction automatique de données depuis des sites web',
    icon: <Globe className="h-4 w-4" />,
    category: 'data',
    complexity: 'intermédiaire',
    cost: '$0.01/page',
    inputs: ['URL', 'Sélecteurs'],
    outputs: ['Données', 'Statut']
  },
  {
    id: 'database-connector',
    name: 'Connecteur Base de Données',
    description: 'Interface avec bases de données SQL et NoSQL',
    icon: <Database className="h-4 w-4" />,
    category: 'data',
    complexity: 'avancé',
    cost: 'Variable',
    inputs: ['Requête', 'Paramètres'],
    outputs: ['Résultats', 'Métadonnées']
  },
  {
    id: 'api-connector',
    name: 'Connecteur API',
    description: 'Intégration avec APIs externes et webhooks',
    icon: <Zap className="h-4 w-4" />,
    category: 'integration',
    complexity: 'intermédiaire',
    cost: 'Variable',
    inputs: ['Endpoint', 'Headers', 'Payload'],
    outputs: ['Réponse', 'Code statut']
  },

  // Nœuds de logique et contrôle
  {
    id: 'condition-gate',
    name: 'Porte Conditionnelle',
    description: 'Routage conditionnel basé sur des règles',
    icon: <Filter className="h-4 w-4" />,
    category: 'logic',
    complexity: 'débutant',
    cost: 'Gratuit',
    inputs: ['Données', 'Conditions'],
    outputs: ['Branche A', 'Branche B']
  },
  {
    id: 'loop-processor',
    name: 'Processeur Boucle',
    description: 'Exécution itérative sur des ensembles de données',
    icon: <Settings className="h-4 w-4" />,
    category: 'logic',
    complexity: 'intermédiaire',
    cost: 'Gratuit',
    inputs: ['Collection', 'Logique'],
    outputs: ['Résultats', 'Compteur']
  },
  {
    id: 'aggregator',
    name: 'Agrégateur',
    description: 'Fusion et agrégation de données multiples',
    icon: <Target className="h-4 w-4" />,
    category: 'logic',
    complexity: 'débutant',
    cost: 'Gratuit',
    inputs: ['Données A', 'Données B', 'Données C'],
    outputs: ['Résultat agrégé']
  },

  // Nœuds spécialisés métier
  {
    id: 'email-sender',
    name: 'Envoyeur Email',
    description: 'Envoi d\'emails personnalisés en masse',
    icon: <Mail className="h-4 w-4" />,
    category: 'communication',
    complexity: 'débutant',
    cost: '$0.001/email',
    inputs: ['Destinataires', 'Template'],
    outputs: ['Statut envoi', 'Statistiques']
  },
  {
    id: 'recommendation-engine',
    name: 'Moteur de Recommandation',
    description: 'Suggestions personnalisées basées sur ML',
    icon: <ShoppingCart className="h-4 w-4" />,
    category: 'ml',
    complexity: 'avancé',
    cost: '$0.02/recommandation',
    inputs: ['Profil utilisateur', 'Historique'],
    outputs: ['Recommandations', 'Scores']
  },
  {
    id: 'security-scanner',
    name: 'Scanner Sécurité',
    description: 'Analyse de vulnérabilités et détection d\'anomalies',
    icon: <Shield className="h-4 w-4" />,
    category: 'security',
    complexity: 'avancé',
    cost: '$0.05/scan',
    inputs: ['Code/URL', 'Règles'],
    outputs: ['Rapport', 'Vulnérabilités']
  }
];

const nodeCategories: NodeCategory[] = [
  {
    id: 'llm',
    name: 'LLM & NLP',
    icon: <Brain className="h-4 w-4" />,
    color: 'bg-purple-100 text-purple-800',
    nodes: workflowNodes.filter(node => node.category === 'llm')
  },
  {
    id: 'image',
    name: 'Génération Images',
    icon: <Image className="h-4 w-4" />,
    color: 'bg-blue-100 text-blue-800',
    nodes: workflowNodes.filter(node => node.category === 'image')
  },
  {
    id: 'audio',
    name: 'Audio & Voix',
    icon: <Music className="h-4 w-4" />,
    color: 'bg-green-100 text-green-800',
    nodes: workflowNodes.filter(node => node.category === 'audio')
  },
  {
    id: 'video',
    name: 'Vidéo',
    icon: <Video className="h-4 w-4" />,
    color: 'bg-red-100 text-red-800',
    nodes: workflowNodes.filter(node => node.category === 'video')
  },
  {
    id: 'data',
    name: 'Données',
    icon: <Database className="h-4 w-4" />,
    color: 'bg-yellow-100 text-yellow-800',
    nodes: workflowNodes.filter(node => node.category === 'data')
  },
  {
    id: 'integration',
    name: 'Intégrations',
    icon: <Zap className="h-4 w-4" />,
    color: 'bg-orange-100 text-orange-800',
    nodes: workflowNodes.filter(node => node.category === 'integration')
  },
  {
    id: 'logic',
    name: 'Logique',
    icon: <Settings className="h-4 w-4" />,
    color: 'bg-gray-100 text-gray-800',
    nodes: workflowNodes.filter(node => node.category === 'logic')
  },
  {
    id: 'analyse',
    name: 'Analyse',
    icon: <BarChart3 className="h-4 w-4" />,
    color: 'bg-teal-100 text-teal-800',
    nodes: workflowNodes.filter(node => node.category === 'analyse')
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: <Mail className="h-4 w-4" />,
    color: 'bg-pink-100 text-pink-800',
    nodes: workflowNodes.filter(node => node.category === 'communication')
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: <Cpu className="h-4 w-4" />,
    color: 'bg-indigo-100 text-indigo-800',
    nodes: workflowNodes.filter(node => node.category === 'ml')
  },
  {
    id: 'security',
    name: 'Sécurité',
    icon: <Shield className="h-4 w-4" />,
    color: 'bg-rose-100 text-rose-800',
    nodes: workflowNodes.filter(node => node.category === 'security')
  }
];

const WorkflowNodeLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'débutant':
        return 'bg-green-100 text-green-800';
      case 'intermédiaire':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCategories = nodeCategories.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    
    return category.nodes.some(node => 
      node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      node.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredNodes = (nodes: WorkflowNode[]) => {
    return nodes.filter(node => 
      node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      node.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="h-full overflow-y-auto p-4 space-y-4">
      {/* Recherche et filtres */}
      <div className="space-y-3">
        <Input
          placeholder="Rechercher un nœud..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        
        <div className="flex flex-wrap gap-1">
          <Badge
            variant={selectedCategory === 'all' ? 'default' : 'secondary'}
            className="cursor-pointer text-xs"
            onClick={() => setSelectedCategory('all')}
          >
            Tous
          </Badge>
          {nodeCategories.map(category => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'secondary'}
              className="cursor-pointer text-xs"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Statistiques */}
      <div className="text-xs text-muted-foreground p-2 bg-secondary/20 rounded">
        {workflowNodes.length} nœuds disponibles • {nodeCategories.length} catégories
      </div>

      {/* Nœuds par catégorie */}
      {filteredCategories.map(category => {
        const categoryNodes = filteredNodes(category.nodes);
        if (categoryNodes.length === 0) return null;

        return (
          <div key={category.id} className="space-y-2">
            <div className="flex items-center gap-2 font-medium text-sm">
              {category.icon}
              <span>{category.name}</span>
              <Badge variant="outline" className="text-xs">
                {categoryNodes.length}
              </Badge>
            </div>
            
            <div className="space-y-2">
              {categoryNodes.map(node => (
                <Card key={node.id} className="cursor-move hover:shadow-sm transition-shadow border-l-4 border-l-primary/30">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-2">
                      <div className="p-1 rounded bg-primary/10 text-primary">
                        {node.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm mb-1">{node.name}</div>
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                          {node.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          <Badge 
                            className={`text-xs ${getComplexityColor(node.complexity)}`}
                            variant="secondary"
                          >
                            {node.complexity}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {node.cost}
                          </Badge>
                        </div>

                        <div className="text-xs text-muted-foreground">
                          <div className="mb-1">
                            <strong>Entrées:</strong> {node.inputs.join(', ')}
                          </div>
                          <div>
                            <strong>Sorties:</strong> {node.outputs.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}

      {filteredCategories.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Search className="h-8 w-8 mx-auto mb-2" />
          <p>Aucun nœud trouvé pour "{searchTerm}"</p>
        </div>
      )}

      {/* Section créateur */}
      <div className="mt-6 p-3 bg-secondary/10 rounded border text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Geoffroy Streit</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Architecte en workflows IA et automatisation
        </p>
      </div>
    </div>
  );
};

export default WorkflowNodeLibrary;
