// Simple i18n config for testing
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Minimal translations for testing
const resources = {
  en: {
    translation: {
      welcome: "Welcome to MAVJ",
      store: "Visit Store",
      home: "Home",
      language: "Language"
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a MAVJ",
      store: "Visitar Tienda",
      home: "Inicio",
      language: "Idioma"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
