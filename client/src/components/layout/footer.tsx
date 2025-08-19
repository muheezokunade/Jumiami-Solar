import { Link } from "wouter";
import { Instagram, Twitter, Facebook, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products & Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const officeLocations = [
  { city: "Lagos", address: "Ikota Shopping Complex, VGC, Ajah, Lagos", phone: "+234 811 888 7425" },
  { city: "Ilorin", address: "Shop 4B samtosh plaza, No. 171, Ibrahim Taiwo Rd.", phone: "09156082923" },
  { city: "Abeokuta", address: "Somorin Obantoko, Abeokuta, Ogun state.", phone: "08118887425" },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,10%)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About / CTA */}
          <div>
            <h2 className="text-xl font-bold mb-4">Jumiami Solar</h2>
            <p className="text-sm text-gray-400 mb-6">Kicking out darkness with premium solar solutions across Nigeria.</p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-700 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              />
              <button className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-sm">Subscribe</button>
            </form>
            <div className="flex space-x-4 mt-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Offices</h3>
            <div className="grid grid-cols-1 gap-4">
              {officeLocations.map((o) => (
                <div key={o.city} className="text-sm text-gray-400">
                  <div className="text-orange-500 font-medium mb-1">{o.city}</div>
                  <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-orange-500" /><span>{o.address}</span></div>
                  <div className="flex items-center gap-2 mt-1"><Phone className="h-4 w-4 text-orange-500" /><a href={`tel:${o.phone}`} className="hover:text-orange-500">{o.phone}</a></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-orange-500 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2024 Jumiami Solar. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-orange-500">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-orange-500">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
