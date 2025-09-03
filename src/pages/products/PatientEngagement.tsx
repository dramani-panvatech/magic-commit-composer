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
  Users, 
  MessageSquare, 
  Bell, 
  Smartphone, 
  Calendar,
  Star,
  Zap,
  UserCheck,
  FileText,
  Shield,
  Database,
  Lock,
  Check,
  X,
  ArrowRight,
  Award,
  BarChart3,
  Mail,
  Phone,
  Video,
  Heart,
  Clock,
  TrendingUp,
  Eye,
  Download,
  Upload,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: MessageSquare,
    title: "Secure Messaging",
    description: "HIPAA-compliant messaging platform for secure communication between patients and providers."
  },
  {
    icon: Calendar,
    title: "Online Scheduling",
    description: "24/7 appointment booking with real-time availability and automated reminders."
  },
  {
    icon: Smartphone,
    title: "Mobile Patient Portal",
    description: "Full-featured mobile app for patients to access their health information anywhere."
  }
];

const benefits = [
  "Reduce no-shows by up to 50%",
  "Improve patient satisfaction scores",
  "Streamline communication workflows",
  "Increase patient engagement",
  "Reduce administrative burden",
  "Enhance care coordination"
];

const detailedFeatures = {
  "Patient Portal": [
    "Secure access to medical records",
    "Lab results and imaging reports",
    "Medication lists and refill requests",
    "Immunization history",
    "Health education resources",
    "Family member access management"
  ],
  "Communication Tools": [
    "Secure messaging with providers",
    "Appointment reminders via SMS/email",
    "Automated follow-up messages",
    "Video consultation scheduling",
    "Prescription refill notifications",
    "Health maintenance reminders"
  ],
  "Appointment Management": [
    "Online appointment booking",
    "Real-time availability calendar",
    "Automated appointment confirmations",
    "Waitlist management",
    "Rescheduling and cancellation",
    "Pre-visit questionnaires"
  ],
  "Health Tracking": [
    "Vital signs monitoring",
    "Medication adherence tracking",
    "Symptom tracking and reporting",
    "Health goal setting",
    "Progress visualization",
    "Integration with wearables"
  ]
};

const testimonials = [
  {
    name: "Dr. Amanda Foster",
    role: "Family Medicine",
    practice: "Foster Family Care",
    rating: 5,
    text: "Our patient engagement has increased dramatically since implementing PatientClick. The online scheduling alone has reduced our no-shows by 45%."
  },
  {
    name: "Dr. Carlos Rodriguez",
    role: "Internal Medicine",
    practice: "Rodriguez Medical Associates",
    rating: 5,
    text: "Patients love the convenience of the mobile portal. They can access their records, schedule appointments, and message us anytime."
  },
  {
    name: "Dr. Sarah Williams",
    role: "Pediatrics",
    practice: "Williams Pediatrics",
    rating: 5,
    text: "The automated reminders and follow-up messages have significantly improved our patient compliance and satisfaction scores."
  }
];

const faqs = [
  {
    question: "Is the patient portal HIPAA compliant?",
    answer: "Yes, our patient portal is fully HIPAA compliant with enterprise-grade security, encryption, and audit trails to protect patient privacy."
  },
  {
    question: "Can patients access the portal on mobile devices?",
    answer: "Absolutely! Our patient portal is fully responsive and works seamlessly on smartphones, tablets, and desktop computers."
  },
  {
    question: "How do appointment reminders work?",
    answer: "Our system sends automated reminders via SMS, email, or both based on patient preferences. Reminders are sent 24-48 hours before appointments."
  },
  {
    question: "Can family members access patient records?",
    answer: "Yes, with proper authorization. Patients can grant access to family members or caregivers through our secure proxy access system."
  },
  {
    question: "What about patients who don't use technology?",
    answer: "We provide multiple communication channels including phone calls and traditional mail for patients who prefer non-digital methods."
  }
];

