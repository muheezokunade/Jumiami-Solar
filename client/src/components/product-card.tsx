import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  onRequestQuote?: () => void;
  price?: string;
  features?: string[];
}

export default function ProductCard({ title, description, imageUrl, icon, onRequestQuote, price, features }: ProductCardProps) {
  return (
    <Card className="floating-card bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-4 mx-auto">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {price && (
          <div className="text-2xl font-bold text-[hsl(19,100%,58%)] mb-4">{price}</div>
        )}
        
        {features && features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[hsl(19,100%,58%)] flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        <Button
          variant="ghost"
          onClick={onRequestQuote}
          className="text-[hsl(19,100%,58%)] hover:text-[hsl(47,100%,63%)] font-semibold group"
        >
          Request Quote 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
