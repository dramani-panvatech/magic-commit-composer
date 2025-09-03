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
  ChevronRight
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Fast, intuitive charting interface",
  "Flexible, customizable templates", 
  "Clinical decision support tools",
  "Real-time collaboration features",
  "Mobile accessibility anywhere",
  "Seamless integration capabilities"
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Reduce documentation time by up to 40% with our intuitive interface and smart templates."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with advanced encryption and secure cloud infrastructure."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access patient records anywhere with our fully responsive mobile application."
  }
];

const detailedFeatures = {
  "Charting & Documentation": [
    "Smart templates with auto-completion",
    "Voice-to-text dictation",
    "Drag-and-drop interface",
    "Customizable note templates",
    "Real-time collaboration",
    "Auto-save functionality"
  ],
  "Patient Management": [
    "Comprehensive patient profiles",
    "Appointment scheduling",
    "Insurance verification",
    "Document management",
    "Patient portal integration",
    "Referral management"
  ],
  "Clinical Tools": [
    "Clinical decision support",
    "Drug interaction checking",
    "Lab result integration",
    "Imaging management",
    "E-prescribing",
    "Quality measures tracking"
  ],
  "Analytics & Reporting": [
    "Practice performance dashboards",
    "Custom report builder",
    "Quality metrics tracking",
    "Financial reporting",
    "Population health analytics",
    "Regulatory compliance reports"
  ]
};

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "per month",
    description: "Perfect for small practices",
    features: [
      "Up to 5 providers",
      "Basic charting tools",
      "Patient portal",
      "Email support",
      "Standard templates"
    ],
    notIncluded: [
      "Advanced analytics",
      "Custom integrations",
      "Priority support"
    ]
  },
  {
    name: "Professional",
    price: "$599",
    period: "per month",
    description: "Most popular for growing practices",
    features: [
      "Up to 25 providers",
      "Advanced charting tools",
      "Clinical decision support",
      "Analytics dashboard",
      "Priority support",
      "Custom templates",
      "API access"
    ],
    notIncluded: [
      "Enterprise integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large healthcare systems",
    features: [
      "Unlimited providers",
      "All features included",
      "Custom integrations",
      "Dedicated support",
      "On-premise option",
      "Custom development",
      "Training programs"
    ],
    notIncluded: []
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Family Medicine",
    practice: "Johnson Medical Group",
    rating: 5,
    text: "PatientClick EHR has transformed our practice. The intuitive interface reduced our documentation time by 35% and our staff loves how easy it is to use."
  },
  {
    name: "Dr. Michael Chen",
    role: "Internal Medicine",
    practice: "Chen Healthcare Associates",
    rating: 5,
    text: "The clinical decision support tools are exceptional. It's like having a second opinion right at your fingertips. Highly recommend!"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatrics",
    practice: "Sunshine Pediatrics",
    rating: 5,
    text: "Mobile access has been a game-changer. I can review patient charts and respond to urgent messages from anywhere. The security features give me peace of mind."
  }
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Implementation typically takes 2-4 weeks depending on practice size. Our team provides comprehensive training and support throughout the process."
  },
  {
    question: "Is training included?",
    answer: "Yes, all plans include comprehensive training for your team. We offer both in-person and virtual training sessions, plus ongoing support."
  },
  {
    question: "Can we import data from our current system?",
    answer: "Absolutely! We provide data migration services to import patient records, appointments, and other data from most major EHR systems."
  },
  {
    question: "What about HIPAA compliance?",
    answer: "PatientClick EHR is fully HIPAA compliant with enterprise-grade security, encryption, audit trails, and role-based access controls."
  },
  {
    question: "Do you offer mobile apps?",
    answer: "Yes, our mobile app is available for iOS and Android devices, providing full access to patient records and core functionality on the go."
  }
];

