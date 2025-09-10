import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Admissions from "./pages/Admissions";
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
            <Route path="about" element={<Placeholder title="About the School" />} />
            <Route path="programs" element={<Placeholder title="Our Programs" />} />
            <Route path="co-curricular" element={<Placeholder title="Co-curricular" />} />
            <Route path="facilities" element={<Placeholder title="Campus Facilities" />} />
            <Route path="life-at-ankuram" element={<Placeholder title="Life at Ankuram Kids" />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="media-gallery" element={<Placeholder title="Media Gallery" />} />
            <Route path="ntt-training" element={<Placeholder title="NTT Training" />} />
            <Route path="franchise" element={<Placeholder title="Franchise Opportunities" />} />
            <Route path="contact" element={<Placeholder title="Contact Us" />} />
            <Route path="testimonials" element={<Placeholder title="Testimonials" />} />
            <Route path="blog" element={<Placeholder title="Blog & Articles" />} />
            <Route path="careers" element={<Placeholder title="Career Opportunities" />} />
            <Route path="faqs" element={<Placeholder title="FAQs" />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
