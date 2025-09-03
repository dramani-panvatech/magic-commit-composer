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
  DollarSign, 
  TrendingUp, 
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
  Globe,
  PieChart,
  Target
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Increase revenue by up to 25%",
  "Reduce claim denials by 85%",
  "Accelerate payment processing",
  "Improve cash flow management",
  "Enhance billing accuracy",
  "Comprehensive financial reporting"
];

const features = [
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Maximize your practice's revenue through intelligent billing and claims management."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Comprehensive analytics and reporting to track and improve financial performance."
  },
  {
    icon: Target,
    title: "Denial Management",
    description: "Proactive denial prevention and efficient appeal processing to minimize revenue loss."
  }
];

const detailedFeatures = {
  "Claims Processing": [
    "Automated claim submission",
    "Real-time claim tracking",
    "Error detection and correction",
    "Batch processing capabilities",
    "Electronic claim validation",
    "Status monitoring"
  ],
  "Payment Processing": [
    "Electronic payment posting",
    "Payment reconciliation",
    "ERA/835 processing",
    "Patient payment processing",
    "Credit card integration",
    "Payment plan management"
  ],
  "Denial Management": [
    "Denial prevention strategies",
    "Automated appeal processing",
    "Root cause analysis",
    "Trend identification",
    "Staff training support",
    "Performance tracking"
  ],
  "Financial Analytics": [
    "Revenue cycle dashboards",
    "Key performance indicators",
    "Trend analysis",
    "Benchmarking reports",
    "Cash flow forecasting",
    "Profitability analysis"
  ]
};

const pricingPlans = [
  {
    name: "Basic",
    price: "$399",
    period: "/month",
    description: "For small practices",
    features: [
      "Up to 1,000 claims/month",
      "Basic claims processing",
      "Standard reporting",
      "Email support",
      "Basic denial management"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "For growing practices",
    features: [
      "Up to 5,000 claims/month",
      "Advanced claims processing",
      "Comprehensive analytics",
      "Priority support",
      "Advanced denial management",
      "Custom reporting"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,599",
    period: "/month",
    description: "For large healthcare systems",
    features: [
      "Unlimited claims",
      "Full revenue cycle suite",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom solutions",
      "Advanced analytics"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Dr. Patricia Williams",
    role: "Practice Owner",
    content: "PatientClick's revenue cycle management increased our revenue by 28% in the first year. The analytics are invaluable.",
    rating: 5
  },
  {
    name: "Robert Davis",
    role: "Practice Administrator",
    content: "The denial management system has reduced our denials by 90%. Our cash flow has improved dramatically.",
    rating: 5
  },
  {
    name: "Dr. Lisa Anderson",
    role: "Medical Director",
    content: "The comprehensive reporting helps us make data-driven decisions. Our financial performance has never been better.",
    rating: 5
  }
];

const stats = [
  { label: "Revenue Increase", value: "25%", icon: TrendingUp },
  { label: "Denial Reduction", value: "85%", icon: CheckCircle },
  { label: "Payment Speed", value: "12 days", icon: Clock },
  { label: "Client Satisfaction", value: "96%", icon: Star }
];

export default function RevenueCycle() {
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
              <DollarSign className="w-4 h-4 mr-2" />
              Financial Performance
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6">
              Revenue-Cycle Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Optimize your practice's financial performance with comprehensive revenue cycle management 
              that maximizes revenue, reduces denials, and improves cash flow.
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
                Comprehensive Revenue Cycle Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our revenue cycle management services provide end-to-end financial optimization 
                from claims submission to payment collection and analysis.
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
            <Tabs defaultValue="Claims Processing" className="w-full">
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
                How Revenue Cycle Management Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach optimizes every step of your revenue cycle for maximum financial performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Claims Submission</h3>
                <p className="text-muted-foreground">Automated, error-free claims submission with real-time validation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Payment Processing</h3>
                <p className="text-muted-foreground">Efficient payment posting and reconciliation for faster cash flow.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Denial Management</h3>
                <p className="text-muted-foreground">Proactive denial prevention and efficient appeal processing.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Analytics & Optimization</h3>
                <p className="text-muted-foreground">Comprehensive analytics to identify opportunities for improvement.</p>
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
                Choose the plan that best fits your revenue cycle management needs and practice size.
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
                Trusted by Healthcare Practices
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our clients say about our revenue cycle management services.
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
              Start maximizing your practice's revenue with our comprehensive revenue cycle management services.
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