import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Award, Wrench, Calendar, Settings, ShieldCheck, Clock, DollarSign, MapPin, Phone, Mail, ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-0">
      <HeroSection />
      
      {/* About Preview Section - Modern Design */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[hsl(19,100%,58%)]/10 to-[hsl(47,100%,63%)]/10 rounded-full px-4 py-2 mb-6">
                  <Star className="h-4 w-4 text-[hsl(19,100%,58%)]" />
                  <span className="text-sm font-semibold text-[hsl(19,100%,58%)]">Trusted Since 2020</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[hsl(0,0%,10%)] mb-6 leading-tight">
                  Nigeria's Premier
                  <br />
                  <span className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] bg-clip-text text-transparent">
                    Solar Energy Company
                  </span>
                </h2>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                Jumiami Solar helps Nigerian homes and businesses save ₦50,000+ monthly on electricity bills. Our solar systems pay for themselves in 3-4 years with 40% ROI. We offer 25-year panel warranties, 5-year inverter warranties, and 0% interest financing. Serving Lagos, Ilorin, and Abeokuta with premium solar panels, inverters, and maintenance services.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[hsl(0,0%,10%)] mb-3">Save ₦50,000+ Monthly on Bills</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Our solar systems reduce electricity costs by 80-90%. Average customer saves ₦50,000+ monthly with 40% ROI in 3 years.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[hsl(0,0%,10%)] mb-3">25-Year Warranty + 0% Interest Financing</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Premium solar panels with 25-year warranty. Flexible payment plans with 0% interest for qualified customers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[hsl(0,0%,10%)] mb-3">Free Installation + 2 Years Maintenance</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Professional installation included. 2 years free maintenance and 24/7 support to keep your system running optimally.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <Link href="/about" aria-label="Learn more about Jumiami Solar story">
                  <Button className="group bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl">
                    Learn More About Our Story
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(19,100%,50%)] rounded-3xl p-12 text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl font-black mb-4">Solar Installation</div>
                    <div className="text-2xl opacity-90 mb-8">Professional & Reliable</div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                        <div className="text-3xl font-black text-[hsl(19,100%,58%)]">500+</div>
                        <div className="text-sm opacity-80">Successful Installations</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                        <div className="text-3xl font-black text-[hsl(19,100%,58%)]">4+</div>
                        <div className="text-sm opacity-80">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-[hsl(19,100%,58%)]" />
              <span className="text-sm font-semibold text-[hsl(19,100%,58%)]">Why Choose Us</span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Why Choose <span className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] bg-clip-text text-transparent">Jumiami Solar</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              We're not just another solar company. We're your partners in creating a sustainable energy future for Nigeria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "₦50K Monthly Savings", desc: "Our solar systems reduce electricity costs by 80-90%. Average customer saves ₦50,000+ monthly on utility bills." },
              { icon: Zap, title: "40% ROI in 3 Years", desc: "Solar systems pay for themselves in 3-4 years. Get 40% return on investment with our proven installations." },
              { icon: ShieldCheck, title: "25-Year Warranty", desc: "Premium solar panels with 25-year performance warranty. 5-year inverter warranty for complete peace of mind." },
              { icon: Users, title: "0% Interest Financing", desc: "Flexible payment plans with 0% interest for qualified customers. Make solar accessible to everyone." }
            ].map((item, index) => (
              <div key={index} className={`group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[hsl(19,100%,58%)]/50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Additional Benefits - Enhanced */}
          <div className={`mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Free Installation", desc: "Professional installation included in all packages. No hidden fees or additional charges." },
                { icon: Clock, title: "2 Years Free Maintenance", desc: "Complete maintenance package for 2 years. 24/7 support and emergency response included." },
                { icon: DollarSign, title: "₦50K Discount Available", desc: "Special discount for first-time customers. Limited time offer - save ₦50,000 on your installation." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
                    <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-[hsl(0,0%,10%)] via-slate-900 to-[hsl(0,0%,10%)] text-white">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-[hsl(19,100%,58%)]" />
              <span className="text-sm font-semibold text-[hsl(19,100%,58%)]">Ready to Go Solar?</span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Ready to Go <span className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] bg-clip-text text-transparent">Solar?</span>
            </h2>
            <p className={`text-xl text-gray-300 mb-12 max-w-4xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Join hundreds of satisfied customers saving ₦50,000+ monthly. Get your free quote today and save ₦50,000 on installation.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/contact" aria-label="Get free quote and ₦50K discount">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-[hsl(19,100%,58%)]/25 transition-all duration-300 transform hover:scale-105 rounded-2xl"
              >
                Get Free Quote + ₦50K Discount
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/products" aria-label="View customer savings and products">
              <Button 
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-[hsl(0,0%,10%)] px-10 py-6 text-xl font-semibold backdrop-blur-md transition-all duration-300 transform hover:scale-105 rounded-2xl"
              >
                See Customer Savings
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}