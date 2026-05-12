import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowUpRight, Check, LayoutDashboard } from 'lucide-react';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';

import Globe from '@/assets/wordpress.png';
import ShoppingCart from '@/assets/shoppingcart.png';
import Rocket from '@/assets/landing-page.png';
import Palette from '@/assets/ui.png';
import ReactImg from '@/assets/react.png';
import Settings from '@/assets/repair.png';
import Search from '@/assets/seo.png';
import Smartphone from '@/assets/phone.png';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  Icon: string;
  title: string;
  description: string;
  related: string[];
  startingAt?: string;
}

const services: Service[] = [
  {
    Icon: Globe, title: 'WordPress Development',
    description: 'Custom WordPress websites with premium themes, plugins, and complete functionality tailored to your needs.',
    related: ['Custom theme development', 'Plugin customization', 'Multilingual sites (WPML/Polylang)', 'Membership & LMS sites', 'Headless WordPress with React', 'WordPress migration & backups'],
    startingAt: '$150',
  },
  {
    // id: 7,
    Icon: "https://cdn-icons-png.flaticon.com/512/8323/8323511.png",
    title: "Admin Dashboard Development",
    related: [
       "Analytics Dashboard",
      "User Management",
      "Data Visualization",
      "Reports System",
      "Role Management",
      "Activity Monitoring",
    ],
    // startingAt: '$150',
    description: "Create dynamic admin panels with analytics, charts, and management features.",
  },
  {
    Icon: ShoppingCart, title: 'E-commerce Solutions',
    description: 'Complete WooCommerce stores with payment gateways, inventory management, and sales funnels using CartFlows.',
    related: ['WooCommerce store setup', 'Payment gateway integration', 'Product import & catalog', 'Inventory & shipping rules', 'Subscriptions & memberships', 'Order & invoice automation'],
    // startingAt: '$250',
  },
  {
    Icon: Rocket, title: 'Landing Page Design',
    description: 'High-converting landing pages designed to capture leads and drive sales with optimized user experience.',
    related: ['Single-product funnels', 'CartFlows order-bumps & upsells', 'Lead-gen pages', 'A/B testing setup', 'Pixel & analytics integration', 'Speed-optimized templates'],
    // startingAt: '$80',
  },
  // {
  //   Icon: Palette, title: 'UI/UX Design',
  //   description: 'Beautiful, intuitive interfaces designed with Elementor Pro and modern design principles.',
  //   related: ['Wireframing & prototyping', 'Figma to code', 'Design system creation', 'Mobile-first layouts', 'Micro-interactions', 'Accessibility audits'],
  //   startingAt: '$120',
  // },
  {
    Icon: ReactImg, title: 'React Development',
    description: 'Modern React applications with TypeScript, state management, and responsive Tailwind CSS styling.',
    related: ['Single-page applications', 'Dashboard & admin panels', 'REST/GraphQL integration', 'Authentication flows', 'Component library setup', 'Performance optimization'],
    // startingAt: '$200',
  },
  {
    Icon: Settings, title: 'Website Maintenance',
    description: 'Ongoing support, updates, backups, security monitoring, and performance optimization services.',
    related: ['Plugin & core updates', 'Daily/weekly backups', 'Malware scanning & cleanup', 'Uptime monitoring', 'Speed optimization', 'Bug fixes & content edits'],
    // startingAt: '$50/mo',
  },
  {
    Icon: Search, title: 'SEO Optimization',
    description: 'On-page SEO, speed optimization, and technical SEO to improve your search engine rankings.',
    related: ['Keyword research', 'On-page optimization', 'Schema markup', 'Core Web Vitals tuning', 'Sitemap & robots.txt', 'Google Search Console setup'],
    // startingAt: '$100',
  },
  {
    Icon: Smartphone, title: 'Responsive Design',
    description: 'Mobile-first, fully responsive websites that look perfect on all devices and screen sizes.',
    related: ['Mobile-first refactor', 'Tablet & desktop breakpoints', 'Touch-friendly interactions', 'Cross-browser testing', 'Device QA', 'Lighthouse mobile fixes'],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
           style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-5">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">What I Offer</span>
          </div>
          <h2 className="section-title">My <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">Click any service to explore related offerings</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <button
              key={service.title}
              onClick={() => setSelected(service)}
              className="service-card group  relative rounded-2xl p-6 glass-card overflow-hidden text-left transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <span className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10"/>
              <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/50 group-hover:text-primary transition-colors">
                0{i + 1}
              </span>
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                   style={{
                     background: `linear-gradient(135deg, hsl(var(--accent)/0.15), hsl(var(--accent)/0.05))`,
                     border: `1px solid hsl(var(--accent)/0.4)`,
                   }}>
                <img src={service.Icon} alt={service.title} className="w-9 h-9 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                View related <ArrowUpRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                       style={{
                         background: `linear-gradient(135deg, hsl(var(--accent)/0.15), hsl(var(--accent)/0.05))`,
                         border: `1px solid hsl(var(--accent)/0.4)`,
                       }}>
                    <img src={selected.Icon} alt={selected.title} className="w-8 h-8 object-contain" />
                  </div>
                  <DialogTitle className="text-xl text-gradient">{selected.title}</DialogTitle>
                </div>
                <DialogDescription className="text-base text-muted-foreground text-left">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Related Services
                </h4>
                <ul className="space-y-2">
                  {selected.related.map((item) => (
                    <li key={item} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border hover:border-primary/40 transition-colors">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                        <Check size={12} className="text-primary" />
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                {selected.startingAt && (
                  <div className="mt-5 flex items-center justify-between p-4 rounded-xl border border-primary/30 bg-primary/5">
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <span className="text-xl font-bold text-gradient">{selected.startingAt}</span>
                  </div>
                )}
                <a href="#contact" onClick={() => setSelected(null)}
                   className="btn-primary w-full text-center text-sm mt-5 inline-block">
                  Get a quote
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
