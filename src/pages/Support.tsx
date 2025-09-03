import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare,
  FileText,
  Phone,
  Mail,
  HelpCircle,
  Search,
  BookOpen,
  Video,
  Users,
  Settings,
  Shield,
  CheckCircle
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const supportResources = [
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Comprehensive guides and tutorials for all features",
    color: "from-blue-500 to-blue-600",
    hoverColor: "group-hover:text-blue-600",
    buttonText: "Browse Articles",
    href: "#"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for quick learning",
    color: "from-green-500 to-green-600",
    hoverColor: "group-hover:text-green-600",
    buttonText: "Watch Videos",
    href: "#"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other healthcare professionals",
    color: "from-purple-500 to-purple-600",
    hoverColor: "group-hover:text-purple-600",
    buttonText: "Join Discussion",
    href: "#"
  }
];

const technicalSupport = [
  {
    icon: Phone,
    title: "24/7 Phone Support",
    value: "1-877-901-9990",
    description: "Speak with our technical experts"
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "tech@patientclick.com",
    description: "Get detailed technical assistance"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Available 24/7",
    description: "Quick answers to your questions"
  }
];

const trainingResources = [
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step setup process",
    href: "#"
  },
  {
    icon: Video,
    title: "Training Sessions",
    description: "Free 1-on-1 training",
    href: "#"
  },
  {
    icon: Settings,
    title: "Performance Analytics",
    description: "Track your practice growth",
    href: "#"
  }
];

const faqCategories = [
  {
    title: "Getting Started",
    icon: HelpCircle,
    count: 12
  },
  {
    title: "Account Management",
    icon: Settings,
    count: 8
  },
  {
    title: "Billing & Payments",
    icon: Shield,
    count: 15
  },
  {
    title: "Technical Issues",
    icon: CheckCircle,
    count: 10
  }
];

export default function Support() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6" data-aos="fade-down">
              <MessageSquare className="w-4 h-4 mr-2" />
              Support Resources
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6" data-aos="fade-up">
              Support Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
              Find answers, get help, and access resources to make the most of your PatientClick experience
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or contact support..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white shadow-lg"
                />
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-4">
                Support Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Access comprehensive help materials and connect with our support team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {supportResources.map((resource, index) => (
                <Card 
                  key={resource.title}
                  className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="text-center pb-6 relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className={`text-xl font-bold text-trust-blue mb-3 ${resource.hoverColor} transition-colors duration-300`}>
                      {resource.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center pb-6 relative z-10">
                    <Button variant="outline" size="lg" className="w-full h-12 font-semibold">
                      {resource.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Categories */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-trust-blue mb-8 text-center">Frequently Asked Questions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {faqCategories.map((category, index) => (
                  <Card 
                    key={category.title}
                    className="group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <category.icon className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <h4 className="font-semibold text-trust-blue mb-2">{category.title}</h4>
                      <p className="text-sm text-muted-foreground">{category.count} articles</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Contact Options */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-6 border-b border-orange-200">
                  <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-orange-500" />
                    Technical Support
                  </CardTitle>
                </div>
                <CardContent className="p-6 space-y-4">
                  {technicalSupport.map((support) => (
                    <div key={support.title} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <support.icon className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-semibold text-trust-blue">{support.title}</p>
                        <p className="text-sm text-muted-foreground">{support.value}</p>
                        <p className="text-xs text-muted-foreground">{support.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 p-6 border-b border-green-200">
                  <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                    Training & Onboarding
                  </CardTitle>
                </div>
                <CardContent className="p-6 space-y-4">
                  {trainingResources.map((resource) => (
                    <div key={resource.title} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                      <resource.icon className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-semibold text-trust-blue">{resource.title}</p>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </div>
                  ))}
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