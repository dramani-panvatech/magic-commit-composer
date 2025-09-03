import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { 
  FileText,
  Shield,
  CheckCircle,
  Info,
  Phone,
  Bell,
  MessageSquare,
  CreditCard,
  Building,
  FileCheck,
  Users,
  Stethoscope
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const costItems = [
  {
    id: "call-alerts",
    label: "Call Alerts (by phone)",
    icon: Phone,
    category: "Communication"
  },
  {
    id: "clearinghouse",
    label: "Clearinghouse fees",
    icon: Building,
    category: "Billing"
  },
  {
    id: "direct-messaging",
    label: "Direct Messaging",
    icon: MessageSquare,
    category: "Communication"
  },
  {
    id: "immunization-reporting",
    label: "Immunization Reporting",
    icon: Stethoscope,
    category: "Clinical"
  },
  {
    id: "statement-mailing",
    label: "Statement/Invoice mailing service",
    icon: FileCheck,
    category: "Billing"
  },
  {
    id: "text-alerts",
    label: "Text Message Alerts",
    icon: Bell,
    category: "Communication"
  },
  {
    id: "transcription",
    label: "Transcription service",
    icon: FileText,
    category: "Documentation"
  }
];

const certifications = [
  "170.315(h)(1): Electronic Health Information Export",
  "170.315(h)(1): Authentication, Access Control, and Authorization",
  "170.315(g)(4): Amendments",
  "170.315(g)(5): Automatic Access Time-out",
  "170.315(g)(6): Emergency Access",
  "170.315(g)(7): End-User Device Encryption",
  "170.315 (d)(12): Encrypt Authentication Credentials",
  "170.315(g)(3): Multi-Factor Authentication",
  "170.315(g)(4): Quality Management System",
  "170.315(g)(5): Accessibility-Centered Design"
];

export default function CostDisclosure() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const handleItemChange = (itemId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems(prev => [...prev, itemId]);
    } else {
      setSelectedItems(prev => prev.filter(id => id !== itemId));
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Communication": return Bell;
      case "Billing": return CreditCard;
      case "Clinical": return Stethoscope;
      case "Documentation": return FileText;
      default: return Info;
    }
  };

  const groupedItems = costItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof costItems>);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6" data-aos="fade-down">
              <FileText className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6" data-aos="fade-up">
              Cost Disclosure
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
              Complete transparency in our pricing structure. Learn about all potential costs 
              and fees associated with PatientClick services.
            </p>
          </div>
        </section>

        {/* Cost Disclosure Content */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Cost Items */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="shadow-2xl border-0 bg-white" data-aos="fade-right">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20">
                    <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                      <CreditCard className="w-6 h-6 mr-3 text-primary" />
                      Additional Service Fees
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      COSTS: Normally, there is either a setup fee and monthly fee, or transactional fees based on collected revenues 
                      associated with the use of products and services provided by PatientClick.
                    </p>
                    <p className="text-muted-foreground font-medium">
                      Additional fees that may be incurred if the options selected are:
                    </p>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    {Object.entries(groupedItems).map(([category, items]) => {
                      const CategoryIcon = getCategoryIcon(category);
                      return (
                        <div key={category} className="space-y-4">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                              <CategoryIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-trust-blue">{category} Services</h3>
                          </div>
                          
                          <div className="grid gap-3 ml-4">
                            {items.map((item) => (
                              <div 
                                key={item.id}
                                className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 group"
                              >
                                <Checkbox
                                  id={item.id}
                                  checked={selectedItems.includes(item.id)}
                                  onCheckedChange={(checked) => handleItemChange(item.id, !!checked)}
                                  className="h-5 w-5 border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                />
                                <div className="flex items-center gap-3 flex-1">
                                  <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
                                    <item.icon className="w-4 h-4 text-primary" />
                                  </div>
                                  <label 
                                    htmlFor={item.id}
                                    className="text-base font-medium text-trust-blue cursor-pointer group-hover:text-primary transition-colors duration-300"
                                  >
                                    {item.label}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {category !== Object.keys(groupedItems)[Object.keys(groupedItems).length - 1] && (
                            <Separator className="my-6" />
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Disclaimer Section */}
                <Card className="shadow-2xl border-0 bg-white" data-aos="fade-right" data-aos-delay="200">
                  <CardHeader className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border-b border-orange-200">
                    <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                      <Shield className="w-6 h-6 mr-3 text-orange-500" />
                      DISCLAIMER
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="prose prose-lg text-muted-foreground">
                      <p>
                        This Health IT Module is Compliant with the ONC Certification Criteria for Health IT and has been certified by an 
                        ONC-ACB in accordance with the applicable certification criteria adopted by the Secretary of Health and Human 
                        Services. This certification does not represent an endorsement by the U.S. Department of Health and Human 
                        Services.
                      </p>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-trust-blue">Certified Vendor & Product Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-lg border border-blue-200">
                          <p className="font-medium text-trust-blue">Vendor:</p>
                          <p className="text-muted-foreground">PatientClick, Inc.</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-green-50 to-green-50/50 rounded-lg border border-green-200">
                          <p className="font-medium text-trust-blue">Certified Health IT/EHR Name:</p>
                          <p className="text-muted-foreground">PatientClick</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-50/50 rounded-lg border border-purple-200">
                          <p className="font-medium text-trust-blue">Certified Health IT/EHR Version:</p>
                          <p className="text-muted-foreground">5</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-50/50 rounded-lg border border-indigo-200">
                          <p className="font-medium text-trust-blue">Certification ID:</p>
                          <p className="text-muted-foreground">15.02.05.2141.PC01.01.0.220310</p>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg border border-gray-200">
                        <p className="font-medium text-trust-blue">Certification Date:</p>
                        <p className="text-muted-foreground">Mar 10, 2022</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Certification Criteria */}
                <Card className="shadow-2xl border-0 bg-white" data-aos="fade-right" data-aos-delay="400">
                  <CardHeader className="bg-gradient-to-r from-green-500/10 to-green-600/5 border-b border-green-200">
                    <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                      Criteria Certified
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid gap-3">
                      {certifications.map((cert, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-3 p-4 rounded-lg border border-green-200 bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50 transition-colors duration-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-trust-blue">{cert}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-lg border border-blue-200">
                      <p className="text-sm text-muted-foreground italic">
                        Electronic Health Information Export
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Schedule Demo Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <Card className="shadow-2xl border-0 bg-white" data-aos="fade-left">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20 text-center">
                      <CardTitle className="text-2xl font-bold text-trust-blue">
                        Schedule Demo
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Get a personalized walkthrough of our transparent pricing
                      </p>
                    </CardHeader>
                    <CardContent className="p-8 text-center">
                      <div className="space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-trust-blue">Why Schedule a Demo?</h3>
                          <ul className="text-left space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Detailed cost breakdown
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Customized pricing options
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              ROI analysis for your practice
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              No hidden fees guarantee
                            </li>
                          </ul>
                        </div>
                        
                        <Button 
                          onClick={() => setIsDemoModalOpen(true)}
                          variant="cta" 
                          size="lg"
                          className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          Schedule Free Demo
                        </Button>
                        
                        <p className="text-xs text-muted-foreground">
                          30-minute consultation • No commitment required
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Contact */}
                  <Card className="shadow-xl border-0 bg-white" data-aos="fade-left" data-aos-delay="200">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-trust-blue mb-4">Have Questions?</h3>
                      <div className="space-y-3">
                        <Button variant="outline" size="lg" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Call 1-877-901-9990
                        </Button>
                        <Button variant="outline" size="lg" className="w-full">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Live Chat Support
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}