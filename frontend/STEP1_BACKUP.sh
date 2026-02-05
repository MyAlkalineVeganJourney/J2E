#!/bin/bash
echo "=== STEP 1: SAFE BACKUP ==="
BACKUP="src/Pages/HomePage.js.backup.$(date +%Y%m%d_%H%M%S)"
cp src/Pages/HomePage.js "$BACKUP"
echo "✅ Backup: $BACKUP"
echo "✅ File size: $(wc -l < src/Pages/HomePage.js) lines"