const engagementStats = [
  { label: "No-Show Reduction", value: 50, unit: "%", color: "text-green-600" },
  { label: "Patient Satisfaction", value: 95, unit: "%", color: "text-blue-600" },
  { label: "Portal Adoption", value: 85, unit: "%", color: "text-purple-600" },
  { label: "Response Time", value: 2, unit: "hours", color: "text-orange-600" }
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    period: "per month",
    description: "Perfect for small practices",
    features: [
      "Patient portal access",
      "Basic appointment scheduling",
      "Email reminders",
      "Secure messaging",
      "Mobile responsive design"
    ],
    notIncluded: [
      "Video consultations",
      "Advanced analytics",
      "Custom branding",
      "Priority support"
    ]
  },
  {
    name: "Professional",
    price: "$199",
    period: "per month",
    description: "Most popular for growing practices",
    features: [
      "All Basic features",
      "Video consultations",
      "Advanced appointment management",
      "Health tracking tools",
      "Custom branding",
      "Analytics dashboard",
      "Priority support"
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
      "All Professional features",
      "Custom integrations",
      "White-label solutions",
      "Dedicated support",
      "Custom development",
      "Training programs",
      "API access"
    ],
    notIncluded: []
  }
];

export default function PatientEngagement() {
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
                  <Users className="w-4 h-4 mr-2" />
                  Patient Engagement
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue leading-tight">
                  Empower Patients with
                  <span className="block text-primary">Modern Engagement</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform patient care with our comprehensive engagement platform. 
                  Secure messaging, online scheduling, and mobile access that patients love.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)}
                    size="xl" 
                    className="bg-primary hover:bg-primary-hover hover-glow"
                  >
                    See Patient Portal Demo
                  </Button>
                  <Button variant="outline" size="xl">
                    View Features
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {engagementStats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}{stat.unit}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Patient Engagement Interface Carousel */}
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
                      {/* Patient Portal Dashboard */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Patient Portal</h3>
                            </div>
                            <Badge className="bg-green-100 text-green-700 text-xs">Secure</Badge>
                          </div>

                          {/* Welcome Message */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 mb-3 lg:mb-4 shadow-sm border">
                            <div className="text-xs lg:text-sm text-gray-600 mb-1">Welcome back, Sarah</div>
                            <div className="font-medium text-gray-800 text-sm lg:text-base">Next appointment: Tomorrow 2:00 PM</div>
                            <div className="text-xs text-gray-500 mt-1">Dr. Johnson - Family Medicine</div>
                          </div>

                          {/* Quick Actions */}
                          <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
                            <div className="bg-blue-50 rounded-lg p-2 lg:p-3 text-center border border-blue-200">
                              <Calendar className="w-4 h-4 lg:w-6 lg:h-6 text-blue-600 mx-auto mb-1" />
                              <div className="text-xs lg:text-sm font-medium text-blue-800">Schedule</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-2 lg:p-3 text-center border border-green-200">
                              <MessageSquare className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mx-auto mb-1" />
                              <div className="text-xs lg:text-sm font-medium text-green-800">Messages</div>
                            </div>
                          </div>

                          {/* Recent Activity */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border">
                            <h4 className="font-semibold text-gray-800 mb-2 lg:mb-3 text-sm lg:text-base">Recent Activity</h4>
                            <div className="space-y-2 text-xs lg:text-sm">
                              <div className="flex items-center space-x-2 lg:space-x-3">
                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600">Lab results available</span>
                                <span className="text-gray-400 text-xs">2h ago</span>
                              </div>
                              <div className="flex items-center space-x-2 lg:space-x-3">
                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600">Appointment confirmed</span>
                                <span className="text-gray-400 text-xs">1d ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Secure Messaging Screen */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-green-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Secure Messages</h3>
                            </div>
                            <Badge className="bg-green-100 text-green-700 text-xs">HIPAA Secure</Badge>
                          </div>

                          {/* Message Thread */}
                          <div className="space-y-2 lg:space-y-3 mb-3 lg:mb-4">
                            <div className="bg-white rounded-lg p-2 lg:p-3 shadow-sm border">
                              <div className="flex justify-between items-start mb-1 lg:mb-2">
                                <div className="font-medium text-gray-800 text-sm">Dr. Johnson</div>
                                <div className="text-xs text-gray-500">2:30 PM</div>
                              </div>
                              <div className="text-xs lg:text-sm text-gray-600">
                                Your lab results look great! Blood pressure is well controlled.
                              </div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-2 lg:p-3 shadow-sm border border-blue-200">
                              <div className="flex justify-between items-start mb-1 lg:mb-2">
                                <div className="font-medium text-blue-800 text-sm">You</div>
                                <div className="text-xs text-gray-500">2:45 PM</div>
                              </div>
                              <div className="text-xs lg:text-sm text-blue-700">
                                Thank you! Should I continue with the same medication?
                              </div>
                            </div>
                          </div>

                          {/* New Message */}
                          <div className="bg-white rounded-lg p-2 lg:p-3 shadow-sm border">
                            <div className="text-xs lg:text-sm text-gray-600 mb-2">Type your message...</div>
                            <div className="flex space-x-2">
                              <button className="bg-green-600 text-white rounded px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium hover:bg-green-700 transition-colors">
                                Send
                              </button>
                              <button className="bg-gray-100 text-gray-600 rounded px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium hover:bg-gray-200 transition-colors">
                                Attach
                              </button>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Appointment Scheduling Screen */}
                      <CarouselItem>
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-100">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                              <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Schedule Appointment</h3>
                            </div>
                            <Badge className="bg-purple-100 text-purple-700 text-xs">Available</Badge>
                          </div>

                          {/* Date Selection */}
                          <div className="bg-white rounded-lg p-3 lg:p-4 mb-3 lg:mb-4 shadow-sm border">
                            <div className="text-xs lg:text-sm text-gray-600 mb-2">Select Date</div>
                            <div className="flex flex-wrap gap-1 lg:gap-2">
                              <button className="bg-purple-600 text-white rounded px-2 lg:px-3 py-1 text-xs lg:text-sm">Today</button>
                              <button className="bg-white text-gray-600 rounded px-2 lg:px-3 py-1 text-xs lg:text-sm border">Tomorrow</button>
                              <button className="bg-white text-gray-600 rounded px-2 lg:px-3 py-1 text-xs lg:text-sm border">Next Week</button>
                            </div>
                          </div>

                          {/* Time Slots */}
                          <div className="space-y-2 mb-3 lg:mb-4">
                            <div className="bg-white rounded-lg p-2 lg:p-3 shadow-sm border border-purple-200">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">9:00 AM</div>
                                  <div className="text-xs text-gray-500">Dr. Johnson</div>
                                </div>
                                <div className="text-green-600 text-xs">Available</div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-2 lg:p-3 shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">2:00 PM</div>
                                  <div className="text-xs text-gray-500">Dr. Johnson</div>
                                </div>
                                <div className="text-green-600 text-xs">Available</div>
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-2 lg:p-3 shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-gray-400 text-sm">4:30 PM</div>
                                  <div className="text-xs text-gray-400">Dr. Johnson</div>
                                </div>
                                <div className="text-gray-400 text-xs">Booked</div>
                              </div>
                            </div>
                          </div>

                          {/* Book Button */}
                          <button className="w-full bg-purple-600 text-white rounded-lg p-2 lg:p-3 text-xs lg:text-sm font-medium hover:bg-purple-700 transition-colors">
                            Book 2:00 PM Appointment
                          </button>
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
                Transform Patient Care
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Modern patient engagement tools that improve outcomes, reduce costs, 
                and enhance the patient experience.
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
                <h3 className="text-2xl font-bold text-trust-blue mb-4">HIPAA Compliant & Secure</h3>
                <p className="text-muted-foreground mb-6">
                  Rest assured knowing patient data is protected with enterprise-grade 
                  security measures and full HIPAA compliance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Multi-factor authentication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Comprehensive audit trails</span>
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
                Comprehensive Engagement Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to keep patients engaged and informed throughout their care journey.
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
                Complete Patient Engagement Suite
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive set of tools designed to enhance patient engagement and improve outcomes.
              </p>
            </div>

            <Tabs defaultValue="Patient Portal" className="w-full">
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
                Choose the plan that fits your practice size and engagement needs.
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
                See what our customers have to say about their experience with PatientClick Patient Engagement.
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
                Get answers to common questions about PatientClick Patient Engagement.
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
            <Users className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Engaging Patients Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of healthcare providers who have transformed patient 
              engagement with PatientClick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                variant="secondary" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule Patient Portal Demo
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