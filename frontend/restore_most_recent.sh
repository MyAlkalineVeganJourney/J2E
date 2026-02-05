#!/bin/bash
echo "=== RESTORING FROM MOST RECENT BACKUP ==="
echo ""
echo "Available backups:"
ls -lt src/Pages/HomePage.js.backup* | head -5
echo ""
echo "Most recent backup:"
MOST_RECENT=$(ls -t src/Pages/HomePage.js.backup* | head -1)
echo "$MOST_RECENT"
echo ""
echo "Restoring..."
cp "$MOST_RECENT" "src/Pages/HomePage.js"
echo "✓ Restored from: $MOST_RECENT"
echo ""
echo "Now let's check what we have:"
echo "Lines 2440-2480 (titleSection area):"
sed -n '2440,2480p' src/Pages/HomePage.js
