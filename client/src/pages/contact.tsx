import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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
              {/* Office Location */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Visit Our Lagos Showroom</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-300">Ikota shopping complex, Road 3, suite E 167, 150, 151, opposite Providus Bank, VGC, Ajah, Lagos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+234 xxx xxx xxxx</p>
                      <p className="text-gray-300">+234 xxx xxx xxxx</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@jumiamasolar.com</p>
                      <p className="text-gray-300">sales@jumiamasolar.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-300">Mon - Fri: 8:00AM - 6:00PM</p>
                      <p className="text-gray-300">Sat: 9:00AM - 4:00PM</p>
                      <p className="text-gray-300">Sun: Closed</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-white/10 text-white hover:bg-white/20 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-[hsl(19,100%,58%)] mr-2" />
                  View on Google Maps
                </Button>
              </div>
              
              {/* Social Media */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Facebook className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                    <span>Facebook</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                    <span>Instagram</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                    <span>Twitter</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                    <span>LinkedIn</span>
                  </a>
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
              Find <span className="text-[hsl(19,100%,58%)]">Our Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our Lagos showroom to see our products firsthand and speak with our solar experts
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location Details */}
            <div className="lg:col-span-1">
              <Card className="floating-card p-8 shadow-lg h-full">
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Showroom Features</h3>
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
                      <p>• Easy access from Lekki-Epe Expressway</p>
                      <p>• Opposite Providus Bank for easy identification</p>
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
            
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-2xl h-96 lg:h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-[hsl(19,100%,58%)]" />
                  <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                  <p>Google Maps integration would be displayed here</p>
                  <p className="text-sm mt-2">Ikota Shopping Complex, VGC, Ajah, Lagos</p>
                </div>
              </div>
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
