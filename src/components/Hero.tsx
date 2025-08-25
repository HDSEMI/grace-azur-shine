import { ArrowRight, Sparkles, Home, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroApartment from '@/assets/hero-apartment.jpg';

const Hero = () => {
  console.log('Hero component rendering');
  
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
          {/* Main Heading - SEO H1 - Responsive mobile */}
          <h1 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="block text-white mb-2 md:mb-3">Service de Nettoyage</span>
            <span className="block text-primary-light mb-2 md:mb-3">Airbnb & Particuliers</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-body font-light mt-2 md:mt-4 text-white/90">
              sur la Côte d'Azur
            </span>
          </h1>

          {/* Slogan - Responsive mobile */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body font-light mb-6 md:mb-8 text-white/90 leading-relaxed px-2">
            Nettoyage professionnel à Antibes, Cannes et Côte d'Azur
            <br className="hidden sm:block" />
            <span className="font-medium block sm:inline mt-1 sm:mt-0">Qualité hôtelière • Gestion du linge • Consommables inclus</span>
          </p>

          {/* Key Features - Responsive mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 md:mb-10 text-white/80 px-2">
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-body">Qualité hôtelière</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-body">Spécialiste Airbnb</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-body">Service premium</span>
            </div>
          </div>

          {/* CTA Button - Responsive mobile */}
          <Button 
            onClick={scrollToContact}
            className="btn-hero text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 group shadow-hover w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Indicators - Responsive mobile */}
          <div className="mt-8 md:mt-12 text-white/70 font-body px-2">
            <p className="text-xs sm:text-sm">Côte d'Azur • Service 7j/7 • Intervention rapide</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;