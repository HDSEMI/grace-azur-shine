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

  return (
    <section id="services" className="luxury-section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos Services
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Des prestations haut de gamme adaptées à vos besoins spécifiques
          </p>
        </div>

        {/* Services Airbnb */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h3 className="font-title text-3xl font-bold text-foreground mb-6">
                Pour Airbnb & locations saisonnières
              </h3>
              <p className="font-body text-muted-foreground mb-8 text-lg">
                Garantissez à vos hôtes une expérience digne des plus beaux hôtels de la Côte d'Azur.
              </p>
              
              <div className="space-y-6 mb-8">
                {airbnbServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-2">{service.title}</h4>
                      <p className="font-body text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button onClick={scrollToContact} className="btn-hero">
                Devis Airbnb
              </Button>
            </div>

            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src={laundryService}
                  alt="Service de linge professionnel" 
                  className="w-full h-96 object-cover rounded-xl shadow-card"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Particuliers */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="font-title text-3xl font-bold text-foreground mb-4">
              Pour Particuliers
            </h3>
            <p className="font-body text-muted-foreground text-lg">
              Un service de nettoyage personnalisé pour votre confort au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {particulierServices.map((service, index) => (
              <div key={index} className="service-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {service.icon}
                </div>
                <h4 className="font-body font-semibold text-foreground mb-3">{service.title}</h4>
                <p className="font-body text-muted-foreground mb-6">{service.description}</p>
                <Button onClick={scrollToContact} variant="outline" className="btn-outline">
                  En savoir plus
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;