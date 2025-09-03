import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText,
  Shield,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Scale,
  Lock
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: CheckCircle,
    color: "from-green-500 to-green-600",
    content: [
      "By accessing and using PatientClick services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
      "These terms constitute a legally binding agreement between you and PatientClick regarding your use of our healthcare technology platform.",
      "If you do not agree to these terms, you must not use our services."
    ]
  },
  {
    id: "services",
    title: "Description of Services",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    content: [
      "PatientClick provides comprehensive healthcare technology solutions including Electronic Health Records (EHR), practice management, patient engagement, and billing services.",
      "Our services are designed to streamline healthcare operations, improve patient care, and enhance practice efficiency.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice."
    ]
  },
  {
    id: "user-accounts",
    title: "User Accounts and Responsibilities",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You must provide accurate, current, and complete information during registration and keep it updated.",
      "You are responsible for ensuring that all users under your account comply with these terms and applicable laws.",
      "You must immediately notify us of any unauthorized use of your account or any other security concerns."
    ]
  },
  {
    id: "privacy",
    title: "Privacy and Data Protection",
    icon: Shield,
    color: "from-indigo-500 to-indigo-600",
    content: [
      "We are committed to protecting your privacy and maintaining the confidentiality of your data.",
      "Our privacy practices are governed by our Privacy Policy, which is incorporated into these terms by reference.",
      "We comply with HIPAA regulations and other applicable healthcare privacy laws.",
      "You are responsible for ensuring that your use of our services complies with applicable privacy laws and regulations."
    ]
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use Policy",
    icon: AlertTriangle,
    color: "from-orange-500 to-orange-600",
    content: [
      "You may only use our services for lawful purposes and in accordance with these terms.",
      "You must not use our services to transmit, store, or process any illegal, harmful, or inappropriate content.",
      "You must not attempt to gain unauthorized access to our systems or interfere with service operations.",
      "You must comply with all applicable laws, regulations, and professional standards in your use of our services."
    ]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    icon: Lock,
    color: "from-red-500 to-red-600",
    content: [
      "All content, features, and functionality of our services are owned by PatientClick and are protected by intellectual property laws.",
      "You retain ownership of your data and content that you upload to our services.",
      "You grant us a limited license to use your data solely for the purpose of providing our services.",
      "You may not copy, modify, distribute, or create derivative works based on our services without our written consent."
    ]
  },
  {
    id: "billing",
    title: "Billing and Payment Terms",
    icon: Scale,
    color: "from-teal-500 to-teal-600",
    content: [
      "Service fees are billed in advance on a monthly or annual basis, depending on your selected plan.",
      "All fees are non-refundable except as expressly stated in these terms or required by law.",
      "We reserve the right to change our pricing with 30 days' notice to existing customers.",
      "Late payments may result in service suspension or termination.",
      "You are responsible for all taxes associated with your use of our services."
    ]
  },
  {
    id: "termination",
    title: "Termination and Cancellation",
    icon: Clock,
    color: "from-gray-500 to-gray-600",
    content: [
      "You may cancel your account at any time through your account settings or by contacting our support team.",
      "We may terminate or suspend your account for violations of these terms or for other legitimate business reasons.",
      "Upon termination, you will lose access to our services and your data may be deleted in accordance with our data retention policy.",
      "Certain provisions of these terms will survive termination, including those relating to intellectual property and liability limitations."
    ]
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Support",
    value: "legal@patientclick.com",
    description: "For legal inquiries and compliance questions"
  },
  {
    icon: Phone,
    title: "Phone Support",
    value: "1-877-901-9990",
    description: "Available Monday-Friday, 9 AM - 6 PM EST"
  },
  {
    icon: MessageSquare,
    title: "Contact Form",
    value: "Submit online inquiry",
    description: "Use our contact form for general questions"
  }
];

export default function Terms() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [lastUpdated] = useState("December 15, 2024");

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6" data-aos="fade-down">
              <FileText className="w-4 h-4 mr-2" />
              Legal Information
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6" data-aos="fade-up">
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
              Please read these terms carefully before using PatientClick services. These terms govern your use of our healthcare technology platform.
            </p>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center space-x-2 text-muted-foreground" data-aos="fade-up" data-aos-delay="400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Table of Contents */}
            <Card className="shadow-xl border-0 bg-white mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {termsSections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer group"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center`}>
                        <section.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-trust-blue group-hover:text-primary transition-colors">
                        {index + 1}. {section.title}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-12">
              {termsSections.map((section, index) => (
                <Card 
                  key={section.id}
                  id={section.id}
                  className="shadow-xl border-0 bg-white"
                  data-aos="fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-trust-blue">
                          {index + 1}. {section.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-16">
              <Card className="shadow-2xl border-0 bg-gradient-to-r from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-trust-blue text-center">
                    Questions About These Terms?
                  </CardTitle>
                  <p className="text-muted-foreground text-center">
                    If you have any questions about these Terms & Conditions, please contact our legal team.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {contactInfo.map((contact) => (
                      <div key={contact.title} className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-trust-blue mb-2">{contact.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{contact.value}</p>
                        <p className="text-xs text-muted-foreground">{contact.description}</p>
                      </div>
                    ))}
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