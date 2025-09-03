import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Shield, 
  FileText, 
  Zap, 
  Users, 
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
  CreditCard,
  Receipt,
  TrendingUp,
  AlertTriangle,
  Phone,
  Mail,
  Smartphone,
  Search,
  Eye,
  FileCheck
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Reduce claim denials by up to 90%",
  "Verify eligibility in under 30 seconds",
  "Automated pre-authorization processing",
  "Real-time insurance verification",
  "Comprehensive coverage details",
  "24/7 automated verification"
];

const features = [
  {
    icon: Search,
    title: "Instant Verification",
    description: "Real-time eligibility checks with comprehensive coverage information."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Secure data transmission and storage with enterprise-grade encryption."
  },
  {
    icon: Zap,
    title: "Automated Processing",
    description: "Streamlined pre-authorization workflows to save time and reduce errors."
  }
];

const detailedFeatures = {
  "Eligibility Verification": [
    "Real-time insurance verification",
    "Coverage period validation",
    "Benefit details retrieval",
    "Copay and deductible information",
    "Network status checking",
    "Multiple insurance verification"
  ],
  "Pre-Authorization": [
    "Automated auth submission",
    "Status tracking and updates",
    "Documentation management",
    "Appeal processing",
    "Urgent care expediting",
    "Specialty service auths"
  ],
  "Coverage Analysis": [
    "Detailed benefit breakdown",
    "Service-specific coverage",
    "Exclusion identification",
    "Limitation tracking",
    "Alternative coverage options",
    "Cost estimation tools"
  ],
  "Reporting & Analytics": [
    "Verification success rates",
    "Denial prevention metrics",
    "Processing time analysis",
    "Cost savings reports",
    "Compliance monitoring",
    "Performance dashboards"
  ]
};

const pricingPlans = [
  {
    name: "Basic",
    price: "$199",
    period: "/month",
    description: "For small practices",
    features: [
      "Up to 1,000 verifications/month",
      "Basic eligibility checks",
      "Standard reporting",
      "Email support",
      "HIPAA compliance"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    description: "For growing practices",
    features: [
      "Up to 5,000 verifications/month",
      "Advanced eligibility checks",
      "Pre-authorization processing",
      "Priority support",
      "Custom reporting",
      "API integration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$799",
    period: "/month",
    description: "For large healthcare systems",
    features: [
      "Unlimited verifications",
      "Full-service verification",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "Advanced analytics"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Dr. Robert Martinez",
    role: "Orthopedic Surgeon",
    content: "PatientClick's eligibility verification has reduced our claim denials by 90%. The real-time verification is incredibly fast and accurate.",
    rating: 5
  },
  {
    name: "Jennifer Adams",
    role: "Practice Manager",
    content: "The automated pre-authorization process saves us hours every day. We can focus on patient care instead of insurance paperwork.",
    rating: 5
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Cardiologist",
    content: "Their coverage analysis tools help us understand exactly what's covered before we provide services. It's been a game-changer for our practice.",
    rating: 5
  }
];

const stats = [
  { label: "Verifications Processed", value: "5M+", icon: Search },
  { label: "Success Rate", value: "99.8%", icon: CheckCircle },
  { label: "Average Response Time", value: "<30s", icon: Clock },
  { label: "Denial Reduction", value: "90%", icon: TrendingUp }
];

export default function EligibilityCheck() {
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
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Insurance Verification
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6">
              Eligibility Check & PreAuthorization
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Verify patient insurance eligibility in seconds and streamline pre-authorization 
              processes to reduce denials and improve cash flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                variant="cta" 
                size="xl"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-trust-blue mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                Comprehensive Verification Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our eligibility verification and pre-authorization services ensure you have 
                complete coverage information before providing care.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center shadow-card hover:shadow-trust transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
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

            {/* Detailed Features Tabs */}
            <Tabs defaultValue="Eligibility Verification" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {Object.keys(detailedFeatures).map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(detailedFeatures).map(([category, features]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-healthcare-green flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple, fast, and secure eligibility verification in three easy steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Enter Patient Info</h3>
                <p className="text-muted-foreground">Input patient demographics and insurance information through our secure portal.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Instant Verification</h3>
                <p className="text-muted-foreground">Our system connects to insurance databases and retrieves real-time coverage information.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Get Results</h3>
                <p className="text-muted-foreground">Receive comprehensive coverage details including benefits, copays, and authorizations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that best fits your verification needs and practice size.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative shadow-card hover:shadow-trust transition-shadow ${
                    plan.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-trust-blue">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-trust-blue">
                      {plan.price}
                      <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-healthcare-green flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    <Button 
                      onClick={() => setIsDemoModalOpen(true)}
                      variant={plan.popular ? "cta" : "outline"}
                      className="w-full mt-6"
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Trusted by Healthcare Providers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our clients say about our eligibility verification services.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-trust-blue">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
              Ready to Streamline Your Verification Process?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Start reducing denials and improving patient care with our eligibility verification services.
            </p>
            <Button 
              onClick={() => setIsDemoModalOpen(true)}
              variant="cta" 
              size="xl"
            >
              Start Free Trial
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