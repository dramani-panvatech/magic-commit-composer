import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DetailsFormProps {
  selectedDate: string;
  selectedTime: string;
  onBack: () => void;
  onComplete: () => void;
}

export default function DetailsForm({ selectedDate, selectedTime, onBack, onComplete }: DetailsFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    practiceSize: "",
    services: [] as string[],
    additionalInfo: "",
    currentSoftware: "",
    contactMethod: "",
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "First name, last name, and email are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    toast({
      title: "Demo Scheduled Successfully!",
      description: `Your demo is scheduled for ${selectedDate} at ${selectedTime}`,
    });
    
    onComplete();
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Web Request for demo</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-green-800 font-medium">
            Selected: {formatDate(selectedDate)} at {selectedTime}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-semibold text-gray-900">Basic Details</h3>
          <div className="w-9 h-9"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="border-gray-300"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Smith"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="border-gray-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="doctor@practice.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Practice Size
            </Label>
            <Select value={formData.practiceSize} onValueChange={(value) => handleInputChange("practiceSize", value)}>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select practice size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Solo Practice</SelectItem>
                <SelectItem value="small">2-5 Providers</SelectItem>
                <SelectItem value="medium">6-15 Providers</SelectItem>
                <SelectItem value="large">16+ Providers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Services Interest */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">
              Services of Interest
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Electronic Health Records (EHR)",
                "Practice Management System",
                "Medical Billing Services", 
                "Patient Engagement Tools",
                "Revenue Cycle Management",
                "Telemedicine Solutions"
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.services.includes(service)}
                    onCheckedChange={(checked) => handleServiceChange(service, !!checked)}
                  />
                  <Label htmlFor={service} className="text-sm text-gray-700">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSoftware" className="text-sm font-medium text-gray-700">
              Current Software/System
            </Label>
            <Input
              id="currentSoftware"
              type="text"
              placeholder="e.g., Epic, Cerner, Paper-based"
              value={formData.currentSoftware}
              onChange={(e) => handleInputChange("currentSoftware", e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Preferred Contact Method
            </Label>
            <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange("contactMethod", value)}>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="How should we reach you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="both">Both Email & Phone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
              Additional Information
            </Label>
            <Textarea
              id="additionalInfo"
              placeholder="Tell us more about your practice needs, current challenges, or specific questions..."
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              className="border-gray-300 min-h-[100px]"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and{" "}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Scheduling Demo..." : "Schedule Demo"}
          </Button>
        </form>
      </div>
    </div>
  );
}