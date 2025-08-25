// Configuration EmailJS pour l'envoi d'emails
// 
// ÉTAPES POUR CONFIGURER EMAILJS :
//
// 1. Créer un compte sur https://www.emailjs.com/
// 2. Créer un service email (Gmail, Outlook, etc.)
// 3. Créer un template d'email
// 4. Récupérer les clés d'API
//
// REMPLACER LES VALEURS SUIVANTES DANS src/components/Contact.tsx :
//
// - 'YOUR_SERVICE_ID' → Votre Service ID EmailJS
// - 'YOUR_TEMPLATE_ID' → Votre Template ID EmailJS  
// - 'YOUR_PUBLIC_KEY' → Votre Public Key EmailJS
//
// EXEMPLE DE TEMPLATE EMAIL :
//
// Sujet: {{subject}}
// De: {{from_name}} ({{from_email}})
// Téléphone: {{from_phone}}
// Message: {{message}}
//
// Destinataire: hermann.semi@gmail.com

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ao2ipkd', // Service ID configuré et testé
  TEMPLATE_ID: 'template_z8s4kvn', // Template ID configuré
  PUBLIC_KEY: 'Qy4IcJcdo3ShqEHSv', // Public Key configuré
  TO_EMAIL: 'hermann.semi@gmail.com'
};

// Variables du template EmailJS
export const EMAILJS_TEMPLATE_PARAMS = {
  from_name: '',
  from_email: '',
  from_phone: '',
  message: '',
  to_email: 'hermann.semi@gmail.com',
  subject: ''
};
