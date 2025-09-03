import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import DateSelection from "@/components/demo-steps/DateSelection";
import TimeSelection from "@/components/demo-steps/TimeSelection";
import DetailsForm from "@/components/demo-steps/DetailsForm";
import SuccessStep from "@/components/demo-steps/SuccessStep";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DemoStep = "date" | "time" | "details" | "success";

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState<DemoStep>("date");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleClose = () => {
    setCurrentStep("date");
    setSelectedDate(null);
    setSelectedTime(null);
    onClose();
  };

  const nextStep = () => {
    if (currentStep === "date") setCurrentStep("time");
    else if (currentStep === "time") setCurrentStep("details");
    else if (currentStep === "details") setCurrentStep("success");
  };

  const prevStep = () => {
    if (currentStep === "time") setCurrentStep("date");
    else if (currentStep === "details") setCurrentStep("time");
  };

  const renderStep = () => {
    switch (currentStep) {
      case "date":
        return (
          <DateSelection
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            onNext={nextStep}
          />
        );
      case "time":
        return (
          <TimeSelection
            selectedDate={selectedDate!}
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case "details":
        return (
          <DetailsForm
            selectedDate={selectedDate!}
            selectedTime={selectedTime!}
            onBack={prevStep}
            onComplete={nextStep}
          />
        );
      case "success":
        return (
          <SuccessStep
            selectedDate={selectedDate!}
            selectedTime={selectedTime!}
            onClose={handleClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {renderStep()}
      </DialogContent>
    </Dialog>
  );
}