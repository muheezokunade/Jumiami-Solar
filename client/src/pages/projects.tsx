import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Target
} from "lucide-react";
import ProjectCard from "@/components/project-card";

// Enhanced project data with more detailed case studies
const projects = [
  {
    id: 1,
    title: "Victoria Island Luxury Villa",
    category: "residential",
    location: "Victoria Island, Lagos",
    capacity: "25 kW",
    savings: "Starting from ₦450,000/month",
    duration: "3 weeks",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Complete solar installation for a luxury villa with battery backup system and smart monitoring.",
    features: [
      "25 kW hybrid solar system",
      "48V battery backup (20 kWh)",
      "Smart monitoring system",
      "Grid-tied with net metering",
      "Emergency power backup",
      "Remote monitoring app"
    ],
    challenges: "High energy consumption from multiple AC units and luxury appliances",
    solution: "Hybrid system with oversized battery bank for peak demand periods",
    results: "95% reduction in electricity bills, 24/7 power availability",
    client: "Private Villa Owner",
    completionDate: "March 2024",
    rating: 5,
    testimonial: "The system has been running flawlessly for 8 months. We haven't experienced any power outages since installation."
  },
  {
    id: 2,
    title: "Green Leaf Restaurant Solar System",
    category: "commercial",
    location: "Ikeja, Lagos",
    capacity: "15 kW",
    savings: "Starting from ₦280,000/month",
    duration: "2 weeks",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Commercial solar installation for a busy restaurant with high refrigeration and cooking equipment loads.",
    features: [
      "15 kW commercial solar system",
      "Grid-tied with battery backup",
      "Refrigeration load optimization",
      "Kitchen equipment integration",
      "Energy monitoring dashboard",
      "Maintenance contract included"
    ],
    challenges: "High energy consumption from commercial kitchen equipment and refrigeration",
    solution: "Optimized system design with focus on peak demand management",
    results: "80% reduction in energy costs, improved equipment reliability",
    client: "Green Leaf Restaurant",
    completionDate: "February 2024",
    rating: 5,
    testimonial: "Our customers love the eco-friendly approach, and our energy bills have dropped significantly."
  },
  {
    id: 3,
    title: "TechVision Office Complex",
    category: "commercial",
    location: "Lekki, Lagos",
    capacity: "40 kW",
    savings: "Starting from ₦750,000/month",
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Large-scale commercial installation for a tech company with server rooms and office spaces.",
    features: [
      "40 kW commercial solar system",
      "Server room UPS integration",
      "Office lighting optimization",
      "HVAC system integration",
      "Real-time monitoring system",
      "24/7 technical support"
    ],
    challenges: "Critical power requirements for server rooms and data centers",
    solution: "Redundant system design with multiple backup options",
    results: "99.9% uptime guarantee, 70% energy cost reduction",
    client: "TechVision Ltd",
    completionDate: "January 2024",
    rating: 5,
    testimonial: "The system has been running flawlessly for 8 months now. Our server uptime has improved dramatically."
  },
  {
    id: 4,
    title: "Abeokuta Family Home",
    category: "residential",
    location: "Abeokuta, Ogun State",
    capacity: "8 kW",
    savings: "Starting from ₦150,000/month",
    duration: "1 week",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Complete residential solar installation for a family home with backup power system.",
    features: [
      "8 kW residential solar system",
      "24V battery backup system",
      "Essential load backup",
      "Grid-tied operation",
      "Mobile app monitoring",
      "5-year warranty"
    ],
    challenges: "Frequent power outages affecting daily activities",
    solution: "Hybrid system with sufficient battery capacity for extended outages",
    results: "Uninterrupted power supply, 90% reduction in generator fuel costs",
    client: "Michael Okafor Family",
    completionDate: "December 2023",
    rating: 5,
    testimonial: "Best investment I've made for my home. The solar system is reliable and maintenance-free."
  },
  {
    id: 5,
    title: "Ilorin Manufacturing Plant",
    category: "industrial",
    location: "Ilorin, Kwara State",
    capacity: "100 kW",
    savings: "Starting from ₦1,800,000/month",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Large-scale industrial solar installation for a manufacturing facility with heavy machinery.",
    features: [
      "100 kW industrial solar system",
      "Heavy machinery integration",
      "Industrial UPS systems",
      "Load balancing technology",
      "Advanced monitoring system",
      "Preventive maintenance program"
    ],
    challenges: "High energy demand from industrial machinery and production lines",
    solution: "Custom industrial system with load management and peak shaving",
    results: "60% reduction in energy costs, improved production efficiency",
    client: "Ilorin Manufacturing Co.",
    completionDate: "November 2023",
    rating: 5,
    testimonial: "The solar system has significantly reduced our operational costs and improved our production reliability."
  },
  {
    id: 6,
    title: "Lagos Medical Center",
    category: "commercial",
    location: "Surulere, Lagos",
    capacity: "30 kW",
    savings: "Starting from ₦550,000/month",
    duration: "3 weeks",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Critical power installation for a medical facility with life-support equipment requirements.",
    features: [
      "30 kW medical-grade solar system",
      "Life-support equipment backup",
      "Medical equipment integration",
      "Emergency power systems",
      "Redundant backup systems",
      "24/7 emergency support"
    ],
    challenges: "Critical power requirements for medical equipment and life-support systems",
    solution: "Medical-grade installation with redundant backup and emergency protocols",
    results: "100% uptime for critical equipment, 75% energy cost reduction",
    client: "Lagos Medical Center",
    completionDate: "October 2023",
    rating: 5,
    testimonial: "The reliability of our power system has improved patient care and reduced operational costs."
  },
  {
    id: 7,
    title: "Port Harcourt Residential Complex",
    category: "residential",
    location: "Port Harcourt, Rivers State",
    capacity: "20 kW",
    savings: "Starting from ₦380,000/month",
    duration: "2 weeks",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Multi-unit residential complex with shared solar system and individual metering.",
    features: [
      "20 kW shared solar system",
      "Individual unit metering",
      "Common area lighting",
      "Security system backup",
      "Community monitoring",
      "Maintenance agreement"
    ],
    challenges: "Managing energy distribution across multiple residential units",
    solution: "Smart metering system with individual unit monitoring and billing",
    results: "Fair energy distribution, 85% reduction in common area costs",
    client: "Port Harcourt Residential Complex",
    completionDate: "September 2023",
    rating: 5,
    testimonial: "The shared solar system has improved our community living and reduced individual energy costs."
  },
  {
    id: 8,
    title: "Kano Agricultural Processing",
    category: "industrial",
    location: "Kano, Kano State",
    capacity: "50 kW",
    savings: "Starting from ₦900,000/month",
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Agricultural processing facility with solar-powered irrigation and processing equipment.",
    features: [
      "50 kW agricultural solar system",
      "Irrigation pump integration",
      "Processing equipment power",
      "Cold storage backup",
      "Weather monitoring",
      "Agricultural automation"
    ],
    challenges: "High energy demand for irrigation pumps and processing equipment",
    solution: "Agricultural-focused system with water pumping optimization",
    results: "Improved crop yields, 70% reduction in energy costs",
    client: "Kano Agricultural Co.",
    completionDate: "August 2023",
    rating: 5,
    testimonial: "The solar system has revolutionized our agricultural operations and improved our productivity."
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: Building },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building },
  { id: "industrial", label: "Industrial", icon: Factory }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = {
    totalProjects: projects.length,
    totalCapacity: projects.reduce((sum, project) => sum + parseInt(project.capacity), 0),
    totalSavings: projects.reduce((sum, project) => sum + 1, 0), // Simplified for demo
    averageRating: projects.reduce((sum, project) => sum + project.rating, 0) / projects.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-4">
            Our Solar Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of successful solar installations across Nigeria, 
            from residential homes to large-scale commercial and industrial projects.
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[hsl(19,100%,58%)] mb-2">{stats.totalProjects}</div>
            <div className="text-gray-600">Completed Projects</div>
            </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[hsl(19,100%,58%)] mb-2">{stats.totalCapacity} kW</div>
            <div className="text-gray-600">Total Capacity</div>
            </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[hsl(19,100%,58%)] mb-2">₦{stats.totalSavings}M+</div>
            <div className="text-gray-600">Client Savings</div>
            </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[hsl(19,100%,58%)] mb-2">{stats.averageRating.toFixed(1)}</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          </div>
          
        {/* Category Filter */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(19,100%,58%)] data-[state=active]:to-[hsl(47,100%,63%)] data-[state=active]:text-white"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
          </div>
          
          {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
              onClick={() => setSelectedProject(project)}
                />
              ))}
          </div>
          
        {/* Featured Project Detail */}
        {selectedProject && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative h-64 lg:h-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[hsl(19,100%,58%)] text-white">
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </Badge>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-[hsl(0,0%,10%)]">{selectedProject.title}</h2>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: selectedProject.rating }, (_, i) => (
                      <Star key={i} className="h-5 w-5 text-[hsl(47,100%,63%)] fill-current" />
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Zap className="h-4 w-4" />
                    <span>{selectedProject.capacity} System</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Completed {selectedProject.completionDate}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[hsl(19,100%,58%)]">{selectedProject.savings}</div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[hsl(19,100%,58%)]">{selectedProject.duration}</div>
                    <div className="text-sm text-gray-600">Installation Time</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-[hsl(0,0%,10%)] mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[hsl(0,0%,10%)] mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-gray-600 text-sm">{selectedProject.challenges}</p>
          </div>
                  <div>
                    <h4 className="font-semibold text-[hsl(0,0%,10%)] mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm">{selectedProject.solution}</p>
        </div>
                  <div>
                    <h4 className="font-semibold text-[hsl(0,0%,10%)] mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Results
                    </h4>
                    <p className="text-gray-600 text-sm">{selectedProject.results}</p>
          </div>
            </div>
            
                {/* Client Testimonial */}
                <div className="bg-gradient-to-r from-[hsl(19,100%,58%)]/10 to-[hsl(47,100%,63%)]/10 rounded-lg p-4">
                  <p className="text-gray-700 italic">"{selectedProject.testimonial}"</p>
                  <p className="text-sm text-gray-600 mt-2">- {selectedProject.client}</p>
                </div>
            </div>
            </div>
          </div>
        )}

      {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Solar Project?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our satisfied customers and experience the benefits of solar energy. 
            Get a free consultation and quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[hsl(19,100%,58%)] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
            >
              <Users className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
