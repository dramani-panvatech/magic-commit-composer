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
    <section className="py-16 lg:py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to run a modern healthcare practice,
            all integrated seamlessly in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-out border-0 bg-white/80 backdrop-blur-sm animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${solution.color} group-hover:${solution.hoverColor} group-hover:scale-110 transition-all duration-300`}>
                  <solution.icon className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl text-trust-blue group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-hover group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </CardContent>

              {/* Subtle border animation on hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}