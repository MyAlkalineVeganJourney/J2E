#!/bin/bash
mkdir -p src/context
cat > src/context/LanguageContext.jsx << 'END'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocaleData, supportedLanguages } from '../locales';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mavj_language');
      if (saved && supportedLanguages.includes(saved)) return saved;
    }
    return 'English';
  });
  
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const localeData = getLocaleData(currentLanguage);
      setTranslations(localeData);
      localStorage.setItem('mavj_language', currentLanguage);
    };
    loadTranslations();
  }, [currentLanguage]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key.split('.').pop();
      }
    }
    return value || key.split('.').pop();
  };

  const getWord = (wordId) => wordId ? t(`words.${wordId}`) : '';
  
  const getGameMessage = (key, params = {}) => {
    let message = t(`game.${key}`);
    Object.entries(params).forEach(([param, value]) => {
      message = message.replace(new RegExp(`{{${param}}}`, 'g'), value);
    });
    return message;
  };

  const getLanguageDisplayName = (code) => {
    const names = {
      'English': 'English', 'Spanish': 'Español', 'French': 'Français',
      'German': 'Deutsch', 'Italian': 'Italiano', 'Chinese': '中文',
      'Taiwanese': '台語', 'Amharic': 'አማርኛ', 'Arabic': 'العربية',
      'Swahili': 'Kiswahili', 'Patois': 'Kreyòl',
      'BAramaic': 'Biblical Aramaic', 'NAramaic': 'Neo-Aramaic',
      'SAramaic': 'Syriac Aramaic', 'Hebrew': 'עברית',
      'Greek': 'Ελληνικά', 'Latin': 'Latina', 'Sanskrit': 'संस्कृतम्'
    };
    return names[code] || code;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage, setCurrentLanguage, t, getWord, getGameMessage,
      getLanguageDisplayName, translations, supportedLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
END
