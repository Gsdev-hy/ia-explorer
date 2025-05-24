
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import LesBases from './pages/LesBases';
import MachineLearning from './pages/MachineLearning';
import TypesIA from './pages/TypesIA';
import LLMDetails from './pages/LLMDetails';
import NotFound from './pages/NotFound';
import IAMultimodale from './pages/IAMultimodale';
import EthiqueGouvernance from './pages/EthiqueGouvernance';
import CasUsage from './pages/CasUsage';
import Ethique from './pages/Ethique';
import Ressources from './pages/Ressources';
import Glossaire from './pages/Glossaire';
import Confidentialite from './pages/Confidentialite';
import MentionsLegales from './pages/MentionsLegales';
import Actualites from './pages/Actualites';
import HistoireIA from './pages/HistoireIA';
import NiveauxIA from './pages/NiveauxIA';
import IAExpliqueeAuxEnfants from './pages/IAExpliqueeAuxEnfants';
import CoderAvecIA from './pages/CoderAvecIA';
import IAMarketingVente from './pages/IAMarketingVente';
import IAEnvironnement from './pages/IAEnvironnement';
import GeminiChatPage from './pages/GeminiChatPage';
import PythonIA from './pages/PythonIA';
import DeepLearning from './pages/DeepLearning';
import NLPConcepts from './pages/NLPConcepts';
import PremierModeleML from './pages/PremierModeleML';
import SimulateurIA from "./pages/SimulateurIA";
import CalculateurCoutsIA from "./pages/CalculateurCoutsIA";

/**
 * Application principale
 * @returns {JSX.Element} Le composant de l'application
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="les-bases" element={<LesBases />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="types-ia" element={<TypesIA />} />
          <Route path="llm" element={<LLMDetails />} />
          <Route path="ia-multimodale" element={<IAMultimodale />} />
          <Route path="ethique-gouvernance" element={<EthiqueGouvernance />} />
          <Route path="cas-usage" element={<CasUsage />} />
          <Route path="ethique" element={<Ethique />} />
          <Route path="ressources" element={<Ressources />} />
          <Route path="glossaire" element={<Glossaire />} />
          <Route path="confidentialite" element={<Confidentialite />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="histoire-ia" element={<HistoireIA />} />
          <Route path="niveaux-ia" element={<NiveauxIA />} />
          <Route path="ia-expliquee-aux-enfants" element={<IAExpliqueeAuxEnfants />} />
          <Route path="coder-avec-ia" element={<CoderAvecIA />} />
          <Route path="ia-marketing-vente" element={<IAMarketingVente />} />
          <Route path="ia-environnement" element={<IAEnvironnement />} />
          <Route path="chat" element={<GeminiChatPage />} />
          <Route path="python-ia" element={<PythonIA />} />
          <Route path="deep-learning" element={<DeepLearning />} />
          <Route path="nlp-concepts" element={<NLPConcepts />} />
          <Route path="premier-modele-ml" element={<PremierModeleML />} />
          <Route path="/simulateur-ia" element={<SimulateurIA />} />
          <Route path="/calculateur-couts-ia" element={<CalculateurCoutsIA />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
