import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPANY_METRICS, METRIC_SETS } from "@/lib/metrics";
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
  X
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
  savings: string;
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
    title: "Greenfield Estate Solar Installation",
    type: "Residential",
    category: "residential",
    location: "VGC, Ajah, Lagos",
    capacity: "120kW",
    savings: "₦850,000",
    duration: "1 month",
    description: "Complete solar installation for 12 luxury homes in Greenfield Estate with advanced monitoring and battery backup systems.",
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
    beforeImage: "https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg",
    afterImage: "https://images.pexels.com/photos/433310/pexels-photo-433310.jpeg",
    features: [
      "120kW hybrid solar system",
      "Battery backup system",
      "Smart monitoring",
      "Grid integration",
      "Load balancing",
      "24/7 support"
    ],
    challenges: "High energy demand from multiple homes with varying consumption patterns and limited roof space for optimal panel placement.",
    solution: "Custom system design with load balancing, smart distribution, and innovative mounting solutions to maximize energy production.",
    results: "95% reduction in electricity bills, 24/7 power availability, and increased property values for all residents.",
    client: "Greenfield Estate Management",
    completionDate: "March 2024",
    rating: 5,
    testimonial: "The system has been running flawlessly. We haven't experienced any power outages since installation. The monitoring system gives us complete visibility into our energy consumption."
  },
  {
    id: 2,
    title: "Sunshine Plaza Commercial Complex",
    type: "Commercial",
    category: "commercial",
    location: "Ikeja, Lagos",
    capacity: "200kW",
    savings: "₦1.2M",
    duration: "6 weeks",
    description: "Comprehensive solar power system for a 4-story office complex with advanced battery backup and energy management.",
    image: "https://images.pexels.com/photos/433311/pexels-photo-433311.jpeg",
    beforeImage: "https://images.pexels.com/photos/433312/pexels-photo-433312.jpeg",
    afterImage: "https://images.pexels.com/photos/433313/pexels-photo-433313.jpeg",
    features: [
      "200kW commercial system",
      "Battery backup",
      "Energy monitoring",
      "Load optimization",
      "Peak demand management",
      "Remote monitoring"
    ],
    challenges: "High peak demand during office hours, complex electrical infrastructure, and need for uninterrupted power supply.",
    solution: "Peak load management with smart battery deployment, redundant systems, and integration with existing electrical infrastructure.",
    results: "80% reduction in energy costs, improved equipment reliability, and enhanced tenant satisfaction with consistent power supply.",
    client: "Sunshine Plaza Management",
    completionDate: "February 2024",
    rating: 5,
    testimonial: "Our energy bills have dropped significantly while maintaining 100% uptime. The system pays for itself and our tenants love the reliable power."
  },
  {
    id: 3,
    title: "TechVision Office Complex",
    type: "Commercial",
    category: "commercial",
    location: "Lekki, Lagos",
    capacity: "150kW",
    savings: "₦950,000",
    duration: "2 months",
    description: "Hybrid solar system with grid integration for tech company headquarters with critical power requirements.",
    image: "https://images.pexels.com/photos/433314/pexels-photo-433314.jpeg",
    beforeImage: "https://images.pexels.com/photos/433315/pexels-photo-433315.jpeg",
    afterImage: "https://images.pexels.com/photos/433316/pexels-photo-433316.jpeg",
    features: [
      "150kW hybrid system",
      "UPS integration",
      "Real-time monitoring",
      "Smart grid connection",
      "Server room backup",
      "Energy analytics"
    ],
    challenges: "Critical power requirements for server rooms, sensitive equipment, and need for 99.9% uptime guarantee.",
    solution: "Redundant system with UPS integration, isolated power circuits for critical equipment, and comprehensive monitoring.",
    results: "99.9% uptime guarantee, 70% energy cost reduction, and enhanced data center reliability with zero downtime.",
    client: "TechVision Ltd",
    completionDate: "January 2024",
    rating: 5,
    testimonial: "The system has exceeded our expectations. Our operations run smoothly with significant cost savings and our server uptime has improved dramatically."
  },
  {
    id: 4,
    title: "Lagos Industrial Park",
    type: "Industrial",
    category: "industrial",
    location: "Ikorodu, Lagos",
    capacity: "500kW",
    savings: "₦3.5M",
    duration: "3 months",
    description: "Large-scale industrial solar installation for manufacturing facility with heavy machinery and continuous operations.",
    image: "https://images.pexels.com/photos/433317/pexels-photo-433317.jpeg",
    beforeImage: "https://images.pexels.com/photos/433318/pexels-photo-433318.jpeg",
    afterImage: "https://images.pexels.com/photos/433319/pexels-photo-433319.jpeg",
    features: [
      "500kW industrial system",
      "Heavy machinery support",
      "Continuous operation",
      "Advanced monitoring",
      "Predictive maintenance",
      "Energy optimization"
    ],
    challenges: "Heavy machinery with high power requirements, continuous 24/7 operations, and need for stable power supply.",
    solution: "Industrial-grade system with multiple inverters, load balancing, and predictive maintenance capabilities.",
    results: "75% reduction in energy costs, improved production efficiency, and enhanced equipment lifespan with stable power.",
    client: "Lagos Industrial Park",
    completionDate: "December 2023",
    rating: 5,
    testimonial: "The solar system has transformed our operations. We've seen significant cost savings and our production efficiency has improved due to stable power supply."
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
    totalSavings: projects.reduce((sum, project) => sum + parseInt(project.savings.replace(/[^\d]/g, '')), 0),
    averageRating: projects.reduce((sum, project) => sum + project.rating, 0) / projects.length
  };

  const featuredProject = projects[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
            alt="Solar projects and installations portfolio background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-orange-400/85 to-yellow-400/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Our Solar Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
              Transforming Nigeria's energy landscape with innovative solar solutions
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
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-orange-600 mb-1">{featuredProject.savings}</div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-orange-600 mb-1">{featuredProject.duration}</div>
                    <div className="text-sm text-gray-600">Installation Time</div>
                  </div>
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
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedProject.capacity}</div>
                    <div className="text-sm text-gray-600">System Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedProject.savings}</div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
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
