import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import OptimizedImage from "@/components/ui/optimized-image";
import { ProductCardSkeleton } from "@/components/ui/skeleton";
import { useMicroInteractions } from "@/hooks/use-micro-interactions";
import {
  Zap,
  Battery,
  CloudSun,
  Settings,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Hammer,
  Wrench,
  Users,
  Clock,
  Award,
  TrendingUp
} from "lucide-react";
import { SolarCalculator, LiveEnergyMonitor } from "@/components/interactive-elements";

// Products Data
const products = [
  {
    id: 1,
    name: "Premium Solar Panels",
    category: "panels",
    description: "High-efficiency monocrystalline solar panels with advanced anti-reflective coating for maximum energy production.",
    imageUrl: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
    icon: CloudSun,
    features: ["5-year warranty", "High efficiency", "Anti-PID technology", "Corrosion resistant"],
    specifications: {
      power: "400W - 550W",
      efficiency: "21.5%",
      dimensions: "1765 x 1048 x 35mm",
      weight: "20.5kg"
    }
  },
  {
    id: 2,
    name: "Hybrid Inverters",
    category: "inverters",
    description: "Advanced hybrid inverters with smart grid integration and battery backup capabilities for reliable power supply.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdhHXSe4zey3vJ8Shzf7b535FElelgAKGUQ&s",
    icon: Zap,
    features: ["Grid-tied operation", "Battery backup", "Smart monitoring", "MPPT technology"],
    specifications: {
      power: "3kW - 10kW",
      efficiency: "96.5%",
      input: "DC 200-500V",
      output: "AC 220/240V"
    }
  },
  {
    id: 3,
    name: "Lithium Battery Systems",
    category: "batteries",
    description: "High-performance lithium-ion battery systems with intelligent BMS for optimal performance and safety.",
    imageUrl: "https://www.energy.gov/sites/default/files/2021-11/35974719113_24cfb03c24_o.jpg",
    icon: Battery,
    features: ["Long cycle life", "Deep discharge capability", "Smart BMS", "Modular design"],
    specifications: {
      capacity: "5kWh - 20kWh",
      voltage: "48V",
      cycles: "6000+",
      warranty: "10 years"
    }
  },
  {
    id: 4,
    name: "Solar Mounting Systems",
    category: "accessories",
    description: "Professional-grade mounting systems designed for various roof types and ground installations.",
    imageUrl: "https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg",
    icon: Settings,
    features: ["Aluminum construction", "Adjustable tilt", "Easy installation", "Weather resistant"],
    specifications: {
      material: "Aluminum 6063-T5",
      coating: "Anodized finish",
      load: "Up to 5400N",
      compatibility: "All panel types"
    }
  }
];

// Services Data
const services = [
  {
    icon: ShoppingCart,
    title: "Solar Sales & Consultation",
    description: "Premium solar products at competitive prices with flexible payment options and expert consultation.",
    features: [
      "Wide range of premium solar products",
      "Competitive pricing with transparent quotes",
      "Flexible payment plans available",
      "Expert product consultation",
      "Free site assessment and energy audit",
      "Custom system design and sizing"
    ]
  },
  {
    icon: Hammer,
    title: "Professional Installation",
    description: "Professional installation by certified technicians with comprehensive warranty coverage and safety compliance.",
    features: [
      "Certified and experienced technicians",
      "Safe and code-compliant installations",
      "Comprehensive warranty coverage",
      "Post-installation system testing",
      "Grid connection and approval assistance",
      "Quality assurance and inspection"
    ]
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Quick diagnosis and repair services to minimize downtime and maximize system efficiency and performance.",
    features: [
      "Rapid response emergency repairs",
      "Advanced diagnostic equipment",
      "Genuine replacement parts only",
      "Performance optimization included",
      "24/7 emergency support",
      "Preventive maintenance programs"
    ]
  },
  {
    icon: Settings,
    title: "System Maintenance",
    description: "Regular maintenance programs to ensure optimal performance, longevity, and maximum energy output.",
    features: [
      "Scheduled preventive maintenance",
      "Performance monitoring and analysis",
      "Cleaning and component inspection",
      "Extended system lifespan guarantee",
      "Remote monitoring and alerts",
      "Annual system health reports"
    ]
  }
];

export default function ProductsAndServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("products");
  const [isLoading, setIsLoading] = useState(true);
  
  const { useMagneticEffect, useFloatingAnimation, handleHover, handleClick } = useMicroInteractions();
  const floatingOffset = useFloatingAnimation(5, 4000);

  useEffect(() => {
    setIsVisible(true);
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white" aria-labelledby="hero-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 id="hero-heading" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wide">
              Products & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Premium solar products and comprehensive services for your energy transformation
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {[
              { id: "products", label: "Products" },
              { id: "services", label: "Services" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-lg font-light transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {activeTab === "products" && (
        <section className="py-20 bg-white" aria-labelledby="products-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="products-heading" className="text-4xl font-light text-gray-900 mb-6">
                Premium Solar Products
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                High-quality solar equipment designed for Nigerian homes and businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {isLoading ? (
                // Show skeleton loaders while loading
                Array.from({ length: 4 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              ) : (
                products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    role="article"
                    aria-labelledby={`product-${product.id}-title`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <OptimizedImage
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <product.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 id={`product-${product.id}-title`} className="text-xl font-light text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <CheckCircle className="h-4 w-4 text-orange-500 mr-2" aria-hidden="true" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Specifications</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(product.specifications).map(([key, value]) => (
                              <div key={key} className="text-gray-600">
                                <span className="font-medium">{key}:</span> {value}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* Interactive Product Comparison */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" aria-labelledby="comparison-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="comparison-heading" className="text-4xl font-light text-gray-900 mb-6">
              Compare Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect solar system for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SolarCalculator />
            <LiveEnergyMonitor />
          </div>
        </div>
      </section>

      {/* Interactive Product Features */}
      <section className="py-20 bg-white" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-4xl font-light text-gray-900 mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Smart Inverter Technology",
                description: "Advanced inverters that optimize power conversion efficiency",
                features: ["95% efficiency", "Grid-tie capability", "Battery backup"]
              },
              {
                icon: Battery,
                title: "Lithium Battery Storage",
                description: "High-capacity batteries for reliable energy storage",
                features: ["10-year warranty", "Deep cycle capability", "Fast charging"]
              },
              {
                icon: Shield,
                title: "Weather Protection",
                description: "Durable components designed for Nigerian climate",
                features: ["UV resistant", "Corrosion proof", "Impact resistant"]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 interactive-card"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {activeTab === "services" && (
        <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl font-light text-gray-900 mb-6">
                Comprehensive Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From consultation to ongoing maintenance, we provide complete solar solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`bg-white border border-gray-200 rounded-lg p-8 transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  role="article"
                  aria-labelledby={`service-${index}-title`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 id={`service-${index}-title`} className="text-xl font-light text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-black text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 id="cta-heading" className="text-2xl font-light mb-6">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Get a free consultation and custom quote for your energy needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group"
                  aria-label="Get free consultation and quote"
                >
                  <ShoppingCart className="h-5 w-5 mr-3" aria-hidden="true" />
                  Get Free Quote
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px]"
                aria-label="Speak with our experts"
              >
                <Users className="h-5 w-5 mr-3" aria-hidden="true" />
                Speak with Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
