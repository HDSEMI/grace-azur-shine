import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Environment from '@/components/Environment';
import Zone from '@/components/Zone';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Environment />
        <Zone />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
