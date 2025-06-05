import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import MainLayout from '@/layouts/MainLayout';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Ethics from './pages/Ethics';
import Glossary from './pages/Glossary';
import TimelinePage from './pages/TimelinePage';
import Memory from './pages/Memory';
import News from './pages/News';
import MachineLearning from './pages/MachineLearning';
import NotFound from './pages/NotFound';
import PromptEngineering from './pages/PromptEngineering';
import IACreativite from './pages/IACreativite';
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
              <Route path="/ressources" element={<Resources />} />
              <Route path="/ethique" element={<Ethics />} />
              <Route path="/glossaire" element={<Glossary />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/memoire" element={<Memory />} />
              <Route path="/actualites" element={<News />} />
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
