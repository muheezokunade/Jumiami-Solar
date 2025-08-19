// Centralized metrics configuration for Jumiami Solar
// This ensures consistency across all pages and components

export const COMPANY_METRICS = {
  // Core Statistics
  totalProjects: 50,
  totalCapacity: "5MW+",
  totalCustomers: 1000,
  yearsExperience: 5,
  successRate: 95,
  averageRating: 4.9,
  
  // Customer Statistics
  happyCustomers: 500,
  customerSatisfaction: "95%",
  completionRate: "100%",
  
  // Financial Impact
  averageMonthlySavings: "₦50,000+",
  totalClientSavings: "₦6.5M+",
  
  // Geographic Coverage
  citiesServed: 3,
  coverageAreas: {
    lagos: { coverage: 95, projects: 150, rating: 4.9 },
    ilorin: { coverage: 88, projects: 80, rating: 4.9 },
    abeokuta: { coverage: 92, projects: 120, rating: 4.9 }
  },
  
  // Certifications & Awards
  certifications: ["NERC Certified", "ISO 9001:2015", "Customer Excellence Award"],
  firstNERC: "1st",
  
  // Project Types
  projectTypes: {
    residential: 25,
    commercial: 15,
    industrial: 10
  },
  
  // Timeline Milestones
  milestones: [
    { year: "2019", title: "Company Founded", description: "Started with a vision to illuminate Nigeria" },
    { year: "2020", title: "First 100 Projects", description: "Reached 100 successful installations" },
    { year: "2021", title: "Ilorin Branch", description: "Expanded to Kwara State" },
    { year: "2022", title: "Abeokuta Branch", description: "Opened Ogun State office" },
    { year: "2023", title: "5MW Milestone", description: "Installed over 5MW of solar capacity" },
    { year: "2024", title: "1000+ Customers", description: "Served over 1000 satisfied customers" }
  ],
  
  // Team Information
  teamMembers: 3,
  employees: 50,
  
  // Contact Information
  phone: "+234 811 888 7425",
  whatsapp: "2348118887425",
  email: "info@jumiamisolar.com",
  
  // Business Hours
  businessHours: {
    weekdays: "8:00AM - 6:00PM",
    saturday: "9:00AM - 4:00PM",
    sunday: "Closed"
  }
};

// Helper functions for formatting metrics
export const formatMetrics = {
  // Format numbers with proper suffixes
  formatNumber: (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`;
    }
    return `${num}+`;
  },
  
  // Format currency
  formatCurrency: (amount: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  },
  
  // Format percentage
  formatPercentage: (value: number): string => {
    return `${value}%`;
  },
  
  // Format rating
  formatRating: (rating: number): string => {
    return rating.toFixed(1);
  }
};

// Predefined metric sets for different page sections
export const METRIC_SETS = {
  // Hero/Trust Statistics
  heroStats: [
    {
      number: COMPANY_METRICS.firstNERC,
      label: "NERC Certified",
      description: "Only solar company approved by Nigerian Electricity Regulatory Commission",
      icon: "Award"
    },
    {
      number: formatMetrics.formatNumber(COMPANY_METRICS.happyCustomers),
      label: "Happy Customers",
      description: "More Nigerian families trust us than any other solar company",
      icon: "Users"
    },
    {
      number: formatMetrics.formatPercentage(COMPANY_METRICS.successRate),
      label: "Success Rate",
      description: "Highest project completion and satisfaction rate",
      icon: "Star"
    },
    {
      number: `${COMPANY_METRICS.yearsExperience}+`,
      label: "Years Experience",
      description: "Proven track record of excellence in solar solutions",
      icon: "Clock"
    }
  ],
  
  // Impact Statistics
  impactStats: [
    {
      number: formatMetrics.formatNumber(COMPANY_METRICS.totalProjects),
      label: "Projects Completed",
      description: "Across residential and commercial sectors",
      icon: "Award"
    },
    {
      number: COMPANY_METRICS.totalCapacity,
      label: "Total Capacity",
      description: "Powering thousands of homes and businesses",
      icon: "Zap"
    },
    {
      number: formatMetrics.formatNumber(COMPANY_METRICS.totalCustomers),
      label: "Satisfied Customers",
      description: "Building lasting relationships",
      icon: "Users"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock customer service",
      icon: "Clock"
    }
  ],
  
  // Project Statistics
  projectStats: [
    {
      number: formatMetrics.formatNumber(COMPANY_METRICS.totalProjects),
      label: "Completed Projects",
      icon: "Award"
    },
    {
      number: COMPANY_METRICS.totalCapacity,
      label: "Total Capacity",
      icon: "Zap"
    },
    {
      number: formatMetrics.formatCurrency(6500000),
      label: "Client Savings",
      icon: "DollarSign"
    },
    {
      number: formatMetrics.formatRating(COMPANY_METRICS.averageRating),
      label: "Average Rating",
      icon: "Star"
    }
  ],
  
  // Geographic Coverage
  coverageStats: [
    {
      city: "Lagos",
      coverage: COMPANY_METRICS.coverageAreas.lagos.coverage,
      projects: COMPANY_METRICS.coverageAreas.lagos.projects,
      rating: COMPANY_METRICS.coverageAreas.lagos.rating
    },
    {
      city: "Ilorin",
      coverage: COMPANY_METRICS.coverageAreas.ilorin.coverage,
      projects: COMPANY_METRICS.coverageAreas.ilorin.projects,
      rating: COMPANY_METRICS.coverageAreas.ilorin.rating
    },
    {
      city: "Abeokuta",
      coverage: COMPANY_METRICS.coverageAreas.abeokuta.coverage,
      projects: COMPANY_METRICS.coverageAreas.abeokuta.projects,
      rating: COMPANY_METRICS.coverageAreas.abeokuta.rating
    }
  ]
};

// SEO and meta descriptions using consistent metrics
export const SEO_METRICS = {
  description: `Transform your energy future with Nigeria's most trusted solar company. NERC certified, ${COMPANY_METRICS.happyCustomers}+ happy customers, and ${COMPANY_METRICS.yearsExperience}+ years of excellence.`,
  shortDescription: `Expert solar panel installation, inverters, batteries & maintenance in Lagos, Ilorin & Abeokuta. ${COMPANY_METRICS.completionRate} completion rate, ${formatMetrics.formatRating(COMPANY_METRICS.averageRating)}/5 rating.`,
  achievements: `${COMPANY_METRICS.totalProjects}+ projects, ${COMPANY_METRICS.totalCapacity} installed, ${COMPANY_METRICS.totalCustomers}+ customers served`
};

export default COMPANY_METRICS; 