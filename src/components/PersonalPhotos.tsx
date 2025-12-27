import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Placeholder personal photos - you can replace with actual photos
const personalPhotos = [
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', alt: 'Personal Photo 1' },
  { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop', alt: 'Personal Photo 2' },
  { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop', alt: 'Personal Photo 3' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', alt: 'Personal Photo 4' },
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', alt: 'Personal Photo 5' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', alt: 'Personal Photo 6' },
];

const PersonalPhotos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.personal-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
    <>
      <section ref={sectionRef} className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 personal-content">
            <h2 className="section-title">
              Personal <span className="text-gradient">Photos</span>
            </h2>
            <p className="section-subtitle">
              A glimpse into my life beyond coding
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 personal-content">
            {personalPhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedPhoto(photo.src)}
                className="aspect-square rounded-2xl overflow-hidden professional-card border-2 border-transparent hover:border-primary/50 transition-all duration-300 group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={selectedPhoto.replace('w=400&h=400', 'w=800&h=800')}
            alt="Selected photo"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PersonalPhotos;
