import { Award, Users, MapPin, ArrowRight, CheckCircle, Star, Calendar, Trophy, Shield, Zap, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import OptimizedImage from "@/components/ui/optimized-image";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { COMPANY_METRICS, METRIC_SETS } from "@/lib/metrics";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Mrs. Adebayo",
      location: "Lekki, Lagos",
      rating: 5,
      text: "Jumiami Solar transformed our home with a 5kW system. We've been enjoying 24/7 power for 2 years now. The installation was professional and the after-sales support is excellent.",
      project: "5kW Residential Installation"
    },
    {
      name: "Mr. Okechukwu",
      location: "Victoria Island, Lagos", 
      rating: 5,
      text: "As a business owner, reliable power is crucial. Jumiami installed a 20kW commercial system that powers our entire office. ROI was achieved in just 18 months.",
      project: "20kW Commercial Installation"
    },
    {
      name: "Dr. Fatima",
      location: "Ilorin, Kwara",
      rating: 5,
      text: "The team at Jumiami is exceptional. They handled everything from consultation to installation professionally. Our hospital now has uninterrupted power supply.",
      project: "15kW Healthcare Facility"
    }
  ];

  const teamMembers = [
    {
      name: "Faridah Sulaimon",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      description: "Leading Nigeria's solar revolution with 8+ years of renewable energy experience."
    },
    {
      name: "Bukky Sulyman", 
      role: "Technical Director",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      description: "Expert in solar system design and installation with 100+ successful projects."
    },
    {
      name: "Olori Ejires",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg", 
      description: "Ensuring seamless project delivery and customer satisfaction across all locations."
    }
  ];

  const awards = [
    {
      title: "Best Solar Company 2023",
      issuer: "Nigerian Energy Awards",
      icon: Trophy,
      year: "2023"
    },
    {
      title: "ISO 9001:2015 Certified",
      issuer: "International Organization for Standardization",
      icon: Shield,
      year: "2022"
    },
    {
      title: "Customer Excellence Award",
      issuer: "Lagos Chamber of Commerce",
      icon: Star,
      year: "2023"
    }
  ];

  const milestones = COMPANY_METRICS.milestones;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">About Us</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        title={<>About Jumiami</>}
        subtitle={<>Pioneering Nigeria's renewable energy revolution with premium solar solutions</>}
        image="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
      />

      {/* Story Section with Enhanced Visuals */}
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
                  From our strategic location in Ikota Shopping Complex, VGC, Ajah, Lagos, we've built a reputation as Nigeria's premier solar energy solutions provider. Our journey began with a simple belief: every Nigerian deserves access to reliable, clean energy. Today, with branch offices in Ilorin and Abeokuta, we're making that belief a reality across the nation.
                </p>
                
                <p>
                  Over the past {COMPANY_METRICS.yearsExperience} years, we've successfully completed over {COMPANY_METRICS.totalProjects} projects, installed more than {COMPANY_METRICS.totalCapacity} of solar capacity, and served over {COMPANY_METRICS.totalCustomers} satisfied customers. From residential rooftops to large commercial installations, we've consistently delivered excellence in every project.
                </p>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg" 
                alt="Solar panels installation on rooftop" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
                  loading="lazy"
                />
                <img 
                  src="https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg" 
                  alt="Solar installation team at work" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
                  loading="lazy"
                />
                <img 
                  src="https://images.pexels.com/photos/433310/pexels-photo-433310.jpeg" 
                  alt="Before and after solar installation" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
                  loading="lazy"
                />
                <img 
                  src="https://images.pexels.com/photos/433311/pexels-photo-433311.jpeg" 
                  alt="Commercial solar installation" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
                loading="lazy"
              />
              </div>
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

      {/* Enhanced Impact Section with Hover Effects */}
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
            {METRIC_SETS.impactStats.map((stat, index) => {
              const iconMap = { Award, Zap, Users, Clock, CheckCircle };
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
              <div 
                key={index}
                  className={`text-center transform transition-all duration-500 hover:scale-110 hover:shadow-xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                role="region"
                aria-labelledby={`stat-${index}-label`}
              >
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-light text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {stat.number}
                </div>
                <h3 id={`stat-${index}-label`} className="text-lg font-light text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="timeline-heading" className="text-4xl font-light text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to illuminate Nigeria
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-light text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="team-heading" className="text-4xl font-light text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals driving Nigeria's solar revolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-white" aria-labelledby="awards-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="awards-heading" className="text-4xl font-light text-gray-900 mb-6">
              Awards & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition of our commitment to excellence and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div 
                  key={index}
                  className={`text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <IconComponent className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-gray-600 mb-2">{award.issuer}</p>
                  <span className="text-orange-500 font-medium">{award.year}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl font-light text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Real stories from satisfied customers across Nigeria
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-white mb-6 italic">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              <div className="text-white">
                <p className="font-medium text-lg">{testimonials[activeTestimonial].name}</p>
                <p className="text-white/80">{testimonials[activeTestimonial].location}</p>
                <p className="text-white/70 text-sm mt-2">{testimonials[activeTestimonial].project}</p>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Location Section with New Styling */}
      <section className="py-20 bg-black text-white" aria-labelledby="location-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 id="location-heading" className="text-4xl font-light mb-8">
              Visit Our Showroom
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Experience our solar solutions firsthand at our state-of-the-art showroom in Lagos
            </p>
            
            {/* Updated Office Locations with New Styling */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-light text-white mb-8">Our Office Locations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    city: "Lagos",
                    address: "Ikota Shopping Complex, VGC, Ajah, Lagos",
                    phone: "+234 811 888 7425"
                  },
                  {
                    city: "Ilorin", 
                    address: "Shop 4B samtosh plaza, No. 171, Ibrahim Taiwo Rd. Opp. access Bank, Ilorin",
                    phone: "09156082923"
                  },
                  {
                    city: "Abeokuta",
                    address: "Alhaji Mulikat sonekan (oosele) House, Opposite NNPC Filling Station, Somorin Obantoko Abeokuta, Ogun state.",
                    phone: "08118887425"
                  }
                ].map((office, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-xl font-light text-orange-500 mb-4">{office.city}</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <p className="text-white text-sm leading-relaxed">{office.address}</p>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="h-5 w-5 text-orange-500" />
                        <a 
                          href={`tel:${office.phone}`}
                          className="text-white hover:text-orange-500 transition-colors text-sm"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <a 
                    href="mailto:info@jumiamisolar.com"
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    info@jumiamisolar.com
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <div className="text-white text-sm">
                    <p>Mon - Fri: 8:00AM - 6:00PM</p>
                    <p>Sat: 9:00AM - 4:00PM</p>
                </div>
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
                              Be part of Nigeria's sustainable energy future. {COMPANY_METRICS.totalCustomers}+ families have already transformed their lives.
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
