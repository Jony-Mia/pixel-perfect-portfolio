import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="cta-content relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-20 text-center">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-background/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-background/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Ready to bring your vision to life? Let's create something amazing together.
              Whether it's a website, e-commerce store, or custom web application,
              I'm here to help you succeed.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start Your Project <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
