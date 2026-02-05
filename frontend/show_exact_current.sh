#!/bin/bash
echo "=== EXACT CURRENT LAYOUT ==="
echo ""
echo "Let me find the exact lines of the titleSection JSX:"
START=$(grep -n "<section style={styles.titleSection}>" src/Pages/HomePage.js | head -1 | cut -d: -f1)
END=$(grep -n "</section>" src/Pages/HomePage.js | awk -v start="$START" '$1 > start {print $1; exit}')
echo "titleSection spans lines: $START to $END"
echo ""
echo "Current content:"
sed -n "${START},${END}p" src/Pages/HomePage.js
echo ""
echo "Now I can see exactly what needs to be changed."
