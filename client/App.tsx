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
            <Route
              path="curriculum"
              element={<Placeholder title="Curriculum" />}
            />
            <Route
              path="onsite-daycare"
              element={<Placeholder title="Onsite Daycare" />}
            />
            <Route
              path="life-at-ankuram"
              element={<Placeholder title="Life at Ankuram Kids" />}
            />
            <Route
              path="leadership-team"
              element={<Placeholder title="Leadership Team" />}
            />
            <Route
              path="corporate-tieups"
              element={<Placeholder title="Corporate Tie-ups" />}
            />
            <Route path="admissions" element={<Admissions />} />
            <Route
              path="centre-locator"
              element={<Placeholder title="Centre Locator" />}
            />
            <Route
              path="ntt-training"
              element={<Placeholder title="NTT Training" />}
            />
            <Route path="franchise" element={<Franchise />} />
            <Route
              path="contact"
              element={<Placeholder title="Contact Us" />}
            />
            <Route path="faqs" element={<Placeholder title="FAQs" />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
