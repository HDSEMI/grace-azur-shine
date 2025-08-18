import { Award, Star, Leaf, Clock, Shield, Users, CheckCircle2, Zap } from 'lucide-react';

const PourquoiChoisir = () => {
  const mainReasons = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Fiabilité & rigueur",
      description: "Ponctualité garantie, respect des délais et protocoles stricts pour chaque intervention. Votre confiance est notre priorité.",
      features: [
        "Intervention sous 24h garantie",
        "Équipe formée et expérimentée", 
        "Protocoles de qualité stricts",
        "Suivi personnalisé de chaque client"
      ]
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Qualité hôtelière",
      description: "Standards professionnels issus du secteur hôtelier appliqués à chaque prestation. Excellence et attention aux détails.",
      features: [
        "Check-list exhaustive 50 points",
        "Contrôle qualité systématique",
        "Matériel professionnel haut de gamme",
        "Formation continue de nos équipes"
      ]
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Respect de l'environnement",
      description: "Produits écologiques certifiés, biodégradables et sans substances nocives. Préservons ensemble notre belle Côte d'Azur.",
      features: [
        "Produits 100% écologiques certifiés",
        "Emballages recyclables et biodégradables",
        "Techniques de nettoyage éco-responsables", 
        "Protection de votre santé et celle de vos proches"
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponibilité 7j/7",
      text: "Service d'urgence et interventions weekend"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Assurance complète",
      text: "Couverture responsabilité civile professionnelle"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Équipe locale",
      text: "Connaissance parfaite de la Côte d'Azur"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Réactivité",
      text: "Devis sous 2h, intervention rapide"
    }
  ];

  return (
    <section className="luxury-section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            Pourquoi choisir Grace Azur Services ?
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
            Entreprise de nettoyage de confiance sur la Côte d'Azur. Femme de ménage professionnelle 
            spécialisée dans le nettoyage haut de gamme à Antibes, Cannes et alentours.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainReasons.map((reason, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="service-card h-full">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6">
                    {reason.icon}
                  </div>
                  <h3 className="font-title text-2xl font-bold text-primary mb-4">
                    {reason.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <h3 className="font-title text-3xl font-bold text-center text-foreground mb-12">
            Les + de Grace Azur Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-body font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="font-body text-muted-foreground text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="font-title text-2xl font-bold text-primary mb-4">
              La confiance de + de 200 clients satisfaits
            </h3>
            <p className="font-body text-muted-foreground text-lg">
              Propriétaires Airbnb, agences immobilières et particuliers nous font confiance 
              pour l'entretien de leurs biens sur Antibes, Cannes, Mougins et toute la Côte d'Azur.
            </p>
            <div className="flex justify-center items-center mt-6 space-x-8 text-primary">
              <div className="text-center">
                <div className="text-3xl font-bold">7j/7</div>
                <div className="text-sm text-muted-foreground">Disponibilité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2h</div>
                <div className="text-sm text-muted-foreground">Délai devis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Écologique</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiChoisir;