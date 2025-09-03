import { Leaf, Brain, Clock, Ambulance } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "EHR Compliance & Quality Care",
    description: "Stay compliant and deliver better care with PatientClick’s Certified EHR. Simplify documentation, secure patient data, and meet Meaningful Use standards—boosting both efficiency and outcomes.",
  },
  {
    icon: Brain,
    title: "Clinical Workflow Optimization",
    description: "Boost practice efficiency by identifying and eliminating workflow bottlenecks. Streamline operations, reduce admin burden, and improve both provider productivity and patient satisfaction.",
  },
  {
    icon: Clock,
    title: "Revenue Cycle Management",
    description: "PatientClick’s web-based tools streamline billing and collections—from registration to payment. Improve cash flow, reduce denials, and stay focused on delivering quality care.",
  },
  {
    icon: Ambulance,
    title: "From Go-Live to Great Care",
    description: "Our Implementation Specialists provide hands-on training and personalized support to ensure a smooth, efficient EHR launch—so you can focus on patient care from day one.",
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="flex items-start space-x-4 p-6 hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Blue square icon container */}
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-3 ${
                  service.title === "Revenue Cycle Management" ? "text-gray-600" : "text-blue-600"
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 