import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Rocket, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.to('.cta-orb', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="cta-content relative overflow-hidden rounded-[2.5rem] glass-card p-10 md:p-16 text-center glow-ring">
          {/* Mesh background */}
          <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />

          {/* Floating orbs */}
          <div className="cta-orb absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-40"
               style={{ background: 'var(--gradient-glow)' }} />
          <div className="cta-orb absolute -bottom-24 -right-16 w-80 h-80 rounded-full blur-3xl opacity-30"
               style={{ background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)' }} />
          <div className="cta-orb absolute top-1/3 right-10 w-40 h-40 rounded-full blur-2xl opacity-30"
               style={{ background: 'radial-gradient(circle, hsl(280 70% 60%), transparent 70%)' }} />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                Available for Projects
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="text-gradient">Extraordinary</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Ready to bring your vision to life? Whether it's a website, e-commerce store,
              or custom web application, let's create something that stands out.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary group inline-flex items-center gap-2"
              >
                <Rocket size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#portfolio')}
                className="btn-outline inline-flex items-center gap-2"
              >
                <Zap size={18} />
                View Work
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-8 border-t border-border/50">
              {[
                { num: '50+', label: 'Projects' },
                { num: '3+', label: 'Years' },
                { num: '100%', label: 'Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{s.num}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
