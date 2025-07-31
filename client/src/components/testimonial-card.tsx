import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-2xl text-white h-full shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          {testimonial.imageUrl && (
            <img 
              src={testimonial.imageUrl} 
              alt={`${testimonial.name} testimonial`}
              className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white/20"
            />
          )}
          <div>
            <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
            <p className="text-white/90">
              {testimonial.title}
              {testimonial.company && `, ${testimonial.company}`}
            </p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <Star key={i} className="h-5 w-5 text-white fill-current" />
          ))}
        </div>
        
        <div className="min-h-[80px]">
          <p className="text-lg leading-relaxed text-white font-medium">
            "{testimonial.content}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
