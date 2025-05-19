
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NiveauxIA from "./pages/NiveauxIA";
import TypesIA from "./pages/TypesIA";
import MachineLearning from "./pages/MachineLearning";
import Ethique from "./pages/Ethique";
import CasUsage from "./pages/CasUsage";
import Glossaire from "./pages/Glossaire";
import HistoireIA from "./pages/HistoireIA";
import Ressources from "./pages/Ressources";
import IAMultimodale from "./pages/IAMultimodale";
import IAExpliqueeAuxEnfants from "./pages/IAExpliqueeAuxEnfants";
import Actualites from "./pages/Actualites";
import About from "./pages/About";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import LLMDetails from "./pages/LLMDetails";
import EthiqueGouvernance from './pages/EthiqueGouvernance';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="histoire-ia" element={<HistoireIA />} />
                <Route path="niveaux-ia" element={<NiveauxIA />} />
                <Route path="types-ia" element={<TypesIA />} />
                <Route path="machine-learning" element={<MachineLearning />} />
                <Route path="ia-multimodale" element={<IAMultimodale />} />
                <Route path="ethique" element={<Ethique />} />
                <Route path="ethique-gouvernance" element={<EthiqueGouvernance />} />
                <Route path="cas-usage" element={<CasUsage />} />
                <Route path="actualites" element={<Actualites />} />
                <Route path="glossaire" element={<Glossaire />} />
                <Route path="ressources" element={<Ressources />} />
                <Route path="ia-expliquee-aux-enfants" element={<IAExpliqueeAuxEnfants />} />
                <Route path="llm-details" element={<LLMDetails />} />
                <Route path="mentions-legales" element={<MentionsLegales />} />
                <Route path="confidentialite" element={<Confidentialite />} />
                <Route path="a-propos" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
