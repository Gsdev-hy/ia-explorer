
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProviderInfoCard from './ProviderInfoCard';
import { llmProvidersInfo } from './llmProvidersData';

interface LLMProviderSelectorProps {
  selectedProvider: string;
  onProviderSelect: (providerId: string) => void;
}

const LLMProviderSelector: React.FC<LLMProviderSelectorProps> = ({
  selectedProvider,
  onProviderSelect
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choisir un fournisseur LLM</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {llmProvidersInfo.map((provider) => (
            <ProviderInfoCard
              key={provider.id}
              provider={provider}
              isSelected={selectedProvider === provider.id}
              onClick={() => onProviderSelect(provider.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LLMProviderSelector;
