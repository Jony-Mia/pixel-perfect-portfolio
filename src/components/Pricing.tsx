import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: 'Landing Page',
    price: '$35',
    description: 'Perfect for small businesses and personal projects',
    features: [
      'Premium Design',
      'Responsive Design',
      'Premium Theme/Plugin',
      'WooCommerce Integration',
      'Pixel/GTM Setup',
      'Easy Order System',
      'Fake Order Preventtion',
      'Customer Data Collection',
      'Messeging System',
      'Technical Support',
      'Unlimited Order',
      '30 Days Support',
      '',
      'And More'
    ],
    popular: false,
  },
  {
    name: 'Ecommerce Website',
    price: '$120',
    description: 'Ideal for growing businesses and e-commerce',
    features: [
      'Easy Order System',
      'Complete Ecommerce Website',
      'Order Calculation',
      'Order management',
      'Business Automation',
      'Product Stock Management',
      'Unlimited Product Upload',
      'Unlimited Revisions',
      'One Click Invoice',
      'Social Media Connection',
      'Customer Funnel',
      'Technical Support',
      'Fake Order Prevention',
      'Problem free business'
    ],
    popular: true,
  },
  {
    name: 'Enterprenuer Support',
    price: '$199',
    description: 'Complete solution for enterprises and complex projects',
    features: [

      'Landing Pages Design',
      'E-commerce Website Design',
      'With Landing and Ecommerce Package',
      'Business Website Design',
      'Website Problem',
      'Website Secrrity',
      'Website Transfer',
      'Website Migration',
      'Web/Hosting Problem',
      'Speed Optimization',
   
      'CartFlows Sales Funnels',
      'Premium SEO Package',
      'Performance Optimization',
      'Unlimited Revisions',
     
    ],
    popular: false,
  },
];

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Pricing</span> Plans
          </h2>
          <p className="section-subtitle">
            Transparent pricing for every budget and project size
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative glass-card p-8 card-hover ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-black text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star size={14} /> Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">/project</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="text-primary flex-shrink-0" size={18} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-primary text-white hover:shadow-glow'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
