import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/testimonial-card";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsPage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const nextTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentTestimonialIndex((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentTestimonialIndex((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying || !testimonials || testimonials.length === 0) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials, currentTestimonialIndex]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-4">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why customers choose Jumiami Solar for their energy needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-5 h-5 bg-gray-200 rounded mr-1"></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-4">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover why customers choose Jumiami Solar for their energy needs
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600">Failed to load testimonials. Please try again later.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-4">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover why customers choose Jumiami Solar for their energy needs
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-gray-600">No testimonials available at the moment.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const featuredTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why customers choose Jumiami Solar for their energy needs
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12 relative">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-white/20" />
                
                <div className="flex items-center mb-6">
                  {featuredTestimonial.imageUrl && (
                    <img 
                      src={featuredTestimonial.imageUrl} 
                      alt={`${featuredTestimonial.name} testimonial`}
                      className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-white/30"
                    />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{featuredTestimonial.name}</h3>
                    <p className="text-white/90 text-lg">
                      {featuredTestimonial.title}
                      {featuredTestimonial.company && `, ${featuredTestimonial.company}`}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-6">
                  {Array.from({ length: featuredTestimonial.rating }, (_, i) => (
                    <Star key={i} className="h-6 w-6 text-white fill-current mr-1" />
                  ))}
                </div>
                
                <blockquote className="text-white text-xl md:text-2xl leading-relaxed font-medium mb-8">
                  "{featuredTestimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="text-white/80 text-sm">
                    {currentTestimonialIndex + 1} of {testimonials.length}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        prevTestimonial();
                        handleUserInteraction();
                      }}
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        nextTestimonial();
                        handleUserInteraction();
                      }}
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] text-center mb-8">
            More Customer Stories
          </h2>
          
          {testimonials && testimonials.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                return (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p>No testimonials available.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience the same quality service and satisfaction that our clients rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[hsl(19,100%,58%)] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
