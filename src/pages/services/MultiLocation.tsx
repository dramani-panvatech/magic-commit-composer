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
  MapPin, 
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
  FileCheck,
  Bell,
  Repeat,
  BookOpen,
  Edit3,
  Cpu,
  Network,
  Server,
  Building2,
  Globe
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Centralized practice management",
  "Real-time data synchronization",
  "Standardized workflows across locations",
  "Improved operational efficiency",
  "Enhanced patient experience",
  "Scalable growth solutions"
];

const features = [
  {
    icon: Building2,
    title: "Multi-Location Management",
    description: "Centralized control and management of all practice locations from a single platform."
  },
  {
    icon: Globe,
    title: "Unified Patient Experience",
    description: "Consistent patient experience across all locations with shared patient data."
  },
  {
    icon: Zap,
    title: "Real-Time Synchronization",
    description: "Instant data synchronization across all locations for seamless operations."
  }
];

const detailedFeatures = {
  "Centralized Management": [
    "Single dashboard for all locations",
    "Unified scheduling system",
    "Centralized billing and claims",
    "Standardized protocols",
    "Performance monitoring",
    "Resource allocation"
  ],
  "Patient Management": [
    "Shared patient records",
    "Cross-location appointments",
    "Unified patient portal",
    "Consistent care delivery",
    "Patient communication tools",
    "Referral management"
  ],
  "Operational Efficiency": [
    "Standardized workflows",
    "Staff management across locations",
    "Inventory management",
    "Financial reporting",
    "Compliance monitoring",
    "Quality assurance"
  ],
  "Analytics & Reporting": [
    "Multi-location performance metrics",
    "Comparative analysis",
    "Revenue optimization",
    "Patient flow analysis",
    "Resource utilization",
    "Growth planning"
  ]
};

const pricingPlans = [
  {
    name: "Starter",
    price: "$399",
    period: "/month",
    description: "For 2-3 locations",
    features: [
      "Up to 3 locations",
      "Basic centralized management",
      "Standard reporting",
      "Email support",
      "Basic integrations"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "For 4-10 locations",
    features: [
      "Up to 10 locations",
      "Advanced management tools",
      "Custom workflows",
      "Priority support",
      "Advanced analytics",
      "API integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,599",
    period: "/month",
    description: "For 10+ locations",
    features: [
      "Unlimited locations",
      "Full enterprise suite",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom solutions",
      "Advanced reporting"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Dr. Jennifer Martinez",
    role: "Multi-Location Practice Owner",
    content: "PatientClick's multi-location solution transformed how we manage our 8 locations. Everything is now centralized and efficient.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    role: "Practice Administrator",
    content: "The unified patient experience across all our locations has significantly improved patient satisfaction and retention.",
    rating: 5
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    content: "Real-time synchronization between locations has eliminated data silos and improved our care coordination dramatically.",
    rating: 5
  }
];

const stats = [
  { label: "Locations Managed", value: "200+", icon: Building2 },
  { label: "Data Sync Speed", value: "<5s", icon: Zap },
  { label: "Efficiency Gain", value: "40%", icon: TrendingUp },
  { label: "Client Satisfaction", value: "97%", icon: Star }
];

export default function MultiLocation() {
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
              <Building2 className="w-4 h-4 mr-2" />
              Multi-Location Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6">
              Solutions for MultiLocation Practice
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Streamline operations across all your practice locations with centralized management, 
              unified patient experience, and real-time data synchronization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                variant="cta" 
                size="xl"
              >
                Get Started
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
                Comprehensive Multi-Location Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our multi-location practice solutions provide centralized management, 
                unified patient experience, and seamless operations across all locations.
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
            <Tabs defaultValue="Centralized Management" className="w-full">
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
                How Multi-Location Solutions Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our multi-location platform seamlessly connects all your practice locations for optimal efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Central Hub</h3>
                <p className="text-muted-foreground">All locations connect to a centralized management hub for unified control.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Data Sync</h3>
                <p className="text-muted-foreground">Real-time synchronization ensures all locations have access to current data.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Unified Experience</h3>
                <p className="text-muted-foreground">Patients and staff enjoy consistent experience across all locations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Analytics & Growth</h3>
                <p className="text-muted-foreground">Comprehensive analytics help optimize operations and plan for growth.</p>
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
                Choose the plan that best fits your multi-location practice needs and scale.
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
                Trusted by Multi-Location Practices
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our clients say about our multi-location practice solutions.
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
              Ready to Unify Your Multi-Location Practice?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Start streamlining operations across all your practice locations with our comprehensive multi-location solutions.
            </p>
            <Button 
              onClick={() => setIsDemoModalOpen(true)}
              variant="cta" 
              size="xl"
            >
              Get Started
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