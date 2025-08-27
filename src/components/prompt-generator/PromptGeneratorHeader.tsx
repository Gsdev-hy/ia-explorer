
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Brain, Image, Volume2, Video, Database, Zap } from 'lucide-react';

const PromptGeneratorHeader: React.FC = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-indigo-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/30">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Générateur de Prompts Intelligent</h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Créez des prompts professionnels optimisés pour tous types d'IA générative
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <Brain className="h-3 w-3" />
                LLM & Chat
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <Image className="h-3 w-3" />
                Text-to-Image
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <Volume2 className="h-3 w-3" />
                Text-to-Audio
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <Video className="h-3 w-3" />
                Text-to-Video
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <Database className="h-3 w-3" />
                RAG Systems
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <Zap className="h-3 w-3" />
                Multi-Modal
              </Badge>
            </div>
          </div>
          
          <div className="text-right space-y-1">
            <div className="text-2xl font-bold text-primary">120+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Templates Pro</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-white/70 dark:bg-gray-800/50 rounded-lg border border-white/50 dark:border-gray-700/50">
            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="font-medium text-sm text-gray-900 dark:text-gray-100">Templates Spécialisés</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Par domaine et cas d'usage</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white/70 dark:bg-gray-800/50 rounded-lg border border-white/50 dark:border-gray-700/50">
            <div className="h-8 w-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="font-medium text-sm text-gray-900 dark:text-gray-100">Optimisation Intelligente</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Amélioration automatique</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white/70 dark:bg-gray-800/50 rounded-lg border border-white/50 dark:border-gray-700/50">
            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
              <Database className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <div className="font-medium text-sm text-gray-900 dark:text-gray-100">Export & Gestion</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Sauvegarde et réutilisation</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptGeneratorHeader;
