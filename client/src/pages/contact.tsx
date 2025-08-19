import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ExternalLink, ArrowRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import FloatingActionButton from "@/components/floating-action-button";

const officeLocations = [
  {
    title: "Lagos Head Office",
    address: "Ikota Shopping Complex, VGC, Ajah, Lagos",
    phone: "+234 811 888 7425",
    whatsapp: "2348118887425"
  },
  {
    title: "Ilorin Branch Office",
    address: "Shop 4B samtosh plaza, No. 171, Ibrahim Taiwo Rd. Opp. access Bank, Ilorin",
    phone: "09156082923",
    whatsapp: "2349156082923"
  },
  {
    title: "Abeokuta Branch Office",
    address: "Alhaji Mulikat sonekan (oosele) House, Opposite NNPC Filling Station, Somorin Obantoko Abeokuta, Ogun state.",
    phone: "08118887425",
    whatsapp: "2348118887425"
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title={<>Contact Us</>}
        subtitle={<>Ready to go solar? Get in touch with our experts for a free consultation</>}
        image="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-white" aria-labelledby="contact-heading">
        {/* Mobile-only WhatsApp FAB */}
        <div className="md:hidden">
          <FloatingActionButton />
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="text-4xl font-light text-gray-900 mb-6">
              Get Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your energy needs and we'll design the perfect solar solution for you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-light mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <a href="tel:+2348118887425" className="hover:underline">
                      +234 811 888 7425
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:info@jumiamisolar.com" className="hover:underline">
                      info@jumiamisolar.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" />
                    <div className="text-sm">
                      <p>Mon - Fri: 8:00AM - 6:00PM</p>
                      <p>Sat: 9:00AM - 4:00PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <Button 
                    size="lg"
                    className="w-full bg-white text-orange-600 hover:bg-gray-100"
                    onClick={() => {
                      const whatsappUrl = `https://wa.me/2348118887425`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Chat
                  </Button>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Our Offices</h3>
                
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-medium text-gray-900 mb-2">{office.title}</h4>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-orange-500" />
                          <a 
                            href={`tel:${office.phone}`}
                            className="hover:text-orange-500 transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {socialMediaLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-orange-50 hover:border-orange-200 border border-gray-200 transition-all duration-300"
                      >
                        <IconComponent className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700 text-sm">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-4xl font-light text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our solar solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How long does installation take?",
                answer: "Most residential installations take 1-3 days, while commercial projects may take 1-2 weeks depending on system size and complexity."
              },
              {
                question: "What maintenance is required?",
                answer: "Solar systems require minimal maintenance. We recommend annual inspections and cleaning, which we provide as part of our maintenance service."
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we offer flexible payment plans and financing options to make solar energy accessible. Contact us to discuss available options."
              },
              {
                question: "What warranty do you provide?",
                answer: "We provide comprehensive warranties: 25 years on solar panels, 10-15 years on inverters, and 5-10 years on batteries, plus workmanship warranty."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-6 transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white" aria-labelledby="emergency-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 id="emergency-heading" className="text-4xl font-light mb-8">
              Need Emergency Service?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              We provide 24/7 emergency support for critical solar system issues. Don't let power outages disrupt your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                <Phone className="h-5 w-5 mr-3" />
                Emergency Line
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-orange-600 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-xl"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/2348118887425`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
