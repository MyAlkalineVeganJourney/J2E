import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';

import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';

import deCommon from './locales/de/common.json';
import deHome from './locales/de/home.json';

import itCommon from './locales/it/common.json';
import itHome from './locales/it/home.json';

import zhCommon from './locales/zh/common.json';
import zhHome from './locales/zh/home.json';

import twCommon from './locales/tw/common.json';
import twHome from './locales/tw/home.json';

import amCommon from './locales/am/common.json';
import amHome from './locales/am/home.json';

import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';

import swCommon from './locales/sw/common.json';
import swHome from './locales/sw/home.json';

import kwCommon from './locales/kw/common.json';
import kwHome from './locales/kw/home.json';

const resources = {
  en: { common: enCommon, home: enHome },
  es: { common: esCommon, home: esHome },
  fr: { common: frCommon, home: frHome },
  de: { common: deCommon, home: deHome },
  it: { common: itCommon, home: itHome },
  zh: { common: zhCommon, home: zhHome },
  tw: { common: twCommon, home: twHome },
  am: { common: amCommon, home: amHome },
  ar: { common: arCommon, home: arHome },
  sw: { common: swCommon, home: swHome },
  kw: { common: kwCommon, home: kwHome }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
