import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Star, Shield, Zap, ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      name: "Basic Home Package",
      price: "₦800,000",
      originalPrice: "₦1,000,000",
      savings: "₦200,000",
      description: "Perfect for small homes and apartments",
      features: [
        "2kW Solar Panel System",
        "1 Inverter (2kW)",
        "2 Solar Batteries",
        "Professional Installation",
        "25-Year Panel Warranty",
        "5-Year Inverter Warranty",
        "2 Years Free Maintenance",
        "Monthly Savings: ₦25,000"
      ],
      popular: false
    },
    {
      name: "Standard Home Package",
      price: "₦1,500,000",
      originalPrice: "₦1,900,000",
      savings: "₦400,000",
      description: "Ideal for medium-sized homes",
      features: [
        "5kW Solar Panel System",
        "1 Inverter (5kW)",
        "4 Solar Batteries",
        "Professional Installation",
        "25-Year Panel Warranty",
        "5-Year Inverter Warranty",
        "2 Years Free Maintenance",
        "Monthly Savings: ₦50,000"
      ],
      popular: true
    },
    {
      name: "Premium Home Package",
      price: "₦2,500,000",
      originalPrice: "₦3,200,000",
      savings: "₦700,000",
      description: "Complete solution for large homes",
      features: [
        "10kW Solar Panel System",
        "1 Inverter (10kW)",
        "8 Solar Batteries",
        "Professional Installation",
        "25-Year Panel Warranty",
        "5-Year Inverter Warranty",
        "2 Years Free Maintenance",
        "Monthly Savings: ₦80,000"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Transparent <span className="text-[hsl(19,100%,58%)]">Solar Pricing</span>
          </h1>
          <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            No hidden fees. Clear pricing with 0% interest financing available. Save ₦25,000 - ₦80,000 monthly on electricity bills.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/contact" aria-label="Get free quote and pricing">
              <Button 
                size="lg"
                className="bg-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,50%)] text-white px-8 py-4 text-lg font-bold"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+2348118887425" aria-label="Call for pricing information">
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call for Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-4">
              Solar Package Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect solar package for your home. All packages include professional installation and comprehensive warranties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-[hsl(19,100%,58%)] shadow-xl' : 'shadow-lg'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[hsl(19,100%,58%)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)]">{pkg.name}</h3>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-[hsl(19,100%,58%)]">{pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">Save {pkg.savings}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" aria-label={`Get quote for ${pkg.name}`}>
                    <Button className="w-full bg-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,50%)] text-white">
                      Get Quote for {pkg.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Make solar accessible with our flexible financing options. No hidden fees, transparent terms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Zap className="h-12 w-12 text-[hsl(19,100%,58%)] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-[hsl(0,0%,10%)]">0% Interest Financing</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Pay over 12-24 months with 0% interest for qualified customers. No hidden fees.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Shield className="h-12 w-12 text-[hsl(19,100%,58%)] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-[hsl(0,0%,10%)]">Bank Transfer</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Pay directly to our bank account. Get 5% discount for full payment upfront.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Star className="h-12 w-12 text-[hsl(19,100%,58%)] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-[hsl(0,0%,10%)]">Installment Plan</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Pay 50% upfront, balance after installation. Flexible payment terms available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-4">
              Comprehensive Warranties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete peace of mind with industry-leading warranties and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm border-l-4 border-[hsl(19,100%,58%)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-3">25-Year Panel Warranty</h3>
                <p className="text-gray-600 mb-4">
                  Premium solar panels with 25-year performance warranty. Guaranteed to maintain at least 80% efficiency after 25 years.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Performance guarantee for 25 years</li>
                  <li>• Product defects covered</li>
                  <li>• Labor included for warranty claims</li>
                  <li>• Transferable to new property owners</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm border-l-4 border-[hsl(19,100%,58%)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-3">5-Year Inverter Warranty</h3>
                <p className="text-gray-600 mb-4">
                  High-quality inverters with 5-year comprehensive warranty. Includes parts, labor, and technical support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Full replacement coverage</li>
                  <li>• Technical support included</li>
                  <li>• Extended warranty available</li>
                  <li>• 24/7 emergency support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and start saving ₦25,000 - ₦80,000 monthly on electricity bills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" aria-label="Get free quote and pricing">
              <Button 
                size="lg"
                className="bg-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,50%)] text-white px-8 py-4 text-lg font-semibold"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+2348118887425" aria-label="Call for pricing details">
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-[hsl(0,0%,10%)] px-8 py-4 text-lg font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call for Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 