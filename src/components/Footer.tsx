import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Send,
  Sparkles,
} from 'lucide-react';
import logo from '@/assets/logo.png';

const year = new Date().getFullYear();

const socialLinks = [
  { icon: 'https://cdn-icons-png.flaticon.com/128/15047/15047435.png', href: 'https://www.facebook.com/asm.jony.2024', label: 'Facebook', color: '#1877F2' },
  { icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png', href: 'https://www.instagram.com/jonymia321/', label: 'Instagram', color: '#E1306C' },
  { icon: 'https://cdn-icons-png.flaticon.com/128/3991/3991775.png', href: 'https://www.linkedin.com/in/jony-mia-243ab4334/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: 'https://cdn-icons-png.flaticon.com/128/5969/5969020.png', href: 'https://x.com/JonyMia220812', label: 'X (Twitter)', color: '#ffffff' },
  { icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png', href: 'https://www.youtube.com/@jonymia1972', label: 'YouTube', color: '#FF0000' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'WordPress Development',
  'E-commerce Solutions',
  'Landing Pages',
  'React Development',
  'UI/UX Design',
  'SEO Optimization',
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-card/40 backdrop-blur-xl border-t border-border">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Floating glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
           style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src={logo} alt="Jony" className="h-20 mb-4" />
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Professional Web Developer crafting bold, futuristic experiences with WordPress,
              React, and modern web technologies.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider">Stay Updated</span>
              </div>
              {/* <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 p-1 rounded-full border border-border bg-background/60 backdrop-blur-sm focus-within:border-primary transition-colors"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                >
                  <Send size={14} />
                </button>
              </form> */}
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group relative w-11 h-11 rounded-xl border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                  style={{ ['--glow' as any]: color }}
                >
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity"
                    style={{ background: color }}
                  />
                  <img src={icon} width={22} height={22} alt={label} className="relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-primary" />
              Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-primary" />
              Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s} className="hover:text-primary transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-primary" />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl border border-border bg-background/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <Mail size={16} className="text-primary" />
                </div>
                <a href="mailto:ajonymia321@gmail.com" className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                  ajonymia321@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl border border-border bg-background/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <Phone size={16} className="text-primary" />
                </div>
                <a href="https://wa.me/+8801770522886" className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  +880 1770 522886
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl border border-border bg-background/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/60 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center text-sm flex items-center gap-1.5 flex-wrap justify-center">
              © {year} Crafted with
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              by <span className="text-gradient font-semibold">Jony</span>
              <span className="text-border mx-1">•</span>
              All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary text-sm text-muted-foreground hover:text-primary transition-all hover:-translate-y-0.5"
            >
              Back to Top
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
