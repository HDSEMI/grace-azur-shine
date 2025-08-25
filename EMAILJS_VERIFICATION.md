# 🔍 Guide de vérification EmailJS

## ❌ **Problème identifié** :
**Service ID non trouvé** : `service_nogz7h`

## 🎯 **Étapes de vérification** :

### 1️⃣ **Vérifier le Service Email** :
- **URL** : https://dashboard.emailjs.com/admin
- **Section** : Email Services
- **Vérifier** : Le service `service_nogz7h` existe et est **ACTIF**

### 2️⃣ **Vérifier le Template** :
- **Section** : Email Templates
- **Vérifier** : Le template `template_z8s4kvn` existe et est **PUBLIÉ**

### 3️⃣ **Vérifier la Public Key** :
- **Section** : Account → API Keys
- **Vérifier** : La clé `Qy4IcJcdo3ShqEHSv` est **ACTIVE**

## 🔧 **Si le service n'existe pas** :

### **Créer un nouveau service Gmail** :
1. **Dashboard** → **Email Services** → **Add New Service**
2. **Type** : Gmail
3. **Nom** : Grace Azur Services
4. **Récupérer** le nouveau Service ID

### **Créer un nouveau template** :
1. **Dashboard** → **Email Templates** → **Create New Template**
2. **Variables** à utiliser :
   - `{{to_name}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{message}}`

## 📋 **Configuration actuelle** :
```javascript
SERVICE_ID: 'service_nogz7h'     // ❌ NON TROUVÉ
TEMPLATE_ID: 'template_z8s4kvn' // ⚠️ À VÉRIFIER
PUBLIC_KEY: 'Qy4IcJcdo3ShqEHSv' // ⚠️ À VÉRIFIER
```

## 🚀 **Après correction** :
1. **Mettre à jour** les IDs dans `src/utils/emailjs-config.ts`
2. **Relancer** le diagnostic
3. **Tester** l'envoi d'email

## 📞 **Support EmailJS** :
- **Documentation** : https://www.emailjs.com/docs/
- **Support** : https://www.emailjs.com/support/

