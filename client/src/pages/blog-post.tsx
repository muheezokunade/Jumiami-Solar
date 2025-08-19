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

- Do a thorough analysis of your energy needs to recommend the perfect system size
- Provide a clear, itemized breakdown of all costs
- Offer strong warranties on their work and the equipment
- Provide references from previous customers

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
    excerpt: "Solar energy is no longer a niche market in Nigeria; it's a rapidly growing industry driven by the country's need for reliable and affordable power. Discover the latest trends shaping Nigeria's solar landscape.",
    content: `Solar energy is no longer a niche market in Nigeria; it's a rapidly growing industry driven by the country's need for reliable and affordable power. The year 2024 has seen significant shifts, from major government initiatives to advancements in technology and changing consumer behavior. Here's a look at the latest trends shaping Nigeria's solar landscape.

## 1. The Fuel Subsidy Removal and Soaring Demand

One of the most significant drivers of solar adoption in 2024 has been the removal of the petrol subsidy. This policy shift has led to a dramatic increase in the price of fuel, making the running of generators an unsustainable and expensive option for many households and businesses. As a result, solar energy has become a more economically attractive and competitive alternative. This has fueled a surge in demand for residential and commercial solar installations, propelling Nigeria to become a top solar installer in Africa.

## 2. Government Incentives and Large-Scale Projects

The Nigerian government is increasingly recognizing the potential of solar energy to address the country's power deficit. Several key initiatives are underway:

**Solar Power Naija**: The Federal Government's flagship program continues to be a major force, aiming to provide solar power to 5 million households and create 250,000 jobs.

**Public Sector Solarization**: The government has allocated a substantial budget to install large-scale solar systems in public institutions. This initiative aims to reduce governance costs and promote sustainability by transitioning government agencies away from diesel generators.

**World Bank Support**: With a $750 million loan from the World Bank, Nigeria is providing subsidies to developers of solar mini-grids in underserved and unserved areas. This is a massive step toward expanding electricity access to rural communities through private-sector-led renewable energy projects.

These government-backed initiatives are creating a more favorable environment for solar development and are a clear signal of the country's commitment to a cleaner energy future.

## 3. Technological Advancements in Solar Systems

The technology behind solar power is also evolving rapidly, making systems more efficient and accessible than ever before. Key trends include:

**Bifacial Solar Panels**: These panels can generate electricity from both the front and back sides, capturing sunlight that reflects off surfaces below. This technology can increase energy production by up to 30%, making it a highly attractive option for maximizing output from a limited space.

**Advanced Batteries**: The cost and efficiency of energy storage are improving, with a growing preference for lithium-ion batteries. These batteries have a longer lifespan, are more compact, and require less maintenance than older lead-acid options, enhancing the reliability of solar systems.

**Smart Energy Management**: The integration of Artificial Intelligence (AI) and smart systems is on the rise. These technologies can optimize energy production, monitor system performance in real-time, and even predict maintenance needs, ensuring your system runs at peak efficiency.

## 4. A Shift to Off-Grid Solutions

While utility-scale solar projects face challenges due to Nigeria's weak grid infrastructure, the off-grid solar market is booming. The focus is on smaller, decentralized systems for homes, businesses, and communities. This trend is a direct response to the unreliability of the grid and the rising cost of diesel. Off-grid solar solutions are now seen as a primary source of power rather than just a backup.

## 5. Increased Local Manufacturing

There is a growing push to promote local manufacturing and assembly of solar components in Nigeria. This trend is driven by a desire to create jobs, reduce reliance on imports, and make solar systems more affordable. The government is exploring policies, such as import duty exemptions and tax credits, to encourage local content in the solar value chain.

## Looking Ahead

Nigeria's solar energy market is in a period of unprecedented growth. The confluence of economic pressures, supportive government policies, and rapid technological innovation is transforming the country's energy landscape. For homeowners and businesses, the decision to go solar is now more practical and financially sound than ever. As these trends continue to develop, we can expect a brighter, more sustainable future for power generation in Nigeria.`,
    author: "Jumiami Solar Team",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Industry News",
    tags: ["solar trends", "Nigeria", "renewable energy", "2024", "government initiatives", "fuel subsidy", "off-grid", "technology"],
    image: "https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg",
    slug: "solar-energy-trends-nigeria-2024"
  },
  {
    id: 3,
    title: "Understanding Solar Inverter Types: Which One is Right for You?",
    excerpt: "The inverter is the 'brain' of your solar system. Learn about string inverters, microinverters, and hybrid systems to choose the perfect solution for your home.",
    content: `The inverter is the "brain" of your solar system. Its job is to convert the DC (direct current) electricity generated by your solar panels into AC (alternating current) electricity that your home appliances can use. But not all inverters are created equal. Choosing the right one is crucial for your system's performance and long-term efficiency.

Let's break down the main types of solar inverters and help you decide which one best suits your needs.

## 1. String Inverters

This is the most common and traditional type of inverter for residential systems.

**How it works**: Panels are wired together in "strings," and all the panels in a string are connected to a single, central inverter. This inverter is typically installed on a wall near your main electrical panel.

**Pros**:

- **Cost-Effective**: String inverters are generally the most affordable option, which can lower your initial installation costs
- **Simplicity**: With only one unit, it's easier to install and maintain. If there's a problem, a technician doesn't have to climb onto your roof to fix it

**Cons**:

- **"Weakest Link" Problem**: The biggest drawback is that the performance of the entire string is limited by its lowest-performing panel. If one panel is shaded by a tree branch or covered in dust, the output of every other panel in that string will drop to match it

**Best for**: Homes with a simple roof layout that receives consistent, unobstructed sunlight throughout the day

## 2. Microinverters

Microinverters are a more modern and increasingly popular solution.

**How it works**: Instead of one central inverter, a small microinverter is installed directly on or under each individual solar panel. Each panel converts its own DC power to AC power independently.

**Pros**:

- **Maximum Efficiency**: If one panel is shaded, it won't affect the performance of any other panels. Your entire system will continue to generate power at its maximum potential
- **Panel-Level Monitoring**: You can monitor the performance of each individual panel, making it easy to spot and troubleshoot issues
- **Scalability**: It's very easy to add more panels to your system in the future without needing a new, larger central inverter

**Cons**:

- **Higher Cost**: Microinverters are more expensive than string inverters due to the cost of having one for each panel
- **Maintenance**: If a microinverter fails, a technician will need to go onto the roof to replace it

**Best for**: Systems with complex roof layouts, or roofs that experience partial shading from trees, chimneys, or other obstructions

## 3. Hybrid Inverters

A hybrid inverter combines the functions of a traditional inverter and a battery charge controller into a single unit.

**How it works**: A hybrid system is connected to both the national grid and a battery storage system. The hybrid inverter manages the flow of electricity, deciding whether to use power from your panels, the grid, or your batteries.

**Pros**:

- **Backup Power**: This is the most significant advantage. If the grid goes down, your hybrid inverter can seamlessly switch to your battery power, providing backup for your home
- **Energy Independence**: You can store excess solar energy to use at night, reducing your reliance on the grid
- **Versatility**: It offers the best of both worlds: grid connectivity and backup power capability

**Cons**:

- **Higher Upfront Cost**: A hybrid system is more expensive due to the cost of the inverter and the required batteries

**Best for**: Homes and businesses in areas with frequent power outages, or for those who want to be more energy-independent

## Final Thoughts

The right inverter for you depends on your specific needs and budget. If you have a simple, unshaded roof and want the most cost-effective option, a string inverter is a great choice. If you have a complex roof or want to maximize the output of every single panel, microinverters are the way to go. And for ultimate reliability and backup power, a hybrid system is an excellent long-term investment.

No matter your choice, our team at Jumiami Solar can help you design and install the perfect system for your home.`,
    author: "Jumiami Solar Team",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Solar Tips",
    tags: ["solar inverters", "string inverters", "microinverters", "hybrid systems", "battery backup", "system efficiency"],
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
    slug: "understanding-solar-inverter-types"
  },
  {
    id: 4,
    title: "Solar Maintenance Guide: Keeping Your System Running Efficiently",
    excerpt: "Your solar system is an investment designed to provide reliable, clean energy for years. Learn essential maintenance tips to keep your panels and inverter in top condition.",
    content: `Your solar system is an investment designed to provide you with reliable, clean energy for years to come. Just like any other valuable asset, a little maintenance goes a long way. Regular checks and basic upkeep can ensure your system operates at peak efficiency and extends its lifespan.

Here is a simple maintenance guide to keep your solar panels and inverter in top condition.

## 1. Keep Your Panels Clean

Dust, dirt, and bird droppings can accumulate on your solar panels, reducing their ability to absorb sunlight and generate power.

**Cleaning Frequency**: Aim to clean your panels every few months, especially during the dry season when dust is more prevalent. You'll notice a significant drop in power output if they get too dirty.

**How to Clean**:

- Use a soft brush or a non-abrasive cloth
- Use regular water—avoid harsh detergents or high-pressure washers, which can damage the panels
- For hard-to-reach panels, a simple garden hose with a nozzle can do the trick

## 2. Monitor Your System's Performance

Most modern solar systems come with a monitoring app or a display on the inverter. Using this tool is one of the easiest ways to ensure your system is working correctly.

**Daily Check**: Get into the habit of checking your system's output daily. Note any unusual drops in power generation.

**Look for Errors**: Your monitoring system will notify you of any error codes or faults. If you see one, contact a professional to get it checked out.

**Keep Records**: Track your system's performance over time. This helps you notice if there's a gradual decline in efficiency that may signal an underlying issue.

## 3. Check for Physical Damage

A quick visual inspection can help you spot potential problems early.

**Panels**: Look for any cracks, scratches, or discoloration on the glass of the panels. Also, check for any loose wires or connections.

**Inverter**: Your inverter should be kept in a cool, well-ventilated area. Make sure its cooling vents are not blocked by dust or debris. Listen for any unusual sounds coming from the unit.

**Wiring**: Check that all visible cables and connections are secure and free from signs of wear or corrosion.

## 4. Professional Servicing

While you can handle basic maintenance yourself, professional servicing is essential for long-term health and efficiency.

**Annual Inspection**: We recommend a professional check-up at least once a year. A qualified solar technician can inspect electrical connections, verify grounding, and perform firmware updates on your inverter to ensure it's running optimally.

**Warranty Compliance**: Regular maintenance is often a requirement to keep your system's warranty valid.

By following these simple steps, you can protect your investment and ensure your solar system provides a consistent supply of clean energy for your home for decades.`,
    author: "Jumiami Solar Team",
    date: "2024-01-01",
    readTime: "5 min read",
    category: "Maintenance",
    tags: ["solar maintenance", "panel cleaning", "system monitoring", "efficiency", "warranty", "professional servicing"],
    image: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
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