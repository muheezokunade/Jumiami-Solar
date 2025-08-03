import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ExternalLink, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const contactInfo = {
  phone: "+234 811 888 7425",
  email: "info@jumiamisolar.com",
  address: "Lagos, Nigeria"
};

const officeLocations = [
  {
    city: "Lagos",
    address: "Victoria Island, Lagos",
    phone: "+234 811 888 7425",
    email: "lagos@jumiamisolar.com"
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white" aria-labelledby="contact-hero-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 id="contact-hero-heading" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wide">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Ready to go solar? Get in touch with our experts for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white" aria-labelledby="contact-form-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="contact-form-heading" className="text-4xl font-light text-gray-900 mb-6">
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
              {/* Office Locations */}
              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Our Office Locations</h3>
                
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-light text-gray-900 mb-3">{office.title}</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-orange-500" />
                          <a 
                            href={`tel:${office.phone}`}
                            className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-orange-500" />
                      <a 
                        href="mailto:info@jumiamisolar.com"
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        info@jumiamisolar.com
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3 mt-3">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <div className="text-gray-600 text-sm">
                        <p>Mon - Fri: 8:00AM - 6:00PM</p>
                        <p>Sat: 9:00AM - 4:00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialMediaLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
                      >
                        <IconComponent className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">{social.name}</span>
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
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-4xl font-light text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our solar solutions
            </p>
          </div>
          
          <div className="space-y-6">
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
                className={`border border-gray-200 rounded-lg p-6 transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <h3 className="text-lg font-light text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
                className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group"
                aria-label="Call emergency support line"
              >
                <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                Emergency Line
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-orange-600 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px]"
                aria-label="Contact us via WhatsApp"
                onClick={() => {
                  const phoneNumber = "2348118887425"; // Nigeria country code +234, remove leading 0
                  const whatsappUrl = `https://wa.me/${phoneNumber}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 id="cta-heading" className="text-2xl font-light text-white mb-6">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Join thousands of Nigerian families who have already transformed their energy future with Jumiami Solar.
            </p>
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
              aria-label="Start your solar transformation today"
            >
              Start Your Transformation
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
