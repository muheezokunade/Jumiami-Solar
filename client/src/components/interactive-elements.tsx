import { useState, useEffect, useRef } from 'react';
import { useMicroInteractions } from '@/hooks/use-micro-interactions';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  Star, 
  CheckCircle, 
  Zap, 
  Battery, 
  Sun, 
  DollarSign,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Interactive Solar Calculator
export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(50000);
  const [roofSpace, setRoofSpace] = useState(100);
  const [savings, setSavings] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate savings whenever inputs change
  useEffect(() => {
    setIsCalculating(true);
    
    const timer = setTimeout(() => {
      // Calculate monthly savings (85% of current bill)
      const calculatedSavings = Math.floor(monthlyBill * 0.85);
      
      // Calculate payback period based on system cost and savings
      // Assuming average system cost of ₦5,000,000
      const systemCost = 5000000;
      const monthlySavings = calculatedSavings;
      const calculatedPayback = monthlySavings > 0 ? Math.ceil(systemCost / monthlySavings) : 0;
      
      setSavings(calculatedSavings);
      setPaybackPeriod(calculatedPayback);
      setIsCalculating(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [monthlyBill, roofSpace]);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg border border-orange-200">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Solar Savings Calculator</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Electricity Bill (₦)
          </label>
          <input
            type="range"
            min="10000"
            max="200000"
            step="5000"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>₦10,000</span>
            <span className="font-semibold">₦{monthlyBill.toLocaleString()}</span>
            <span>₦200,000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Roof Space (m²)
          </label>
          <input
            type="range"
            min="20"
            max="200"
            step="10"
            value={roofSpace}
            onChange={(e) => setRoofSpace(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>20m²</span>
            <span className="font-semibold">{roofSpace}m²</span>
            <span>200m²</span>
          </div>
        </div>

        {isCalculating ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Calculating your savings...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <DollarSign className="h-6 w-6 text-green-500 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Monthly Savings</h4>
              </div>
              <p className="text-3xl font-bold text-green-600">₦{savings.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-1">85% reduction in electricity costs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-blue-500 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
              </div>
              <p className="text-3xl font-bold text-blue-600">{paybackPeriod} months</p>
              <p className="text-sm text-gray-600 mt-1">Return on investment timeline</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Interactive Solar System Simulator
export function SolarSystemSimulator() {
  const [isActive, setIsActive] = useState(true); // Start active by default
  const [currentPower, setCurrentPower] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState(12);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('Solar System Simulator: Component mounted, isActive:', isActive);
    
    if (isActive) {
      console.log('Solar System Simulator: Starting simulation...');
      intervalRef.current = setInterval(() => {
        setTimeOfDay(prev => {
          const newTime = (prev + 1) % 24;
          
          // Simulate solar power based on new time
          const solarPower = Math.max(0, Math.sin((newTime - 6) * Math.PI / 12) * 100);
          const newPower = Math.floor(solarPower);
          setCurrentPower(newPower);
          
          // Simulate battery charging/discharging
          if (solarPower > 20) {
            setBatteryLevel(prev => Math.min(100, prev + 2));
          } else {
            setBatteryLevel(prev => Math.max(0, prev - 1));
          }
          
          console.log('Solar System Simulator: Time:', newTime, 'Power:', newPower);
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]); // Remove timeOfDay from dependencies

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">Solar System Simulator</h3>
        <Button
          onClick={() => setIsActive(!isActive)}
          variant={isActive ? "destructive" : "default"}
          size="sm"
        >
          {isActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
          {isActive ? 'Pause' : 'Start'} Simulation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Solar Panel */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Sun className={`h-12 w-12 mx-auto mb-4 ${isActive ? 'animate-pulse text-yellow-500' : 'text-gray-400'}`} />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Solar Panel</h4>
          <div className="text-3xl font-bold text-orange-600">{currentPower}%</div>
          <p className="text-sm text-gray-600">Power Output</p>
        </div>

        {/* Battery */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Battery className={`h-12 w-12 mx-auto mb-4 ${batteryLevel > 20 ? 'text-green-500' : 'text-red-500'}`} />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Battery</h4>
          <div className="text-3xl font-bold text-green-600">{batteryLevel}%</div>
          <p className="text-sm text-gray-600">Charge Level</p>
        </div>

        {/* Time */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Clock className="h-12 w-12 mx-auto mb-4 text-blue-500" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Time</h4>
          <div className="text-3xl font-bold text-blue-600">
            {timeOfDay.toString().padStart(2, '0')}:00
          </div>
          <p className="text-sm text-gray-600">Current Time</p>
        </div>
      </div>

      {/* Power Graph */}
      <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">24-Hour Power Generation</h4>
        <div className="h-32 bg-gray-100 rounded-lg p-4 relative">
          {Array.from({ length: 24 }).map((_, hour) => {
            const power = Math.max(0, Math.sin((hour - 6) * Math.PI / 12) * 100);
            const height = (power / 100) * 100;
            const isCurrentHour = hour === timeOfDay;
            
            return (
              <div
                key={hour}
                className={`absolute bottom-4 w-3 rounded-t ${
                  isCurrentHour ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                style={{
                  left: `${(hour / 24) * 100}%`,
                  height: `${height}%`,
                  transform: 'translateX(-50%)'
                }}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
}

// Interactive Testimonial Carousel
export function InteractiveTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { useScrollAnimation } = useMicroInteractions();
  const isVisible = useScrollAnimation(0.1);

  const testimonials = [
    {
      name: "Adebayo Johnson",
      title: "CEO, TechCorp Nigeria",
      content: "Jumiami Solar transformed our office energy costs. We're saving ₦150K monthly!",
      rating: 5,
      savings: "₦150,000",
      location: "Lagos"
    },
    {
      name: "Fatima Hassan",
      title: "Homeowner",
      content: "Best investment we've made. Our electricity bill went from ₦80K to ₦5K monthly.",
      rating: 5,
      savings: "₦75,000",
      location: "Ilorin"
    },
    {
      name: "Emeka Okafor",
      title: "Restaurant Owner",
      content: "Reliable power for our restaurant. No more generator noise or fuel costs!",
      rating: 5,
      savings: "₦200,000",
      location: "Abeokuta"
    }
  ];

  useEffect(() => {
    if (!isVisible || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, isAutoPlaying, testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">Customer Success Stories</h3>
        <Button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          variant="outline"
          size="sm"
        >
          {isAutoPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
          {isAutoPlaying ? 'Pause' : 'Play'}
        </Button>
      </div>

      <div className="relative">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl text-gray-700 mb-6 italic">
            "{currentTestimonial.content}"
          </blockquote>
          
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-900">{currentTestimonial.name}</p>
            <p className="text-gray-600">{currentTestimonial.title}</p>
            <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-sm text-green-600 font-medium">Monthly Savings</p>
            <p className="text-2xl font-bold text-green-700">{currentTestimonial.savings}</p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Live Energy Monitor
export function LiveEnergyMonitor() {
  const [currentUsage, setCurrentUsage] = useState(0);
  const [solarGeneration, setSolarGeneration] = useState(0);
  const [gridUsage, setGridUsage] = useState(0);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    console.log('Live Energy Monitor: Component mounted, starting monitoring...');
    
    // Start immediately without scroll dependency
    const interval = setInterval(() => {
      // Simulate real-time energy data
      const newSolarGeneration = Math.floor(Math.random() * 100) + 50;
      const newCurrentUsage = Math.floor(Math.random() * 80) + 30;
      const newGridUsage = Math.max(0, newCurrentUsage - newSolarGeneration);

      setSolarGeneration(newSolarGeneration);
      setCurrentUsage(newCurrentUsage);
      setGridUsage(newGridUsage);
      setIsConnected(Math.random() > 0.1); // 90% uptime
      
      console.log('Live Energy Monitor: Solar:', newSolarGeneration, 'Usage:', newCurrentUsage, 'Grid:', newGridUsage);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Remove isVisible dependency

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">Live Energy Monitor</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-sm text-gray-600">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Current Usage</h4>
          <div className="text-3xl font-bold text-blue-600">{currentUsage} kW</div>
          <p className="text-sm text-gray-600">Real-time consumption</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Sun className="h-12 w-12 mx-auto mb-4 text-orange-500" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Solar Generation</h4>
          <div className="text-3xl font-bold text-green-600">{solarGeneration} kW</div>
          <p className="text-sm text-gray-600">Clean energy produced</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-gray-500" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Grid Usage</h4>
          <div className="text-3xl font-bold text-red-600">{gridUsage} kW</div>
          <p className="text-sm text-gray-600">From utility grid</p>
        </div>
      </div>

      {/* Energy Flow Diagram */}
      <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Energy Flow</h4>
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <Sun className="h-8 w-8 mx-auto mb-2 text-orange-500" />
            <p className="text-sm text-gray-600">Solar Panels</p>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="text-center">
            <Battery className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <p className="text-sm text-gray-600">Battery</p>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="text-center">
            <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-sm text-gray-600">Home</p>
          </div>
        </div>
      </div>
    </div>
  );
} 