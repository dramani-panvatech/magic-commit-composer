import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState as useCarouselState } from "react";
import DemoModal from "@/components/DemoModal";
import PricingModal from "@/components/PricingModal";
import { 
  Video, 
  Shield, 
  Smartphone, 
  Calendar, 
  FileText,
  Users,
  Play,
  Star,
  CheckCircle,
  Monitor,
  Headphones,
  Heart,
  Clock,
  Globe,
  TrendingUp,
  Award,
  MessageSquare,
  Bell,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  ArrowRight
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  "Secure HIPAA-compliant video consultations",
  "24/7 appointment scheduling system", 
  "Integrated e-prescribing capabilities",
  "Multi-platform mobile accessibility",
  "Real-time patient monitoring tools",
  "Seamless EHR integration"
];

const features = [
  {
    icon: Video,
    title: "HD Video Consultations",
    description: "Crystal clear video quality with secure, HIPAA-compliant video calls across all devices."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols ensure patient data is always protected."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Native mobile apps for iOS and Android plus responsive web interface for seamless access."
  }
];

const detailedFeatures = {
  "Video Consultations": [
    "HD quality video and audio",
    "Screen sharing capabilities",
    "Recording and playback",
    "Multi-participant calls",
    "Waiting room management",
    "Technical support integration"
  ],
  "Appointment Management": [
    "Online scheduling portal",
    "Real-time availability calendar",
    "Automated reminders (SMS/Email)",
    "Rescheduling and cancellation",
    "Waitlist management",
    "Pre-visit questionnaires"
  ],
  "Digital Health Tools": [
    "E-prescribing integration",
    "Digital vital signs collection",
    "Health monitoring devices",
    "Medication adherence tracking",
    "Lab results integration",
    "Care plan management"
  ],
  "Platform Integration": [
    "EHR system integration",
    "Billing system connectivity",
    "Insurance verification",
    "Payment processing",
    "Reporting and analytics",
    "API access and customization"
  ]
};

const pricingPlans = [
  {
    name: "Basic",
    price: "$199",
    period: "per month",
    description: "Perfect for small practices",
    features: [
      "Up to 100 consultations/month",
      "Basic video conferencing",
      "Mobile app access",
      "Email support",
      "Standard security features"
    ],
    notIncluded: [
      "Advanced analytics",
      "Custom integrations",
      "Priority support"
    ]
  },
  {
    name: "Professional",
    price: "$399",
    period: "per month",
    description: "Most popular for growing practices",
    features: [
      "Up to 500 consultations/month",
      "HD video & screen sharing",
      "E-prescribing integration",
      "Advanced scheduling",
      "Priority support",
      "Analytics dashboard",
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
      "Unlimited consultations",
      "All features included",
      "Custom integrations",
      "Dedicated support",
      "White-label solutions",
      "Custom development",
      "Training programs"
    ],
    notIncluded: []
  }
];

const testimonials = [
  {
    name: "Dr. Jennifer Smith",
    role: "Family Medicine",
    practice: "Smith Family Healthcare",
    rating: 5,
    text: "PatientClick Telemedicine has transformed our practice. We can now see 40% more patients while maintaining the same quality of care."
  },
  {
    name: "Dr. Robert Johnson",
    role: "Internal Medicine",
    practice: "Johnson Medical Associates",
    rating: 5,
    text: "The video quality is exceptional and the integration with our EHR is seamless. Our patients love the convenience of virtual visits."
  },
  {
    name: "Dr. Lisa Chen",
    role: "Pediatrics",
    practice: "Chen Pediatric Care",
    rating: 5,
    text: "Especially valuable for follow-up appointments and routine check-ins. The platform is user-friendly for both providers and patients."
  }
];

const faqs = [
  {
    question: "Is the telemedicine platform HIPAA compliant?",
    answer: "Yes, our platform is fully HIPAA compliant with end-to-end encryption, secure data storage, and comprehensive audit trails."
  },
  {
    question: "What devices are supported?",
    answer: "Our platform works on desktop computers, laptops, tablets, and smartphones across Windows, Mac, iOS, and Android operating systems."
  },
  {
    question: "How does billing work for telemedicine visits?",
    answer: "Our platform integrates with your existing billing system and supports telemedicine-specific CPT codes for proper reimbursement."
  },
  {
    question: "Can patients join calls without downloading software?",
    answer: "Yes, patients can join video consultations directly through their web browser without downloading any additional software."
  },
  {
    question: "What about patients with poor internet connections?",
    answer: "Our platform automatically adjusts video quality based on connection speed and includes phone-only options as backup."
  }
];

