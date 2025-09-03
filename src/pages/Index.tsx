import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import SolutionsOverview from "@/components/SolutionsOverview";
import Marquee from "@/components/Marquee";
import WhyPatientClick from "@/components/WhyPatientClick";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import StickyCtaBanner from "@/components/StickyCtaBanner";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { MetaTags } from "@/components/MetaTags";
import { SchemaMarkup, organizationSchema, websiteSchema } from "@/components/SchemaMarkup";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleDemoClose = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="AI-Powered Healthcare Solutions"
        description="Trusted provider of telemedicine, EHR, and healthcare solutions for clinics, doctors, and healthcare businesses. Used by 2,000+ practices nationwide."
        keywords="healthcare software, EHR, medical billing, telemedicine, practice management, patient engagement, patient click, patientclick, patient click ai, patient click healthcare, patient click software, patient click solutions, patient click telemedicine, patient click ehr, patient click medical billing, patient click practice management, patient click patient engagement"
        canonical="https://healthcoderai.panvatech.com/"
      />
      <SchemaMarkup type="Organization" data={organizationSchema} />
      <SchemaMarkup type="WebSite" data={websiteSchema} />
      <Navigation onDemoClick={handleDemoClick} />
      <main>
        <HeroSection onDemoClick={handleDemoClick} />
        <ServicesGrid />
        <SolutionsOverview />
        <Marquee />
        <TrustSection />
        <WhyPatientClick />
        <TestimonialsPreview />
        
      </main>
      <Footer onDemoClick={handleDemoClick} />
      <StickyCtaBanner onDemoClick={handleDemoClick} />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleDemoClose} />
    </div>
  );
};

export default Index;
