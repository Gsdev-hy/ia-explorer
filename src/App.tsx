import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import MainLayout from './layouts/MainLayout';
import SkipLink from './components/SkipLink';

const Home = lazy(() => import('./pages/Home'));
const LesBases = lazy(() => import('./pages/LesBases'));
const TypesIA = lazy(() => import('./pages/TypesIA'));
const MachineLearning = lazy(() => import('./pages/MachineLearning'));
const DeepLearning = lazy(() => import('./pages/DeepLearning'));
const CasUsage = lazy(() => import('./pages/CasUsage'));
const Ressources = lazy(() => import('./pages/Ressources'));
const Ethique = lazy(() => import('./pages/Ethique'));
const Actualites = lazy(() => import('./pages/Actualites'));
const ChatPage = lazy(() => import('./pages/ChatPage'));

// Cours
const PromptEngineering = lazy(() => import('./pages/cours/PromptEngineering'));
const ChainOfPrompts = lazy(() => import('./pages/cours/ChainOfPrompts'));
const ParametresLLM = lazy(() => import('./pages/cours/ParametresLLM'));
const IACreativite = lazy(() => import('./pages/cours/IACreativite'));
const DeepLearningPratique = lazy(() => import('./pages/cours/DeepLearningPratique'));
const IAEthique = lazy(() => import('./pages/cours/IAEthique'));
const IAEntreprise = lazy(() => import('./pages/cours/IAEntreprise'));
const NLPComprehension = lazy(() => import('./pages/cours/NLPComprehension'));

// Import du nouveau cours
const ApprentissageSupervise = lazy(() => import('./pages/cours/ApprentissageSupervise'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <SkipLink />
              <MainLayout>
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
                  <Routes>
                    {/* Pages principales */}
                    <Route path="/" element={<Home />} />
                    <Route path="/les-bases" element={<LesBases />} />
                    <Route path="/types-ia" element={<TypesIA />} />
                    <Route path="/machine-learning" element={<MachineLearning />} />
                    <Route path="/deep-learning" element={<DeepLearning />} />
                    <Route path="/cas-usage" element={<CasUsage />} />
                    <Route path="/ressources" element={<Ressources />} />
                    <Route path="/ethique" element={<Ethique />} />
                    <Route path="/actualites" element={<Actualites />} />
                    <Route path="/chat" element={<ChatPage />} />
                    
                    {/* Cours */}
                    <Route path="/cours/prompt-engineering" element={<PromptEngineering />} />
                    <Route path="/cours/chain-of-prompts" element={<ChainOfPrompts />} />
                    <Route path="/cours/parametres-llm" element={<ParametresLLM />} />
                    <Route path="/cours/ia-creativite" element={<IACreativite />} />
                    <Route path="/cours/deep-learning-pratique" element={<DeepLearningPratique />} />
                    <Route path="/cours/ia-ethique" element={<IAEthique />} />
                    <Route path="/cours/ia-entreprise" element={<IAEntreprise />} />
                    <Route path="/cours/nlp-llm-comprehension" element={<NLPComprehension />} />
                    <Route path="/cours/apprentissage-supervise" element={<ApprentissageSupervise />} />
                    
                    {/* NotFound */}
                    <Route path="*" element={<div>Not Found</div>} />
                  </Routes>
                </Suspense>
              </MainLayout>
            </div>
            <Toaster />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
