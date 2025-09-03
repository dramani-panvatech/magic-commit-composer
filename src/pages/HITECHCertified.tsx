import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Award, 
  CheckCircle, 
  Zap, 
  TrendingUp,
  Shield,
  Users,
  Database,
  Server,
  Monitor,
  Clock,
  Star,
  Target,
  BarChart3,
  Lightbulb,
  Globe
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const hitechBenefits = [
  {
    icon: Zap,
    title: "Meaningful Use Incentives",
    description: "Qualify for federal incentive payments through the Medicare and Medicaid EHR Incentive Programs."
  },
  {
    icon: TrendingUp,
    title: "Improved Patient Outcomes",
    description: "Enhanced care coordination and clinical decision support lead to better patient health outcomes."
  },
  {
    icon: Users,
    title: "Enhanced Patient Engagement",
    description: "Empower patients with access to their health information and secure communication tools."
  },
  {
    icon: BarChart3,
    title: "Quality Reporting",
    description: "Streamlined quality measure reporting and performance tracking for value-based care."
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Advanced security measures and privacy protections beyond basic HIPAA requirements."
  },
  {
    icon: Globe,
    title: "Interoperability",
    description: "Seamless data exchange with other healthcare systems and providers for coordinated care."
  }
];

const certificationFeatures = [
  {
    icon: CheckCircle,
    title: "ONC Health IT Certification",
    description: "Full certification under the Office of the National Coordinator for Health Information Technology."
  },
  {
    icon: CheckCircle,
    title: "Meaningful Use Stage 3 Compliance",
    description: "Complete compliance with the latest meaningful use requirements and quality measures."
  },
  {
    icon: CheckCircle,
    title: "Advanced Clinical Decision Support",
    description: "Intelligent clinical decision support systems that improve patient care quality."
  },
  {
    icon: CheckCircle,
    title: "Patient Portal Integration",
    description: "Comprehensive patient engagement tools with secure messaging and health record access."
  }
];

const meaningfulUseCriteria = [
  {
    title: "Patient Care",
    items: [
      "Electronic prescribing (eRx)",
      "Clinical decision support rules",
      "Drug-drug and drug-allergy interaction checks",
      "Patient-specific education resources"
    ]
  },
  {
    title: "Patient Engagement",
    items: [
      "Patient portal with secure messaging",
      "Online appointment scheduling",
      "Patient access to health information",
      "Secure patient-provider communication"
    ]
  },
  {
    title: "Care Coordination",
    items: [
      "Health information exchange (HIE)",
      "Summary of care records",
      "Clinical quality measure reporting",
      "Immunization registry reporting"
    ]
  }
];

const incentivePrograms = [
  {
    title: "Medicare EHR Incentive Program",
    description: "Earn up to $44,000 over 5 years for demonstrating meaningful use of certified EHR technology.",
    amount: "$44,000",
    duration: "5 years"
  },
  {
    title: "Medicaid EHR Incentive Program",
    description: "Receive up to $63,750 over 6 years for adopting, implementing, or upgrading certified EHR technology.",
    amount: "$63,750",
    duration: "6 years"
  },
  {
    title: "Quality Payment Program",
    description: "Participate in MIPS or APMs to earn performance-based payment adjustments and bonuses.",
    amount: "Variable",
    duration: "Annual"
  }
];

export default function HITECHCertified() {
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
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              HITECH Certified
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              HITECH Certification
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Maximize your federal incentives and improve patient care with our HITECH-certified 
              EHR technology. Meet meaningful use requirements and qualify for incentive payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                Calculate Your Incentives
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Certification Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* HITECH Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              HITECH Certification Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our HITECH-certified technology helps you qualify for federal incentives while 
              improving patient care and practice efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hitechBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              HITECH Certification Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive HITECH certification ensures you meet all meaningful use requirements 
              and qualify for maximum federal incentives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationFeatures.map((feature, index) => (
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

      {/* Meaningful Use Criteria */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meaningful Use Criteria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform helps you meet all meaningful use requirements across patient care, 
              engagement, and care coordination objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {meaningfulUseCriteria.map((criteria, index) => (
              <Card key={index} className="border-0 shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Target className="w-6 h-6 text-green-600 mr-3" />
                    {criteria.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {criteria.items.map((item, itemIndex) => (
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

      {/* Incentive Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Federal Incentive Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualify for significant federal incentives by demonstrating meaningful use of 
              our HITECH-certified EHR technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {incentivePrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {program.amount}
                    </div>
                    <div className="text-sm text-gray-500">
                      Over {program.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Maximize Your Incentives?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join healthcare providers nationwide who are earning federal incentives with our 
              HITECH-certified technology. Start your meaningful use journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                Calculate Your Incentives
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