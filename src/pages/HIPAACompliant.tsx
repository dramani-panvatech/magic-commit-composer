import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Users,
  Database,
  Server,
  Key,
  Fingerprint,
  Monitor,
  Clock,
  Award
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const hipaaRequirements = [
  {
    icon: Lock,
    title: "Access Controls",
    description: "Multi-factor authentication, role-based access, and automatic session timeouts ensure only authorized personnel can access patient data."
  },
  {
    icon: Eye,
    title: "Audit Trails",
    description: "Comprehensive logging of all data access, modifications, and system activities for complete transparency and compliance monitoring."
  },
  {
    icon: Database,
    title: "Data Encryption",
    description: "End-to-end encryption for data in transit and at rest, using industry-standard AES-256 encryption protocols."
  },
  {
    icon: Users,
    title: "User Authentication",
    description: "Secure login systems with password policies, account lockouts, and regular security updates to prevent unauthorized access."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "HIPAA-compliant cloud infrastructure with redundant systems, regular backups, and disaster recovery protocols."
  },
  {
    icon: Monitor,
    title: "Continuous Monitoring",
    description: "24/7 system monitoring, intrusion detection, and automated alerts for any suspicious activities or security breaches."
  }
];

const complianceFeatures = [
  {
    icon: CheckCircle,
    title: "HIPAA Privacy Rule Compliance",
    description: "Full compliance with patient privacy rights, consent management, and data disclosure controls."
  },
  {
    icon: CheckCircle,
    title: "HIPAA Security Rule Compliance",
    description: "Technical, physical, and administrative safeguards to protect electronic health information."
  },
  {
    icon: CheckCircle,
    title: "Breach Notification Compliance",
    description: "Automated breach detection and notification systems that meet HIPAA's 60-day notification requirement."
  },
  {
    icon: CheckCircle,
    title: "Business Associate Agreements",
    description: "Comprehensive BAAs with all third-party vendors to ensure end-to-end compliance."
  }
];

const securityMeasures = [
  {
    title: "Physical Security",
    items: [
      "Secure data centers with biometric access controls",
      "24/7 security monitoring and surveillance",
      "Environmental controls and fire suppression systems",
      "Redundant power and cooling systems"
    ]
  },
  {
    title: "Technical Security",
    items: [
      "AES-256 encryption for data at rest and in transit",
      "SSL/TLS encryption for all communications",
      "Regular security updates and patch management",
      "Intrusion detection and prevention systems"
    ]
  },
  {
    title: "Administrative Security",
    items: [
      "Comprehensive employee training programs",
      "Regular security assessments and audits",
      "Incident response and disaster recovery plans",
      "Risk analysis and management procedures"
    ]
  }
];

export default function HIPAACompliant() {
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              HIPAA Compliant
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              HIPAA Compliance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your patient data security is our top priority. PatientClick maintains the highest standards 
              of HIPAA compliance to protect your practice and your patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                Request HIPAA Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Download Compliance Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Complete HIPAA Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive compliance framework ensures your practice meets all HIPAA requirements 
              while maintaining the highest standards of data security and patient privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hipaaRequirements.map((requirement, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <requirement.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {requirement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {requirement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              HIPAA Compliance Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our platform is designed with HIPAA compliance in mind, 
              providing you with peace of mind and complete regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <feature.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Multi-Layered Security Measures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security framework protects your data through multiple layers 
              of physical, technical, and administrative safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="border-0 shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Award className="w-6 h-6 text-blue-600 mr-3" />
                    {measure.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {measure.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Ensure HIPAA Compliance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of healthcare providers who trust PatientClick for their HIPAA compliance needs. 
              Get started today with a free compliance assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule Free Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Compliance Team
              </Button>
            </div>
          </div>
        </div>
      </section>



      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
} 