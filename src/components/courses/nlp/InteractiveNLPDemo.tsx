
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, MessageSquare } from 'lucide-react';

const InteractiveNLPDemo: React.FC = () => {
  const [inputText, setInputText] = useState("J'adore ce produit, il est fantastique !");
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzeText = () => {
    // Simulation d'analyse NLP
    const words = inputText.toLowerCase().split(' ');
    const positiveWords = ['adore', 'fantastique', 'excellent', 'super', 'génial', 'parfait'];
    const negativeWords = ['déteste', 'horrible', 'nul', 'mauvais', 'terrible'];
    
    let sentiment = 'neutre';
    let confidence = 0.5;
    
    const hasPositive = words.some(word => positiveWords.includes(word));
    const hasNegative = words.some(word => negativeWords.includes(word));
    
    if (hasPositive && !hasNegative) {
      sentiment = 'positif';
      confidence = 0.85;
    } else if (hasNegative && !hasPositive) {
      sentiment = 'négatif';
      confidence = 0.82;
    }

    const entities = [];
    if (words.includes('produit')) entities.push({ text: 'produit', type: 'OBJET' });
    
    setAnalysis({
      sentiment: { label: sentiment, confidence },
      entities,
      tokenCount: words.length,
      language: 'français'
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Démo interactive : Analyse de sentiment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Tapez votre texte à analyser :
          </label>
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Entrez votre texte ici..."
            className="min-h-[80px]"
          />
        </div>
        
        <Button onClick={analyzeText} className="w-full">
          <Zap className="h-4 w-4 mr-2" />
          Analyser le texte
        </Button>

        {analysis && (
          <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Résultats de l'analyse
            </h4>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Sentiment :</span>
                <Badge 
                  variant={analysis.sentiment.label === 'positif' ? 'default' : 
                          analysis.sentiment.label === 'négatif' ? 'destructive' : 'secondary'}
                  className="ml-2"
                >
                  {analysis.sentiment.label}
                </Badge>
              </div>
              <div>
                <span className="font-medium">Confiance :</span>
                <span className="ml-2">{(analysis.sentiment.confidence * 100).toFixed(0)}%</span>
              </div>
              <div>
                <span className="font-medium">Mots :</span>
                <span className="ml-2">{analysis.tokenCount}</span>
              </div>
              <div>
                <span className="font-medium">Langue :</span>
                <span className="ml-2">{analysis.language}</span>
              </div>
            </div>

            {analysis.entities.length > 0 && (
              <div>
                <span className="font-medium text-sm">Entités détectées :</span>
                <div className="flex gap-2 mt-1">
                  {analysis.entities.map((entity: any, index: number) => (
                    <Badge key={index} variant="outline">
                      {entity.text} ({entity.type})
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveNLPDemo;
