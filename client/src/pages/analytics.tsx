import AnalyticsDashboard, { SearchConsoleMetrics } from "@/components/analytics-dashboard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Search, 
  TrendingUp, 
  Users, 
  Globe,
  Target,
  Calendar,
  Download,
  Share2,
  Mail,
  Eye
} from "lucide-react";

export default function Analytics() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Analytics & Performance
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Track website performance, user behavior, and marketing effectiveness
          </p>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="search" className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Search Console</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center space-x-2">
                <Share2 className="h-4 w-4" />
                <span>Social Media</span>
              </TabsTrigger>
              <TabsTrigger value="email" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Marketing</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <AnalyticsDashboard />
            </TabsContent>

            <TabsContent value="search" className="space-y-8">
              <SearchConsoleMetrics />
            </TabsContent>

            <TabsContent value="social" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="floating-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[hsl(0,0%,10%)]">Social Media Performance</h3>
                      <Globe className="h-6 w-6 text-[hsl(19,100%,58%)]" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Instagram Followers</span>
                        <span className="font-semibold">2,847</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Facebook Page Likes</span>
                        <span className="font-semibold">1,234</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Twitter Followers</span>
                        <span className="font-semibold">892</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">LinkedIn Followers</span>
                        <span className="font-semibold">456</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[hsl(0,0%,10%)]">Engagement Metrics</h3>
                      <TrendingUp className="h-6 w-6 text-[hsl(19,100%,58%)]" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg. Engagement Rate</span>
                        <span className="font-semibold text-green-600">4.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Shares</span>
                        <span className="font-semibold">1,567</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Comments</span>
                        <span className="font-semibold">892</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Click-through Rate</span>
                        <span className="font-semibold text-green-600">3.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="floating-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[hsl(0,0%,10%)]">Email Campaign Performance</h3>
                      <Mail className="h-6 w-6 text-[hsl(19,100%,58%)]" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Subscribers</span>
                        <span className="font-semibold">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg. Open Rate</span>
                        <span className="font-semibold text-green-600">68.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg. Click Rate</span>
                        <span className="font-semibold text-green-600">12.3%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Unsubscribe Rate</span>
                        <span className="font-semibold text-red-600">0.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[hsl(0,0%,10%)]">Recent Campaigns</h3>
                      <Calendar className="h-6 w-6 text-[hsl(19,100%,58%)]" />
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">Solar Energy Savings Guide</span>
                          <span className="text-xs text-green-600">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Open Rate: 72% | Click Rate: 15%
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">Maintenance Tips & Tricks</span>
                          <span className="text-xs text-blue-600">Scheduled</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Scheduled for: Tomorrow 10:00 AM
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">Latest Solar Technology Updates</span>
                          <span className="text-xs text-gray-600">Draft</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Ready to send to 1,247 subscribers
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
              Key <span className="text-[hsl(19,100%,58%)]">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven insights to optimize your solar energy business performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="floating-card">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-[hsl(19,100%,58%)]" />
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Conversion Optimization</h3>
                <p className="text-gray-600">
                  Our analytics show that visitors who view testimonials are 3x more likely to contact us. 
                  Consider featuring customer success stories more prominently.
                </p>
              </CardContent>
            </Card>
            
            <Card className="floating-card">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-[hsl(19,100%,58%)]" />
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">User Behavior</h3>
                <p className="text-gray-600">
                  Mobile users spend 40% more time on our services page. 
                  Ensure mobile optimization for better engagement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="floating-card">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-[hsl(19,100%,58%)]" />
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Organic search traffic increased by 25% this month. 
                  Focus on SEO content to maintain this growth trajectory.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Action Items */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6 font-serif">
            Take <span className="text-[hsl(19,100%,58%)]">Action</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Use these insights to improve your website performance and customer engagement
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="floating-card">
              <CardContent className="p-8">
                <Download className="h-12 w-12 mx-auto mb-4 text-[hsl(19,100%,58%)]" />
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Export Reports</h3>
                <p className="text-gray-600 mb-6">
                  Download detailed analytics reports for stakeholders and presentations
                </p>
                <button className="bg-[hsl(19,100%,58%)] text-white px-6 py-3 rounded-lg hover:bg-[hsl(19,100%,48%)] transition-colors">
                  Download Full Report
                </button>
              </CardContent>
            </Card>
            
            <Card className="floating-card">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 mx-auto mb-4 text-[hsl(19,100%,58%)]" />
                <h3 className="text-xl font-bold text-[hsl(0,0%,10%)] mb-4">Monitor Real-time</h3>
                <p className="text-gray-600 mb-6">
                  Set up alerts and notifications for important performance metrics
                </p>
                <button className="bg-[hsl(19,100%,58%)] text-white px-6 py-3 rounded-lg hover:bg-[hsl(19,100%,48%)] transition-colors">
                  Set Up Alerts
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 