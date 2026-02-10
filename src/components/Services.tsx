import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  // Globe, 
  // ShoppingCart, 
  // Rocket, 
  // Palette, 
  Code, 
  // Settings,
  // Search,
  // Smartphone
} from 'lucide-react';

import Globe from "@/assets/wordpress.png";
import ShoppingCart from "@/assets/shoppingcart.png";
import Rocket from '@/assets/landing-page.png'
import Palette from '@/assets/ui.png'
import React from '@/assets/react.png'
import Settings from '@/assets/repair.png'
import Search from '@/assets/seo.png'
import Smartphone from '@/assets/phone.png'



gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    Icon: Globe,
    title: 'WordPress Development',
    description: 'Custom WordPress websites with premium themes, plugins, and complete functionality tailored to your needs.',
  },
  {
    Icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete WooCommerce stores with payment gateways, inventory management, and sales funnels using CartFlows.',
  },
  {
    Icon: Rocket,
    title: 'Landing Page Design',
    description: 'High-converting landing pages designed to capture leads and drive sales with optimized user experience.',
  },
  {
    Icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with Elementor Pro and modern design principles.',
  },
  {
    Icon: React,
    title: 'React Development',
    description: 'Modern React applications with TypeScript, state management, and responsive Tailwind CSS styling.',
  },
  {
    Icon: Settings,
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, backups, security monitoring, and performance optimization services.',
  },
  {
    Icon: Search,
    title: 'SEO Optimization',
    description: 'On-page SEO, speed optimization, and technical SEO to improve your search engine rankings.',
  },
  {
    Icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first, fully responsive websites that look perfect on all devices and screen sizes.',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
    <section id="services" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Professional web development services to bring your vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* {services.map(({ icon: Icon, title, description }) => ( */}
          {services.map((icons) => (
            <div key={icons.title} className="service-card glass-card p-6 card-hover group">
              {/* <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md"> */}
              <div className="w-14 h-14 rounded-xl  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {/* <Icon className="text-white" size={24} /> */}
                <img src={`${icons.Icon}`} alt="" />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                {icons.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {icons.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
