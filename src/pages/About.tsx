import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhoWeAre from '@/components/WhoWeAre';
import OurCommitment from '@/components/OurCommitment';
import InterventionZones from '@/components/InterventionZones';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="luxury-section bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-up">
              <h1 className="font-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
                À propos de Grace Azur Services
              </h1>
              <p className="text-xl md:text-2xl font-body font-light mb-8 text-white/90 leading-relaxed">
                Forte d'une expérience dans l'hôtellerie, Grace Azur Services propose un nettoyage haut de gamme 
                pour particuliers et Airbnb sur la Côte d'Azur.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 font-body">
                <span>• Entreprise de ménage de confiance</span>
                <span>• Femme de ménage professionnelle Antibes</span>
                <span>• Nettoyage haut de gamme Côte d'Azur</span>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <WhoWeAre />
        <OurCommitment />
        <InterventionZones />
      </main>
      <Footer />
    </div>
  );
};

export default About;