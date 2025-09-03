import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/pc-logo.png";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    subItems: [
      { label: "Electronic Health Records", href: "/products/ehr" },
      { label: "Revenue Cycle Management", href: "/products/revenue-cycle" },
      { label: "Patient Engagement", href: "/products/patient-engagement" },
      { label: "Practice Management", href: "/products/practice-management" },
      { label: "Telemedicine", href: "/products/telemedicine" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Medical Billing Services", href: "/services/medical-billing" },
      { label: "Eligibility Check & PreAuthorization", href: "/services/eligibility-check" },
      { label: "Schedule Automation", href: "/services/schedule-automation" },
      { label: "Clinical Documentation Support", href: "/services/clinical-documentation" },
      { label: "Technology Interface Services", href: "/services/technology-interface" },
      { label: "Solutions for MultiLocation Practice", href: "/services/multilocation" },
      { label: "Revenue-Cycle Management", href: "/services/revenue-cycle" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "News",
    href: "/news",
    subItems: [
      { label: "Blog", href: "/news/blog" },
      { label: "Articles", href: "/news/articles" },
    ],
  },
  { label: "Cost Disclosure", href: "/cost-disclosure" },
  {
    label: "Contact Us",
    href: "/contact",
    subItems: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

interface NavigationProps {
  onDemoClick: () => void;
}

export default function Navigation({ onDemoClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Scroll to top after a short delay to ensure navigation is complete
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 150);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    return href !== "/" && location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 me-4 sm:me-6 lg:me-10" onClick={handleLinkClick}>
            <img 
              src={logo} 
              alt="PatientClick Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <span>{item.label}</span>
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-lg shadow-card animate-scale-in">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              onClick={onDemoClick}
              variant="cta"
              size="sm"
              className="hidden xs:inline-flex text-xs sm:text-sm px-2 sm:px-3"
            >
              Request Demo
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto bg-white">
            <div className="py-4 space-y-0">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border/50 last:border-b-0">
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block px-4 py-4 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-muted/50"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="bg-muted/20 space-y-0">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={handleLinkClick}
                          className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors border-l-2 border-transparent hover:border-primary/20"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4 pb-4">
                <Button
                  onClick={() => {
                    onDemoClick();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="cta"
                  size="sm"
                  className="w-full py-3"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}