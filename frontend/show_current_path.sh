#!/bin/bash
echo "=== SHOWING CURRENT PATH IN CODE ==="
echo ""
echo "Line 2456:"
LINE_2456=$(sed -n '2456p' src/Pages/HomePage.js)
echo "$LINE_2456"
echo ""
echo "Is it:"
echo "1. /images/MAVJLogo.jpg ✓ (correct for public folder)"
echo "2. /public/images/MAVJLogo.jpg ✗ (wrong)"
echo "3. /Users/robin/Desktop/J2E/images/MAVJLogo.jpg ✗ (wrong)"
echo "4. Something else?"
echo ""
echo "What do you see above?"
