#!/bin/bash
echo "=== CHECKING TITLE SECTION - FIXED VERSION ==="
echo ""
FILE="src/Pages/HomePage.js"

echo "1. First, let's check if file exists and size:"
ls -lh "$FILE"
echo ""
echo "2. Look for titleSection start:"
grep -n "titleSection" "$FILE" | head -5
echo ""
echo "3. Let me try a different approach - show area around line 2464:"
echo "Lines 2450-2530:"
if [ -f "$FILE" ]; then
    sed -n '2450,2530p' "$FILE"
else
    echo "File not found!"
fi
echo ""
echo "4. Also check for common patterns:"
echo "Looking for 'MY ALKALINE VEGAN JOURNEY':"
grep -n "ALKALINE VEGAN JOURNEY" "$FILE"
echo ""
echo "Looking for 'logoCircle':"
grep -n "logoCircle" "$FILE"
echo ""
echo "Looking for 'pageTitle':"
grep -n "pageTitle" "$FILE"
