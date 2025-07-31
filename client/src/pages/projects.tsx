import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import type { Project } from "@shared/schema";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { toast } = useToast();

  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const handleViewCaseStudy = (projectTitle: string) => {
    toast({
      title: "Case Study",
      description: `Detailed case study for ${projectTitle} will be available soon. Contact us for more information.`,
    });
  };

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "industrial", label: "Industrial" }
  ];

  const filteredProjects = projects?.filter(project => 
    selectedFilter === "all" || project.projectType.toLowerCase().includes(selectedFilter)
  ) || [];

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Projects</h2>
          <p className="text-gray-600">Unable to load projects. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Featured Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Discover how we've helped businesses and organizations across Nigeria achieve energy independence
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-2 font-serif">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(47,100%,63%)] mb-2 font-serif">5MW+</div>
              <div className="text-gray-300">Total Capacity Installed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-2 font-serif">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(47,100%,63%)] mb-2 font-serif">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Filter & Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Our <span className="text-[hsl(19,100%,58%)]">Project</span> Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of solar installations across different sectors
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                className={
                  selectedFilter === filter.value
                    ? "bg-[hsl(19,100%,58%)] text-white hover:bg-[hsl(19,100%,48%)]"
                    : "border-[hsl(19,100%,58%)] text-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,58%)] hover:text-white"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          {isLoading ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="bg-gray-800 rounded-2xl overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-8">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex gap-2 mb-6">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                    <Skeleton className="h-8 w-32" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewCaseStudy={() => handleViewCaseStudy(project.title)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No Projects Found</h3>
              <p className="text-gray-500">No projects match the selected filter. Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Project <span className="text-[hsl(19,100%,58%)]">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in solar installations across various sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="floating-card text-center p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Residential</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Custom solar solutions for homes, apartments, and residential complexes. From small rooftop installations to comprehensive energy systems.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Rooftop Solar</Badge>
                  <Badge variant="secondary">Home Backup</Badge>
                  <Badge variant="secondary">Grid-Tie Systems</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="floating-card text-center p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Commercial</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Solar installations for businesses, offices, and commercial facilities. Designed to reduce operating costs and improve sustainability.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Office Buildings</Badge>
                  <Badge variant="secondary">Retail Stores</Badge>
                  <Badge variant="secondary">Restaurants</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="floating-card text-center p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-4">Industrial</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Large-scale solar installations for manufacturing facilities, warehouses, and industrial complexes with high energy demands.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Manufacturing</Badge>
                  <Badge variant="secondary">Warehouses</Badge>
                  <Badge variant="secondary">Processing Plants</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Success <span className="text-[hsl(19,100%,58%)]">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our solar installations across Nigeria
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-4 font-serif">85%</div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Average Cost Reduction</h3>
              <p className="text-gray-600">Our clients typically see significant reductions in their electricity bills</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-4 font-serif">99.5%</div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">System Uptime</h3>
              <p className="text-gray-600">Exceptional reliability with minimal downtime across all installations</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-4 font-serif">5-10</div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Year ROI Period</h3>
              <p className="text-gray-600">Most installations pay for themselves within 5-10 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Start Your <span className="text-[hsl(19,100%,58%)]">Solar Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our growing list of satisfied customers. Let us design and install a custom solar solution for your energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white px-10 py-4 text-lg font-semibold hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] transition-all duration-300 transform hover:scale-105"
            >
              Request Project Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(0,0%,10%)] transition-all duration-300"
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
