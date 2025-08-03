import { useState, useEffect } from 'react';
import { useMicroInteractions } from '@/hooks/use-micro-interactions';
import { TrendingUp, Users, Award, Clock, Star, CheckCircle } from 'lucide-react';

// Live Counter Component
export function LiveCounter({ 
  endValue, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = ''
}: {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const { useScrollAnimation } = useMicroInteractions();
  const isVisible = useScrollAnimation(0.1);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * endValue);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, isVisible]);

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// Animated Stats Section
export function AnimatedStats() {
  const { useFloatingAnimation } = useMicroInteractions();
  const floatingOffset = useFloatingAnimation(5, 3000);

  const stats = [
    { icon: Users, value: 500, label: 'Happy Customers', suffix: '+' },
    { icon: Award, value: 5, label: 'Years Experience', suffix: '+' },
    { icon: TrendingUp, value: 95, label: 'Success Rate', suffix: '%' },
    { icon: Star, value: 4.9, label: 'Customer Rating', suffix: '/5' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ transform: `translateY(${floatingOffset}px)` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                <LiveCounter 
                  endValue={stat.value} 
                  duration={2000 + index * 500}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Real-time Updates Section
export function RealTimeUpdates() {
  const [updates, setUpdates] = useState([
    { id: 1, text: "New solar installation completed in Lagos", time: "2 minutes ago" },
    { id: 2, text: "Customer saved ₦75K on monthly electricity bill", time: "15 minutes ago" },
    { id: 3, text: "Solar panel maintenance scheduled", time: "1 hour ago" },
    { id: 4, text: "New inverter system installed", time: "2 hours ago" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdates(prev => {
        const newUpdate = {
          id: Date.now(),
          text: `Solar consultation completed - ${Math.floor(Math.random() * 50) + 1} customers served today`,
          time: "Just now"
        };
        return [newUpdate, ...prev.slice(0, 3)];
      });
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="h-5 w-5 mr-2 text-orange-500" />
          Live Updates
        </h3>
        <div className="space-y-3">
          {updates.map((update, index) => (
            <div
              key={update.id}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 flex-1">{update.text}</span>
              <span className="text-sm text-gray-500">{update.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Interactive Progress Bar
export function InteractiveProgress({ 
  percentage, 
  label, 
  color = "orange" 
}: {
  percentage: number;
  label: string;
  color?: "orange" | "green" | "blue";
}) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const { useScrollAnimation } = useMicroInteractions();
  const isVisible = useScrollAnimation(0.1);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);

    return () => clearTimeout(timer);
  }, [percentage, isVisible]);

  const colorClasses = {
    orange: "bg-gradient-to-r from-orange-500 to-yellow-500",
    green: "bg-gradient-to-r from-green-500 to-emerald-500",
    blue: "bg-gradient-to-r from-blue-500 to-cyan-500"
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-900">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-2000 ease-out`}
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  );
}

// Animated Feature List
export function AnimatedFeatureList({ features }: { features: string[] }) {
  const { useScrollAnimation } = useMicroInteractions();
  const isVisible = useScrollAnimation(0.1);

  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 transform transition-all duration-500 ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-4 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
} 