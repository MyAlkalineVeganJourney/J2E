const fs = require('fs');
const path = require('path');

// This simulates your existing translations
const translations = {
  en: {
    nav: {
      home: 'MAVJHome',
      journey: 'TheJourney',
      align: 'AlignWithUs',
      search: 'MAVJSearch',
      broadcast: 'LiveBroadcast',
      store: 'MAVJStore',
      podcast: 'Podcast/Vlog',
      vibrational: 'VibrationalIntel',
      contact: 'ContactUs',
      translate: 'Translate'
    },
    title: {
      main: 'My Alkaline Vegan Journey',
      home: 'Home',
      subtitle: 'Sovereign Health • Vibrational Healing • Ancestral Nutrition',
      ai: 'AI-First Human Frequency Transformation Platform'
    },
    // ... add other sections from your file
  },
  es: {
    nav: {
      home: 'Inicio',
      journey: 'Viaje',
      align: 'Únete',
      search: 'Búsqueda',
      broadcast: 'Transmisión',
      store: 'Tienda',
      podcast: 'Podcast',
      vibrational: 'Vibracional',
      contact: 'Contacto',
      translate: 'Traducir'
    },
    // ... add other sections
  }
  // Add other languages as needed
};

// Define which keys go in which namespace
const namespaceMap = {
  common: ['nav', 'footer', 'qChat'],
  home: ['title', 'intro', 'engagement', 'meetQ', 'videos', 'offer', 'building', 'event', 'photos']
};

// Create directories for each language
Object.keys(translations).forEach(lang => {
  const langDir = path.join(__dirname, 'src/i18n/locales', lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }
});

// Create JSON files for each namespace
Object.keys(namespaceMap).forEach(namespace => {
  Object.keys(translations).forEach(lang => {
    const namespaceData = {};
    
    namespaceMap[namespace].forEach(key => {
      if (translations[lang][key]) {
        namespaceData[key] = translations[lang][key];
      }
    });
    
    if (Object.keys(namespaceData).length > 0) {
      const filePath = path.join(__dirname, 'src/i18n/locales', lang, `${namespace}.json`);
      fs.writeFileSync(filePath, JSON.stringify(namespaceData, null, 2));
      console.log(`Created: ${filePath}`);
    }
  });
});

console.log('\n✅ Conversion complete!');
console.log('Next steps:');
console.log('1. Manually copy the rest of your translations from src/utils/translations.js');
console.log('2. Run: npm start');
console.log('3. Test language switching');
