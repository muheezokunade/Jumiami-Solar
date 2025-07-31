import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = 'https://jumiamisolar.com/og-image.jpg',
  url = 'https://jumiamisolar.com',
  type = 'website',
  structuredData 
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type }
    ];
    
    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    });
    
    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    });
    
    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
  }, [title, description, keywords, image, url, type, structuredData]);
  
  return null;
}

// Predefined SEO configurations for each page
export const seoConfigs = {
  home: {
    title: "Jumiami Solar - #1 Solar Energy Company in Nigeria | Solar Panels, Inverters & Installation",
    description: "Jumiami Solar is Nigeria's leading solar energy company. Expert solar panel installation, inverters, batteries & maintenance in Lagos, Ilorin & Abeokuta. 100% completion rate, 4.9/5 rating. Free consultation available.",
    keywords: "solar energy Nigeria, solar panels Lagos, solar installation Ilorin, solar company Abeokuta, solar inverters Nigeria, solar batteries, solar maintenance, renewable energy Nigeria, solar power installation, solar experts Nigeria, Jumiami Solar",
    url: "https://jumiamisolar.com/"
  },
  about: {
    title: "About Jumiami Solar - Nigeria's Leading Solar Energy Company | Our Story & Mission",
    description: "Learn about Jumiami Solar's journey as Nigeria's premier solar energy company. Discover our mission to provide sustainable energy solutions across Lagos, Ilorin, and Abeokuta.",
    keywords: "about Jumiami Solar, solar company Nigeria, solar energy mission, sustainable energy Nigeria, solar experts Lagos, solar installation company",
    url: "https://jumiamisolar.com/about"
  },
  services: {
    title: "Solar Energy Services in Nigeria | Jumiami Solar - Installation, Maintenance & Support",
    description: "Comprehensive solar energy services in Nigeria. Solar panel installation, inverter setup, battery systems, maintenance, and 24/7 support. Serving Lagos, Ilorin, and Abeokuta.",
    keywords: "solar services Nigeria, solar installation services, solar maintenance, solar support, solar panel installation Lagos, solar inverter installation",
    url: "https://jumiamisolar.com/services"
  },
  products: {
    title: "Solar Products Nigeria | Jumiami Solar - Premium Solar Panels, Inverters & Batteries",
    description: "Premium solar products in Nigeria. High-quality solar panels, inverters, batteries, and accessories. Best brands with warranty. Free consultation and installation.",
    keywords: "solar products Nigeria, solar panels Nigeria, solar inverters, solar batteries, solar accessories, premium solar equipment",
    url: "https://jumiamisolar.com/products"
  },
  projects: {
    title: "Solar Projects Nigeria | Jumiami Solar - Residential & Commercial Installations",
    description: "View our completed solar projects across Nigeria. Residential and commercial installations in Lagos, Ilorin, and Abeokuta. Real case studies and success stories.",
    keywords: "solar projects Nigeria, solar installations Lagos, commercial solar projects, residential solar installations, solar case studies",
    url: "https://jumiamisolar.com/projects"
  },
  testimonials: {
    title: "Customer Testimonials | Jumiami Solar - 4.9/5 Rating from Satisfied Clients",
    description: "Read authentic customer testimonials and reviews for Jumiami Solar. 4.9/5 rating from satisfied clients across Nigeria. Real success stories and feedback.",
    keywords: "Jumiami Solar reviews, solar company testimonials, customer feedback Nigeria, solar installation reviews, solar company ratings",
    url: "https://jumiamisolar.com/testimonials"
  },
  contact: {
    title: "Contact Jumiami Solar | Free Consultation - Lagos, Ilorin & Abeokuta Offices",
    description: "Contact Jumiami Solar for free consultation. Offices in Lagos, Ilorin, and Abeokuta. Call 08118887425 or visit our locations. Expert solar advice and quotes.",
    keywords: "contact Jumiami Solar, solar consultation Nigeria, solar company contact, solar experts Lagos, solar installation quote",
    url: "https://jumiamisolar.com/contact"
  }
}; 