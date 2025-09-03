import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import PricingModal from "@/components/PricingModal";
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
  BarChart3, 
  Calendar, 
  DollarSign, 
  Users, 
  FileText,
  Star,
  Zap,
  UserCheck,
  Shield,
  Database,
  Lock,
  Check,
  X,
  ArrowRight,
  Award,
  MessageSquare,
  Smartphone,
  Clock,
  TrendingUp,
  Eye,
  Download,
  Upload,
  Settings,
  CreditCard,
  Receipt,
  PieChart,
  Target,
  AlertTriangle,
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
    icon: BarChart3,
    title: "Financial Analytics",
    description: "Comprehensive financial reporting and analytics to optimize practice revenue and profitability."
  },
  {
    icon: Calendar,
    title: "Staff Scheduling",
    description: "Intelligent staff scheduling with conflict resolution and automated shift management."
  },
  {
    icon: DollarSign,
    title: "Billing & Claims",
    description: "Automated billing, claims processing, and payment tracking to maximize revenue collection."
  }
];

const benefits = [
  "Increase practice revenue by 25%",
  "Reduce administrative overhead by 40%",
  "Improve staff productivity",
  "Streamline billing processes",
  "Enhance patient satisfaction",
  "Optimize resource utilization"
];

const detailedFeatures = {
  "Financial Management": [
    "Real-time revenue tracking and analytics",
    "Automated billing and claims processing",
    "Payment processing and reconciliation",
    "Insurance verification and eligibility",
    "Cost analysis and expense tracking",
    "Financial reporting and forecasting"
  ],
  "Staff Management": [
    "Employee scheduling and time tracking",
    "Performance metrics and evaluations",
    "Payroll integration and management",
    "Staff communication tools",
    "Training and certification tracking",
    "Workload distribution optimization"
  ],
  "Patient Management": [
    "Patient registration and demographics",
    "Appointment scheduling and management",
    "Insurance verification and eligibility",
    "Patient communication tools",
    "Document management and storage",
    "Patient satisfaction surveys"
  ],
  "Operations & Compliance": [
    "Regulatory compliance monitoring",
    "Quality assurance and reporting",
    "Inventory and supply management",
    "Facility and equipment tracking",
    "Risk management and incident reporting",
    "Audit trail and documentation"
  ]
};

const testimonials = [
  {
    name: "Dr. James Wilson",
    role: "Practice Owner",
    practice: "Wilson Medical Group",
    rating: 5,
    text: "PatientClick Practice Management has transformed our operations. We've increased revenue by 30% while reducing administrative costs significantly."
  },
  {
    name: "Dr. Maria Garcia",
    role: "Family Medicine",
    practice: "Garcia Family Care",
    rating: 5,
    text: "The billing and claims automation has been a game-changer. Our claim acceptance rate is now 98% and payments are processed much faster."
  },
  {
    name: "Dr. David Chen",
    role: "Internal Medicine",
    practice: "Chen Healthcare Associates",
    rating: 5,
    text: "Staff scheduling and management tools have made our practice much more efficient. The analytics help us make data-driven decisions."
  }
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Implementation typically takes 4-6 weeks depending on practice size and complexity. Our team provides comprehensive training and support throughout the process."
  },
  {
    question: "Can it integrate with our existing systems?",
    answer: "Yes, PatientClick Practice Management integrates with most major EHR systems, accounting software, and third-party applications through our robust API."
  },
  {
    question: "What about data migration from our current system?",
    answer: "We provide comprehensive data migration services to transfer patient records, financial data, and operational information from your current system."
  },
  {
    question: "Is training included for our staff?",
    answer: "Yes, all plans include comprehensive training for your entire team, including ongoing support and access to our knowledge base and video tutorials."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support, dedicated account managers, and regular check-ins to ensure your practice gets the most value from our platform."
  }
];

