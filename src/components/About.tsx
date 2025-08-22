import { Award, Heart, Shield, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rigueur",
      description: "Chaque détail compte pour un résultat parfait"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Qualité",
      description: "Standards hôteliers appliqués à chaque intervention"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Discrétion",
      description: "Professionnalisme et respect de votre intimité"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Professionnalisme",
      description: "Engagement total pour votre satisfaction"
    }
  ];

  return (
    <section id="apropos" className="luxury-section bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-4">
            À propos de Grace Azur Services
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            L'excellence au service de vos espaces de vie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="prose prose-lg font-body text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Forte d'une expérience approfondie dans le <strong className="text-primary">secteur hôtelier et du nettoyage haut de gamme</strong>, 
                Grace apporte à vos espaces le niveau d'excellence que l'on retrouve dans les plus beaux établissements de la Côte d'Azur.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Notre mission est simple : <strong className="text-primary">garantir des environnements impeccables, sains et accueillants</strong>, 
                que ce soit pour vos hôtes Airbnb ou pour votre famille. Chaque intervention est réalisée avec la même rigueur 
                et la même attention aux détails qui font la réputation du service à la française.
              </p>

              <p className="text-lg leading-relaxed">
                Chez Grace Azur Services, nous ne nous contentons pas de nettoyer : nous créons une expérience. 
                Une expérience où chaque détail compte, où la qualité prime sur la quantité, et où votre satisfaction 
                est notre plus belle récompense.
              </p>

              <div className="mt-8">
                <a 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-200 font-medium"
                >
                  En savoir plus sur nous
                </a>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="service-card text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-body font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;