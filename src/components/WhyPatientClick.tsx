import { Shield, Zap, Heart } from "lucide-react";
import { useState } from "react";
import DemoModal from "./DemoModal";
import PricingModal from "./PricingModal";

const features = [
  {
    icon: Shield,
    title: "Secure",
    description: "HIPAA compliant with enterprise-grade security, protecting your patient data with advanced encryption and secure cloud infrastructure.",
    stats: "99.9% uptime guaranteed"
  },
  {
    icon: Zap,
    title: "Scalable",
    description: "Grows with your practice from single physician offices to large multi-location health systems with seamless integration.",
    stats: "From 1 to 1000+ providers"
  },
  {
    icon: Heart,
    title: "Smart",
    description: "AI-powered insights and clinical decision support help you deliver better patient outcomes while reducing administrative burden.",
    stats: "40% efficiency improvement"
  }
];

export default function WhyPatientClick() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  const handleStartFreeTrial = () => {
    setIsDemoModalOpen(true);
  };

  const handleViewPricing = () => {
    setIsPricingModalOpen(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
            Why Healthcare Professionals Choose PatientClick
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by healthcare professionals, for healthcare professionals. 
            Experience the difference that thoughtful design makes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Decorative rings */}
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-primary/20 scale-125 animate-pulse"></div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border border-primary/10 scale-150"></div>
              </div>

              <h3 className="text-2xl font-bold text-trust-blue mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <div className="inline-flex items-center px-4 py-2 bg-healthcare-light-blue rounded-full">
                <span className="text-sm font-semibold text-primary">
                  {feature.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-trust-blue mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust PatientClick 
              to deliver exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartFreeTrial}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover-glow transition-all"
              >
                Start Free Trial
              </button>
              <button 
                onClick={handleViewPricing}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

      {/* Pricing Modal */}
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)} 
      />
    </section>
  );
}