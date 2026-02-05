import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import ALL 14 language files
import AmharicTranslations from './locales/Amharic/translation.json';
import ArabicTranslations from './locales/Arabic/translation.json';
import BAramaicTranslations from './locales/BAramaic/translation.json';
import GermanTranslations from './locales/German/translation.json';
import EnglishTranslations from './locales/English/translation.json';
import SpanishTranslations from './locales/Spanish/translation.json';
import FrenchTranslations from './locales/French/translation.json';
import ItalianTranslations from './locales/Italian/translation.json';
import PatoisTranslations from './locales/Patois/translation.json';
import NAramaicTranslations from './locales/NAramaic/translation.json';
import SAramaicTranslations from './locales/SAramaic/translation.json';
import SwahiliTranslations from './locales/Swahili/translation.json';
import TaiwaneseTranslations from './locales/Taiwanese/translation.json';
import ChineseTranslations from './locales/Chinese/translation.json';

const resources = {
  Amharic: { translation: AmharicTranslations },
  Arabic: { translation: ArabicTranslations },
  BAramaic: { translation: BAramaicTranslations },
  German: { translation: GermanTranslations },
  English: { translation: EnglishTranslations },
  Spanish: { translation: SpanishTranslations },
  French: { translation: FrenchTranslations },
  Italian: { translation: ItalianTranslations },
  Patois: { translation: PatoisTranslations },
  NAramaic: { translation: NAramaicTranslations },
  SAramaic: { translation: SAramaicTranslations },
  Swahili: { translation: SwahiliTranslations },
  Taiwanese: { translation: TaiwaneseTranslations },
  Chinese: { translation: ChineseTranslations }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: Object.keys(resources),
    interpolation: { escapeValue: false }
  });

export default i18n;
