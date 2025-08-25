// Test de configuration EmailJS
import emailjs from '@emailjs/browser';

export const testEmailJS = async () => {
  try {
    console.log('🧪 Test EmailJS en cours...');
    
    const testParams = {
      to_name: 'Test Grace Azur Services',
      from_name: 'Test Utilisateur',
      from_email: 'test@example.com',
      phone: '06 12 34 56 78',
      message: 'Ceci est un test du formulaire de contact.'
    };

    console.log('📧 Paramètres de test:', testParams);
    console.log('🔑 Configuration EmailJS:');
    console.log('  - Service ID:', 'service_nogz7h');
    console.log('  - Template ID:', 'template_z8s4kvn');
    console.log('  - Public Key:', 'Qy4IcJcdo3ShqEHSv');

    const result = await emailjs.send(
      'service_nogz7h',
      'template_z8s4kvn',
      testParams,
      'Qy4IcJcdo3ShqEHSv'
    );

    console.log('✅ Test EmailJS réussi:', result);
    return { success: true, result };
    
  } catch (error) {
    console.error('❌ Test EmailJS échoué:', error);
    return { success: false, error };
  }
};

// Variables du template EmailJS attendues
export const EMAILJS_TEMPLATE_VARIABLES = {
  to_name: 'Nom du destinataire',
  from_name: 'Nom de l\'expéditeur',
  from_email: 'Email de l\'expéditeur',
  phone: 'Téléphone de l\'expéditeur',
  message: 'Message de l\'expéditeur'
};
