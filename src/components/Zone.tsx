import { MapPin, Clock, Phone } from 'lucide-react';

const Zone = () => {
  const cities = [
    "Antibes", "Juan-les-Pins", "Villeneuve-Loubet", "Golfe-Juan", 
    "Biot", "Cagnes-sur-Mer", "Cannes", "Cannes-la-Bocca", "Mougins"
  ];

  return (
    <section id="zone" className="luxury-section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            Zone d'intervention
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous intervenons sur toute la Côte d'Azur pour vous offrir nos services de qualité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="w-full h-96 bg-card rounded-xl shadow-card border border-border/50 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182867.51825987147!2d5.8613734!3d43.3876711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!1!3m3!1m2!1s0x12cebc738732d97f%3A0x594966412c5651c0!2sFrench%20Riviera!5e0!3m2!1sfr!2sfr!4v1659000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-card">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-body font-medium text-foreground">Côte d'Azur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cities List & Info */}
          <div className="animate-fade-up">
            <h3 className="font-title text-3xl font-bold text-foreground mb-6">
              Villes desservies
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border/50 hover:shadow-card transition-elegant">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-foreground">{city}</span>
                </div>
              ))}
            </div>

            {/* Service Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Disponibilité</h4>
                  <p className="font-body text-muted-foreground">Service 7j/7 avec intervention rapide sous 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Contact direct</h4>
                  <p className="font-body text-muted-foreground">Devis gratuit et personnalisé en moins de 2h</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border/50 shadow-card">
              <h4 className="font-body font-bold text-foreground mb-3">Zone étendue sur demande</h4>
              <p className="font-body text-muted-foreground">
                Votre ville ne figure pas dans la liste ? Contactez-nous ! 
                Nous étudions toute demande dans les Alpes-Maritimes selon vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zone;