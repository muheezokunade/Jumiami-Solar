import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Globe,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Calendar,
  Download
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  conversions: number;
  conversionRate: number;
}

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    conversions: 0,
    conversionRate: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    // Simulate loading analytics data
    const loadAnalyticsData = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock analytics data
      setAnalyticsData({
        pageViews: 15420,
        uniqueVisitors: 8234,
        bounceRate: 42.3,
        avgSessionDuration: 185,
        topPages: [
          { page: '/', views: 5234 },
          { page: '/services', views: 3120 },
          { page: '/products', views: 2890 },
          { page: '/contact', views: 2156 },
          { page: '/testimonials', views: 2020 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45.2 },
          { source: 'Direct', percentage: 28.7 },
          { source: 'Social Media', percentage: 15.3 },
          { source: 'Referral', percentage: 10.8 }
        ],
        conversions: 234,
        conversionRate: 2.8
      });
      
      setIsLoading(false);
    };

    loadAnalyticsData();
  }, [timeRange]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[hsl(0,0%,10%)]">Analytics Dashboard</h2>
          <div className="flex space-x-2">
            {['7d', '30d', '90d'].map((range) => (
              <Button key={range} variant="outline" size="sm" disabled>
                {range}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[hsl(0,0%,10%)]">Analytics Dashboard</h2>
          <p className="text-gray-600">Website performance metrics and insights</p>
        </div>
        <div className="flex space-x-2">
          {['7d', '30d', '90d'].map((range) => (
            <Button 
              key={range} 
              variant={timeRange === range ? "default" : "outline"} 
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {formatNumber(analyticsData.pageViews)}
                </p>
              </div>
              <Eye className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+12.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {formatNumber(analyticsData.uniqueVisitors)}
                </p>
              </div>
              <Users className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+8.3%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {analyticsData.bounceRate}%
                </p>
              </div>
              <MousePointer className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-sm text-red-600">+2.1%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Session</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {formatDuration(analyticsData.avgSessionDuration)}
                </p>
              </div>
              <Clock className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+15.2%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Metrics */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="floating-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-[hsl(19,100%,58%)]" />
              Conversion Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-[hsl(19,100%,58%)]">
                  {analyticsData.conversions}
                </p>
                <p className="text-sm text-gray-600">Total Conversions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[hsl(19,100%,58%)]">
                  {analyticsData.conversionRate}%
                </p>
                <p className="text-sm text-gray-600">Conversion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="floating-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-[hsl(19,100%,58%)]" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analyticsData.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[hsl(19,100%,58%)] h-2 rounded-full" 
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {source.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card className="floating-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-[hsl(19,100%,58%)]" />
            Top Pages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500 w-6">#{index + 1}</span>
                  <span className="font-medium">{page.page}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{formatNumber(page.views)} views</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[hsl(19,100%,58%)] h-2 rounded-full" 
                      style={{ width: `${(page.views / analyticsData.topPages[0].views) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export and Actions */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleString()}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button size="sm">
            <Activity className="h-4 w-4 mr-2" />
            View Full Report
          </Button>
        </div>
      </div>
    </div>
  );
}

// Google Search Console Component
export function SearchConsoleMetrics() {
  const [searchData, setSearchData] = useState({
    totalClicks: 0,
    totalImpressions: 0,
    averageCTR: 0,
    averagePosition: 0,
    topQueries: []
  });

  useEffect(() => {
    // Mock search console data
    setSearchData({
      totalClicks: 3420,
      totalImpressions: 156000,
      averageCTR: 2.19,
      averagePosition: 8.5,
      topQueries: [
        { query: "solar panels lagos", clicks: 234, impressions: 8900, position: 3.2 },
        { query: "solar installation nigeria", clicks: 189, impressions: 7200, position: 4.1 },
        { query: "solar energy company", clicks: 156, impressions: 6100, position: 5.8 },
        { query: "solar inverter installation", clicks: 134, impressions: 5400, position: 6.2 },
        { query: "solar maintenance lagos", clicks: 98, impressions: 3800, position: 7.1 }
      ]
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-[hsl(0,0%,10%)]">Search Performance</h3>
          <p className="text-gray-600">Google Search Console metrics</p>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Last 28 Days
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clicks</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {new Intl.NumberFormat().format(searchData.totalClicks)}
                </p>
              </div>
              <MousePointer className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
          </CardContent>
        </Card>

        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Impressions</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {new Intl.NumberFormat().format(searchData.totalImpressions)}
                </p>
              </div>
              <Eye className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
          </CardContent>
        </Card>

        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">CTR</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {searchData.averageCTR}%
                </p>
              </div>
              <Target className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
          </CardContent>
        </Card>

        <Card className="floating-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Position</p>
                <p className="text-2xl font-bold text-[hsl(0,0%,10%)]">
                  {searchData.averagePosition}
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-[hsl(19,100%,58%)]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="floating-card">
        <CardHeader>
          <CardTitle>Top Search Queries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {searchData.topQueries.map((query, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500 w-6">#{index + 1}</span>
                  <span className="font-medium">{query.query}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-600">{query.clicks} clicks</span>
                  <span className="text-gray-600">{query.impressions} impressions</span>
                  <span className="text-gray-600">Pos {query.position}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 