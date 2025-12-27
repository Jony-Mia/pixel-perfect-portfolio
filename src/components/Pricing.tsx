import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    description: 'Perfect for small businesses and personal projects',
    features: [
      'Single Page Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
      '3 Revisions',
      '7 Days Delivery',
      '30 Days Support',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '$599',
    description: 'Ideal for growing businesses and e-commerce',
    features: [
      'Multi-page Website (up to 10)',
      'WooCommerce Integration',
      'Premium Theme Customization',
      'Advanced SEO Optimization',
      'Speed Optimization',
      '5 Revisions',
      '14 Days Delivery',
      '60 Days Support',
    ],
    popular: true,
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Complete solution for enterprises and complex projects',
    features: [
      'Unlimited Pages',
      'Full E-commerce Setup',
      'Custom Plugin Development',
      'CartFlows Sales Funnels',
      'Premium SEO Package',
      'Performance Optimization',
      'Unlimited Revisions',
      '30 Days Delivery',
      '90 Days Support',
      'Priority Support',
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
                  <span className="bg-gradient-primary text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
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
