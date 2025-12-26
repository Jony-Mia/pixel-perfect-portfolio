import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CircularProgress from './CircularProgress';
import { useLanguage } from '@/contexts/LanguageContext';

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

const ExpertiseCard = ({ title, items, color }: { title: string; items: string[]; color: string }) => (
  <div className="glass-card p-6 card-hover">
    <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-muted-foreground">
          <span className={`w-2 h-2 rounded-full ${color === 'text-gradient' ? 'bg-primary' : color === 'text-accent' ? 'bg-accent' : 'bg-neon-purple'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const wordpressExpertise = [
    t('wp.theme'),
    t('wp.plugin'),
    t('wp.elementor'),
    t('wp.woo'),
    t('wp.cartflows'),
    t('wp.speed'),
    t('wp.security'),
    t('wp.seo'),
    t('wp.responsive'),
    t('wp.migration'),
  ];

  const reactExpertise = [
    t('react.hooks'),
    t('react.router'),
    t('react.state'),
    t('react.ts'),
    t('react.tailwind'),
    t('react.api'),
    t('react.components'),
    t('react.performance'),
    t('react.testing'),
    t('react.build'),
  ];

  const ecommerceExpertise = [
    t('ecom.store'),
    t('ecom.payment'),
    t('ecom.product'),
    t('ecom.inventory'),
    t('ecom.shipping'),
    t('ecom.funnel'),
    t('ecom.cartflows'),
    t('ecom.conversion'),
    t('ecom.order'),
    t('ecom.analytics'),
  ];

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
            {t('skills.title')} <span className="text-gradient">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Circular Progress Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20 skills-content">
          {skills.map((skill) => (
            <CircularProgress key={skill.name} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 skills-content">
          <ExpertiseCard
            title={t('skills.wordpress')}
            items={wordpressExpertise}
            color="text-gradient"
          />
          <ExpertiseCard
            title={t('skills.react')}
            items={reactExpertise}
            color="text-accent"
          />
          <ExpertiseCard
            title={t('skills.ecommerce')}
            items={ecommerceExpertise}
            color="text-neon-purple"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
