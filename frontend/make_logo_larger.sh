#!/bin/bash
FILE="src/Pages/HomePage.js"

echo "=== MAKING LOGO LARGER ==="
echo ""
echo "Logo is only 50px x 50px (too small)"
echo "Making it 100px..."
sed -i '' '
/logoCircle: {/,/},/ {
    s/width: "50px"/width: "100px"/
    s/height: "50px"/height: "100px"/
}
' "$FILE"

echo "✓ Logo size increased to 100px"
echo ""
echo "Also increase box shadow for visibility:"
sed -i '' '
/logoCircle: {/,/},/ {
    s/boxShadow: "[^"]*"/boxShadow: "0 0 30px rgba(255,215,0,0.9)"/
}
' "$FILE"

echo "✓ Enhanced visibility"