const telemedicineStats = [
  { label: "Patient Satisfaction", value: 95, unit: "%", color: "text-green-600" },
  { label: "No-Show Reduction", value: 40, unit: "%", color: "text-blue-600" },
  { label: "Time Savings", value: 30, unit: "%", color: "text-purple-600" },
  { label: "Practice Efficiency", value: 50, unit: "%", color: "text-orange-600" }
];

export default function Telemedicine() {
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
    <>
      <Helmet>
        <title>Telemedicine Solutions | Remote Healthcare Platform | PatientClick</title>
        <meta 
          name="description" 
          content="Transform healthcare delivery with PatientClick's secure telemedicine platform. HIPAA-compliant video consultations, e-prescribing, and remote patient monitoring." 
        />
        <meta name="keywords" content="telemedicine, telehealth, virtual consultations, remote healthcare, video calls, HIPAA compliant, e-prescribing" />
        <link rel="canonical" href="https://patientclick.com/products/telemedicine" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <Badge variant="secondary" className="inline-flex items-center">
                    <Video className="w-4 h-4 mr-2" />
                    Telemedicine Platform
                  </Badge>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue leading-tight">
                    Healthcare That Comes
                    <span className="block text-primary">To Your Patients</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Deliver exceptional healthcare remotely with our comprehensive telemedicine platform. 
                    Secure video consultations, digital prescriptions, and seamless patient engagement.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => setIsDemoModalOpen(true)}
                      size="xl" 
                      className="bg-primary hover:bg-primary-hover hover-glow"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      See Telemedicine Demo
                    </Button>
                    <Button variant="outline" size="xl">
                      View Features
                    </Button>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                    {telemedicineStats.map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className={`text-2xl font-bold ${stat.color}`}>
                          {stat.value}{stat.unit}
                        </div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Telemedicine Interface Carousel */}
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
                        {/* Video Consultation Screen */}
                        <CarouselItem>
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-100">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 lg:mb-6">
                              <div className="flex items-center space-x-2 lg:space-x-3">
                                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                                <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Video Consultation</h3>
                              </div>
                              <Badge className="bg-green-100 text-green-700 text-xs">Live</Badge>
                            </div>

                            {/* Video Interface */}
                            <div className="bg-gray-900 rounded-lg p-3 lg:p-4 mb-3 lg:mb-4 aspect-video relative">
                              <div className="flex justify-between items-start h-full">
                                <div className="bg-blue-600 rounded-lg p-2 lg:p-3 w-1/3">
                                  <div className="text-white text-xs lg:text-sm font-medium mb-1">Dr. Johnson</div>
                                  <div className="w-full h-12 lg:h-16 bg-blue-500 rounded"></div>
                                </div>
                                <div className="bg-green-600 rounded-lg p-2 lg:p-3 w-1/3">
                                  <div className="text-white text-xs lg:text-sm font-medium mb-1">Patient</div>
                                  <div className="w-full h-12 lg:h-16 bg-green-500 rounded"></div>
                                </div>
                              </div>
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-500 rounded-full flex items-center justify-center">
                                  <Video className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                                </div>
                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-600 rounded-full flex items-center justify-center">
                                  <MessageSquare className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                                </div>
                              </div>
                            </div>

                            {/* Session Info */}
                            <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border">
                              <div className="text-xs lg:text-sm text-gray-600 mb-2">Session Duration: 15:32</div>
                              <div className="text-xs text-gray-500">Patient: Sarah Johnson • Follow-up Visit</div>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Appointment Scheduling Screen */}
                        <CarouselItem>
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-green-100">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 lg:mb-6">
                              <div className="flex items-center space-x-2 lg:space-x-3">
                                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                                <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Schedule Appointment</h3>
                              </div>
                              <Badge className="bg-green-100 text-green-700 text-xs">Available</Badge>
                            </div>

                            {/* Calendar View */}
                            <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border mb-3 lg:mb-4">
                              <div className="text-sm font-medium text-gray-800 mb-3">Available Time Slots</div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
                                  <div className="text-xs font-medium text-blue-800">9:00 AM</div>
                                  <div className="text-xs text-blue-600">Available</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                                  <div className="text-xs font-medium text-green-800">2:00 PM</div>
                                  <div className="text-xs text-green-600">Available</div>
                                </div>
                              </div>
                            </div>

                            {/* Appointment Details */}
                            <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border">
                              <div className="text-sm font-medium text-gray-800 mb-2">Virtual Visit</div>
                              <div className="text-xs text-gray-600 mb-2">Dr. Johnson - Internal Medicine</div>
                              <div className="text-xs text-gray-500">Duration: 30 minutes</div>
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Patient Portal Screen */}
                        <CarouselItem>
                          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-100">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 lg:mb-6">
                              <div className="flex items-center space-x-2 lg:space-x-3">
                                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                                <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Patient Portal</h3>
                              </div>
                              <Badge className="bg-purple-100 text-purple-700 text-xs">Secure</Badge>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
                              <div className="bg-white rounded-lg p-2 lg:p-3 text-center shadow-sm border">
                                <Video className="w-4 h-4 lg:w-6 lg:h-6 text-purple-600 mx-auto mb-1" />
                                <div className="text-xs lg:text-sm font-medium text-purple-800">Start Visit</div>
                              </div>
                              <div className="bg-white rounded-lg p-2 lg:p-3 text-center shadow-sm border">
                                <Calendar className="w-4 h-4 lg:w-6 lg:h-6 text-blue-600 mx-auto mb-1" />
                                <div className="text-xs lg:text-sm font-medium text-blue-800">Schedule</div>
                              </div>
                            </div>

                            {/* Upcoming Appointments */}
                            <div className="bg-white rounded-lg p-3 lg:p-4 shadow-sm border">
                              <h4 className="font-semibold text-gray-800 mb-2 lg:mb-3 text-sm lg:text-base">Upcoming</h4>
                              <div className="space-y-2 text-xs lg:text-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600">Tomorrow 2:00 PM</span>
                                  <Badge className="bg-purple-100 text-purple-700 text-xs">Virtual</Badge>
                                </div>
                                <div className="text-xs text-gray-500">Dr. Johnson - Follow-up</div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 lg:py-24 bg-gradient-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                  Why Choose PatientClick Telemedicine?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our comprehensive telemedicine platform is designed to deliver exceptional virtual care 
                  while maintaining the highest standards of security and compliance.
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
                  Complete Telemedicine Solution
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to deliver high-quality virtual healthcare, 
                  from video consultations to prescription management.
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
              <Tabs defaultValue="Video Consultations" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
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

          {/* Testimonials Section */}
          <section className="py-16 lg:py-24 bg-gradient-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                  What Healthcare Providers Say
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hear from medical professionals who have transformed their practice with our telemedicine platform.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={testimonial.name}
                    className="p-6 hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <CardContent className="space-y-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                      <div className="border-t pt-4">
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
          <section className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">
                  Get answers to common questions about our telemedicine platform.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-trust-blue hover:text-primary">
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

          {/* Pricing Section */}
          <section className="py-16 lg:py-24 bg-gradient-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose the plan that fits your practice size and needs. 
                  All plans include our core telemedicine features with no hidden fees.
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
                        {plan.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3 opacity-50">
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            <span className="text-muted-foreground line-through">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Separator />
                      
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-hover' : ''}`}
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => plan.price === "Custom" ? setIsDemoModalOpen(true) : setIsPricingModalOpen(true)}
                      >
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24 bg-trust-blue text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Join thousands of healthcare providers who have revolutionized 
                their patient care with our telemedicine platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="xl" 
                  variant="secondary"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-white text-trust-blue hover:bg-gray-100"
                >
                  Schedule Demo
                </Button>
                <Button 
                  size="xl" 
                  variant="outline"
                  onClick={() => setIsPricingModalOpen(true)}
                  className="border-white text-white hover:bg-white/10"
                >
                  Get Pricing
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
    </>
  );
}