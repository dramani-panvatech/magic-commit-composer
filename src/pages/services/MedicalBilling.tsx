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
import { 
  CheckCircle, 
  DollarSign, 
  FileText, 
  Shield, 
  Zap, 
  Users, 
  Play, 
  Star,
  Clock,
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
  Smartphone
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Reduce claim denials by up to 85%",
  "Accelerate payment processing by 40%",
  "Improve revenue cycle efficiency",
  "Ensure compliance with all regulations",
  "Provide transparent reporting",
  "24/7 support and monitoring"
];

const features = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with advanced encryption and secure cloud infrastructure."
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Automated claim submission and processing to reduce payment delays."
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Maximize reimbursements with intelligent coding and billing strategies."
  }
];

const detailedFeatures = {
  "Claim Processing": [
    "Automated claim submission",
    "Real-time claim tracking",
    "Denial management",
    "Appeal processing",
    "Electronic claim validation",
    "Batch processing capabilities"
  ],
  "Coding & Compliance": [
    "ICD-10 and CPT coding",
    "Compliance monitoring",
    "Audit support",
    "Documentation review",
    "Regulatory updates",
    "Training and education"
  ],
  "Payment Processing": [
    "Electronic payment posting",
    "Payment reconciliation",
    "ERA/835 processing",
    "Patient payment processing",
    "Credit card integration",
    "Payment plan management"
  ],
  "Reporting & Analytics": [
    "Revenue cycle dashboards",
    "Claim status reports",
    "Denial analysis",
    "Performance metrics",
    "Financial reporting",
    "Custom report generation"
  ]
};

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small practices",
    features: [
      "Up to 500 claims/month",
      "Basic claim processing",
      "Standard reporting",
      "Email support",
      "HIPAA compliance"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Ideal for growing practices",
    features: [
      "Up to 2,000 claims/month",
      "Advanced claim processing",
      "Denial management",
      "Priority support",
      "Custom reporting",
      "Revenue optimization"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,199",
    period: "/month",
    description: "For large healthcare systems",
    features: [
      "Unlimited claims",
      "Full-service billing",
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
    name: "Dr. Sarah Johnson",
    role: "Family Practice Physician",
    content: "PatientClick's medical billing service reduced our claim denials by 80% and improved our cash flow significantly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Practice Administrator",
    content: "The automated billing process saves us hours every week. The reporting is comprehensive and easy to understand.",
    rating: 5
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatrician",
    content: "Their compliance expertise gives us peace of mind. We've never had an audit issue since switching to PatientClick.",
    rating: 5
  }
];

const stats = [
  { label: "Claims Processed", value: "2M+", icon: FileText },
  { label: "Denial Rate", value: "<5%", icon: CheckCircle },
  { label: "Payment Speed", value: "12 days", icon: Clock },
  { label: "Client Satisfaction", value: "98%", icon: Star }
];

export default function MedicalBilling() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

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
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 sm:mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Revenue Cycle Management
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust-blue mb-4 sm:mb-6">
              Medical Billing Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
              Streamline your revenue cycle with our comprehensive medical billing services. 
              Reduce denials, accelerate payments, and maximize your practice's revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                variant="cta" 
                size="xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => setIsPricingModalOpen(true)}
                variant="outline" 
                size="xl"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Pricing
              </Button>
            </div>
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

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                Comprehensive Billing Solutions
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Our medical billing services cover every aspect of your revenue cycle, 
                from claim submission to payment posting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center shadow-card hover:shadow-trust transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-trust-blue">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Features Tabs */}
            <Tabs defaultValue="Claim Processing" className="w-full">
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

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that best fits your practice size and billing needs.
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
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of healthcare providers who trust PatientClick for their medical billing needs.
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
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Start maximizing your practice's revenue with our proven medical billing services.
            </p>
            <Button 
              onClick={() => setIsDemoModalOpen(true)}
              variant="cta" 
              size="xl"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <PricingModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} />
    </div>
  );
} 