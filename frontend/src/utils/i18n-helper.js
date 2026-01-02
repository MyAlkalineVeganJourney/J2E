// Temporary helper to use both old and new systems
import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t, i18n } = useTranslation();
  
  // Function to get translations from the old system temporarily
  const getOldTranslation = (key) => {
    // This would access your old translations.js
    // You can keep this until all components are migrated
    return key; // placeholder
  };
  
  return {
    t,           // New i18n system
    i18n,        // i18n instance
    get: getOldTranslation,  // Old system access
    currentLanguage: i18n.language
  };
};
