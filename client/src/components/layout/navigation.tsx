import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail, ChevronRight, Home, Info, Package, Wrench, FolderOpen, MessageSquare, PhoneCall, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";
import logoImage from "@assets/FB_IMG_1753880100791 - Faridah Sulaimon_1753982843756.jpg";

// Flat navigation structure
const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/products", label: "Products", icon: Package },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/contact", label: "Contact", icon: PhoneCall },
];

const socialMediaLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/jumiamisolar1_?igsh=MTBhaDNvYWl0ZTMwYw==",
    icon: Instagram
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@oloriejires?_t=ZS-8ySaWTV8Ry3&_r=1",
    icon: ExternalLink
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/bukkysulyman?s=08",
    icon: Twitter
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/16oRet54tR/",
    icon: Facebook
  }
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Top Contact Bar - Simplified */}
      <div className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">08118887425</span>
              <span className="md:hidden">08118887425</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">info@jumiamisolar.com</span>
              <span className="lg:hidden">info@jumiamisolar.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Free Solar Consultation</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Cleaner */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100" 
            : "bg-white/90 backdrop-blur-lg"
      }`}
        style={{ top: isScrolled ? '0' : '0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo - Simplified */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
            <img 
              src={logoImage}
              alt="Jumiami Solar Shop Logo" 
                  className="h-10 w-auto sm:h-14 transition-all duration-300 group-hover:scale-110"
            />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-[hsl(0,0%,10%)]">Jumiami Solar</h1>
                <p className="text-xs text-[hsl(19,100%,58%)] font-medium">Sustainable Energy</p>
              </div>
          </Link>
          
            {/* Desktop Navigation - Flat Structure */}
            <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                  className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  location === item.href 
                      ? "text-[hsl(19,100%,58%)] bg-[hsl(19,100%,58%)]/10" 
                      : "text-[hsl(0,0%,10%)] hover:text-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,58%)]/5"
                }`}
              >
                {item.label}
                  <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                    location === item.href ? 'w-full left-0' : ''
                  }`}></div>
              </Link>
            ))}
          </div>
          
            {/* CTA Button - Simplified */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </Button>
            </div>
            
            {/* Mobile Navigation - Cleaner */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden relative group touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open mobile menu"
                >
                  <div className="relative w-6 h-6">
                    <span className={`absolute top-0 left-0 w-6 h-0.5 bg-[hsl(0,0%,10%)] transition-all duration-300 group-hover:bg-[hsl(19,100%,58%)] ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`absolute top-2 left-0 w-6 h-0.5 bg-[hsl(0,0%,10%)] transition-all duration-300 group-hover:bg-[hsl(19,100%,58%)] ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`absolute top-4 left-0 w-6 h-0.5 bg-[hsl(0,0%,10%)] transition-all duration-300 group-hover:bg-[hsl(19,100%,58%)] ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                  </div>
              </Button>
            </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-gray-200 p-0" style={{ zIndex: 9999 }}>
                <div className="flex flex-col h-full relative">
                  {/* Mobile Header - Simplified */}
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200 bg-gradient-to-r from-[hsl(19,100%,58%)]/5 to-[hsl(47,100%,63%)]/5 relative">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={logoImage}
                        alt="Jumiami Solar Shop Logo" 
                        className="h-12 w-auto"
                      />
                      <div>
                        <h2 className="text-lg font-bold text-[hsl(0,0%,10%)]">Jumiami Solar</h2>
                        <p className="text-sm text-[hsl(19,100%,58%)] font-medium">Sustainable Energy</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-500 hover:text-[hsl(19,100%,58%)] touch-manipulation"
                      aria-label="Close mobile menu"
                      style={{ position: 'relative', zIndex: 10000 }}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Items - Flat Structure */}
                  <div className="flex-1 py-4 px-2 overflow-y-auto">
                    <div className="space-y-1">
                      {navItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 touch-manipulation ${
                      location === item.href 
                                ? "bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white shadow-lg" 
                                : "text-[hsl(0,0%,10%)] hover:bg-[hsl(19,100%,58%)]/10 hover:text-[hsl(19,100%,58%)] active:bg-[hsl(19,100%,58%)]/20"
                            }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="flex items-center space-x-3">
                              <IconComponent className="h-5 w-5 flex-shrink-0" />
                              <span className="text-base">{item.label}</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                        );
                      })}
                    </div>

                    {/* Quick Actions - Simplified */}
                    <div className="mt-6 px-2">
                      <div className="bg-gradient-to-r from-[hsl(19,100%,58%)]/10 to-[hsl(47,100%,63%)]/10 rounded-xl p-4">
                        <h3 className="font-semibold text-[hsl(0,0%,10%)] mb-3">Quick Actions</h3>
                        <div className="space-y-2">
                          <Button 
                            className="w-full bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white font-semibold py-3 rounded-xl shadow-lg touch-manipulation"
                          >
                            <PhoneCall className="h-4 w-4 mr-2" />
                            Call Now
                          </Button>
                          <Button 
                            variant="outline"
                            className="w-full border-[hsl(19,100%,58%)] text-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,58%)]/10 font-semibold py-3 rounded-xl touch-manipulation"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Social Media Links - Organized */}
                    <div className="mt-6 px-2">
                      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4">
                        <h3 className="font-semibold text-[hsl(0,0%,10%)] mb-3">Follow Us</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {socialMediaLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                              <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[hsl(19,100%,58%)]/10 transition-colors"
                              >
                                <IconComponent className="h-4 w-4 text-[hsl(19,100%,58%)]" />
                                <span className="text-sm text-[hsl(0,0%,10%)]">{social.name}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Footer - Simplified */}
                  <div className="border-t border-gray-200 pt-4 px-6 pb-6 bg-gray-50/50">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>08118887425</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>info@jumiamisolar.com</span>
                      </div>
                      <div className="text-xs text-gray-500 text-center pt-2">
                        <p>Free consultation available</p>
                      </div>
                    </div>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
    </>
  );
}
