import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="glass-morphism rounded-2xl text-white h-full">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          {testimonial.imageUrl && (
            <img 
              src={testimonial.imageUrl} 
              alt={`${testimonial.name} testimonial`}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
          )}
          <div>
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-white/80">
              {testimonial.title}
              {testimonial.company && `, ${testimonial.company}`}
            </p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <Star key={i} className="h-5 w-5 text-[hsl(47,100%,63%)] fill-current" />
          ))}
        </div>
        
        <p className="text-lg leading-relaxed">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
}
