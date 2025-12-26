import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award, Users, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: '2+', label: t('hero.yearsExp') },
    { icon: Award, value: '95+', label: t('hero.projects') },
    { icon: Users, value: '50+', label: t('hero.clients') },
    { icon: Code, value: '10+', label: t('about.technologies') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 about-content">
          <h2 className="section-title">
            {t('about.title')} <span className="text-gradient">{t('about.me')}</span>
          </h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center about-content">
          {/* About Text */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient">{t('about.whoAmI')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.description1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.description2')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description3')} <span className="text-primary font-semibold">Topper IT</span> {t('about.and')}
              <span className="text-primary font-semibold"> Fast IT Care</span>{t('about.description4')}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="glass-card p-6 text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <p className="text-3xl font-bold text-gradient mb-2">{value}</p>
                <p className="text-muted-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 about-content">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('about.experience')} <span className="text-gradient">{t('about.experienceHighlight')}</span>
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-6 mb-4 border-l-4 border-primary">
              <h4 className="font-bold text-lg">{t('about.webDeveloper')}</h4>
              <p className="text-primary mb-2">Fast IT Care</p>
              <p className="text-muted-foreground text-sm">
                {t('about.fastItDesc')}
              </p>
            </div>
            <div className="glass-card p-6 border-l-4 border-accent">
              <h4 className="font-bold text-lg">{t('about.juniorWebDeveloper')}</h4>
              <p className="text-accent mb-2">Topper IT</p>
              <p className="text-muted-foreground text-sm">
                {t('about.topperItDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
