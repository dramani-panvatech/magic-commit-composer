import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  Eye,
  Lock,
  Users,
  Database,
  Globe,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Settings
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const privacySections = [
  {
    id: "overview",
    title: "Privacy Overview",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    content: [
      "PatientClick is committed to protecting your privacy and the confidentiality of your healthcare information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare technology platform.",
      "We are fully compliant with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable healthcare privacy laws and regulations.",
      "This policy applies to all users of our services, including healthcare providers, staff members, and patients whose information is processed through our platform."
    ]
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    icon: Database,
    color: "from-green-500 to-green-600",
    content: [
      "We collect information you provide directly to us, such as account registration details, practice information, and patient data that you input into our system.",
      "We automatically collect certain information when you use our services, including IP addresses, browser type, device information, and usage patterns.",
      "We may collect information from third-party sources, such as practice management systems, EHR systems, and other healthcare technology platforms that integrate with our services.",
      "All patient health information (PHI) is collected, stored, and processed in accordance with HIPAA requirements and your specific authorization."
    ]
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: Settings,
    color: "from-purple-500 to-purple-600",
    content: [
      "We use your information to provide, maintain, and improve our healthcare technology services, including EHR functionality, practice management, and patient engagement features.",
      "Your information helps us process transactions, send important service updates, and provide customer support.",
      "We may use aggregated, anonymized data for research, analytics, and service improvement purposes, ensuring that no individual patient information is identifiable.",
      "We use your information to comply with legal obligations, enforce our terms of service, and protect against fraud or security threats."
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    icon: Users,
    color: "from-orange-500 to-orange-600",
    content: [
      "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
      "We may share your information with service providers who assist us in operating our platform, such as cloud hosting providers, payment processors, and customer support services.",
      "We may disclose information when required by law, such as in response to a subpoena, court order, or other legal process.",
      "We may share information with your explicit consent or as necessary to provide our services, such as sharing patient information with authorized healthcare providers.",
      "In the event of a business transfer, merger, or acquisition, your information may be transferred as part of the transaction, subject to the same privacy protections."
    ]
  },
  {
    id: "data-security",
    title: "Data Security and Protection",
    icon: Lock,
    color: "from-red-500 to-red-600",
    content: [
      "We implement industry-standard security measures to protect your information, including encryption, firewalls, and secure data centers.",
      "All data transmission is encrypted using SSL/TLS protocols to ensure secure communication between your devices and our servers.",
      "We conduct regular security audits, vulnerability assessments, and penetration testing to identify and address potential security risks.",
      "We maintain strict access controls and require multi-factor authentication for administrative access to sensitive data.",
      "We have comprehensive incident response procedures in place to address any potential data breaches or security incidents."
    ]
  },
  {
    id: "hipaa-compliance",
    title: "HIPAA Compliance",
    icon: CheckCircle,
    color: "from-teal-500 to-teal-600",
    content: [
      "PatientClick is fully compliant with HIPAA regulations and maintains all required administrative, physical, and technical safeguards.",
      "We have designated HIPAA compliance officers and conduct regular training for all employees on privacy and security requirements.",
      "We maintain detailed audit logs of all access to patient information and conduct regular reviews to ensure compliance.",
      "We have established Business Associate Agreements (BAAs) with all third-party service providers who may have access to patient information.",
      "We provide tools and features to help healthcare providers comply with HIPAA requirements, including access controls, audit trails, and data encryption."
    ]
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    icon: Eye,
    color: "from-indigo-500 to-indigo-600",
    content: [
      "You have the right to access, review, and request corrections to your personal information that we maintain.",
      "You may request deletion of your account and associated data, subject to legal and regulatory requirements for data retention.",
      "You can opt out of certain communications, such as marketing emails, while still receiving important service-related notifications.",
      "You have the right to request information about how your data is used and shared, and to receive a copy of your data in a portable format.",
      "You may file a complaint with us or with relevant regulatory authorities if you believe your privacy rights have been violated."
    ]
  },
  {
    id: "data-retention",
    title: "Data Retention and Deletion",
    icon: Calendar,
    color: "from-gray-500 to-gray-600",
    content: [
      "We retain your information for as long as necessary to provide our services and comply with legal and regulatory requirements.",
      "Patient health information is retained in accordance with HIPAA requirements and applicable state laws, typically for a minimum of 6 years.",
      "When you delete your account, we will delete or anonymize your personal information, except where retention is required by law.",
      "We maintain secure backup systems for disaster recovery purposes, and these backups may retain your information for a limited period.",
      "You may request deletion of specific information or your entire account through our privacy portal or by contacting our support team."
    ]
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Privacy Officer",
    value: "privacy@patientclick.com",
    description: "For privacy-related inquiries and requests"
  },
  {
    icon: Phone,
    title: "Privacy Hotline",
    value: "1-877-901-9990",
    description: "Available Monday-Friday, 9 AM - 6 PM EST"
  },
  {
    icon: MessageSquare,
    title: "Privacy Portal",
    value: "Submit privacy request",
    description: "Access your privacy rights and data"
  }
];

const privacyFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Full compliance with healthcare privacy laws"
  },
  {
    icon: Users,
    title: "Access Controls",
    description: "Granular permissions and role-based access"
  },
  {
    icon: Database,
    title: "Secure Storage",
    description: "Enterprise-grade data centers with redundancy"
  }
];

export default function PrivacyPolicy() {
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
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Security
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6" data-aos="fade-up">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
              Your privacy is our priority. Learn how we protect your healthcare information and maintain the highest standards of data security.
            </p>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center space-x-2 text-muted-foreground" data-aos="fade-up" data-aos-delay="400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-4">
                Our Privacy Commitment
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We implement industry-leading security measures to protect your healthcare information
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {privacyFeatures.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white text-center"
                  data-aos="fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-trust-blue mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Table of Contents */}
            <Card className="shadow-xl border-0 bg-white mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-trust-blue flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Privacy Policy Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {privacySections.map((section, index) => (
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

            {/* Privacy Sections */}
            <div className="space-y-12">
              {privacySections.map((section, index) => (
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
                    Privacy Questions or Concerns?
                  </CardTitle>
                  <p className="text-muted-foreground text-center">
                    Our privacy team is here to help with any questions about your data protection and privacy rights.
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