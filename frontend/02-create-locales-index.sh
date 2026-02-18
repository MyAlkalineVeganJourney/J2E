#!/bin/bash
cat > src/locales/index.js << 'END'
import English from './English/words.json';
import Spanish from './Spanish/words.json';
import French from './French/words.json';
import German from './German/words.json';
import Italian from './Italian/words.json';
import Chinese from './Chinese/words.json';
import Taiwanese from './Taiwanese/words.json';
import Amharic from './Amharic/words.json';
import Arabic from './Arabic/words.json';
import Swahili from './Swahili/words.json';
import Patois from './Patois/words.json';
import BAramaic from './BAramaic/words.json';
import NAramaic from './NAramaic/words.json';
import SAramaic from './SAramaic/words.json';
import Hebrew from './Hebrew/words.json';
import Greek from './Greek/words.json';
import Latin from './Latin/words.json';
import Sanskrit from './Sanskrit/words.json';

export const locales = {
  English, Spanish, French, German, Italian, Chinese, Taiwanese,
  Amharic, Arabic, Swahili, Patois,
  BAramaic, NAramaic, SAramaic,
  Hebrew, Greek, Latin, Sanskrit
};

export const getLocaleData = (language) => locales[language] || locales.English;

export const supportedLanguages = [
  "English", "Spanish", "French", "German", "Italian", "Chinese", "Taiwanese",
  "Amharic", "Arabic", "Swahili", "Patois",
  "BAramaic", "NAramaic", "SAramaic",
  "Hebrew", "Greek", "Latin", "Sanskrit"
];
END
