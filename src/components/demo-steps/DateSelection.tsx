import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface DateSelectionProps {
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
  onNext: () => void;
}

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function DateSelection({ selectedDate, onDateSelect, onNext }: DateSelectionProps) {
  const [currentMonth, setCurrentMonth] = useState(8); // September (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 7 : day; // Convert Sunday (0) to 7 for Monday-first week
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Add empty cells for days before the first day of month
    for (let i = 1; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = selectedDate === dateStr;
      const isAvailable = day >= 3; // Only dates from 3rd onwards are available

      days.push(
        <button
          key={day}
          onClick={() => isAvailable && onDateSelect(dateStr)}
          disabled={!isAvailable}
          className={`w-10 h-10 text-sm rounded-lg transition-all duration-200 ${
            isSelected 
              ? 'bg-primary text-white font-semibold shadow-md' 
              : isAvailable 
                ? 'text-primary hover:bg-primary/10 font-medium' 
                : 'text-gray-300 cursor-not-allowed'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
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
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Select a Date & Time</h3>
        
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h4 className="text-lg font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </h4>
          <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Days of Week Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-6">
          {renderCalendar()}
        </div>

        {/* Time zone selector */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Time zone</label>
          <select className="w-full p-2 border border-gray-300 rounded-lg bg-white">
            <option>India Standard Time (10:53am)</option>
          </select>
        </div>

        {selectedDate && (
          <Button 
            onClick={onNext}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
          >
            Continue to Time Selection
          </Button>
        )}
      </div>
    </div>
  );
}