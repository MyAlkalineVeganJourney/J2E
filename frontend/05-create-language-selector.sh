#!/bin/bash
mkdir -p src/components
cat > src/components/LanguageSelector.jsx << 'END'
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function LanguageSelector({ className = '' }) {
  const { currentLanguage, setCurrentLanguage, getAvailableLanguages } = useTranslation();
  const languages = getAvailableLanguages();

  return (
    <div className={`language-selector-container ${className}`}>
      <select 
        value={currentLanguage}
        onChange={(e) => setCurrentLanguage(e.target.value)}
        className="language-selector"
        aria-label="Select your frequency language"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.native} · {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
END
