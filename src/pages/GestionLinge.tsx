import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { CheckCircle, Truck, Droplets, Zap, Shirt, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroApartment from '@/assets/hero-apartment.jpg';

const GestionLinge = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Collecte et livraison",
      description: "Nous récupérons et livrons votre linge directement sur site, sans contrainte pour vous."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Lavage professionnel",
      description: "Lavage haute température avec produits désinfectants pour une hygiène parfaite."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Repassage soigné",
      description: "Repassage et pliage professionnel pour un rendu impeccable."
    }
  ];

  const lingeItems = [
    "Draps et housses de couette",
    "Taies d'oreiller et oreillers",
    "Serviettes de bain et de toilette",
    "Torchons et essuie-mains",
    "Nappes et sets de table",
    "Couvertures et plaids",
    "Rideaux légers",
    "Linge de maison décoratif"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Collecte",
      description: "Récupération du linge sale directement dans votre logement"
    },
    {
      step: "2",
      title: "Tri et traitement",
      description: "Classification par type et couleur, traitement des taches"
    },
    {
      step: "3",
      title: "Lavage professionnel",
      description: "Lavage haute température avec désinfection complète"
    },
    {
      step: "4",
      title: "Repassage et pliage",
      description: "Repassage soigné et pliage selon vos préférences"
    },
    {
      step: "5",
      title: "Livraison et remise en place",
      description: "Livraison et installation directement dans les chambres"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroApartment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Shirt className="w-16 h-16 text-primary" />
          </div>
          <h1 className="font-title text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Gestion du Linge
            <span className="block text-primary">et Literie</span>
          </h1>
          <p className="font-body text-xl text-muted-foreground animate-fade-in">
            Service complet de collecte, lavage et remise en place pour un linge toujours impeccable
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="service-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="luxury-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-4">
              Notre processus en 5 étapes
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Un service clé en main pour un linge toujours parfait
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-elegant animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-title text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Linge Items */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-4">
                Types de linge traités
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Nous nous occupons de tous vos textiles avec le plus grand soin
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {lingeItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-elegant">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="luxury-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-8">
              Pourquoi choisir notre service ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  Gain de temps
                </h3>
                <p className="font-body text-muted-foreground">
                  Plus besoin de vous occuper du linge entre chaque séjour. Nous gérons tout de A à Z.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  Qualité garantie
                </h3>
                <p className="font-body text-muted-foreground">
                  Linge toujours impeccable grâce à notre équipement professionnel et notre savoir-faire.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  Hygiène parfaite
                </h3>
                <p className="font-body text-muted-foreground">
                  Lavage haute température et produits désinfectants pour une hygiène irréprochable.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  Service flexible
                </h3>
                <p className="font-body text-muted-foreground">
                  Adaptation à vos horaires et contraintes pour un service sur mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="luxury-section bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-6">
              Simplifiez la gestion de votre linge
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Contactez-nous pour découvrir notre service de gestion du linge et économisez un temps précieux.
            </p>
            <Button onClick={scrollToContact} className="btn-hero">
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </div>
  );
};

export default GestionLinge;