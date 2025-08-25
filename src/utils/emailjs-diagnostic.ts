// Diagnostic EmailJS détaillé
import emailjs from '@emailjs/browser';

export const diagnoseEmailJS = async () => {
  console.log('🔍 Diagnostic EmailJS en cours...');
  
  try {
    // 1. Vérifier que EmailJS est chargé
    console.log('✅ EmailJS importé:', typeof emailjs);
    
    // 2. Vérifier la configuration
    const config = {
      serviceId: 'service_nogz7h',
      templateId: 'template_z8s4kvn',
      publicKey: 'Qy4IcJcdo3ShqEHSv'
    };
    
    console.log('🔑 Configuration EmailJS:', config);
    
    // 3. Test de connexion EmailJS
    console.log('📡 Test de connexion EmailJS...');
    
    const testParams = {
      to_name: 'Test Diagnostic',
      from_name: 'Utilisateur Test',
      from_email: 'test@example.com',
      phone: '06 12 34 56 78',
      message: 'Test de diagnostic EmailJS'
    };
    
    console.log('📧 Paramètres de test:', testParams);
    
    // 4. Tentative d'envoi avec gestion d'erreur détaillée
    const result = await emailjs.send(
      config.serviceId,
      config.templateId,
      testParams,
      config.publicKey
    );
    
    console.log('✅ Diagnostic EmailJS réussi:', result);
    return { success: true, result, config };
    
  } catch (error) {
    console.error('❌ Diagnostic EmailJS échoué:', error);
    
    // Analyse détaillée de l'erreur
    let errorType = 'Erreur inconnue';
    let errorDetails = '';
    
    if (error instanceof Error) {
      errorType = error.name;
      errorDetails = error.message;
      
      // Analyse des erreurs EmailJS courantes
      if (error.message.includes('Service ID')) {
        errorType = 'Erreur Service ID';
        errorDetails = 'Le Service ID est invalide ou le service est inactif';
      } else if (error.message.includes('Template ID')) {
        errorType = 'Erreur Template ID';
        errorDetails = 'Le Template ID est invalide ou le template est inactif';
      } else if (error.message.includes('Public Key')) {
        errorType = 'Erreur Public Key';
        errorDetails = 'La Public Key est invalide ou désactivée';
      } else if (error.message.includes('quota')) {
        errorType = 'Quota dépassé';
        errorDetails = 'Limite d\'emails atteinte pour aujourd\'hui';
      } else if (error.message.includes('network')) {
        errorType = 'Erreur réseau';
        errorDetails = 'Problème de connexion internet ou serveur EmailJS';
      }
    }
    
    const diagnostic = {
      success: false,
      error: {
        type: errorType,
        message: errorDetails,
        original: error
      },
      config: {
        serviceId: 'service_nogz7h',
        templateId: 'template_z8s4kvn',
        publicKey: 'Qy4IcJcdo3ShqEHSv'
      },
      recommendations: [
        'Vérifiez que le Service ID est actif dans votre dashboard EmailJS',
        'Vérifiez que le Template ID est publié et actif',
        'Vérifiez que la Public Key est correcte et active',
        'Vérifiez votre quota EmailJS (limite d\'emails/jour)',
        'Vérifiez votre connexion internet'
      ]
    };
    
    console.log('📋 Diagnostic complet:', diagnostic);
    return diagnostic;
  }
};

// Vérification de la configuration EmailJS
export const checkEmailJSConfig = () => {
  console.log('🔍 Vérification de la configuration EmailJS...');
  
  const config = {
    serviceId: 'service_nogz7h',
    templateId: 'template_z8s4kvn',
    publicKey: 'Qy4IcJcdo3ShqEHSv'
  };
  
  // Validation des formats
  const validations = {
    serviceId: config.serviceId.startsWith('service_'),
    templateId: config.templateId.startsWith('template_'),
    publicKey: config.publicKey.length > 0
  };
  
  console.log('✅ Validations de format:', validations);
  
  return {
    config,
    validations,
    isValid: Object.values(validations).every(v => v)
  };
};

