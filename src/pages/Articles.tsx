import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  ArrowRight, 
  Newspaper, 
  TrendingUp, 
  Bookmark, 
  Share2, 
  Filter,
  Eye,
  CalendarDays,
  Sparkles,
  Star
} from "lucide-react";
import DemoModal from "@/components/DemoModal";
import Footer from "@/components/Footer";

// Mock articles data
const articles = [
  {
    id: 1,
    title: "The Impact of AI on Healthcare Delivery: A Comprehensive Analysis",
    excerpt: "This research article examines how artificial intelligence is transforming healthcare delivery across multiple dimensions, from diagnosis to patient care management.",
    content: "Artificial Intelligence (AI) has emerged as a transformative force in healthcare...",
    author: "Dr. Sarah Johnson",
    authorTitle: "Chief Medical Officer, HealthTech Innovations",
    authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-15",
    readTime: "15 min read",
    category: "Research",
    tags: ["AI", "Healthcare Delivery", "Technology"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    views: 2347,
    featured: true,
    trending: true,
  },
  {
    id: 2,
    title: "Digital Transformation in Healthcare: Challenges and Opportunities",
    excerpt: "An in-depth analysis of the digital transformation journey in healthcare, identifying key challenges and strategic opportunities for healthcare organizations.",
    content: "Digital transformation represents a fundamental shift in how healthcare organizations...",
    author: "Dr. Michael Chen",
    authorTitle: "Digital Health Consultant",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-14",
    readTime: "12 min read",
    category: "Analysis",
    tags: ["Digital Health", "Transformation", "Strategy"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    views: 1892,
    featured: true,
    trending: true,
  },
  {
    id: 3,
    title: "Patient Data Security in the Age of Cyber Threats",
    excerpt: "A critical examination of cybersecurity challenges facing healthcare organizations and best practices for protecting patient data.",
    content: "As healthcare becomes increasingly digitized, the security of patient data...",
    author: "Dr. Emily Rodriguez",
    authorTitle: "Cybersecurity Expert",
    authorAvatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-13",
    readTime: "10 min read",
    category: "Security",
    tags: ["Cybersecurity", "Data Protection", "HIPAA"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    views: 1656,
    featured: true,
  },
  {
    id: 4,
    title: "The Future of Telemedicine: Post-Pandemic Perspectives",
    excerpt: "Exploring the evolution of telemedicine beyond the pandemic and its role in the future of healthcare delivery.",
    content: "The COVID-19 pandemic accelerated the adoption of telemedicine...",
    author: "Dr. James Wilson",
    authorTitle: "Telemedicine Specialist",
    authorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Telemedicine",
    tags: ["Telemedicine", "Future of Healthcare", "Pandemic"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    views: 1432,
    trending: true,
  },
  {
    id: 5,
    title: "Interoperability Standards in Healthcare: A Technical Deep Dive",
    excerpt: "A technical analysis of healthcare interoperability standards and their implementation challenges.",
    content: "Healthcare interoperability remains one of the most significant challenges...",
    author: "Dr. Lisa Thompson",
    authorTitle: "Health IT Architect",
    authorAvatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-11",
    readTime: "18 min read",
    category: "Technical",
    tags: ["Interoperability", "Standards", "Health IT"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    views: 987,
  },
  {
    id: 6,
    title: "Value-Based Care: Measuring Outcomes and Quality",
    excerpt: "An examination of value-based care models and their impact on healthcare quality and patient outcomes.",
    content: "Value-based care represents a fundamental shift from volume-based to outcome-based...",
    author: "Dr. Robert Martinez",
    authorTitle: "Healthcare Economist",
    authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-10",
    readTime: "14 min read",
    category: "Policy",
    tags: ["Value-Based Care", "Outcomes", "Quality"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    views: 876,
  },
  {
    id: 7,
    title: "Machine Learning in Medical Imaging: Current State and Future Prospects",
    excerpt: "A comprehensive review of machine learning applications in medical imaging and their clinical implications.",
    content: "Machine learning has revolutionized medical imaging in recent years...",
    author: "Dr. Amanda Foster",
    authorTitle: "Radiologist & AI Researcher",
    authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-09",
    readTime: "16 min read",
    category: "Research",
    tags: ["Machine Learning", "Medical Imaging", "AI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    views: 765,
  },
  {
    id: 8,
    title: "Healthcare Workforce Challenges in the Digital Era",
    excerpt: "Analyzing the impact of digital transformation on healthcare workforce dynamics and skill requirements.",
    content: "The digital transformation of healthcare is reshaping workforce requirements...",
    author: "Dr. David Kim",
    authorTitle: "Healthcare Workforce Analyst",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-08",
    readTime: "11 min read",
    category: "Workforce",
    tags: ["Workforce", "Digital Skills", "Training"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    views: 654,
  },
];

const categories = [
  "All",
  "Research",
  "Analysis",
  "Security",
  "Telemedicine",
  "Technical",
  "Policy",
  "Workforce",
];

const tags = [
  "AI",
  "Healthcare Delivery",
  "Technology",
  "Digital Health",
  "Transformation",
  "Strategy",
  "Cybersecurity",
  "Data Protection",
  "HIPAA",
  "Telemedicine",
  "Future of Healthcare",
  "Pandemic",
  "Interoperability",
  "Standards",
  "Health IT",
  "Value-Based Care",
  "Outcomes",
  "Quality",
  "Machine Learning",
  "Medical Imaging",
  "Workforce",
  "Digital Skills",
  "Training",
];

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "views" | "readTime">("date");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => article.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "views":
        return b.views - a.views;
      case "readTime":
        return parseInt(a.readTime) - parseInt(b.readTime);
      default:
        return 0;
    }
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleDemoClose = () => {
    setIsDemoModalOpen(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation onDemoClick={handleDemoClick} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Latest Healthcare Insights</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Articles
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover in-depth analysis, cutting-edge research, and expert perspectives on healthcare technology and industry trends.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-3xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2">
                <div className="flex items-center gap-3 px-4">
                  <Search className="w-6 h-6 text-blue-200" />
                  <Input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-white placeholder:text-blue-200 text-lg py-4 focus:ring-0 focus:outline-none"
                  />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-200 hover:text-white hover:bg-white/10"
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    <Filter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 lg:block ${showSidebar ? 'block' : 'hidden'}`}>
            <div className="sticky top-8 space-y-8">
              {/* Category Filter */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Categories
                  </h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="w-full justify-start rounded-lg"
                    >
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Tags Filter */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Popular Topics</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 12).map((tag) => (
                      <Button
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleTag(tag)}
                        className="rounded-full text-xs"
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Articles */}
            {sortedArticles.filter(article => article.featured).length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Featured Articles</h2>
                    <p className="text-muted-foreground">Handpicked insights from our experts</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {sortedArticles
                    .filter(article => article.featured)
                    .map((article) => (
                      <Card key={article.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                        <div className="relative">
                          <div className="aspect-[16/10] overflow-hidden">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute top-4 left-4 flex items-center gap-2">
                            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                              {article.category}
                            </Badge>
                            {article.trending && (
                              <Badge variant="destructive" className="flex items-center gap-1 bg-red-500/90 backdrop-blur-sm">
                                <TrendingUp className="w-3 h-3" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          <div className="absolute top-4 right-4">
                            <Button variant="ghost" size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                            <span className="mx-2">•</span>
                            <Eye className="w-4 h-4" />
                            {article.views.toLocaleString()} views
                          </div>
                          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent>
                          <CardDescription className="mb-6 line-clamp-3 text-base">
                            {article.excerpt}
                          </CardDescription>
                          
                          <div className="flex items-center gap-3 mb-4">
                            <img
                              src={article.authorAvatar}
                              alt={article.author}
                              className="w-10 h-10 rounded-full ring-2 ring-blue-100"
                            />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{article.author}</p>
                              <p className="text-xs text-muted-foreground">{article.authorTitle}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {article.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs bg-blue-50">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <Link to={`/news/article/${article.id}`}>
                            <Button className="w-full group-hover:bg-blue-600 transition-colors">
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold">All Articles</h2>
                  <p className="text-muted-foreground">Showing {sortedArticles.length} articles</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="lg:hidden"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              
              <div className="space-y-6">
                {sortedArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/5">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        
                        <div className="lg:w-3/5 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="bg-blue-50">
                              {article.category}
                            </Badge>
                            {article.trending && (
                              <Badge variant="destructive" className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                Trending
                              </Badge>
                            )}
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {article.views.toLocaleString()}
                            </span>
                          </div>
                          
                          <CardTitle className="text-2xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                          
                          <CardDescription className="text-base mb-4 line-clamp-3">
                            {article.excerpt}
                          </CardDescription>
                          
                          <div className="flex items-center gap-3 mb-4">
                            <img
                              src={article.authorAvatar}
                              alt={article.author}
                              className="w-12 h-12 rounded-full ring-2 ring-blue-100"
                            />
                            <div className="flex-1">
                              <p className="font-medium">{article.author}</p>
                              <p className="text-sm text-muted-foreground">{article.authorTitle}</p>
                              <p className="text-xs text-muted-foreground">{formatDate(article.date)}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex gap-2">
                            <Link to={`/news/article/${article.id}`} className="flex-1">
                              <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                                Read Full Article
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                            <Button variant="ghost" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              <div className="relative p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Newspaper className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">Stay Updated</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-4">Get Healthcare Insights</h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Receive the latest research, industry trends, and expert perspectives delivered to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
                    />
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      Subscribe
                    </Button>
                  </div>
                </div>
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