const managementStats = [
  { label: "Revenue Increase", value: 25, unit: "%", color: "text-green-600" },
  { label: "Admin Cost Reduction", value: 40, unit: "%", color: "text-blue-600" },
  { label: "Claim Acceptance Rate", value: 98, unit: "%", color: "text-purple-600" },
  { label: "Staff Productivity", value: 35, unit: "%", color: "text-orange-600" }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$399",
    period: "per month",
    description: "Perfect for small practices",
    features: [
      "Basic financial reporting",
      "Staff scheduling",
      "Patient management",
      "Basic billing tools",
      "Email support",
      "Standard templates"
    ],
    notIncluded: [
      "Advanced analytics",
      "Custom integrations",
      "Priority support",
      "Advanced compliance tools"
    ]
  },
  {
    name: "Professional",
    price: "$799",
    period: "per month",
    description: "Most popular for growing practices",
    features: [
      "All Starter features",
      "Advanced financial analytics",
      "Automated billing & claims",
      "Staff performance tracking",
      "Custom integrations",
      "Priority support",
      "Compliance monitoring",
      "API access"
    ],
    notIncluded: [
      "Enterprise features"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large healthcare systems",
    features: [
      "All Professional features",
      "Multi-location management",
      "Custom development",
      "Dedicated support team",
      "Advanced compliance tools",
      "White-label solutions",
      "Training programs",
      "On-premise option"
    ],
    notIncluded: []
  }
];

