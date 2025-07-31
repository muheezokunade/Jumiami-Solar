import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Calendar, Star, ArrowRight } from "lucide-react";

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
    <Card className="floating-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={onClick}>
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[hsl(19,100%,58%)] text-white">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1">
            {Array.from({ length: project.rating }, (_, i) => (
              <Star key={i} className="h-4 w-4 text-[hsl(47,100%,63%)] fill-current" />
            ))}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-3 group-hover:text-[hsl(19,100%,58%)] transition-colors">
          {project.title}
        </h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{project.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Zap className="h-4 w-4" />
            <span className="text-sm">{project.capacity} System</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Completed {project.completionDate}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-[hsl(19,100%,58%)]">{project.savings}</div>
            <div className="text-xs text-gray-600">Monthly Savings</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-[hsl(19,100%,58%)]">{project.duration}</div>
            <div className="text-xs text-gray-600">Installation Time</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Client: {project.client}
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-[hsl(19,100%,58%)] hover:text-[hsl(19,100%,48%)] hover:bg-[hsl(19,100%,58%)]/10"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
