import { ArrowRight, Sparkles, Home, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroApartment from '@/assets/hero-apartment.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroApartment})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Main Heading */}
          <h1 className="font-title text-5xl md:text-7xl font-bold mb-6">
            <span className="block">GRACE</span>
            <span className="block text-primary-light">AZUR</span>
            <span className="block text-3xl md:text-4xl font-body font-light mt-2">Services</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl font-body font-light mb-8 text-white/90 leading-relaxed">
            Des services de nettoyage dignes d'un hôtel,<br />
            <span className="font-medium">pour vos hôtes et vos espaces</span>
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-white/80">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-body">Qualité hôtelière</span>
            </div>
            <div className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span className="font-body">Spécialiste Airbnb</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="font-body">Service premium</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToContact}
            className="btn-hero text-xl px-10 py-6 group shadow-hover"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Indicators */}
          <div className="mt-12 text-white/70 font-body">
            <p className="text-sm">Côte d'Azur • Service 7j/7 • Intervention rapide</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;