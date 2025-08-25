# Configuration EmailJS pour le formulaire de contact

## 🎯 Objectif
Rendre le formulaire de contact fonctionnel pour envoyer des emails vers `hermann.semi@gmail.com`

## 📧 Configuration EmailJS ✅ COMPLÈTE !

### 1. Créer un compte EmailJS ✅
- Aller sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créer un compte gratuit
- Se connecter

### 2. Créer un service email ✅
- Dans le dashboard, aller dans "Email Services"
- Cliquer sur "Add New Service"
- Choisir votre fournisseur d'email (Gmail recommandé)
- Suivre les instructions d'authentification
- **Service ID configuré :** `service_nogz7h`

### 3. Créer un template d'email ✅
- Dans le dashboard, aller dans "Email Templates"
- Cliquer sur "Create New Template"
- Configurer le template comme suit :

#### Sujet du template :
```
Nouvelle demande de devis - {{from_name}}
```

#### Contenu du template :
```html
<h2>Nouvelle demande de devis</h2>

<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{from_email}}</p>
<p><strong>Téléphone :</strong> {{from_phone}}</p>

<h3>Message :</h3>
<p>{{message}}</p>

<hr>
<p><em>Email envoyé depuis le formulaire de contact de Grace Azur Services</em></p>
```

- **Template ID configuré :** `template_z8s4kvn`

### 4. Récupérer la clé publique ✅
- Dans le dashboard, aller dans "Account" → "API Keys"
- **Public Key configurée :** `Qy4IcJcdo3ShqEHSv`

### 5. Mettre à jour le composant Contact ✅
Le composant `src/components/Contact.tsx` est maintenant entièrement configuré avec :

```typescript
// Ligne 58-62
await emailjs.send(
  'service_nogz7h',         // ✅ Service ID configuré
  'template_z8s4kvn',       // ✅ Template ID configuré
  templateParams,
  'Qy4IcJcdo3ShqEHSv'      // ✅ Public Key configuré
);
```

## 🔧 Fonctionnalités implémentées

### ✅ Formulaire fonctionnel
- Validation des champs requis
- Gestion des états de soumission
- Désactivation des champs pendant l'envoi
- Indicateur de chargement

### ✅ Gestion des erreurs
- Messages d'erreur en cas d'échec
- Fallback vers contact téléphonique
- Logs d'erreur dans la console

### ✅ Expérience utilisateur
- Toast de confirmation
- Réinitialisation automatique du formulaire
- Bouton avec état de chargement
- Champs désactivés pendant l'envoi

## 📱 Test du formulaire

1. **Remplir le formulaire** avec des données de test
2. **Cliquer sur "Envoyer ma demande"**
3. **Vérifier** que l'email arrive à `hermann.semi@gmail.com`
4. **Vérifier** que le formulaire se réinitialise

## 🚨 Dépannage

### Erreur "Service ID not found"
- Vérifier que le Service ID est correct
- Vérifier que le service est actif

### Erreur "Template ID not found"
- Vérifier que le Template ID est correct
- Vérifier que le template est publié

### Erreur "Public Key invalid"
- Vérifier que la Public Key est correcte
- Vérifier que la clé est active

### Emails n'arrivent pas
- Vérifier les spams
- Vérifier la configuration du service email
- Vérifier les logs EmailJS dans le dashboard

## 📞 Alternative
Si EmailJS pose problème, le formulaire peut être remplacé par :
- Un lien direct vers `mailto:hermann.semi@gmail.com`
- Une redirection vers un formulaire externe (Google Forms, etc.)
- Une intégration avec un autre service (Formspree, Netlify Forms, etc.)