export default function PracticeManagement() {
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
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="inline-flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Practice Management
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue leading-tight">
                  Streamline Your Practice
                  <span className="block text-primary">Operations</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Comprehensive practice management solution that optimizes operations, 
                  increases revenue, and reduces administrative burden.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)}
                    size="xl" 
                    className="bg-primary hover:bg-primary-hover hover-glow"
                  >
                    See Practice Demo
                  </Button>
                  <Button variant="outline" size="xl">
                    View Features
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {managementStats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}{stat.unit}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Practice Management Interface Carousel */}
              <div className="relative w-full max-w-sm mx-auto lg:max-w-md xl:max-w-lg">
                <div className="bg-white rounded-2xl shadow-trust p-3 sm:p-4 lg:p-6 animate-slide-up">
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
                    <CarouselContent>
                      {/* Practice Dashboard */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Practice Dashboard</h3>
                            </div>
                            <Badge className="bg-green-100 text-green-700 text-xs">Live Data</Badge>
                          </div>

                          {/* Revenue & Patients */}
                          <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
                            <div className="bg-white rounded-lg p-2 lg:p-3 text-center shadow-sm border">
                              <DollarSign className="w-4 h-4 lg:w-6 lg:h-6 text-blue-600 mx-auto mb-1" />
                              <div className="text-xs lg:text-sm font-medium text-gray-600">Revenue</div>
                              <div className="text-sm lg:text-lg font-bold text-blue-600">$45,230</div>
                              <div className="text-xs text-green-600">+12% this month</div>
                            </div>
                            <div className="bg-white rounded-lg p-2 lg:p-3 text-center shadow-sm border">
                              <Users className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mx-auto mb-1" />
                              <div className="text-xs lg:text-sm font-medium text-gray-600">Patients</div>
                              <div className="text-sm lg:text-lg font-bold text-green-600">127</div>
                              <div className="text-xs text-green-600">+8 new today</div>
                            </div>
                          </div>

                          {/* Today's Schedule */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border mb-3 lg:mb-4">
                            <div className="text-xs lg:text-sm text-gray-600 mb-2">Today's Schedule</div>
                            <div className="font-medium text-gray-800 text-sm lg:text-base mb-2">24 appointments</div>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Completed: 12</span>
                              <span>Remaining: 12</span>
                            </div>
                          </div>

                          {/* Quick Stats */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border">
                            <h4 className="font-semibold text-gray-800 mb-2 lg:mb-3 text-sm lg:text-base">Performance</h4>
                            <div className="space-y-2 text-xs lg:text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Staff Utilization</span>
                                <span className="font-medium text-gray-800">87%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Patient Satisfaction</span>
                                <span className="font-medium text-gray-800">4.8/5</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Claims Processing</span>
                                <span className="font-medium text-gray-800">98%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Financial Analytics Screen */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-green-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Financial Analytics</h3>
                            </div>
                            <Badge className="bg-green-100 text-green-700 text-xs">Real-time</Badge>
                          </div>

                          {/* Revenue Overview */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border mb-3 lg:mb-4">
                            <div className="text-xs lg:text-sm text-gray-600 mb-2">Monthly Revenue</div>
                            <div className="text-lg lg:text-2xl font-bold text-green-600 mb-2">$127,450</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-green-600">+15% vs last month</span>
                              <span className="text-gray-500">Target: $120,000</span>
                            </div>
                          </div>

                          {/* Revenue Breakdown */}
                          <div className="space-y-2 lg:space-y-3 mb-3 lg:mb-4">
                            <div className="bg-white rounded-lg p-2 lg:p-3 shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">Insurance Claims</div>
                                  <div className="text-xs text-gray-500">85% of revenue</div>
                                </div>
                                <div className="text-green-600 font-medium text-sm">$108,332</div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-2 lg:p-3 shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">Patient Payments</div>
                                  <div className="text-xs text-gray-500">15% of revenue</div>
                                </div>
                                <div className="text-blue-600 font-medium text-sm">$19,118</div>
                              </div>
                            </div>
                          </div>

                          {/* Outstanding Claims */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border">
                            <h4 className="font-semibold text-gray-800 mb-2 lg:mb-3 text-sm lg:text-base">Outstanding Claims</h4>
                            <div className="space-y-2 text-xs lg:text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">30-60 days</span>
                                <span className="font-medium text-orange-600">$12,450</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">60-90 days</span>
                                <span className="font-medium text-red-600">$5,230</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">90+ days</span>
                                <span className="font-medium text-red-600">$2,100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Staff Management Screen */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Staff Management</h3>
                            </div>
                            <Badge className="bg-purple-100 text-purple-700 text-xs">Active</Badge>
                          </div>

                          {/* Staff Overview */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border mb-3 lg:mb-4">
                            <div className="text-xs lg:text-sm text-gray-600 mb-2">Today's Schedule</div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">Dr. Johnson</div>
                                  <div className="text-xs text-gray-500">Family Medicine</div>
                                </div>
                                <div className="text-green-600 text-xs">8:00 AM - 5:00 PM</div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">Dr. Chen</div>
                                  <div className="text-xs text-gray-500">Internal Medicine</div>
                                </div>
                                <div className="text-green-600 text-xs">9:00 AM - 6:00 PM</div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">Nurse Sarah</div>
                                  <div className="text-xs text-gray-500">Registered Nurse</div>
                                </div>
                                <div className="text-green-600 text-xs">7:30 AM - 4:30 PM</div>
                              </div>
                            </div>
                          </div>

                          {/* Performance Metrics */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border mb-3 lg:mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2 lg:mb-3 text-sm lg:text-base">Performance</h4>
                            <div className="space-y-2 text-xs lg:text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Average Patient Wait</span>
                                <span className="font-medium text-gray-800">12 min</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Staff Utilization</span>
                                <span className="font-medium text-gray-800">92%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Patient Satisfaction</span>
                                <span className="font-medium text-gray-800">4.9/5</span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="grid grid-cols-2 gap-2 lg:gap-3">
                            <button className="bg-purple-600 text-white rounded-lg p-2 lg:p-3 text-xs lg:text-sm font-medium hover:bg-purple-700 transition-colors">
                              Schedule Staff
                            </button>
                            <button className="bg-white text-purple-600 rounded-lg p-2 lg:p-3 text-xs lg:text-sm font-medium border border-purple-200 hover:bg-purple-50 transition-colors">
                              View Reports
                            </button>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-1 lg:left-2 h-8 w-8 lg:h-10 lg:w-10" />
                    <CarouselNext className="right-1 lg:right-2 h-8 w-8 lg:h-10 lg:w-10" />
                  </Carousel>
                  
                  {/* Carousel Indicators */}
                  <div className="flex justify-center mt-3 lg:mt-4 space-x-1.5 lg:space-x-2">
                    {[0, 1, 2].map((index) => (
                      <div
                        key={index}
                        className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-colors duration-300 ${
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

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Optimize Your Practice
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive tools to streamline operations, increase revenue, 
                and improve patient satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-trust-blue mb-6">Key Benefits:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-healthcare-green flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-healthcare-light-blue rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-trust-blue mb-4">Compliance & Security</h3>
                <p className="text-muted-foreground mb-6">
                  Built-in compliance monitoring and enterprise-grade security 
                  to protect your practice and patient data.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>HIPAA compliance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Automated audit trails</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Data encryption and backup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Comprehensive Management Tools
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to run an efficient, profitable healthcare practice.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

        {/* Detailed Features with Tabs */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Complete Practice Management Suite
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive set of tools designed to optimize every aspect of your practice.
              </p>
            </div>

            <Tabs defaultValue="Financial Management" className="w-full">
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

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your practice size and management needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-trust-blue">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-healthcare-green flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary-hover' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
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
                See what our customers have to say about their experience with PatientClick Practice Management.
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
                Get answers to common questions about PatientClick Practice Management.
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
            <BarChart3 className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Optimize Your Practice Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of healthcare providers who have transformed their 
              practice operations with PatientClick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                variant="secondary" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule Practice Demo
              </Button>
              <Button 
                onClick={() => setIsPricingModalOpen(true)}
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <PricingModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} />
    </div>
  );
} 