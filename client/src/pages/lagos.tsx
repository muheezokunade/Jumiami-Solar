import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Award, Shield, DollarSign, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function LagosPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Solar Installation in <span className="text-[hsl(19,100%,58%)]">Lagos</span>
          </h1>
          <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Trusted solar energy solutions for Lagos homes and businesses. Save ₦50,000+ monthly on electricity bills with professional installation and 25-year warranty.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/contact" aria-label="Get free quote for Lagos solar installation">
              <Button 
                size="lg"
                className="bg-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,50%)] text-white px-8 py-4 text-lg font-bold"
              >
                Get Free Quote for Lagos
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+2348118887425" aria-label="Call Jumiami Solar Lagos">
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Lagos Office
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lagos Office Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">
                Jumiami Solar Lagos Office
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,10%)]">Address</h3>
                    <p className="text-gray-600">Ikota shopping complex, Road 3, opp. Union Bank, Suite E167, 150/151, VGC Ajah, Lagos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,10%)]">Phone</h3>
                    <p className="text-gray-600">+234 811 888 7425</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,10%)]">Email</h3>
                    <p className="text-gray-600">info@jumiamisolar.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[hsl(19,100%,58%)] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[hsl(0,0%,10%)]">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Lagos Solar Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                      <span className="text-gray-700">Residential Solar Installation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                      <span className="text-gray-700">Commercial Solar Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                      <span className="text-gray-700">0% Interest Financing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[hsl(19,100%,58%)]" />
                      <span className="text-gray-700">24/7 Support Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lagos-Specific Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-4">
              Why Choose Jumiami Solar in Lagos?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving Lagos with premium solar solutions since 2020. Local expertise, reliable service, and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-3">Local Expertise</h3>
                <p className="text-gray-600">4+ years serving Lagos with deep understanding of local energy challenges and regulations.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-3">Quick Response</h3>
                <p className="text-gray-600">Same-day consultation and rapid installation. Emergency support available 24/7.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-3">Proven Results</h3>
                <p className="text-gray-600">500+ successful installations in Lagos. Average customer saves ₦50,000+ monthly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(0,0%,10%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Go Solar in Lagos?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join hundreds of Lagos residents saving ₦50,000+ monthly on electricity bills. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" aria-label="Get free quote for Lagos solar installation">
              <Button 
                size="lg"
                className="bg-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,50%)] text-white px-8 py-4 text-lg font-semibold"
              >
                Get Free Lagos Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+2348118887425" aria-label="Call Lagos office">
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-[hsl(0,0%,10%)] px-8 py-4 text-lg font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Lagos Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 