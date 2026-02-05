#!/bin/bash
echo "=== CHECKING FOR BACKUPS ==="
echo ""
echo "Looking for backup files..."
ls -la src/Pages/HomePage.js.backup* 2>/dev/null | head -10
echo ""
echo "If no backups, check git:"
if command -v git &> /dev/null; then
    git status src/Pages/HomePage.js 2>/dev/null || echo "Not a git repo"
fi
