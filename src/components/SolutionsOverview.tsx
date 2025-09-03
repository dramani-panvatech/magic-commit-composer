import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, DollarSign, Users, Calendar, Pill, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: FileText,
    title: "EHR",
    description: "Easy-to-use web based electronic health record EHR/EMR system that saves physicians time and staff time and improves staff efficiency.",
    href: "/products/ehr",
    color: "bg-blue-50 text-blue-600",
    hoverColor: "bg-blue-100 text-blue-700"
  },
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description: "PatientClick's optimized revenue cycle management system would allow you to create streamline income flow.",
    href: "/products/revenue-cycle",
    color: "bg-purple-50 text-purple-600",
    hoverColor: "bg-purple-100 text-purple-700"
  },


  {
    icon: Users,
    title: "Patient Engagement",
    description: "Learn more about our Patient Engagement Tools for productivity increase.",
    href: "/products/patient-engagement",
    color: "bg-orange-50 text-orange-600",
    hoverColor: "bg-orange-100 text-orange-700"
  },
  {
    icon: Calendar,
    title: "Practice Management",
    description: "Improve your practice performance with our next generation Practice Management Solution.",
    href: "/products/practice-management",
    color: "bg-green-50 text-green-600",
    hoverColor: "bg-green-100 text-green-700"
  },
  {
    icon: Pill,
    title: "Telemedicine",
    description: "Healthcare delivered remotely using technology like video calls and apps.",
    href: "/products/telemedicine",
    color: "bg-red-50 text-red-600",
    hoverColor: "bg-red-100 text-red-700"
  }
];

export default function SolutionsOverview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wide">
              Complete Platform
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything Your Practice
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Needs in One Place
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Streamline operations, enhance patient care, and boost revenue with our 
            integrated healthcare technology suite designed for modern practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <Link
              key={solution.title}
              to={solution.href}
              className="group block"
            >
              <Card className="h-full group relative overflow-hidden hover:shadow-xl transition-all duration-700 ease-out border border-gray-100 bg-white hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}>
                
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Icon with enhanced styling */}
                <CardHeader className="pb-6 relative z-10">
                  <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 ${solution.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <solution.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 text-center mb-4">
                    {solution.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <p className="text-gray-600 leading-relaxed text-center mb-8 min-h-[4rem] flex items-center">
                    {solution.description}
                  </p>
                  
                  {/* Enhanced CTA */}
                  <div className="text-center">
                    <div className="inline-flex items-center text-primary font-semibold text-lg group-hover:text-primary-hover group-hover:translate-x-2 transition-all duration-300">
                      Explore Solution
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-br from-primary/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-20"></div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust PatientClick to streamline their operations and improve patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}