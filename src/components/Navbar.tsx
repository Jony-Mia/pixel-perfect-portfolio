import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, Wrench, Tag, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '#home', Icon: Home, color: 'text-sky-400' },
    { name: t('nav.about'), href: '#about', Icon: User, color: 'text-violet-400' },
    { name: t('nav.skills'), href: '#skills', Icon: Code2, color: 'text-emerald-400' },
    { name: t('nav.portfolio'), href: '#portfolio', Icon: Briefcase, color: 'text-amber-400' },
    { name: t('nav.services'), href: '#services', Icon: Wrench, color: 'text-pink-400' },
    { name: t('nav.pricing'), href: '#pricing', Icon: Tag, color: 'text-orange-400' },
    { name: t('nav.contact'), href: '#contact', Icon: Mail, color: 'text-cyan-400' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
          : 'bg-background/20 backdrop-blur-xl backdrop-saturate-150 border-b border-white/5'
      }`}
    >
      {/* Glass top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-glow opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
            <img src={logo} alt="Jony Logo" className="h-12 w-auto relative transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            {navLinks.map(({ name, href, Icon, color }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="group relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium rounded-full hover:bg-white/10 flex items-center gap-1.5"
              >
                <Icon size={15} className={`${color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`} />
                <span>{name}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex">
            <button onClick={() => scrollToSection('#portfolio')} className=" btn-primary dark:text-white text-sm !py-2.5 !px-5">
              {t('nav.viewPortfolio')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/60 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-2xl">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map(({ name, href, Icon, color }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors duration-300 font-medium text-left py-3 px-3 rounded-lg"
                >
                  <Icon size={18} className={color} />
                  {name}
                </button>
              ))}
              <button onClick={() => scrollToSection('#portfolio')} className="btn-primary text-sm mt-2">
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
