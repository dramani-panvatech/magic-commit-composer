import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetaTags } from "@/components/MetaTags";
import { 
  DollarSign, 
  Shield, 
  Calendar, 
  FileText, 
  Settings, 
  Building2, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Zap
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: "medical-billing",
    title: "Medical Billing Services",
    icon: DollarSign,
    description: "Comprehensive medical billing services to streamline your revenue cycle and maximize reimbursements.",
    features: [
      "Reduce claim denials by up to 85%",
      "Accelerate payment processing by 40%",
      "Ensure compliance with all regulations",
      "Provide transparent reporting"
    ],
    benefits: "Boost practice revenue and improve cash flow",
    pricing: "Starting at $299/month",
    href: "/services/medical-billing"
  },
  {
    id: "eligibility-check",
    title: "Eligibility Check & PreAuthorization",
    icon: Shield,
    description: "Real-time insurance verification and streamlined pre-authorization processes.",
    features: [
      "Verify eligibility in under 30 seconds",
      "Reduce claim denials by up to 90%",
      "Automated pre-authorization processing",
      "Comprehensive coverage details"
    ],
    benefits: "Prevent denials and improve patient care",
    pricing: "Starting at $199/month",
    href: "/services/eligibility-check"
  },
  {
    id: "schedule-automation",
    title: "Schedule Automation",
    icon: Calendar,
    description: "Intelligent appointment scheduling with automated reminders and optimization.",
    features: [
      "Reduce no-shows by up to 60%",
      "Automate appointment reminders",
      "Optimize provider schedules",
      "24/7 online booking"
    ],
    benefits: "Improve patient satisfaction and practice efficiency",
    pricing: "Starting at $149/month",
    href: "/services/schedule-automation"
  },
  {
    id: "clinical-documentation",
    title: "Clinical Documentation Support",
    icon: FileText,
    description: "Streamline clinical documentation with intelligent templates and voice recognition.",
    features: [
      "Reduce documentation time by up to 50%",
      "Improve coding accuracy and compliance",
      "Advanced voice-to-text capabilities",
      "Specialty-specific templates"
    ],
    benefits: "Save time and improve documentation quality",
    pricing: "Starting at $199/month",
    href: "/services/clinical-documentation"
  },
  {
    id: "technology-interface",
    title: "Technology Interface Services",
    icon: Settings,
    description: "Seamless system integration and custom API development for your healthcare systems.",
    features: [
      "Connect all healthcare systems",
      "Custom API development",
      "Real-time data synchronization",
      "24/7 technical support"
    ],
    benefits: "Eliminate data silos and improve workflow efficiency",
    pricing: "Starting at $299/month",
    href: "/services/technology-interface"
  },
  {
    id: "multilocation",
    title: "Solutions for MultiLocation Practice",
    icon: Building2,
    description: "Centralized management and unified patient experience across all practice locations.",
    features: [
      "Centralized practice management",
      "Real-time data synchronization",
      "Standardized workflows",
      "Unified patient experience"
    ],
    benefits: "Streamline operations across all locations",
    pricing: "Starting at $399/month",
    href: "/services/multilocation"
  },
  {
    id: "revenue-cycle",
    title: "Revenue-Cycle Management",
    icon: TrendingUp,
    description: "Comprehensive revenue cycle optimization to maximize practice financial performance.",
    features: [
      "Increase revenue by up to 25%",
      "Reduce claim denials by 85%",
      "Accelerate payment processing",
      "Comprehensive financial reporting"
    ],
    benefits: "Maximize revenue and improve cash flow",
    pricing: "Starting at $399/month",
    href: "/services/revenue-cycle"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Family Practice Physician",
    content: "PatientClick's services have transformed our practice. The medical billing service alone increased our revenue by 30%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Practice Administrator",
    content: "The eligibility verification service has reduced our denials dramatically. Our cash flow has never been better.",
    rating: 5
  },
  {
    name: "Dr. Lisa Rodriguez",
    role: "Multi-Location Practice Owner",
    content: "Managing our 5 locations is now seamless with PatientClick's multi-location solutions. Highly recommended!",
    rating: 5
  }
];

const stats = [
  { label: "Services Delivered", value: "500+", icon: CheckCircle },
  { label: "Client Satisfaction", value: "98%", icon: Star },
  { label: "Average ROI", value: "300%", icon: TrendingUp },
  { label: "Response Time", value: "<24hrs", icon: Clock }
];

export default function Services() {
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
        title="Healthcare Services"
        description="Professional healthcare services including medical billing, eligibility verification, schedule automation, and clinical documentation support. Drive results for your practice."
        keywords="medical billing services, eligibility verification, schedule automation, clinical documentation, healthcare services"
        canonical="https://patientclick.com/services"
      />
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 sm:mb-6" data-aos="fade-down">
              <Users className="w-4 h-4 mr-2" />
              Professional Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust-blue mb-4 sm:mb-6" data-aos="fade-up">
              Healthcare Services That Drive Results
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="200">
              Our comprehensive suite of healthcare services is designed to streamline your practice, 
              improve patient care, and boost your bottom line.
            </p>
            <Button 
              onClick={() => setIsDemoModalOpen(true)}
              variant="cta" 
              size="xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-trust-blue mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                Comprehensive Healthcare Services
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                From billing and scheduling to documentation and integration, we provide the services 
                you need to run a successful healthcare practice.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="shadow-card hover:shadow-trust transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4 sm:pb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-trust-blue">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground text-base sm:text-lg">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 sm:space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-trust-blue mb-2 sm:mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                        {service.features.map((feature) => (
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
                        {service.benefits}
                      </p>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-border space-y-3 sm:space-y-0">
                      <div>
                        <p className="text-sm text-muted-foreground">Pricing</p>
                        <p className="font-semibold text-trust-blue text-sm sm:text-base">{service.pricing}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button 
                          onClick={() => setIsDemoModalOpen(true)}
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                        >
                          Learn More
                        </Button>
                        <Button 
                          onClick={() => setIsDemoModalOpen(true)}
                          variant="cta"
                          size="sm"
                          className="w-full sm:w-auto"
                        >
                          Get Started
                        </Button>
                      </div>
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
              All PatientClick services work together seamlessly, creating a unified healthcare 
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

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of healthcare providers who trust PatientClick for their service needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="shadow-card">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-trust-blue text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
              Start optimizing your practice with our comprehensive healthcare services.
            </p>
            <Button 
              onClick={() => setIsDemoModalOpen(true)}
              variant="cta" 
              size="xl"
            >
              Get Started Today
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