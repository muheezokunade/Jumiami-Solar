import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  Battery, 
  CloudSun, 
  Settings, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle,
  Package,
  Truck,
  Headphones,
  Award
} from "lucide-react";
import ProductCard from "@/components/product-card";

// Enhanced product data without pricing
const products = [
  {
    id: 1,
    name: "Premium Solar Panels",
    category: "panels",
    description: "High-efficiency monocrystalline solar panels with advanced anti-reflective coating for maximum energy production.",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: <CloudSun className="h-8 w-8 text-white" />,
    features: ["25-year warranty", "High efficiency", "Anti-PID technology", "Corrosion resistant"],
    specifications: {
      power: "400W - 550W",
      efficiency: "21.5%",
      dimensions: "1765 x 1048 x 35mm",
      weight: "20.5kg"
    },
    benefits: ["Maximum energy output", "Durable construction", "Low maintenance", "Long lifespan"]
  },
  {
    id: 2,
    name: "Hybrid Inverters",
    category: "inverters",
    description: "Advanced hybrid inverters with smart grid integration and battery backup capabilities for reliable power supply.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: <Zap className="h-8 w-8 text-white" />,
    features: ["Grid-tied operation", "Battery backup", "Smart monitoring", "MPPT technology"],
    specifications: {
      power: "3kW - 10kW",
      efficiency: "96.5%",
      input: "DC 200-500V",
      output: "AC 220/240V"
    },
    benefits: ["Seamless grid integration", "Backup power capability", "Real-time monitoring", "Energy optimization"]
  },
  {
    id: 3,
    name: "Lithium Battery Systems",
    category: "batteries",
    description: "High-performance lithium-ion battery systems with intelligent BMS for optimal performance and safety.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: <Battery className="h-8 w-8 text-white" />,
    features: ["Long cycle life", "Deep discharge capability", "Smart BMS", "Modular design"],
    specifications: {
      capacity: "5kWh - 20kWh",
      voltage: "48V",
      cycles: "6000+",
      warranty: "10 years"
    },
    benefits: ["Extended backup time", "High reliability", "Scalable capacity", "Low maintenance"]
  },
  {
    id: 4,
    name: "Solar Mounting Systems",
    category: "accessories",
    description: "Professional-grade mounting systems designed for various roof types and ground installations.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: <Settings className="h-8 w-8 text-white" />,
    features: ["Aluminum construction", "Adjustable tilt", "Easy installation", "Weather resistant"],
    specifications: {
      material: "Aluminum 6063-T5",
      coating: "Anodized finish",
      load: "Up to 5400N",
      compatibility: "All panel types"
    },
    benefits: ["Secure installation", "Optimal positioning", "Durable construction", "Easy maintenance"]
  },
  {
    id: 5,
    name: "Solar Charge Controllers",
    category: "accessories",
    description: "Advanced MPPT charge controllers with LCD display and comprehensive protection features.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: <Shield className="h-8 w-8 text-white" />,
    features: ["MPPT technology", "LCD display", "Multiple protections", "Temperature compensation"],
    specifications: {
      current: "60A - 100A",
      voltage: "12V/24V/48V",
      efficiency: "98%",
      protection: "Overcharge, over-discharge, short circuit"
    },
    benefits: ["Maximum power tracking", "Battery protection", "Real-time monitoring", "Reliable operation"]
  },
  {
    id: 6,
    name: "Solar Monitoring Systems",
    category: "accessories",
    description: "Smart monitoring solutions with mobile app integration for real-time system performance tracking.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: <Star className="h-8 w-8 text-white" />,
    features: ["Real-time monitoring", "Mobile app", "Data logging", "Alert system"],
    specifications: {
      connectivity: "WiFi/4G",
      display: "7-inch touchscreen",
      storage: "1 year data",
      compatibility: "All major brands"
    },
    benefits: ["Performance tracking", "Remote monitoring", "Fault detection", "Energy optimization"]
  }
];

const categories = [
  { id: "all", label: "All Products", icon: Package },
  { id: "panels", label: "Solar Panels", icon: CloudSun },
  { id: "inverters", label: "Inverters", icon: Zap },
  { id: "batteries", label: "Batteries", icon: Battery },
  { id: "accessories", label: "Accessories", icon: Settings }
];

const services = [
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Free Delivery",
    description: "Free delivery to your location across Nigeria"
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and assistance"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Warranty",
    description: "Comprehensive warranty coverage on all products"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Installation",
    description: "Professional installation by certified technicians"
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-4">
            Premium Solar Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality solar products designed for optimal performance, 
            durability, and energy efficiency across Nigeria.
          </p>
        </div>

        {/* Services Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-lg text-center">
              <div className="text-[hsl(19,100%,58%)] mb-2 flex justify-center">
                {service.icon}
              </div>
              <h3 className="font-semibold text-[hsl(0,0%,10%)] mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(19,100%,58%)] data-[state=active]:to-[hsl(47,100%,63%)] data-[state=active]:text-white"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              title={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              icon={product.icon}
              features={product.features}
              specifications={product.specifications}
              benefits={product.benefits}
            />
          ))}
        </div>

        {/* Product Features Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0,0%,10%)] mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with world-leading manufacturers to provide you with the highest quality solar products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Premium Quality</h3>
              <p className="text-gray-600">All products meet international standards and come with comprehensive warranties</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Certified Products</h3>
              <p className="text-gray-600">ISO certified products with proven performance and reliability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Expert Support</h3>
              <p className="text-gray-600">Technical support and guidance from our experienced solar specialists</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your solar installation. 
            Our experts will help you choose the perfect products for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[hsl(19,100%,58%)] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
            >
              <Package className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              View Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
