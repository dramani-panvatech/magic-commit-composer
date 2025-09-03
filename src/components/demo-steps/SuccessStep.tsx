import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Phone, Mail } from "lucide-react";

interface SuccessStepProps {
  selectedDate: string;
  selectedTime: string;
  onClose: () => void;
}

export default function SuccessStep({ selectedDate, selectedTime, onClose }: SuccessStepProps) {
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
    <div className="p-8 text-center">
      <div className="mb-6">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          Demo Successfully Scheduled!
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for scheduling your PatientClick demo. We're excited to show you how our platform can transform your practice.
        </p>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-green-600 mr-2" />
            <span className="text-lg font-semibold text-gray-900">
              {formatDate(selectedDate)} at {selectedTime}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            45-minute personalized demo session
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h4>
        <div className="space-y-3 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-semibold">1</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Confirmation Email</p>
              <p className="text-sm text-gray-600">You'll receive a detailed email with meeting link and agenda</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-semibold">2</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Reminder Call</p>
              <p className="text-sm text-gray-600">Our specialist will call 24 hours before to confirm and answer any questions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-semibold">3</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Personalized Demo</p>
              <p className="text-sm text-gray-600">Live demonstration tailored to your practice size and needs</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-semibold">4</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Custom Proposal</p>
              <p className="text-sm text-gray-600">Receive a tailored pricing proposal based on your requirements</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Questions?</p>
          <p className="text-sm text-gray-600">Call us anytime</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-900">Need Support?</p>
          <p className="text-sm text-gray-600">Email us</p>
        </div>
      </div>

      <Button 
        onClick={onClose} 
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
      >
        Perfect, I'm Ready!
      </Button>
    </div>
  );
}