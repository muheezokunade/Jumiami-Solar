import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, Play, Star, Zap, Sun, Shield, Award } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        {/* Solar panels background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(19,100%,58%)]/10 via-slate-900/80 to-[hsl(47,100%,63%)]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.2}px)`
        }}></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fewer, larger floating elements */}
        <div className="absolute top-32 left-16 opacity-10 animate-float-slow">
          <div className="w-20 h-10 bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg shadow-lg"></div>
        </div>
        <div className="absolute bottom-32 right-16 opacity-10 animate-float-medium">
          <div className="w-16 h-8 bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg shadow-lg"></div>
        </div>
        
        {/* Minimal energy particles */}
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[hsl(19,100%,58%)] rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[hsl(47,100%,63%)] rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content - Cleaner Layout */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Badge - Simplified */}
        <div className={`mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[hsl(19,100%,58%)]/20 to-[hsl(47,100%,63%)]/20 backdrop-blur-sm border border-[hsl(19,100%,58%)]/30 rounded-full px-4 py-2 text-[hsl(19,100%,58%)]">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Certified Solar Installers in Lagos, Ilorin & Abeokuta</span>
          </div>
        </div>

        {/* Main Heading - Cleaner */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Trusted Solar Solutions
          <br />
          <span className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] bg-clip-text text-transparent">
            Since 2020
          </span>
        </h1>
        
        {/* Subtitle - Simplified */}
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Save ₦50,000+ monthly on electricity bills.
          <br />
          <span className="text-[hsl(19,100%,58%)] font-semibold">Get 25-year warranty + 40% ROI in 3 years</span>
        </p>
        
        {/* Stats - Cleaner Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">500+</div>
            <div className="text-xs text-gray-400">Successful Installations</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">4+</div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">4.8/5</div>
            <div className="text-xs text-gray-400">Google Rating</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">25yr</div>
            <div className="text-xs text-gray-400">Panel Warranty</div>
          </div>
        </div>
        
        {/* CTA Buttons - Cleaner */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link href="/contact">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-[hsl(19,100%,58%)]/25 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get Free Quote + ₦50K Discount
            </Button>
          </Link>
          <Link href="/projects">
            <Button 
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              See Real Customer Savings
            </Button>
          </Link>
        </div>

        {/* Trust Indicators - Organized */}
        <div className={`mt-8 flex flex-wrap justify-center items-center gap-4 text-gray-400 text-sm transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
            <Shield className="h-4 w-4 text-[hsl(19,100%,58%)]" />
            <span>25-Year Warranty</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
            <Award className="h-4 w-4 text-[hsl(19,100%,58%)]" />
            <span>40% ROI in 3 Years</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
            <Sun className="h-4 w-4 text-[hsl(19,100%,58%)]" />
            <span>₦50K Monthly Savings</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Cleaner */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1200 z-20 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center space-y-1">
          <span className="text-gray-300 text-xs font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-[hsl(19,100%,58%)] drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
}
