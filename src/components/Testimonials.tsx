import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote, Sparkles } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

import testimonial1 from '@/assets/testimonial-1.png';
import testimonial2 from '@/assets/testimonial-2.png';
import testimonial3 from '@/assets/testimonial-3.png';
import testimonial4 from '@/assets/testimonial-4.png';
import testimonial5 from '@/assets/testimonial-5.png';
import testimonial6 from '@/assets/testimonial-6.png';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: 'Tanveer Razwan', company: 'Spreneurs', role: 'Owner', image: testimonial1, rating: 5, text: 'Exceptional work! Jony delivered our e-commerce website beyond expectations. The attention to detail and professional approach made the entire process smooth. Highly recommended!' },
  { name: 'Md Riyad', company: 'Glowstar', role: 'Owner', image: testimonial2, rating: 5, text: 'Working with Jony was a great experience. He understood our requirements perfectly and delivered a stunning landing page that significantly increased our conversions.' },
  { name: 'Abrar Rashid', company: 'Homely Living', role: 'Owner', image: testimonial3, rating: 5, text: 'Professional, creative, and incredibly skilled. Jony built our complete e-commerce store with WooCommerce and the results have been amazing. Sales increased by 150%!' },
  { name: 'Abrar Islam', company: 'Abrar Rashid', role: 'Owner', image: testimonial4, rating: 5, text: 'Fast delivery, excellent communication, and top-notch quality. Jony is my go-to developer for all WordPress projects. Already completed 5 projects together!' },
  { name: 'Mahadi Akash', company: 'Ki Keno Kivabe Academy', role: 'Owner', image: testimonial5, rating: 5, text: 'Our educational platform looks absolutely stunning! Jony has an eye for design and his technical skills are exceptional. The website runs super fast and smooth.' },
  { name: 'Md Mukter Hossain', company: 'Qiblaa', role: 'Owner', image: testimonial6, rating: 5, text: "Best web developer I've worked with! Delivered our Islamic e-commerce store with all the features we needed. Great communication and timely delivery. Highly satisfied!" },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
           style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14 testimonial-content">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-5">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="section-title">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="section-subtitle">
            What my clients say about working with me
          </p>
        </div>

        <div className="testimonial-content">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 !overflow-visible"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative h-full rounded-2xl p-7 glass-card overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)] card-shimmer card-glow-border">
                  {/* Hover glow */}
                  <span
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10"
                    style={{ background: 'var(--gradient-glow)' }}
                  />

                  {/* Big quote */}
                  <div className="absolute -top-2 -right-2 opacity-10 group-hover:opacity-25 transition-opacity">
                    <Quote className="text-primary" size={90} strokeWidth={1.5} />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 relative">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500 drop-shadow-[0_0_6px_rgba(234,179,8,0.5)]" size={16} />
                    ))}
                    <span className="ml-2 text-xs text-muted-foreground">{t.rating}.0</span>
                  </div>

                  <p className="text-foreground/80 text-[15px] leading-relaxed mb-6 relative">
                    "{t.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-5" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div
                        className="absolute inset-0 rounded-full blur-md opacity-60"
                        style={{ background: 'var(--gradient-glow)' }}
                      />
                      <img
                        src={t.image}
                        alt={t.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-primary/40"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold truncate group-hover:text-primary transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-muted-foreground text-xs truncate">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
