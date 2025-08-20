import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { CheckCircle, Package, Coffee, Droplets, ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroApartment from '@/assets/hero-apartment.jpg';

const Consommables = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Hygiène et salle de bain",
      description: "Tous les produits essentiels pour l'hygiène de vos hôtes"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Accueil et cuisine",
      description: "Produits d'accueil pour un séjour mémorable"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Entretien de base",
      description: "Produits de première nécessité pour l'entretien"
    }
  ];

  const hygieneProduits = [
    "Papier toilette (qualité supérieure)",
    "Essuie-tout",
    "Savons et gels douche",
    "Shampooings et après-shampooings",
    "Crème hydratante",
    "Dentifrice et brosses à dents",
    "Rasoirs jetables",
    "Mouchoirs en papier"
  ];

  const accueilProduits = [
    "Café en grains ou moulu",
    "Thé et tisanes variés",
    "Sucre et édulcorants",
    "Biscuits d'accueil",
    "Eau en bouteille",
    "Capsules de café (si machine)",
    "Lait longue conservation",
    "Sel, poivre, huile de base"
  ];

  const entretienProduits = [
    "Liquide vaisselle",
    "Éponges et lavettes",
    "Sacs poubelle",
    "Produit multi-surfaces",
    "Produit vitres",
    "Désinfectant",
    "Papier aluminium",
    "Film plastique"
  ];

  const advantages = [
    {
      title: "Approvisionnement régulier",
      description: "Nous vérifions et renouvelons automatiquement les stocks entre chaque séjour."
    },
    {
      title: "Produits de qualité",
      description: "Sélection rigoureuse de produits de marques reconnues pour satisfaire vos hôtes."
    },
    {
      title: "Gestion optimisée",
      description: "Suivi des consommations et adaptation des quantités selon l'occupation."
    },
    {
      title: "Service personnalisé",
      description: "Adaptation de la liste de produits selon vos préférences et votre budget."
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
            <Package className="w-16 h-16 text-primary" />
          </div>
          <h1 className="font-title text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Fourniture de
            <span className="block text-primary">Consommables Essentiels</span>
          </h1>
          <p className="font-body text-xl text-muted-foreground animate-fade-in">
            Réapprovisionnement complet en produits d'accueil et de première nécessité
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="service-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="font-title text-xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="luxury-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos gammes de produits
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Sélection complète pour le confort et la satisfaction de vos hôtes
            </p>
          </div>

          <div className="space-y-12">
            {/* Hygiène */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-primary mr-3" />
                  <h3 className="font-title text-2xl font-bold text-foreground">
                    Hygiène et salle de bain
                  </h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {hygieneProduits.map((produit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border/50">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{produit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accueil */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Coffee className="w-8 h-8 text-primary mr-3" />
                  <h3 className="font-title text-2xl font-bold text-foreground">
                    Accueil et cuisine
                  </h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {accueilProduits.map((produit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border/50">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{produit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Entretien */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-primary mr-3" />
                  <h3 className="font-title text-2xl font-bold text-foreground">
                    Entretien de base
                  </h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {entretienProduits.map((produit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border/50">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{produit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-4">
                Les avantages de notre service
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Un service complet qui vous fait gagner du temps et de l'argent
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="p-6 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-elegant animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="font-title text-xl font-bold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="luxury-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 bg-primary/5 rounded-xl border border-primary/20">
              <h3 className="font-title text-2xl font-bold text-primary mb-4">
                Tarification transparente
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Le coût des consommables est facturé au prix d'achat, sans marge cachée. 
                Vous payez uniquement le prix réel des produits plus nos frais de service pour la gestion et l'approvisionnement.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <span>✓ Prix d'achat transparent</span>
                <span>✓ Pas de marge sur les produits</span>
                <span>✓ Facture détaillée</span>
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
              Simplifiez la gestion de vos consommables
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Contactez-nous pour personnaliser votre liste de consommables et recevoir un devis adapté à vos besoins.
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

export default Consommables;