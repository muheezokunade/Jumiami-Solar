import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { ref: navRef, style: navStyle } = useScrollAnimation({
    animation: 'slide-down',
    duration: 500
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products & Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav
      ref={navRef as any}
      style={navStyle}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 shadow-sm',
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3">
              <img 
                src="https://stellar-cucurucho-723bf1.netlify.app/images/FB_IMG_1753880100791%20-%20Faridah%20Sulaimon_1753982843756-EIXfVty_.jpg"
                alt="Jumiami Solar Logo"
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-orange-500">
                Jumiami Solar
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  'text-sm font-medium transition-all duration-300 relative py-2',
                  location === item.href 
                    ? 'text-orange-500' 
                    : 'text-gray-600 hover:text-orange-500'
                )}>
                  {item.label}
                  {location === item.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 rounded-full"></div>
                    )}
                </a>
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="https://wa.me/2348118887425"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex"
              >
                <Button 
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white border-0 transition-all duration-300 transform hover:scale-105 rounded-full px-6"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-900 transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation items */}
          <div className="flex-1 px-4 py-6">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      'flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-all duration-200',
                      location === item.href
                        ? 'text-orange-600 bg-orange-50 border border-orange-200'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      location === item.href ? 'text-orange-600' : 'text-gray-400'
                    )} />
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Section */}
          <div className="p-6 border-t border-gray-100">
            <a 
              href="https://wa.me/2348118887425"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-xl py-4 text-base font-medium transition-all duration-200 transform hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5 mr-3" />
                Get Free Quote
              </Button>
            </a>
            <p className="text-xs text-gray-500 text-center mt-3">
              Quick response via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
