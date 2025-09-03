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
  Settings, 
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
  Server
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Seamless system integration",
  "Real-time data synchronization",
  "Reduced implementation time",
  "Improved workflow efficiency",
  "Enhanced data security",
  "24/7 technical support"
];

const features = [
  {
    icon: Settings,
    title: "System Integration",
    description: "Connect all your healthcare systems seamlessly with our advanced integration platform."
  },
  {
    icon: Network,
    title: "API Development",
    description: "Custom API development to connect your existing systems and third-party applications."
  },
  {
    icon: Zap,
    title: "Data Synchronization",
    description: "Real-time data synchronization across all connected systems and platforms."
  }
];

const detailedFeatures = {
  "System Integration": [
    "EHR system integration",
    "Practice management integration",
    "Billing system connectivity",
    "Lab system interfaces",
    "Imaging system integration",
    "Pharmacy system connections"
  ],
  "API Development": [
    "Custom API development",
    "RESTful API design",
    "HL7 FHIR compliance",
    "Real-time data exchange",
    "Secure authentication",
    "API documentation"
  ],
  "Data Management": [
    "Data migration services",
    "Data validation and cleaning",
    "Backup and recovery",
    "Data archiving",
    "Compliance monitoring",
    "Performance optimization"
  ],
  "Technical Support": [
    "24/7 monitoring",
    "Proactive maintenance",
    "Issue resolution",
    "System updates",
    "Performance tuning",
    "Security updates"
  ]
};

const pricingPlans = [
  {
    name: "Basic",
    price: "$299",
    period: "/month",
    description: "For small practices",
    features: [
      "Up to 3 system integrations",
      "Basic API access",
      "Standard support",
      "Email support",
      "Basic monitoring"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "For growing practices",
    features: [
      "Up to 10 system integrations",
      "Custom API development",
      "Advanced monitoring",
      "Priority support",
      "Performance optimization",
      "Security enhancements"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1,199",
    period: "/month",
    description: "For large healthcare systems",
    features: [
      "Unlimited integrations",
      "Full custom development",
      "Dedicated support team",
      "24/7 phone support",
      "Custom solutions",
      "Advanced analytics"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Dr. Michael Brown",
    role: "Chief Medical Officer",
    content: "PatientClick's technology interface services seamlessly connected all our systems. The implementation was smooth and efficient.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    role: "IT Director",
    content: "The API development team was excellent. They created custom integrations that perfectly fit our workflow needs.",
    rating: 5
  },
  {
    name: "Dr. Robert Wilson",
    role: "Practice Owner",
    content: "The data synchronization is flawless. All our systems now work together seamlessly, improving our efficiency significantly.",
    rating: 5
  }
];

const stats = [
  { label: "Systems Integrated", value: "500+", icon: Settings },
  { label: "API Calls/Day", value: "10M+", icon: Network },
  { label: "Uptime", value: "99.9%", icon: Server },
  { label: "Client Satisfaction", value: "96%", icon: Star }
];

export default function TechnologyInterface() {
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
              <Settings className="w-4 h-4 mr-2" />
              System Integration
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6">
              Technology Interface Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect all your healthcare systems seamlessly with our advanced integration platform, 
              custom API development, and real-time data synchronization services.
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
                Advanced Integration Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our technology interface services provide comprehensive system integration, 
                custom API development, and seamless data synchronization.
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
            <Tabs defaultValue="System Integration" className="w-full">
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
                How Technology Interface Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our integration process is designed to be smooth, efficient, and minimally disruptive to your operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Assessment</h3>
                <p className="text-muted-foreground">We analyze your current systems and identify integration requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Development</h3>
                <p className="text-muted-foreground">Our team develops custom APIs and integration solutions for your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Implementation</h3>
                <p className="text-muted-foreground">We implement the integration with minimal disruption to your operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">Support</h3>
                <p className="text-muted-foreground">Ongoing monitoring, maintenance, and support ensure optimal performance.</p>
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
                Choose the plan that best fits your integration needs and system requirements.
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
                Trusted by Healthcare Organizations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our clients say about our technology interface services.
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
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Start integrating your healthcare systems seamlessly with our technology interface services.
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