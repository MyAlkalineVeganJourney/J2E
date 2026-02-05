#!/bin/bash
echo "Checking for CSS that might override navbar positioning..."
echo ""
echo "1. Global CSS imports:"
grep -n "import.*css\|import.*style" src/Pages/HomePage.js
echo ""
echo "2. External style sheets that might affect position:"
find src -name "*.css" -o -name "*.scss" -o -name "*.module.css" | head -10
echo ""
echo "3. If navbar still scrolls, check browser DevTools:"
echo "   - Right click navbar → Inspect"
echo "   - Check 'Computed' tab for 'position' property"
echo "   - Check if any parent element has 'overflow' or 'transform'"
