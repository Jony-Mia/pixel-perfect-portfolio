import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'WordPress', percentage: 95 },
  { name: 'ReactJS', percentage: 88 },
  { name: 'HTML', percentage: 98 },
  { name: 'CSS', percentage: 95 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 92 },
  { name: 'PHP', percentage: 80 },
  { name: 'MySQL', percentage: 78 },
  { name: 'Elementor', percentage: 96 },
  { name: 'WooCommerce', percentage: 92 },
  { name: 'CartFlows', percentage: 88 },
];

const wordpressExpertise = [
  'Custom Theme Development',
  'Plugin Customization',
  'Elementor Pro Expert',
  'WooCommerce Setup & Customization',
  'CartFlows Funnel Building',
  'Speed Optimization',
  'Security Hardening',
  'SEO Optimization',
  'Responsive Design',
  'Migration & Backup',
];

const reactExpertise = [
  'React Hooks & Context',
  'React Router DOM',
  'State Management (Redux/Zustand)',
  'TypeScript Integration',
  'Tailwind CSS Styling',
  'API Integration',
  'Component Architecture',
  'Performance Optimization',
  'Testing (Jest/RTL)',
  'Modern Build Tools',
];

const ecommerceExpertise = [
  'WooCommerce Store Setup',
  'Payment Gateway Integration',
  'Product Management',
  'Inventory Management',
  'Shipping Configuration',
  'Sales Funnel Creation',
  'CartFlows Optimization',
  'Conversion Rate Optimization',
  'Order Management',
  'Customer Analytics',
];

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percentage);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const ExpertiseCard = ({ title, items, color }: { title: string; items: string[]; color: string }) => (
  <div className="glass-card p-6 card-hover">
    <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-muted-foreground">
          <span className={`w-2 h-2 rounded-full ${color === 'text-gradient' ? 'bg-primary' : color === 'text-accent' ? 'bg-accent' : 'bg-neon-purple'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 skills-content">
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I've mastered throughout my career
          </p>
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 mb-20 skills-content">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 skills-content">
          <ExpertiseCard
            title="WordPress Expertise"
            items={wordpressExpertise}
            color="text-gradient"
          />
          <ExpertiseCard
            title="React Expertise"
            items={reactExpertise}
            color="text-accent"
          />
          <ExpertiseCard
            title="E-commerce Expertise"
            items={ecommerceExpertise}
            color="text-neon-purple"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
