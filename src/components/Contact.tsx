import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, Clock, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    toast
  } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuration EmailJS simplifiée
      const templateParams = {
        to_name: 'Grace Azur Services',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Non renseigné',
        message: formData.message
      };

      console.log('Tentative d\'envoi EmailJS avec:', templateParams);

      // Envoi de l'email
      const result = await emailjs.send(
        'service_ao2ipkd',
        'template_z8s4kvn',
        templateParams,
        'Qy4IcJcdo3ShqEHSv'
      );

      console.log('EmailJS réponse:', result);

      // Succès
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
        variant: "default"
      });
      
      // Réinitialisation du formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erreur détaillée EmailJS:', error);
      
      // Analyse détaillée de l'erreur EmailJS
      let errorTitle = "Erreur lors de l'envoi";
      let errorMessage = "Veuillez réessayer ou nous contacter directement par téléphone.";
      
      if (error instanceof Error) {
        // Erreurs de configuration EmailJS
        if (error.message.includes('Service ID')) {
          errorTitle = "Erreur Service EmailJS";
          errorMessage = "Le service EmailJS n'est pas configuré ou est inactif. Contactez l'administrateur.";
        } else if (error.message.includes('Template ID')) {
          errorTitle = "Erreur Template EmailJS";
          errorMessage = "Le template EmailJS n'est pas configuré ou est inactif. Contactez l'administrateur.";
        } else if (error.message.includes('Public Key')) {
          errorTitle = "Erreur Clé EmailJS";
          errorMessage = "La clé publique EmailJS est invalide ou désactivée. Contactez l'administrateur.";
        } else if (error.message.includes('quota')) {
          errorTitle = "Quota EmailJS dépassé";
          errorMessage = "Limite d'emails atteinte pour aujourd'hui. Réessayez demain ou contactez-nous par téléphone.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorTitle = "Erreur de connexion";
          errorMessage = "Problème de connexion internet ou serveur EmailJS temporairement indisponible.";
        } else if (error.message.includes('400')) {
          errorTitle = "Erreur de requête";
          errorMessage = "Paramètres de l'email invalides. Vérifiez vos informations et réessayez.";
        } else if (error.message.includes('500')) {
          errorTitle = "Erreur serveur EmailJS";
          errorMessage = "Problème temporaire du serveur EmailJS. Réessayez dans quelques minutes.";
        }
      }
      
      // Affichage de l'erreur avec plus de détails
      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive"
      });
      
      // Log détaillé pour le débogage
      console.log('📋 Analyse de l\'erreur EmailJS:', {
        errorType: error instanceof Error ? error.name : 'Unknown',
        errorMessage: error instanceof Error ? error.message : String(error),
        errorStack: error instanceof Error ? error.stack : undefined,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  
  const openWhatsApp = () => {
    const phoneNumber = "330765169106"; // Numéro de téléphone Grace Azur Services
    const message = "Bonjour, je souhaiterais obtenir un devis pour vos services de nettoyage.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };


  
  return <section id="contact" className="luxury-section bg-background pt-20 sm:pt-64 md:pt-24 lg:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up px-2 mt-12 sm:mt-16">
          <h2 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-5 leading-tight">
            Contactez-nous
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Demandez votre devis gratuit et personnalisé en quelques clics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <div className="service-card">
              <h3 className="font-title text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Demander un devis
              </h3>
              

              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-foreground mb-2 text-sm sm:text-base">
                    Nom complet *
                  </label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full" 
                    placeholder="Votre nom et prénom"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-foreground mb-2 text-sm sm:text-base">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full text-sm sm:text-base" 
                    placeholder="votre.email@exemple.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body font-medium text-foreground mb-2 text-sm sm:text-base">
                    Téléphone
                  </label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full text-sm sm:text-base" 
                    placeholder="0 765 169 106"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full h-24 sm:h-32 text-sm sm:text-base" 
                    placeholder="Décrivez votre besoin : type de logement, surface, fréquence souhaitée..."
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    className="btn-hero w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                  

                </div>
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
                      <p className="font-body text-muted-foreground text-sm sm:text-base break-all">graceazurservices@gmail.com</p>
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