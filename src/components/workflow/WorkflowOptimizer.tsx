
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { Node, Edge } from '@xyflow/react';

interface OptimizationSuggestion {
  id: string;
  type: 'cost' | 'performance' | 'reliability';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  estimatedSaving: string;
  complexity: 'easy' | 'medium' | 'hard';
}

interface WorkflowAnalytics {
  totalExecutions: number;
  successRate: number;
  averageDuration: number;
  totalCost: number;
  mostExpensiveNode: string;
  bottleneckNode: string;
  suggestions: OptimizationSuggestion[];
}

interface WorkflowOptimizerProps {
  nodes: Node[];
  edges: Edge[];
}

const WorkflowOptimizer: React.FC<WorkflowOptimizerProps> = ({ nodes, edges }) => {
  const [analytics, setAnalytics] = useState<WorkflowAnalytics | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    analyzeWorkflow();
  }, [nodes, edges]);

  const analyzeWorkflow = async () => {
    setIsAnalyzing(true);
    
    // Simulation d'analyse
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockAnalytics: WorkflowAnalytics = {
      totalExecutions: 156,
      successRate: 92.3,
      averageDuration: 4200,
      totalCost: 2.34,
      mostExpensiveNode: 'LLM Processing',
      bottleneckNode: 'Image Generation',
      suggestions: [
        {
          id: '1',
          type: 'cost',
          title: 'Optimiser les requêtes LLM',
          description: 'Réduire la taille des prompts et utiliser un modèle moins coûteux pour les tâches simples',
          impact: 'high',
          estimatedSaving: '35% de réduction des coûts',
          complexity: 'easy'
        },
        {
          id: '2',
          type: 'performance',
          title: 'Cache pour génération d\'images',
          description: 'Implémenter un cache pour éviter de regénérer des images similaires',
          impact: 'medium',
          estimatedSaving: '25% plus rapide',
          complexity: 'medium'
        },
        {
          id: '3',
          type: 'reliability',
          title: 'Ajouter des retry automatiques',
          description: 'Configurer des tentatives automatiques en cas d\'échec temporaire',
          impact: 'high',
          estimatedSaving: '15% d\'amélioration du taux de succès',
          complexity: 'easy'
        },
        {
          id: '4',
          type: 'cost',
          title: 'Parallélisation des tâches',
          description: 'Exécuter certaines étapes en parallèle pour réduire le temps total',
          impact: 'medium',
          estimatedSaving: '40% plus rapide',
          complexity: 'hard'
        }
      ]
    };
    
    setAnalytics(mockAnalytics);
    setIsAnalyzing(false);
  };

  const getSuggestionIcon = (type: OptimizationSuggestion['type']) => {
    switch (type) {
      case 'cost':
        return <DollarSign className="h-4 w-4 text-green-500" />;
      case 'performance':
        return <TrendingUp className="h-4 w-4 text-blue-500" />;
      case 'reliability':
        return <CheckCircle className="h-4 w-4 text-purple-500" />;
    }
  };

  const getImpactColor = (impact: OptimizationSuggestion['impact']) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getComplexityColor = (complexity: OptimizationSuggestion['complexity']) => {
    switch (complexity) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
    }
  };

  if (isAnalyzing) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <BarChart3 className="h-8 w-8 mx-auto text-primary animate-pulse" />
            <div>
              <p className="font-medium">Analyse en cours...</p>
              <p className="text-sm text-muted-foreground">
                Examen des performances et identification des optimisations
              </p>
            </div>
            <Progress value={66} className="w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analytics) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <AlertTriangle className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-muted-foreground">Impossible d'analyser le workflow</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Métriques principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">Exécutions</p>
                <p className="text-lg font-semibold">{analytics.totalExecutions}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">Taux de succès</p>
                <p className="text-lg font-semibold">{analytics.successRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-xs text-muted-foreground">Durée moy.</p>
                <p className="text-lg font-semibold">{(analytics.averageDuration / 1000).toFixed(1)}s</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">Coût total</p>
                <p className="text-lg font-semibold">${analytics.totalCost}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Points d'attention */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Points d'attention
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Nœud le plus coûteux</p>
                <p className="text-sm text-muted-foreground">{analytics.mostExpensiveNode}</p>
              </div>
              <TrendingUp className="h-4 w-4 text-red-500" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Goulot d'étranglement</p>
                <p className="text-sm text-muted-foreground">{analytics.bottleneckNode}</p>
              </div>
              <Clock className="h-4 w-4 text-orange-500" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Suggestions d'optimisation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Suggestions d'optimisation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analytics.suggestions.map(suggestion => (
              <div key={suggestion.id} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {getSuggestionIcon(suggestion.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{suggestion.title}</h4>
                      <Badge 
                        className={`text-xs ${getImpactColor(suggestion.impact)}`}
                        variant="secondary"
                      >
                        Impact {suggestion.impact}
                      </Badge>
                      <Badge 
                        className={`text-xs ${getComplexityColor(suggestion.complexity)}`}
                        variant="secondary"
                      >
                        {suggestion.complexity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {suggestion.description}
                    </p>
                    <p className="text-sm font-medium text-green-600">
                      {suggestion.estimatedSaving}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Appliquer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowOptimizer;
