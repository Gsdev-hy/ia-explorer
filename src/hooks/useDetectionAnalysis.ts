
import { useState, useCallback } from 'react';
import { DetectionResult, aiDetectionService } from '@/services/aiDetectionService';
import { useToast } from '@/hooks/use-toast';

export const useDetectionAnalysis = () => {
  const [results, setResults] = useState<DetectionResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const analyzeFiles = useCallback(async (files: File[], selectedPreset?: string) => {
    setIsAnalyzing(true);
    const newResults: DetectionResult[] = [];

    try {
      for (const file of files) {
        let result: DetectionResult;

        if (file.type.startsWith('text/')) {
          const text = await file.text();
          result = await aiDetectionService.detectText(text, selectedPreset);
          result.fileName = file.name;
        } else if (file.type.startsWith('image/')) {
          result = await aiDetectionService.detectImage(file, selectedPreset);
        } else if (file.type.startsWith('audio/')) {
          result = await aiDetectionService.detectAudio(file, selectedPreset);
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
        await new Promise(resolve => setTimeout(resolve, 1000));
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
  }, [toast]);

  const addResult = useCallback((result: DetectionResult) => {
    setResults(prev => [result, ...prev]);
  }, []);

  const exportResults = useCallback((format: 'json' | 'csv') => {
    if (results.length === 0) {
      toast({
        title: "Aucun résultat",
        description: "Aucune analyse à exporter.",
        variant: "destructive",
      });
      return;
    }

    const data = aiDetectionService.exportResults(results, format);
    const blob = new Blob([data], { 
      type: format === 'json' ? 'application/json' : 'text/csv' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-detection-results-${new Date().toISOString().split('T')[0]}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Export terminé",
      description: `${results.length} analyses exportées en ${format.toUpperCase()}.`,
    });
  }, [results, toast]);

  return {
    results,
    isAnalyzing,
    analyzeFiles,
    addResult,
    exportResults
  };
};
