import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Placeholder personal photos - you can replace with actual photos
const personalPhotos = [
  // { src: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-1/502376387_580222371795217_7468370731717751658_n.jpg?stp=c111.111.858.858a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=WGYKx9PIxRkQ7kNvwHU-Jv6&_nc_oc=AdkcWob1YxN6kBD70r0_OiI9c6xwGVY6-70B2vpr3GsdGp5i0591fm-QC9PNvYMBd3U&_nc_zt=24&_nc_ht=scontent.fdac187-1.fna&_nc_gid=09KROb716gmWScBQ2a5mAg&oh=00_Aft67FxZ3A-QPbZomWDSg_bz29chJrcIdsjQVU_0RMjNzA&oe=698E99B2', alt: 'Personal Photo 1' },


  { src: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-6/597787973_724445007372952_6547800389915131382_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KpmOddzwrl0Q7kNvwFTsArJ&_nc_oc=Adn-2o7A1mQLCRkKknRQ9WhnfFBd22zCdPDZzWo92i75XEQItQQ1lG505ZF5pnP54wE&_nc_zt=23&_nc_ht=scontent.fdac187-1.fna&_nc_gid=lZKkxHWIXlHIgvF4PFU8Gg&oh=00_AfvLLbRebndh5ZmhyXQeegHy2Qku5Fs5LFs7wVkm4g6XWw&oe=698E9852', alt: 'Personal Photo 2' },

  { src: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-6/550681845_652520447898742_2463063944442090996_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3qpou9H6uXAQ7kNvwHXL5pX&_nc_oc=AdmkmK6UTryNK4nGLHv04r3hP9DU2b_K7_wXFKrIWVot-G6rh5v-EIa1NDh3IB3IbIU&_nc_zt=23&_nc_ht=scontent.fdac187-1.fna&_nc_gid=8VCpqJrzEMVCRGe6yEJ_nw&oh=00_Afvaberu-sLwdXVwHNZCg17QzQYJCVgSxoxI0J7eUZpB-g&oe=698EA7CC', alt: 'Personal Photo 3' },

  { src: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-6/549702308_652524194565034_7131461599180223896_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5lpA2Z5TwlMQ7kNvwEieJFF&_nc_oc=AdlqkiL7C2ZxgFODTDhMnMG7AqqaEXBBt5LkcYNBqyqiVzjZypWfp73jQIzzuXjPiFQ&_nc_zt=23&_nc_ht=scontent.fdac187-1.fna&_nc_gid=M4y8zoef6o6ldrnQ0NBkwg&oh=00_Aftz7YigctZ6sU4I7ejCQ3kWDYVOJUCSYB_LzJsU2ta2qQ&oe=698EACE9', alt: 'Personal Photo 4' },

  { src: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-6/481679477_496968886787233_1013159031139399845_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jJSRIxuC3sIQ7kNvwHV24Lk&_nc_oc=AdkPDhzm4qMXhVK68vjwjdRKoNVx4CZE24_Q0pdpP4W4FRX_5g3b766f_XAKeBjY3K0&_nc_zt=23&_nc_ht=scontent.fdac187-1.fna&_nc_gid=Pu9Il6UkkwS8s3MF4jJLzQ&oh=00_AfvGY3x73B9xlOeSCT1zIg-rmXHxMTAJwhyamWd16W_n6A&oe=698E976C', alt: 'Personal Photo 5' },
  { src: 'https://scontent.fdac187-1.fna.fbcdn.net/v/t39.30808-6/480064557_485220267962095_7558511017176688998_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_bshKu84nncQ7kNvwEPIKYk&_nc_oc=AdkRonjd9vOSgKswHsR196I9HqPXzzWEzxRXn-dpe_Hn5YPizAXaS0M7Mq3j34EPRCo&_nc_zt=23&_nc_ht=scontent.fdac187-1.fna&_nc_gid=79Vj6yvbM4WG_NCvimRIpQ&oh=00_AfsHD-DUOqvdZcjyzHE0W8kKuEP-ccyvGW-AJi27iznXVg&oe=698E79CD', alt: 'Personal Photo 6' },
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 personal-content">
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
