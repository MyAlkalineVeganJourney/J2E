#!/bin/bash
mkdir -p src/locales
LANGUAGES=("English" "Spanish" "French" "German" "Italian" "Chinese" "Taiwanese" "Amharic" "Arabic" "Swahili" "Patois" "BAramaic" "NAramaic" "SAramaic" "Hebrew" "Greek" "Latin" "Sanskrit")
for lang in "${LANGUAGES[@]}"; do
  mkdir -p "src/locales/$lang"
  touch "src/locales/$lang/common.json"
  touch "src/locales/$lang/words.json"
  touch "src/locales/$lang/game.json"
  echo "  ✅ Created: $lang/"
done
