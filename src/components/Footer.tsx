import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-up">
            <div className="mb-4">
              <img 
                src="/brand-uploads/3a1513b6-4169-4bc6-b946-89480b3739de.png" 
                alt="Grace Azur Services" 
                className="h-[90px] w-auto"
              />
            </div>
            <p className="font-body text-gray-600 leading-relaxed">
              Des services de nettoyage dignes d'un hôtel, pour vos hôtes et vos espaces. 
              Excellence, rigueur et discrétion sur la Côte d'Azur.
            </p>
          </div>

          {/* Contact */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-title text-xl font-bold mb-4 text-gray-800">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-gray-600">0 765 169 106</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-gray-600">graceazurservices@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="font-body text-gray-600">Côte d'Azur - Alpes-Maritimes</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-title text-xl font-bold mb-4 text-gray-800">Nos Services</h3>
            <ul className="space-y-2 font-body text-gray-600">
              <li>• Nettoyage Airbnb</li>
              <li>• Gestion du linge</li>
              <li>• Nettoyage particuliers</li>
              <li>• Fourniture consommables</li>
              <li>• Entretien régulier</li>
              <li>• Nettoyage après travaux</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="text-center">
            <p className="font-body text-gray-500 text-sm">
              © {currentYear} Grace Azur Services. Tous droits réservés.
            </p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <a href="/politique-confidentialite" className="font-body text-gray-500 text-sm hover:text-primary transition-smooth">
                Politique de confidentialité
              </a>
              <span className="text-gray-400">|</span>
              <a href="/mentions-legales" className="font-body text-gray-500 text-sm hover:text-primary transition-smooth">
                Mentions légales
              </a>
              <span className="text-gray-400">|</span>
              <p className="font-body text-gray-500 text-sm flex items-center">
                Créé avec <Heart className="w-4 h-4 text-red-400 mx-1" /> sur la Côte d'Azur
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;