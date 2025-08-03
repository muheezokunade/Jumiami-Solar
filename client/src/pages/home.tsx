import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Calculator, Phone, TrendingUp, Shield, DollarSign, Award, Users, Star, Zap, Battery, Settings, MapPin, Clock, Wrench, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedStats, RealTimeUpdates, InteractiveProgress, AnimatedFeatureList } from "@/components/dynamic-content";
import { SolarCalculator, SolarSystemSimulator, InteractiveTestimonialCarousel, LiveEnergyMonitor } from "@/components/interactive-elements";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Jumiami Trust Signals - Brand Colors */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400" aria-labelledby="trust-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="trust-heading" className="text-4xl font-light text-white mb-6">
              Nigeria's Most Trusted Solar Company
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              The only solar company with NERC certification and ISO 9001:2015 standards
            </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "NERC Certified",
                description: "Only solar company approved by Nigerian Electricity Regulatory Commission",
                icon: Award,
                number: "1st",
                ariaLabel: "First NERC certified solar company in Nigeria"
              },
              {
                title: "500+ Families Served",
                description: "More Nigerian families trust us than any other solar company",
                icon: Users,
                number: "500+",
                ariaLabel: "Over 500 Nigerian families served"
              },
              {
                title: "4.9/5 Customer Rating",
                description: "Highest customer satisfaction rating in the industry",
                icon: Star,
                number: "4.9/5",
                ariaLabel: "Four point nine out of five customer rating"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                role="region"
                aria-labelledby={`feature-${index}-title`}
              >
                <div 
                  className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8"
                  aria-label={feature.ariaLabel}
                >
                  <feature.icon className="h-12 w-12 text-white" aria-hidden="true" />
            </div>
                <div className="text-4xl font-light text-white mb-4" aria-label={`${feature.number} ${feature.title}`}>
                  {feature.number}
            </div>
                <h3 id={`feature-${index}-title`} className="text-xl font-light text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-base">
                  {feature.description}
                </p>
            </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Product Preview */}
      <section className="py-20 bg-white" aria-labelledby="products-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="products-heading" className="text-4xl font-light text-gray-900 mb-6">
              Premium Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality solar products designed for Nigerian homes and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Solar Panels",
                description: "High-efficiency monocrystalline panels",
                image: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
                icon: Zap,
                features: ["400W-550W", "5-year warranty", "High efficiency"]
              },
              {
                name: "Hybrid Inverters",
                description: "Smart grid integration with backup",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdhHXSe4zey3vJ8Shzf7b535FElelgAKGUQ&s",
                icon: Settings,
                features: ["3kW-10kW", "Battery backup", "Smart monitoring"]
              },
              {
                name: "Battery Systems",
                description: "Lithium-ion energy storage solutions",
                image: "https://www.energy.gov/sites/default/files/2021-11/35974719113_24cfb03c24_o.jpg",
                icon: Battery,
                features: ["5kWh-20kWh", "10-year warranty", "Smart BMS"]
              },
              {
                name: "Mounting Systems",
                description: "Professional installation hardware",
                image: "https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg",
                icon: Shield,
                features: ["Aluminum construction", "Weather resistant", "Easy installation"]
              }
            ].map((product, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                role="article"
                aria-label={`${product.name} product preview`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <product.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
                aria-label="View all solar products and services"
              >
                View All Products
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Stats Section */}
      <AnimatedStats />

      {/* Real-time Updates */}
      <RealTimeUpdates />

      {/* Enhanced Service Areas with Progress Bars */}
      <section className="py-20 bg-white" aria-labelledby="service-areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="service-areas-heading" className="text-4xl font-light text-gray-900 mb-6">
              Service Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We serve major cities across Nigeria with expanding coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: "Lagos", coverage: 95, projects: 150, rating: 4.9 },
              { city: "Ilorin", coverage: 88, projects: 85, rating: 4.8 },
              { city: "Abeokuta", coverage: 92, projects: 120, rating: 4.9 }
            ].map((area, index) => (
              <div
                key={area.city}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{area.city}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{area.rating}</span>
                  </div>
                </div>
                
                <InteractiveProgress 
                  percentage={area.coverage} 
                  label="Service Coverage" 
                  color="orange"
                />
                
                <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                  <span>{area.projects} projects completed</span>
                  <span>{area.coverage}% coverage</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Installation Process */}
      <section className="py-20 bg-gray-50" aria-labelledby="installation-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="installation-heading" className="text-4xl font-light text-gray-900 mb-6">
              Simple Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to completion in just 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "Expert assessment of your energy needs and site evaluation",
                features: ["Energy audit", "Site assessment", "Custom quote"]
              },
              {
                step: "02",
                title: "System Design",
                description: "Professional design optimized for your specific requirements",
                features: ["Custom layout", "Efficiency optimization", "Permit assistance"]
              },
              {
                step: "03",
                title: "Installation",
                description: "Professional installation by certified technicians",
                features: ["Expert technicians", "Quality assurance", "Safety compliance"]
              },
              {
                step: "04",
                title: "Monitoring",
                description: "Ongoing support and performance monitoring",
                features: ["24/7 monitoring", "Maintenance alerts", "Performance tracking"]
              }
            ].map((process, index) => (
              <div
                key={process.step}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {process.step}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {process.description}
                </p>
                
                <AnimatedFeatureList features={process.features} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jumiami Value Proposition - Brand Colors */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500" aria-labelledby="value-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 id="value-heading" className="text-5xl font-light mb-8 tracking-wide text-white">
              Transform Your Energy Future
              </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join the energy revolution. We don't just install solar panels - we empower Nigerian families to take control of their energy destiny.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
                aria-label="Start your energy transformation with free consultation"
              >
                <Calculator className="h-5 w-5 mr-3" aria-hidden="true" />
                Start Your Transformation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-orange-600 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px]"
                aria-label="Speak with our energy experts at +234 811 888 7425"
              >
                <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                Speak with Experts
              </Button>
                    </div>
                    </div>
                  </div>
      </section>

      {/* Contact Quick Access */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 id="contact-heading" className="text-4xl font-light text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Get your free consultation and quote today. Our experts are ready to help you save money and energy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-light text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                <a 
                  href="tel:+2348118887425" 
                  className="text-2xl font-light text-orange-600 hover:text-orange-700 transition-colors"
                  aria-label="Call +234 811 888 7425"
                >
                  +234 811 888 7425
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-light text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions</p>
                <a 
                  href="mailto:info@jumiamisolar.com" 
                  className="text-lg font-light text-orange-600 hover:text-orange-700 transition-colors"
                  aria-label="Email info@jumiamisolar.com"
                >
                  info@jumiamisolar.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-light text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our office location</p>
                <p className="text-sm font-light text-gray-600">
                  Ikota Shopping Complex<br />
                  VGC, Ajah, Lagos
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
                  aria-label="Get free quote and consultation"
                >
                  <Calculator className="h-5 w-5 mr-3" aria-hidden="true" />
                  Get Free Quote
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px]"
                aria-label="Schedule a consultation call"
              >
                <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jumiami Storytelling - Brand Colors */}
      <section className="py-20 bg-white" aria-labelledby="stories-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="stories-heading" className="text-4xl font-light text-gray-900 mb-6">
              Real Stories, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we're changing lives across Nigeria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Adebayo Oke, Lagos",
                savings: "₦65,000 monthly savings",
                testimonial: "Before Jumiami Solar, I was spending ₦85,000 monthly on electricity. Now I pay only ₦20,000. The extra ₦65,000 goes to my children's education. This isn't just about saving money - it's about securing our family's future.",
                ariaLabel: "Success story from Adebayo Oke in Lagos about family savings"
              },
              {
                name: "Fatima Hassan, Ilorin",
                savings: "70% cost reduction",
                testimonial: "Our business was struggling with ₦120,000 monthly electricity bills. Jumiami Solar reduced our costs to ₦35,000. That ₦85,000 monthly savings allowed us to hire 3 more employees. We're not just saving money - we're creating jobs.",
                ariaLabel: "Business transformation story from Fatima Hassan in Ilorin"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg shadow-lg transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                role="article"
                aria-label={testimonial.ariaLabel}
              >
                <blockquote className="text-gray-700 mb-8 italic leading-relaxed text-lg">
                  "{testimonial.testimonial}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                    <span className="font-light text-gray-900">{testimonial.name}</span>
                  </div>
                  <div className="text-sm text-orange-600 font-medium">
                    <span className="font-light">{testimonial.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jumiami Final CTA - Brand Colors */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500" aria-labelledby="journey-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 id="journey-heading" className="text-2xl font-light text-white mb-6">
              Ready to Join the Energy Revolution?
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Be part of Nigeria's sustainable energy future. 500+ families have already transformed their lives.
            </p>
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
              aria-label="Join the energy revolution and start your transformation today"
            >
              Join the Revolution
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Solar Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50" aria-labelledby="calculator-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="calculator-heading" className="text-4xl font-light text-gray-900 mb-6">
              Calculate Your Solar Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how much you can save with solar energy
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SolarCalculator />
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Solar?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Reduce Electricity Bills</h4>
                      <p className="text-gray-600 text-sm">Save up to 85% on your monthly electricity costs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Energy Independence</h4>
                      <p className="text-gray-600 text-sm">Generate your own power and reduce grid dependency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Increase Property Value</h4>
                      <p className="text-gray-600 text-sm">Solar installations can increase home value by 15-20%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar System Simulator */}
      <section className="py-20 bg-white" aria-labelledby="simulator-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="simulator-heading" className="text-4xl font-light text-gray-900 mb-6">
              Experience Solar Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how solar systems work in real-time
            </p>
          </div>
          
          <SolarSystemSimulator />
        </div>
      </section>

      {/* Interactive Testimonials */}
      <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl font-light text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from satisfied customers across Nigeria
            </p>
          </div>
          
          <InteractiveTestimonialCarousel />
        </div>
      </section>

      {/* Live Energy Monitor */}
      <section className="py-20 bg-white" aria-labelledby="monitor-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="monitor-heading" className="text-4xl font-light text-gray-900 mb-6">
              Live Energy Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-time data from our solar installations
            </p>
          </div>
          
          <LiveEnergyMonitor />
        </div>
      </section>
    </div>
  );
}