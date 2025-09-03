import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "PatientClick has revolutionized our practice. The intuitive interface and comprehensive features have improved our efficiency by 40% while enhancing patient satisfaction.",
    author: "Dr. Sarah Johnson",
    role: "Family Medicine Physician",
    practice: "Westside Medical Group",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    content: "The integration between EHR and billing is seamless. We've reduced our administrative overhead significantly and can focus more on patient care.",
    author: "Dr. Michael Chen",
    role: "Internal Medicine",
    practice: "Valley Health Clinic",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    content: "Exceptional support team and reliable platform. PatientClick understands the unique needs of healthcare providers and delivers solutions that actually work.",
    author: "Dr. Emily Rodriguez",
    role: "Pediatric Specialist",
    practice: "Children's Care Center",
    rating: 5,
    avatar: "ER"
  }
];

export default function TestimonialsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers are saying about their experience with PatientClick
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-trust">
            <CardContent className="p-8 lg:p-12">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              
              <blockquote className="text-xl lg:text-2xl text-center text-trust-blue font-medium leading-relaxed mb-8">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {currentTestimonial.avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-trust-blue">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.role} • {currentTestimonial.practice}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full p-2 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-2 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Link to full testimonials */}
        <div className="text-center mt-12">
          <Link to="/testimonials" onClick={handleLinkClick}>
            <Button variant="outline" size="lg" className="bg-white/50 hover:bg-white">
              View All Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}