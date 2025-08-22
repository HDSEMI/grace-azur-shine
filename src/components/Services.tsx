import { Home, Shirt, Package, Users, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import laundryService from '@/assets/laundry-service.jpg';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const airbnbServices = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Nettoyage complet",
      description: "Sols, salle de bain, cuisine, chambres - qualité hôtelière garantie"
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Gestion du linge",
      description: "Collecte, lavage, repassage et mise en place professionnelle"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Fourniture consommables",
      description: "Papier toilette, savon, café, produits d'accueil inclus"
    }
  ];

  const particulierServices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Nettoyage complet",
      description: "Maison ou appartement, prestation sur-mesure"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entretien régulier",
      description: "Hebdomadaire ou mensuel selon vos besoins"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Nettoyage après travaux",
      description: "Remise en état après rénovation ou construction"
    }
  ];

  return null;
};

export default Services;