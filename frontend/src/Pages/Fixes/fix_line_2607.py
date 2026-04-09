#!/usr/bin/env python3
import os
from datetime import datetime

FILE_PATH = "/Users/robin/Desktop/J2E/frontend/src/Pages/HomePage.js"
BACKUP_PATH = f"{FILE_PATH}.bak.{datetime.now().strftime('%Y%m%d_%H%M%S')}"
TARGET_LINE = 2607

print("🔧 MAVJ HomePage.js Line 2607 Fixer")
print("===================================")

if not os.path.exists(FILE_PATH):
    print(f"❌ ERROR: File not found at {FILE_PATH}")
    exit(1)

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

if len(lines) < TARGET_LINE:
    print(f"❌ ERROR: File only has {len(lines)} lines")
    exit(1)

print(f"\n📄 Original line {TARGET_LINE}:")
print(f"   {lines[TARGET_LINE-1].strip()}")

print(f"\n💾 Creating backup: {BACKUP_PATH}")
with open(BACKUP_PATH, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print(f"✅ Backup created")

correct_line = '              {translations[currentLanguage]?.title?.scientific || "SCIENTIFICALLY BACKED"}<br />\n'
lines[TARGET_LINE-1] = correct_line

print(f"\n✅ Fixed line {TARGET_LINE}:")
print(f"   {lines[TARGET_LINE-1].strip()}")

print(f"\n📝 Writing fixed content back to {FILE_PATH}")
with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"\n✅ SUCCESS! Fixed line {TARGET_LINE}.")
print(f"📁 Backup saved at: {BACKUP_PATH}")
print(f"\n🚀 Next step: cd /Users/robin/Desktop/J2E/frontend && npm run build")
