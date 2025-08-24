
import React from 'react';
import SimulatorHeader from '@/components/ml/simulator/SimulatorHeader';
import TrainingSimulator from '@/components/ml/TrainingSimulator';

const SimulateurIA: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <SimulatorHeader />
        <TrainingSimulator />
      </div>
    </div>
  );
};

export default SimulateurIA;
