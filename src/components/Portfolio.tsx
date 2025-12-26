import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Category = 'all' | 'websites' | 'landing-pages';

interface Project {
  name: string;
  url: string;
  category: 'websites' | 'landing-pages';
}

const projects: Project[] = [
  { name: 'Homely', url: 'https://homely.com.bd', category: 'websites' },
  { name: 'Kidoz', url: 'https://kidoz.com.bd', category: 'websites' },
  { name: 'Kids Playnix', url: 'https://kidzplaynix.com', category: 'websites' },
  { name: 'Khalifa Fashion World', url: 'https://khalifafashionworld.com', category: 'websites' },
  { name: 'Hudaway BD', url: 'https://hudawaybd.com', category: 'websites' },
  { name: 'Divine Aroma BD', url: 'https://divinearomabd.com', category: 'websites' },
  { name: 'Qiblaa', url: 'https://qiblaa.com', category: 'websites' },
  { name: 'Babies Haven BD', url: 'https://babieshavenbd.com', category: 'websites' },
  { name: 'Solution BD', url: 'https://solutionbd.top', category: 'websites' },
  { name: 'Bismillah Cargo', url: 'https://bismillahcargo.com.bd', category: 'websites' },
  { name: 'Rafaa Online', url: 'https://rafaaonline.com', category: 'websites' },
  { name: 'Bismillah Nogor', url: 'https://bismillahnogor.com', category: 'websites' },
  { name: 'Solution BD Landing', url: 'https://solutionbd.top', category: 'landing-pages' },
  { name: 'Vitalix BD', url: 'https://vitalixbd.com/vitalix-bd-ananta', category: 'landing-pages' },
  { name: 'Bismillah Nogor Landing', url: 'https://bismillahnogor.com', category: 'landing-pages' },
  { name: 'Gopali Pitha', url: 'https://gopalipitha.com', category: 'landing-pages' },
  { name: 'Chandura', url: 'https://chandura.com', category: 'landing-pages' },
  { name: 'Trendy Book BD', url: 'https://trendybookbd.com', category: 'landing-pages' },
  { name: 'Barakah Publication', url: 'https://barakahpublication.shop', category: 'landing-pages' },
  { name: 'Masud Telecom BD', url: 'https://masudtelecombd.com', category: 'landing-pages' },
  { name: 'Sakura Agency', url: 'https://www.sakura.agency', category: 'landing-pages' },
  { name: 'Kids Dream Drape', url: 'https://kids.dreamdrapebd.com', category: 'landing-pages' },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-content',
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

  useEffect(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05 }
    );
  }, [activeCategory]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 portfolio-content">
          <h2 className="section-title">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my best work and successful projects
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 portfolio-content">
          {(['all', 'websites', 'landing-pages'] as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
              }`}
            >
              {category === 'all' ? 'All Projects' : category === 'websites' ? 'Websites' : 'Landing Pages'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass-card p-6 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  project.category === 'websites' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-accent/20 text-accent'
                }`}>
                  {project.category === 'websites' ? 'Website' : 'Landing Page'}
                </span>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 truncate">
                {project.url.replace('https://', '')}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
