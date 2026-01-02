import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  
  const languageNames = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    zh: '中文',
    tw: '繁體中文',
    it: 'Italiano',
    de: 'Deutsch',
    patois: 'Patois'
  };
  
  return (
    <div className="language-switcher">
      <select 
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-select"
      >
        {availableLanguages.map(lang => (
          <option key={lang} value={lang}>
            {languageNames[lang] || lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
