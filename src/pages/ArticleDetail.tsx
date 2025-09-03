import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, Tag } from "lucide-react";
import DemoModal from "@/components/DemoModal";

// Mock article data - in a real app, this would come from an API
const articleData = {
  id: 1,
  title: "The Future of Healthcare Technology: AI-Powered Patient Care",
  excerpt: "Discover how artificial intelligence is revolutionizing patient care and improving healthcare outcomes across the industry.",
  content: `
    <p class="lead">Artificial Intelligence (AI) has emerged as a transformative force in healthcare, promising to revolutionize how we diagnose, treat, and manage patient care. As healthcare organizations continue to adopt AI-powered solutions, understanding the current landscape and future implications becomes crucial for healthcare professionals and administrators alike.</p>

    <h2>The Current State of AI in Healthcare</h2>
    <p>AI applications in healthcare span across multiple domains, from diagnostic imaging to predictive analytics. Machine learning algorithms are now capable of analyzing medical images with accuracy rates that rival or exceed human radiologists. Natural language processing (NLP) systems can extract meaningful insights from unstructured clinical notes, enabling better decision support for healthcare providers.</p>

    <p>One of the most significant developments has been the integration of AI into electronic health records (EHR) systems. These intelligent systems can now:</p>
    <ul>
      <li>Automatically identify potential drug interactions</li>
      <li>Flag patients at risk for specific conditions</li>
      <li>Suggest evidence-based treatment protocols</li>
      <li>Optimize appointment scheduling and resource allocation</li>
    </ul>

    <h2>AI-Powered Patient Engagement</h2>
    <p>Patient engagement has become a critical factor in healthcare outcomes, and AI is playing a pivotal role in enhancing this aspect. Intelligent chatbots and virtual assistants are providing 24/7 patient support, answering questions, and guiding patients through their care journey.</p>

    <p>These AI-powered tools can:</p>
    <ul>
      <li>Provide personalized health recommendations</li>
      <li>Monitor patient symptoms and alert healthcare providers when necessary</li>
      <li>Offer medication reminders and adherence support</li>
      <li>Facilitate remote monitoring and telehealth consultations</li>
    </ul>

    <h2>Predictive Analytics and Preventive Care</h2>
    <p>Perhaps one of the most promising applications of AI in healthcare is predictive analytics. By analyzing vast amounts of patient data, AI systems can identify patterns and predict potential health issues before they become critical.</p>

    <p>This capability enables healthcare providers to:</p>
    <ul>
      <li>Intervene early in disease progression</li>
      <li>Develop personalized prevention strategies</li>
      <li>Optimize resource allocation based on predicted needs</li>
      <li>Improve population health management</li>
    </ul>

    <h2>Challenges and Considerations</h2>
    <p>While the potential of AI in healthcare is immense, several challenges must be addressed to ensure successful implementation:</p>

    <h3>Data Quality and Privacy</h3>
    <p>AI systems require high-quality, comprehensive data to function effectively. Healthcare organizations must ensure data accuracy, completeness, and security while maintaining patient privacy and complying with regulations like HIPAA.</p>

    <h3>Integration and Interoperability</h3>
    <p>Integrating AI solutions with existing healthcare systems can be complex. Ensuring interoperability between different platforms and maintaining seamless workflows is essential for successful adoption.</p>

    <h3>Clinical Validation</h3>
    <p>AI algorithms must undergo rigorous clinical validation to ensure their accuracy and reliability. Healthcare providers need confidence in AI recommendations before incorporating them into clinical decision-making.</p>

    <h2>The Future Outlook</h2>
    <p>As AI technology continues to evolve, we can expect to see even more sophisticated applications in healthcare. The integration of AI with emerging technologies like the Internet of Medical Things (IoMT) and 5G networks will enable real-time monitoring and intervention capabilities.</p>

    <p>Healthcare organizations that embrace AI strategically will be better positioned to:</p>
    <ul>
      <li>Improve patient outcomes and satisfaction</li>
      <li>Reduce healthcare costs through efficiency gains</li>
      <li>Address workforce shortages through automation</li>
      <li>Provide more personalized and accessible care</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The future of healthcare technology is undeniably intertwined with AI. As we move forward, healthcare organizations must balance innovation with responsibility, ensuring that AI solutions enhance rather than replace the human element of care. By embracing AI thoughtfully and strategically, we can create a healthcare system that is more efficient, effective, and patient-centered than ever before.</p>
  `,
  author: "Dr. Sarah Johnson",
  authorTitle: "Chief Medical Officer, HealthTech Innovations",
  authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
  authorBio: "Dr. Sarah Johnson is a board-certified physician with over 15 years of experience in healthcare technology and digital transformation. She has led numerous AI implementation projects and is a recognized expert in healthcare innovation.",
  date: "2024-01-15",
  readTime: "15 min read",
  category: "Technology",
  tags: ["AI", "Healthcare Technology", "Patient Care", "Digital Health", "Innovation"],
  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
  views: 2347,
  featured: true,
};

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "Digital Transformation in Healthcare: Challenges and Opportunities",
    excerpt: "An in-depth analysis of the digital transformation journey in healthcare.",
    author: "Dr. Michael Chen",
    date: "2024-01-14",
    readTime: "12 min read",
    category: "Analysis",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Patient Data Security in the Age of Cyber Threats",
    excerpt: "A critical examination of cybersecurity challenges facing healthcare organizations.",
    author: "Dr. Emily Rodriguez",
    date: "2024-01-13",
    readTime: "10 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "The Future of Telemedicine: Post-Pandemic Perspectives",
    excerpt: "Exploring the evolution of telemedicine beyond the pandemic.",
    author: "Dr. James Wilson",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Telemedicine",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
  },
];

export default function ArticleDetail() {
  const { id } = useParams();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/news">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{articleData.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {articleData.readTime}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {articleData.views} views
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {articleData.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {articleData.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={articleData.authorAvatar}
              alt={articleData.author}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-semibold text-lg">{articleData.author}</p>
              <p className="text-muted-foreground">{articleData.authorTitle}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(articleData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Bookmark
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={articleData.image}
            alt={articleData.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: articleData.content }}
            className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>ul]:pl-6 [&>li]:mb-2 [&>.lead]:text-xl [&>.lead]:text-muted-foreground [&>.lead]:font-medium"
          />
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {articleData.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Author Bio */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">About the Author</h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={articleData.authorAvatar}
                  alt={articleData.author}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-semibold mb-2">{articleData.author}</h4>
                  <p className="text-muted-foreground mb-3">{articleData.authorTitle}</p>
                  <p className="text-sm leading-relaxed">{articleData.authorBio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Articles */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest healthcare insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="cta">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <DemoModal isOpen={isDemoModalOpen} onClose={handleDemoClose} />
    </div>
  );
} 