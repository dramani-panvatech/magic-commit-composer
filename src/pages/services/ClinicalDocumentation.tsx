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
  FileText, 
  PenTool, 
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
  Settings,
  Repeat,
  BookOpen,
  Edit3
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Reduce documentation time by up to 50%",
  "Improve coding accuracy and compliance",
  "Streamline clinical workflows",
  "Enhance patient care quality",
  "Ensure regulatory compliance",
  "24/7 documentation support"
];

const features = [
  {
    icon: FileText,
    title: "Smart Templates",
    description: "AI-powered clinical templates that adapt to your specialty and documentation needs."
  },
  {
    icon: PenTool,
    title: "Voice-to-Text",
    description: "Advanced speech recognition for accurate and fast clinical documentation."
  },
  {
    icon: Zap,
    title: "Auto-Completion",
    description: "Intelligent auto-completion and suggestion features to speed up documentation."
  }
];

const detailedFeatures = {
  "Documentation Templates": [
    "Specialty-specific templates",
    "Customizable note formats",
    "Smart field population",
    "Template library management",
    "Version control",
    "Multi-language support"
  ],
  "Voice Recognition": [
    "Medical speech recognition",
    "Specialty-specific vocabulary",
    "Real-time transcription",
    "Accuracy optimization",
    "Noise cancellation",
    "Mobile dictation support"
  ],
  "Clinical Decision Support": [
    "ICD-10 code suggestions",
    "CPT code recommendations",
    "Clinical guidelines integration",
    "Drug interaction alerts",
    "Quality measure tracking",
    "Compliance monitoring"
  ],
  "Workflow Optimization": [
    "Documentation timeline tracking",
    "Task prioritization",
    "Collaborative editing",
    "Review and approval workflows",
    "Integration with EHR systems",
    "Mobile documentation access"
  ]
};

const pricingPlans = [
  {
    name: "Basic",
    price: "$199",
    period: "/month",
    description: "For small practices",
    features: [
      "Up to 1,000 documents/month",
      "Basic templates",
      "Standard voice recognition",
      "Email support",
      "Basic reporting"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    description: "For growing practices",
    features: [
      "Up to 5,000 documents/month",
      "Advanced templates",
      "Premium voice recognition",
      "Clinical decision support",
      "Priority support",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$799",
    period: "/month",
    description: "For large healthcare systems",
    features: [
      "Unlimited documents",
      "Full documentation suite",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom workflows",
      "Advanced analytics"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Dr. Maria Garcia",
    role: "Internal Medicine Physician",
    content: "PatientClick's clinical documentation support reduced my charting time by 45%. The voice recognition is incredibly accurate.",
    rating: 5
  },
  {
    name: "Dr. David Kim",
    role: "Cardiologist",
    content: "The specialty-specific templates and clinical decision support have improved our coding accuracy significantly.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Practice Manager",
    content: "Our providers are much more efficient with documentation. The workflow optimization features are excellent.",
    rating: 5
  }
];

const stats = [
  { label: "Documents Processed", value: "2M+", icon: FileText },
  { label: "Time Saved", value: "50%", icon: Clock },
  { label: "Accuracy Rate", value: "99.2%", icon: CheckCircle },
  { label: "Provider Satisfaction", value: "94%", icon: Star }
];

export default function ClinicalDocumentation() {
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
              <FileText className="w-4 h-4 mr-2" />
              Clinical Documentation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6">
              Clinical Documentation Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Streamline your clinical documentation with intelligent templates, voice recognition, 
              and automated workflows that save time and improve accuracy.
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
                Advanced Documentation Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our clinical documentation support platform combines AI-powered templates with 
                advanced voice recognition to streamline your documentation process.
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
            <Tabs defaultValue="Documentation Templates" className="w-full">
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
                How Clinical Documentation Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our intelligent documentation system streamlines your clinical workflow in four simple steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Choose Template</h3>
                <p className="text-muted-foreground">Select from specialty-specific templates or create custom ones for your practice.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Voice Dictation</h3>
                <p className="text-muted-foreground">Use advanced voice recognition to dictate clinical notes with high accuracy.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Auto-Completion</h3>
                <p className="text-muted-foreground">AI suggests codes, diagnoses, and completes documentation automatically.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Review & Submit</h3>
                <p className="text-muted-foreground">Review completed documentation and submit to your EHR system seamlessly.</p>
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
                Choose the plan that best fits your documentation needs and practice size.
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
                See what our clients say about our clinical documentation support services.
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
              Ready to Streamline Your Documentation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Start saving time and improving accuracy with our clinical documentation support platform.
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