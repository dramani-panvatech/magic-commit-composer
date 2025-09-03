import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  CheckCircle, 
  Pill, 
  AlertTriangle, 
  Shield, 
  Network, 
  Clock,
  Star,
  Zap,
  UserCheck,
  FileText,
  Smartphone,
  Database,
  Lock,
  Check,
  X,
  ArrowRight,
  Award,
  MessageSquare,
  BarChart3,
  Calendar,
  Users,
  Bell,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: AlertTriangle,
    title: "Drug Interaction Alerts",
    description: "Real-time alerts for potential drug interactions, allergies, and contraindications to ensure patient safety."
  },
  {
    icon: Shield,
    title: "Insurance Formulary Checks",
    description: "Automatically check patient insurance formularies to prescribe covered medications and reduce costs."
  },
  {
    icon: Network,
    title: "Pharmacy Network Integration",
    description: "Seamlessly connected to major pharmacy networks for instant prescription delivery and status updates."
  }
];

const useCases = [
  {
    title: "Avoid Prescription Errors",
    description: "Advanced safety checks prevent medication errors before they happen",
    stats: "99.9% error reduction"
  },
  {
    title: "Send Prescriptions Instantly", 
    description: "Electronic delivery to any pharmacy in seconds, not minutes",
    stats: "Under 30 seconds"
  },
  {
    title: "Improve Patient Compliance",
    description: "Automatic refill reminders and medication adherence tracking",
    stats: "35% better compliance"
  }
];

const detailedFeatures = {
  "Safety & Compliance": [
    "Real-time drug interaction checking",
    "Allergy and contraindication alerts",
    "DEA compliance and controlled substance tracking",
    "Audit trails for all prescriptions",
    "HIPAA-compliant secure messaging",
    "Multi-factor authentication"
  ],
  "Pharmacy Integration": [
    "Direct connection to 60,000+ pharmacies",
    "Real-time prescription status updates",
    "Automatic refill requests",
    "Pharmacy preference management",
    "Cost comparison tools",
    "Generic substitution alerts"
  ],
  "Insurance & Cost": [
    "Automatic formulary checking",
    "Prior authorization assistance",
    "Cost-saving alternatives",
    "Insurance eligibility verification",
    "Copay and deductible information",
    "Medication cost transparency"
  ],
  "Workflow & Efficiency": [
    "Quick prescription templates",
    "Voice-to-text dictation",
    "Batch prescription processing",
    "Mobile prescribing capability",
    "Integration with EHR systems",
    "Automated refill management"
  ]
};

const testimonials = [
  {
    name: "Dr. Jennifer Martinez",
    role: "Family Medicine",
    practice: "Martinez Medical Group",
    rating: 5,
    text: "The drug interaction alerts have prevented several potential medication errors in our practice. The system is incredibly intuitive and saves us time."
  },
  {
    name: "Dr. Robert Kim",
    role: "Internal Medicine",
    practice: "Kim Healthcare Associates",
    rating: 5,
    text: "Our patients love the automatic refill reminders and the fact that prescriptions are sent instantly to their preferred pharmacy."
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Pediatrics",
    practice: "Thompson Pediatrics",
    rating: 5,
    text: "The insurance formulary checking feature has significantly reduced callbacks from pharmacies and improved patient satisfaction."
  }
];

const faqs = [
  {
    question: "Is the system DEA compliant for controlled substances?",
    answer: "Yes, our e-prescribing system is fully DEA compliant and supports controlled substance prescribing with proper authentication and audit trails."
  },
  {
    question: "How many pharmacies are in your network?",
    answer: "We're connected to over 60,000 pharmacies nationwide, including all major chains and independent pharmacies."
  },
  {
    question: "Can patients choose their preferred pharmacy?",
    answer: "Absolutely! Patients can set their preferred pharmacy, and the system will automatically send prescriptions there unless specified otherwise."
  },
  {
    question: "What about insurance formulary checking?",
    answer: "Our system automatically checks patient insurance formularies in real-time to ensure prescribed medications are covered and suggest alternatives if needed."
  },
  {
    question: "Is mobile prescribing supported?",
    answer: "Yes, our mobile app allows providers to prescribe medications securely from anywhere, with the same safety features as the desktop version."
  }
];

