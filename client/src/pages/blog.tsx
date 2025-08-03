import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

// Blog posts data with SEO-optimized content
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Solar Panel System for Your Home in Nigeria",
    excerpt: "Learn the essential factors to consider when selecting a solar panel system for your Nigerian home. From panel efficiency to installation costs, we cover everything you need to know.",
    content: "Choosing the right solar panel system for your home in Nigeria requires careful consideration of several factors. First, assess your energy consumption by reviewing your monthly electricity bills. This will help determine the system size you need. Consider the available roof space and orientation - south-facing roofs typically receive the most sunlight. Panel efficiency is crucial; higher efficiency panels may cost more but require less space. Don't forget to factor in local weather conditions and potential shading from trees or buildings. Finally, consider your budget and available financing options. Many Nigerian homeowners are surprised to learn that solar systems can pay for themselves within 3-5 years through energy savings.",
    author: "Jumiami Solar Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Solar Tips",
    tags: ["solar panels", "home installation", "energy savings", "Nigeria"],
    image: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
    slug: "choose-right-solar-panel-system-nigeria"
  },
  {
    id: 2,
    title: "Solar Energy Trends in Nigeria: What's New in 2024",
    excerpt: "Discover the latest trends in solar energy adoption across Nigeria. From government incentives to technological advancements, see what's driving the solar revolution.",
    content: "2024 is shaping up to be a transformative year for solar energy in Nigeria. Government initiatives are making solar more accessible than ever, with new tax incentives and financing programs. Technological advancements are bringing down costs while improving efficiency. Battery storage systems are becoming more popular, allowing homeowners to store excess energy for use during power outages. Community solar projects are gaining traction, especially in rural areas. The rise of smart solar monitoring systems is helping users track their energy production and consumption in real-time. These trends are making solar energy an increasingly attractive option for Nigerian households and businesses.",
    author: "Jumiami Solar Team",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Industry News",
    tags: ["solar trends", "Nigeria", "renewable energy", "2024"],
    image: "https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg",
    slug: "solar-energy-trends-nigeria-2024"
  },
  {
    id: 3,
    title: "Understanding Solar Inverter Types: Which One is Right for You?",
    excerpt: "Compare different types of solar inverters and learn which one best suits your energy needs. From grid-tied to hybrid systems, we break down the options.",
    content: "Solar inverters are the heart of any solar energy system, converting DC power from panels to AC power for your home. Grid-tied inverters are the most common and cost-effective option, feeding excess power back to the grid. Hybrid inverters combine the benefits of grid-tied systems with battery backup capabilities, perfect for areas with frequent power outages. Off-grid inverters are designed for complete independence from the utility grid. When choosing an inverter, consider your location's power reliability, energy consumption patterns, and future expansion plans. The right inverter can significantly impact your system's efficiency and reliability.",
    author: "Jumiami Solar Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Solar Tips",
    tags: ["solar inverters", "hybrid systems", "grid-tied", "battery backup"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdhHXSe4zey3vJ8Shzf7b535FElelgAKGUQ&s",
    slug: "understanding-solar-inverter-types"
  },
  {
    id: 4,
    title: "Solar Maintenance Guide: Keeping Your System Running Efficiently",
    excerpt: "Essential maintenance tips to keep your solar panel system operating at peak efficiency. Learn about cleaning, monitoring, and troubleshooting common issues.",
    content: "Regular maintenance is crucial for maximizing your solar panel system's performance and lifespan. Clean your panels every 3-6 months to remove dust, bird droppings, and other debris that can reduce efficiency. Monitor your system's performance through your inverter's display or mobile app to catch issues early. Check for loose connections and damaged wiring during routine inspections. Trim nearby trees that may cast shadows on your panels. During the rainy season, ensure proper drainage around your installation. Professional maintenance visits every 1-2 years can help identify and fix potential issues before they become costly problems.",
    author: "Jumiami Solar Team",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "Maintenance",
    tags: ["solar maintenance", "panel cleaning", "system monitoring", "efficiency"],
    image: "https://www.energy.gov/sites/default/files/2021-11/35974719113_24cfb03c24_o.jpg",
    slug: "solar-maintenance-guide-efficient-system"
  }
];

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["all", "solar tips", "industry news", "maintenance"];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || 
      post.category.toLowerCase() === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white" aria-labelledby="blog-hero-heading">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 id="blog-hero-heading" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wide">
              Solar Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Expert insights, tips, and industry news to help you make informed solar energy decisions
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                aria-label="Search blog articles"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-700 hover:bg-orange-50"
                  }`}
                  aria-label={`Filter by ${category} category`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white" aria-labelledby="blog-posts-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="blog-posts-heading" className="text-4xl font-light text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest solar energy insights and tips
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  aria-labelledby={`post-${post.id}-title`}
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="h-4 w-4 mr-2" aria-hidden="true" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 id={`post-${post.id}-title`} className="text-xl font-light text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
                        aria-label={`Read full article: ${post.title}`}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Stay Updated with Solar Insights
          </h3>
          <p className="text-gray-600 mb-8">
            Get the latest solar energy tips, industry news, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              aria-label="Email address for newsletter"
            />
            <Button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 