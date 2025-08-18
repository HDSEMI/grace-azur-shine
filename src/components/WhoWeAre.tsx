import { CheckCircle, Clock, Shield, Zap, Heart, Award } from 'lucide-react';

const WhoWeAre = () => {
  const expertise = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Linge propre et bien présenté"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Désinfection des surfaces sensibles"
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Contrôle qualité avant chaque arrivée"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Réactivité en cas d'urgence ou d'imprévu"
    }
  ];

  return (
    <section className="luxury-section bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            Qui sommes nous ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="prose prose-lg font-body text-foreground">
              <div className="mb-8">
                <h3 className="font-title text-2xl font-bold text-primary mb-4 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-accent" />
                  Karine, Fondatrice
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  Je suis <strong className="text-primary">Karine</strong>, fondatrice d'une entreprise spécialisée dans le 
                  <strong className="text-primary"> nettoyage professionnel d'appartements Airbnb</strong>. 
                  Forte de plusieurs années d'expérience dans ce domaine, j'ai développé un savoir-faire rigoureux, 
                  adapté aux exigences particulières de la location courte durée.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Mon objectif est simple : <strong className="text-primary">offrir à vos locataires une expérience irréprochable</strong> dès leur arrivée, 
                  grâce à des espaces propres, frais et parfaitement préparés. Que ce soit pour un nettoyage express entre 
                  deux réservations ou pour un entretien régulier, je veille personnellement à ce que chaque prestation 
                  soit effectuée avec soin, ponctualité et discrétion.
                </p>

                <p className="text-lg leading-relaxed">
                  Grâce à mon expertise, je comprends les attentes des hôtes et les 
                  <strong className="text-primary"> standards de qualité des plateformes comme Airbnb</strong> :
                </p>
              </div>
            </div>
          </div>

          {/* Expertise List */}
          <div className="animate-scale-in">
            <div className="service-card">
              <h3 className="font-title text-2xl font-bold text-primary mb-6 text-center">
                Notre expertise reconnue
              </h3>
              
              <div className="space-y-4 mb-8">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex-shrink-0 text-primary">
                      {item.icon}
                    </div>
                    <span className="font-body font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                <p className="font-body text-foreground text-center leading-relaxed">
                  <strong className="text-accent">Mon professionnalisme et ma fiabilité</strong> m'ont permis de fidéliser 
                  de nombreux clients qui me font confiance pour entretenir leurs biens et 
                  <strong className="text-accent"> valoriser leur image</strong> auprès de leurs voyageurs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center animate-fade-up">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="font-body text-muted-foreground">Années d'expérience</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="font-body text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="font-body text-muted-foreground">Délai intervention</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="font-body text-muted-foreground">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;