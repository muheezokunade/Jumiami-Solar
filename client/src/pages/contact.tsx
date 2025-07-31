import ContactForm from "@/components/contact-form";
import InteractiveMap from "@/components/interactive-map";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ExternalLink } from "lucide-react";

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

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Ready to go solar? Get in touch with our experts for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to Go <span className="text-[hsl(19,100%,58%)]">Solar?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our solar experts today for a free consultation and custom quote for your energy needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Office Locations</h3>
                
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-bold text-[hsl(19,100%,58%)] mb-3">{office.title}</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed">{office.address}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                          <a 
                            href={`tel:${office.phone}`}
                            className="text-gray-300 hover:text-[hsl(19,100%,58%)] transition-colors text-sm"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                      <a 
                        href="mailto:info@jumiamisolar.com"
                        className="text-gray-300 hover:text-[hsl(19,100%,58%)] transition-colors"
                      >
                        info@jumiamisolar.com
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3 mt-3">
                      <Clock className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                      <div className="text-gray-300 text-sm">
                        <p>Mon - Fri: 8:00AM - 6:00PM</p>
                        <p>Sat: 9:00AM - 4:00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialMediaLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        <IconComponent className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Find <span className="text-[hsl(19,100%,58%)]">Our Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit any of our office locations to see our products firsthand and speak with our solar experts
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location Details */}
            <div className="lg:col-span-1">
              <Card className="floating-card p-8 shadow-lg h-full">
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Office Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                        <span>Live product demonstrations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                        <span>Expert consultations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                        <span>Free parking available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                        <span>Custom quote generation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[hsl(0,0%,10%)] mb-3">Getting Here</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>• Easy access from major roads</p>
                      <p>• Well-marked locations for easy identification</p>
                      <p>• Public transport and ride-sharing available</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[hsl(0,0%,10%)] mb-3">What to Bring</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>• Recent electricity bills</p>
                      <p>• Property dimensions (if available)</p>
                      <p>• Questions about your energy needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Interactive Map */}
            <div className="lg:col-span-2">
              <InteractiveMap />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Frequently Asked <span className="text-[hsl(19,100%,58%)]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our solar solutions
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="floating-card shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[hsl(0,0%,10%)] mb-3">How long does installation take?</h3>
                <p className="text-gray-600">Most residential installations take 1-3 days, while commercial projects may take 1-2 weeks depending on system size and complexity.</p>
              </CardContent>
            </Card>
            
            <Card className="floating-card shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[hsl(0,0%,10%)] mb-3">What maintenance is required?</h3>
                <p className="text-gray-600">Solar systems require minimal maintenance. We recommend annual inspections and cleaning, which we provide as part of our maintenance service.</p>
              </CardContent>
            </Card>
            
            <Card className="floating-card shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[hsl(0,0%,10%)] mb-3">Do you offer financing options?</h3>
                <p className="text-gray-600">Yes, we offer flexible payment plans and financing options to make solar energy accessible. Contact us to discuss available options.</p>
              </CardContent>
            </Card>
            
            <Card className="floating-card shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[hsl(0,0%,10%)] mb-3">What warranty do you provide?</h3>
                <p className="text-gray-600">We provide comprehensive warranties: 25 years on solar panels, 10-15 years on inverters, and 5-10 years on batteries, plus workmanship warranty.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Need <span className="text-[hsl(19,100%,58%)]">Emergency</span> Service?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We provide 24/7 emergency support for critical solar system issues. Don't let power outages disrupt your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white px-10 py-4 text-lg font-semibold hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] transition-all duration-300 transform hover:scale-105"
            >
              Call Emergency Line
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(0,0%,10%)] transition-all duration-300"
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
