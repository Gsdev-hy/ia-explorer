
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import MainLayout from "@/layouts/MainLayout";
import Index from "./pages/Index";
import LesBases from "./pages/LesBases";
import TypesIA from "./pages/TypesIA";
import MachineLearning from "./pages/MachineLearning";
import DeepLearning from "./pages/DeepLearning";
import NLPConcepts from "./pages/NLPConcepts";
import LLMDetails from "./pages/LLMDetails";
import IAMultimodale from "./pages/IAMultimodale";
import CoderAvecIA from "./pages/CoderAvecIA";
import PythonIA from "./pages/PythonIA";
import PremierModeleML from "./pages/PremierModeleML";
import CasUsage from "./pages/CasUsage";
import IAMarketingVente from "./pages/IAMarketingVente";
import IAEnvironnement from "./pages/IAEnvironnement";
import Ethique from "./pages/Ethique";
import EthiqueGouvernance from "./pages/EthiqueGouvernance";
import HistoireIA from "./pages/HistoireIA";
import NiveauxIA from "./pages/NiveauxIA";
import Actualites from "./pages/Actualites";
import IAExpliqueeAuxEnfants from "./pages/IAExpliqueeAuxEnfants";
import Glossaire from "./pages/Glossaire";
import Ressources from "./pages/Ressources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SimulateurIA from "./pages/SimulateurIA";
import CalculateurCoutsIA from "./pages/CalculateurCoutsIA";
import GeminiChatPage from "./pages/GeminiChatPage";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import UtiliserIAQuotidien from "./pages/UtiliserIAQuotidien";

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
                <Route index element={<Index />} />
                <Route path="les-bases" element={<LesBases />} />
                <Route path="types-ia" element={<TypesIA />} />
                <Route path="machine-learning" element={<MachineLearning />} />
                <Route path="deep-learning" element={<DeepLearning />} />
                <Route path="nlp-concepts" element={<NLPConcepts />} />
                <Route path="llm-details" element={<LLMDetails />} />
                <Route path="ia-multimodale" element={<IAMultimodale />} />
                <Route path="coder-avec-ia" element={<CoderAvecIA />} />
                <Route path="python-ia" element={<PythonIA />} />
                <Route path="premier-modele-ml" element={<PremierModeleML />} />
                <Route path="cas-usage" element={<CasUsage />} />
                <Route path="ia-marketing-vente" element={<IAMarketingVente />} />
                <Route path="ia-environnement" element={<IAEnvironnement />} />
                <Route path="ethique" element={<Ethique />} />
                <Route path="ethique-gouvernance" element={<EthiqueGouvernance />} />
                <Route path="histoire-ia" element={<HistoireIA />} />
                <Route path="niveaux-ia" element={<NiveauxIA />} />
                <Route path="actualites" element={<Actualites />} />
                <Route path="ia-enfants" element={<IAExpliqueeAuxEnfants />} />
                <Route path="glossaire" element={<Glossaire />} />
                <Route path="ressources" element={<Ressources />} />
                <Route path="cours/utiliser-ia-quotidien" element={<UtiliserIAQuotidien />} />
                <Route path="about" element={<About />} />
                <Route path="simulateur-ia" element={<SimulateurIA />} />
                <Route path="calculateur-couts-ia" element={<CalculateurCoutsIA />} />
                <Route path="chat-gemini" element={<GeminiChatPage />} />
                <Route path="mentions-legales" element={<MentionsLegales />} />
                <Route path="confidentialite" element={<Confidentialite />} />
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
