import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const nextTestimonial = () => {
    if (testimonials) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Testimonials</h2>
          <p className="text-gray-600">Unable to load testimonials. Please try again later.</p>
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
            Customer Testimonials
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Hear from our satisfied customers about their solar energy experience
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <Card className="glass-morphism rounded-2xl text-white">
              <CardContent className="p-12 text-center">
                <Skeleton className="w-20 h-20 rounded-full mx-auto mb-6" />
                <Skeleton className="h-6 w-48 mx-auto mb-4" />
                <Skeleton className="h-4 w-32 mx-auto mb-6" />
                <Skeleton className="h-20 w-full mb-6" />
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="w-5 h-5 mx-1" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="relative">
              <Card className="glass-morphism rounded-2xl text-white">
                <CardContent className="p-12 text-center">
                  <Quote className="h-16 w-16 mx-auto mb-6 text-[hsl(47,100%,63%)] opacity-50" />
                  
                  {testimonials[currentIndex].imageUrl && (
                    <img 
                      src={testimonials[currentIndex].imageUrl} 
                      alt={`${testimonials[currentIndex].name} testimonial`}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                    />
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h3>
                  <p className="text-white/80 mb-6">
                    {testimonials[currentIndex].title}
                    {testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
                  </p>
                  
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }, (_, i) => (
                      <Star key={i} className="h-6 w-6 text-[hsl(47,100%,63%)] fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl leading-relaxed italic max-w-3xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                </CardContent>
              </Card>
              
              {/* Carousel Navigation */}
              <div className="flex justify-center mt-8 space-x-4">
                <Button
                  onClick={prevTestimonial}
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  onClick={nextTestimonial}
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Card className="glass-morphism rounded-2xl text-white">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">No Testimonials Available</h3>
                <p className="text-white/80">Customer testimonials will be displayed here once available.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              What Our Clients <span className="text-[hsl(19,100%,58%)]">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Jumiami Solar.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="glass-morphism rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Skeleton className="w-16 h-16 rounded-full mr-4" />
                      <div>
                        <Skeleton className="h-5 w-32 mb-2" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="w-5 h-5 mr-1" />
                      ))}
                    </div>
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No Testimonials Available</h3>
              <p className="text-gray-500">Customer testimonials will be displayed here once available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Customer Satisfaction Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Customer <span className="text-[hsl(19,100%,58%)]">Satisfaction</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our customer satisfaction metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="floating-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-4 font-serif">4.9/5</div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Average Rating</h3>
              <p className="text-gray-600">Based on customer reviews and feedback</p>
            </div>
            
            <div className="floating-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-4 font-serif">100%</div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Completion Rate</h3>
              <p className="text-gray-600">All projects completed successfully</p>
            </div>
            
            <div className="floating-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-4 font-serif">95%</div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Referral Rate</h3>
              <p className="text-gray-600">Customers who refer us to others</p>
            </div>
            
            <div className="floating-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[hsl(19,100%,58%)] mb-4 font-serif">24hr</div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Response Time</h3>
              <p className="text-gray-600">Average support response time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Why Customers <span className="text-[hsl(19,100%,58%)]">Trust Us</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Quality Assurance</h3>
              <p className="text-gray-600">Premium products, professional installation, and comprehensive warranties ensure long-term satisfaction.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Transparent Communication</h3>
              <p className="text-gray-600">Clear, honest communication throughout the entire process from consultation to completion.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <ChevronRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Ongoing Support</h3>
              <p className="text-gray-600">Dedicated customer support and maintenance services ensure your solar system performs optimally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Join Our <span className="text-[hsl(19,100%,58%)]">Satisfied</span> Customers
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the Jumiami Solar difference. Get your free consultation today and join thousands of satisfied customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white px-10 py-4 text-lg font-semibold hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(0,0%,10%)] transition-all duration-300"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
