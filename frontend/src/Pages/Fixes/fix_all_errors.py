#!/usr/bin/env python3
import os
from datetime import datetime

FILE_PATH = "/Users/robin/Desktop/J2E/frontend/src/Pages/HomePage.js"
BACKUP_PATH = f"{FILE_PATH}.bak.{datetime.now().strftime('%Y%m%d_%H%M%S')}"

FIXES = {
    2608: '              {translations[currentLanguage]?.title?.frequency || "FREQUENCY FOCUSED"}\n',
    2667: '              {translations[currentLanguage]?.title?.quantum_physics || "WHERE QUANTUM PHYSICS"}<br />\n',
    2679: '              {translations[currentLanguage]?.title?.ancient_wisdom || "MEETS ANCIENT WISDOM"}<br />\n',
    2736: '              {translations[currentLanguage]?.title?.quantum || "QUANTUM BASED"}<br />\n',
    2737: '              {translations[currentLanguage]?.title?.scientific || "SCIENTIFICALLY BACKED"}<br />\n',
    2738: '              {translations[currentLanguage]?.title?.frequency || "FREQUENCY FOCUSED"}\n'
}

print("🔧 MAVJ HomePage.js - Fix ALL Remaining Errors")
print("==============================================")

if not os.path.exists(FILE_PATH):
    print(f"❌ ERROR: File not found")
    exit(1)

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"\n📁 File loaded. Total lines: {len(lines)}")

backup_created = False
fixed_count = 0

for line_num, correct_line in FIXES.items():
    if line_num <= len(lines):
        # Check if this line needs fixing
        current = lines[line_num-1]
        if '|| "{' in current:
            if not backup_created:
                with open(BACKUP_PATH, 'w', encoding='utf-8') as f:
                    f.writelines(lines)
                print(f"\n💾 Backup created: {BACKUP_PATH}")
                backup_created = True
            
            print(f"\n📄 Line {line_num} (BEFORE):")
            print(f"   {current.strip()}")
            
            lines[line_num-1] = correct_line
            
            print(f"✅ Line {line_num} (AFTER):")
            print(f"   {lines[line_num-1].strip()}")
            fixed_count += 1
        else:
            print(f"\n⏭️  Line {line_num} already looks correct, skipping")

if fixed_count > 0:
    print(f"\n📝 Writing {fixed_count} fixes back to file...")
    with open(FILE_PATH, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"✅ Successfully fixed {fixed_count} error lines")
else:
    print(f"\n✅ No errors found to fix")

print(f"\n🚀 Next step: cd /Users/robin/Desktop/J2E/frontend && npm run build")
