import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full opacity-30 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-3 h-3 bg-[hsl(47,100%,63%)] rounded-full opacity-30 animate-float" style={{top: '60%', left: '80%', animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-[hsl(19,100%,58%)] rounded-full opacity-30 animate-float" style={{top: '40%', left: '60%', animationDelay: '4s'}}></div>
        <div className="absolute w-2 h-2 bg-[hsl(47,100%,63%)] rounded-full opacity-30 animate-float" style={{top: '80%', left: '20%', animationDelay: '6s'}}></div>
      </div>
      
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Solar panels against blue sky" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-shadow mb-8 animate-fade-in font-serif">
          Kick Out Darkness<br />
          <span className="text-[hsl(47,100%,63%)]">in the Environment</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white text-shadow mb-12 font-light animate-slide-up">
          We sell, install, repair and maintain inverters & solar products<br />
          <span className="text-[hsl(47,100%,63%)] font-medium">Powering Nigeria with Premium Solar Solutions</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-[hsl(19,100%,58%)] text-white px-10 py-4 text-lg font-semibold hover:bg-[hsl(19,100%,48%)] transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Free Consultation
            </Button>
          </Link>
          <Link href="/projects">
            <Button 
              variant="outline"
              size="lg"
              className="glass-morphism text-white border-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(0,0%,10%)] transition-all duration-300"
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
