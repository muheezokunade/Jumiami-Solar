import { Award, Wrench, Calendar, Settings, Target, Users, Lightbulb, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            About Jumiami Solar
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Pioneering Nigeria's renewable energy revolution with premium solar solutions
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-8 font-serif">
                Illuminating Nigeria for 
                <span className="text-[hsl(19,100%,58%)]"> 5+ Years</span>
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
            
            <div className="relative">
              <img 
                src="https://pixabay.com/get/ge0d53bcbc240ecae7c4f8c2b2fbc288b5c39678ffd77928a14938e62758c740a3aacbcf563d0d47cb3278181cc35721cd62fb0d028805ab415cf5e36d417c346_1280.jpg" 
                alt="Solar technician installing panels" 
                className="rounded-2xl shadow-2xl floating-card" 
              />
              
              <div className="absolute -bottom-8 -left-8 glass-morphism rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold text-[hsl(19,100%,58%)] font-serif">1000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              
              <div className="absolute -top-8 -right-8 glass-morphism rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold text-[hsl(47,100%,63%)] font-serif">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Our <span className="text-[hsl(19,100%,58%)]">Mission & Vision</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center floating-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To kick out darkness in the environment by providing premium solar energy solutions that are reliable, affordable, and sustainable for every Nigerian home and business.
              </p>
            </div>
            
            <div className="text-center floating-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be West Africa's leading solar energy company, powering a sustainable future where clean energy is accessible to all, contributing to economic growth and environmental preservation.
              </p>
            </div>
            
            <div className="text-center floating-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence, integrity, innovation, and customer satisfaction guide everything we do. We believe in building lasting relationships through quality service and reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Our Core <span className="text-[hsl(19,100%,58%)]">Strengths</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in Nigeria's competitive solar energy market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Premium Quality Products</h3>
                  <p className="text-gray-600">We source only the highest quality solar panels, inverters, and batteries from trusted global manufacturers, ensuring long-lasting performance in Nigeria's unique climate conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Expert Installation Team</h3>
                  <p className="text-gray-600">Our certified technicians bring years of experience and undergo continuous training to ensure every installation meets international safety and efficiency standards.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">With over 5 years in the market and 50+ successful projects, we've demonstrated consistent reliability and customer satisfaction across diverse project types.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Comprehensive After-Sales Support</h3>
                  <p className="text-gray-600">Our commitment doesn't end with installation. We provide ongoing maintenance, repair services, and system optimization to ensure maximum performance throughout your system's lifetime.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Customer-Centric Approach</h3>
                  <p className="text-gray-600">Every project is tailored to meet specific customer needs and budget requirements. We pride ourselves on transparent communication and exceeding expectations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-2">Innovation & Technology</h3>
                  <p className="text-gray-600">We stay at the forefront of solar technology, incorporating the latest innovations in system design, monitoring, and energy management to deliver superior solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Visit Our <span className="text-[hsl(19,100%,58%)]">Lagos Showroom</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="glass-morphism rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[hsl(19,100%,58%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                  <p className="text-gray-300 text-lg">
                    Ikota shopping complex, Road 3, suite E 167, 150, 151, opposite Providus Bank, VGC, Ajah, Lagos
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></span>
                  <span>Easy access from Lekki-Epe Expressway</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></span>
                  <span>Free parking available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></span>
                  <span>Product display and consultation center</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[hsl(19,100%,58%)] rounded-full"></span>
                  <span>Technical support and after-sales service</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6">Why Visit Our Showroom?</h3>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Experience our solar solutions firsthand at our state-of-the-art showroom. See live demonstrations of our products, get expert consultations, and explore the latest in solar technology.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(19,100%,58%)] mb-2">50+</div>
                    <div className="text-sm text-gray-300">Products on Display</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(47,100%,63%)] mb-2">5+</div>
                    <div className="text-sm text-gray-300">Expert Consultants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-4 font-serif">50+</div>
              <div className="text-xl">Projects Completed</div>
              <p className="text-white/80 mt-2">Across residential and commercial sectors</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-4 font-serif">5MW+</div>
              <div className="text-xl">Total Capacity Installed</div>
              <p className="text-white/80 mt-2">Powering thousands of homes and businesses</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-4 font-serif">1000+</div>
              <div className="text-xl">Satisfied Customers</div>
              <p className="text-white/80 mt-2">Building lasting relationships</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-4 font-serif">24/7</div>
              <div className="text-xl">Support Available</div>
              <p className="text-white/80 mt-2">Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
