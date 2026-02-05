#!/bin/bash
echo "=== STEP 2: REMOVE CENTER LOGO ==="
echo "Current banner lines 2464-2520:"
sed -n '2464,2520p' src/Pages/HomePage.js | grep -n "logoCircle\|logoRow\|CENTER LOGO"
echo ""
echo "Looking for the center logo section..."
# Find the center logo div
CENTER_LOGO_START=$(grep -n "CENTER LOGO - FULLY VISIBLE" src/Pages/HomePage.js)
if [ -n "$CENTER_LOGO_START" ]; then
    LINE=$(echo "$CENTER_LOGO_START" | cut -d: -f1)
    echo "Found center logo at line: $LINE"
    echo ""
    echo "This section will be removed:"
    sed -n "$((LINE-2)),$((LINE+8))p" src/Pages/HomePage.js
    echo ""
    read -p "Press Enter to remove it, or Ctrl+C to cancel..."
    
    # Remove lines LINE-2 to LINE+8 (the entire logo section)
    sed -i '' "$((LINE-2)),$((LINE+8))d" src/Pages/HomePage.js
    echo "✅ Center logo removed"
else
    echo "⚠️ Center logo comment not found, checking for logoCircle in logoRow..."
    # Alternative method
    LOGO_ROW_START=$(grep -n "styles.logoRow" src/Pages/HomePage.js)
    if [ -n "$LOGO_ROW_START" ]; then
        LINE=$(echo "$LOGO_ROW_START" | cut -d: -f1)
        echo "Found logoRow start at line: $LINE"
        echo "Checking for logoCircle within..."
        sed -n "$LINE,$((LINE+30))p" src/Pages/HomePage.js | grep -n "logoCircle"
    fi
fi
