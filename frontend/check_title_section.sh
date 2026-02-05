#!/bin/bash
echo "=== CURRENT TITLE SECTION STYLES ==="
grep -n -A 15 "titleSection: {" src/Pages/HomePage.js
echo ""
echo "=== WHAT WE NEED TO FIX ==="
echo "1. Add 4-side multicolored border (not just top)"
echo "2. Ensure star pattern background is visible"
echo "3. Align with menu border styling"
