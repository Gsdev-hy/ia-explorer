
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, TestTube, History, TrendingUp } from 'lucide-react';
import TemplateSelector from './TemplateSelector';
import PromptEngine from './PromptEngine';
import PromptTester from './PromptTester';
import { PromptTemplate } from './promptTemplatesData';

interface GeneratedPrompt {
  id: string;
  content: string;
  template: PromptTemplate;
  timestamp: Date;
  testResults?: any[];
}

const PromptGenerator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | undefined>();
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const [generatedPrompts, setGeneratedPrompts] = useState<GeneratedPrompt[]>([]);

  const handleTemplateSelect = (template: PromptTemplate) => {
    setSelectedTemplate(template);
  };

  const handlePromptGenerated = (prompt: string, template: PromptTemplate) => {
    setCurrentPrompt(prompt);
    
    const newGenerated: GeneratedPrompt = {
      id: Date.now().toString(),
      content: prompt,
      template,
      timestamp: new Date()
    };
    
    setGeneratedPrompts(prev => [newGenerated, ...prev.slice(0, 9)]); // Garder les 10 derniers
  };

  const handleTestComplete = (result: any) => {
    // Ajouter le résultat de test au prompt actuel
    setGeneratedPrompts(prev => 
      prev.map(prompt => 
        prompt.content === currentPrompt 
          ? { ...prompt, testResults: [...(prompt.testResults || []), result] }
          : prompt
      )
    );
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="generator">Générateur</TabsTrigger>
          <TabsTrigger value="tester">Testeur</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <TemplateSelector 
            onTemplateSelect={handleTemplateSelect}
            selectedTemplate={selectedTemplate}
          />
        </TabsContent>

        <TabsContent value="generator">
          {selectedTemplate ? (
            <PromptEngine 
              template={selectedTemplate}
              onPromptGenerated={handlePromptGenerated}
            />
          ) : (
            <div className="text-center py-12">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Sélectionnez un template</h3>
              <p className="text-muted-foreground">
                Choisissez un template dans l'onglet "Templates" pour commencer à générer des prompts.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="tester">
          {currentPrompt ? (
            <PromptTester 
              prompt={currentPrompt}
              onTestComplete={handleTestComplete}
            />
          ) : (
            <div className="text-center py-12">
              <TestTube className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Générez un prompt d'abord</h3>
              <p className="text-muted-foreground">
                Créez un prompt dans l'onglet "Générateur" pour pouvoir le tester ici.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="history">
          {generatedPrompts.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <History className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Historique des prompts générés</h3>
                <span className="text-sm text-muted-foreground">
                  ({generatedPrompts.length})
                </span>
              </div>
              
              {generatedPrompts.map(prompt => (
                <div key={prompt.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{prompt.template.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {prompt.timestamp.toLocaleString()}
                      </span>
                    </div>
                    {prompt.testResults && prompt.testResults.length > 0 && (
                      <div className="flex items-center gap-1">
                        <TestTube className="h-4 w-4" />
                        <span className="text-sm text-muted-foreground">
                          {prompt.testResults.length} test{prompt.testResults.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-muted p-3 rounded text-sm">
                    <p className="line-clamp-3">{prompt.content}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="text-sm text-primary hover:underline"
                      onClick={() => {
                        setSelectedTemplate(prompt.template);
                        setCurrentPrompt(prompt.content);
                      }}
                    >
                      Réutiliser ce template
                    </button>
                    <button 
                      className="text-sm text-primary hover:underline"
                      onClick={() => setCurrentPrompt(prompt.content)}
                    >
                      Tester ce prompt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <History className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Aucun historique</h3>
              <p className="text-muted-foreground">
                Vos prompts générés apparaîtront ici pour un accès rapide.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PromptGenerator;
