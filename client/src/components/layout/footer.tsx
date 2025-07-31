import { Link } from "wouter";
import { Sun, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Solar Panel Sales",
  "System Installation", 
  "Inverter Repair",
  "Maintenance Service",
  "Battery Replacement",
  "System Monitoring"
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,10%)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-serif">Jumiami Solar</span>
            </div>
            <p className="text-gray-400 mb-6">
              Kicking out darkness in the environment with premium solar solutions across Nigeria.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[hsl(19,100%,58%)] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[hsl(19,100%,58%)] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[hsl(19,100%,58%)] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[hsl(19,100%,58%)] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Ikota shopping complex, Road 3, suite E 167, VGC, Ajah, Lagos
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                <p className="text-gray-400">+234 xxx xxx xxxx</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                <p className="text-gray-400">info@jumiamasolar.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>Mon - Fri: 8:00AM - 6:00PM</p>
                  <p>Sat: 9:00AM - 4:00PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jumiami Solar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
