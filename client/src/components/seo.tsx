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

// Predefined SEO configurations for each page with enhanced local SEO and schema markup
export const seoConfigs = {
  home: {
    title: "Jumiami Solar - Premium Solar Energy Solutions in Nigeria | Save ₦50K+ Monthly",
    description: "Leading solar energy company in Nigeria. Premium solar panels, inverters, batteries & installation services. Save ₦50K+ monthly on electricity bills. Free consultation available. Serving Lagos, Ilorin, Abeokuta & nationwide.",
    keywords: "solar energy Nigeria, solar panels Lagos, solar installation, solar company Nigeria, solar power, renewable energy Nigeria, solar panels Ilorin, solar Abeokuta, solar installation Lagos, solar company near me, solar installation cost Nigeria",
    url: "https://jumiamisolar.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Jumiami Solar",
      "description": "Premium solar energy solutions in Nigeria",
      "url": "https://jumiamisolar.com",
      "logo": "https://jumiamisolar.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+2348118887425",
        "contactType": "customer service",
        "areaServed": "Nigeria",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Nigeria",
        "addressRegion": "Lagos"
      },
      "sameAs": [
        "https://facebook.com/jumiamisolar",
        "https://instagram.com/jumiamisolar",
        "https://twitter.com/jumiamisolar"
      ]
    }
  },
  about: {
    title: "About Jumiami Solar - Leading Solar Energy Company in Nigeria | 10+ Years Experience",
    description: "Jumiami Solar is Nigeria's premier solar energy company with 10+ years experience in solar installation, maintenance & support. Serving Lagos, Ilorin, Abeokuta & nationwide. Expert solar solutions for homes and businesses.",
    keywords: "about Jumiami Solar, solar company Nigeria, solar installation experience, solar energy experts, solar maintenance Nigeria, solar company Lagos, solar company Ilorin, solar company Abeokuta",
    url: "https://jumiamisolar.com/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Jumiami Solar",
      "description": "Nigeria's premier solar energy company with 10+ years experience",
      "mainEntity": {
        "@type": "Organization",
        "name": "Jumiami Solar",
        "foundingDate": "2014",
        "description": "Leading solar energy solutions provider in Nigeria"
      }
    }
  },
  products: {
    title: "Solar Products & Services Nigeria | Jumiami Solar - Premium Panels, Inverters & Installation",
    description: "Premium solar products and comprehensive services in Nigeria. High-quality solar panels, inverters, batteries, installation, and maintenance. Best brands with warranty. Free consultation available. Serving Lagos, Ilorin, Abeokuta.",
    keywords: "solar products Nigeria, solar services Nigeria, solar panels Nigeria, solar inverters, solar batteries, solar installation, solar maintenance, premium solar equipment, solar panels Lagos, solar installation Ilorin, solar installation Abeokuta",
    url: "https://jumiamisolar.com/products",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Solar Products & Services",
      "description": "Premium solar products and installation services",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Premium Solar Panels",
          "description": "High-efficiency monocrystalline solar panels"
        },
        {
          "@type": "Product", 
          "name": "Hybrid Inverters",
          "description": "Advanced hybrid inverters with smart grid integration"
        },
        {
          "@type": "Product",
          "name": "Lithium Battery Systems", 
          "description": "High-performance lithium-ion battery systems"
        },
        {
          "@type": "Service",
          "name": "Solar Installation",
          "description": "Professional solar panel installation services"
        }
      ]
    }
  },
  projects: {
    title: "Solar Projects Nigeria | Jumiami Solar - Residential & Commercial Installations | Case Studies",
    description: "View our completed solar projects across Nigeria. Residential and commercial installations in Lagos, Ilorin, and Abeokuta. Real case studies, success stories, and energy savings examples.",
    keywords: "solar projects Nigeria, solar installations Lagos, commercial solar projects, residential solar installations, solar case studies, solar projects Ilorin, solar projects Abeokuta",
    url: "https://jumiamisolar.com/projects",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Solar Projects Portfolio",
      "description": "Completed solar installations across Nigeria"
    }
  },
  contact: {
    title: "Contact Jumiami Solar | Free Consultation - Lagos, Ilorin & Abeokuta Offices | Call +234 811 888 7425",
    description: "Contact Jumiami Solar for free consultation. Offices in Lagos, Ilorin, and Abeokuta. Call +234 811 888 7425 or visit our locations. Expert solar advice and quotes. WhatsApp support available.",
    keywords: "contact Jumiami Solar, solar consultation Nigeria, solar quote, solar installation Lagos, solar company contact, solar consultation Ilorin, solar consultation Abeokuta, WhatsApp solar consultation",
    url: "https://jumiamisolar.com/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Jumiami Solar",
      "description": "Get in touch for solar consultation and quotes",
      "mainEntity": {
        "@type": "Organization",
        "name": "Jumiami Solar",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2348118887425",
          "contactType": "customer service",
          "areaServed": "Nigeria"
        }
      }
    }
  }
}; 