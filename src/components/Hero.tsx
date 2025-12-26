import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/profile.png';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <p className="text-primary font-semibold mb-4 tracking-wider uppercase">
              {t('hero.welcome')}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('hero.greeting')} <span className="text-gradient">{t('hero.name')}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              {t('hero.description')}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient">2+</p>
                <p className="text-muted-foreground text-sm">{t('hero.yearsExp')}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient">95+</p>
                <p className="text-muted-foreground text-sm">{t('hero.projects')}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient">50+</p>
                <p className="text-muted-foreground text-sm">{t('hero.clients')}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={scrollToPortfolio} className="btn-primary">
                {t('hero.viewPortfolio')}
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                {t('hero.letsTalk')}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-primary p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src={profileImage}
                    alt="Jony - Web Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
