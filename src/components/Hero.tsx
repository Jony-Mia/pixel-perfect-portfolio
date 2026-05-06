import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/profile.png';

const techOrbits = [
  { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/128/732/732212.png', className: 'top-0 left-1/2 -translate-x-1/2 -translate-y-2', delay: '0s' },
  { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/128/732/732190.png', className: 'top-10 right-2 md:right-0', delay: '0.5s' },
  { name: 'JS', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png', className: 'top-1/2 -right-2 md:-right-4 -translate-y-1/2', delay: '1s' },
  { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png', className: 'bottom-10 right-2 md:right-2', delay: '1.5s' },
  { name: 'Tailwind', icon: 'https://cdn-icons-png.flaticon.com/128/15484/15484303.png', className: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-2', delay: '2s' },
  { name: 'Node', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png', className: 'bottom-10 left-2 md:left-2', delay: '2.5s' },
  { name: 'TypeScript', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png', className: 'top-1/2 -left-2 md:-left-4 -translate-y-1/2', delay: '3s' },
  { name: 'Next', icon: 'https://cdn-icons-png.flaticon.com/128/15466/15466163.png', className: 'top-10 left-2 md:left-0', delay: '3.5s' },
];

const socialLinks = [
  { Icon: Github, href: 'https://github.com', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/jony-mia-243ab4334/', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://x.com/JonyMia220812', label: 'Twitter' },
  { Icon: Instagram, href: 'https://www.instagram.com/jonymia321/', label: 'Instagram' },
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' });
      gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div ref={textRef} className="order-2 lg:order-1">
            <p className="text-2xl md:text-3xl text-neon-purple font-medium mb-3">
              {t('hero.greeting')}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-foreground">{t('hero.name').split(' ')[0]} </span>
              <span className="text-gradient">{t('hero.name').split(' ').slice(1).join(' ') || ''}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/90 font-semibold mb-5">
              {t('hero.title')}
            </h2>

            {/* Role chips */}
            <div className="inline-flex flex-wrap items-center gap-3 px-5 py-2.5 mb-6 rounded-full border border-primary/30 bg-card/40 backdrop-blur-md text-sm">
              <span className="text-foreground/90">React.js Developer</span>
              <span className="text-primary">|</span>
              <span className="text-foreground/90">Next.js Expert</span>
              <span className="text-primary">|</span>
              <span className="text-foreground/90">UI/UX Enthusiast</span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                className="btn-primary inline-flex items-center gap-2"
              >
                Download CV <Download size={18} />
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-outline inline-flex items-center gap-2"
              >
                {t('hero.letsTalk')} <ArrowRight size={18} />
              </button>
            </div>

            {/* Social Icons - circular outlined */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-border/70 bg-card/30 backdrop-blur text-muted-foreground hover:text-primary hover:border-primary/70 hover:shadow-[0_0_20px_hsl(var(--primary)/0.45)] transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image with orbiting tech */}
          <div ref={imageRef} className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px]">
              {/* Outer rotating rings */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-neon-purple/30 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />

              {/* Glow halo */}
              <div className="absolute inset-16 rounded-full bg-gradient-glow opacity-40 blur-3xl animate-pulse-glow" />

              {/* Profile */}
              <div className="absolute inset-20 rounded-full bg-gradient-primary p-[3px] shadow-[0_0_60px_hsl(var(--primary)/0.5)]">
                <div className="w-full h-full rounded-full bg-background p-1.5 overflow-hidden">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>

              {/* Orbiting tech badges */}
              {techOrbits.map(({ name, icon, className, delay }) => (
                <div
                  key={name}
                  className={`absolute ${className} w-14 h-14 md:w-16 md:h-16 rounded-full bg-card/90 backdrop-blur border border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.4)] flex items-center justify-center animate-float`}
                  style={{ animationDelay: delay }}
                  title={name}
                >
                  <img src={icon} alt={name} className="w-7 h-7 md:w-9 md:h-9 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
