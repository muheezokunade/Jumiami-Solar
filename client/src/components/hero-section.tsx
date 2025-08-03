import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Mail, ArrowRight, CheckCircle, Star, Zap, Calculator, Sun, ChevronDown, ChevronDown as ChevronDownIcon, MessageCircle, Shield, TrendingUp, MapPin, Play, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState("");
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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-4 pb-8" id="hero">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:hidden"></div>
        
        {/* Desktop: Enhanced background with solar elements */}
        <div className="absolute inset-0 hidden md:block">
          {/* Solar Background Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Solar panels image overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzb2xhci1wYW5lbHMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxNSkiPgogICAgICA8cmVjdCB3aWR0aD0iNDUiIGhlaWdodD0iMzAiIGZpbGw9IiMzNEE4NTMiIG9wYWNpdHk9IjAuMSIvPgogICAgICA8cmVjdCB4PSI1MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjMwIiBmaWxsPSIjMzRBODUzIiBvcGFjaXR5PSIwLjEiLz4KICAgICAgPHJlY3QgeT0iMzUiIHdpZHRoPSI0NSIgaGVpZ2h0PSIzMCIgZmlsbD0iIzM0QTg1MyIgb3BhY2l0eT0iMC4xIi8+CiAgICAgIDxyZWN0IHg9IjUwIiB5PSIzNSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjMwIiBmaWxsPSIjMzRBODUzIiBvcGFjaXR5PSIwLjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzb2xhci1wYW5lbHMpIi8+Cjwvc3ZnPgo=')] opacity-20"></div>
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Sun Rays Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-400/30 via-orange-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          {/* Floating Solar Elements */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-32 left-32 w-24 h-16 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-lg transform rotate-12"></div>
            <div className="absolute top-48 right-48 w-20 h-12 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-lg transform -rotate-6"></div>
            <div className="absolute bottom-32 left-48 w-28 h-18 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-lg transform rotate-3"></div>
            <div className="absolute bottom-48 right-32 w-16 h-10 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-lg transform -rotate-12"></div>
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-40 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 text-center mobile-optimized">
        
        {/* Premium Solutions Badge */}
        <div className={`mb-4 sm:mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm">
            <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
            <span>Premium Solar Solutions</span>
            <span className="text-gray-400 hidden sm:inline">•</span>
            <span className="text-gray-300 text-xs sm:text-sm">Lagos • Ilorin • Abeokuta</span>
          </div>
        </div>

        {/* Main Headline - Strengthened text hierarchy */}
        <div className={`mb-3 sm:mb-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4 max-w-[18ch] mx-auto">
            Power Your Future<br/>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              With Solar ☀️
            </span>
          </h1>
        </div>
        
        {/* Sub-headline - Limited width for legibility */}
        <div className={`mb-4 sm:mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-base sm:text-lg text-white mb-2 sm:mb-3 max-w-[16ch] mx-auto text-center">
            Transform your energy bills with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
              ₦50,000+
            </span>{" "}
            monthly savings
          </p>
          <p className="text-sm sm:text-base text-gray-300 max-w-[16ch] mx-auto text-center">
            25-year warranty • 40% ROI • 0% interest financing
          </p>
        </div>

        {/* CTA Section - Reordered and restyled */}
        <div className={`mb-4 sm:mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center mb-4">
            <div className="relative w-full sm:w-auto">
              <label htmlFor="monthly-bill" className="sr-only">Enter your monthly bill</label>
              <input 
                id="monthly-bill"
                type="text" 
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="w-full sm:w-48 px-4 py-3 border-2 border-gray-300 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors duration-200 text-base font-medium min-h-[48px] touch-manipulation mobile-touch-target"
                placeholder="Enter your monthly bill"
                aria-label="Monthly bill amount in Naira"
              />
            </div>
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-yellow-400 hover:to-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl hero-button-glow min-h-[48px] touch-manipulation mobile-touch-target"
            >
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Get Free Quote
            </Button>
          </div>
          
          {/* Secondary CTA - Surfaced and restyled */}
          <div className="text-center">
            <Link href="#calculator" className="inline-flex items-center text-orange-400 hover:text-yellow-400 font-medium text-base sm:text-lg transition-colors duration-200 touch-manipulation min-h-[48px] mobile-touch-target">
              Calculate your ROI <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>

        {/* Contact Information - Phone only on mobile */}
        <div className={`mb-4 sm:mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center">
            <a 
              href="tel:+2348118887425"
              className="flex items-center space-x-3 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 touch-manipulation min-h-[48px] card-hover-lift mobile-touch-target"
            >
              <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
              <span className="font-medium text-base">+234 811 888 7425</span>
            </a>
          </div>
        </div>




      </div>
      
      {/* Floating WhatsApp - Mobile optimized */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center">
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  );
}
