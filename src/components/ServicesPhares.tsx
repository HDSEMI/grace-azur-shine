import { Home, Shirt, Package, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPhares = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Nettoyage professionnel Airbnb",
      description: "Service complet adapté aux locations saisonnières : nettoyage entre chaque hôte, vérification qualité, remise en état impeccable.",
      features: [
        "Intervention rapide entre les séjours",
        "Check-list complète de l'appartement", 
        "Nettoyage sols, cuisine, salle de bain",
        "Standards hôteliers respectés"
      ],
      cta: "Devis Airbnb"
    },
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Gestion du linge et literie",
      description: "Collecte, lavage, repassage et remise en place des draps, serviettes et linge de maison avec un soin professionnel.",
      features: [
        "Collecte et livraison incluses",
        "Lavage haute température désinfectant",
        "Repassage et pliage soigné",
        "Remise en place dans l'hébergement"
      ],
      cta: "Service linge"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Fourniture de consommables essentiels",
      description: "Réapprovisionnement complet en produits d'accueil : papier toilette, savons, café, thé et produits de première nécessité.",
      features: [
        "Papier toilette et essuie-tout",
        "Savons et shampooings de qualité",
        "Café, thé, sucre pour l'accueil",
        "Produits ménagers de base"
      ],
      cta: "Liste complète"
    }
  ];

  return (
    <section id="services" className="luxury-section bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos services phares
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
            Spécialiste du nettoyage Airbnb sur la Côte d'Azur : ménage location saisonnière, 
            gestion du linge et réapprovisionnement à Antibes, Cannes et alentours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group hover:scale-105 transition-elegant animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary/20 transition-elegant">
                  {service.icon}
                </div>
                <h3 className="font-title text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={() => {
                    if (index === 0) window.location.href = '/nettoyage-airbnb';
                    else if (index === 1) window.location.href = '/gestion-linge';
                    else if (index === 2) window.location.href = '/consommables';
                  }}
                  variant="secondary" 
                  className="flex-1"
                >
                  En savoir plus
                </Button>
                <Button onClick={scrollToContact} variant="outline" className="btn-outline flex-1 group">
                  {service.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-up">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-title text-2xl font-bold text-primary mb-4">
              Service complet Airbnb
            </h3>
            <p className="font-body text-muted-foreground mb-6 text-lg">
              Combine nettoyage + linge + consommables pour un service clé en main. 
              Votre logement prêt à accueillir vos prochains hôtes !
            </p>
            <Button onClick={scrollToContact} className="btn-hero">
              Devis service complet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPhares;