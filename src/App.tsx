
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/chat/FloatingChatButton";
import SkipLink from "@/components/SkipLink";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import LesBases from "./pages/LesBases";
import MachineLearning from "./pages/MachineLearning";
import DeepLearning from "./pages/DeepLearning";
import TypesIA from "./pages/TypesIA";
import CasUsage from "./pages/CasUsage";
import Ethique from "./pages/Ethique";
import Ressources from "./pages/Ressources";
import Glossaire from "./pages/Glossaire";
import HistoireIA from "./pages/HistoireIA";
import NiveauxIA from "./pages/NiveauxIA";
import Actualites from "./pages/Actualites";
import NotFound from "./pages/NotFound";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import EthiqueGouvernance from "./pages/EthiqueGouvernance";
import IAMarketingVente from "./pages/IAMarketingVente";
import IAEnvironnement from "./pages/IAEnvironnement";
import UtiliserIAQuotidien from "./pages/UtiliserIAQuotidien";
import UtiliserIATravail from "./pages/UtiliserIATravail";
import OrganiserServicesIA from "./pages/OrganiserServicesIA";
import CalculateurCoutsIA from "./pages/CalculateurCoutsIA";
import IAExpliqueeAuxEnfants from "./pages/IAExpliqueeAuxEnfants";
import SimulateurIA from "./pages/SimulateurIA";
import IAMultimodale from "./pages/IAMultimodale";
import NLPConcepts from "./pages/NLPConcepts";
import LLMDetails from "./pages/LLMDetails";
import PremierModeleML from "./pages/PremierModeleML";
import CoderAvecIA from "./pages/CoderAvecIA";
import PythonIA from "./pages/PythonIA";
import GeminiChatPage from "./pages/GeminiChatPage";

// Pages de cours
import PromptEngineering from "./pages/cours/PromptEngineering";
import ChainOfPrompts from "./pages/cours/ChainOfPrompts";
import IACreativite from "./pages/cours/IACreativite";
import DeepLearningPratique from "./pages/cours/DeepLearningPratique";
import NLPComprehension from "./pages/cours/NLPComprehension";
import IAEntreprise from "./pages/cours/IAEntreprise";
import IAEthique from "./pages/cours/IAEthique";
import ParametresLLM from "./pages/cours/ParametresLLM";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <SkipLink />
      <Header />
      <main 
        id="main-content"
        className="flex-grow focus:outline-none" 
        tabIndex={-1}
        role="main"
      >
        <div className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer author="Geoffroy Streit" email="geoffroy.streit@gmail.com" />
      <FloatingChatButton />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="accueil" element={<Home />} />
                <Route path="a-propos" element={<About />} />
                <Route path="les-bases" element={<LesBases />} />
                <Route path="machine-learning" element={<MachineLearning />} />
                <Route path="deep-learning" element={<DeepLearning />} />
                <Route path="types-ia" element={<TypesIA />} />
                <Route path="cas-usage" element={<CasUsage />} />
                <Route path="ethique" element={<Ethique />} />
                <Route path="ressources" element={<Ressources />} />
                <Route path="glossaire" element={<Glossaire />} />
                <Route path="histoire-ia" element={<HistoireIA />} />
                <Route path="niveaux-ia" element={<NiveauxIA />} />
                <Route path="actualites" element={<Actualites />} />
                <Route path="mentions-legales" element={<MentionsLegales />} />
                <Route path="confidentialite" element={<Confidentialite />} />
                <Route path="ethique-gouvernance" element={<EthiqueGouvernance />} />
                <Route path="ia-marketing-vente" element={<IAMarketingVente />} />
                <Route path="ia-environnement" element={<IAEnvironnement />} />
                <Route path="utiliser-ia-quotidien" element={<UtiliserIAQuotidien />} />
                <Route path="utiliser-ia-travail" element={<UtiliserIATravail />} />
                <Route path="organiser-services-ia" element={<OrganiserServicesIA />} />
                <Route path="calculateur-couts-ia" element={<CalculateurCoutsIA />} />
                <Route path="ia-expliquee-aux-enfants" element={<IAExpliqueeAuxEnfants />} />
                <Route path="simulateur-ia" element={<SimulateurIA />} />
                <Route path="ia-multimodale" element={<IAMultimodale />} />
                <Route path="nlp-concepts" element={<NLPConcepts />} />
                <Route path="llm-details" element={<LLMDetails />} />
                <Route path="premier-modele-ml" element={<PremierModeleML />} />
                <Route path="coder-avec-ia" element={<CoderAvecIA />} />
                <Route path="python-ia" element={<PythonIA />} />
                <Route path="gemini-chat" element={<GeminiChatPage />} />
                
                {/* Routes pour les cours */}
                <Route path="cours/prompt-engineering" element={<PromptEngineering />} />
                <Route path="cours/chain-of-prompts" element={<ChainOfPrompts />} />
                <Route path="cours/parametres-llm" element={<ParametresLLM />} />
                <Route path="cours/ia-creativite" element={<IACreativite />} />
                <Route path="cours/deep-learning-pratique" element={<DeepLearningPratique />} />
                <Route path="cours/nlp-llm-comprehension" element={<NLPComprehension />} />
                <Route path="cours/ia-entreprise" element={<IAEntreprise />} />
                <Route path="cours/ia-ethique" element={<IAEthique />} />
                
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
