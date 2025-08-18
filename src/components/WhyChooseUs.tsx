import { Home, Users, Award, Sparkles, Heart, Star, CheckCircle, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const categories = [
    {
      title: "Pour vos espaces",
      icon: <Home className="w-12 h-12" />,
      gradient: "from-primary to-primary-dark",
      benefits: [
        { text: "Bien plus éclatants", icon: <Sparkles className="w-5 h-5" /> },
        { text: "Bien plus entretenus", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Bien plus accueillants", icon: <Heart className="w-5 h-5" /> }
      ]
    },
    {
      title: "Pour nos clients",
      icon: <Users className="w-12 h-12" />,
      gradient: "from-accent to-accent/80",
      benefits: [
        { text: "Plus qu'un simple nettoyage", icon: <Star className="w-5 h-5" /> },
        { text: "Plus que vos attentes", icon: <Award className="w-5 h-5" /> },
        { text: "Plus qu'un service standard", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Plus de sérénité", icon: <Heart className="w-5 h-5" /> }
      ]
    },
    {
      title: "Pour nos professionnels",
      icon: <Award className="w-12 h-12" />,
      gradient: "from-primary-light to-primary",
      benefits: [
        { text: "Encore plus expérimentés", icon: <Star className="w-5 h-5" /> },
        { text: "Encore plus compétents", icon: <Award className="w-5 h-5" /> },
        { text: "Encore plus dévoués", icon: <Heart className="w-5 h-5" /> },
        { text: "Encore plus fiables", icon: <ShieldCheck className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <section className="luxury-section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Une expertise issue du secteur hôtelier pour des valeurs de rigueur, qualité et discrétion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="service-card h-full group hover:scale-105 transition-elegant">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${category.gradient} rounded-xl p-6 text-white mb-6 text-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-title text-xl font-bold">
                    {category.title}
                  </h3>
                </div>

                {/* Benefits list */}
                <div className="space-y-4">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border/50 hover:shadow-card transition-elegant">
                      <div className="text-primary">
                        {benefit.icon}
                      </div>
                      <span className="font-body font-medium text-foreground">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="bg-card rounded-2xl p-8 border border-primary/20 shadow-card max-w-4xl mx-auto">
            <h3 className="font-title text-2xl font-bold text-primary mb-4">
              L'histoire de Grace Azur Services
            </h3>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Une entreprise de ménage de confiance née de l'expérience hôtelière, dédiée au nettoyage haut de gamme 
              sur la Côte d'Azur. Femme de ménage professionnelle spécialisée dans l'excellence à Antibes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;