import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm',
        isScrolled ? 'shadow-lg bg-white/98' : 'shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-orange-500">
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
              className="p-2 rounded-md text-gray-900 transition-colors duration-300 hover:bg-gray-100"
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

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: '64px' }}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  'block px-3 py-4 text-base font-medium border-b border-gray-100 transition-colors duration-300',
                  location === item.href
                    ? 'text-orange-500 bg-orange-50 border-orange-200'
                    : 'text-gray-900 hover:text-orange-500 hover:bg-gray-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <div className="px-3 py-4">
            <a 
              href="https://wa.me/2348118887425"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-full"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Quote on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
