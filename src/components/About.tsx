import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award, Users, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Briefcase, value: '2+', label: 'Years Experience' },
  { icon: Award, value: '95+', label: 'Projects Delivered' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Code, value: '10+', label: 'Technologies' },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate web developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center about-content">
          {/* About Text */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Who Am I?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate and dedicated Web Developer with over 2 years of professional experience 
              in crafting stunning websites and powerful web applications. My journey in web development 
              started with a curiosity to understand how the digital world works, and it has evolved 
              into a fulfilling career where I get to transform ideas into reality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Specializing in WordPress, ReactJS, and modern frontend technologies, I've successfully 
              delivered 95+ projects ranging from e-commerce platforms to corporate websites and 
              high-converting landing pages. My expertise includes Elementor, WooCommerce, CartFlows, 
              and custom theme development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Previously worked with <span className="text-primary font-semibold">Topper IT</span> and 
              <span className="text-primary font-semibold"> Fast IT Care</span>, where I honed my skills 
              in delivering client-focused solutions. I believe in writing clean, maintainable code and 
              creating user experiences that leave a lasting impression.
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
            Work <span className="text-gradient">Experience</span>
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-6 mb-4 border-l-4 border-primary">
              <h4 className="font-bold text-lg">Web Developer</h4>
              <p className="text-primary mb-2">Fast IT Care</p>
              <p className="text-muted-foreground text-sm">
                Developed WordPress websites, landing pages, and e-commerce solutions using 
                WooCommerce and CartFlows. Delivered high-quality projects with excellent client satisfaction.
              </p>
            </div>
            <div className="glass-card p-6 border-l-4 border-accent">
              <h4 className="font-bold text-lg">Junior Web Developer</h4>
              <p className="text-accent mb-2">Topper IT</p>
              <p className="text-muted-foreground text-sm">
                Started my professional journey building responsive websites and learning 
                industry best practices. Worked on various client projects using HTML, CSS, 
                JavaScript, and WordPress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
