
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Brain, Image, Volume2, Video, Database, Zap } from 'lucide-react';

const PromptGeneratorHeader: React.FC = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold">Générateur de Prompts Intelligent</h1>
              </div>
              <p className="text-muted-foreground text-lg">
                Créez des prompts professionnels optimisés pour tous types d'IA générative
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Brain className="h-3 w-3" />
                LLM & Chat
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Image className="h-3 w-3" />
                Text-to-Image
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Volume2 className="h-3 w-3" />
                Text-to-Audio
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Video className="h-3 w-3" />
                Text-to-Video
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Database className="h-3 w-3" />
                RAG Systems
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Multi-Modal
              </Badge>
            </div>
          </div>
          
          <div className="text-right space-y-1">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Templates Pro</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="font-medium text-sm">Templates Spécialisés</div>
              <div className="text-xs text-muted-foreground">Par domaine et cas d'usage</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <div className="font-medium text-sm">Optimisation Intelligente</div>
              <div className="text-xs text-muted-foreground">Amélioration automatique</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
            <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Database className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <div className="font-medium text-sm">Export & Gestion</div>
              <div className="text-xs text-muted-foreground">Sauvegarde et réutilisation</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptGeneratorHeader;
