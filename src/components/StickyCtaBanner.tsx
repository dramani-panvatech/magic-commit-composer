import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";

interface StickyCtaBannerProps {
  onDemoClick: () => void;
}

export default function StickyCtaBanner({ onDemoClick }: StickyCtaBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    // Check localStorage on component mount
    const dismissed = localStorage.getItem('stickyCtaBannerDismissed');
    const dismissedTime = localStorage.getItem('stickyCtaBannerDismissedTime');
    
    if (dismissed === 'true' && dismissedTime) {
      // Check if 24 hours have passed since dismissal
      const now = Date.now();
      const dismissedAt = parseInt(dismissedTime);
      const hoursPassed = (now - dismissedAt) / (1000 * 60 * 60);
      
      if (hoursPassed < 24) {
        return true; // Still dismissed
      } else {
        // Reset dismissal after 24 hours
        localStorage.removeItem('stickyCtaBannerDismissed');
        localStorage.removeItem('stickyCtaBannerDismissedTime');
        return false;
      }
    }
    
    return dismissed === 'true';
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('stickyCtaBannerDismissed', 'true');
    localStorage.setItem('stickyCtaBannerDismissedTime', Date.now().toString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up">
      <div className="bg-gradient-primary text-white shadow-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold truncate">
                    Ready to transform your practice?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 truncate hidden sm:block">
                    See how PatientClick can streamline your operations and improve patient care.
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                  <Button
                    onClick={onDemoClick}
                    variant="secondary"
                    size="sm"
                    className="bg-white text-primary hover:bg-white/90 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
                  >
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Schedule Demo
                  </Button>
                  
                  {/* Dismiss Button */}
                  <button
                    onClick={handleDismiss}
                    className="text-white/70 hover:text-white transition-colors p-1"
                    aria-label="Dismiss banner"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}