const safetyStats = [
  { label: "Error Reduction", value: 99.9, unit: "%", color: "text-green-600" },
  { label: "Prescription Speed", value: 30, unit: "seconds", color: "text-blue-600" },
  { label: "Patient Compliance", value: 35, unit: "%", color: "text-purple-600" },
  { label: "Pharmacy Network", value: 60000, unit: "+", color: "text-orange-600" }
];

export default function EPrescription() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api, isPaused]);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newSlide = api.selectedScrollSnap();
      setCurrentSlide(newSlide);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main>
        {/* Hero Section */}
        <section className="py-8 sm:py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <Badge variant="secondary" className="inline-flex items-center">
                  <Pill className="w-4 h-4 mr-2" />
                  e-Prescription
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust-blue leading-tight">
                  Safe, Smart Electronic
                  <span className="block text-primary">Prescribing</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Eliminate prescription errors with our advanced e-prescribing system. 
                  Real-time safety checks, formulary verification, and instant pharmacy delivery.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)}
                    size="xl" 
                    className="bg-primary hover:bg-primary-hover hover-glow"
                  >
                    See Safety Features
                  </Button>
                  <Button variant="outline" size="xl">
                    View Integration
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
                  {safetyStats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>
                        {stat.value.toLocaleString()}{stat.unit}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">SureScripts</div>
                    <div className="text-sm sm:text-lg font-bold text-primary">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">DEA</div>
                    <div className="text-sm sm:text-lg font-bold text-primary">Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">HIPAA</div>
                    <div className="text-sm sm:text-lg font-bold text-primary">Secure</div>
                  </div>
                </div>
              </div>
              
              {/* E-Prescription Interface Carousel */}
              <div className="relative order-first lg:order-last">
                <div className="bg-white rounded-2xl shadow-trust p-3 sm:p-4 lg:p-6 animate-slide-up max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                  <Carousel 
                    className="w-full mx-auto"
                    setApi={setApi}
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <CarouselContent className="-ml-2 sm:-ml-4">
                      {/* New Prescription Screen */}
                      <CarouselItem className="pl-2 sm:pl-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-100 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">New Prescription</h3>
                            </div>
                            <Badge className="bg-green-100 text-green-700 text-xs sm:text-sm">Safety Verified</Badge>
                          </div>

                          {/* Patient Info */}
                          <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border">
                            <div className="text-sm text-gray-600 mb-1">Patient</div>
                            <div className="font-medium text-gray-800">John Smith, 45</div>
                            <div className="text-xs text-gray-500 mt-1">Allergies: Penicillin, Sulfa</div>
                          </div>

                          {/* Medication Details */}
                          <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border">
                            <div className="text-sm text-gray-600 mb-1">Medication</div>
                            <div className="font-medium text-gray-800">Lisinopril 10mg</div>
                            <div className="text-xs text-gray-500 mt-1">Once daily • 30 tablets</div>
                          </div>

                          {/* Safety Check */}
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-center text-green-700 mb-2">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              <span className="font-medium">Safety Check Passed</span>
                            </div>
                            <div className="text-sm text-green-600">
                              • No drug interactions found<br/>
                              • No allergy conflicts<br/>
                              • Insurance formulary covered
                            </div>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Drug Interaction Alert Screen */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800">Drug Interaction Alert</h3>
                            </div>
                            <Badge className="bg-red-100 text-red-700">Critical</Badge>
                          </div>

                          {/* Alert Details */}
                          <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-red-200">
                            <div className="flex items-center text-red-700 mb-3">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              <span className="font-semibold">Potential Interaction Detected</span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Current Medication:</span>
                                <span className="font-medium">Warfarin 5mg</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">New Prescription:</span>
                                <span className="font-medium">Aspirin 81mg</span>
                              </div>
                            </div>
                          </div>

                          {/* Risk Assessment */}
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                            <div className="text-sm text-red-700 mb-2">
                              <strong>Risk:</strong> Increased bleeding risk
                            </div>
                            <div className="text-xs text-red-600">
                              Consider alternative medication or adjust dosage
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-3">
                            <button className="bg-red-600 text-white rounded-lg p-3 text-sm font-medium hover:bg-red-700 transition-colors">
                              Cancel Prescription
                            </button>
                            <button className="bg-orange-600 text-white rounded-lg p-3 text-sm font-medium hover:bg-orange-700 transition-colors">
                              Override & Continue
                            </button>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Pharmacy Selection Screen */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800">Pharmacy Selection</h3>
                            </div>
                            <Badge className="bg-purple-100 text-purple-700">Ready to Send</Badge>
                          </div>

                          {/* Insurance Info */}
                          <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border">
                            <div className="text-sm text-gray-600 mb-2">Insurance Coverage</div>
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-800">Blue Cross Blue Shield</div>
                                <div className="text-xs text-gray-500">Copay: $10.00</div>
                              </div>
                              <div className="text-green-600 text-sm font-medium">Covered</div>
                            </div>
                          </div>

                          {/* Pharmacy Options */}
                          <div className="space-y-3 mb-4">
                            <div className="bg-white rounded-lg p-3 shadow-sm border border-purple-200">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800">CVS Pharmacy</div>
                                  <div className="text-xs text-gray-500">123 Main St • 0.5 miles away</div>
                                </div>
                                <div className="text-green-600 text-xs">Preferred</div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800">Walgreens</div>
                                  <div className="text-xs text-gray-500">456 Oak Ave • 1.2 miles away</div>
                                </div>
                                <div className="text-gray-400 text-xs">Available</div>
                              </div>
                            </div>
                          </div>

                          {/* Send Button */}
                          <button className="w-full bg-purple-600 text-white rounded-lg p-3 text-sm font-medium hover:bg-purple-700 transition-colors">
                            Send to CVS Pharmacy
                          </button>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  
                  {/* Carousel Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {[0, 1, 2].map((index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Prescription Safety Redefined
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced safety features and intelligent checks protect your patients 
                while streamlining your workflow.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.title} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-trust-blue">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{useCase.description}</p>
                    <div className="bg-healthcare-light-green rounded-lg p-3">
                      <div className="text-lg font-bold text-healthcare-green">{useCase.stats}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features with Tabs */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Comprehensive e-Prescribing Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for safe, efficient, and compliant electronic prescribing.
              </p>
            </div>

            <Tabs defaultValue="Safety & Compliance" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6 lg:mb-8 gap-2 lg:gap-0">
                {Object.keys(detailedFeatures).map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs lg:text-sm px-2 lg:px-4 py-2 lg:py-3">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(detailedFeatures).map(([category, features]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {features.map((feature, index) => (
                      <Card key={index} className="hover-lift">
                        <CardContent className="p-4 lg:p-6">
                          <div className="flex items-start space-x-2 lg:space-x-3">
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-healthcare-green flex-shrink-0 mt-0.5" />
                            <span className="text-sm lg:text-base text-muted-foreground">{feature}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Advanced Safety Features
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-trust-blue">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Trusted by Healthcare Providers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our customers have to say about their experience with PatientClick e-Prescribing.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-trust-blue">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.practice}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about PatientClick e-Prescribing.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Clock className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Prescribing Safely Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of providers who trust PatientClick for safe, 
              efficient electronic prescribing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                variant="secondary" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
              >
                Request e-Prescription Demo
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}