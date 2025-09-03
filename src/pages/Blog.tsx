import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import DemoModal from "@/components/DemoModal";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "How to Prepare Your Patients For Telemedicine Transition",
    excerpt: "Learn the essential steps to help your patients transition smoothly to telemedicine services. Discover best practices for patient education, technology setup, and communication strategies that will ensure a successful virtual care experience.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Telemedicine: An Overview on Licensing and Reimbursement",
    excerpt: "Navigate the complex landscape of telemedicine licensing requirements and reimbursement policies. This comprehensive guide covers state-by-state regulations, Medicare/Medicaid policies, and private insurance considerations for healthcare providers.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Tips for Improving Your Revenue Cycle Management",
    excerpt: "Optimize your practice's financial performance with proven revenue cycle management strategies. From claims processing to patient collections, learn how to streamline operations and maximize revenue while reducing administrative burden.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Robotics in Healthcare Promises to Revolutionize Industry",
    excerpt: "Explore how robotics technology is transforming healthcare delivery across various specialties. From surgical robots to automated medication dispensing, discover the latest innovations and their impact on patient care and clinical outcomes.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Why Telemedicine is Among Top 10 Trends in Healthcare for 2020",
    excerpt: "Understand why telemedicine has become one of the most significant healthcare trends. Explore the factors driving adoption, market growth projections, and how virtual care is reshaping the future of healthcare delivery worldwide.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "5 Tools patients can use to save money in Healthcare",
    excerpt: "Empower your patients with practical tools and strategies to reduce healthcare costs. From price comparison tools to prescription discount programs, help patients make informed decisions about their healthcare spending.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "How To Quickly and Successfully Implement Digital Medicine To Your Practice",
    excerpt: "Get a step-by-step guide to implementing digital health solutions in your medical practice. Learn about technology selection, staff training, workflow integration, and change management strategies for successful digital transformation.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Why Patients Prefer Video-Based Follow-up Over In-Person Visits",
    excerpt: "Discover the reasons behind patients' growing preference for video-based follow-up appointments. Learn about convenience factors, cost savings, and how virtual visits can improve patient satisfaction and engagement.",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Top 5 Features Of The Best EHR Software Companies",
    excerpt: "Identify the key features that distinguish leading EHR software providers. From user interface design to interoperability capabilities, understand what makes an EHR system truly effective for modern healthcare practices.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    title: "5 Reputation Management Strategies For Physician and Medical Practice",
    excerpt: "Build and maintain a strong online reputation for your medical practice. Learn effective strategies for managing online reviews, social media presence, and patient feedback to enhance your practice's credibility and attract new patients.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    title: "EVERYTHING YOU NEED TO KNOW ABOUT TELEHEALTH POLICY 2019",
    excerpt: "Stay informed about the significant changes in telehealth policy that occurred in 2018 and 2019. This comprehensive overview covers regulatory updates, reimbursement changes, and their implications for healthcare providers.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    title: "PatientClick Launches Ground-breaking Electronic Medical Record-keeping for Physicians & Small Clinics",
    excerpt: "Learn about PatientClick's innovative EHR solution designed specifically for physicians and small clinics. Discover how our comprehensive medical record-keeping system can streamline your practice operations and improve patient care.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
  },
  {
    id: 13,
    title: "The Future of Healthcare Technology: AI and Machine Learning",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing healthcare. From diagnostic assistance to predictive analytics, discover the cutting-edge technologies that are shaping the future of medical care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const filteredPosts = blogPosts.filter((post) => {
    return searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleDemoClose = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onDemoClick={handleDemoClick} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Blog</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert insights, best practices, and industry trends to help you optimize your healthcare practice.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
            />
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link to={`/news/article/${post.id}`}>
                      <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Blog</h2>
          <p className="text-gray-600 mb-6">
            Get the latest healthcare insights and best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      <DemoModal isOpen={isDemoModalOpen} onClose={handleDemoClose} />
    </div>
  );
} 