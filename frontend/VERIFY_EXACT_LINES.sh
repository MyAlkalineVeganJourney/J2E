#!/bin/bash
echo "=== VERIFYING EXACT LINES ==="
echo ""

FILE="src/Pages/HomePage.js"

# Check lines 2463-2510 EXACTLY
echo "Lines 2460-2515 (context around the banner):"
sed -n '2460,2515p' "$FILE"
echo ""

# Count lines in the banner section
echo "Banner section details:"
START=2463
END=2510
LINES=$((END - START + 1))
echo "From line $START to $END = $LINES lines"
echo ""

# Show the EXACT content
echo "=== EXACT BANNER CONTENT (lines $START-$END) ==="
sed -n "${START},${END}p" "$FILE"
echo "=== END BANNER ==="
echo ""

# Also check the titleSection style location
echo "titleSection style location:"
grep -n "titleSection: {" "$FILE"
echo ""

echo "✅ Now I know EXACTLY where to make changes!"
