import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
