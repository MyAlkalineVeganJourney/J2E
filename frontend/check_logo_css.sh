#!/bin/bash
echo "=== CHECKING LOGO CSS STYLES ==="
echo ""
echo "1. logoCircle styles:"
grep -n -A 5 "logoCircle:" src/Pages/HomePage.js
echo ""
echo "2. logoImg styles:"
grep -n -A 5 "logoImg:" src/Pages/HomePage.js
echo ""
echo "3. Common issues:"
echo "   - overflow: 'hidden' might clip image"
echo "   - background color might hide image"
echo "   - objectFit might be wrong"
echo "   - padding might be too large"
