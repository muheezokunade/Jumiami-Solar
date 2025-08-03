import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Award, Wrench, Calendar, Settings, ShieldCheck, Clock, DollarSign, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-0">
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 lg:mb-8 font-serif">
                Trusted Solar Energy Company
                <span className="text-[hsl(19,100%,58%)]"> Since 2020</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Jumiami Solar is Nigeria's most trusted solar energy company, serving Lagos, Ilorin, and Abeokuta with premium solar solutions. We've completed over 1000 installations across Nigeria, helping homes and businesses switch to clean, reliable solar power. Our expert team provides solar panel installation, inverters, batteries, and maintenance services throughout Nigeria.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Premium Solar Products Nigeria</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Top-quality solar panels, inverters, and batteries from trusted global manufacturers. Best solar equipment in Lagos, Ilorin, and Abeokuta.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Expert Solar Installation Nigeria</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Certified solar technicians ensuring safe, efficient installations across Nigeria. Professional solar panel installation in Lagos, Ilorin, and Abeokuta.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Solar Maintenance & Support</h3>
                    <p className="text-gray-600 text-sm sm:text-base">24/7 solar maintenance and support across Nigeria. Keep your solar system running at peak performance with our expert team.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-10">
                <Link href="/about">
                  <Button className="group bg-[hsl(0,0%,10%)] text-white hover:bg-gray-800 font-medium transition-all duration-300">
                    Learn More About Our Story
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Solar technician installing panels" 
                className="rounded-2xl shadow-2xl floating-card w-full h-auto" 
              />
              
              <div className="absolute -bottom-6 -left-6 glass-morphism rounded-2xl p-4 sm:p-6 text-white backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[hsl(19,100%,58%)] font-serif">500+</div>
                <div className="text-xs sm:text-sm">Successful Installations</div>
              </div>
              
              <div className="absolute -top-6 -right-6 glass-morphism rounded-2xl p-4 sm:p-6 text-white backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[hsl(47,100%,63%)] font-serif">4+</div>
                <div className="text-xs sm:text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Why Choose <span className="text-[hsl(19,100%,58%)]">Jumiami Solar</span>
            </h2>
            <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              We're not just another solar company. We're your partners in creating a sustainable energy future for Nigeria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Award, title: "Quality Products", desc: "Premium solar panels, inverters, and batteries from world-class manufacturers with proven track records.", delay: 0 },
              { icon: Settings, title: "Professional Installation", desc: "Certified technicians with extensive experience in Nigerian conditions ensure safe, efficient installations.", delay: 200 },
              { icon: Calendar, title: "4+ Years Expertise", desc: "Four years of experience serving Lagos, Ilorin, and Abeokuta with consistent excellence.", delay: 400 },
              { icon: Wrench, title: "Comprehensive Maintenance", desc: "Complete after-sales support including regular maintenance, repairs, and system optimization.", delay: 600 }
            ].map((item, index) => (
              <div key={index} className={`text-center group transform transition-all duration-1000 delay-${item.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[hsl(0,0%,10%)] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Additional Benefits */}
          <div className={`mt-12 sm:mt-16 bg-white rounded-3xl p-8 sm:p-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: ShieldCheck, title: "Warranty Protection", desc: "Comprehensive warranties on all products and installations for complete peace of mind." },
                { icon: Clock, title: "24/7 Support", desc: "Round-the-clock customer support and emergency response for critical issues." },
                { icon: DollarSign, title: "Flexible Payment", desc: "Multiple payment options and financing solutions to make solar accessible to everyone." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[hsl(0,0%,10%)] via-slate-900 to-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-serif transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ready to Go <span className="text-[hsl(19,100%,58%)]">Solar?</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Join hundreds of satisfied customers who have made the switch to clean, reliable solar energy. Get your free consultation today.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="/contact">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white px-8 sm:px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-[hsl(19,100%,58%)]/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/products">
              <Button 
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-[hsl(0,0%,10%)] px-8 sm:px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                View Products
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}