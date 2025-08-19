import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";

// Blog posts data (same as in blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Solar Panel System for Your Home in Nigeria",
    excerpt: "Nigeria's energy landscape is changing. With the national grid often unreliable and the cost of fossil fuels on the rise, solar power is no longer a luxury—it's a smart, sustainable solution for homes across the country.",
    content: `Nigeria's energy landscape is changing. With the national grid often unreliable and the cost of fossil fuels on the rise, solar power is no longer a luxury—it's a smart, sustainable solution for homes across the country. But with so many options, how do you choose the right solar panel system for your needs?

This guide breaks down the essential factors to consider, from assessing your energy needs to understanding the costs, so you can make a confident and informed decision.

## 1. Know Your Power Needs

This is the most critical first step. You can't choose a system without knowing what you need to power.

Start by listing every appliance you want to run on solar energy. Think about everything from your fridge and television to your fans, lights, and phone chargers.

Next, find the wattage for each of these appliances and estimate how many hours a day you'll use them. You can usually find the wattage on the appliance's label or in its manual.

For example, a 100-watt fan used for 5 hours a day consumes 100W×5h=500Wh of energy.

Add up the total daily consumption for all your appliances to get your final daily energy need in kilowatt-hours (kWh). It's a good idea to add a 10-20% buffer to this number to account for extra usage or future appliances.

## 2. Understand the Key Components

A solar system is more than just panels. It's a complete setup with a few key parts that work together.

**Solar Panels**: These are the heart of the system, capturing sunlight and converting it into DC electricity.

**Inverter**: This is the brain of the system, converting the DC electricity from the panels into AC electricity, which is what your home appliances use.

**Batteries**: Given Nigeria's frequent power outages, batteries are essential. They store the energy generated during the day for use at night or when the sun isn't shining. Lithium-ion batteries are a popular choice because they last longer and require less maintenance than traditional lead-acid batteries.

**Charge Controller**: This device protects your batteries by regulating the flow of power from the solar panels and preventing them from overcharging.

## 3. Choose the Right Panel Type

Solar panels are not all the same. There are three main types, and knowing the difference can save you money and space.

**Monocrystalline Panels**: These are the most efficient panels (15-22% efficiency) and are perfect for homes with limited roof space. They perform well in high temperatures, making them a great fit for Nigeria's climate, but they are also the most expensive.

**Polycrystalline Panels**: A slightly less efficient but more affordable option (13-16% efficiency), these are a common choice for residential installations where cost is a major factor.

**Thin-Film Panels**: These are the least efficient and not typically used for residential installations because they require a much larger area to generate the same amount of power.

## 4. Consider the Cost and Your Budget

The initial investment for a solar system can seem high, but it's crucial to see it as a long-term investment that will save you money on electricity and fuel for years to come.

The cost depends on:

**System Size**: The larger the system, the higher the cost. A small system (1kVA) for basic needs can cost around ₦500,000, while a larger system (5kVA+) can run into millions of naira.

**Panel and Battery Type**: High-quality, efficient panels and long-lasting batteries will increase the upfront cost.

**Installation**: Labor costs vary depending on the installer and the complexity of your home's setup.

While the initial cost is significant, many homeowners find the system pays for itself in just a few years by eliminating reliance on the national grid and noisy, expensive generators.

## 5. Find a Reputable Installer

Your solar system is only as good as its installation. Make sure you choose a reliable and experienced installer who will:

- Do a thorough analysis of your energy needs to recommend the perfect system size.
- Provide a clear, itemized breakdown of all costs.
- Offer strong warranties on their work and the equipment.
- Provide references from previous customers.

By taking the time to assess your needs, understand the components, and choose the right partner for the job, you can ensure a seamless transition to a more reliable, cost-effective, and sustainable source of power for your home.`,
    author: "Jumiami Solar Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Solar Tips",
    tags: ["solar panels", "home installation", "energy savings", "Nigeria", "solar system", "batteries", "inverters"],
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

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [isVisible, setIsVisible] = useState(false);
  const slug = params?.slug;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = blogPosts
    .filter(p => p.id !== post?.id && p.category === post?.category)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${post.title}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="/blog">
              <Button variant="outline" className="mb-8 border-white/30 text-white hover:bg-white hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-6">
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .split('\n\n')
                      .map(paragraph => {
                        if (paragraph.startsWith('## ')) {
                          return `<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">${paragraph.slice(3)}</h2>`;
                        }
                        if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                          return `<h3 class="text-xl font-medium text-gray-900 mt-6 mb-3">${paragraph}</h3>`;
                        }
                        if (paragraph.startsWith('- ')) {
                          return `<ul class="list-disc list-inside mt-4 mb-4 space-y-2"><li>${paragraph.slice(2)}</li></ul>`;
                        }
                        return `<p class="mb-4">${paragraph}</p>`;
                      })
                      .join('')
                  }}
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">Solar Energy Experts</p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                        <div className="group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <OptimizedImage
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              width={80}
                              height={60}
                              className="w-20 h-15 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">{formatDate(relatedPost.date)}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light mb-6">Ready to Go Solar?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your solar installation. Our experts will help you choose the perfect system for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-orange-600 px-8 py-4">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 