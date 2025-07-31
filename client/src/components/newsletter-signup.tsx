import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail, Zap, Sun, Battery, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  showBenefits?: boolean;
  className?: string;
}

export default function NewsletterSignup({
  title = "Stay Updated with Solar Energy Tips",
  description = "Get the latest solar energy news, tips, and exclusive offers delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Now",
  showBenefits = true,
  className = ""
}: NewsletterSignupProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    {
      icon: <Zap className="h-5 w-5 text-[hsl(19,100%,58%)]" />,
      text: "Energy saving tips and tricks"
    },
    {
      icon: <Sun className="h-5 w-5 text-[hsl(19,100%,58%)]" />,
      text: "Latest solar technology updates"
    },
    {
      icon: <Battery className="h-5 w-5 text-[hsl(19,100%,58%)]" />,
      text: "Exclusive installation offers"
    },
    {
      icon: <Shield className="h-5 w-5 text-[hsl(19,100%,58%)]" />,
      text: "Maintenance and warranty info"
    }
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Track newsletter signup event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: 'newsletter_subscription',
          value: 1
        });
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store in localStorage for demo
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      subscribers.push({
        email,
        subscribedAt: new Date().toISOString(),
        source: window.location.pathname
      });
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));

      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. Check your email for confirmation.",
      });

      // Track successful subscription
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'newsletter_signup_success', {
          event_category: 'engagement',
          event_label: 'newsletter_subscription_success',
          value: 1
        });
      }

    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className={`bg-gradient-to-br from-green-50 to-green-100 border-green-200 ${className}`}>
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">Welcome to the Family!</h3>
          <p className="text-green-700 mb-6">
            You've successfully subscribed to our newsletter. We'll send you the latest solar energy insights and exclusive offers.
          </p>
          <Button
            onClick={() => setIsSubscribed(false)}
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Subscribe Another Email
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white ${className}`}>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40"
              required
            />
            <Button
              type="submit"
              disabled={isLoading || !email}
              className="bg-white text-[hsl(0,0%,10%)] hover:bg-gray-100 font-semibold px-8"
            >
              {isLoading ? 'Subscribing...' : buttonText}
            </Button>
          </div>
        </form>

        {showBenefits && (
          <div className="mt-8">
            <p className="text-white/80 text-sm mb-4 text-center">You'll receive:</p>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  {benefit.icon}
                  <span className="text-white/90">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-white/70 text-xs mt-6 text-center">
          We respect your privacy. Unsubscribe at any time. No spam, ever.
        </p>
      </CardContent>
    </Card>
  );
}

// Email Campaign Component
export function EmailCampaign() {
  const campaigns = [
    {
      title: "Solar Energy Savings Guide",
      description: "Learn how to maximize your solar investment and reduce energy bills",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      status: "active",
      subscribers: 1247,
      openRate: "68%"
    },
    {
      title: "Maintenance Tips & Tricks",
      description: "Keep your solar system running at peak efficiency",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      status: "scheduled",
      subscribers: 1247,
      openRate: "72%"
    },
    {
      title: "Latest Solar Technology Updates",
      description: "Stay ahead with the newest solar innovations and trends",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      status: "draft",
      subscribers: 1247,
      openRate: "65%"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[hsl(0,0%,10%)] mb-2">Our Email Campaigns</h3>
        <p className="text-gray-600">Valuable content delivered to your inbox</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {campaigns.map((campaign, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                  campaign.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {campaign.status}
                </span>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">{campaign.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{campaign.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{campaign.subscribers} subscribers</span>
                <span>{campaign.openRate} open rate</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 