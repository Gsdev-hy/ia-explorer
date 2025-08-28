
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUploader } from './FileUploader';
import { ResultsGrid } from './ResultsGrid';
import { DetectionResult } from '@/services/aiDetectionService';
import { Settings } from 'lucide-react';

interface FileAnalysisTabProps {
  selectedPreset?: string;
  onPresetDeselect: () => void;
  results: DetectionResult[];
  isAnalyzing: boolean;
  onFilesSelected: (files: File[]) => void;
  onViewDetails: (result: DetectionResult) => void;
  onViewDetailedAnalysis: (result: DetectionResult) => void;
  onExportResult: (result: DetectionResult) => void;
}

export const FileAnalysisTab: React.FC<FileAnalysisTabProps> = ({
  selectedPreset,
  onPresetDeselect,
  results,
  isAnalyzing,
  onFilesSelected,
  onViewDetails,
  onViewDetailedAnalysis,
  onExportResult
}) => {
  return (
    <div className="space-y-6">
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
                onClick={onPresetDeselect}
              >
                Désactiver
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <FileUploader onFilesSelected={onFilesSelected} />
      
      <ResultsGrid
        results={results}
        isAnalyzing={isAnalyzing}
        onViewDetails={onViewDetails}
        onViewDetailedAnalysis={onViewDetailedAnalysis}
        onExportResult={onExportResult}
      />
    </div>
  );
};
