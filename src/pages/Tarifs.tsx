import { useState } from 'react';
import { Phone, Mail, MessageCircle, CheckCircle, Star, Users, Home, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroApartment from '@/assets/hero-apartment.jpg';

const Tarifs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    propertySize: '',
    frequency: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons sous 24h pour votre devis personnalisé.",
    });
    // Reset form
    setFormData({
      name: '', email: '', phone: '', serviceType: '', propertySize: '', frequency: '', message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    const element = document.getElementById('devis-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const advantages = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Flexibilité totale",
      description: "Tarification adaptée à la complexité et fréquence de vos besoins spécifiques"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Service personnalisé",
      description: "Plan de services élaboré selon vos exigences et votre budget"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparence garantie",
      description: "Devis clairs et détaillés, sans frais cachés ni mauvaises surprises"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Conseil expert",
      description: "Accompagnement professionnel pour choisir les meilleures solutions"
    }
  ];

  const serviceTypes = [
    { value: "airbnb", label: "Nettoyage Airbnb / Location saisonnière" },
    { value: "particulier", label: "Nettoyage pour particuliers" },
    { value: "complet", label: "Service complet (nettoyage + linge + consommables)" },
    { value: "regulier", label: "Entretien régulier" },
    { value: "ponctuel", label: "Nettoyage ponctuel" },
    { value: "travaux", label: "Nettoyage après travaux" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroApartment})` }}
          >
            <div className="absolute inset-0 gradient-hero" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h1 className="font-title text-4xl md:text-6xl font-bold text-white mb-6">
                Nos Tarifs
              </h1>
              <p className="font-body text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Une tarification transparente et personnalisée pour chaque client sur la Côte d'Azur
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center space-x-2 text-white/80">
                  <Home className="w-5 h-5" />
                  <span className="font-body font-medium">Devis sur mesure</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-body font-medium">Pas de frais cachés</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Star className="w-5 h-5" />
                  <span className="font-body font-medium">Réponse sous 24h</span>
                </div>
              </div>
              <Button onClick={scrollToForm} className="btn-hero">
                Obtenir mon devis gratuit
              </Button>
            </div>
          </div>
        </section>

        {/* Why Custom Pricing */}
        <section className="luxury-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une Tarification Transparente et Personnalisée
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Chez Grace Azur Services, nous comprenons que chaque client est unique, avec des besoins 
                spécifiques qui méritent une attention personnalisée. C'est pourquoi nous avons adopté 
                une approche sur mesure pour nos tarifications, garantissant que vous recevez exactement 
                le service dont vous avez besoin, au meilleur prix possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                    {advantage.icon}
                  </div>
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
        </section>

        {/* Why Contact Us */}
        <section className="luxury-section bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-up">
                Pourquoi nous Contacter Directement ?
              </h2>
              
              <div className="space-y-8 animate-fade-up">
                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                  <h3 className="font-title text-xl font-bold text-primary mb-3">Flexibilité</h3>
                  <p className="font-body text-muted-foreground">
                    Nous offrons une grande variété de services et notre tarification reflète cette flexibilité, 
                    s'adaptant à la complexité et à la fréquence requises pour votre nettoyage Airbnb ou particulier.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                  <h3 className="font-title text-xl font-bold text-primary mb-3">Personnalisation</h3>
                  <p className="font-body text-muted-foreground">
                    En discutant directement avec vous, nous pouvons élaborer un plan de services qui correspond 
                    parfaitement à vos besoins et à votre budget, que ce soit pour un appartement à Antibes ou une villa à Cannes.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                  <h3 className="font-title text-xl font-bold text-primary mb-3">Transparence</h3>
                  <p className="font-body text-muted-foreground">
                    Nous nous engageons à fournir des devis clairs et détaillés, sans frais cachés, 
                    pour que vous sachiez exactement à quoi vous attendre avant de commencer.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                  <h3 className="font-title text-xl font-bold text-primary mb-3">Conseil Expert</h3>
                  <p className="font-body text-muted-foreground">
                    Notre équipe est là pour vous conseiller et vous guider vers les meilleures options, 
                    en tenant compte de vos besoins spécifiques sur la Côte d'Azur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="devis-form" className="luxury-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="font-title text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Comment Obtenir Votre Devis Personnalisé ?
                </h2>
                <p className="font-body text-lg text-muted-foreground">
                  Remplissez notre formulaire détaillé ci-dessous pour recevoir votre devis sur mesure 
                  sous 24h. Notre équipe prendra contact avec vous pour affiner votre demande.
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-elegant p-8 border border-border/50 animate-scale-in">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom complet *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Votre nom et prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Téléphone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="0 765 169 106"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Type de service *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Sélectionnez un service</option>
                        {serviceTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Taille du logement
                      </label>
                      <select
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Sélectionnez la taille</option>
                        <option value="studio">Studio (&lt; 30m²)</option>
                        <option value="t1-t2">T1/T2 (30-50m²)</option>
                        <option value="t3">T3 (50-80m²)</option>
                        <option value="t4">T4 (80-120m²)</option>
                        <option value="t5+">T5+ (&gt; 120m²)</option>
                        <option value="villa">Villa/Maison</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Fréquence souhaitée
                      </label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Fréquence</option>
                        <option value="ponctuel">Ponctuel</option>
                        <option value="hebdomadaire">Hebdomadaire</option>
                        <option value="bi-mensuel">Bi-mensuel</option>
                        <option value="mensuel">Mensuel</option>
                        <option value="entre-locations">Entre chaque location</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Détails de votre demande *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full"
                      placeholder="Décrivez vos besoins spécifiques, la localisation, les particularités de votre logement, vos attentes..."
                    />
                  </div>

                  <div className="text-center">
                    <Button type="submit" className="btn-hero">
                      Envoyer ma demande de devis
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Réponse sous 24h • Devis gratuit et sans engagement
                    </p>
                  </div>
                </form>
              </div>

              {/* Contact Direct */}
              <div className="mt-12 text-center animate-fade-up">
                <h3 className="font-title text-2xl font-bold text-foreground mb-6">
                  Ou contactez-nous directement
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="tel:0765169106" className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-smooth">
                    <Phone className="w-5 h-5" />
                    <span className="font-body font-medium">0 765 169 106</span>
                  </a>
                  <a href="mailto:graceazurservices@gmail.com" className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-smooth">
                    <Mail className="w-5 h-5" />
                    <span className="font-body font-medium">graceazurservices@gmail.com</span>
                  </a>
                  <a href="https://wa.me/33XXXXXXXXX" className="flex items-center space-x-2 text-accent hover:text-accent/90 transition-smooth">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-body font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tarifs;