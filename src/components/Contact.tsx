import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais."
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const openWhatsApp = () => {
    const phoneNumber = "33XXXXXXXXX"; // Replace with actual number
    const message = "Bonjour, je souhaiterais obtenir un devis pour vos services de nettoyage.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  return <section id="contact" className="luxury-section bg-background pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Contactez-nous
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Demandez votre devis gratuit et personnalisé en quelques clics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <div className="service-card">
              <h3 className="font-title text-xl sm:text-2xl font-bold text-foreground mb-6">
                Demander un devis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-foreground mb-2 text-sm sm:text-base">
                    Nom complet *
                  </label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" placeholder="Votre nom et prénom" />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full" placeholder="votre.email@exemple.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" placeholder="06 XX XX XX XX" />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full h-32" placeholder="Décrivez votre besoin : type de logement, surface, fréquence souhaitée..." />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer ma demande
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-scale-in">
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="service-card">
                <h3 className="font-title text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Contact direct
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-foreground text-sm sm:text-base">Téléphone</p>
                      <p className="font-body text-muted-foreground text-sm sm:text-base">07 65 16 91 06</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium text-foreground text-sm sm:text-base">Email</p>
                      <p className="font-body text-muted-foreground text-sm sm:text-base break-all">contact@graceazur-services.fr</p>
                    </div>
                  </div>

                  <Button onClick={openWhatsApp} className="btn-eco w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Service Info */}
              <div className="service-card">
                <h3 className="font-title text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Informations pratiques
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-body font-medium text-foreground text-sm sm:text-base">Horaires</p>
                      <p className="font-body text-muted-foreground text-sm sm:text-base">7j/7 - Intervention rapide sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-body font-medium text-foreground text-sm sm:text-base">Zone d'intervention</p>
                      <p className="font-body text-muted-foreground text-sm sm:text-base">Côte d'Azur - Alpes-Maritimes</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 sm:p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="font-body text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-accent">Devis gratuit</strong> • 
                    <strong className="text-accent"> Réponse rapide</strong> • 
                    <strong className="text-accent"> Service personnalisé</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;