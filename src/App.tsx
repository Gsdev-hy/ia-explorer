
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './layouts/MainLayout';

// Pages principales
import Home from './pages/Home';
import LesBases from './pages/LesBases';
import TypesIA from './pages/TypesIA';
import NiveauxIA from './pages/NiveauxIA';
import MachineLearning from './pages/MachineLearning';
import Ethique from './pages/Ethique';
import CasUsage from './pages/CasUsage';
import Glossaire from './pages/Glossaire';
import Histoire from './pages/Histoire';
import HistoireIA from './pages/HistoireIA';
import Actualites from './pages/Actualites';

// Applications spécialisées
import IAMultimodale from './pages/IAMultimodale';
import IAMarketingVente from './pages/IAMarketingVente';
import IAEnvironnement from './pages/IAEnvironnement';
import CoderAvecIA from './pages/CoderAvecIA';
import OrganiserServicesIA from './pages/OrganiserServicesIA';
import UtiliserIAQuotidien from './pages/UtiliserIAQuotidien';
import UtiliserIATravail from './pages/UtiliserIATravail';
import IAExpliqueeAuxEnfants from './pages/IAExpliqueeAuxEnfants';
import EthiqueGouvernance from './pages/EthiqueGouvernance';

// Cours et formations
import ApprentissageSupervise from './pages/cours/ApprentissageSupervise';
import ApprentissageNonSupervise from './pages/cours/ApprentissageNonSupervise';
import NLPComprehension from './pages/cours/NLPComprehension';
import PromptEngineering from './pages/cours/PromptEngineering';
import ParametresLLM from './pages/cours/ParametresLLM';
import ChainOfPrompts from './pages/cours/ChainOfPrompts';
import DeepLearningPratique from './pages/cours/DeepLearningPratique';
import IACreativite from './pages/cours/IACreativite';
import IAEntreprise from './pages/cours/IAEntreprise';
import IAEthique from './pages/cours/IAEthique';

// Outils et ressources
import Ressources from './pages/Ressources';
import CalculateurCoutsIA from './pages/CalculateurCoutsIA';
import SimulateurIA from './pages/SimulateurIA';
import PremierModeleML from './pages/PremierModeleML';
import PythonIA from './pages/PythonIA';
import DeepLearning from './pages/DeepLearning';
import LLMDetails from './pages/LLMDetails';
import NLPConcepts from './pages/NLPConcepts';

// Pages de communication
import GeminiChatPage from './pages/GeminiChatPage';
import About from './pages/About';
import Confidentialite from './pages/Confidentialite';
import MentionsLegales from './pages/MentionsLegales';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function QueryClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

function App() {
  return (
    <Router>
      <QueryClientWrapper>
        <MainLayout>
          <Routes>
            {/* Pages principales */}
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Home />} />
            
            {/* Pages d'information */}
            <Route path="/les-bases" element={<LesBases />} />
            <Route path="/types-ia" element={<TypesIA />} />
            <Route path="/niveaux-ia" element={<NiveauxIA />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/ethique" element={<Ethique />} />
            <Route path="/cas-usage" element={<CasUsage />} />
            <Route path="/glossaire" element={<Glossaire />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/histoire-ia" element={<HistoireIA />} />
            <Route path="/actualites" element={<Actualites />} />
            
            {/* Applications spécialisées */}
            <Route path="/ia-multimodale" element={<IAMultimodale />} />
            <Route path="/ia-marketing-vente" element={<IAMarketingVente />} />
            <Route path="/ia-environnement" element={<IAEnvironnement />} />
            <Route path="/coder-avec-ia" element={<CoderAvecIA />} />
            <Route path="/organiser-services-ia" element={<OrganiserServicesIA />} />
            <Route path="/utiliser-ia-quotidien" element={<UtiliserIAQuotidien />} />
            <Route path="/utiliser-ia-travail" element={<UtiliserIATravail />} />
            <Route path="/ia-expliquee-aux-enfants" element={<IAExpliqueeAuxEnfants />} />
            <Route path="/ethique-gouvernance" element={<EthiqueGouvernance />} />
            
            {/* Cours et formations */}
            <Route path="/cours/apprentissage-supervise" element={<ApprentissageSupervise />} />
            <Route path="/cours/apprentissage-non-supervise" element={<ApprentissageNonSupervise />} />
            <Route path="/cours/nlp-comprehension" element={<NLPComprehension />} />
            <Route path="/cours/prompt-engineering" element={<PromptEngineering />} />
            <Route path="/cours/parametres-llm" element={<ParametresLLM />} />
            <Route path="/cours/chain-of-prompts" element={<ChainOfPrompts />} />
            <Route path="/cours/deep-learning-pratique" element={<DeepLearningPratique />} />
            <Route path="/cours/ia-creativite" element={<IACreativite />} />
            <Route path="/cours/ia-entreprise" element={<IAEntreprise />} />
            <Route path="/cours/ia-ethique" element={<IAEthique />} />
            
            {/* Outils et ressources */}
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/calculateur-couts-ia" element={<CalculateurCoutsIA />} />
            <Route path="/simulateur-ia" element={<SimulateurIA />} />
            <Route path="/premier-modele-ml" element={<PremierModeleML />} />
            <Route path="/python-ia" element={<PythonIA />} />
            <Route path="/deep-learning" element={<DeepLearning />} />
            <Route path="/llm-details" element={<LLMDetails />} />
            <Route path="/nlp-concepts" element={<NLPConcepts />} />
            
            {/* Pages de communication */}
            <Route path="/chat" element={<GeminiChatPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            
            {/* Page 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </QueryClientWrapper>
    </Router>
  );
}

export default App;
