import { useEffect, useRef, useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  name: string;
  size?: number;
  color?: string;
}

// Color mapping for different technologies
const colorMap: Record<string, { start: string; end: string }> = {
  'WordPress': { start: '#21759B', end: '#0073AA' },
  'ReactJS': { start: '#61DAFB', end: '#00D8FF' },
  'HTML': { start: '#E34F26', end: '#F16529' },
  'CSS': { start: '#264DE4', end: '#2965F1' },
  'JavaScript': { start: '#F7DF1E', end: '#FFD700' },
  'TypeScript': { start: '#3178C6', end: '#007ACC' },
  'Tailwind CSS': { start: '#06B6D4', end: '#38BDF8' },
  'PHP': { start: '#777BB4', end: '#8993BE' },
  'MySQL': { start: '#4479A1', end: '#00758F' },
  'Elementor': { start: '#92003B', end: '#FF0066' },
  'WooCommerce': { start: '#96588A', end: '#7F54B3' },
  'CartFlows': { start: '#F97316', end: '#FB923C' },
};

const getGradientColors = (name: string): { start: string; end: string } => {
  return colorMap[name] || { start: 'hsl(200, 100%, 50%)', end: 'hsl(145, 80%, 45%)' };
};

const CircularProgress = ({ percentage, name, size = 120 }: CircularProgressProps) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (currentPercentage / 100) * circumference;
  const colors = getGradientColors(name);
  const gradientId = `gradient-${name.replace(/\s+/g, '-')}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the percentage
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCurrentPercentage(Math.round(eased * percentage));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={circleRef} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-300"
            style={{ filter: `drop-shadow(0 0 6px ${colors.start})` }}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.start} />
              <stop offset="100%" stopColor={colors.end} />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-2xl font-bold"
            style={{ color: colors.start }}
          >
            {currentPercentage}%
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-center">{name}</p>
    </div>
  );
};

export default CircularProgress;
