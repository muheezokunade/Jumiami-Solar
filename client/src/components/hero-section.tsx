import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, Play, Star, Zap, Sun, Shield, Award, Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(19,100%,58%)]/10 via-transparent to-[hsl(47,100%,63%)]/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[hsl(19,100%,58%)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(47,100%,63%)]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[hsl(47,100%,63%)] rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Premium Badge */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[hsl(19,100%,58%)]/20 to-[hsl(47,100%,63%)]/20 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white shadow-lg">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-[hsl(19,100%,58%)]" />
              <span className="text-sm font-semibold">Premium Solar Solutions</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <span className="text-xs opacity-80">Lagos • Ilorin • Abeokuta</span>
          </div>
        </div>

        {/* Main Heading with Modern Typography */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="block">Power Your</span>
          <span className="block bg-gradient-to-r from-[hsl(19,100%,58%)] via-[hsl(47,100%,63%)] to-[hsl(19,100%,58%)] bg-clip-text text-transparent">
            Future
          </span>
          <span className="block">With Solar</span>
        </h1>
        
        {/* Compelling Subtitle */}
        <p className={`text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Transform your energy bills with <span className="text-[hsl(19,100%,58%)] font-semibold">₦50,000+ monthly savings</span>
          <br />
          <span className="text-lg sm:text-xl opacity-90">25-year warranty • 40% ROI • 0% interest financing</span>
        </p>
        
        {/* Contact Info with Modern Design */}
        <div className={`mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-lg">
              <Phone className="h-5 w-5 text-[hsl(19,100%,58%)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400">Call Now</p>
                <p className="text-white font-semibold">+234 811 888 7425</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-lg">
              <Mail className="h-5 w-5 text-[hsl(19,100%,58%)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400">Email Us</p>
                <p className="text-white font-semibold">info@jumiamisolar.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-[hsl(19,100%,58%)] mb-2">500+</div>
            <div className="text-sm text-gray-400 font-medium">Successful Installations</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-[hsl(19,100%,58%)] mb-2">4+</div>
            <div className="text-sm text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-[hsl(19,100%,58%)] mb-2">4.8/5</div>
            <div className="text-sm text-gray-400 font-medium">Google Rating</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-[hsl(19,100%,58%)] mb-2">25yr</div>
            <div className="text-sm text-gray-400 font-medium">Panel Warranty</div>
          </div>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/contact" aria-label="Get free quote and ₦50K discount">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-[hsl(19,100%,58%)]/25 transition-all duration-300 transform hover:scale-105 min-h-[56px] min-w-[56px] rounded-2xl"
            >
              <Zap className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
              Get Free Quote + ₦50K Discount
            </Button>
          </Link>
          <Link href="/projects" aria-label="View customer savings and projects">
            <Button 
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-6 text-xl font-semibold backdrop-blur-md transition-all duration-300 transform hover:scale-105 min-h-[56px] min-w-[56px] rounded-2xl"
            >
              <Play className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform" />
              See Real Customer Savings
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 flex flex-wrap justify-center items-center gap-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-white">25-Year Warranty</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-white">40% ROI in 3 Years</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-white">₦50K Monthly Savings</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? 'opacity-100' : 'opacity-0'} z-20`}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-300 text-sm font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
