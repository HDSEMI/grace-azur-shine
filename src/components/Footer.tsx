import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-up">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/3a1513b6-4169-4bc6-b946-89480b3739de.png" 
                alt="Grace Azur Services" 
                className="h-16 w-auto"
              />
            </div>
            <p className="font-body text-white/80 leading-relaxed">
              Des services de nettoyage dignes d'un hôtel, pour vos hôtes et vos espaces. 
              Excellence, rigueur et discrétion sur la Côte d'Azur.
            </p>
          </div>

          {/* Contact */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-title text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-light" />
                <span className="font-body text-white/80">06 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-light" />
                <span className="font-body text-white/80">contact@graceazur-services.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-light mt-0.5" />
                <span className="font-body text-white/80">Côte d'Azur - Alpes-Maritimes</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-title text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2 font-body text-white/80">
              <li>• Nettoyage Airbnb</li>
              <li>• Gestion du linge</li>
              <li>• Nettoyage particuliers</li>
              <li>• Fourniture consommables</li>
              <li>• Entretien régulier</li>
              <li>• Nettoyage après travaux</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-body text-white/60 text-sm">
            © {currentYear} Grace Azur Services. Tous droits réservés.
          </p>
          <p className="font-body text-white/60 text-sm mt-2 flex items-center justify-center">
            Créé avec <Heart className="w-4 h-4 text-red-400 mx-1" /> sur la Côte d'Azur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;