import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-2xl border-b border-primary/20 shadow-[0_4px_30px_hsl(var(--primary)/0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-glow opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
            <img src={logo} alt="Jony Logo" className="h-12 w-auto relative transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-card/40 backdrop-blur border border-border/60">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium rounded-full hover:bg-primary/10"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex">
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="btn-primary text-sm !py-2.5 !px-5"
            >
              {t('nav.viewPortfolio')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 rounded-lg border border-border bg-card/40 backdrop-blur"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="btn-primary text-sm mt-2"
              >
                {t('nav.viewPortfolio')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
