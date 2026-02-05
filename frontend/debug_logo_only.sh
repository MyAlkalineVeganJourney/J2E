#!/bin/bash
echo "=== DEBUGGING LOGO ONLY ==="
echo ""
echo "1. Current logo image path in code:"
grep -n "src=.*MAVJLogo" src/Pages/HomePage.js
echo ""
echo "2. Check if the file exists at that path:"
LOGO_PATH="/Users/robin/Desktop/J2E/frontend/public/images/MAVJLogo.jpg"
if [ -f "$LOGO_PATH" ]; then
    echo "✓ File exists: $LOGO_PATH"
    echo "  Size: $(ls -lh "$LOGO_PATH" | awk '{print $5}')"
else
    echo "✗ File NOT found at: $LOGO_PATH"
fi
echo ""
echo "3. Quick browser test URL:"
echo "   Open: http://localhost:3000/images/MAVJLogo.jpg"
echo "   This tests if the server can serve the image"
