import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="font-title text-2xl font-bold">
              <span className="text-primary">GRACE</span>
              <span className="text-foreground ml-1">AZUR</span>
            </div>
            <div className="text-sm text-muted-foreground font-body">Services</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="font-body text-foreground hover:text-primary transition-smooth">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="font-body text-foreground hover:text-primary transition-smooth">
              Services
            </button>
            <a href="/about" className="font-body text-foreground hover:text-primary transition-smooth">
              À propos
            </a>
            <button onClick={() => scrollToSection('environnement')} className="font-body text-foreground hover:text-primary transition-smooth">
              Environnement
            </button>
            <button onClick={() => scrollToSection('zone')} className="font-body text-foreground hover:text-primary transition-smooth">
              Zone d'intervention
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone size={16} />
              <span className="font-body">06 XX XX XX XX</span>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="btn-hero">
              Contact
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
              <button onClick={() => scrollToSection('accueil')} className="text-left font-body text-foreground hover:text-primary transition-smooth">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left font-body text-foreground hover:text-primary transition-smooth">
                Services
              </button>
              <a href="/about" className="text-left font-body text-foreground hover:text-primary transition-smooth">
                À propos
              </a>
              <button onClick={() => scrollToSection('environnement')} className="text-left font-body text-foreground hover:text-primary transition-smooth">
                Environnement
              </button>
              <button onClick={() => scrollToSection('zone')} className="text-left font-body text-foreground hover:text-primary transition-smooth">
                Zone d'intervention
              </button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
                <Phone size={16} />
                <span className="font-body">06 XX XX XX XX</span>
              </div>
              <Button onClick={() => scrollToSection('contact')} className="btn-hero w-full">
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;