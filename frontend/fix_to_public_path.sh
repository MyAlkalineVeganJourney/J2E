#!/bin/bash
FILE="src/Pages/HomePage.js"

echo "=== FIXING TO PUBLIC PATH ==="
echo ""
echo "Setting src to \"/images/MAVJLogo.jpg\" (relative to public folder)"
echo ""
# Fix line 2456 to correct path
sed -i '' '2456s|src="[^"]*"|src="/images/MAVJLogo.jpg"|' "$FILE"
echo "Line 2456 now:"
sed -n '2456p' "$FILE"
echo ""
echo "Also fix the onError fallback path on line 2459:"
sed -i '' '2459s|e.target.src = "[^"]*";|e.target.src = "/images/MAVJLogo.jpg";|' "$FILE"
echo "Line 2459 now:"
sed -n '2459p' "$FILE"
