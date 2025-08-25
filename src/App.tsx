import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NettoyageAirbnb from "./pages/NettoyageAirbnb";
import GestionLinge from "./pages/GestionLinge";
import Consommables from "./pages/Consommables";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nettoyage-airbnb" element={<NettoyageAirbnb />} />
          <Route path="/gestion-linge" element={<GestionLinge />} />
          <Route path="/consommables" element={<Consommables />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
