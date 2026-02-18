#!/bin/bash
mkdir -p src/locales/English
cat > src/locales/English/game.json << 'END'
{
  "feedback": {
    "frequencyElevated": "✨ Frequency Elevated! +{{points}}",
    "godSpaceActivated": "🌟 GOD SPACE ACTIVATED! +{{points}}",
    "tryPositiveWord": "💫 This word carries a different frequency. Choose a positive word.",
    "correctTranslation": "🔄 EXCELLENT TRANSLATION!",
    "incorrectTranslation": "💫 Try: \"{{suggestion}}\"",
    "streakMilestone": "🔥 {{streak}} consecutive elevated frequencies!",
    "levelUp": "⬆️ LEVEL {{level}} · Your consciousness is expanding",
    "gameReset": "🌀 Reset complete. Begin your new frequency journey."
  },
  "brianStory": {
    "title": "Brian's Quantum Linguistic Shift",
    "original": "\"I love you, BUT I need space.\"",
    "transformed": "\"I love you, AND I need space.\"",
    "lesson": "The word 'but' acts as a quantum eraser. The word 'and' creates quantum entanglement.",
    "frequencyShift": "396 Hz → 639 Hz",
    "wordId": "BUT"
  },
  "stressQuantum": {
    "title": "Stress: The Collapse of Infinite Possibility",
    "explanation": "Stress kills without touching you. It is the collapse of infinite possibility into a single, contracted reality.",
    "observerEffect": "Your thoughts are the observer. Your words record the measurement.",
    "frequency": "396 Hz",
    "reframe": "Stress is information, not instruction.",
    "wordId": "STRESS"
  },
  "levels": {
    "1": { "name": "Frequency Awakening" },
    "2": { "name": "Sentence Translation" },
    "3": { "name": "Quantum Linguistics Mastery" }
  }
}
END
