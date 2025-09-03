import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, ArrowLeft, ArrowRight, Award, Users, TrendingUp, Heart } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Family Medicine Physician",
    practice: "Johnson Family Health",
    location: "Austin, TX",
    rating: 5,
    content: "PatientClick has transformed our practice. The EHR system is intuitive, and our patient engagement has increased by 40%. The support team is exceptional - they're always there when we need them.",
    results: "40% increase in patient engagement, 30% reduction in documentation time",
    avatar: "👩‍⚕️",
    highlight: "40%"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Cardiologist",
    practice: "Heart Care Specialists",
    location: "Seattle, WA",
    rating: 5,
    content: "The integration between all PatientClick modules is seamless. Our billing efficiency has improved dramatically, and patients love the convenience of the patient portal.",
    results: "25% faster billing process, 95% patient portal adoption",
    avatar: "👨‍⚕️",
    highlight: "95%"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Pediatrician",
    practice: "Little Ones Pediatrics",
    location: "Miami, FL",
    rating: 5,
    content: "As a pediatric practice, we needed something that could handle complex scheduling and patient communications. PatientClick exceeded our expectations. Parents love the secure messaging feature.",
    results: "50% reduction in phone calls, 35% improvement in appointment scheduling",
    avatar: "👩‍⚕️",
    highlight: "50%"
  },
  {
    id: 4,
    name: "Dr. Robert Kim",
    title: "Internal Medicine",
    practice: "Metro Internal Medicine",
    location: "Chicago, IL",
    rating: 5,
    content: "We've been using PatientClick for 2 years now. The ROI is clear - we've increased our patient capacity by 30% without adding staff. The telemedicine features were a game-changer during COVID.",
    results: "30% increase in patient capacity, $150k annual savings",
    avatar: "👨‍⚕️",
    highlight: "$150k"
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    title: "Dermatologist",
    practice: "Clear Skin Dermatology",
    location: "Phoenix, AZ",
    rating: 5,
    content: "The clinical decision support and prescription management have significantly improved our patient safety. We've had zero prescription errors since implementing PatientClick.",
    results: "Zero prescription errors, 45% faster clinical documentation",
    avatar: "👩‍⚕️",
    highlight: "Zero"
  },
  {
    id: 6,
    name: "Dr. James Williams",
    title: "Orthopedic Surgeon",
    practice: "Mobility Orthopedics",
    location: "Denver, CO",
    rating: 5,
    content: "PatientClick's practice management tools have streamlined our entire operation. From scheduling to billing, everything works together perfectly. Our revenue cycle has never been stronger.",
    results: "20% revenue increase, 60% faster claim processing",
    avatar: "👨‍⚕️",
    highlight: "60%"
  }
];

const stats = [
  { icon: Users, value: "10,000+", label: "Healthcare Providers" },
  { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Heart, value: "2M+", label: "Patients Served" }
];

export default function Testimonials() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              <Star className="w-4 h-4 mr-2" />
              Real Stories, Real Results
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              What Healthcare Providers Say
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Don't just take our word for it. See how PatientClick is transforming healthcare 
              practices across the country with measurable results and improved patient care.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how healthcare providers are achieving remarkable results with PatientClick
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm" data-aos="zoom-in">
              <CardContent className="p-8 lg:p-16">
                <div className="flex items-center justify-between mb-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={prevTestimonial}
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 border-2 hover:bg-blue-50 hover:border-blue-500 transition-all duration-300"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentIndex + 1} of {testimonials.length}
                    </div>
                    <Button
                      onClick={nextTestimonial}
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 border-2 hover:bg-blue-50 hover:border-blue-500 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <blockquote className="text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-12 font-medium">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 mb-12">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                    <h4 className="font-bold text-green-800 text-lg">Measurable Results</h4>
                  </div>
                  <p className="text-gray-700 text-lg">{currentTestimonial.results}</p>
                  <div className="mt-4 inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-bold text-lg">
                    {currentTestimonial.highlight} Improvement
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                      {currentTestimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-xl">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {currentTestimonial.title}
                      </div>
                      <div className="text-gray-600">
                        {currentTestimonial.practice}, {currentTestimonial.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Join Thousands of Satisfied Providers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PatientClick is trusted by healthcare professionals nationwide. 
                Here's what they have to say about their experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className="group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => setCurrentIndex(index)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-lg shadow-lg">
                        {testimonial.avatar}
                      </div>
                    </div>

                    <blockquote className="text-gray-700 mb-6 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                      <div className="text-sm text-gray-600 font-medium">Key Results:</div>
                      <div className="text-blue-600 font-semibold">{testimonial.highlight} improvement</div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-bold text-gray-800 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {testimonial.title}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.practice}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center" data-aos="fade-up">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Start Your Success Story Today
              </Button>
              <p className="text-gray-600 mt-4">Join thousands of healthcare providers who trust PatientClick</p>
            </div>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}