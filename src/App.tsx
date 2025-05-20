
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/hooks/use-theme';
import { TooltipProvider } from '@/components/ui/tooltip';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import CasUsage from './pages/CasUsage';
import Ethique from './pages/Ethique';
import EthiqueGouvernance from './pages/EthiqueGouvernance';
import HistoireIA from './pages/HistoireIA';
import MachineLearning from './pages/MachineLearning';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import NiveauxIA from './pages/NiveauxIA';
import Ressources from './pages/Ressources';
import TypesIA from './pages/TypesIA';
import IAMultimodale from './pages/IAMultimodale';
import Actualites from './pages/Actualites';
import Glossaire from './pages/Glossaire';
import NotFound from './pages/NotFound';
import LLMDetails from './pages/LLMDetails';
import IAExpliqueeAuxEnfants from './pages/IAExpliqueeAuxEnfants';
import CoderAvecIA from './pages/CoderAvecIA';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/cas-usage" element={<CasUsage />} />
                  <Route path="/ethique" element={<Ethique />} />
                  <Route path="/ethique-gouvernance" element={<EthiqueGouvernance />} />
                  <Route path="/histoire" element={<HistoireIA />} />
                  <Route path="/machine-learning" element={<MachineLearning />} />
                  <Route path="/mentions-legales" element={<MentionsLegales />} />
                  <Route path="/confidentialite" element={<Confidentialite />} />
                  <Route path="/niveaux-ia" element={<NiveauxIA />} />
                  <Route path="/ressources" element={<Ressources />} />
                  <Route path="/types-ia" element={<TypesIA />} />
                  <Route path="/ia-multimodale" element={<IAMultimodale />} />
                  <Route path="/actualites" element={<Actualites />} />
                  <Route path="/glossaire" element={<Glossaire />} />
                  <Route path="/llm-details" element={<LLMDetails />} />
                  <Route path="/ia-expliquee-aux-enfants" element={<IAExpliqueeAuxEnfants />} />
                  <Route path="/coder-avec-ia" element={<CoderAvecIA />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster />
        </QueryClientProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
