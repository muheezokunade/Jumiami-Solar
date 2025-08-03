import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Mail, ArrowRight, CheckCircle, Star, Zap, Calculator, Sun, ChevronDown, ChevronDown as ChevronDownIcon, MessageCircle, Shield, TrendingUp, MapPin, Play, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState("20,000");
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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden" id="hero">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Premium Solutions Badge */}
        <div className={`mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 bg-slate-800 text-white px-6 py-3 rounded-lg font-medium text-sm">
            <Sun className="h-4 w-4 text-orange-400" />
            <span>Premium Solar Solutions</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">Lagos • Ilorin • Abeokuta</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className={`mb-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 relative">
            Power Your Future With{" "}
            <span className="relative inline-flex items-center">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 blur-3xl rounded-full transform scale-150"></span>
              <span className="relative bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Solar
              </span>
              <Sun className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-400 ml-2 animate-pulse" />
            </span>
          </h1>
        </div>
        
        {/* Sub-headline */}
        <div className={`mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-white mb-3">
            Transform your energy bills with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
              ₦50,000+
            </span>{" "}
            monthly savings
          </p>
          <p className="text-base text-gray-300">
            25-year warranty • 40% ROI • 0% interest financing
          </p>
        </div>

        {/* CTA Section */}
        <div className={`mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <Calculator className="h-5 w-5 mr-3" />
              Get Free Quote
            </Button>
            <div className="relative">
              <input 
                type="text" 
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="px-6 py-4 border-2 border-gray-300 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors duration-200 text-lg font-medium w-48"
                placeholder="20,000"
              />
            </div>
          </div>
          
          {/* ROI Calculation Link */}
          <div className="mb-6">
            <Link href="#calculator" className="text-orange-400 hover:text-yellow-400 font-medium text-lg inline-flex items-center space-x-2 transition-colors duration-200">
              <span>Calculate your ROI</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-3 bg-slate-800 text-white px-6 py-3 rounded-lg">
              <Phone className="h-5 w-5 text-orange-400" />
              <span className="font-medium">+234 811 888 7425</span>
            </div>
            <div className="flex items-center space-x-3 bg-slate-800 text-white px-6 py-3 rounded-lg">
              <Mail className="h-5 w-5 text-orange-400" />
              <span className="font-medium">info@jumiamisolar.com</span>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className={`mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-800 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">500+</div>
              <div className="text-gray-300 text-xs">Installations</div>
            </div>
            <div className="bg-slate-800 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">4.8/5</div>
              <div className="text-gray-300 text-xs">Rating</div>
            </div>
            <div className="bg-slate-800 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">₦50K+</div>
              <div className="text-gray-300 text-xs">Monthly Savings</div>
            </div>
            <div className="bg-slate-800 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">25yr</div>
              <div className="text-gray-300 text-xs">Warranty</div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">25-Year Warranty</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">40% ROI in 3 Years</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">₦50K Monthly Savings</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
