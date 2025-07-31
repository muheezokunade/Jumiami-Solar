import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import FloatingActionButton from "@/components/floating-action-button";
import SEO, { seoConfigs } from "@/components/seo";
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Services from "@/pages/services";
import Projects from "@/pages/projects";
import Testimonials from "@/pages/testimonials";
import Contact from "@/pages/contact";
import Analytics from "@/pages/analytics";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CookiePolicy from "@/pages/cookie-policy";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  
  // Determine which SEO config to use based on current route
  const getSEOConfig = () => {
    switch (location) {
      case '/':
        return seoConfigs.home;
      case '/about':
        return seoConfigs.about;
      case '/services':
        return seoConfigs.services;
      case '/products':
        return seoConfigs.products;
      case '/projects':
        return seoConfigs.projects;
      case '/testimonials':
        return seoConfigs.testimonials;
      case '/contact':
        return seoConfigs.contact;
      case '/analytics':
        return {
          title: "Analytics & Performance | Jumiami Solar - Website Analytics Dashboard",
          description: "Track website performance, user behavior, and marketing effectiveness with Jumiami Solar's comprehensive analytics dashboard.",
          keywords: "analytics dashboard, website performance, user behavior, marketing analytics, SEO metrics, Google Analytics",
          url: "https://jumiamisolar.com/analytics"
        };
      case '/privacy-policy':
        return {
          title: "Privacy Policy | Jumiami Solar - Data Protection & Privacy",
          description: "Learn how Jumiami Solar protects your personal information. Our comprehensive privacy policy explains data collection, usage, and your rights regarding your personal data.",
          keywords: "privacy policy, data protection, personal information, Jumiami Solar privacy, GDPR compliance",
          url: "https://jumiamisolar.com/privacy-policy"
        };
      case '/terms-of-service':
        return {
          title: "Terms of Service | Jumiami Solar - Legal Terms & Conditions",
          description: "Read Jumiami Solar's terms of service and legal conditions. Understand your rights and obligations when using our solar energy services and website.",
          keywords: "terms of service, legal terms, conditions, Jumiami Solar terms, service agreement",
          url: "https://jumiamisolar.com/terms-of-service"
        };
      case '/cookie-policy':
        return {
          title: "Cookie Policy | Jumiami Solar - How We Use Cookies",
          description: "Understand how Jumiami Solar uses cookies to improve your website experience. Learn about cookie types, management, and your privacy options.",
          keywords: "cookie policy, cookies, website cookies, Jumiami Solar cookies, privacy settings",
          url: "https://jumiamisolar.com/cookie-policy"
        };
      default:
        return {
          title: "Page Not Found | Jumiami Solar",
          description: "The page you're looking for doesn't exist. Visit Jumiami Solar for solar energy solutions in Nigeria.",
          keywords: "page not found, 404, Jumiami Solar",
          url: "https://jumiamisolar.com/404"
        };
    }
  };
  
  const seoConfig = getSEOConfig();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO {...seoConfig} />
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
