import { Award, Users, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white" aria-labelledby="about-hero-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 id="about-hero-heading" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wide">
              About Jumiami
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Pioneering Nigeria's renewable energy revolution with premium solar solutions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 id="story-heading" className="text-4xl font-light text-gray-900 mb-8">
                Illuminating Nigeria for 5+ Years
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Jumiami Solar, we're more than just a solar company – we're pioneers in Nigeria's renewable energy revolution. Founded with a mission to "kick out darkness in the environment," we've been transforming how businesses and homes across Lagos access clean, reliable power.
                </p>
                
                <p>
                  From our strategic location in Ikota Shopping Complex, VGC, Ajah, Lagos, we've built a reputation as Nigeria's premier solar energy solutions provider. Our journey began with a simple belief: every Nigerian deserves access to clean, affordable, and reliable electricity.
                </p>
                
                <p>
                  Over the past five years, we've successfully completed over 50 projects, installed more than 5MW of solar capacity, and served over 1000 satisfied customers. From residential rooftops to large commercial installations, we've consistently delivered excellence in every project.
                </p>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <img 
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg" 
                alt="Solar panels installation on rooftop" 
                className="w-full h-96 object-cover rounded-lg shadow-2xl" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 id="mission-heading" className="text-5xl font-light text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              To kick out darkness in the environment by providing premium solar energy solutions that are reliable, affordable, and sustainable for every Nigerian home and business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Excellence",
                  description: "Delivering the highest quality solar solutions with unmatched attention to detail"
                },
                {
                  title: "Innovation",
                  description: "Staying at the forefront of solar technology to provide cutting-edge solutions"
                },
                {
                  title: "Integrity",
                  description: "Building trust through transparent communication and reliable service"
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-light text-white mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50" aria-labelledby="impact-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="impact-heading" className="text-4xl font-light text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming lives across Nigeria with clean, reliable energy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Projects Completed",
                description: "Across residential and commercial sectors"
              },
              {
                number: "5MW+",
                label: "Total Capacity",
                description: "Powering thousands of homes and businesses"
              },
              {
                number: "1000+",
                label: "Satisfied Customers",
                description: "Building lasting relationships"
              },
              {
                number: "24/7",
                label: "Support Available",
                description: "Round-the-clock customer service"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                role="region"
                aria-labelledby={`stat-${index}-label`}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-light text-white" aria-label={`${stat.number} ${stat.label}`}>
                    {stat.number}
                  </div>
                </div>
                <h3 id={`stat-${index}-label`} className="text-lg font-light text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-black text-white" aria-labelledby="location-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 id="location-heading" className="text-4xl font-light mb-8">
              Visit Our Showroom
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Experience our solar solutions firsthand at our state-of-the-art showroom in Lagos
            </p>
            
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-lg mb-12">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white mr-4" aria-hidden="true" />
                <h3 className="text-2xl font-light">Ikota Shopping Complex</h3>
              </div>
              <p className="text-white/90 mb-6">
                Road 3, Suite E 167, 150, 151<br />
                Opposite Providus Bank, VGC, Ajah, Lagos
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white mr-2" aria-hidden="true" />
                  Easy access from Lekki-Epe Expressway
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white mr-2" aria-hidden="true" />
                  Free parking available
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white mr-2" aria-hidden="true" />
                  Product display and consultation
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group"
                  aria-label="Contact us for more information"
                >
                  Contact Us
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px]"
                aria-label="Schedule a visit to our showroom"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 id="cta-heading" className="text-2xl font-light text-white mb-6">
              Ready to Join the Energy Revolution?
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Be part of Nigeria's sustainable energy future. 1000+ families have already transformed their lives.
            </p>
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group shadow-lg"
              aria-label="Start your energy transformation today"
            >
              Start Your Transformation
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
