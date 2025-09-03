import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Check, Star, Users, Building, Zap } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const pricingTiers = [
  {
    name: "Starter",
    price: "$99",
    period: "per provider/month",
    description: "Perfect for small practices getting started",
    features: [
      "Electronic Health Records (EHR)",
      "Patient Portal",
      "Basic Scheduling",
      "Email Support",
      "HIPAA Compliance",
      "Mobile App Access"
    ],
    icon: Users,
    popular: false
  },
  {
    name: "Professional",
    price: "$199",
    period: "per provider/month",
    description: "Most popular choice for growing practices",
    features: [
      "Everything in Starter",
      "Advanced Practice Management",
      "Medical Billing Integration",
      "Telemedicine Platform",
      "Priority Support",
      "Custom Workflows",
      "Analytics Dashboard",
      "Multi-location Support"
    ],
    icon: Building,
    popular: true
  },
  {
    name: "Enterprise",
    price: "contact us",
    period: "",
    description: "For large health systems and hospitals",
    features: [
      "Everything in Professional",
      "Custom Integration",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Advanced Analytics",
      "Custom Reporting",
      "API Access",
      "White-label Options"
    ],
    icon: Zap,
    popular: false
  }
];

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleGetStarted = (tierName: string) => {
    setSelectedTier(tierName);
    // Here you could redirect to a contact form or demo request
    console.log(`Selected tier: ${tierName}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-6xl p-0 overflow-hidden max-h-[95vh] overflow-y-auto">
        <DialogHeader className="p-6 pb-4 bg-gradient-hero">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-3xl font-bold text-trust-blue mb-2">
                Transparent Pricing for Every Practice
              </DialogTitle>
              <p className="text-muted-foreground text-lg">
                Choose the plan that fits your practice size and needs
              </p>
            </div>
            
          </div>
        </DialogHeader>

        <div className="p-6">
          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-6 rounded-2xl border-2 transition-all ${
                  tier.popular
                    ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-trust-blue mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-healthcare-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleGetStarted(tier.name)}
                  variant={tier.popular ? "cta" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-healthcare-light-blue rounded-xl p-6">
            <h4 className="text-lg font-semibold text-trust-blue mb-4">
              What's Included in All Plans
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-healthcare-green" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-healthcare-green" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-healthcare-green" />
                <span>Free data migration</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-healthcare-green" />
                <span>HIPAA compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-healthcare-green" />
                <span>99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-healthcare-green" />
                <span>Regular updates</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-4">
              Need help choosing the right plan?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 