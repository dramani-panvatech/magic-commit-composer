import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Award, Users, CheckCircle } from "lucide-react";

const trustMetrics = [
  {
    icon: Users,
    value: "2,000+",
    label: "Healthcare Practices",
    description: "Trust PatientClick nationwide"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "HIPAA Compliance",
    description: "Secure & certified platform"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Expert Support",
    description: "Always here when you need us"
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "Customer Rating",
    description: "Based on verified reviews"
  }
];

const certifications = [
  { name: "HIPAA Compliant", icon: Shield },
  { name: "SOC 2 Type II", icon: CheckCircle },
  { name: "HL7 Certified", icon: Award },
  { name: "Medicare Approved", icon: CheckCircle }
];

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Trusted & Secure
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-4">
            Healthcare Technology You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of healthcare providers who trust PatientClick for their most critical operations. 
            Our platform meets the highest standards of security, compliance, and reliability.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-soft mb-4">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-trust-blue mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-trust-blue mb-2">
              Security & Compliance Certifications
            </h3>
            <p className="text-muted-foreground">
              Meeting the highest standards in healthcare technology security
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="flex flex-col items-center p-6 bg-healthcare-light-blue rounded-xl border border-border hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <cert.icon className="w-8 h-8 text-primary mb-3" />
                <span className="text-sm font-medium text-center text-trust-blue">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              All certifications are regularly audited and maintained to ensure the highest level of security and compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}