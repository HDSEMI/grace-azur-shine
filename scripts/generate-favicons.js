#!/usr/bin/env node

/**
 * Script pour générer les différentes tailles de favicon
 * Note: Ce script nécessite que les images soient déjà créées manuellement
 * ou que vous ayez ImageMagick installé
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Génération des favicons pour Grace Azur Services...');

// Vérifier que le logo source existe
const logoSource = path.join(__dirname, '../public/lovable-uploads/3a1513b6-4169-4bc6-b946-89480b3739de.png');
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(logoSource)) {
  console.error('❌ Logo source non trouvé:', logoSource);
  process.exit(1);
}

console.log('✅ Logo source trouvé');

// Liste des favicons à créer
const favicons = [
  { name: 'favicon-16x16.png', size: '16x16' },
  { name: 'favicon-32x32.png', size: '32x32' },
  { name: 'apple-touch-icon.png', size: '180x180' },
  { name: 'android-chrome-192x192.png', size: '192x192' },
  { name: 'android-chrome-512x512.png', size: '512x512' }
];

console.log('\n📋 Favicons à générer:');
favicons.forEach(favicon => {
  console.log(`  - ${favicon.name} (${favicon.size})`);
});

console.log('\n⚠️  Note: Ce script liste les favicons nécessaires.');
console.log('   Pour les générer automatiquement, installez ImageMagick et exécutez:');
console.log('   brew install imagemagick  # sur macOS');
console.log('   sudo apt-get install imagemagick  # sur Ubuntu/Debian');
console.log('\n   Puis utilisez la commande:');
console.log('   convert logo.png -resize 32x32 favicon-32x32.png');

console.log('\n🎯 Alternativement, vous pouvez:');
console.log('   1. Copier le logo existant et le renommer');
console.log('   2. Utiliser un service en ligne (favicon.io, realfavicongenerator.net)');
console.log('   3. Créer manuellement les différentes tailles');

console.log('\n✅ Configuration des favicons terminée !');
console.log('   Vérifiez que tous les fichiers sont présents dans le dossier public/');
