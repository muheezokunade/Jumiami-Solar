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
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 lg:mb-8 font-serif">
                Trusted Solar Energy Company
                <span className="text-[hsl(19,100%,58%)]"> Since 2020</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Jumiami Solar helps Nigerian homes and businesses save ₦50,000+ monthly on electricity bills. Our solar systems pay for themselves in 3-4 years with 40% ROI. We offer 25-year panel warranties, 5-year inverter warranties, and 0% interest financing. Serving Lagos, Ilorin, and Abeokuta with premium solar panels, inverters, and maintenance services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Save ₦50,000+ Monthly on Bills</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Our solar systems reduce electricity costs by 80-90%. Average customer saves ₦50,000+ monthly with 40% ROI in 3 years.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">25-Year Warranty + 0% Interest Financing</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Premium solar panels with 25-year warranty. Flexible payment plans with 0% interest for qualified customers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Free Installation + 2 Years Maintenance</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Professional installation included. 2 years free maintenance and 24/7 support to keep your system running optimally.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-10">
                <Link href="/about" aria-label="Learn more about Jumiami Solar story">
                  <Button className="group bg-[hsl(0,0%,10%)] text-white hover:bg-gray-800 font-medium transition-all duration-300 min-h-[48px] min-w-[48px]">
                    Learn More About Our Story
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="rounded-2xl shadow-2xl w-full h-64 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">Solar Installation</div>
                  <div className="text-lg opacity-90">Professional & Reliable</div>
                </div>
              </div>
              
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
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Why Choose <span className="text-[hsl(19,100%,58%)]">Jumiami Solar</span>
            </h2>
            <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              We're not just another solar company. We're your partners in creating a sustainable energy future for Nigeria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Award, title: "₦50K Monthly Savings", desc: "Our solar systems reduce electricity costs by 80-90%. Average customer saves ₦50,000+ monthly on utility bills." },
              { icon: Settings, title: "40% ROI in 3 Years", desc: "Solar systems pay for themselves in 3-4 years. Get 40% return on investment with our proven installations." },
              { icon: Calendar, title: "25-Year Warranty", desc: "Premium solar panels with 25-year performance warranty. 5-year inverter warranty for complete peace of mind." },
              { icon: Wrench, title: "0% Interest Financing", desc: "Flexible payment plans with 0% interest for qualified customers. Make solar accessible to everyone." }
            ].map((item, index) => (
              <div key={index} className={`text-center group ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[hsl(0,0%,10%)] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Additional Benefits */}
          <div className={`mt-12 sm:mt-16 bg-white rounded-3xl p-8 sm:p-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: ShieldCheck, title: "Free Installation", desc: "Professional installation included in all packages. No hidden fees or additional charges." },
                { icon: Clock, title: "2 Years Free Maintenance", desc: "Complete maintenance package for 2 years. 24/7 support and emergency response included." },
                { icon: DollarSign, title: "₦50K Discount Available", desc: "Special discount for first-time customers. Limited time offer - save ₦50,000 on your installation." }
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
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-serif ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Ready to Go <span className="text-[hsl(19,100%,58%)]">Solar?</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Join hundreds of satisfied customers saving ₦50,000+ monthly. Get your free quote today and save ₦50,000 on installation.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/contact" aria-label="Get free quote and ₦50K discount">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white px-8 sm:px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-[hsl(19,100%,58%)]/25 transition-all duration-300 transform hover:scale-105 min-h-[48px] min-w-[48px]"
              >
                Get Free Quote + ₦50K Discount
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/products" aria-label="View customer savings and products">
              <Button 
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-[hsl(0,0%,10%)] px-8 sm:px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 min-h-[48px] min-w-[48px]"
              >
                See Customer Savings
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}