import { useState, useEffect } from 'react';
import { useMicroInteractions } from '@/hooks/use-micro-interactions';
import { CheckCircle } from 'lucide-react';

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