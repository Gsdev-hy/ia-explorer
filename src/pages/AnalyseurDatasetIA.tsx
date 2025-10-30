import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DatasetAnalyzerHeader from '@/components/dataset-analyzer/DatasetAnalyzerHeader';
import DatasetAnalyzer from '@/components/dataset-analyzer/DatasetAnalyzer';

const AnalyseurDatasetIA = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/ressources?tab=outils')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux outils
        </Button>

        <DatasetAnalyzerHeader />
        <DatasetAnalyzer />
      </div>
    </div>
  );
};

export default AnalyseurDatasetIA;
