import { Heart, Smile, Target, Users, Star, Gift } from 'lucide-react';

const OurCommitment = () => {
  return (
    <section className="luxury-section gradient-service text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="commitment" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.3"/>
              <circle cx="20" cy="60" r="1.5" fill="currentColor" opacity="0.2"/>
              <circle cx="60" cy="20" r="1.5" fill="currentColor" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#commitment)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 text-primary-light mr-3" />
            <h2 className="font-title text-4xl md:text-5xl font-bold">
              Notre engagement
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main commitment text */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <p className="font-body text-xl md:text-2xl leading-relaxed text-white/95 mb-8">
                Avec <strong className="text-primary-light">Grace Azur Services</strong>, je vous propose 
                <strong className="text-primary-light"> bien plus qu'un simple ménage</strong> : C'est un service sur mesure, 
                où chaque logement est préparé avec soin pour offrir une 
                <strong className="text-primary-light"> expérience impeccable</strong> à vos voyageurs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Smile className="w-10 h-10 text-primary-light mb-3" />
                  <h3 className="font-title text-lg font-bold mb-2">Avec le sourire</h3>
                  <p className="font-body text-white/80 text-sm">L'envie de bien faire</p>
                </div>
                <div className="flex flex-col items-center">
                  <Target className="w-10 h-10 text-primary-light mb-3" />
                  <h3 className="font-title text-lg font-bold mb-2">L'ambition</h3>
                  <p className="font-body text-white/80 text-sm">Apporter un vrai soutien</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-10 h-10 text-primary-light mb-3" />
                  <h3 className="font-title text-lg font-bold mb-2">Louer sans stress</h3>
                  <p className="font-body text-white/80 text-sm">Pour nos hôtes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal story */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-up">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-title text-2xl font-bold text-primary-light mb-4 flex items-center">
                  <Star className="w-8 h-8 mr-3" />
                  Une histoire personnelle
                </h3>
                <p className="font-body text-lg leading-relaxed text-white/90">
                  Ce projet est né d'une <strong className="text-primary-light">histoire personnelle</strong>, 
                  mais il grandit chaque jour grâce à la <strong className="text-primary-light">confiance de mes clients</strong>. 
                  Et pour ça, je suis infiniment reconnaissante.
                </p>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-title text-2xl font-bold text-primary-light mb-4 flex items-center">
                  <Gift className="w-8 h-8 mr-3" />
                  Notre promesse
                </h3>
                <p className="font-body text-lg leading-relaxed text-white/90">
                  Chaque intervention est une <strong className="text-primary-light">promesse tenue</strong> : 
                  celle de vous offrir la tranquillité d'esprit et à vos voyageurs 
                  <strong className="text-primary-light"> l'accueil qu'ils méritent</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 text-center animate-fade-up">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-title text-2xl font-bold text-primary-light mb-6">
                Nos valeurs fondamentales
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-primary-light" />
                  </div>
                  <h4 className="font-body font-bold text-white mb-1">Passion</h4>
                  <p className="font-body text-white/70 text-sm">Pour un travail bien fait</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary-light" />
                  </div>
                  <h4 className="font-body font-bold text-white mb-1">Confiance</h4>
                  <p className="font-body text-white/70 text-sm">Base de nos relations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-primary-light" />
                  </div>
                  <h4 className="font-body font-bold text-white mb-1">Excellence</h4>
                  <p className="font-body text-white/70 text-sm">Dans chaque détail</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="w-6 h-6 text-primary-light" />
                  </div>
                  <h4 className="font-body font-bold text-white mb-1">Gratitude</h4>
                  <p className="font-body text-white/70 text-sm">Envers nos clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;