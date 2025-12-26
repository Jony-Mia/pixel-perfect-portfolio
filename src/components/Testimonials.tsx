import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
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
  {
    name: 'Tanveer Razwan',
    company: 'Spreneurs',
    role: 'Owner',
    image: testimonial1,
    rating: 5,
    text: 'Exceptional work! Jony delivered our e-commerce website beyond expectations. The attention to detail and professional approach made the entire process smooth. Highly recommended!',
  },
  {
    name: 'Md Riyad',
    company: 'Glowstar',
    role: 'Owner',
    image: testimonial2,
    rating: 5,
    text: 'Working with Jony was a great experience. He understood our requirements perfectly and delivered a stunning landing page that significantly increased our conversions.',
  },
  {
    name: 'Abrar Rashid',
    company: 'Homely Living',
    role: 'Owner',
    image: testimonial3,
    rating: 5,
    text: 'Professional, creative, and incredibly skilled. Jony built our complete e-commerce store with WooCommerce and the results have been amazing. Sales increased by 150%!',
  },
  {
    name: 'Abrar Islam',
    company: 'Abrar Rashid',
    role: 'Owner',
    image: testimonial4,
    rating: 5,
    text: 'Fast delivery, excellent communication, and top-notch quality. Jony is my go-to developer for all WordPress projects. Already completed 5 projects together!',
  },
  {
    name: 'Mahadi Akash',
    company: 'Ki Keno Kivabe Academy',
    role: 'Owner',
    image: testimonial5,
    rating: 5,
    text: 'Our educational platform looks absolutely stunning! Jony has an eye for design and his technical skills are exceptional. The website runs super fast and smooth.',
  },
  {
    name: 'Md Mukter Hossain',
    company: 'Qiblaa',
    role: 'Owner',
    image: testimonial6,
    rating: 5,
    text: 'Best web developer I\'ve worked with! Delivered our Islamic e-commerce store with all the features we needed. Great communication and timely delivery. Highly satisfied!',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
    <section id="testimonials" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 testimonial-content">
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
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card p-6 h-full">
                  <Quote className="text-primary/30 mb-4" size={40} />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}, {testimonial.company}
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
