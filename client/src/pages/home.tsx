import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Calculator, Phone, TrendingUp, Shield, DollarSign, Award, Users, Star, Zap, Battery, Settings, MapPin, Clock, Wrench, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { InteractiveProgress, AnimatedFeatureList } from "@/components/dynamic-content";
import { SolarCalculator, SolarSystemSimulator, InteractiveTestimonialCarousel, LiveEnergyMonitor } from "@/components/interactive-elements";
import { METRIC_SETS, COMPANY_METRICS } from "@/lib/metrics";
import Section from "@/components/ui/section";
import Heading from "@/components/ui/heading";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Consolidated Trust Signals & Statistics */}
      <Section aria-labelledby="trust-heading">
        <div className="text-center mb-12">
          <Heading level={2} className="text-gray-900 mb-4" >Nigeria's Most Trusted Solar Company</Heading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            NERC certified, ISO 9001:2015 standards, and customer-first service
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRIC_SETS.heroStats.map((stat, index) => {
            const iconMap = { Award, Users, Star, Clock };
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-100">
                  <IconComponent className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-light text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Why Jumiami */}
      <Section aria-labelledby="why-heading" className="bg-white">
        <div className="text-center mb-12">
          <Heading level={2} className="text-gray-900 mb-4">Why Jumiami</Heading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Premium products, professional installation, and dedicated support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Quality & Safety', text: 'Top-tier components and certified installers' },
            { icon: Zap, title: 'Performance', text: 'Optimized systems for Nigerian conditions' },
            { icon: Wrench, title: 'Support', text: 'Reliable maintenance and after‑sales service' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="text-center border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-orange-500" />
                </div>
                <div className="text-lg font-medium text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-600">{item.text}</div>
              </div>
            );
          })}
        </div>
      </Section>
      
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
            <LiveEnergyMonitor />
          </div>
        </div>
      </section>

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
            {METRIC_SETS.coverageStats.map((area, index) => (
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

      {/* Consolidated Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500" aria-labelledby="value-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 id="value-heading" className="text-5xl font-light mb-8 tracking-wide text-white">
                Transform Your Energy Future
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join the energy revolution. We don't just install solar panels - we empower Nigerian families to take control of their energy destiny.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <DollarSign className="h-12 w-12 text-white mb-6" />
                <h3 className="text-2xl font-light text-white mb-4">Reduce Bills</h3>
                <p className="text-white/90">
                  Save up to 85% on your monthly electricity costs. Our customers save an average of ₦65,000 per month.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <Shield className="h-12 w-12 text-white mb-6" />
                <h3 className="text-2xl font-light text-white mb-4">Energy Independence</h3>
                <p className="text-white/90">
                  Generate your own power and reduce grid dependency. Never worry about power cuts again.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <TrendingUp className="h-12 w-12 text-white mb-6" />
                <h3 className="text-2xl font-light text-white mb-4">Increase Value</h3>
                <p className="text-white/90">
                  Solar installations can increase your property value by 15-20%. A smart investment for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Contact Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 id="contact-heading" className="text-4xl font-light text-gray-900 mb-6">
              Ready to Transform Your Energy Future?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join {COMPANY_METRICS.happyCustomers}+ Nigerian families who have already made the switch to clean, reliable solar energy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-light text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">24/7 Expert Support</p>
                <a 
                  href="tel:+2348118887425" 
                  className="text-2xl font-light text-orange-600 hover:text-orange-700 transition-colors"
                  aria-label="Call +234 811 888 7425"
                >
                  +234 811 888 7425
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-light text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Quick Response Time</p>
                <a 
                  href="mailto:info@jumiamisolar.com" 
                  className="text-lg font-light text-orange-600 hover:text-orange-700 transition-colors"
                  aria-label="Email info@jumiamisolar.com"
                >
                  info@jumiamisolar.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-light text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Experience Solar In Person</p>
                <address className="text-sm font-light text-gray-600 not-italic">
                  Ikota Shopping Complex<br />
                  VGC, Ajah, Lagos
                </address>
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
                  Start Your Solar Journey
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <a 
                href="https://wa.me/2348118887425"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px]"
                  aria-label="Chat with us on WhatsApp"
                >
                  <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </a>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-4xl font-light text-gray-900 mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about solar installation
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How long does installation take?",
                answer: "Most residential installations are completed within 1-2 days. Commercial projects may take 3-7 days depending on system size."
              },
              {
                question: "What maintenance is required?",
                answer: "Solar panels need minimal maintenance. We recommend annual cleaning and inspection to ensure optimal performance."
              },
              {
                question: "What happens during power outages?",
                answer: "Our systems include battery backup, ensuring you have power even during grid outages."
              },
              {
                question: "Do you provide warranty?",
                answer: "Yes, we provide a 5-year warranty on installation and equipment. Manufacturers' warranties on panels and inverters may extend longer."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
              >
                Get More Answers
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="blog-heading" className="text-4xl font-light text-gray-900 mb-6">
              Solar Energy Tips & News
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest in solar technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Guide: Choosing the Right Solar System",
                excerpt: "Learn how to select the perfect solar system for your home or business based on your energy needs and budget.",
                image: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
                category: "Guide",
                readTime: "5 min read"
              },
              {
                title: "Solar Energy in Nigeria: 2024 Update",
                excerpt: "Latest developments in Nigeria's solar energy sector, including new policies and market trends.",
                image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
                category: "News",
                readTime: "4 min read"
              },
              {
                title: "Maintenance Tips for Your Solar Panels",
                excerpt: "Essential maintenance tips to keep your solar panels performing at their best throughout the year.",
                image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
                category: "Tips",
                readTime: "3 min read"
              }
            ].map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <Link to="/blog" className="text-orange-500 hover:text-orange-600 font-medium">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
              >
                View All Articles
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
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
    </div>
  );
}