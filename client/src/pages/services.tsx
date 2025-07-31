import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ShoppingCart, Hammer, Wrench, Settings, CheckCircle, Users, Clock, Award } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      title: "Sales",
      description: "Premium solar products at competitive prices with flexible payment options.",
      features: [
        "Wide range of premium solar products",
        "Competitive pricing with transparent quotes",
        "Flexible payment plans available",
        "Expert product consultation"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: <Hammer className="h-12 w-12 text-white" />,
      title: "Installation",
      description: "Professional installation by certified technicians with warranty coverage.",
      features: [
        "Certified and experienced technicians",
        "Safe and code-compliant installations",
        "Comprehensive warranty coverage",
        "Post-installation system testing"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: "Repair",
      description: "Quick diagnosis and repair services to minimize downtime and maximize efficiency.",
      features: [
        "Rapid response emergency repairs",
        "Advanced diagnostic equipment",
        "Genuine replacement parts only",
        "Performance optimization included"
      ],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: <Settings className="h-12 w-12 text-white" />,
      title: "Maintenance",
      description: "Regular maintenance programs to ensure optimal performance and longevity.",
      features: [
        "Scheduled preventive maintenance",
        "Performance monitoring and analysis",
        "Cleaning and component inspection",
        "Extended system lifespan guarantee"
      ],
      image: "https://images.unsplash.com/photo-1599509098715-d8e8d1e1b7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Our Solar Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Comprehensive solar solutions from consultation to ongoing maintenance
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Complete Solar <span className="text-[hsl(19,100%,58%)]">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide end-to-end solar energy solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="w-24 h-24 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow"
                  style={{animationDelay: `${index * 0.5}s`}}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-4xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
                  {service.title} <span className="text-[hsl(19,100%,58%)]">Services</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[hsl(19,100%,58%)] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact">
                  <Button className="bg-[hsl(19,100%,58%)] text-white hover:bg-[hsl(19,100%,48%)] font-medium">
                    Get Started Today
                  </Button>
                </Link>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img 
                  src={service.image} 
                  alt={`${service.title} service`}
                  className="rounded-2xl shadow-2xl floating-card w-full" 
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Process */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Our Service <span className="text-[hsl(19,100%,58%)]">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined approach ensuring quality and satisfaction at every step
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Consultation</h3>
              <p className="text-gray-300">Free assessment of your energy needs and site evaluation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Design & Quote</h3>
              <p className="text-gray-300">Custom system design with detailed pricing and timeline</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Installation</h3>
              <p className="text-gray-300">Professional installation by certified technicians</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="text-gray-300">Ongoing maintenance and 24/7 customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Our Service <span className="text-[hsl(19,100%,58%)]">Guarantees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our work with comprehensive warranties and guarantees
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="floating-card text-center p-8 shadow-lg">
              <CardContent className="p-0">
                <Award className="h-16 w-16 mx-auto mb-6 text-[hsl(19,100%,58%)]" />
                <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Quality Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  All installations come with comprehensive warranties on both products and workmanship. We guarantee the quality of our materials and installation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="floating-card text-center p-8 shadow-lg">
              <CardContent className="p-0">
                <Users className="h-16 w-16 mx-auto mb-6 text-[hsl(19,100%,58%)]" />
                <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Customer Satisfaction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your satisfaction is our top priority. We work closely with you throughout the process to ensure your expectations are not just met, but exceeded.
                </p>
              </CardContent>
            </Card>
            
            <Card className="floating-card text-center p-8 shadow-lg">
              <CardContent className="p-0">
                <Clock className="h-16 w-16 mx-auto mb-6 text-[hsl(19,100%,58%)]" />
                <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Timely Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  We respect your time and complete all projects within agreed timelines. Emergency repairs are handled within 24 hours of notification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have chosen Jumiami Solar for their energy needs. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-[hsl(0,0%,10%)] px-10 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(0,0%,10%)] transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
