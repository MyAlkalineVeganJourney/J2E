#!/bin/bash
FILE="src/Pages/HomePage.js"

echo "Fixing conflicting logo paths..."

# Create backup
cp "$FILE" "${FILE}.backup.logo-conflict"

# Fix line 2456: Change from absolute path to /images/MAVJLogo.jpg
sed -i '' '2456s|src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"|src="/images/MAVJLogo.jpg"|' "$FILE"

# Fix line 2459: Update error handler to use correct path
sed -i '' '2459s|e.target.src = "/Users/robin/Desktop/J2E/images/MAVJLogo.jpg";|e.target.src = "/images/MAVJLogo.jpg";|' "$FILE"

# Also check line 905 - this might be an old reference
echo "Checking line 905 reference..."
sed -n '905p' "$FILE"

echo "Logo paths standardized to /images/MAVJLogo.jpg"
