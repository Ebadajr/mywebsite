import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExperienceCarousel from '@/components/ExperienceCarousel';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ExperienceCarousel />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}
