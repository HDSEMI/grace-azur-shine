import { Leaf, Droplet, Shield, Heart } from 'lucide-react';
import ecoCleaningImage from '@/assets/eco-cleaning.jpg';

const Environment = () => {
  const ecoFeatures = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Produits écologiques",
      description: "Formulations biodégradables et respectueuses de l'environnement"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sans substances nocives",
      description: "Aucun produit chimique agressif, sécurité garantie"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sécurité des proches",
      description: "Protection de vos collaborateurs et animaux de compagnie"
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Impact réduit",
      description: "Préservation des ressources naturelles et de la biodiversité"
    }
  ];

  return (
    <section id="environnement" className="luxury-section gradient-eco text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.3"/>
              <circle cx="15" cy="45" r="1" fill="currentColor" opacity="0.2"/>
              <circle cx="45" cy="15" r="1" fill="currentColor" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 text-accent-light mr-3" />
            <h2 className="font-title text-4xl md:text-5xl font-bold">
              Engagement Environnemental
            </h2>
          </div>
          <p className="font-body text-xl text-white/90 max-w-3xl mx-auto">
            Nettoyer en préservant notre belle planète, c'est notre responsabilité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="prose prose-lg text-white font-body">
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Chez Grace Azur Services, nous sommes convaincus que l'excellence du service ne doit pas 
                compromettre notre environnement. C'est pourquoi nous avons fait le choix exclusif de 
                <strong className="text-accent-light"> produits écologiques et biodégradables</strong>.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Nos formulations respectueuses de l'environnement garantissent une efficacité maximale 
                tout en préservant la santé de vos proches, de nos collaborateurs et de vos animaux de compagnie.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                Ensemble, <strong className="text-accent-light">réduisons notre impact sur l'environnement</strong> 
                sans compromis sur la qualité de service que vous méritez.
              </p>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative mb-8">
              <img 
                src={ecoCleaningImage}
                alt="Produits de nettoyage écologiques" 
                className="w-full h-80 object-cover rounded-xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {ecoFeatures.map((feature, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-accent-light mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-body font-bold text-white mb-2">{feature.title}</h3>
              <p className="font-body text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Environment;