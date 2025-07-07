
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

// Pages manquantes restaurées
const Glossaire = lazy(() => import('./pages/Glossaire'));
const About = lazy(() => import('./pages/About'));
const IAMultimodale = lazy(() => import('./pages/IAMultimodale'));
const GeminiChatPage = lazy(() => import('./pages/GeminiChatPage'));
const Confidentialite = lazy(() => import('./pages/Confidentialite'));
const CalculateurCoutsIA = lazy(() => import('./pages/CalculateurCoutsIA'));

// Pages Histoire et Niveaux IA restaurées
const HistoireIA = lazy(() => import('./pages/HistoireIA'));
const NiveauxIA = lazy(() => import('./pages/NiveauxIA'));

// Cours
const PromptEngineering = lazy(() => import('./pages/cours/PromptEngineering'));
const ChainOfPrompts = lazy(() => import('./pages/cours/ChainOfPrompts'));
const ParametresLLM = lazy(() => import('./pages/cours/ParametresLLM'));
const IACreativite = lazy(() => import('./pages/cours/IACreativite'));
const DeepLearningPratique = lazy(() => import('./pages/cours/DeepLearningPratique'));
const IAEthique = lazy(() => import('./pages/cours/IAEthique'));
const IAEntreprise = lazy(() => import('./pages/cours/IAEntreprise'));
const NLPComprehension = lazy(() => import('./pages/cours/NLPComprehension'));
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
                    <Route path="/niveaux-ia" element={<NiveauxIA />} />
                    <Route path="/machine-learning" element={<MachineLearning />} />
                    <Route path="/deep-learning" element={<DeepLearning />} />
                    <Route path="/cas-usage" element={<CasUsage />} />
                    <Route path="/ressources" element={<Ressources />} />
                    <Route path="/ethique" element={<Ethique />} />
                    <Route path="/actualites" element={<Actualites />} />
                    
                    {/* Pages restaurées */}
                    <Route path="/glossaire" element={<Glossaire />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/ia-multimodale" element={<IAMultimodale />} />
                    <Route path="/chat" element={<GeminiChatPage />} />
                    <Route path="/confidentialite" element={<Confidentialite />} />
                    <Route path="/calculateur-couts-ia" element={<CalculateurCoutsIA />} />
                    
                    {/* Pages Histoire et Niveaux IA restaurées */}
                    <Route path="/histoire-ia" element={<HistoireIA />} />
                    <Route path="/histoire" element={<HistoireIA />} />
                    
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
                    <Route path="*" element={<div className="flex items-center justify-center min-h-screen"><div className="text-center"><h1 className="text-4xl font-bold mb-4">404</h1><p className="text-muted-foreground">Page non trouvée</p></div></div>} />
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
