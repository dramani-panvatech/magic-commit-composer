import { Suspense, lazy } from 'react';

// Lazy load components for better performance
export const LazyProducts = lazy(() => import('../pages/Products'));
export const LazyServices = lazy(() => import('../pages/Services'));
export const LazyTestimonials = lazy(() => import('../pages/Testimonials'));
export const LazyContact = lazy(() => import('../pages/Contact'));
export const LazyNews = lazy(() => import('../pages/News'));
export const LazyBlog = lazy(() => import('../pages/Blog'));
export const LazyArticles = lazy(() => import('../pages/Articles'));
export const LazyArticleDetail = lazy(() => import('../pages/ArticleDetail'));

// Product pages
export const LazyEHR = lazy(() => import('../pages/products/EHR'));
export const LazyEPrescription = lazy(() => import('../pages/products/EPrescription'));
export const LazyPatientEngagement = lazy(() => import('../pages/products/PatientEngagement'));
export const LazyPracticeManagement = lazy(() => import('../pages/products/PracticeManagement'));
export const LazyRevenueCycleProduct = lazy(() => import('../pages/products/RevenueCycle'));
export const LazyTelemedicine = lazy(() => import('../pages/products/Telemedicine'));

// Service pages
export const LazyMedicalBilling = lazy(() => import('../pages/services/MedicalBilling'));
export const LazyEligibilityCheck = lazy(() => import('../pages/services/EligibilityCheck'));
export const LazyScheduleAutomation = lazy(() => import('../pages/services/ScheduleAutomation'));
export const LazyClinicalDocumentation = lazy(() => import('../pages/services/ClinicalDocumentation'));
export const LazyTechnologyInterface = lazy(() => import('../pages/services/TechnologyInterface'));
export const LazyMultiLocation = lazy(() => import('../pages/services/MultiLocation'));
export const LazyRevenueCycle = lazy(() => import('../pages/services/RevenueCycle'));

// Other pages
export const LazyHIPAACompliant = lazy(() => import('../pages/HIPAACompliant'));
export const LazyHITECHCertified = lazy(() => import('../pages/HITECHCertified'));
export const LazySupport = lazy(() => import('../pages/Support'));
export const LazyFAQ = lazy(() => import('../pages/FAQ'));
export const LazyTerms = lazy(() => import('../pages/Terms'));
export const LazyPrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));

// Loading component
export const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

// Wrapper component for lazy loading
export const LazyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
); 