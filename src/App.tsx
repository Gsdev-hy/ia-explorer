
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
import Actualites from "./pages/Actualites";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <MainLayout>
                <Index />
              </MainLayout>
            } />
            <Route path="/home" element={
              <MainLayout>
                <Home />
              </MainLayout>
            } />
            <Route path="/niveaux-ia" element={
              <MainLayout>
                <NiveauxIA />
              </MainLayout>
            } />
            <Route path="/types-ia" element={
              <MainLayout>
                <TypesIA />
              </MainLayout>
            } />
            <Route path="/machine-learning" element={
              <MainLayout>
                <MachineLearning />
              </MainLayout>
            } />
            <Route path="/cas-usage" element={
              <MainLayout>
                <CasUsage />
              </MainLayout>
            } />
            <Route path="/ethique" element={
              <MainLayout>
                <Ethique />
              </MainLayout>
            } />
            <Route path="/glossaire" element={
              <MainLayout>
                <Glossaire />
              </MainLayout>
            } />
            <Route path="/histoire-ia" element={
              <MainLayout>
                <HistoireIA />
              </MainLayout>
            } />
            <Route path="/ressources" element={
              <MainLayout>
                <Ressources />
              </MainLayout>
            } />
            <Route path="/ia-multimodale" element={
              <MainLayout>
                <IAMultimodale />
              </MainLayout>
            } />
            <Route path="/actualites" element={
              <MainLayout>
                <Actualites />
              </MainLayout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <MainLayout>
                <NotFound />
              </MainLayout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
