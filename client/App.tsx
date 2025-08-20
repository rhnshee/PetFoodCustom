import "./global.css";

import { Toaster } from "./components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import PetProfile from "./pages/PetProfile";
import FoodCustomization from "./pages/FoodCustomization";
import SubscriptionManagement from "./pages/SubscriptionManagement";
import OrderHistory from "./pages/OrderHistory";
import MyPetMeals from "./pages/MyPetMeals";
import Settings from "./pages/Settings";
import HelpSupport from "./pages/HelpSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pet-profile" element={<PetProfile />} />
          <Route path="/food-customization" element={<FoodCustomization />} />
          <Route path="/subscription" element={<SubscriptionManagement />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/my-pet-meals" element={<MyPetMeals />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help-support" element={<HelpSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
