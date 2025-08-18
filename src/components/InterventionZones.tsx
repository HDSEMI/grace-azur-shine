import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';

const InterventionZones = () => {
  const cities = [
    { name: "Antibes", description: "Centre historique et quartiers résidentiels" },
    { name: "Biot", description: "Village authentique et résidences modernes" },
    { name: "Juan-les-Pins", description: "Front de mer et villas de prestige" },
    { name: "Cannes", description: "Croisette et quartiers chics" },
    { name: "Golfe-Juan", description: "Port et résidences balnéaires" },
    { name: "Mougins", description: "Village perché et domaines privés" },
    { name: "Cagnes-sur-Mer", description: "Bord de mer et collines" },
    { name: "Valbonne", description: "Technopole et quartiers résidentiels" }
  ];

  const advantages = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Intervention rapide",
      description: "Déplacement sous 30 minutes dans toute la zone"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Connaissance locale",
      description: "Expertise des spécificités de chaque commune"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Disponibilité 7j/7",
      description: "Service continu même les weekends et jours fériés"
    }
  ];

  return (
    <section className="luxury-section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            Zones d'intervention
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
            Grace Azur Services est fier d'offrir ses services dans une sélection de localités privilégiées, 
            répondant aux besoins de nos clients avec la même qualité et le même engagement partout où nous intervenons.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Cities List */}
          <div className="animate-fade-up">
            <h3 className="font-title text-3xl font-bold text-foreground mb-8">
              Villes incluses
            </h3>
            
            <div className="space-y-4 mb-8">
              {cities.map((city, index) => (
                <div key={index} className="service-card group hover:scale-105 transition-elegant" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-elegant">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-title text-xl font-bold text-primary mb-2">{city.name}</h4>
                      <p className="font-body text-muted-foreground">{city.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage note */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="font-body font-bold text-primary mb-3">
                Couverture étendue sur demande
              </h4>
              <p className="font-body text-muted-foreground">
                Votre commune ne figure pas dans la liste ? Contactez-nous ! 
                Nous étudions toute demande dans les Alpes-Maritimes selon vos besoins spécifiques.
              </p>
            </div>
          </div>

          {/* Map and Advantages */}
          <div className="animate-scale-in">
            {/* Map placeholder - You can replace with actual map */}
            <div className="mb-8">
              <div className="w-full h-80 bg-card rounded-xl shadow-card border border-border/50 flex items-center justify-center relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182867.51825987147!2d6.928194!3d43.623647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd2b52e6d8539%3A0x40819a5fd970220!2sAntibes%2C%20France!5e0!3m2!1sfr!2sfr!4v1659000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg font-body font-medium">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Côte d'Azur
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-hover transition-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-foreground mb-2">{advantage.title}</h4>
                      <p className="font-body text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service stats */}
            <div className="mt-8 bg-accent/5 rounded-xl p-6 border border-accent/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">8</div>
                  <div className="font-body text-sm text-muted-foreground">Villes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">30min</div>
                  <div className="font-body text-sm text-muted-foreground">Délai max</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">7j/7</div>
                  <div className="font-body text-sm text-muted-foreground">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionZones;