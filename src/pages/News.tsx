import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, User, Search, ArrowRight, TrendingUp, Newspaper, BookOpen } from "lucide-react";
import DemoModal from "@/components/DemoModal";

// Mock data for news articles
const featuredArticles = [
  {
    id: 1,
    title: "The Future of Healthcare Technology: AI-Powered Patient Care",
    excerpt: "Discover how artificial intelligence is revolutionizing patient care and improving healthcare outcomes across the industry.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Streamlining Medical Billing: Best Practices for 2024",
    excerpt: "Learn the latest strategies and best practices for optimizing your medical billing processes and improving revenue cycle management.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Billing",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Patient Engagement Strategies That Actually Work",
    excerpt: "Explore proven methods to enhance patient engagement and improve satisfaction scores in your healthcare practice.",
    author: "Dr. Emily Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Patient Care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    featured: true,
  },
];

const latestNews = [
  {
    id: 4,
    title: "New HIPAA Compliance Guidelines for 2024",
    excerpt: "Stay updated with the latest HIPAA compliance requirements and ensure your practice meets all regulatory standards.",
    author: "Legal Team",
    date: "2024-01-14",
    readTime: "4 min read",
    category: "Compliance",
  },
  {
    id: 5,
    title: "Telemedicine Trends: What's Next in Virtual Care",
    excerpt: "Explore emerging trends in telemedicine and how they're shaping the future of healthcare delivery.",
    author: "Dr. James Wilson",
    date: "2024-01-13",
    readTime: "8 min read",
    category: "Telemedicine",
  },
  {
    id: 6,
    title: "Optimizing Practice Workflow with Electronic Health Records",
    excerpt: "Learn how to maximize the efficiency of your practice using advanced EHR features and automation.",
    author: "Tech Team",
    date: "2024-01-11",
    readTime: "6 min read",
    category: "EHR",
  },
  {
    id: 7,
    title: "Revenue Cycle Management: Key Metrics to Track",
    excerpt: "Discover the essential metrics every healthcare practice should monitor for optimal financial performance.",
    author: "Finance Team",
    date: "2024-01-09",
    readTime: "5 min read",
    category: "Finance",
  },
];

const blogPosts = [
  {
    id: 8,
    title: "Building a Patient-Centered Practice: A Complete Guide",
    excerpt: "Transform your healthcare practice into a patient-centered organization with these comprehensive strategies.",
    author: "Dr. Lisa Thompson",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Practice Management",
  },
  {
    id: 9,
    title: "The Impact of Social Determinants on Healthcare Outcomes",
    excerpt: "Understanding how social factors influence patient health and how to address them in your practice.",
    author: "Dr. Robert Martinez",
    date: "2024-01-07",
    readTime: "7 min read",
    category: "Public Health",
  },
  {
    id: 10,
    title: "Digital Transformation in Healthcare: A Roadmap for Success",
    excerpt: "Navigate the digital transformation journey with this comprehensive roadmap for healthcare organizations.",
    author: "Digital Health Team",
    date: "2024-01-06",
    readTime: "12 min read",
    category: "Digital Health",
  },
];

const categories = [
  "All",
  "Technology",
  "Billing",
  "Patient Care",
  "Compliance",
  "Telemedicine",
  "EHR",
  "Finance",
  "Practice Management",
  "Public Health",
  "Digital Health",
];

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const filteredArticles = [...featuredArticles, ...latestNews, ...blogPosts].filter(
    (article) =>
      (selectedCategory === "All" || article.category === selectedCategory) &&
      (searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleDemoClose = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDemoClick={handleDemoClick} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare News & Insights
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest trends, best practices, and innovations in healthcare technology and patient care.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <Tabs defaultValue="featured" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="featured" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Featured
              </TabsTrigger>
              <TabsTrigger value="latest" className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                Latest News
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Blog
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="space-y-8">
              {/* Featured Articles Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArticles
                  .filter((article) =>
                    selectedCategory === "All" || article.category === selectedCategory
                  )
                  .map((article) => (
                    <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">
                          {article.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Link to={`/news/article/${article.id}`}>
                          <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="latest" className="space-y-6">
              {/* Latest News List */}
              <div className="grid gap-6">
                {latestNews
                  .filter((article) =>
                    selectedCategory === "All" || article.category === selectedCategory
                  )
                  .map((article) => (
                    <Card key={article.id} className="group hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{article.category}</Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime}
                              </span>
                            </div>
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="mb-4 line-clamp-2">
                              {article.excerpt}
                            </CardDescription>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {article.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(article.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <Link to={`/news/article/${article.id}`}>
                            <Button variant="ghost" className="group-hover:bg-primary group-hover:text-white transition-colors">
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="blog" className="space-y-6">
              {/* Blog Posts List */}
              <div className="grid gap-6">
                {blogPosts
                  .filter((article) =>
                    selectedCategory === "All" || article.category === selectedCategory
                  )
                  .map((article) => (
                    <Card key={article.id} className="group hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{article.category}</Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime}
                              </span>
                            </div>
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="mb-4 line-clamp-2">
                              {article.excerpt}
                            </CardDescription>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {article.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(article.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" className="group-hover:bg-primary group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest healthcare insights and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button variant="cta">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onDemoClick={handleDemoClick} />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleDemoClose} />
    </div>
  );
} 