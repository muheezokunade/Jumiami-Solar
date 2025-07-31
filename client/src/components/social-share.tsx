import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Share2, 
  Copy, 
  Check,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  hashtags?: string[];
}

export default function SocialShare({ 
  title = "Jumiami Solar - #1 Solar Energy Company in Nigeria",
  description = "Expert solar panel installation, inverters, batteries & maintenance in Lagos, Ilorin & Abeokuta. 100% completion rate, 4.9/5 rating.",
  url = "https://jumiamisolar.com",
  image = "https://jumiamisolar.com/og-image.jpg",
  hashtags = ["SolarEnergy", "Nigeria", "SolarPower", "JumiamiSolar"]
}: SocialShareProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    description,
    url,
    image
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(description)}&url=${encodeURIComponent(url)}&hashtags=${hashtags.join(',')}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${description} ${url}`)}`
  };

  const handleShare = async (platform: string) => {
    try {
      if (platform === 'native' && navigator.share) {
        await navigator.share(shareData);
      } else if (shareUrls[platform as keyof typeof shareUrls]) {
        window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
      }
      
      // Track social share event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'share', {
          method: platform,
          content_type: 'page',
          item_id: window.location.pathname
        });
      }
      
      toast({
        title: "Shared Successfully",
        description: `Content shared on ${platform}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      
      toast({
        title: "Link Copied",
        description: "URL copied to clipboard",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying link:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Share This Page</h3>
        <p className="text-gray-600">Help others discover Jumiami Solar's solar energy solutions</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          onClick={() => handleShare('facebook')}
          className="bg-blue-600 hover:bg-blue-700 text-white"
          size="sm"
        >
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        
        <Button
          onClick={() => handleShare('twitter')}
          className="bg-sky-500 hover:bg-sky-600 text-white"
          size="sm"
        >
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </Button>
        
        <Button
          onClick={() => handleShare('linkedin')}
          className="bg-blue-700 hover:bg-blue-800 text-white"
          size="sm"
        >
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </Button>
        
        <Button
          onClick={() => handleShare('whatsapp')}
          className="bg-green-600 hover:bg-green-700 text-white"
          size="sm"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          WhatsApp
        </Button>
        
        <Button
          onClick={handleCopyLink}
          variant="outline"
          size="sm"
          className="border-[hsl(19,100%,58%)] text-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,58%)] hover:text-white"
        >
          {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
          {copied ? 'Copied!' : 'Copy Link'}
        </Button>
        
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <Button
            onClick={() => handleShare('native')}
            variant="outline"
            size="sm"
            className="border-[hsl(19,100%,58%)] text-[hsl(19,100%,58%)] hover:bg-[hsl(19,100%,58%)] hover:text-white"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        )}
      </div>
    </div>
  );
}

// Social Media Feed Component
export function SocialFeed() {
  const socialPosts = [
    {
      platform: 'Instagram',
      username: '@jumiamisolar1_',
      content: 'New solar installation completed in Victoria Island! 🌞 Our team delivered another flawless project. #SolarEnergy #Nigeria #JumiamiSolar',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      likes: 45,
      comments: 12,
      time: '2 hours ago'
    },
    {
      platform: 'Facebook',
      username: 'Jumiami Solar',
      content: 'Happy customers = Happy team! 😊 Another satisfied client with their new solar system. Contact us for your free consultation!',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      likes: 89,
      comments: 23,
      time: '1 day ago'
    },
    {
      platform: 'Twitter',
      username: '@bukkysulyman',
      content: 'Solar energy is the future! 🌍 Join the renewable energy revolution with Jumiami Solar. #CleanEnergy #SolarPower #Nigeria',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      likes: 156,
      comments: 34,
      time: '3 days ago'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-2">Follow Us on Social Media</h3>
        <p className="text-gray-600">Stay updated with our latest projects and solar energy tips</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {socialPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img 
                src={post.image} 
                alt={post.content}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                  {post.platform}
                </span>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[hsl(19,100%,58%)]">
                  {post.username}
                </span>
                <span className="text-xs text-gray-500">{post.time}</span>
              </div>
              
              <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                {post.content}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
                
                <a 
                  href={`https://${post.platform.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[hsl(19,100%,58%)] hover:text-[hsl(19,100%,48%)] transition-colors"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button 
          className="bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)]"
          onClick={() => window.open('https://www.instagram.com/jumiamisolar1_', '_blank')}
        >
          <Instagram className="h-4 w-4 mr-2" />
          Follow Us on Instagram
        </Button>
      </div>
    </div>
  );
} 