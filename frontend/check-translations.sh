#!/bin/bash

echo "🔍 SIMPLE TRANSLATION CHECK"
echo "==========================="
echo ""

LOCALES_DIR="./src/locales"

if [ ! -d "$LOCALES_DIR" ]; then
    echo "❌ ERROR: Cannot find locales directory at:"
    echo "   $LOCALES_DIR"
    echo ""
    echo "Current directory: $(pwd)"
    exit 1
fi

cd "$LOCALES_DIR"
echo "📁 Working in: $(pwd)"
echo ""

echo "📊 LANGUAGE FILES OVERVIEW:"
echo "==========================="
echo ""

for lang in en es fr de it zh tw am ar sw kw ba na sa he gr la sn; do
    echo -n "$lang: "
    if [ -d "$lang" ] && [ -f "$lang/translation.json" ]; then
        if command -v stat &> /dev/null; then
            FILE_SIZE=$(stat -f%z "$lang/translation.json" 2>/dev/null || stat -c%s "$lang/translation.json" 2>/dev/null || echo "0")
        else
            FILE_SIZE="N/A"
        fi
        LINE_COUNT=$(wc -l < "$lang/translation.json" 2>/dev/null || echo "0")
        echo "✅ Exists ($FILE_SIZE bytes, $LINE_COUNT lines)"
    else
        echo "❌ MISSING"
    fi
done

echo ""
echo "==========================="
echo "✅ Check complete!"
cd ..
