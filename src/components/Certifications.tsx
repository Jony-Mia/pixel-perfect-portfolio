import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import certificate1 from '@/assets/certificate-1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: 'Complete Web Development',
    issuer: 'Programming Hero',
    image: certificate1,
    year: '2026',
  },
  {
    title: 'Complete WordPress Development',
    issuer: 'W3 Topper Freelancing Academy',
    image: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-6/550681845_652520447898742_2463063944442090996_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3qpou9H6uXAQ7kNvwHXL5pX&_nc_oc=AdmkmK6UTryNK4nGLHv04r3hP9DU2b_K7_wXFKrIWVot-G6rh5v-EIa1NDh3IB3IbIU&_nc_zt=23&_nc_ht=scontent.fdac187-1.fna&_nc_gid=8VCpqJrzEMVCRGe6yEJ_nw&oh=00_Afvaberu-sLwdXVwHNZCg17QzQYJCVgSxoxI0J7eUZpB-g&oe=698EA7CC',
    year: '2024',
  },
  {
    title: 'Complete HSC',
    issuer: 'Baburhut Greenfield College',
    image: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-6/549702308_652524194565034_7131461599180223896_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5lpA2Z5TwlMQ7kNvwEieJFF&_nc_oc=AdlqkiL7C2ZxgFODTDhMnMG7AqqaEXBBt5LkcYNBqyqiVzjZypWfp73jQIzzuXjPiFQ&_nc_zt=23&_nc_ht=scontent.fdac187-1.fna&_nc_gid=M4y8zoef6o6ldrnQ0NBkwg&oh=00_Aftz7YigctZ6sU4I7ejCQ3kWDYVOJUCSYB_LzJsU2ta2qQ&oe=698EACE9',
    year: '2024',
  },
  // Add more certificates here
];

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-content',
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
    <section id="certifications" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 cert-content">
          <h2 className="section-title">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and achievements
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 cert-content">
          {certificates.map((cert, index) => (
            <div key={index} className="relative group">
              {/* Glowing Neon Border Animation */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-neon-purple to-accent rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-neon-purple to-accent rounded-2xl opacity-50" /* style={{ animation: 'certificate-rotate 4s linear infinite' }}*/ />
              
              <div className="relative glass-card p-2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-80 md:w-96 h-auto rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0  p-4">
                  <h3 className="font-bold text-white text-lg text-card-foreground">{cert.title}</h3>
                  <p className="text-white text-sm font-medium">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 cert-content">
          More certifications coming soon...
        </p>
      </div>
    </section>
  );
};

export default Certifications;
