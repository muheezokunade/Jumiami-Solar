import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CloudSun, Zap, Battery, Lightbulb } from "lucide-react";

export default function Products() {
  const { toast } = useToast();

  const handleRequestQuote = (productName: string) => {
    toast({
      title: "Quote Requested",
      description: `Thank you for your interest in ${productName}. We'll contact you shortly with a detailed quote.`,
    });
  };

  const products = [
    {
      title: "Solar Panels",
      description: "High-efficiency panels including our flagship 14.4 kW systems for maximum energy output.",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      icon: <CloudSun className="h-8 w-8 text-white" />
    },
    {
      title: "Inverters",
      description: "Hybrid and pure sine wave inverters from 12 kVA to 108 kVA for all power requirements.",
      imageUrl: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      icon: <Zap className="h-8 w-8 text-white" />
    },
    {
      title: "Batteries",
      description: "Premium lithium batteries from 22 kW to 270 kW capacity for reliable energy storage.",
      imageUrl: "https://pixabay.com/get/gdc9f9697d339c0d979aff0fb9b670650afacac1cc310a87499a580e4ce1b7aaed2914fbbeb4b5c377f39408221c97c15f7843f28e2a7242eae647bf06b4af931_1280.jpg",
      icon: <Battery className="h-8 w-8 text-white" />
    },
    {
      title: "Accessories",
      description: "Street lights, mounting systems, cables, and all essential solar accessories.",
      imageUrl: "https://pixabay.com/get/g267350aa2e1e42d39209ef49e527dc90115bb5aa783f33a281f8c608cf37f18b01623fad889333bc8b616287642f6010907f0c8a9c553ec2761c961ab3af5ef4_1280.jpg",
      icon: <Lightbulb className="h-8 w-8 text-white" />  
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Premium Solar Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Discover our comprehensive range of high-quality solar panels, inverters, batteries, and accessories
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Our Product <span className="text-[hsl(19,100%,58%)]">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential installations to commercial projects, we offer a complete range of solar products tailored to Nigeria's energy needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                icon={product.icon}
                onRequestQuote={() => handleRequestQuote(product.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      
      {/* Solar Panels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
                Solar <span className="text-[hsl(19,100%,58%)]">Panels</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our premium solar panels are designed to withstand Nigeria's tropical climate while delivering maximum efficiency. From residential rooftops to large commercial installations, we have the right panels for every project.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">14.4 kW High-Efficiency Panels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Monocrystalline & Polycrystalline Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">25-Year Performance Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Anti-PID Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Corrosion-Resistant Frames</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="High-efficiency solar panels" 
                className="rounded-2xl shadow-2xl floating-card" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inverters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Solar inverter system" 
                className="rounded-2xl shadow-2xl floating-card" 
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
                Solar <span className="text-[hsl(19,100%,58%)]">Inverters</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our range of inverters converts DC power from solar panels into AC power for your home or business. Available in various capacities to match your energy requirements perfectly.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-[hsl(19,100%,58%)] mb-2">12 kVA</div>
                    <div className="text-sm text-gray-600">Residential</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-[hsl(19,100%,58%)] mb-2">50 kVA</div>
                    <div className="text-sm text-gray-600">Small Commercial</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-[hsl(19,100%,58%)] mb-2">108 kVA</div>
                    <div className="text-sm text-gray-600">Large Commercial</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-[hsl(19,100%,58%)] mb-2">Custom</div>
                    <div className="text-sm text-gray-600">Industrial</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Pure Sine Wave Output</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Hybrid & Grid-Tie Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Advanced MPPT Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batteries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-centers">
            <div>
              <h2 className="text-4xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
                Energy Storage <span className="text-[hsl(19,100%,58%)]">Batteries</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Store your solar energy with our premium battery systems. From lithium-ion to tubular batteries, we offer reliable energy storage solutions for uninterrupted power supply.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-[hsl(19,100%,58%)] mb-1">22 kW</div>
                  <div className="text-sm text-gray-600">Residential</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-[hsl(19,100%,58%)] mb-1">100 kW</div>
                  <div className="text-sm text-gray-600">Commercial</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-[hsl(19,100%,58%)] mb-1">270 kW</div>
                  <div className="text-sm text-gray-600">Industrial</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Lithium & Tubular Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">10+ Year Lifespan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Deep Cycle Performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></div>
                  <span className="font-semibold">Temperature Compensation</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://pixabay.com/get/gdc9f9697d339c0d979aff0fb9b670650afacac1cc310a87499a580e4ce1b7aaed2914fbbeb4b5c377f39408221c97c15f7843f28e2a7242eae647bf06b4af931_1280.jpg" 
                alt="Lithium battery storage" 
                className="rounded-2xl shadow-2xl floating-card" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Solar <span className="text-[hsl(19,100%,58%)]">Accessories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your solar installation with our range of high-quality accessories and components
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="floating-card text-center p-6">
              <CardContent className="p-0">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-[hsl(19,100%,58%)]" />
                <h3 className="text-lg font-bold mb-2">LED Street Lights</h3>
                <p className="text-gray-600 text-sm">Solar-powered LED street lighting solutions for security and illumination</p>
              </CardContent>
            </Card>
            
            <Card className="floating-card text-center p-6">
              <CardContent className="p-0">
                <div className="h-12 w-12 mx-auto mb-4 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="text-lg font-bold mb-2">Mounting Systems</h3>
                <p className="text-gray-600 text-sm">Robust mounting rails and hardware for secure panel installation</p>
              </CardContent>
            </Card>
            
            <Card className="floating-card text-center p-6">
              <CardContent className="p-0">
                <div className="h-12 w-12 mx-auto mb-4 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center">
                  <div className="w-8 h-1 bg-white rounded"></div>
                </div>
                <h3 className="text-lg font-bold mb-2">DC Cables</h3>
                <p className="text-gray-600 text-sm">High-quality solar cables rated for outdoor installations</p>
              </CardContent>
            </Card>
            
            <Card className="floating-card text-center p-6">
              <CardContent className="p-0">
                <div className="h-12 w-12 mx-auto mb-4 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded"></div>
                </div>
                <h3 className="text-lg font-bold mb-2">Monitoring Systems</h3>
                <p className="text-gray-600 text-sm">Real-time system monitoring and performance tracking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Choose Your <span className="text-[hsl(19,100%,58%)]">Solar Solution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our experts will help you select the perfect combination of products for your energy needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white px-10 py-4 text-lg font-semibold hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] transition-all duration-300 transform hover:scale-105"
              onClick={() => handleRequestQuote("Complete Solar System")}
            >
              Get Custom Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(0,0%,10%)] transition-all duration-300"
            >
              Visit Showroom
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
