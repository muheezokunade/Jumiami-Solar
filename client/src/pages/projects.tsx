import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPANY_METRICS, METRIC_SETS } from "@/lib/metrics";
import OptimizedImage from "@/components/ui/optimized-image";
import { 
  MapPin, 
  Zap, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Home, 
  Building, 
  Factory,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Award,
  Eye,
  Play,
  Filter,
  Search,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Phone,
  Mail,
  MessageCircle,
  X,
  Battery,
  Settings
} from "lucide-react";
import { Link } from "wouter";
import ProjectCard from "@/components/project-card";

interface Project {
  id: number;
  title: string;
  type: string;
  category: string;
  location: string;
  capacity: string;
  duration: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  features: string[];
  challenges: string;
  solution: string;
  results: string;
  client: string;
  completionDate: string;
  rating: number;
  testimonial: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MRS Filling Station - Victoria Island",
    type: "Commercial",
    category: "commercial",
    location: "Victoria Island, Lagos",
    capacity: "75kW",
    duration: "3 weeks",
    description: "Complete solar power system for MRS Filling Station ensuring 24/7 operations with backup power for fuel pumps and lighting systems.",
    image: "https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg",
    beforeImage: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
    afterImage: "https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg",
    features: [
      "75kW hybrid solar system",
      "Battery backup for fuel pumps",
      "LED lighting upgrade",
      "Smart monitoring system",
      "Grid integration",
      "24/7 operations support"
    ],
    challenges: "Critical need for uninterrupted power supply for fuel dispensing operations and security lighting during frequent power outages.",
    solution: "Hybrid system with battery backup specifically designed for fuel station operations, ensuring continuous service even during grid failures.",
    results: "100% uptime for fuel dispensing operations, 85% reduction in diesel generator costs, and improved customer satisfaction with reliable service.",
    client: "MRS Oil Nigeria Plc",
    completionDate: "March 2024",
    rating: 5,
    testimonial: "Since installing the solar system, we've never had to close due to power issues. Our customers appreciate the reliable service and our operational costs have dropped significantly."
  },
  {
    id: 2,
    title: "Adebayo Shopping Complex - Ikeja",
    type: "Commercial",
    category: "commercial",
    location: "Ikeja, Lagos",
    capacity: "120kW",
    duration: "4 weeks",
    description: "Solar power installation for a 3-story shopping complex housing 25 retail shops, restaurants, and office spaces.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    beforeImage: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    afterImage: "https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg",
    features: [
      "120kW commercial system",
      "Individual tenant metering",
      "Common area lighting",
      "Air conditioning backup",
      "Security system power",
      "Energy cost sharing"
    ],
    challenges: "Multiple tenants with varying power needs, high air conditioning loads, and need for fair energy cost distribution among tenants.",
    solution: "Smart metering system with individual tenant billing, load balancing for air conditioning, and automated energy cost allocation.",
    results: "70% reduction in overall energy costs, improved tenant satisfaction, and increased property value with sustainable energy solution.",
    client: "Adebayo Properties Ltd",
    completionDate: "February 2024",
    rating: 5,
    testimonial: "Our tenants are happy with the stable power supply and reduced utility costs. The solar system has made our property more attractive to quality tenants."
  },
  {
    id: 3,
    title: "Alhaji Bello's Residence - VGC",
    type: "Residential",
    category: "residential",
    location: "VGC, Ajah, Lagos",
    capacity: "25kW",
    duration: "2 weeks",
    description: "Premium residential solar installation for a 5-bedroom mansion with swimming pool, home theater, and smart home systems.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    beforeImage: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
    afterImage: "https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg",
    features: [
      "25kW residential system",
      "Swimming pool pump power",
      "Home theater backup",
      "Smart home integration",
      "Security system power",
      "Remote monitoring"
    ],
    challenges: "High-end lifestyle requirements with multiple entertainment systems, swimming pool, and need for luxury-level power reliability.",
    solution: "Premium system with dedicated circuits for entertainment areas, pool equipment, and smart home integration for seamless operation.",
    results: "90% reduction in electricity bills, enhanced lifestyle with reliable power for all amenities, and increased property value.",
    client: "Alhaji Bello Family",
    completionDate: "January 2024",
    rating: 5,
    testimonial: "The solar system has transformed our home. We enjoy uninterrupted power for all our amenities and the savings are incredible. Best investment we've made."
  },
  {
    id: 4,
    title: "Oluwaseun Bakery - Surulere",
    type: "Commercial",
    category: "commercial",
    location: "Surulere, Lagos",
    capacity: "40kW",
    duration: "2 weeks",
    description: "Solar power system for commercial bakery with industrial ovens, refrigeration units, and air conditioning systems.",
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
    beforeImage: "https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg",
    afterImage: "https://images.pexels.com/photos/433310/pexels-photo-433310.jpeg",
    features: [
      "40kW commercial system",
      "Industrial oven power",
      "Refrigeration backup",
      "Air conditioning support",
      "Production line power",
      "Energy monitoring"
    ],
    challenges: "High power demand from industrial ovens and refrigeration units, need for consistent production without power interruptions.",
    solution: "Dedicated power circuits for production equipment, smart load management, and backup systems for critical refrigeration units.",
    results: "80% reduction in energy costs, improved production efficiency, and enhanced product quality with stable power supply.",
    client: "Oluwaseun Bakery & Confectionery",
    completionDate: "December 2023",
    rating: 5,
    testimonial: "Our production has improved significantly since installing the solar system. We no longer worry about power cuts affecting our baking schedule."
  },
  {
    id: 5,
    title: "Grace Hospital - Ilorin",
    type: "Healthcare",
    category: "commercial",
    location: "Ilorin, Kwara State",
    capacity: "100kW",
    duration: "5 weeks",
    description: "Critical solar power system for private hospital ensuring uninterrupted power for medical equipment, lighting, and air conditioning.",
    image: "https://images.pexels.com/photos/433311/pexels-photo-433311.jpeg",
    beforeImage: "https://images.pexels.com/photos/433312/pexels-photo-433312.jpeg",
    afterImage: "https://images.pexels.com/photos/433313/pexels-photo-433313.jpeg",
    features: [
      "100kW healthcare system",
      "Medical equipment backup",
      "Emergency lighting",
      "HVAC system power",
      "24/7 monitoring",
      "Redundant systems"
    ],
    challenges: "Critical need for uninterrupted power for life-saving medical equipment, emergency lighting, and patient comfort systems.",
    solution: "Redundant system with multiple backup layers, isolated circuits for critical medical equipment, and comprehensive monitoring.",
    results: "100% uptime for medical equipment, 75% reduction in generator costs, and improved patient care with reliable power.",
    client: "Grace Medical Center",
    completionDate: "November 2023",
    rating: 5,
    testimonial: "The solar system has been a game-changer for our hospital. We can now focus on patient care without worrying about power issues."
  },
  {
    id: 6,
    title: "Chief Adebayo's Farm - Abeokuta",
    type: "Agricultural",
    category: "industrial",
    location: "Abeokuta, Ogun State",
    capacity: "60kW",
    duration: "3 weeks",
    description: "Solar power system for large-scale poultry farm with automated feeding systems, climate control, and processing facilities.",
    image: "https://images.pexels.com/photos/433314/pexels-photo-433314.jpeg",
    beforeImage: "https://images.pexels.com/photos/433315/pexels-photo-433315.jpeg",
    afterImage: "https://images.pexels.com/photos/433316/pexels-photo-433316.jpeg",
    features: [
      "60kW agricultural system",
      "Automated feeding systems",
      "Climate control units",
      "Processing equipment",
      "Security lighting",
      "Water pumping systems"
    ],
    challenges: "Remote location with unreliable grid power, need for continuous operation of automated systems and climate control for optimal production.",
    solution: "Off-grid capable system with battery backup, automated load management, and remote monitoring for farm operations.",
    results: "90% reduction in energy costs, improved production efficiency, and enhanced animal welfare with consistent climate control.",
    client: "Chief Adebayo Farms Ltd",
    completionDate: "October 2023",
    rating: 5,
    testimonial: "Our farm productivity has increased significantly with the reliable power supply. The automated systems work perfectly and our operational costs have dropped dramatically."
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: Building, count: projects.length },
  { id: "residential", label: "Residential", icon: Home, count: projects.filter(p => p.category === "residential").length },
  { id: "commercial", label: "Commercial", icon: Building, count: projects.filter(p => p.category === "commercial").length },
  { id: "industrial", label: "Industrial", icon: Factory, count: projects.filter(p => p.category === "industrial").length }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = {
    totalProjects: projects.length,
    totalCapacity: projects.reduce((sum, project) => sum + parseInt(project.capacity), 0),
    averageRating: projects.reduce((sum, project) => sum + project.rating, 0) / projects.length
  };

  const featuredProject = projects[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title={<>Our Solar Projects</>}
        subtitle={<>Transforming Nigeria's energy landscape with innovative solar solutions</>}
        image="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
      />

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRIC_SETS.projectStats.map((stat, index) => {
              const iconMap = { Award, Zap, DollarSign, Star };
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div 
                  key={index}
                  className={`text-center transform transition-all duration-500 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Featured Project
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our most impactful solar installation
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Project Images */}
              <div className="relative h-96 lg:h-full">
                <div className="relative h-full">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-orange-500 text-white mb-2">
                      {featuredProject.type}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.title}</h3>
                    <div className="flex items-center space-x-4 text-white/90">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{featuredProject.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="h-4 w-4" />
                        <span className="text-sm">{featuredProject.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: featuredProject.rating }, (_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge variant="outline" className="border-orange-500 text-orange-500">
                    Featured
                  </Badge>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Project Stats */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 mb-8">
                  <div className="text-3xl font-bold text-orange-600 mb-1">{featuredProject.duration}</div>
                  <div className="text-sm text-gray-600">Installation Time</div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {featuredProject.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
                    onClick={() => setSelectedProject(featuredProject)}
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Case Study
                  </Button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Explore Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our diverse portfolio of successful solar installations
            </p>
          </div>
          
        {/* Category Filter */}
          <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg rounded-xl p-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                      className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white rounded-lg py-3"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {category.count}
                      </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard
                  project={project}
              onClick={() => setSelectedProject(project)}
                />
              </div>
              ))}
          </div>
        </div>
      </section>
          
      {/* Project Detail Modal */}
        {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Project Images */}
              <div className="relative h-64 md:h-96">
                <OptimizedImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  quality={90}
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-orange-500 text-white mb-2">
                    {selectedProject.type}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                {/* Project Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedProject.capacity}</div>
                    <div className="text-sm text-gray-600">System Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedProject.duration}</div>
                    <div className="text-sm text-gray-600">Installation Time</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedProject.completionDate}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Challenge, Solution, Results */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-red-500" />
                      Challenge
                    </h4>
                    <p className="text-gray-600 text-sm">{selectedProject.challenges}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm">{selectedProject.solution}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Results
                    </h4>
                    <p className="text-gray-600 text-sm">{selectedProject.results}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1 mr-4">
                      {Array.from({ length: selectedProject.rating }, (_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
          </div>
                    <span className="text-sm text-gray-600">Client Testimonial</span>
        </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{selectedProject.testimonial}"
                  </blockquote>
                  <p className="text-sm text-gray-600">- {selectedProject.client}</p>
            </div>
            
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Get Similar Quote
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Team
                  </Button>
                </div>
                </div>
            </div>
            </div>
          </div>
        )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to Start Your Solar Journey?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join our satisfied customers and experience the benefits of clean, reliable solar energy. 
              Get a free consultation and personalized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-full"
            >
                <Phone className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-full"
            >
                <MessageCircle className="h-5 w-5 mr-2" />
                Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
