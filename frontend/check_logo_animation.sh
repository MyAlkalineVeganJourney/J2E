#!/bin/bash
echo "=== CHECKING LOGO ANIMATION CSS ==="
echo ""
echo "1. logoCircle styles (line 1677):"
sed -n '1677,1690p' src/Pages/HomePage.js
echo ""
echo "2. Look for animation property:"
grep -n "animation:" src/Pages/HomePage.js
echo ""
echo "3. Look for @keyframes definitions:"
grep -n "@keyframes\|keyframes" src/Pages/HomePage.js
echo ""
echo "4. The animation might be hiding/breaking the logo"
