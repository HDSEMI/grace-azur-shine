import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { CheckCircle, Clock, Shield, Star, Sparkles, ArrowRight, Home, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-airbnb-cleaning.jpg';

const NettoyageAirbnb = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Intervention rapide",
      description: "Entre 2 séjours, nous intervenons rapidement pour remettre votre logement en état impeccable."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Standards hôteliers",
      description: "Respect des protocoles de nettoyage professionnels pour garantir l'hygiène parfaite."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Contrôle qualité",
      description: "Check-list complète et vérification systématique avant l'arrivée des hôtes."
    }
  ];

  const detailedServices = [
    "Nettoyage complet de tous les sols (aspirateur, lavage, désinfection)",
    "Cuisine : plan de travail, électroménager, évier, placards",
    "Salle de bain : sanitaires, douche/baignoire, miroirs, carrelage",
    "Chambres : literie, surfaces, rangements",
    "Salon : meubles, télévision, télécommandes",
    "Entrée et couloirs",
    "Balcons et terrasses",
    "Vérification des équipements (Wi-Fi, climatisation, etc.)",
    "Contrôle des consommables",
    "État des lieux photographique"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Nettoyage professionnel Airbnb" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-title text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Nettoyage Professionnel Airbnb
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Service de conciergerie haut de gamme pour maximiser vos revenus locatifs
          </p>
          <Button onClick={scrollToContact} className="btn-hero bg-white text-primary hover:bg-white/90 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            Obtenir un devis gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <Home className="w-10 h-10" />
              </div>
              <h3 className="font-title text-xl font-bold text-foreground mb-2">+500 Logements</h3>
              <p className="font-body text-muted-foreground">Gérés avec excellence</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="font-title text-xl font-bold text-foreground mb-2">98% Satisfaction</h3>
              <p className="font-body text-muted-foreground">Note moyenne des hôtes</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="font-title text-xl font-bold text-foreground mb-2">Certifié</h3>
              <p className="font-body text-muted-foreground">Standards hôteliers</p>
            </div>
          </div>
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

      {/* Detailed Services */}
      <section className="luxury-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-4">
                Notre prestation complète
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Chaque intervention suit un protocole rigoureux pour garantir la satisfaction de vos hôtes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {detailedServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-elegant">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-8">
              Nos garanties
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  Disponibilité 7j/7
                </h3>
                <p className="font-body text-muted-foreground">
                  Nous nous adaptons aux check-out et check-in de vos hôtes, même le week-end et les jours fériés.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  Intervention rapide
                </h3>
                <p className="font-body text-muted-foreground">
                  Délai d'intervention optimal entre le départ d'un hôte et l'arrivée du suivant.
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
              Prêt à optimiser votre location Airbnb ?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons améliorer l'expérience de vos hôtes.
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

export default NettoyageAirbnb;