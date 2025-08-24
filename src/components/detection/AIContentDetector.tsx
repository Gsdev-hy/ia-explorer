
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUploader } from './FileUploader';
import { AnalysisResult } from './AnalysisResult';
import { ResultDetails } from './ResultDetails';
import { AnalysisHistory } from './AnalysisHistory';
import { TextAnalyzer } from './TextAnalyzer';
import { PresetSelector } from './PresetSelector';
import { DetailedAnalysisView } from './DetailedAnalysisView';
import { DetectionResult, aiDetectionService } from '@/services/aiDetectionService';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  FileText, 
  History, 
  Zap,
  Loader2,
  Settings,
  ArrowLeft,
  User
} from 'lucide-react';

export const AIContentDetector: React.FC = () => {
  const [results, setResults] = useState<DetectionResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<DetectionResult | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | undefined>(undefined);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);
  const { toast } = useToast();

  const handleFilesSelected = async (files: File[]) => {
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

  const handleViewDetailedAnalysis = (result: DetectionResult) => {
    setSelectedResult(result);
    setShowDetailedAnalysis(true);
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

  const handleExportAll = () => {
    if (results.length === 0) {
      toast({
        title: "Aucun résultat",
        description: "Aucune analyse à exporter.",
        variant: "destructive",
      });
      return;
    }

    const data = aiDetectionService.exportResults(results, 'csv');
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-detection-results-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Export terminé",
      description: `${results.length} analyses exportées en CSV.`,
    });
  };

  if (showDetailedAnalysis && selectedResult) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setShowDetailedAnalysis(false)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux résultats
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Créé par Geoffroy Streit</span>
          </div>
        </div>
        <DetailedAnalysisView result={selectedResult} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/ressources?tab=outils">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux outils
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Créé par Geoffroy Streit</span>
          </div>
          {results.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportAll}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Exporter tout ({results.length})
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Analyse de fichiers
          </TabsTrigger>
          <TabsTrigger value="text" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Analyse de texte
          </TabsTrigger>
          <TabsTrigger value="presets" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Presets
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            Historique
          </TabsTrigger>
        </TabsList>

        <TabsContent value="presets" className="space-y-6">
          <PresetSelector
            selectedPreset={selectedPreset}
            onPresetSelect={setSelectedPreset}
          />
        </TabsContent>

        <TabsContent value="upload" className="space-y-6">
          {selectedPreset && (
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">
                      Preset sélectionné: {selectedPreset}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPreset(undefined)}
                  >
                    Désactiver
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

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
                    onViewDetailedAnalysis={handleViewDetailedAnalysis}
                    onExport={handleExportResult}
                  />
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="text">
          <TextAnalyzer 
            onAnalysisComplete={handleAnalysisComplete}
            selectedPreset={selectedPreset}
          />
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
