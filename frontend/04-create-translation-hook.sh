#!/bin/bash
mkdir -p src/hooks
cat > src/hooks/useTranslation.js << 'END'
import { useLanguage } from '../context/LanguageContext';

export const useTranslation = () => {
  const { 
    currentLanguage, setCurrentLanguage, t, getWord, getGameMessage,
    getLanguageDisplayName, supportedLanguages 
  } = useLanguage();

  const getAvailableLanguages = () => [
    { code: 'English', name: 'English', native: 'English' },
    { code: 'Spanish', name: 'Spanish', native: 'Español' },
    { code: 'French', name: 'French', native: 'Français' },
    { code: 'German', name: 'German', native: 'Deutsch' },
    { code: 'Italian', name: 'Italian', native: 'Italiano' },
    { code: 'Chinese', name: 'Chinese', native: '中文' },
    { code: 'Taiwanese', name: 'Taiwanese', native: '台語' },
    { code: 'Amharic', name: 'Amharic', native: 'አማርኛ' },
    { code: 'Arabic', name: 'Arabic', native: 'العربية' },
    { code: 'Swahili', name: 'Swahili', native: 'Kiswahili' },
    { code: 'Patois', name: 'Patois', native: 'Kreyòl' },
    { code: 'BAramaic', name: 'Biblical Aramaic', native: 'ܐܪܡܝܐ ܕܟܬܒܐ' },
    { code: 'NAramaic', name: 'Neo-Aramaic', native: 'ܣܘܪܬ' },
    { code: 'SAramaic', name: 'Syriac Aramaic', native: 'ܣܘܪܝܝܐ' },
    { code: 'Hebrew', name: 'Hebrew', native: 'עברית' },
    { code: 'Greek', name: 'Greek', native: 'Ελληνικά' },
    { code: 'Latin', name: 'Latin', native: 'Latina' },
    { code: 'Sanskrit', name: 'Sanskrit', native: 'संस्कृतम्' }
  ];

  const brianStory = {
    wordId: "BUT",
    original: "I love you, but I need space.",
    transformed: "I love you and I need space.",
    lesson: "The word 'but' acts as a quantum eraser. The word 'and' creates quantum entanglement.",
    frequencyShift: "396 Hz → 639 Hz",
    quantumPrinciple: "Quantum Eraser Experiment",
    narrative: {
      introduction: "Meet Brian. His transformation shows the power of one word.",
      beforeQuote: "I love you, BUT I need space.",
      afterQuote: "I love you, AND I need space.",
      insight: "The word 'but' erased everything before it.",
      afterInsight: "The word 'and' held both truths in superposition.",
      practice: "Replace every 'but' with 'and' for one day."
    }
  };

  const stressQuantumExplanation = {
    wordId: "STRESS",
    principle: "Quantum Wave Function Collapse",
    explanation: "Stress kills without touching you. It is the collapse of infinite possibility into a single, contracted reality.",
    observerEffect: "Your thoughts are the observer. Your words record the measurement.",
    frequency: "396 Hz",
    reframe: "Stress is information, not instruction."
  };

  return {
    t, getWord, getGameMessage, getLanguageDisplayName,
    currentLanguage, setCurrentLanguage, getAvailableLanguages, supportedLanguages,
    brianStory, stressQuantumExplanation,
    TOTAL_WORDS: 105
  };
};
END
