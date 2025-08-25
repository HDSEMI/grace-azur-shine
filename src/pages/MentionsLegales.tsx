import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scale, Building, Server, Copyright, Shield, Link, Cookie, Gavel, Mail } from 'lucide-react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <h1 className="font-title text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
            Mentions Légales
          </h1>
          
          <div className="space-y-8 text-foreground">
            {/* Éditeur du Site */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Building className="w-6 h-6" />
                1. Éditeur du Site
              </h2>
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <div className="space-y-2 font-body">
                  <p><strong>Raison sociale :</strong> Grace Azur Services</p>
                  <p><strong>Adresse :</strong> Côte d'Azur, France</p>
                  <p><strong>Téléphone :</strong> 07 65 16 91 06</p>
                  <p><strong>Email :</strong> graceazurservices@gmail.com</p>
                  <p><strong>Activité :</strong> Services de ménage à domicile et conciergerie</p>
                </div>
              </div>
            </section>

            {/* Hébergement */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Server className="w-6 h-6" />
                2. Hébergement
              </h2>
              <p className="font-body leading-relaxed">
                Ce site web est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. 
                Vercel fournit l'infrastructure technique nécessaire au bon fonctionnement du site.
              </p>
            </section>

            {/* Propriété Intellectuelle */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Copyright className="w-6 h-6" />
                3. Propriété Intellectuelle
              </h2>
              <p className="font-body leading-relaxed mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
              </p>
              <p className="font-body leading-relaxed mb-3">Sont notamment protégés :</p>
              <ul className="list-disc list-inside space-y-2 ml-4 font-body">
                <li>La structure générale du site</li>
                <li>Les textes et contenus rédactionnels</li>
                <li>Les images, photographies et illustrations</li>
                <li>Les logos et marques</li>
                <li>Les bases de données</li>
              </ul>
            </section>

            {/* Conditions d'Utilisation */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Scale className="w-6 h-6" />
                4. Conditions d'Utilisation
              </h2>
              <p className="font-body leading-relaxed mb-4">
                L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales 
                d'utilisation décrites ci-après.
              </p>
              <p className="font-body leading-relaxed">
                Grace Azur Services s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations 
                diffusées sur ce site, mais ne peut garantir l'exactitude, la complétude, l'actualité des 
                informations diffusées sur son site.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Shield className="w-6 h-6" />
                5. Responsabilité
              </h2>
              <p className="font-body leading-relaxed mb-3">Grace Azur Services ne pourra être tenue responsable :</p>
              <ul className="list-disc list-inside space-y-2 ml-4 font-body">
                <li>Des dommages directs ou indirects résultant de l'utilisation du site</li>
                <li>De l'interruption ou de la suspension du service</li>
                <li>De la perte de données ou d'informations</li>
                <li>Des erreurs ou omissions dans les informations diffusées</li>
              </ul>
            </section>

            {/* Liens Hypertextes */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Link className="w-6 h-6" />
                6. Liens Hypertextes
              </h2>
              <p className="font-body leading-relaxed">
                Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres 
                ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Grace Azur Services.
              </p>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Cookie className="w-6 h-6" />
                7. Cookies
              </h2>
              <p className="font-body leading-relaxed">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, 
                vous acceptez l'utilisation de cookies conformément à notre 
                <a href="/politique-confidentialite" className="text-primary hover:text-primary/80 underline ml-1">
                  politique de confidentialité
                </a>.
              </p>
            </section>

            {/* Droit Applicable */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Gavel className="w-6 h-6" />
                8. Droit Applicable
              </h2>
              <p className="font-body leading-relaxed">
                Tout litige en relation avec l'utilisation du site Grace Azur Services est soumis au droit français. 
                En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux 
                tribunaux compétents de Nice.
              </p>
            </section>

            {/* Contact Juridique */}
            <section className="space-y-4">
              <h2 className="font-title text-2xl font-bold text-primary flex items-center gap-2">
                <Mail className="w-6 h-6" />
                9. Contact Juridique
              </h2>
              <p className="font-body leading-relaxed mb-3">
                Pour toute question relative à ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <div className="space-y-2 font-body">
                  <p><strong>Email :</strong> graceazurservices@gmail.com</p>
                  <p><strong>Adresse :</strong> Côte d'Azur, France</p>
                  <p><strong>Horaires :</strong> Du lundi au vendredi, 8h-18h</p>
                </div>
              </div>
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

export default MentionsLegales;