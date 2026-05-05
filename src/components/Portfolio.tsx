import {useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import babiesHaven from '@/assets/babieshavenbd-preview.png';
import BarakahPublication from '@/assets/Barakah-Publication.png';
import hudawayBD from '@/assets/hudaway.png';
import khalifaFashionWorld from '@/assets/Khalif-FashionWorld.png';
import kidsPlaynix from '@/assets/Kids-Playnix.png';
import Qiblaa from '@/assets/image1.png';
import homely from '@/assets/Homely.png';
import solutionBD from '@/assets/image3.png';
import vitalixBD from '@/assets/Vitalix-Ananta.png';
import divineAroma from '@/assets/image4.png';
import royal from '@/assets/royal.png';
import rafaOnline from "@/assets/Screenshot_4.png";
import cargoShipping from "@/assets/Screenshot_5.png";
import bisNogor from "@/assets/1080-bag-ash-890-tk-4.png"
import sakura from "@/assets/Screenshot_6.png";

gsap.registerPlugin(ScrollTrigger);

type Category = 'all' | 'websites' | 'landing-pages';

interface Project {
  name: string;
  url: string;
  category: 'websites' | 'landing-pages';
  image: string;
}

const projects: Project[] = [
  { 
    name: 'Homely',
    url: 'https://homely.com.bd',
    category: 'websites', 
    image: homely
  },
  // { name: 'Kidoz', url: 'https://kidoz.com.bd', category: 'websites', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop' },
  { 
    name: 'Kids Playnix',
    url: 'https://kidzplaynix.com', 
    category: 'websites', 
    image: kidsPlaynix 
  },
  { 
    name: 'Royal Park',
    url: 'https://royalparkattire.com/', 
    category: 'websites', 
    image: royal 
  },
  { 
    name: 'Khalifa Fashion World',
    url: 'https://khalifafashionworld.com', 
    category: 'websites', 
    image: khalifaFashionWorld 
  },
  { 
    name: 'Hudaway BD',
    url: 'https://hudawaybd.com', 
    category: 'websites', 
    image: hudawayBD 
  },
  { 
    name: 'Divine Aroma BD', 
    url: 'https://divinearomabd.com', 
    category: 'websites', 
    image: divineAroma 
  },
  { 
    name: 'Qiblaa', 
    url: 'https://qiblaa.com', 
    category: 'websites', 
    image: Qiblaa 
  },
  { 
    name: 'Babies Haven BD', 
    url: 'https://babieshavenbd.com', 
    category: 'websites', 
    image: babiesHaven 
  },
  { 
    name: 'Solution BD',
    url: 'https://solutionbd.top', 
    category: 'websites', 
    image: solutionBD 
  },
  { 
    name: 'Bismillah Cargo', 
    url: 'https://bismillahcargo.com.bd', 
    category: 'websites', 
    image: cargoShipping 
  },
  { 
    name: 'Rafaa Online',
    url: 'https://rafaaonline.com', 
    category: 'websites', 
    image: rafaOnline,
  },
  { 
    name: 'Bismillah Nogor', 
    url: 'https://bismillahnogor.com', 
    category: 'websites', 
    image: bisNogor
  },
  { 
    name: 'Solution BD Landing', 
    url: 'https://solutionbd.top', 
    category: 'landing-pages', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop' 
  },
  { 
    name: 'Vitalix BD', 
    url: 'https://vitalixbd.com/vitalix-bd-ananta', 
    category: 'landing-pages', 
    image: vitalixBD 
  },
  { 
    name: 'Bismillah Nogor Landing', 
    url: 'https://bismillahnogor.com', 
    category: 'landing-pages', 
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop' 
  },
  { 
    name: 'Gopali Pitha', 
    url: 'https://gopalipitha.com', 
    category: 'landing-pages', 
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop' 
  },
  { 
    name: 'Chandura', 
    url: 'https://chandura.com', 
    category: 'landing-pages', 
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop'
   },
  { 
    name: 'Trendy Book BD', 
    url: 'https://trendybookbd.com', 
    category: 'landing-pages', 
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop'
   },
  { 
    name: 'Barakah Publication',
    url: 'https://barakahpublication.shop', 
    category: 'landing-pages', 
    image: BarakahPublication 
  },
  { 
    name: 'Masud Telecom BD', 
    url: 'https://masudtelecombd.com', 
    category: 'landing-pages', 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop' 
  },
  { 
    name: 'Sakura Agency', 
    url: 'https://www.sakura.agency', 
    category: 'landing-pages', 
    image: sakura
  },
  { 
    name: 'Kids Dream Drape',
    url: 'https://kids.dreamdrapebd.com',
    category: 'landing-pages', 
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=250&fit=crop' },
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
    <section id="portfolio" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 portfolio-content">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            ✦ Selected Work
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my best work and successful projects
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-12 portfolio-content flex-wrap">
          {(['all', 'websites', 'landing-pages'] as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-gradient-primary text-primary-foreground border-transparent shadow-[0_0_25px_hsl(var(--primary)/0.5)] scale-105'
                  : 'bg-card/40 backdrop-blur text-muted-foreground border-border hover:border-primary/50 hover:text-primary'
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
              key={project.url + project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card professional-card overflow-hidden group relative hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.45)] hover:border-primary/60"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                  <ExternalLink size={16} className="text-primary-foreground" />
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    project.category === 'websites'
                      ? 'bg-primary/10 text-primary border-primary/30'
                      : 'bg-accent/10 text-accent border-accent/30'
                  }`}>
                    {project.category === 'websites' ? 'Website' : 'Landing Page'}
                  </span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 truncate">
                  {project.url.replace('https://', '')}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
