import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/profile.png';
import TypingText from './TypingText';

// Position tech badges around the profile (angle in degrees, 0 = top, clockwise)
const techOrbits = [
  { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/128/732/732212.png', angle: 0, color: 'hsl(14, 85%, 55%)' },
  { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/128/732/732190.png', angle: 45, color: 'hsl(220, 75%, 55%)' },
  { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png', angle: 90, color: 'hsl(50, 95%, 55%)' },
  { name: 'Next.js', icon: 'https://cdn-icons-png.flaticon.com/128/15466/15466163.png', angle: 135, color: 'hsl(0, 0%, 90%)' },
  { name: 'React.js', icon: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png', angle: 180, color: 'hsl(195, 90%, 60%)' },
  { name: 'Tailwind', icon: 'https://cdn-icons-png.flaticon.com/128/15484/15484303.png', angle: 225, color: 'hsl(195, 90%, 55%)' },
  { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png', angle: 270, color: 'hsl(95, 60%, 50%)' },
  { name: 'TypeScript', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png', angle: 315, color: 'hsl(215, 60%, 55%)' },
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
            <h2 className="text-2xl md:text-3xl text-foreground/90 font-semibold mb-5 min-h-[2.25rem] md:min-h-[2.75rem]">
              <TypingText
                words={[
                  t('hero.title'),
                  'React.js Developer',
                  'Next.js Expert',
                  'UI/UX Enthusiast',
                  'MERN Stack Developer',
                ]}
                className="text-gradient"
              />
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

              {/* Orbiting tech badges around profile */}
              {techOrbits.map(({ name, icon, angle, color }, i) => {
                const rad = (angle - 90) * (Math.PI / 180);
                const r = 50; // percent radius
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div
                    key={name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                    style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }}
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card/90 backdrop-blur flex items-center justify-center border-2 transition-transform duration-300 hover:scale-110"
                        style={{
                          borderColor: color,
                          boxShadow: `0 0 20px ${color}80, inset 0 0 12px ${color}30`,
                        }}
                        title={name}
                      >
                        <img src={icon} alt={name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                      </div>
                      <span
                        className="px-2 py-0.5 text-[10px] md:text-xs font-semibold rounded-md bg-card/90 backdrop-blur border whitespace-nowrap"
                        style={{ borderColor: `${color}60`, color }}
                      >
                        {name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
