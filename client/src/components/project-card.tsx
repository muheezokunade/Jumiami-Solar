import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  onViewCaseStudy?: () => void;
}

export default function ProjectCard({ project, onViewCaseStudy }: ProjectCardProps) {
  return (
    <Card className="floating-card bg-gray-800 rounded-2xl overflow-hidden text-white">
      {project.imageUrl && (
        <div className="relative">
          <img 
            src={project.imageUrl} 
            alt={`${project.title} installation`}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.equipment?.map((item, index) => (
            <Badge 
              key={index}
              variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "secondary" : "outline"}
              className={
                index % 3 === 0 
                  ? "bg-[hsl(19,100%,58%)] text-white" 
                  : index % 3 === 1 
                  ? "bg-[hsl(47,100%,63%)] text-black" 
                  : "bg-gray-700 text-white"
              }
            >
              {item}
            </Badge>
          ))}
        </div>
        
        <Button
          variant="ghost"
          onClick={onViewCaseStudy}
          className="text-[hsl(19,100%,58%)] hover:text-[hsl(47,100%,63%)] font-semibold group"
        >
          View Case Study 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
