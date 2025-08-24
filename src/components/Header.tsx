import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import headerAirbnb from '@/assets/header-airbnb.jpg';
import headerLinge from '@/assets/header-linge.jpg';
import headerConsommables from '@/assets/header-consommables.jpg';
import headerTarifs from '@/assets/header-tarifs.jpg';
import headerAbout from '@/assets/header-about.jpg';
import heroApartment from '@/assets/hero-apartment.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getHeaderImage = () => {
    switch (location.pathname) {
      case '/nettoyage-airbnb':
        return headerAirbnb;
      case '/gestion-linge':
        return headerLinge;
      case '/consommables':
        return headerConsommables;
      case '/tarifs':
        return headerTarifs;
      case '/about':
        return headerAbout;
      default:
        return heroApartment; // Image par défaut pour la page d'accueil
    }
  };

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/nettoyage-airbnb':
        return 'Nettoyage Professionnel Airbnb';
      case '/gestion-linge':
        return 'Gestion du Linge et Literie';
      case '/consommables':
        return 'Fourniture de Consommables';
      case '/tarifs':
        return 'Nos Tarifs';
      case '/about':
        return 'À Propos de Grace Azur Services';
      default:
        return null; // Pas de titre pour la page d'accueil
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/30 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/3a1513b6-4169-4bc6-b946-89480b3739de.png" 
                alt="Grace Azur Services Logo" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="ml-3 hidden sm:block">
                <h1 className="font-heading text-lg font-semibold text-foreground">Grace Azur</h1>
                <p className="text-xs text-muted-foreground">Services Premium</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              <a href="/" className="font-body px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200">
                Accueil
              </a>
              <a href="/#services" className="font-body px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200">
                Services
              </a>
              <a href="/about" className="font-body px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200">
                À propos
              </a>
              <a href="/tarifs" className="font-body px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200">
                Tarifs
              </a>
              <a href="/#environnement" className="font-body px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200">
                Environnement
              </a>
              <a href="/#zone" className="font-body px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200">
                Zone d'intervention
              </a>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:06XXXXXXXX" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted/50 transition-all duration-200">
                <Phone size={18} className="text-primary" />
                <span className="font-body">06 XX XX XX XX</span>
              </a>
              <Button onClick={() => window.location.href = '/contact'} className="btn-hero shadow-lg">
                Obtenir un devis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="/" className="text-left font-body text-foreground hover:text-primary transition-smooth">
                  Accueil
                </a>
                <a href="/#services" className="text-left font-body text-foreground hover:text-primary transition-smooth">
                  Services
                </a>
                <a href="/about" className="text-left font-body text-foreground hover:text-primary transition-smooth">
                  À propos
                </a>
                <a href="/tarifs" className="text-left font-body text-foreground hover:text-primary transition-smooth">
                  Tarifs
                </a>
                <a href="/#environnement" className="text-left font-body text-foreground hover:text-primary transition-smooth">
                  Environnement
                </a>
                <a href="/#zone" className="text-left font-body text-foreground hover:text-primary transition-smooth">
                  Zone d'intervention
                </a>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
                  <Phone size={16} />
                  <span className="font-body">06 XX XX XX XX</span>
                </div>
                <Button onClick={() => window.location.href = '/contact'} className="btn-hero w-full">
                  Contact
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

    </>
  );
};

export default Header;