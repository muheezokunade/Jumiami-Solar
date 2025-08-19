import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Calendar, Star, ArrowRight, Eye, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  capacity: string;
  savings: string;
  duration: string;
  image: string;
  description: string;
  features: string[];
  challenges: string;
  solution: string;
  results: string;
  client: string;
  completionDate: string;
  rating: number;
  testimonial: string;
}

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2" onClick={onClick}>
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-orange-500 text-white border-0">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </Badge>
        </div>
        
        {/* Rating */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            {Array.from({ length: project.rating }, (_, i) => (
              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <Button 
              size="sm"
              className="bg-white text-orange-600 hover:bg-gray-100 rounded-full"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span className="text-sm">{project.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Zap className="h-4 w-4 text-orange-500" />
            <span className="text-sm">{project.capacity} System</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span className="text-sm">Completed {project.completionDate}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
            <div className="text-lg font-bold text-orange-600 mb-1">{project.savings}</div>
            <div className="text-xs text-gray-600">Monthly Savings</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
            <div className="text-lg font-bold text-orange-600 mb-1">{project.duration}</div>
            <div className="text-xs text-gray-600">Installation Time</div>
          </div>
        </div>
        
        {/* Features Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-gray-600 truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{project.client}</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
