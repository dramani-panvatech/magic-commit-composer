import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface TimeSelectionProps {
  selectedDate: string;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const timeSlots = [
  "2:30am", "3:15am", "4:00am", "8:30pm"
];

export default function TimeSelection({ selectedDate, selectedTime, onTimeSelect, onNext, onBack }: TimeSelectionProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.getDate();
    return `${dayName}, ${monthName} ${day}`;
  };

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Web Request for demo</h2>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>45 min</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span>Web conferencing details provided upon confirmation.</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-center mb-8 px-4">
        Please provide more details about your current solution to help us customize presentation for you.
      </p>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-semibold text-gray-900">Select a Date & Time</h3>
          <div className="w-9 h-9"></div> {/* Spacer for alignment */}
        </div>

        <div className="flex gap-6">
          {/* Calendar - showing selected date */}
          <div className="flex-1">
            <div className="text-center mb-4">
              <h4 className="text-base font-medium text-gray-900">September 2025</h4>
            </div>

            {/* Simplified calendar view showing selected date */}
            <div className="grid grid-cols-7 gap-1 mb-4 text-center">
              <div className="text-sm font-medium text-gray-500 py-2">MON</div>
              <div className="text-sm font-medium text-gray-500 py-2">TUE</div>
              <div className="text-sm font-medium text-gray-500 py-2">WED</div>
              <div className="text-sm font-medium text-gray-500 py-2">THU</div>
              <div className="text-sm font-medium text-gray-500 py-2">FRI</div>
              <div className="text-sm font-medium text-gray-500 py-2">SAT</div>
              <div className="text-sm font-medium text-gray-500 py-2">SUN</div>
              
              <div className="w-10 h-10"></div>
              <div className="w-10 h-10"></div>
              <div className="w-10 h-10 text-sm rounded-lg flex items-center justify-center">3</div>
              <div className="w-10 h-10 text-sm rounded-lg flex items-center justify-center">4</div>
              <div className="w-10 h-10 text-sm rounded-lg flex items-center justify-center bg-primary text-white font-semibold">5</div>
              <div className="w-10 h-10 text-sm rounded-lg flex items-center justify-center">6</div>
              <div className="w-10 h-10"></div>
            </div>

            {/* Time zone selector */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Time zone</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg bg-white text-sm">
                <option>India Standard Time (11:00am)</option>
              </select>
            </div>
          </div>

          {/* Time slots */}
          <div className="flex-1">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-primary mb-2">
                {formatDate(selectedDate)}
              </h4>
            </div>

            <div className="space-y-3">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-center font-medium">
                1:45am
              </div>
              
              <Button 
                variant="default"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2"
              >
                Next
              </Button>

              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => onTimeSelect(time)}
                  className={`w-full p-3 text-center border border-gray-200 rounded-lg transition-all duration-200 ${
                    selectedTime === time 
                      ? 'border-primary bg-primary/5 text-primary font-medium' 
                      : 'hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {selectedTime && (
          <div className="mt-6">
            <Button 
              onClick={onNext}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
            >
              Continue to Details
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}