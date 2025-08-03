import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Award, Wrench, Calendar, Settings, ShieldCheck, Clock, DollarSign, MapPin, Phone, Mail, ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp, Building, Factory, Calculator, Shield, Truck, Headphones, ThumbsUp, Quote, HomeIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solar Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential rooftops to commercial installations, we provide complete solar solutions across Nigeria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: "Residential Solar",
                description: "Complete home solar systems with battery backup. Save ₦30,000-₦80,000 monthly on electricity bills.",
                features: ["5-10kW Systems", "Battery Backup", "Grid-Tied Options", "Smart Monitoring"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Building,
                title: "Commercial Solar",
                description: "Large-scale commercial installations for businesses. Reduce operational costs by 60-80%.",
                features: ["20-100kW Systems", "Industrial Grade", "ROI Calculator", "Maintenance Plans"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Factory,
                title: "Industrial Solar",
                description: "Heavy-duty solar solutions for factories and manufacturing. Massive cost savings and reliability.",
                features: ["100kW+ Systems", "Custom Solutions", "24/7 Support", "Performance Guarantee"],
                color: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied customers across Nigeria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Adebayo Oke",
                location: "Lagos",
                savings: "₦65,000/month",
                rating: 5,
                testimonial: "Jumiami Solar transformed our home energy. We went from ₦85,000 monthly bills to ₦20,000. The installation was professional and the system works perfectly.",
                avatar: "AO"
              },
              {
                name: "Fatima Hassan",
                location: "Ilorin",
                savings: "₦45,000/month",
                rating: 5,
                testimonial: "Best investment we've made. Our business electricity costs dropped by 70%. The team was knowledgeable and the warranty gives us peace of mind.",
                avatar: "FH"
              },
              {
                name: "Emeka Okonkwo",
                location: "Abeokuta",
                savings: "₦55,000/month",
                rating: 5,
                testimonial: "Excellent service from start to finish. The solar system pays for itself and we're saving ₦55,000 monthly. Highly recommend Jumiami Solar!",
                avatar: "EO"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-green-600">{testimonial.savings}</span> savings
                    </div>
                    <Quote className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees. Clear pricing with flexible payment options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter Package",
                price: "₦2.5M",
                savings: "₦30K/month",
                features: ["5kW System", "8 Solar Panels", "5kWh Battery", "Inverter Included", "Installation Free", "2-Year Warranty"],
                popular: false
              },
              {
                title: "Popular Package",
                price: "₦4.2M",
                savings: "₦55K/month",
                features: ["10kW System", "16 Solar Panels", "10kWh Battery", "Smart Inverter", "Free Installation", "5-Year Warranty", "Monitoring App"],
                popular: true
              },
              {
                title: "Premium Package",
                price: "₦6.8M",
                savings: "₦85K/month",
                features: ["15kW System", "24 Solar Panels", "15kWh Battery", "Hybrid Inverter", "Free Installation", "10-Year Warranty", "24/7 Support"],
                popular: false
              }
            ].map((package_, index) => (
              <Card key={index} className={`relative ${package_.popular ? 'ring-2 ring-orange-500 bg-white/10' : 'bg-white/5'} border-white/20`}>
                {package_.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{package_.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{package_.price}</span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <div className="text-green-400 font-semibold mb-6">
                    Save {package_.savings}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold py-3 rounded-xl">
                    Get Free Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Leading Nigerian Businesses Choose Jumiami Solar
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're not just installing solar panels - we're building energy independence for Nigeria. Our proven track record speaks for itself.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Calculator,
                    title: "Proven ROI Calculator",
                    description: "Our proprietary software shows exact savings before installation. Average customer sees 40% ROI in 3 years."
                  },
                  {
                    icon: Truck,
                    title: "Same-Day Installation",
                    description: "Professional teams complete installations in one day. Minimal disruption to your business or home."
                  },
                  {
                    icon: Headphones,
                    title: "24/7 Nigerian Support",
                    description: "Local support team available round the clock. We speak your language and understand your needs."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Guarantee</h3>
                <div className="space-y-4">
                  {[
                    "25-Year Panel Performance Warranty",
                    "5-Year Inverter Warranty",
                    "2-Year Free Maintenance",
                    "40% ROI Guarantee",
                    "₦50K Monthly Savings Promise"
                  ].map((guarantee, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-white" />
                      <span className="font-medium">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serving Major Nigerian Cities
            </h2>
            <p className="text-xl text-gray-600">
              Professional solar installation services across Nigeria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Lagos",
                customers: "250+",
                avgSavings: "₦60K/month",
                services: ["Residential", "Commercial", "Industrial"]
              },
              {
                city: "Ilorin",
                customers: "120+",
                avgSavings: "₦45K/month",
                services: ["Residential", "Commercial"]
              },
              {
                city: "Abeokuta",
                customers: "80+",
                avgSavings: "₦50K/month",
                services: ["Residential", "Commercial"]
              }
            ].map((location, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.city}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{location.customers}</span> customers
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-green-600">{location.avgSavings}</span> average savings
                    </div>
                  </div>
                  <div className="space-y-2">
                    {location.services.map((service, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-gray-50 rounded-full px-3 py-1">
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ satisfied customers already saving ₦50,000+ monthly. Get your free consultation and custom quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <Calculator className="h-5 w-5 mr-3" />
              Get Free Quote + ROI Calculator
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <Phone className="h-5 w-5 mr-3" />
              Call +234 811 888 7425
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-4 w-4 text-green-400" />
              <span>500+ Successful Installations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span>25-Year Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-yellow-400" />
              <span>40% ROI Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}