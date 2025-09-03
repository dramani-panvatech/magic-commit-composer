import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle,
  Search,
  MessageSquare,
  Phone,
  Mail,
  BookOpen,
  Settings,
  Shield,
  CheckCircle,
  Users,
  FileText,
  Video,
  Star,
  TrendingUp
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    description: "Essential information to get you started with PatientClick",
    questions: [
      {
        question: "How do I set up my PatientClick account?",
        answer: "Setting up your PatientClick account is simple. After signing up, you'll receive a welcome email with setup instructions. Our implementation team will guide you through the process, including data migration, user training, and system configuration. The entire setup typically takes 2-4 weeks depending on your practice size."
      },
      {
        question: "What are the system requirements for PatientClick?",
        answer: "PatientClick is a cloud-based solution that works on any modern web browser (Chrome, Firefox, Safari, Edge). You need a stable internet connection and a computer or tablet. We recommend a minimum of 4GB RAM and a modern operating system for optimal performance."
      },
      {
        question: "How long does it take to migrate my existing data?",
        answer: "Data migration time varies based on the amount of data and complexity. For most practices, the process takes 1-2 weeks. We work with your existing system to ensure a smooth transition with minimal disruption to your practice operations."
      },
      {
        question: "Do you offer training for my staff?",
        answer: "Yes! We provide comprehensive training for all staff members at no additional cost. This includes live training sessions, video tutorials, and ongoing support. We also offer role-specific training for different staff positions."
      }
    ]
  },
  {
    id: "account-management",
    title: "Account Management",
    icon: Settings,
    color: "from-green-500 to-green-600",
    description: "Managing your account, users, and permissions",
    questions: [
      {
        question: "How do I add new users to my account?",
        answer: "To add new users, go to Settings > User Management. Click 'Add User' and fill in their information. You can assign specific roles and permissions to each user. New users will receive an email invitation to set up their login credentials."
      },
      {
        question: "Can I customize user permissions?",
        answer: "Absolutely! PatientClick offers granular permission controls. You can customize what each user can see and do, from basic patient access to full administrative privileges. This ensures data security while maintaining workflow efficiency."
      },
      {
        question: "How do I reset a user's password?",
        answer: "Administrators can reset passwords through the User Management section. Users can also reset their own passwords using the 'Forgot Password' link on the login page. All password resets are secure and require email verification."
      },
      {
        question: "What happens if I need to deactivate a user account?",
        answer: "You can deactivate user accounts instantly through the User Management panel. Deactivated users lose access immediately, but their data remains intact for audit purposes. You can reactivate accounts at any time."
      }
    ]
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
    description: "Understanding billing, payments, and pricing",
    questions: [
      {
        question: "What are your pricing plans?",
        answer: "We offer flexible pricing plans based on your practice size and needs. Our plans start at $299/month for small practices and scale up for larger organizations. All plans include core features, support, and updates. Contact our sales team for a custom quote."
      },
      {
        question: "How do I update my billing information?",
        answer: "You can update your billing information anytime in Settings > Billing. We accept all major credit cards and ACH payments. Changes take effect immediately, and you'll receive a confirmation email for any updates."
      },
      {
        question: "Do you offer discounts for annual payments?",
        answer: "Yes! We offer a 10% discount for annual payments. This can be selected during signup or changed anytime in your billing settings. Annual payments help reduce costs and provide better budget predictability."
      },
      {
        question: "What's included in my subscription?",
        answer: "Your subscription includes the full PatientClick platform, unlimited users, 24/7 support, regular updates, and data backup. We also provide implementation support, training, and ongoing assistance at no additional cost."
      }
    ]
  },
  {
    id: "technical-support",
    title: "Technical Issues",
    icon: CheckCircle,
    color: "from-orange-500 to-orange-600",
    description: "Resolving technical problems and system issues",
    questions: [
      {
        question: "What should I do if the system is running slowly?",
        answer: "First, try refreshing your browser and clearing the cache. If the issue persists, check your internet connection. For ongoing performance issues, contact our support team. We monitor system performance and can help optimize your setup."
      },
      {
        question: "How do I report a bug or technical issue?",
        answer: "You can report issues through our support portal, by calling our 24/7 support line, or using the in-app feedback feature. Include as much detail as possible, including screenshots and steps to reproduce the issue."
      },
      {
        question: "Is my data backed up automatically?",
        answer: "Yes! We perform automatic backups multiple times daily. Your data is stored securely in redundant cloud servers with enterprise-grade security. We also offer point-in-time recovery for critical data."
      },
      {
        question: "What happens during system maintenance?",
        answer: "We schedule maintenance during off-peak hours and provide advance notice. Most updates are seamless and don't require downtime. For major updates, we schedule maintenance windows and notify all users in advance."
      }
    ]
  }
];

const popularQuestions = [
  {
    question: "How secure is my patient data?",
    answer: "PatientClick is HIPAA compliant and uses enterprise-grade security. We employ encryption, regular security audits, and strict access controls to protect your data. Our security measures exceed industry standards."
  },
  {
    question: "Can I integrate PatientClick with my existing systems?",
    answer: "Yes! We offer extensive integration capabilities with most practice management systems, EHRs, and third-party applications. Our API allows for custom integrations, and we work with your existing vendors."
  },
  {
    question: "Do you offer mobile access?",
    answer: "Absolutely! PatientClick is fully responsive and works on all devices. We also offer native mobile apps for iOS and Android, providing full functionality on the go for you and your staff."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 support through phone, email, and live chat. Our support team includes healthcare technology experts who understand your workflow. We also offer training, implementation support, and ongoing assistance."
  }
];

export default function FAQ() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.questions.some(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6" data-aos="fade-down">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-trust-blue mb-6" data-aos="fade-up">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
              Find quick answers to common questions about PatientClick. Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-4">
                Popular Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Quick answers to the most commonly asked questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {popularQuestions.map((item, index) => (
                <Card 
                  key={index}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Star className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-trust-blue mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.question}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Category Navigation */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-trust-blue mb-8 text-center">Browse by Category</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {faqCategories.map((category) => (
                  <Card 
                    key={category.id}
                    className={`cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white ${
                      activeCategory === category.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-trust-blue mb-2">{category.title}</h4>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mb-16">
              {filteredCategories.map((category) => (
                <div key={category.id} className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-trust-blue">{category.title}</h3>
                  </div>
                  
                  <Card className="shadow-xl border-0 bg-white">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                              <span className="font-semibold text-trust-blue">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Contact Support */}
            <div className="text-center">
              <Card className="shadow-2xl border-0 bg-gradient-to-r from-primary/5 to-primary/10 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-trust-blue mb-4">Still Need Help?</h3>
                  <p className="text-muted-foreground mb-6">
                    Can't find the answer you're looking for? Our support team is here to help 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="cta" size="lg" className="h-12 px-8">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Support
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
} 