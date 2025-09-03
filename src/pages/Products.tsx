import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetaTags } from "@/components/MetaTags";
import { 
  FileText, 
  Pill, 
  Users, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    id: "ehr",
    title: "Electronic Health Records",
    icon: FileText,
    description: "Comprehensive, user-friendly EHR system designed for modern healthcare practices.",
    features: [
      "Intuitive patient charting",
      "Clinical decision support",
      "Customizable templates",
      "Real-time collaboration",
      "Mobile accessibility",
      "Integration ready"
    ],
    benefits: "Reduce documentation time by 40% while improving care quality",
    pricing: "Starting at $199/provider/month"
  },
  {
    id: "e-prescription",
    title: "e-Prescription",
    icon: Pill,
    description: "Streamlined electronic prescribing with real-time drug interaction checks.",
    features: [
      "Drug interaction alerts",
      "Insurance formulary checks",
      "Prior authorization support",
      "Pharmacy network integration",
      "Controlled substance management",
      "Patient medication history"
    ],
    benefits: "Eliminate prescription errors and improve patient safety",
    pricing: "Starting at $89/provider/month"
  },
  {
    id: "patient-engagement",
    title: "Patient Engagement",
    icon: Users,
    description: "Empower patients with secure communication and self-service tools.",
    features: [
      "Patient portal access",
      "Secure messaging",
      "Appointment scheduling",
      "Educational resources",
      "Medication reminders",
      "Health tracking tools"
    ],
    benefits: "Increase patient satisfaction by 35% and reduce no-shows",
    pricing: "Starting at $149/provider/month"
  },
  {
    id: "practice-management",
    title: "Practice Management",
    icon: Calendar,
    description: "Complete practice management solution for streamlined operations.",
    features: [
      "Appointment scheduling",
      "Patient registration",
      "Insurance verification",
      "Billing and claims",
      "Reporting and analytics",
      "Staff management"
    ],
    benefits: "Boost practice efficiency and revenue cycle performance",
    pricing: "Starting at $249/provider/month"
  }
];

export default function Products() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Healthcare Software Products"
        description="Comprehensive healthcare software solutions including EHR, e-prescription, patient engagement, and practice management systems. Streamline your practice operations."
        keywords="EHR software, e-prescription, patient engagement, practice management, healthcare technology, medical software"
        canonical="https://patientclick.com/products"
      />
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 sm:mb-6" data-aos="fade-down">
              <Star className="w-4 h-4 mr-2" />
              Award-Winning Products
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust-blue mb-4 sm:mb-6" data-aos="fade-up">
              Healthcare Technology That Works
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="200">
              Our comprehensive suite of healthcare products is designed to streamline your practice, 
              improve patient care, and boost your bottom line.
            </p>
            <Button 
              onClick={() => setIsDemoModalOpen(true)}
              variant="cta" 
              size="xl"
            >
              See All Products in Action
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="shadow-card hover:shadow-trust transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4 sm:pb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-trust-blue">
                        {product.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground text-base sm:text-lg">
                      {product.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 sm:space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-trust-blue mb-2 sm:mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-healthcare-green flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-healthcare-light-green rounded-lg p-3 sm:p-4">
                      <p className="text-sm font-medium text-healthcare-green mb-1">
                        Key Benefit:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {product.benefits}
                      </p>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-border space-y-3 sm:space-y-0">
                      <div>
                        <p className="text-sm text-muted-foreground">Pricing</p>
                        <p className="font-semibold text-trust-blue text-sm sm:text-base">{product.pricing}</p>
                      </div>
                      <Button 
                        onClick={() => setIsDemoModalOpen(true)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
              Seamless Integration, Maximum Impact
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
              All PatientClick products work together seamlessly, creating a unified healthcare 
              ecosystem that grows with your practice.
            </p>
            <Button 
              onClick={() => setIsDemoModalOpen(true)}
              variant="cta" 
              size="xl"
            >
              Schedule Integration Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}