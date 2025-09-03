import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LazyWrapper } from "./components/LazyLoader";
import {
  LazyProducts,
  LazyServices,
  LazyTestimonials,
  LazyContact,
  LazyNews,
  LazyBlog,
  LazyArticles,
  LazyArticleDetail,
  LazyEHR,
  LazyEPrescription,
  LazyPatientEngagement,
  LazyPracticeManagement,
  LazyRevenueCycleProduct,
  LazyTelemedicine,
  LazyMedicalBilling,
  LazyEligibilityCheck,
  LazyScheduleAutomation,
  LazyClinicalDocumentation,
  LazyTechnologyInterface,
  LazyMultiLocation,
  LazyRevenueCycle,
  LazyHIPAACompliant,
  LazyHITECHCertified,
  LazySupport,
  LazyFAQ,
  LazyTerms,
  LazyPrivacyPolicy
} from "./components/LazyLoader";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<LazyWrapper><LazyProducts /></LazyWrapper>} />
          {/* Individual product routes */}
          <Route path="/products/ehr" element={<LazyWrapper><LazyEHR /></LazyWrapper>} />
          <Route path="/products/e-prescription" element={<LazyWrapper><LazyEPrescription /></LazyWrapper>} />
          <Route path="/products/patient-engagement" element={<LazyWrapper><LazyPatientEngagement /></LazyWrapper>} />
          <Route path="/products/practice-management" element={<LazyWrapper><LazyPracticeManagement /></LazyWrapper>} />
          <Route path="/products/revenue-cycle" element={<LazyWrapper><LazyRevenueCycleProduct /></LazyWrapper>} />
          <Route path="/products/telemedicine" element={<LazyWrapper><LazyTelemedicine /></LazyWrapper>} />
          {/* Individual service routes */}
          <Route path="/services/medical-billing" element={<LazyWrapper><LazyMedicalBilling /></LazyWrapper>} />
          <Route path="/services/eligibility-check" element={<LazyWrapper><LazyEligibilityCheck /></LazyWrapper>} />
          <Route path="/services/schedule-automation" element={<LazyWrapper><LazyScheduleAutomation /></LazyWrapper>} />
          <Route path="/services/clinical-documentation" element={<LazyWrapper><LazyClinicalDocumentation /></LazyWrapper>} />
          <Route path="/services/technology-interface" element={<LazyWrapper><LazyTechnologyInterface /></LazyWrapper>} />
          <Route path="/services/multilocation" element={<LazyWrapper><LazyMultiLocation /></LazyWrapper>} />
          <Route path="/services/revenue-cycle" element={<LazyWrapper><LazyRevenueCycle /></LazyWrapper>} />
          <Route path="/services" element={<LazyWrapper><LazyServices /></LazyWrapper>} />
          <Route path="/testimonials" element={<LazyWrapper><LazyTestimonials /></LazyWrapper>} />
          <Route path="/news" element={<LazyWrapper><LazyNews /></LazyWrapper>} />
          <Route path="/news/blog" element={<LazyWrapper><LazyBlog /></LazyWrapper>} />
          <Route path="/news/articles" element={<LazyWrapper><LazyArticles /></LazyWrapper>} />
          <Route path="/news/article/:id" element={<LazyWrapper><LazyArticleDetail /></LazyWrapper>} />
          <Route path="/cost-disclosure" element={<LazyWrapper><LazyContact /></LazyWrapper>} />
          <Route path="/contact" element={<LazyWrapper><LazyContact /></LazyWrapper>} />
          <Route path="/contact/*" element={<LazyWrapper><LazyContact /></LazyWrapper>} />
          <Route path="/support" element={<LazyWrapper><LazySupport /></LazyWrapper>} />
          <Route path="/privacy-policy" element={<LazyWrapper><LazyPrivacyPolicy /></LazyWrapper>} />
          <Route path="/terms" element={<LazyWrapper><LazyTerms /></LazyWrapper>} />
          <Route path="/faq" element={<LazyWrapper><LazyFAQ /></LazyWrapper>} />
          <Route path="/careers" element={<LazyWrapper><LazyContact /></LazyWrapper>} />
          <Route path="/hipaa-compliant" element={<LazyWrapper><LazyHIPAACompliant /></LazyWrapper>} />
          <Route path="/hitech-certified" element={<LazyWrapper><LazyHITECHCertified /></LazyWrapper>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
