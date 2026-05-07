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
    { icon: 'https://cdn-icons-png.flaticon.com/128/5517/5517030.png', value: '2+', label: t('hero.yearsExp') },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3113/3113025.png', value: '95+', label: t('hero.projects') },
    { icon: 'https://cdn-icons-png.flaticon.com/128/1256/1256650.png', value: '50+', label: t('hero.clients') },
    { icon: 'https://cdn-icons-png.flaticon.com/128/15189/15189269.png', value: '10+', label: t('about.technologies') },
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
              I’m a passionate MERN Stack Developer who enjoys building modern, responsive, and user-focused web applications. I work with MongoDB, Express.js, React, and Node.js to create full-stack solutions that are fast, scalable, and efficient. I have a strong interest in clean UI design, performance optimization, and solving real-world problems through technology.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a developer, I continuously explore new tools, frameworks, and best practices to improve my skills and stay updated with the latest trends in web development. I enjoy turning ideas into functional digital products and working on projects that combine creativity with logic.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I’m also interested in backend architecture, APIs, database management, and creating smooth user experiences across devices. My goal is to build impactful applications while growing as a professional developer in the tech industry.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="glass-card p-6 text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full  flex items-center justify-center">
                  {/* <Icon  size={28} /> */}
                  <img className="text-primary-foreground" src={`${Icon}`} alt="" />
                </div>
                <p className="text-3xl font-bold text-gradient mb-2">{value}</p>
                <p className="text-muted-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        {/* <div className="mt-16 about-content">
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
        </div> */}
      </div>
    </section>
  );
};

export default About;
