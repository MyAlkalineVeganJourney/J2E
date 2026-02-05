#!/bin/bash
echo "=== VERIFYING LOGO LOCATION ==="
echo ""
echo "The logo should be at:"
echo "/Users/robin/Desktop/J2E/frontend/public/images/MAVJLogo.jpg"
echo ""
if [ -f "/Users/robin/Desktop/J2E/frontend/public/images/MAVJLogo.jpg" ]; then
    echo "✓ Logo exists in public/images/"
    echo "  This is correct!"
else
    echo "✗ Logo NOT in public/images/"
    echo ""
    echo "Let me check where it is:"
    find /Users/robin/Desktop/J2E -name "MAVJLogo*" -type f 2>/dev/null
fi
