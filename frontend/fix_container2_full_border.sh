#!/bin/bash
FILE="src/Pages/HomePage.js"

echo "Fixing Container 2 to have 4-side rainbow border (matching menu)..."

# Create backup
cp "$FILE" "${FILE}.backup.full-border"

# Replace the titleSection styles from line 1601
awk '
BEGIN { in_title_section = 0 }
/^[[:space:]]*titleSection: {$/ {
    in_title_section = 1
    print "    titleSection: {"
    print "      position: \"fixed\","
    print "      top: \"45px\", // Below navbar"
    print "      left: 0,"
    print "      right: 0,"
    print "      zIndex: 1700,"
    print "      border: \"3px solid\","
    print "      borderImage: \"linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red) 1\","
    print "      backgroundImage: \"url(/images/star-pattern.png), linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))\","
    print "      backgroundSize: \"100px, cover\","
    print "      backgroundPosition: \"center\","
    print "      backgroundBlendMode: \"overlay\","
    print "      padding: \"10px 15px 8px\","
    print "      display: \"flex\","
    print "      flexDirection: \"column\","
    print "      alignItems: \"center\","
    print "      backdropFilter: \"blur(8px)\","
    print "      boxShadow: \"0 4px 20px rgba(0,0,0,0.8)\","
    print "      minHeight: \"135px\","
    print "      maxHeight: \"135px\""
    print "    },"
    next
}
in_title_section && /^[[:space:]]*},$/ {
    in_title_section = 0
    next
}
in_title_section {
    # Skip the original lines
    next
}
{ print }
' "$FILE" > "${FILE}.temp"

mv "${FILE}.temp" "$FILE"

echo "Container 2 now has 4-side rainbow border matching the menu!"
