import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Achievements from '@/components/Achievements';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
