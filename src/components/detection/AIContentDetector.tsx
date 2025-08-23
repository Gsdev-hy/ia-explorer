
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { FileUploader } from './FileUploader';
import { AnalysisResult } from './AnalysisResult';
import { ResultDetails } from './ResultDetails';
import { AnalysisHistory } from './AnalysisHistory';
import { TextAnalyzer } from './TextAnalyzer';
import { DetectionResult, aiDetectionService } from '@/services/aiDetectionService';
import { useToast } from '@/components/ui/use-toast';
import { 
  Upload, 
  FileText, 
  History, 
  Zap,
  Loader2
} from 'lucide-react';

export const AIContentDetector: React.FC = () => {
  const [results, setResults] = useState<DetectionResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<DetectionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const { toast } = useToast();

  const handleFilesSelected = async (files: File[]) => {
    setIsAnalyzing(true);
    const newResults: DetectionResult[] = [];

    try {
      for (const file of files) {
        let result: DetectionResult;

        if (file.type.startsWith('text/')) {
          const text = await file.text();
          result = await aiDetectionService.detectText(text);
          result.fileName = file.name;
        } else if (file.type.startsWith('image/')) {
          result = await aiDetectionService.detectImage(file);
        } else if (file.type.startsWith('audio/')) {
          result = await aiDetectionService.detectAudio(file);
        } else {
          toast({
            title: "Format non supporté",
            description: `Le fichier ${file.name} n'est pas dans un format supporté.`,
            variant: "destructive",
          });
          continue;
        }

        aiDetectionService.saveAnalysis(result);
        newResults.push(result);

        // Simulation d'un délai pour montrer le processus
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setResults(prev => [...newResults, ...prev]);
      
      toast({
        title: "Analyse terminée",
        description: `${newResults.length} fichier(s) analysé(s) avec succès.`,
      });
    } catch (error) {
      console.error('Erreur lors de l\'analyse:', error);
      toast({
        title: "Erreur d'analyse",
        description: "Une erreur est survenue pendant l'analyse.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAnalysisComplete = (result: DetectionResult) => {
    setResults(prev => [result, ...prev]);
  };

  const handleViewDetails = (result: DetectionResult) => {
    setSelectedResult(result);
    setDetailsOpen(true);
  };

  const handleExportResult = (result: DetectionResult) => {
    const data = aiDetectionService.exportResults([result], 'json');
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analysis-${result.id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Export terminé",
      description: "Le rapport d'analyse a été téléchargé.",
    });
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Analyse de fichiers
          </TabsTrigger>
          <TabsTrigger value="text" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Analyse de texte
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            Historique
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <FileUploader onFilesSelected={handleFilesSelected} />
          
          {isAnalyzing && (
            <Card>
              <CardContent className="flex items-center justify-center py-8">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Analyse en cours des fichiers...
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Résultats d'analyse ({results.length})
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {results.map((result) => (
                  <AnalysisResult
                    key={result.id}
                    result={result}
                    onViewDetails={handleViewDetails}
                    onExport={handleExportResult}
                  />
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="text">
          <TextAnalyzer onAnalysisComplete={handleAnalysisComplete} />
        </TabsContent>

        <TabsContent value="history">
          <AnalysisHistory onViewDetails={handleViewDetails} />
        </TabsContent>
      </Tabs>

      <ResultDetails
        result={selectedResult}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
    </div>
  );
};
