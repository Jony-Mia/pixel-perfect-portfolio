import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
import Sponsors from '@/components/Sponsors';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Pricing />
      <Testimonials />
      <Certifications />
      <Gallery />
      <Sponsors />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
