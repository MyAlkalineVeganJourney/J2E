#!/bin/bash
echo "=== CHECKING LOGO IMAGE PATHS ==="
echo ""
echo "1. Current logo path in titleSection:"
grep -n "logoImg\|MAVJLogo" src/Pages/HomePage.js | head -10
echo ""
echo "2. Checking if image file exists:"
LOGO_PATH="/Users/robin/Desktop/J2E/frontend/public/images/MAVJLogo.jpg"
if [ -f "$LOGO_PATH" ]; then
    echo "✓ Logo exists at: $LOGO_PATH"
    echo "  File size: $(ls -lh "$LOGO_PATH" | awk '{print $5}')"
else
    echo "✗ Logo NOT found at: $LOGO_PATH"
    echo "  Looking for alternatives..."
    find /Users/robin/Desktop/J2E -name "*logo*" -o -name "*Logo*" 2>/dev/null | head -10
fi
echo ""
echo "3. Checking public/images directory:"
ls -la /Users/robin/Desktop/J2E/frontend/public/images/ 2>/dev/null || echo "No public/images directory"
