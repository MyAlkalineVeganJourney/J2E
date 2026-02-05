#!/bin/bash
FILE="src/Pages/HomePage.js"

echo "=== FIXING WRONG PATH ==="
echo ""
echo "Changing from: /frontend/public/images/MAVJLogo.jpg"
echo "Changing to:   /images/MAVJLogo.jpg"
echo ""

# Fix line 2450
sed -i '' '2450s|src="/frontend/public/images/MAVJLogo.jpg"|src="/images/MAVJLogo.jpg"|' "$FILE"

# Fix line 2453 (the error handler)
sed -i '' '2453s|e.target.src = "/frontend/public/images/MAVJLogo.jpg";|e.target.src = "/images/MAVJLogo.jpg";|' "$FILE"

echo "✓ Paths fixed!"
echo ""
echo "Now line 2450:"
sed -n '2450p' "$FILE"
echo ""
echo "Now line 2453:"
sed -n '2453p' "$FILE"
