
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import MainLayout from '@/layouts/MainLayout';
import Home from './pages/Home';
import Ressources from './pages/Ressources';
import Ethique from './pages/Ethique';
import Glossaire from './pages/Glossaire';
import Timeline from './components/timeline/Timeline';
import Actualites from './pages/Actualites';
import MachineLearning from './pages/MachineLearning';
import NotFound from './pages/NotFound';
import PromptEngineering from './pages/cours/PromptEngineering';
import IACreativite from './pages/cours/IACreativite';
import DeepLearning from '@/pages/DeepLearning';
import NLPComprehension from '@/pages/cours/NLPComprehension';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ressources" element={<Ressources />} />
              <Route path="/ethique" element={<Ethique />} />
              <Route path="/glossaire" element={<Glossaire />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/actualites" element={<Actualites />} />
              <Route path="/machine-learning" element={<MachineLearning />} />
              <Route path="*" element={<NotFound />} />
              
              {/* Cours routes */}
              <Route path="/cours/prompt-engineering" element={<PromptEngineering />} />
              <Route path="/cours/ia-creativite" element={<IACreativite />} />
              <Route path="/cours/deep-learning-pratique" element={<DeepLearning />} />
              <Route path="/cours/nlp-llm-comprehension" element={<NLPComprehension />} />
            </Routes>
          </MainLayout>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
