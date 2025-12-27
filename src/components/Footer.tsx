import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp
} from 'lucide-react';
import logo from '@/assets/logo.png';

// Custom icons
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.132-1.13 3.628-1.154 1.135-.018 2.18.127 3.126.385-.07-.846-.296-1.508-.68-1.978-.455-.558-1.17-.838-2.121-.838h-.05c-.754.006-1.374.238-1.844.69l-1.404-1.5c.82-.77 1.9-1.18 3.212-1.22h.073c1.565 0 2.798.503 3.663 1.496.793.912 1.217 2.201 1.26 3.834.494.194.95.426 1.363.695 1.27.829 2.185 1.986 2.644 3.346.611 1.807.565 4.303-1.594 6.415-1.834 1.793-4.15 2.648-7.432 2.675zM12.24 14.49c-1.297.023-2.236.345-2.717.93-.373.456-.462 1.058-.253 1.565.237.572.801.939 1.589.939.06 0 .12-.002.18-.006 1.278-.07 2.065-.564 2.475-1.552.216-.52.335-1.155.357-1.902-.503-.147-1.05-.25-1.631-.25z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
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

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Jony" className="h-14 mb-4" />
            <p className="text-muted-foreground mb-6">
              Professional Web Developer specializing in WordPress, React, 
              and modern web technologies. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, CustomIcon, href, label, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${colorClass}`}
                >
                  {Icon ? <Icon size={18} /> : CustomIcon && <CustomIcon />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>WordPress Development</li>
              <li>E-commerce Solutions</li>
              <li>Landing Pages</li>
              <li>React Development</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>jony@example.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span>+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span>Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © 2024 Jony. Made with <Heart size={14} className="text-red-500 fill-red-500" /> All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Top <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
