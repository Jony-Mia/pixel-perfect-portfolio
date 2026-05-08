import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowUpRight } from 'lucide-react';

import Globe from '@/assets/wordpress.png';
import ShoppingCart from '@/assets/shoppingcart.png';
import Rocket from '@/assets/landing-page.png';
import Palette from '@/assets/ui.png';
import React from '@/assets/react.png';
import Settings from '@/assets/repair.png';
import Search from '@/assets/seo.png';
import Smartphone from '@/assets/phone.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { Icon: Globe, title: 'WordPress Development', description: 'Custom WordPress websites with premium themes, plugins, and complete functionality tailored to your needs.', accent: 'hsl(var(--primary))' },
  { Icon: ShoppingCart, title: 'E-commerce Solutions', description: 'Complete WooCommerce stores with payment gateways, inventory management, and sales funnels using CartFlows.', accent: 'hsl(var(--accent))' },
  { Icon: Rocket, title: 'Landing Page Design', description: 'High-converting landing pages designed to capture leads and drive sales with optimized user experience.', accent: 'hsl(280 70% 55%)' },
  { Icon: Palette, title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces designed with Elementor Pro and modern design principles.', accent: 'hsl(var(--primary))' },
  { Icon: React, title: 'React Development', description: 'Modern React applications with TypeScript, state management, and responsive Tailwind CSS styling.', accent: 'hsl(var(--accent))' },
  { Icon: Settings, title: 'Website Maintenance', description: 'Ongoing support, updates, backups, security monitoring, and performance optimization services.', accent: 'hsl(280 70% 55%)' },
  { Icon: Search, title: 'SEO Optimization', description: 'On-page SEO, speed optimization, and technical SEO to improve your search engine rankings.', accent: 'hsl(var(--primary))' },
  { Icon: Smartphone, title: 'Responsive Design', description: 'Mobile-first, fully responsive websites that look perfect on all devices and screen sizes.', accent: 'hsl(var(--accent))' },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
           style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-5">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">What I Offer</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Professional web development services to bring your vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, description, accent }, i) => (
            <div
              key={title}
              className="service-card group relative rounded-2xl p-6 glass-card overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)] card-shimmer card-glow-border"
              style={{ ['--accent' as any]: accent }}
            >
              {/* Hover glow */}
              <span
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 -z-10"
                style={{ background: accent }}
              />

              {/* Number badge */}
              <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/50 group-hover:text-primary transition-colors">
                0{i + 1}
              </span>

              {/* Icon tile */}
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${accent}25, ${accent}10)`,
                  border: `1px solid ${accent}40`,
                  boxShadow: `0 8px 24px ${accent}20`,
                }}
              >
                <img src={Icon} alt={title} className="w-9 h-9 object-contain" />
              </div>

              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {description}
              </p>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
