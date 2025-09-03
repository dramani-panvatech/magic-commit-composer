import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Calendar, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    practiceSize: "",
    serviceInterest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.practiceSize || !formData.serviceInterest) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to schedule your demo.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Demo Scheduled Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", practiceSize: "", serviceInterest: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {!isSubmitted ? (
          <>
            <DialogHeader className="p-6 pb-4 bg-gradient-hero">
              <div className="flex items-center justify-between">
                <div>
                  <DialogTitle className="text-2xl font-bold text-trust-blue mb-2">
                    See PatientClick in action
                  </DialogTitle>
                  <p className="text-muted-foreground">
                    Schedule your personalized demo
                  </p>
                </div>
                
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Dr. John Smith"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-11 border-gray-300 focus:border-trust-blue focus:ring-trust-blue"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@practice.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-11 border-gray-300 focus:border-trust-blue focus:ring-trust-blue"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="practiceSize" className="text-sm font-semibold text-gray-700">
                    Practice Size *
                  </Label>
                  <Select value={formData.practiceSize} onValueChange={(value) => handleInputChange("practiceSize", value)}>
                    <SelectTrigger className="h-11 border-gray-300 focus:border-trust-blue focus:ring-trust-blue">
                      <SelectValue placeholder="Select practice size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 providers</SelectItem>
                      <SelectItem value="6-15">6-15 providers</SelectItem>
                      <SelectItem value="16-50">16-50 providers</SelectItem>
                      <SelectItem value="50+">50+ providers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceInterest" className="text-sm font-semibold text-gray-700">
                    Primary Interest *
                  </Label>
                  <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange("serviceInterest", value)}>
                    <SelectTrigger className="h-11 border-gray-300 focus:border-trust-blue focus:ring-trust-blue">
                      <SelectValue placeholder="What interests you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ehr">Electronic Health Records</SelectItem>
                      <SelectItem value="telemedicine">Telemedicine Solutions</SelectItem>
                      <SelectItem value="billing">Medical Billing Services</SelectItem>
                      <SelectItem value="practice-management">Practice Management</SelectItem>
                      <SelectItem value="patient-engagement">Patient Engagement</SelectItem>
                      <SelectItem value="all">Complete Healthcare Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                <div className="w-10 h-10 bg-trust-blue rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-trust-blue">Quick Setup Promise</p>
                  <p className="text-gray-600">30-minute demo • No pressure • Honest pricing</p>
                </div>
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-trust-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Scheduling Demo..." : "Schedule My Demo"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our Privacy Policy and Terms of Service.
                No spam, unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-healthcare-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-trust-blue mb-2">
                Demo Scheduled Successfully!
              </h3>
              <p className="text-muted-foreground">
                Thank you for your interest in PatientClick. Our healthcare technology specialist will contact you within 24 hours to schedule your personalized demo.
              </p>
            </div>

            <div className="bg-healthcare-light-green rounded-lg p-4 mb-6">
              <p className="text-sm font-medium text-healthcare-green mb-2">What happens next?</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Our specialist will call you to confirm the best time</li>
                <li>• We'll prepare a customized demo for your practice size</li>
                <li>• Live Q&A session with our healthcare experts</li>
                <li>• Custom pricing discussion based on your needs</li>
              </ul>
            </div>

            <Button onClick={handleClose} variant="cta" size="lg" className="w-full">
              Perfect, I'm Ready!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}