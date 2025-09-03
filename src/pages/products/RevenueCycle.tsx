import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import PricingModal from "@/components/PricingModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  CheckCircle, 
  Shield, 
  Smartphone, 
  Zap, 
  Users, 
  FileText, 
  Play, 
  Star,
  Clock,
  DollarSign,
  Award,
  MessageSquare,
  BarChart3,
  Calendar,
  UserCheck,
  Lock,
  Database,
  Cloud,
  ArrowRight,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Receipt,
  Calculator,
  PieChart,
  Target,
  ArrowUpRight
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from "@/assets/healthcare-hero.jpg";

const benefits = [
  "Automated claim processing and submission",
  "Real-time eligibility verification", 
  "Advanced denial management",
  "Comprehensive reporting and analytics",
  "Seamless integration with EHR",
  "Expert billing support team"
];

const features = [
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Increase collections by up to 25% with our intelligent claim processing and denial management."
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Stay compliant with HIPAA, CMS, and state regulations with automated compliance checks."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get real-time insights into your practice's financial performance with detailed reporting."
  }
];

const detailedFeatures = {
  "Claim Processing": [
    "Automated claim submission",
    "Real-time claim status tracking",
    "Electronic claim scrubbing",
    "Batch processing capabilities",
    "Claim editing and correction",
    "Automated follow-up"
  ],
  "Eligibility & Benefits": [
    "Real-time eligibility verification",
    "Benefits investigation",
    "Pre-authorization management",
    "Coverage determination",
    "Deductible tracking",
    "Co-pay and coinsurance calculation"
  ],
  "Denial Management": [
    "Automated denial analysis",
    "Appeal letter generation",
    "Denial trend reporting",
    "Root cause analysis",
    "Preventive measures",
    "Expert appeal support"
  ],
  "Payment Processing": [
    "Electronic payment posting",
    "Payment plan management",
    "Credit card processing",
    "Patient payment portal",
    "Automated payment reminders",
    "Refund processing"
  ],
  "Reporting & Analytics": [
    "Financial performance dashboards",
    "Collection rate analysis",
    "Days in A/R tracking",
    "Denial rate reporting",
    "Provider productivity metrics",
    "Custom report builder"
  ],
  "Patient Billing": [
    "Patient statement generation",
    "Multi-channel communication",
    "Payment plan options",
    "Financial assistance screening",
    "Patient portal integration",
    "Automated follow-up"
  ]
};

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small practices",
    features: [
      "Up to 1,000 claims/month",
      "Basic eligibility verification",
      "Standard reporting",
      "Email support",
      "EHR integration"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Ideal for growing practices",
    features: [
      "Up to 5,000 claims/month",
      "Advanced denial management",
      "Custom reporting",
      "Priority support",
      "Full EHR integration",
      "Patient portal"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,199",
    period: "/month",
    description: "For large practices & groups",
    features: [
      "Unlimited claims",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 support",
      "Advanced analytics",
      "Multi-location support"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Family Practice",
    content: "PatientClick's revenue cycle management has increased our collections by 30% while reducing our administrative burden significantly.",
    rating: 5,
    image: heroImage
  },
  {
    name: "Dr. Michael Chen",
    role: "Cardiology Group",
    content: "The automated denial management and real-time reporting have transformed how we handle our billing. Highly recommended!",
    rating: 5,
    image: "/src/assets/hero-medical.jpg"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Practice",
    content: "Seamless integration with our EHR and excellent support team. Our revenue cycle is now more efficient than ever.",
    rating: 5,
    image: heroImage
  }
];

const faqs = [
  {
    question: "How quickly can we see improvements in collections?",
    answer: "Most practices see improvements within 30-60 days of implementation, with full optimization typically achieved within 3-6 months."
  },
  {
    question: "Do you handle all insurance types?",
    answer: "Yes, we support all major insurance carriers including Medicare, Medicaid, and commercial payers across all 50 states."
  },
  {
    question: "What kind of reporting is available?",
    answer: "We provide comprehensive reporting including financial dashboards, collection rates, denial analysis, and custom reports tailored to your practice needs."
  },
  {
    question: "Is there a contract or setup fee?",
    answer: "No setup fees and flexible month-to-month contracts. We believe in earning your business every month."
  },
  {
    question: "How does the integration with EHR work?",
    answer: "Our system integrates seamlessly with your existing EHR through standard interfaces, requiring minimal changes to your current workflow."
  },
  {
    question: "What support is available?",
    answer: "We provide dedicated support through phone, email, and chat. Enterprise plans include a dedicated account manager and 24/7 support."
  }
];

export default function RevenueCycle() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
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
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [api, isPaused, currentSlide]);

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
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="inline-flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Revenue Cycle Management
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue leading-tight">
                  Maximize Your
                  <span className="block text-primary">Revenue Potential</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Streamline your billing operations with intelligent automation, 
                  real-time analytics, and expert support to optimize your practice's financial performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)}
                    size="xl" 
                    className="bg-primary hover:bg-primary-hover hover-glow"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    See RCM Demo
                  </Button>
                  <Button variant="outline" size="xl">
                    View Pricing
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25%</div>
                    <div className="text-sm text-muted-foreground">Average Collection Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15 Days</div>
                    <div className="text-sm text-muted-foreground">Reduced Days in A/R</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Claim Acceptance Rate</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src={heroImage} 
                    alt="Revenue Cycle Management" 
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Why Choose PatientClick RCM?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive revenue cycle management solution is designed to maximize 
                your practice's financial performance while minimizing administrative burden.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trust-blue mb-2">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Powerful Features for Modern Practices
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to optimize your revenue cycle, from automated claim processing 
                to advanced analytics and reporting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-4 text-trust-blue">{feature.title}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Features Tabs */}
            <Tabs defaultValue="Claim Processing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
                {Object.keys(detailedFeatures).map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(detailedFeatures).map(([category, features]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div 
                        key={feature}
                        className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-soft"
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your practice size and needs. 
                All plans include our core RCM features with no hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`relative p-8 ${plan.popular ? 'ring-2 ring-primary shadow-xl' : 'shadow-soft'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-trust-blue">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-hover' : 'bg-secondary hover:bg-secondary/80'}`}
                      onClick={() => setIsPricingModalOpen(true)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of healthcare providers who trust PatientClick 
                to manage their revenue cycle efficiently.
              </p>
            </div>

            <Carousel
              setApi={setApi}
              className="w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="p-6 h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-trust-blue">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gradient-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about our Revenue Cycle Management solution.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-trust-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of healthcare providers who trust PatientClick to maximize 
              their practice's financial performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                size="xl" 
                className="bg-primary hover:bg-primary-hover hover-glow"
              >
                <Play className="w-5 h-5 mr-2" />
                Request Demo
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => setIsPricingModalOpen(true)}
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
      
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)} 
      />
    </div>
  );
} 