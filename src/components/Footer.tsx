import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Heart,
  Shield,
  FileText,
  HelpCircle,
  Briefcase,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  onDemoClick: () => void;
}

const footerLinks = {
  products: [
    { label: "Electronic Health Records", href: "/products/ehr" },
    { label: "e-Prescription", href: "/products/e-prescription" },
    { label: "Patient Engagement", href: "/products/patient-engagement" },
    { label: "Practice Management", href: "/products/practice-management" },
  ],
  services: [
    { label: "Medical Billing Services", href: "/services/medical-billing" },
    { label: "Eligibility Check & PreAuthorization", href: "/services/eligibility-check" },
    { label: "Schedule Automation", href: "/services/schedule-automation" },
    { label: "Clinical Documentation Support", href: "/services/clinical-documentation" },
    { label: "Technology Interface Services", href: "/services/technology-interface" },
    { label: "Solutions for MultiLocation Practice", href: "/services/multilocation" },
    { label: "Revenue-Cycle Management", href: "/services/revenue-cycle" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "News & Blog", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Cost Disclosure", href: "/cost-disclosure" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Support Center", href: "/support" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/patientclick", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/patientclick", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/patientclick", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/patientclick", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/patientclick", label: "YouTube" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "1-877-901-9990",
    href: "tel:1-877-901-9990",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@patientclick.com",
    href: "mailto:support@patientclick.com",
  }
];



export default function Footer({ onDemoClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border">
      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6" onClick={handleLinkClick}>
              <img 
                src="https://pccoredemo.mypatientclick.com/img/Logo/PCLogo.png" 
                alt="PatientClick Logo" 
                className="h-10 w-auto"
              />
            </Link>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering healthcare providers with innovative technology solutions. 
              Streamline your practice, enhance patient care, and boost your bottom line.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <contact.icon className="w-4 h-4 group-hover:text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{contact.label}</div>
                    <div className="text-muted-foreground">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-6">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-8">
            

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} PatientClick. All rights reserved.</span>
              
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-full"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <Link 
                to="/hipaa-compliant" 
                className="flex items-center space-x-1 hover:text-primary transition-colors"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }, 100);
                }}
              >
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </Link>
              <Link 
                to="/hitech-certified" 
                className="flex items-center space-x-1 hover:text-primary transition-colors"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }, 100);
                }}
              >
                <FileText className="w-4 h-4" />
                <span>HITECH Certified</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 