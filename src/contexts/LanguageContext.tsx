import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.viewPortfolio': 'View Portfolio',

    // Hero
    'hero.welcome': 'Welcome to my Portfolio',
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Jony',
    'hero.title': 'Professional Web Developer',
    'hero.description': 'Crafting stunning websites and powerful web applications with expertise in WordPress, React, and modern web technologies. Let\'s build something amazing together.',
    'hero.yearsExp': 'Years Experience',
    'hero.projects': 'Projects Delivered',
    'hero.clients': 'Happy Clients',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.letsTalk': "Let's Talk",

    // About
    'about.title': 'About',
    'about.me': 'Me',
    'about.subtitle': 'Passionate web developer dedicated to creating exceptional digital experiences',
    'about.whoAmI': 'Who Am I?',
    'about.description1': "I'm a passionate MERN Stack Developer who enjoys building modern, responsive, and user-focused web applications. I work with MongoDB, Express.js, React, and Node.js to create full-stack solutions that are fast, scalable, and efficient. I have a strong interest in clean UI design, performance optimization, and solving real-world problems through technology.",
    'about.description2': "As a developer, I continuously explore new tools, frameworks, and best practices to improve my skills and stay updated with the latest trends in web development. I enjoy turning ideas into functional digital products and working on projects that combine creativity with logic.",
    // 'about.description3': 'Previously worked with',
    'about.and': 'and',
    'about.description4': 'I’m also interested in backend architecture, APIs, database management, and creating smooth user experiences across devices. My goal is to build impactful applications while growing as a professional developer in the tech industry.',
    'about.experience': 'Work',
    'about.experienceHighlight': 'Experience',
    'about.technologies': 'Technologies',
    'about.webDeveloper': '',
    'about.juniorWebDeveloper': '',
    'about.fastItDesc': '',
    'about.topperItDesc': '',

    // Skills
    'skills.title': 'My',
    'skills.titleHighlight': 'Skills',
    'skills.subtitle': "Technologies and tools I've mastered throughout my career",
    'skills.wordpress': 'WordPress Expertise',
    'skills.react': 'React Expertise',
    'skills.ecommerce': 'E-commerce Expertise',

    // WordPress expertise items
    'wp.theme': 'Custom Theme Development',
    'wp.plugin': 'Plugin Customization',
    'wp.elementor': 'Elementor Pro Expert',
    'wp.woo': 'WooCommerce Setup & Customization',
    'wp.cartflows': 'CartFlows Funnel Building',
    'wp.speed': 'Speed Optimization',
    'wp.security': 'Security Hardening',
    'wp.seo': 'SEO Optimization',
    'wp.responsive': 'Responsive Design',
    'wp.migration': 'Migration & Backup',

    // React expertise items
    'react.hooks': 'React Hooks & Context',
    'react.router': 'React Router DOM',
    'react.state': 'State Management (Redux/Zustand)',
    'react.ts': 'TypeScript Integration',
    'react.tailwind': 'Tailwind CSS Styling',
    'react.api': 'API Integration',
    'react.components': 'Component Architecture',
    'react.performance': 'Performance Optimization',
    'react.testing': 'Testing (Jest/RTL)',
    'react.build': 'Modern Build Tools',

    // Ecommerce expertise items
    'ecom.store': 'WooCommerce Store Setup',
    'ecom.payment': 'Payment Gateway Integration',
    'ecom.product': 'Product Management',
    'ecom.inventory': 'Inventory Management',
    'ecom.shipping': 'Shipping Configuration',
    'ecom.funnel': 'Sales Funnel Creation',
    'ecom.cartflows': 'CartFlows Optimization',
    'ecom.conversion': 'Conversion Rate Optimization',
    'ecom.order': 'Order Management',
    'ecom.analytics': 'Customer Analytics',

    // Portfolio
    'portfolio.title': 'My',
    'portfolio.titleHighlight': 'Portfolio',
    'portfolio.subtitle': 'A showcase of my best work and successful projects',
    'portfolio.all': 'All Projects',
    'portfolio.websites': 'Websites',
    'portfolio.landingPages': 'Landing Pages',
    'portfolio.website': 'Website',
    'portfolio.landingPage': 'Landing Page',

    // Services
    'services.title': 'My',
    'services.titleHighlight': 'Services',
    'services.subtitle': 'Professional web development services to bring your vision to life',
    'service.wordpress': 'WordPress Development',
    'service.wordpressDesc': 'Custom WordPress websites with premium themes, plugins, and complete functionality tailored to your needs.',
    'service.ecommerce': 'E-commerce Solutions',
    'service.ecommerceDesc': 'Complete WooCommerce stores with payment gateways, inventory management, and sales funnels using CartFlows.',
    'service.landing': 'Landing Page Design',
    'service.landingDesc': 'High-converting landing pages designed to capture leads and drive sales with optimized user experience.',
    'service.uiux': 'UI/UX Design',
    'service.uiuxDesc': 'Beautiful, intuitive interfaces designed with Elementor Pro and modern design principles.',
    'service.react': 'React Development',
    'service.reactDesc': 'Modern React applications with TypeScript, state management, and responsive Tailwind CSS styling.',
    'service.maintenance': 'Website Maintenance',
    'service.maintenanceDesc': 'Ongoing support, updates, backups, security monitoring, and performance optimization services.',
    'service.seo': 'SEO Optimization',
    'service.seoDesc': 'On-page SEO, speed optimization, and technical SEO to improve your search engine rankings.',
    'service.responsive': 'Responsive Design',
    'service.responsiveDesc': 'Mobile-first, fully responsive websites that look perfect on all devices and screen sizes.',

    // Pricing
    'pricing.title': 'Pricing',
    'pricing.titleHighlight': 'Plans',
    'pricing.subtitle': 'Transparent pricing for every budget and project size',
    'pricing.starter': 'Starter',
    'pricing.starterDesc': 'Perfect for small businesses and personal projects',
    'pricing.business': 'Business',
    'pricing.businessDesc': 'Ideal for growing businesses and e-commerce',
    'pricing.professional': 'Professional',
    'pricing.professionalDesc': 'Complete solution for enterprises and complex projects',
    'pricing.popular': 'Most Popular',
    'pricing.project': '/project',
    'pricing.getStarted': 'Get Started',

    // Pricing features
    'price.single': 'Single Page Website',
    'price.responsive': 'Responsive Design',
    'price.basicSeo': 'Basic SEO Setup',
    'price.contactForm': 'Contact Form',
    'price.revisions3': '3 Revisions',
    'price.delivery7': '7 Days Delivery',
    'price.support30': '30 Days Support',
    'price.multiPage': 'Multi-page Website (up to 10)',
    'price.woocommerce': 'WooCommerce Integration',
    'price.premiumTheme': 'Premium Theme Customization',
    'price.advancedSeo': 'Advanced SEO Optimization',
    'price.speed': 'Speed Optimization',
    'price.revisions5': '5 Revisions',
    'price.delivery14': '14 Days Delivery',
    'price.support60': '60 Days Support',
    'price.unlimited': 'Unlimited Pages',
    'price.fullEcommerce': 'Full E-commerce Setup',
    'price.customPlugin': 'Custom Plugin Development',
    'price.cartflows': 'CartFlows Sales Funnels',
    'price.premiumSeo': 'Premium SEO Package',
    'price.performance': 'Performance Optimization',
    'price.unlimitedRevisions': 'Unlimited Revisions',
    'price.delivery30': '30 Days Delivery',
    'price.support90': '90 Days Support',
    'price.priority': 'Priority Support',

    // Testimonials
    'testimonials.title': 'Client',
    'testimonials.titleHighlight': 'Reviews',
    'testimonials.subtitle': 'What my clients say about working with me',

    // Certifications
    'cert.title': 'My',
    'cert.titleHighlight': 'Certifications',
    'cert.subtitle': 'Professional certifications and achievements',
    'cert.more': 'More certifications coming soon...',
    'cert.webDev': 'Complete Web Development',

    // Gallery
    'gallery.title': 'Success',
    'gallery.titleHighlight': 'Gallery',
    'gallery.subtitle': 'A visual journey through my successful projects',

    // Sponsors
    'sponsors.subtitle': 'Trusted Technologies & Partners',

    // CTA
    'cta.title': "Let's Work Together",
    'cta.description': "Ready to bring your vision to life? Let's create something amazing together. Whether it's a website, e-commerce store, or custom web application, I'm here to help you succeed.",
    'cta.button': 'Start Your Project',

    // Contact
    'contact.title': 'Get In',
    'contact.titleHighlight': 'Touch',
    'contact.subtitle': 'Have a project in mind? Let\'s discuss how I can help you',
    'contact.info': 'Contact Information',
    'contact.infoDesc': "Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible!",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.bangladesh': 'Bangladesh',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your Name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Project Discussion',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send Message',

    // Footer
    'footer.description': 'Professional Web Developer specializing in WordPress, React, and modern web technologies. Let\'s build something amazing together.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.backToTop': 'Back to Top',
  },
  
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
