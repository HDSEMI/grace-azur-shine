import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, UserCheck, Database, Cookie, Mail, Phone, MapPin } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <h1 className="font-title text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
            Politique de Confidentialité
          </h1>
          
          <div className="space-y-8 text-foreground">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Shield className="w-6 h-6" />
                1. Introduction
              </h2>
              <p className="font-body leading-relaxed">
                Grace Azur Services ("nous", "notre", "nos") s'engage à protéger la confidentialité de vos informations personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données.
              </p>
              <p className="font-body leading-relaxed">
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </section>

            {/* Collecte des Informations */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Database className="w-6 h-6" />
                2. Collecte des Informations
              </h2>
              <p className="font-body leading-relaxed">Nous collectons les informations suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4 font-body">
                <li>Informations de contact (nom, email, téléphone)</li>
                <li>Adresse de résidence ou de service</li>
                <li>Préférences de service</li>
                <li>Données de communication</li>
                <li>Informations techniques (adresse IP, cookies)</li>
              </ul>
            </section>

            {/* Utilisation des Informations */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <UserCheck className="w-6 h-6" />
                3. Utilisation des Informations
              </h2>
              <p className="font-body leading-relaxed">Nous utilisons vos informations pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4 font-body">
                <li>Fournir nos services de ménage et conciergerie</li>
                <li>Communiquer avec vous concernant vos réservations</li>
                <li>Améliorer nos services et l'expérience client</li>
                <li>Respecter nos obligations légales</li>
                <li>Envoyer des communications marketing (avec votre consentement)</li>
              </ul>
            </section>

            {/* Partage des Informations */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary">
                4. Partage des Informations
              </h2>
              <p className="font-body leading-relaxed">
                Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 font-body">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos prestataires de services (sous stricte confidentialité)</li>
                <li>Pour protéger nos droits et notre sécurité</li>
              </ul>
            </section>

            {/* Sécurité des Données */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Lock className="w-6 h-6" />
                5. Sécurité des Données
              </h2>
              <p className="font-body leading-relaxed">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations contre l'accès non autorisé, la modification, la divulgation ou la destruction. Ces mesures incluent le chiffrement des données, l'accès restreint et la surveillance régulière de nos systèmes.
              </p>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Cookie className="w-6 h-6" />
                6. Cookies et Technologies Similaires
              </h2>
              <p className="font-body leading-relaxed">
                Notre site web utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <p className="font-body leading-relaxed">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            {/* Vos Droits */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary">
                7. Vos Droits
              </h2>
              <p className="font-body leading-relaxed">Conformément au RGPD, vous avez les droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4 font-body">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>

            {/* Conservation des Données */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary">
                8. Conservation des Données
              </h2>
              <p className="font-body leading-relaxed">
                Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. Les données sont supprimées ou anonymisées lorsque leur conservation n'est plus justifiée.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary">
                9. Contact
              </h2>
              <p className="font-body leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
              </p>
              <div className="space-y-2 ml-4">
                <p className="font-body flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email : graceazurservices@gmail.com
                </p>
                <p className="font-body flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Téléphone : 0 765 169 106
                </p>
                <p className="font-body flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Adresse : Côte d'Azur, France
                </p>
              </div>
            </section>

            {/* Modifications */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary">
                10. Modifications de cette Politique
              </h2>
              <p className="font-body leading-relaxed">
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <div className="border-t border-border pt-8 mt-12">
              <p className="text-sm text-muted-foreground text-center font-body">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;