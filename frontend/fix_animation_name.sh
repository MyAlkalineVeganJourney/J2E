#!/bin/bash
FILE="src/Pages/HomePage.js"

echo "=== FIXING ANIMATION NAME ==="
echo ""
echo "logoCircle uses: 'heartbeat'"
echo "But only 'logoPulse' is defined!"
echo ""
echo "Changing 'heartbeat' to 'logoPulse'..."
sed -i '' '1685s/animation: "heartbeat 1.4s ease-in-out infinite"/animation: "logoPulse 1.4s ease-in-out infinite"/' "$FILE"

echo "✓ Animation fixed to use existing 'logoPulse'"
echo ""
echo "Now line 1685:"
sed -n '1685p' "$FILE"
echo ""
echo "Or better yet, let's just remove animation temporarily:"
sed -i '' '1685s/animation: "[^"]*",//' "$FILE"
echo "Animation removed for now."
