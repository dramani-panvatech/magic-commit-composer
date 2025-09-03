import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Award, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

interface HeroSectionProps {
  onDemoClick: () => void;
}

export default function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="secondary" className="bg-white/80 text-primary border-0 shadow-soft text-xs sm:text-sm" data-aos="fade-up" data-aos-delay="200">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Trusted by 2,000+ Healthcare Practices
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-trust-blue leading-tight" data-aos="fade-up" data-aos-delay="400">
                AI-Powered Healthcare.
                <span className="block text-primary">Happier Patients.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                We're here to help you care better. Our comprehensive telemedicine, EHR, and practice management solutions empower healthcare providers to deliver exceptional patient care while streamlining operations.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground" data-aos="fade-up" data-aos-delay="800">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-green" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-green" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-healthcare-green" />
                <span>99.9% Uptime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="1000">
              <Button
                onClick={onDemoClick}
                variant="cta"
                size="xl"
                className="group"
              >
                Schedule a Demo
                <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              
            </div>

            
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative group" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <div className="relative z-10 transition-all duration-300 group-hover:scale-105">
              <img
                src={heroImage}
                alt="Healthcare professional using PatientClick technology"
                className="w-full h-auto rounded-2xl shadow-trust transition-all duration-300 group-hover:shadow-2xl"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-xl shadow-card p-3 sm:p-4 animate-float" data-aos="fade-down-right" data-aos-delay="700">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-healthcare-light-green rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-6 sm:h-6 text-healthcare-green" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-trust-blue">Active Patients</p>
                    <p className="text-lg sm:text-2xl font-bold text-primary">15,000+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-xl shadow-card p-3 sm:p-4 animate-float-delayed" data-aos="fade-up-left" data-aos-delay="900">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-healthcare-light-blue rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-trust-blue">Efficiency Boost</p>
                    <p className="text-lg sm:text-2xl font-bold text-healthcare-green">40%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-10 -z-10 transition-all duration-300 group-hover:opacity-20 group-hover:scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
}