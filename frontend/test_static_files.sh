#!/bin/bash
echo "=== TESTING STATIC FILE SERVING ==="
echo ""
echo "1. First, create a simple test file:"
echo "   echo 'TEST' > public/test.txt"
echo "   echo 'TEST' > public/test.html"
echo ""
echo "2. Then start server: npm start"
echo ""
echo "3. Test these URLs in browser:"
echo "   http://localhost:3000/test.txt"
echo "   http://localhost:3000/test.html"
echo "   http://localhost:3000/images/MAVJLogo.jpg"
echo ""
echo "4. If ALL fail: Server issue"
echo "   If only logo fails: Path issue"
echo "   If test files work: Logo file issue"
echo ""
echo "Let me create the test files now..."
echo "TEST FILE" > public/test.txt
cat > public/test.html << 'HTML'
<!DOCTYPE html>
<html>
<body>
<h1>Test Page</h1>
<p>If you see this, static files work.</p>
</body>
</html>
HTML
echo "✓ Test files created in public/"
