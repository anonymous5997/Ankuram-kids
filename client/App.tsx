import "./global.css";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Franchise from "./pages/Franchise";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import LifeAtAnkuram from "./pages/LifeAtAnkuram";
import NttTraining from "./pages/NttTraining";
import Curriculum from "./pages/Curriculum";
import OnsiteDaycare from "./pages/OnsiteDaycare";
import Faqs from "./pages/Faqs";
import CentreLocator from "./pages/CentreLocator";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route
              path="programs"
              element={<Placeholder title="Our Programs" />}
            />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="onsite-daycare" element={<OnsiteDaycare />} />
            <Route path="life-at-ankuram" element={<LifeAtAnkuram />} />
            <Route
              path="leadership-team"
              element={<Placeholder title="Leadership Team" />}
            />
            <Route
              path="corporate-tieups"
              element={<Placeholder title="Corporate Tie-ups" />}
            />
            <Route path="admissions" element={<Admissions />} />
            <Route path="centre-locator" element={<CentreLocator />} />
            <Route path="ntt-training" element={<NttTraining />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faqs" element={<Faqs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
const existing = (window as any).__ankuram_root as
  | ReturnType<typeof createRoot>
  | undefined;
const root =
  existing ?? ((window as any).__ankuram_root = createRoot(container));
root.render(<App />);

if (import.meta && (import.meta as any).hot) {
  (import.meta as any).hot.dispose(() => {
    // Keep root for fast refresh; unmount to avoid memory leaks
    root.unmount();
    (window as any).__ankuram_root = undefined;
  });
}