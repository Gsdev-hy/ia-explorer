import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import MainLayout from '@/layouts/MainLayout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import LesBases from '@/pages/LesBases';
import TypesIA from '@/pages/TypesIA';
import MachineLearning from '@/pages/MachineLearning';
import DeepLearning from '@/pages/DeepLearning';
import CasUsage from '@/pages/CasUsage';
import Ethique from '@/pages/Ethique';
import Ressources from '@/pages/Ressources';
import Actualites from '@/pages/Actualites';
import Histoire from '@/pages/Histoire';
import Glossaire from '@/pages/Glossaire';
import NotFound from '@/pages/NotFound';

// Cours
import ApprentissageSupervise from '@/pages/cours/ApprentissageSupervise';
import ApprentissageNonSupervise from '@/pages/cours/ApprentissageNonSupervise';
import PromptEngineering from '@/pages/cours/PromptEngineering';
import ChainOfPrompts from '@/pages/cours/ChainOfPrompts';
import ParametresLLM from '@/pages/cours/ParametresLLM';
import IACreativite from '@/pages/cours/IACreativite';
import DeepLearningPratique from '@/pages/cours/DeepLearningPratique';
import IAEthique from '@/pages/cours/IAEthique';
import IAEntreprise from '@/pages/cours/IAEntreprise';
import NLPLlmComprehension from '@/pages/cours/NLPLlmComprehension';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="les-bases" element={<LesBases />} />
              <Route path="types-ia" element={<TypesIA />} />
              <Route path="machine-learning" element={<MachineLearning />} />
              <Route path="deep-learning" element={<DeepLearning />} />
              <Route path="cas-usage" element={<CasUsage />} />
              <Route path="ethique" element={<Ethique />} />
              <Route path="ressources" element={<Ressources />} />
              <Route path="actualites" element={<Actualites />} />
              <Route path="histoire" element={<Histoire />} />
              <Route path="glossaire" element={<Glossaire />} />
              
              {/* Routes des cours */}
              <Route path="cours/apprentissage-supervise" element={<ApprentissageSupervise />} />
              <Route path="cours/apprentissage-non-supervise" element={<ApprentissageNonSupervise />} />
              <Route path="cours/prompt-engineering" element={<PromptEngineering />} />
              <Route path="cours/chain-of-prompts" element={<ChainOfPrompts />} />
              <Route path="cours/parametres-llm" element={<ParametresLLM />} />
              <Route path="cours/ia-creativite" element={<IACreativite />} />
              <Route path="cours/deep-learning-pratique" element={<DeepLearningPratique />} />
              <Route path="cours/ia-ethique" element={<IAEthique />} />
              <Route path="cours/ia-entreprise" element={<IAEntreprise />} />
              <Route path="cours/nlp-llm-comprehension" element={<NLPLlmComprehension />} />
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
