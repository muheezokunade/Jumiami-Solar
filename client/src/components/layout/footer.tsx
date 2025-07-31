import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import logoImage from "@assets/FB_IMG_1753880100791 - Faridah Sulaimon_1753982843756.jpg";

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

const officeLocations = [
  {
    title: "Head Office",
    address: "Ikota shopping complex, Road 3, opp. Union Bank, Suite E167, 150/151, VGC Ajah Lagos.",
    phone: "08118887425"
  },
  {
    title: "Ilorin Branch Office",
    address: "Shop 4B samtosh plaza, No. 171, Ibrahim Taiwo Rd. Opp. access Bank, Ilorin",
    phone: "09156082923"
  },
  {
    title: "Abeokuta Branch Office",
    address: "Alhaji Mulikat sonekan (oosele) House, Opposite NNPC Filling Station, Somorin Obantoko Abeokuta, Ogun state.",
    phone: "08118887425"
  }
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

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,10%)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage}
                alt="Jumiami Solar Shop Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h2 className="text-xl font-bold">Jumiami Solar</h2>
                <p className="text-sm text-gray-400">Sustainable Energy Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Kicking out darkness in the environment with premium solar solutions across Nigeria.
            </p>
            <div className="flex space-x-4 mb-8">
              {socialMediaLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[hsl(19,100%,58%)] transition-colors group"
                    title={social.name}
                  >
                    <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
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
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Office Locations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
                <h4 className="text-lg font-bold text-[hsl(19,100%,58%)] mb-4">{office.title}</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-gray-300 hover:text-[hsl(19,100%,58%)] transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jumiami Solar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-[hsl(19,100%,58%)] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
