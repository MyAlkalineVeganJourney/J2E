#!/bin/bash
echo "=== CHECKING SERVER CONFIG ==="
echo ""
echo "1. Check package.json for start script:"
grep -A2 -B2 "start" package.json
echo ""
echo "2. Check if there's a .env file affecting paths:"
ls -la .env* 2>/dev/null || echo "No .env files found"
echo ""
echo "3. Check React version:"
grep -i "react" package.json | head -2
echo ""
echo "4. Common issues:"
echo "   - Server not running on port 3000"
echo "   - Browser cache showing old image"
echo "   - Image file permissions"
echo "   - Wrong MIME type"
