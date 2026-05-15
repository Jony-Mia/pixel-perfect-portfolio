import { useEffect, useRef, useState } from 'react';
import {
  SiWordpress, SiReact, SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiTailwindcss, SiPhp, SiMysql, SiElementor, SiWoocommerce,
  SiMongodb, SiExpress, SiNodedotjs,
} from 'react-icons/si';
import { Zap } from 'lucide-react';

interface CircularProgressProps {
  percentage: number;
  name: string;
  size?: number;
}

const colorMap: Record<string, { start: string; end: string; Icon: any }> = {
  'WordPress':    { start: '#21759B', end: '#0073AA', Icon: SiWordpress },
  'ReactJS':      { start: '#61DAFB', end: '#00D8FF', Icon: SiReact },
  'HTML':         { start: '#E34F26', end: '#F16529', Icon: SiHtml5 },
  'CSS':          { start: '#264DE4', end: '#2965F1', Icon: SiCss },
  'JavaScript':   { start: '#f6be00', end: '#f6be00', Icon: SiJavascript },
  'TypeScript':   { start: '#3178C6', end: '#007ACC', Icon: SiTypescript },
  'Tailwind CSS': { start: '#06B6D4', end: '#38BDF8', Icon: SiTailwindcss },
  'PHP':          { start: '#777BB4', end: '#8993BE', Icon: SiPhp },
  'MySQL':        { start: '#4479A1', end: '#00758F', Icon: SiMysql },
  'Elementor':    { start: '#92003B', end: '#FF0066', Icon: SiElementor },
  'WooCommerce':  { start: '#96588A', end: '#7F54B3', Icon: SiWoocommerce },
  'CartFlows':    { start: '#F97316', end: '#FB923C', Icon: Zap },
  'MongoDB':      { start: '#47A248', end: '#4DB33D', Icon: SiMongodb },
  'Express.js':   { start: '#68A063', end: '#000000', Icon: SiExpress },
  'Node.js':      { start: '#8CC84B', end: '#3C873A', Icon: SiNodedotjs },
};

const getInfo = (name: string) =>
  colorMap[name] || { start: 'hsl(200, 100%, 50%)', end: 'hsl(145, 80%, 45%)', Icon: Zap };

const CircularProgress = ({ percentage, name, size = 120 }: CircularProgressProps) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (currentPercentage / 100) * circumference;
  const { start, end, Icon } = getInfo(name);
  const gradientId = `gradient-${name.replace(/\s+/g, '-').replace(/\./g, '')}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1500;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrentPercentage(Math.round(eased * percentage));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (circleRef.current) observer.observe(circleRef.current);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={circleRef} className="flex flex-col items-center group">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="-rotate-90 transform" width={size} height={size}>
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth={strokeWidth} />
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
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={start} />
              <stop offset="100%" stopColor={end} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:scale-110">
          <Icon size={26} style={{ color: start }} />
          <span className="text-sm font-bold" style={{ color: start }}>
            {currentPercentage}%
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-center">{name}</p>
    </div>
  );
};

export default CircularProgress;
