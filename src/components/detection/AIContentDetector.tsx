
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { DetectorHeader } from './DetectorHeader';
import { FileAnalysisTab } from './FileAnalysisTab';
import { AnalysisHistory } from './AnalysisHistory';
import { TextAnalyzer } from './TextAnalyzer';
import { PresetSelector } from './PresetSelector';
import { DetailedAnalysisView } from './DetailedAnalysisView';
import { ResultDetails } from './ResultDetails';
import { DetectionResult, aiDetectionService } from '@/services/aiDetectionService';
import { useDetectionAnalysis } from '@/hooks/useDetectionAnalysis';
import { useToast } from '@/hooks/use-toast';
import { 
  Upload, 
  FileText, 
  History, 
  Settings,
  ArrowLeft
} from 'lucide-react';

export const AIContentDetector: React.FC = () => {
  const { results, isAnalyzing, analyzeFiles, addResult, exportResults } = useDetectionAnalysis();
  const [selectedResult, setSelectedResult] = useState<DetectionResult | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | undefined>(undefined);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);
  const { toast } = useToast();

  const handleFilesSelected = async (files: File[]) => {
    await analyzeFiles(files, selectedPreset);
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
    exportResults('csv');
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
        </div>
        <DetailedAnalysisView result={selectedResult} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DetectorHeader
        resultsCount={results.length}
        onExportAll={handleExportAll}
      />

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
          <FileAnalysisTab
            selectedPreset={selectedPreset}
            onPresetDeselect={() => setSelectedPreset(undefined)}
            results={results}
            isAnalyzing={isAnalyzing}
            onFilesSelected={handleFilesSelected}
            onViewDetails={handleViewDetails}
            onViewDetailedAnalysis={handleViewDetailedAnalysis}
            onExportResult={handleExportResult}
          />
        </TabsContent>

        <TabsContent value="text">
          <TextAnalyzer 
            onAnalysisComplete={addResult}
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
