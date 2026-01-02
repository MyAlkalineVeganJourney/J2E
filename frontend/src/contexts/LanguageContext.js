import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
  const [availableLanguages] = useState(['en', 'es', 'fr', 'de', 'it', 'zh', 'tw', 'am', 'ar', 'sw', 'kw']);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('mavj-language');
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n, availableLanguages]);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
      localStorage.setItem('mavj-language', lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const changeLanguage = (lng) => {
    if (availableLanguages.includes(lng)) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      availableLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