export default function EHR() {
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

    console.log('Starting auto-slide, current slide:', currentSlide);
    
    const interval = setInterval(() => {
      console.log('Auto-sliding to next slide');
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => {
      console.log('Clearing auto-slide interval');
      clearInterval(interval);
    };
  }, [api, isPaused, currentSlide]);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) return;

    console.log('Carousel API initialized');

    const onSelect = () => {
      const newSlide = api.selectedScrollSnap();
      console.log('Slide changed to:', newSlide);
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
                  <FileText className="w-4 h-4 mr-2" />
                  Electronic Health Records
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust-blue leading-tight">
                  Modern EHR That Actually
                  <span className="block text-primary">Works for You</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Experience the power of a truly intuitive EHR system designed by clinicians, 
                  for clinicians. Fast, flexible, and customizable to your practice needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)}
                    size="xl" 
                    className="bg-primary hover:bg-primary-hover hover-glow"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    See EHR Demo
                  </Button>
                  <Button variant="outline" size="xl">
                    View Features
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Practices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">40%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
              
              {/* EHR Interface Carousel */}
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
                      {/* Dashboard Screen */}
                      <CarouselItem className="pl-2 sm:pl-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-100 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">PatientClick EHR</h3>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                            </div>
                          </div>

                          {/* Patient Info Bar */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 mb-3 sm:mb-4 shadow-sm border">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 font-semibold text-xs sm:text-sm">JD</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="font-semibold text-gray-800 text-sm sm:text-base truncate">John Doe</div>
                                  <div className="text-xs sm:text-sm text-gray-500 truncate">DOB: 03/15/1985 • MRN: 123456</div>
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-xs sm:text-sm text-gray-500">Last Visit</div>
                                <div className="font-semibold text-gray-800 text-sm sm:text-base">Today</div>
                              </div>
                            </div>
                          </div>

                          {/* Vitals Grid */}
                          <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-3 mb-3 sm:mb-4">
                            <div className="bg-white rounded-lg p-1.5 sm:p-2 lg:p-3 text-center shadow-sm border">
                              <div className="text-xs text-gray-500 mb-1">BP</div>
                              <div className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">120/80</div>
                              <div className="text-xs text-green-600">Normal</div>
                            </div>
                            <div className="bg-white rounded-lg p-1.5 sm:p-2 lg:p-3 text-center shadow-sm border">
                              <div className="text-xs text-gray-500 mb-1">HR</div>
                              <div className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">72</div>
                              <div className="text-xs text-green-600">Normal</div>
                            </div>
                            <div className="bg-white rounded-lg p-1.5 sm:p-2 lg:p-3 text-center shadow-sm border">
                              <div className="text-xs text-gray-500 mb-1">Temp</div>
                              <div className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">98.6°F</div>
                              <div className="text-xs text-green-600">Normal</div>
                            </div>
                            <div className="bg-white rounded-lg p-1.5 sm:p-2 lg:p-3 text-center shadow-sm border">
                              <div className="text-xs text-gray-500 mb-1">O2</div>
                              <div className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">98%</div>
                              <div className="text-xs text-green-600">Normal</div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3 mb-3 sm:mb-4">
                            <button className="bg-blue-600 text-white rounded-lg p-1.5 sm:p-2 lg:p-3 text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                              New Note
                            </button>
                            <button className="bg-green-600 text-white rounded-lg p-1.5 sm:p-2 lg:p-3 text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors">
                              Order Labs
                            </button>
                          </div>

                          {/* Recent Activity */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm border">
                            <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Recent Activity</h4>
                            <div className="space-y-1 sm:space-y-2">
                              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 truncate">Lab results received</span>
                                <span className="text-gray-400 text-xs flex-shrink-0">2h ago</span>
                              </div>
                              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 truncate">Prescription sent</span>
                                <span className="text-gray-400 text-xs flex-shrink-0">1d ago</span>
                              </div>
                              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 truncate">Follow-up scheduled</span>
                                <span className="text-gray-400 text-xs flex-shrink-0">3d ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Patient Chart Screen */}
                      <CarouselItem className="pl-2 sm:pl-4">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-green-100 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Patient Chart</h3>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                            </div>
                          </div>

                          {/* Chart Navigation */}
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                            <button className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">History</button>
                            <button className="bg-white text-gray-600 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm border">Physical</button>
                            <button className="bg-white text-gray-600 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm border">Labs</button>
                            <button className="bg-white text-gray-600 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm border">Imaging</button>
                          </div>

                          {/* Medical History */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm border mb-3 sm:mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Medical History</h4>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600 truncate">Hypertension</span>
                                <span className="text-gray-400 flex-shrink-0">2018</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 truncate">Type 2 Diabetes</span>
                                <span className="text-gray-400 flex-shrink-0">2020</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 truncate">Appendectomy</span>
                                <span className="text-gray-400 flex-shrink-0">2015</span>
                              </div>
                            </div>
                          </div>

                          {/* Current Medications */}
                          <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm border">
                            <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Current Medications</h4>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                              <div className="flex justify-between items-center">
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium text-gray-800 truncate">Lisinopril 10mg</div>
                                  <div className="text-gray-500 truncate">Once daily</div>
                                </div>
                                <div className="text-green-600 text-xs flex-shrink-0">Active</div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium text-gray-800 truncate">Metformin 500mg</div>
                                  <div className="text-gray-500 truncate">Twice daily</div>
                                </div>
                                <div className="text-green-600 text-xs flex-shrink-0">Active</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Appointment Scheduling Screen */}
                      <CarouselItem className="pl-2 sm:pl-4">
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-100 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Schedule</h3>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                            </div>
                          </div>

                          {/* Date Navigation */}
                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <button className="text-purple-600">
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <div className="font-semibold text-gray-800 text-sm sm:text-base">Today, Dec 15</div>
                            <button className="text-purple-600">
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Time Slots */}
                          <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium text-gray-800 text-sm sm:text-base">9:00 AM</div>
                                  <div className="text-xs sm:text-sm text-gray-500 truncate">Sarah Johnson</div>
                                </div>
                                <Badge className="bg-blue-100 text-blue-800 text-xs flex-shrink-0">Check-up</Badge>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium text-gray-800 text-sm sm:text-base">10:30 AM</div>
                                  <div className="text-xs sm:text-sm text-gray-500 truncate">Michael Chen</div>
                                </div>
                                <Badge className="bg-green-100 text-green-800 text-xs flex-shrink-0">Follow-up</Badge>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-purple-200 bg-purple-50">
                              <div className="flex justify-between items-center">
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium text-gray-800 text-sm sm:text-base">2:00 PM</div>
                                  <div className="text-xs sm:text-sm text-gray-500 truncate">Available</div>
                                </div>
                                <Badge className="bg-purple-100 text-purple-800 text-xs flex-shrink-0">Open</Badge>
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3">
                            <button className="bg-purple-600 text-white rounded-lg p-1.5 sm:p-2 lg:p-3 text-xs sm:text-sm font-medium hover:bg-purple-700 transition-colors">
                              New Appointment
                            </button>
                            <button className="bg-white text-purple-600 rounded-lg p-1.5 sm:p-2 lg:p-3 text-xs sm:text-sm font-medium border border-purple-200 hover:bg-purple-50 transition-colors">
                              View Calendar
                            </button>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-1 sm:left-2 lg:left-4 h-8 w-8 sm:h-10 sm:w-10" />
                    <CarouselNext className="right-1 sm:right-2 lg:right-4 h-8 w-8 sm:h-10 sm:w-10" />
                  </Carousel>
                  
                  {/* Carousel Indicators */}
                  <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
                    {[0, 1, 2].map((index) => (
                      <div
                        key={index}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
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

        {/* Benefits Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                Fast, Flexible, Customizable
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Our EHR system is built around your workflow, not the other way around.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {features.map((feature, index) => (
                <Card key={feature.title} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
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

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-trust-blue mb-4 sm:mb-6">Key Benefits:</h3>
                <div className="space-y-2 sm:space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-green flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-healthcare-light-blue rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-trust-blue mb-3 sm:mb-4">HIPAA Compliance Included</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Rest assured knowing your patient data is protected with enterprise-grade 
                  security measures and full HIPAA compliance built in from day one.
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span>Advanced encryption at rest and in transit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span>Comprehensive audit trails</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span>Role-based access controls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features with Tabs */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                Comprehensive EHR Features
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to run your practice efficiently and provide excellent patient care.
              </p>
            </div>

            <Tabs defaultValue="Charting & Documentation" className="w-full">
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
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your practice size and needs. No hidden fees, no surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white text-xs sm:text-sm">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl sm:text-2xl text-trust-blue">{plan.name}</CardTitle>
                    <div className="mt-3 sm:mt-4">
                      <span className="text-3xl sm:text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground text-sm sm:text-base">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2 sm:space-x-3">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-healthcare-green flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2 sm:space-x-3">
                          <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className={`w-full mt-4 sm:mt-6 ${plan.popular ? 'bg-primary hover:bg-primary-hover' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
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
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                Trusted by Healthcare Providers
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our customers have to say about their experience with PatientClick EHR.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-3 sm:mb-4 italic text-sm sm:text-base">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-trust-blue text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.practice}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-blue mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Get answers to common questions about PatientClick EHR.
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
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Experience Modern EHR?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
              Join thousands of healthcare providers who have transformed their 
              practice with PatientClick EHR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                variant="secondary" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule Your Demo Today
              </Button>
              <Button 
                onClick={() => setIsPricingModalOpen(true)}
                variant="outline" 
                size="xl"
                className="border-white text-primary hover:bg-white/10"
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