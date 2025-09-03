import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Shield,
  FileText,
  HelpCircle,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our healthcare technology experts",
    value: "1-877-901-9990",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed help via email",
    value: "support@patientclick.com",
    action: "Send Email"
  }
];

const quickLinks = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common questions and answers",
    path: "/faq"
  },
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "How we protect your data and patient information",
    path: "/privacy-policy"
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Service agreements and usage terms",
    path: "/terms"
  },
  {
    icon: MessageSquare,
    title: "Support Center",
    description: "Get help and find solutions",
    path: "/support"
  }
];

export default function Contact() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6" data-aos="fade-down">
              <MessageSquare className="w-4 h-4 mr-2" />
              We're Here to Help
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6" data-aos="fade-up">
              Contact PatientClick
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
              Have questions about our healthcare technology solutions? Our expert team is ready 
              to help you find the perfect solution for your practice.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred way to connect with our healthcare technology experts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="text-center pb-6 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-trust-blue mb-3 group-hover:text-primary transition-colors duration-300">
                      {method.title}
                    </CardTitle>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center pb-8 relative z-10">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 mb-6 border border-primary/20 shadow-inner">
                      <p className="font-bold text-xl text-trust-blue">
                        {method.value}
                      </p>
                    </div>
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="shadow-2xl border-0 bg-white animate-fade-in overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-primary/20">
                  <CardTitle className="text-3xl font-bold text-trust-blue mb-2">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold text-trust-blue">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Dr. John Smith"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="h-12 text-base border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold text-trust-blue">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="doctor@practice.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12 text-base border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base font-semibold text-trust-blue">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="h-12 text-base border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold text-trust-blue">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your practice and how we can help..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="min-h-[140px] text-base border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Links & Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-primary/20">
                    <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                      <Clock className="w-6 h-6 mr-3" />
                      Support Hours
                    </CardTitle>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-muted-foreground font-medium">Phone Support:</span>
                      <span className="font-bold text-trust-blue">24/7</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-muted-foreground font-medium">Live Chat:</span>
                      <span className="font-bold text-trust-blue">24/7</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-muted-foreground font-medium">Email Response:</span>
                      <span className="font-bold text-trust-blue">Within 4 hours</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-primary/20">
                    <CardTitle className="text-2xl font-bold text-trust-blue">
                      Quick Links
                    </CardTitle>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    {quickLinks.map((link) => (
                      <div key={link.title} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 cursor-pointer group">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <link.icon className="w-5 h-5 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-trust-blue group-hover:text-primary transition-colors duration-300">{link.title}</p>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button 
                    onClick={() => setIsDemoModalOpen(true)}
                    variant="cta" 
                    size="lg"
                    className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Schedule a Demo Instead
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Center Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6" data-aos="fade-down">
                <MessageSquare className="w-4 h-4 mr-2" />
                Support Resources
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-4">
                Support Center
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers, get help, and access resources to make the most of your PatientClick experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Knowledge Base */}
              <Card className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-trust-blue mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Knowledge Base
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive guides and tutorials for all features
                  </p>
                </CardHeader>
                <CardContent className="text-center pb-6 relative z-10">
                  <Button variant="outline" size="lg" className="w-full h-12 font-semibold">
                    Browse Articles
                  </Button>
                </CardContent>
              </Card>

              {/* Video Tutorials */}
              <Card className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-white" style={{ animationDelay: "0.1s" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-bold text-trust-blue mb-3 group-hover:text-green-600 transition-colors duration-300">
                    Video Tutorials
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step video guides for quick learning
                  </p>
                </CardHeader>
                <CardContent className="text-center pb-6 relative z-10">
                  <Button variant="outline" size="lg" className="w-full h-12 font-semibold">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>

              {/* Community Forum */}
              <Card className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-white" style={{ animationDelay: "0.2s" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-bold text-trust-blue mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    Community Forum
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Connect with other healthcare professionals
                  </p>
                </CardHeader>
                <CardContent className="text-center pb-6 relative z-10">
                  <Button variant="outline" size="lg" className="w-full h-12 font-semibold">
                    Join Discussion
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Support Contact Options */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-6 border-b border-orange-200">
                  <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                    <svg className="w-6 h-6 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                    Technical Support
                  </CardTitle>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="font-semibold text-trust-blue">24/7 Phone Support</p>
                      <p className="text-sm text-muted-foreground">1-877-901-9990</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="font-semibold text-trust-blue">Email Support</p>
                      <p className="text-sm text-muted-foreground">tech@patientclick.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="font-semibold text-trust-blue">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 p-6 border-b border-green-200">
                  <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                    <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Training & Onboarding
                  </CardTitle>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <p className="font-semibold text-trust-blue">Implementation Guide</p>
                      <p className="text-sm text-muted-foreground">Step-by-step setup process</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-trust-blue">Training Sessions</p>
                      <p className="text-sm text-muted-foreground">Free 1-on-1 training</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-trust-blue">Performance Analytics</p>
                      <p className="text-sm text-muted-foreground">Track your practice growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}