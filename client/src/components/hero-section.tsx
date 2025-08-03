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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Subtle brand accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(19,100%,58%)]/5 via-transparent to-[hsl(47,100%,63%)]/5"></div>
      </div>

      {/* Main Content - Clean Layout */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Badge - Simplified */}
        <div className={`mb-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            <Star className="h-4 w-4 text-[hsl(19,100%,58%)]" />
            <span className="text-sm font-medium">Certified Solar Installers in Lagos, Ilorin & Abeokuta</span>
          </div>
        </div>

        {/* Main Heading - Clear Focal Point */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Trusted Solar Solutions
          <br />
          <span className="text-[hsl(19,100%,58%)]">Since 2020</span>
        </h1>
        
        {/* Subtitle - Clear Value Proposition */}
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Save ₦50,000+ monthly on electricity bills.
          <br />
          <span className="text-[hsl(19,100%,58%)] font-semibold">Get 25-year warranty + 40% ROI in 3 years</span>
        </p>
        
        {/* Stats - Clean Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">500+</div>
            <div className="text-xs text-gray-400">Successful Installations</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">4+</div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">4.8/5</div>
            <div className="text-xs text-gray-400">Google Rating</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-[hsl(19,100%,58%)] mb-1">25yr</div>
            <div className="text-xs text-gray-400">Panel Warranty</div>
          </div>
        </div>
        
        {/* CTA Buttons - Primary Focus */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/contact" aria-label="Get free quote and ₦50K discount">
            <Button 
              size="lg"
              className="group bg-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,50%)] text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[48px] min-w-[48px]"
            >
              <Zap className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" aria-hidden="true" />
              Get Free Quote + ₦50K Discount
            </Button>
          </Link>
          <Link href="/projects" aria-label="View customer savings and projects">
            <Button 
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 min-h-[48px] min-w-[48px]"
            >
              <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              See Real Customer Savings
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator - Cleaner */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? 'opacity-100' : 'opacity-0'} z-20`}>
        <div className="flex flex-col items-center space-y-1">
          <span className="text-gray-300 text-xs font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-[hsl(19,100%,58%)] drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
}
