import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/profile.png';

// Custom icons for missing social platforms
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.132-1.13 3.628-1.154 1.135-.018 2.18.127 3.126.385-.07-.846-.296-1.508-.68-1.978-.455-.558-1.17-.838-2.121-.838h-.05c-.754.006-1.374.238-1.844.69l-1.404-1.5c.82-.77 1.9-1.18 3.212-1.22h.073c1.565 0 2.798.503 3.663 1.496.793.912 1.217 2.201 1.26 3.834.494.194.95.426 1.363.695 1.27.829 2.185 1.986 2.644 3.346.611 1.807.565 4.303-1.594 6.415-1.834 1.793-4.15 2.648-7.432 2.675zM12.24 14.49c-1.297.023-2.236.345-2.717.93-.373.456-.462 1.058-.253 1.565.237.572.801.939 1.589.939.06 0 .12-.002.18-.006 1.278-.07 2.065-.564 2.475-1.552.216-.52.335-1.155.357-1.902-.503-.147-1.05-.25-1.631-.25z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', colorClass: 'social-facebook' },
  { icon: Instagram, href: '#', label: 'Instagram', colorClass: 'social-instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', colorClass: 'social-linkedin' },
  { CustomIcon: XIcon, href: '#', label: 'X (Twitter)', colorClass: 'social-twitter' },
  { icon: Youtube, href: '#', label: 'YouTube', colorClass: 'social-youtube' },
  { CustomIcon: TikTokIcon, href: '#', label: 'TikTok', colorClass: 'social-tiktok' },
  { CustomIcon: ThreadsIcon, href: '#', label: 'Threads', colorClass: 'social-threads' },
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
                <p className="text-4xl font-bold text-gradient">85+</p>
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
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, CustomIcon, href, label, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${colorClass}`}
                >
                  {Icon ? <Icon size={20} /> : CustomIcon && <CustomIcon />}
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
