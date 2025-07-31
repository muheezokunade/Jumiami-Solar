import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Award, Wrench, Calendar, Settings, ShieldCheck, Clock, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-8 font-serif">
                Illuminating Nigeria for 
                <span className="text-[hsl(19,100%,58%)]"> 5+ Years</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Jumiami Solar, we're more than just a solar company – we're pioneers in Nigeria's renewable energy revolution. From our base in Lagos, we've been transforming how businesses and homes access clean, reliable power.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Top-Quality Products</h3>
                    <p className="text-gray-600">Premium solar panels, inverters, and batteries from trusted global manufacturers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Expert Installation</h3>
                    <p className="text-gray-600">Certified technicians ensuring safe, efficient, and code-compliant installations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Comprehensive Maintenance</h3>
                    <p className="text-gray-600">Ongoing support and maintenance to keep your solar system running at peak performance.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/about">
                  <Button className="bg-[hsl(0,0%,10%)] text-white hover:bg-gray-800 font-medium">
                    Learn More About Our Story
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://pixabay.com/get/ge0d53bcbc240ecae7c4f8c2b2fbc288b5c39678ffd77928a14938e62758c740a3aacbcf563d0d47cb3278181cc35721cd62fb0d028805ab415cf5e36d417c346_1280.jpg" 
                alt="Solar technician installing panels" 
                className="rounded-2xl shadow-2xl floating-card" 
              />
              
              <div className="absolute -bottom-8 -left-8 glass-morphism rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold text-[hsl(19,100%,58%)] font-serif">1000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              
              <div className="absolute -top-8 -right-8 glass-morphism rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold text-[hsl(47,100%,63%)] font-serif">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Info */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 mx-4 sm:mx-6 lg:mx-8">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4 font-serif">Visit Our Lagos Showroom</h3>
            <p className="text-lg text-gray-600">
              📍 Ikota shopping complex, Road 3, suite E 167, 150, 151, opposite Providus Bank, VGC, Ajah, Lagos
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Why Choose <span className="text-[hsl(19,100%,58%)]">Jumiami Solar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another solar company. We're your partners in creating a sustainable energy future for Nigeria.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Quality Products</h3>
              <p className="text-gray-600">Premium solar panels, inverters, and batteries from world-class manufacturers with proven track records.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow" style={{animationDelay: '0.5s'}}>
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Professional Installation</h3>
              <p className="text-gray-600">Certified technicians with extensive experience in Nigerian conditions ensure safe, efficient installations.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow" style={{animationDelay: '1s'}}>
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">5+ Years Expertise</h3>
              <p className="text-gray-600">Half a decade of experience serving Lagos and surrounding areas with consistent excellence.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow" style={{animationDelay: '1.5s'}}>
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Comprehensive Maintenance</h3>
              <p className="text-gray-600">Complete after-sales support including regular maintenance, repairs, and system optimization.</p>
            </div>
          </div>
          
          {/* Additional Benefits */}
          <div className="mt-16 bg-white rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">Warranty Protection</h4>
                  <p className="text-gray-600">Comprehensive warranties on all products and installations for complete peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock customer support and emergency response for critical issues.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">Flexible Payment</h4>
                  <p className="text-gray-600">Multiple payment options and financing solutions to make solar accessible to everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Go <span className="text-[hsl(19,100%,58%)]">Solar?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, reliable solar energy. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white px-10 py-4 text-lg font-semibold hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/products">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(0,0%,10%)] transition-all duration-300"
              >
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
