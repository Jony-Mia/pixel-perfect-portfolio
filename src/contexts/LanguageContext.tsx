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
    'about.description1': "I'm a passionate and dedicated Web Developer with over 2 years of professional experience in crafting stunning websites and powerful web applications. My journey in web development started with a curiosity to understand how the digital world works, and it has evolved into a fulfilling career where I get to transform ideas into reality.",
    'about.description2': "Specializing in WordPress, ReactJS, and modern frontend technologies, I've successfully delivered 95+ projects ranging from e-commerce platforms to corporate websites and high-converting landing pages. My expertise includes Elementor, WooCommerce, CartFlows, and custom theme development.",
    'about.description3': 'Previously worked with',
    'about.and': 'and',
    'about.description4': ', where I honed my skills in delivering client-focused solutions. I believe in writing clean, maintainable code and creating user experiences that leave a lasting impression.',
    'about.experience': 'Work',
    'about.experienceHighlight': 'Experience',
    'about.technologies': 'Technologies',
    'about.webDeveloper': 'Web Developer',
    'about.juniorWebDeveloper': 'Junior Web Developer',
    'about.fastItDesc': 'Developed WordPress websites, landing pages, and e-commerce solutions using WooCommerce and CartFlows. Delivered high-quality projects with excellent client satisfaction.',
    'about.topperItDesc': 'Started my professional journey building responsive websites and learning industry best practices. Worked on various client projects using HTML, CSS, JavaScript, and WordPress.',

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
  bn: {
    // Navbar
    'nav.home': 'হোম',
    'nav.about': 'সম্পর্কে',
    'nav.skills': 'দক্ষতা',
    'nav.portfolio': 'পোর্টফোলিও',
    'nav.services': 'সেবা',
    'nav.pricing': 'মূল্য',
    'nav.contact': 'যোগাযোগ',
    'nav.viewPortfolio': 'পোর্টফোলিও দেখুন',

    // Hero
    'hero.welcome': 'আমার পোর্টফোলিওতে স্বাগতম',
    'hero.greeting': 'আমি',
    'hero.name': 'জনি',
    'hero.title': 'পেশাদার ওয়েব ডেভেলপার',
    'hero.description': 'ওয়ার্ডপ্রেস, রিঅ্যাক্ট এবং আধুনিক ওয়েব প্রযুক্তিতে দক্ষতার সাথে অসাধারণ ওয়েবসাইট এবং শক্তিশালী ওয়েব অ্যাপ্লিকেশন তৈরি করি। আসুন একসাথে অসাধারণ কিছু তৈরি করি।',
    'hero.yearsExp': 'বছরের অভিজ্ঞতা',
    'hero.projects': 'প্রজেক্ট সম্পন্ন',
    'hero.clients': 'সন্তুষ্ট ক্লায়েন্ট',
    'hero.viewPortfolio': 'পোর্টফোলিও দেখুন',
    'hero.letsTalk': 'কথা বলুন',

    // About
    'about.title': 'আমার',
    'about.me': 'সম্পর্কে',
    'about.subtitle': 'ব্যতিক্রমী ডিজিটাল অভিজ্ঞতা তৈরিতে নিবেদিত আবেগী ওয়েব ডেভেলপার',
    'about.whoAmI': 'আমি কে?',
    'about.description1': 'আমি একজন আবেগী এবং নিবেদিত ওয়েব ডেভেলপার যার ২ বছরেরও বেশি পেশাদার অভিজ্ঞতা রয়েছে অসাধারণ ওয়েবসাইট এবং শক্তিশালী ওয়েব অ্যাপ্লিকেশন তৈরিতে। ডিজিটাল জগত কীভাবে কাজ করে তা বোঝার কৌতূহল থেকে আমার ওয়েব ডেভেলপমেন্টের যাত্রা শুরু হয়েছিল।',
    'about.description2': 'ওয়ার্ডপ্রেস, রিঅ্যাক্টজেএস এবং আধুনিক ফ্রন্টএন্ড প্রযুক্তিতে বিশেষজ্ঞ, আমি সফলভাবে ৯৫+ প্রজেক্ট সম্পন্ন করেছি যার মধ্যে রয়েছে ই-কমার্স প্ল্যাটফর্ম থেকে কর্পোরেট ওয়েবসাইট এবং উচ্চ-রূপান্তরকারী ল্যান্ডিং পেজ।',
    'about.description3': 'পূর্বে কাজ করেছি',
    'about.and': 'এবং',
    'about.description4': '-এ, যেখানে আমি ক্লায়েন্ট-কেন্দ্রিক সমাধান প্রদানে আমার দক্ষতা উন্নত করেছি। আমি পরিষ্কার, রক্ষণাবেক্ষণযোগ্য কোড লেখায় এবং স্থায়ী ছাপ ফেলে এমন ব্যবহারকারী অভিজ্ঞতা তৈরিতে বিশ্বাস করি।',
    'about.experience': 'কাজের',
    'about.experienceHighlight': 'অভিজ্ঞতা',
    'about.technologies': 'প্রযুক্তি',
    'about.webDeveloper': 'ওয়েব ডেভেলপার',
    'about.juniorWebDeveloper': 'জুনিয়র ওয়েব ডেভেলপার',
    'about.fastItDesc': 'WooCommerce এবং CartFlows ব্যবহার করে ওয়ার্ডপ্রেস ওয়েবসাইট, ল্যান্ডিং পেজ এবং ই-কমার্স সমাধান তৈরি করেছি। চমৎকার ক্লায়েন্ট সন্তুষ্টি সহ উচ্চ-মানের প্রজেক্ট সরবরাহ করেছি।',
    'about.topperItDesc': 'রেসপন্সিভ ওয়েবসাইট তৈরি এবং ইন্ডাস্ট্রি বেস্ট প্র্যাক্টিস শেখার মাধ্যমে আমার পেশাদার যাত্রা শুরু করেছি। HTML, CSS, JavaScript এবং WordPress ব্যবহার করে বিভিন্ন ক্লায়েন্ট প্রজেক্টে কাজ করেছি।',

    // Skills
    'skills.title': 'আমার',
    'skills.titleHighlight': 'দক্ষতা',
    'skills.subtitle': 'আমার ক্যারিয়ার জুড়ে যে প্রযুক্তি এবং টুলগুলো আয়ত্ত করেছি',
    'skills.wordpress': 'ওয়ার্ডপ্রেস দক্ষতা',
    'skills.react': 'রিঅ্যাক্ট দক্ষতা',
    'skills.ecommerce': 'ই-কমার্স দক্ষতা',

    // WordPress expertise items
    'wp.theme': 'কাস্টম থিম ডেভেলপমেন্ট',
    'wp.plugin': 'প্লাগইন কাস্টমাইজেশন',
    'wp.elementor': 'এলিমেন্টর প্রো বিশেষজ্ঞ',
    'wp.woo': 'WooCommerce সেটআপ ও কাস্টমাইজেশন',
    'wp.cartflows': 'CartFlows ফানেল বিল্ডিং',
    'wp.speed': 'স্পিড অপ্টিমাইজেশন',
    'wp.security': 'সিকিউরিটি হার্ডেনিং',
    'wp.seo': 'SEO অপ্টিমাইজেশন',
    'wp.responsive': 'রেসপন্সিভ ডিজাইন',
    'wp.migration': 'মাইগ্রেশন ও ব্যাকআপ',

    // React expertise items
    'react.hooks': 'React Hooks ও Context',
    'react.router': 'React Router DOM',
    'react.state': 'State Management (Redux/Zustand)',
    'react.ts': 'TypeScript ইন্টিগ্রেশন',
    'react.tailwind': 'Tailwind CSS স্টাইলিং',
    'react.api': 'API ইন্টিগ্রেশন',
    'react.components': 'কম্পোনেন্ট আর্কিটেকচার',
    'react.performance': 'পারফরম্যান্স অপ্টিমাইজেশন',
    'react.testing': 'টেস্টিং (Jest/RTL)',
    'react.build': 'মডার্ন বিল্ড টুলস',

    // Ecommerce expertise items
    'ecom.store': 'WooCommerce স্টোর সেটআপ',
    'ecom.payment': 'পেমেন্ট গেটওয়ে ইন্টিগ্রেশন',
    'ecom.product': 'প্রোডাক্ট ম্যানেজমেন্ট',
    'ecom.inventory': 'ইনভেন্টরি ম্যানেজমেন্ট',
    'ecom.shipping': 'শিপিং কনফিগারেশন',
    'ecom.funnel': 'সেলস ফানেল তৈরি',
    'ecom.cartflows': 'CartFlows অপ্টিমাইজেশন',
    'ecom.conversion': 'কনভার্সন রেট অপ্টিমাইজেশন',
    'ecom.order': 'অর্ডার ম্যানেজমেন্ট',
    'ecom.analytics': 'কাস্টমার অ্যানালিটিক্স',

    // Portfolio
    'portfolio.title': 'আমার',
    'portfolio.titleHighlight': 'পোর্টফোলিও',
    'portfolio.subtitle': 'আমার সেরা কাজ এবং সফল প্রজেক্টের প্রদর্শনী',
    'portfolio.all': 'সব প্রজেক্ট',
    'portfolio.websites': 'ওয়েবসাইট',
    'portfolio.landingPages': 'ল্যান্ডিং পেজ',
    'portfolio.website': 'ওয়েবসাইট',
    'portfolio.landingPage': 'ল্যান্ডিং পেজ',

    // Services
    'services.title': 'আমার',
    'services.titleHighlight': 'সেবা',
    'services.subtitle': 'আপনার দৃষ্টিভঙ্গি বাস্তবে আনতে পেশাদার ওয়েব ডেভেলপমেন্ট সেবা',
    'service.wordpress': 'ওয়ার্ডপ্রেস ডেভেলপমেন্ট',
    'service.wordpressDesc': 'প্রিমিয়াম থিম, প্লাগইন এবং আপনার প্রয়োজন অনুযায়ী সম্পূর্ণ কার্যকারিতা সহ কাস্টম ওয়ার্ডপ্রেস ওয়েবসাইট।',
    'service.ecommerce': 'ই-কমার্স সমাধান',
    'service.ecommerceDesc': 'পেমেন্ট গেটওয়ে, ইনভেন্টরি ম্যানেজমেন্ট এবং CartFlows ব্যবহার করে সেলস ফানেল সহ সম্পূর্ণ WooCommerce স্টোর।',
    'service.landing': 'ল্যান্ডিং পেজ ডিজাইন',
    'service.landingDesc': 'অপ্টিমাইজড ইউজার এক্সপেরিয়েন্স সহ লিড ক্যাপচার এবং সেলস বাড়াতে ডিজাইন করা উচ্চ-রূপান্তরকারী ল্যান্ডিং পেজ।',
    'service.uiux': 'UI/UX ডিজাইন',
    'service.uiuxDesc': 'এলিমেন্টর প্রো এবং আধুনিক ডিজাইন নীতি দিয়ে ডিজাইন করা সুন্দর, স্বজ্ঞাত ইন্টারফেস।',
    'service.react': 'রিঅ্যাক্ট ডেভেলপমেন্ট',
    'service.reactDesc': 'TypeScript, state management এবং রেসপন্সিভ Tailwind CSS স্টাইলিং সহ আধুনিক React অ্যাপ্লিকেশন।',
    'service.maintenance': 'ওয়েবসাইট রক্ষণাবেক্ষণ',
    'service.maintenanceDesc': 'চলমান সাপোর্ট, আপডেট, ব্যাকআপ, সিকিউরিটি মনিটরিং এবং পারফরম্যান্স অপ্টিমাইজেশন সেবা।',
    'service.seo': 'SEO অপ্টিমাইজেশন',
    'service.seoDesc': 'আপনার সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করতে On-page SEO, স্পিড অপ্টিমাইজেশন এবং টেকনিক্যাল SEO।',
    'service.responsive': 'রেসপন্সিভ ডিজাইন',
    'service.responsiveDesc': 'মোবাইল-ফার্স্ট, সম্পূর্ণ রেসপন্সিভ ওয়েবসাইট যা সব ডিভাইস এবং স্ক্রিন সাইজে পারফেক্ট দেখায়।',

    // Pricing
    'pricing.title': 'মূল্য',
    'pricing.titleHighlight': 'প্যাকেজ',
    'pricing.subtitle': 'প্রতিটি বাজেট এবং প্রজেক্ট সাইজের জন্য স্বচ্ছ মূল্য',
    'pricing.starter': 'স্টার্টার',
    'pricing.starterDesc': 'ছোট ব্যবসা এবং ব্যক্তিগত প্রজেক্টের জন্য পারফেক্ট',
    'pricing.business': 'বিজনেস',
    'pricing.businessDesc': 'বর্ধমান ব্যবসা এবং ই-কমার্সের জন্য আদর্শ',
    'pricing.professional': 'প্রফেশনাল',
    'pricing.professionalDesc': 'এন্টারপ্রাইজ এবং জটিল প্রজেক্টের জন্য সম্পূর্ণ সমাধান',
    'pricing.popular': 'সবচেয়ে জনপ্রিয়',
    'pricing.project': '/প্রজেক্ট',
    'pricing.getStarted': 'শুরু করুন',

    // Pricing features
    'price.single': 'সিঙ্গেল পেজ ওয়েবসাইট',
    'price.responsive': 'রেসপন্সিভ ডিজাইন',
    'price.basicSeo': 'বেসিক SEO সেটআপ',
    'price.contactForm': 'কন্টাক্ট ফর্ম',
    'price.revisions3': '৩টি রিভিশন',
    'price.delivery7': '৭ দিনে ডেলিভারি',
    'price.support30': '৩০ দিনের সাপোর্ট',
    'price.multiPage': 'মাল্টি-পেজ ওয়েবসাইট (১০ পর্যন্ত)',
    'price.woocommerce': 'WooCommerce ইন্টিগ্রেশন',
    'price.premiumTheme': 'প্রিমিয়াম থিম কাস্টমাইজেশন',
    'price.advancedSeo': 'অ্যাডভান্সড SEO অপ্টিমাইজেশন',
    'price.speed': 'স্পিড অপ্টিমাইজেশন',
    'price.revisions5': '৫টি রিভিশন',
    'price.delivery14': '১৪ দিনে ডেলিভারি',
    'price.support60': '৬০ দিনের সাপোর্ট',
    'price.unlimited': 'আনলিমিটেড পেজ',
    'price.fullEcommerce': 'সম্পূর্ণ ই-কমার্স সেটআপ',
    'price.customPlugin': 'কাস্টম প্লাগইন ডেভেলপমেন্ট',
    'price.cartflows': 'CartFlows সেলস ফানেল',
    'price.premiumSeo': 'প্রিমিয়াম SEO প্যাকেজ',
    'price.performance': 'পারফরম্যান্স অপ্টিমাইজেশন',
    'price.unlimitedRevisions': 'আনলিমিটেড রিভিশন',
    'price.delivery30': '৩০ দিনে ডেলিভারি',
    'price.support90': '৯০ দিনের সাপোর্ট',
    'price.priority': 'প্রায়োরিটি সাপোর্ট',

    // Testimonials
    'testimonials.title': 'ক্লায়েন্ট',
    'testimonials.titleHighlight': 'রিভিউ',
    'testimonials.subtitle': 'আমার সাথে কাজ করার বিষয়ে আমার ক্লায়েন্টরা কী বলেন',

    // Certifications
    'cert.title': 'আমার',
    'cert.titleHighlight': 'সার্টিফিকেশন',
    'cert.subtitle': 'পেশাদার সার্টিফিকেশন এবং অর্জন',
    'cert.more': 'আরও সার্টিফিকেশন শীঘ্রই আসছে...',
    'cert.webDev': 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট',

    // Gallery
    'gallery.title': 'সাফল্যের',
    'gallery.titleHighlight': 'গ্যালারি',
    'gallery.subtitle': 'আমার সফল প্রজেক্টগুলোর একটি ভিজুয়াল যাত্রা',

    // Sponsors
    'sponsors.subtitle': 'বিশ্বস্ত প্রযুক্তি ও অংশীদার',

    // CTA
    'cta.title': 'আসুন একসাথে কাজ করি',
    'cta.description': 'আপনার দৃষ্টিভঙ্গি বাস্তবে আনতে প্রস্তুত? আসুন একসাথে অসাধারণ কিছু তৈরি করি। এটি একটি ওয়েবসাইট, ই-কমার্স স্টোর, বা কাস্টম ওয়েব অ্যাপ্লিকেশন হোক, আমি আপনাকে সাফল্য অর্জনে সাহায্য করতে এখানে আছি।',
    'cta.button': 'আপনার প্রজেক্ট শুরু করুন',

    // Contact
    'contact.title': 'যোগাযোগ',
    'contact.titleHighlight': 'করুন',
    'contact.subtitle': 'মনে একটি প্রজেক্ট আছে? আসুন আলোচনা করি কীভাবে আমি আপনাকে সাহায্য করতে পারি',
    'contact.info': 'যোগাযোগের তথ্য',
    'contact.infoDesc': 'এই চ্যানেলগুলোর যেকোনো একটির মাধ্যমে আমার সাথে যোগাযোগ করতে পারেন। যত তাড়াতাড়ি সম্ভব আমি আপনার সাথে যোগাযোগ করব!',
    'contact.email': 'ইমেইল',
    'contact.phone': 'ফোন',
    'contact.location': 'অবস্থান',
    'contact.bangladesh': 'বাংলাদেশ',
    'contact.name': 'নাম',
    'contact.namePlaceholder': 'আপনার নাম',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'বিষয়',
    'contact.subjectPlaceholder': 'প্রজেক্ট আলোচনা',
    'contact.message': 'বার্তা',
    'contact.messagePlaceholder': 'আপনার প্রজেক্ট সম্পর্কে বলুন...',
    'contact.send': 'বার্তা পাঠান',

    // Footer
    'footer.description': 'ওয়ার্ডপ্রেস, রিঅ্যাক্ট এবং আধুনিক ওয়েব প্রযুক্তিতে বিশেষজ্ঞ পেশাদার ওয়েব ডেভেলপার। আসুন একসাথে অসাধারণ কিছু তৈরি করি।',
    'footer.quickLinks': 'দ্রুত লিংক',
    'footer.services': 'সেবা',
    'footer.contact': 'যোগাযোগ',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
    'footer.madeWith': 'ভালোবাসায় তৈরি',
    'footer.backToTop': 'উপরে ফিরে যান',
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
