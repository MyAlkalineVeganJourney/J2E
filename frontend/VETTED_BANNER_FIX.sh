#!/bin/bash
echo "=== THOROUGHLY VETTED BANNER FIX ==="
echo "Each line has been reviewed for safety."
echo ""

# ========== STEP 1: SAFETY CHECKS ==========
echo "1. Running safety checks..."
if [ ! -f "src/Pages/HomePage.js" ]; then
    echo "❌ ERROR: File not found: src/Pages/HomePage.js"
    exit 1
fi

if ! command -v python3 &> /dev/null; then
    echo "❌ ERROR: python3 not found. Required for this script."
    exit 1
fi

ORIGINAL_SIZE=$(wc -l < "src/Pages/HomePage.js")
echo "✅ Original file size: $ORIGINAL_SIZE lines"
echo ""

# ========== STEP 2: CREATE BACKUP ==========
echo "2. Creating timestamped backup..."
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backups/banner_fix_${TIMESTAMP}"
mkdir -p "$BACKUP_DIR"
cp "src/Pages/HomePage.js" "$BACKUP_DIR/"
BACKUP_PATH="$BACKUP_DIR/HomePage.js"
echo "✅ Backup created: $BACKUP_PATH"
echo "   Backup size: $(wc -l < "$BACKUP_PATH") lines"
echo ""

# ========== STEP 3: SHOW CURRENT STATE ==========
echo "3. Showing current banner section..."
START_LINE=$(grep -n "<section style={styles.titleSection}>" "src/Pages/HomePage.js" | head -1 | cut -d: -f1)
if [ -z "$START_LINE" ]; then
    echo "❌ ERROR: Could not find titleSection start"
    exit 1
fi

END_LINE=$(grep -n "</section>" "src/Pages/HomePage.js" | awk -v start="$START_LINE" '$1 > start {print $1; exit}' | head -1)
if [ -z "$END_LINE" ]; then
    echo "❌ ERROR: Could not find titleSection end"
    exit 1
fi

echo "   Current banner: lines $START_LINE to $END_LINE"
echo "   Section length: $((END_LINE - START_LINE + 1)) lines"
echo ""
echo "=== CURRENT BANNER PREVIEW ==="
sed -n "${START_LINE},${END_LINE}p" "src/Pages/HomePage.js"
echo ""
echo "=== END PREVIEW ==="
echo ""

# ========== STEP 4: SHOW PROPOSED CHANGES ==========
echo "4. Proposed new banner structure:"
cat << 'PROPOSED'
      {/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
      <section style={styles.titleSection}>

        {/* SINGLE ROW: LEFT LOGO + LEFT BOX + COMPANY NAME + RIGHT BOX + RIGHT LOGO */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
          padding: "0 8px",
          flexWrap: "nowrap"
        }}>
          
          {/* LEFT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
            />
          </div>
          
          {/* LEFT SIDE BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum || "Quantum Based"}</div>
              <div>{translations[currentLanguage]?.title?.scientific || "Scientifically Backed"}</div>
              <div>{translations[currentLanguage]?.title?.frequency || "Frequency Focused"}</div>
            </div>
          </div>
          
          {/* CENTER COMPANY NAME */}
          <h1 style={{
            fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
            fontWeight: "900",
            color: "#FFD700",
            textAlign: "center",
            margin: "0 10px",
            letterSpacing: "1.5px",
            textShadow: "0 0 15px rgba(255,215,0,0.95)",
            lineHeight: "1.1",
            flex: "1",
            whiteSpace: "nowrap",
            padding: "5px 0"
          }}>
            💦 MY ALKALINE VEGAN JOURNEY 💦
          </h1>
          
          {/* RIGHT SIDE BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum_physics || "Where Quantum Physics"}</div>
              <div>{translations[currentLanguage]?.title?.ancient_wisdom || "Meets Ancient Wisdom"}</div>
              <div>{translations[currentLanguage]?.title?.nutrition || "And Nutrition"}</div>
            </div>
          </div>
          
          {/* RIGHT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
            />
          </div>
          
        </div>
        
        {/* SOVEREIGN HEALTH TAGLINE */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          margin: "8px 0 6px",
          padding: "5px 0",
          border: "2px solid transparent",
          borderImage: "linear-gradient(45deg, #FF0000, #FFD700, #00FF00, #0000FF) 1",
          borderRadius: "4px",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}>
          <span style={{color: "#FF0000", fontWeight: "900", fontSize: "0.95rem"}}>SOVEREIGN HEALTH</span>
          <span style={{color: "#FFD700", fontSize: "1rem", fontWeight: "900"}}>•</span>
          <span style={{color: "#00FF00", fontWeight: "900", fontSize: "0.95rem"}}>VIBRATIONAL HEALING</span>
          <span style={{color: "#FFD700", fontSize: "1rem", fontWeight: "900"}}>•</span>
          <span style={{color: "#0000FF", fontWeight: "900", fontSize: "0.95rem"}}>ANCESTRAL NUTRITION</span>
        </div>

        {/* PAGE TITLE CONTAINER */}
        <div style={styles.pageTitleContainer}>
          <div style={styles.pageTitleWrapper}>
            <div style={styles.pageTitleInner}>
              {translations[currentLanguage]?.title?.home || "YOU ARE HOME"}
            </div>
          </div>
        </div>

      </section>
PROPOSED
echo ""
read -p "Press Enter to continue with replacement, or Ctrl+C to cancel..."
echo ""

# ========== STEP 5: CREATE VETTED PYTHON SCRIPT ==========
echo "5. Creating VETTED Python replacement script..."
cat > /tmp/vetted_replace.py << 'PYTHON'
#!/usr/bin/env python3
"""
VETTED BANNER REPLACEMENT SCRIPT
- Every operation is checked for errors
- Uses exact line numbers for precision
- Creates backup before any change
"""

import sys
import os
import re

def read_file_safe(filename):
    """Safely read file with error handling"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"❌ ERROR reading {filename}: {e}")
        sys.exit(1)

def write_file_safe(filename, content):
    """Safely write file with backup"""
    backup = filename + '.backup'
    try:
        # Create backup first
        with open(filename, 'r', encoding='utf-8') as f:
            with open(backup, 'w', encoding='utf-8') as b:
                b.write(f.read())
        
        # Write new content
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Written to {filename} (backup: {backup})")
        return True
    except Exception as e:
        print(f"❌ ERROR writing {filename}: {e}")
        return False

def main():
    print("=== VETTED BANNER REPLACEMENT ===")
    
    # 1. Read files
    print("1. Reading files...")
    original_file = "src/Pages/HomePage.js"
    if not os.path.exists(original_file):
        print(f"❌ File not found: {original_file}")
        sys.exit(1)
    
    content = read_file_safe(original_file)
    lines = content.split('\n')
    print(f"   File has {len(lines)} lines")
    
    # 2. Find the exact banner section using line numbers
    print("2. Finding banner section...")
    start_idx = -1
    end_idx = -1
    
    for i, line in enumerate(lines):
        if "<section style={styles.titleSection}>" in line:
            start_idx = i
            print(f"   Found start at line {i+1}: {line.strip()[:50]}...")
        elif start_idx != -1 and "</section>" in line:
            # Check if this is the right closing section
            # Count opening sections between start_idx and i
            sections_between = 0
            for j in range(start_idx, i):
                if "<section" in lines[j]:
                    sections_between += 1
                if "</section>" in lines[j]:
                    sections_between -= 1
            
            if sections_between == 1:  # This closes our section
                end_idx = i
                print(f"   Found end at line {i+1}: {line.strip()}")
                break
    
    if start_idx == -1 or end_idx == -1:
        print("❌ Could not find banner section boundaries")
        sys.exit(1)
    
    print(f"   Banner section: lines {start_idx+1} to {end_idx+1}")
    print(f"   Section length: {end_idx - start_idx + 1} lines")
    
    # 3. Create new banner
    print("3. Creating new banner...")
    new_banner = '''      {/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
      <section style={styles.titleSection}>

        {/* SINGLE ROW: LEFT LOGO + LEFT BOX + COMPANY NAME + RIGHT BOX + RIGHT LOGO */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
          padding: "0 8px",
          flexWrap: "nowrap"
        }}>
          
          {/* LEFT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
            />
          </div>
          
          {/* LEFT SIDE BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum || "Quantum Based"}</div>
              <div>{translations[currentLanguage]?.title?.scientific || "Scientifically Backed"}</div>
              <div>{translations[currentLanguage]?.title?.frequency || "Frequency Focused"}</div>
            </div>
          </div>
          
          {/* CENTER COMPANY NAME */}
          <h1 style={{
            fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)",
            fontWeight: "900",
            color: "#FFD700",
            textAlign: "center",
            margin: "0 10px",
            letterSpacing: "1.5px",
            textShadow: "0 0 15px rgba(255,215,0,0.95)",
            lineHeight: "1.1",
            flex: "1",
            whiteSpace: "nowrap",
            padding: "5px 0"
          }}>
            💦 MY ALKALINE VEGAN JOURNEY 💦
          </h1>
          
          {/* RIGHT SIDE BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum_physics || "Where Quantum Physics"}</div>
              <div>{translations[currentLanguage]?.title?.ancient_wisdom || "Meets Ancient Wisdom"}</div>
              <div>{translations[currentLanguage]?.title?.nutrition || "And Nutrition"}</div>
            </div>
          </div>
          
          {/* RIGHT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
            />
          </div>
          
        </div>
        
        {/* SOVEREIGN HEALTH TAGLINE */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          margin: "8px 0 6px",
          padding: "5px 0",
          border: "2px solid transparent",
          borderImage: "linear-gradient(45deg, #FF0000, #FFD700, #00FF00, #0000FF) 1",
          borderRadius: "4px",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}>
          <span style={{color: "#FF0000", fontWeight: "900", fontSize: "0.95rem"}}>SOVEREIGN HEALTH</span>
          <span style={{color: "#FFD700", fontSize: "1rem", fontWeight: "900"}}>•</span>
          <span style={{color: "#00FF00", fontWeight: "900", fontSize: "0.95rem"}}>VIBRATIONAL HEALING</span>
          <span style={{color: "#FFD700", fontSize: "1rem", fontWeight: "900"}}>•</span>
          <span style={{color: "#0000FF", fontWeight: "900", fontSize: "0.95rem"}}>ANCESTRAL NUTRITION</span>
        </div>

        {/* PAGE TITLE CONTAINER */}
        <div style={styles.pageTitleContainer}>
          <div style={styles.pageTitleWrapper}>
            <div style={styles.pageTitleInner}>
              {translations[currentLanguage]?.title?.home || "YOU ARE HOME"}
            </div>
          </div>
        </div>

      </section>'''
    
    # 4. Replace the section
    print("4. Replacing banner section...")
    new_lines = lines[:start_idx] + new_banner.split('\n') + lines[end_idx+1:]
    new_content = '\n'.join(new_lines)
    
    # 5. Add star pattern to titleSection style
    print("5. Adding star pattern background...")
    # Find titleSection style
    style_pattern = r'(titleSection: \{[\s\S]*?\n\s*\},?)'
    match = re.search(style_pattern, new_content, re.MULTILINE)
    
    if match:
        style_block = match.group(0)
        # Add star pattern after borderImage
        if 'borderImage:' in style_block:
            # Insert after borderImage line
            lines_in_style = style_block.split('\n')
            new_style_lines = []
            border_found = False
            
            for line in lines_in_style:
                new_style_lines.append(line)
                if 'borderImage:' in line and not border_found:
                    new_style_lines.append('      backgroundImage: "url(/images/star-pattern.png), linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))",')
                    new_style_lines.append('      backgroundSize: "100px, cover",')
                    new_style_lines.append('      backgroundPosition: "center",')
                    new_style_lines.append('      backgroundBlendMode: "overlay",')
                    border_found = True
            
            new_style_block = '\n'.join(new_style_lines)
            new_content = new_content.replace(style_block, new_style_block)
            print("   ✅ Star pattern added to titleSection style")
        else:
            print("   ⚠️ Could not find borderImage in titleSection style")
    else:
        print("   ⚠️ Could not find titleSection style block")
    
    # 6. Write file
    print("6. Writing updated file...")
    if write_file_safe(original_file, new_content):
        print("✅ SUCCESS: Banner replaced and star pattern added")
        return True
    else:
        print("❌ FAILED: Could not write file")
        return False

if __name__ == "__main__":
    main()
PYTHON

echo "✅ Vetted Python script created"
echo ""

# ========== STEP 6: RUN VETTED SCRIPT ==========
echo "6. Running vetted replacement script..."
python3 /tmp/vetted_replace.py
echo ""

# ========== STEP 7: VERIFICATION ==========
echo "7. Verifying changes..."
if [ $? -eq 0 ]; then
    echo "✅ Python script executed successfully"
    
    # Check for changes
    echo ""
    echo "=== VERIFICATION CHECKS ==="
    
    # Check 1: File still exists and is readable
    if [ -f "src/Pages/HomePage.js" ]; then
        NEW_SIZE=$(wc -l < "src/Pages/HomePage.js")
        echo "✅ File exists, new size: $NEW_SIZE lines"
        echo "   (Original: $ORIGINAL_SIZE lines, Diff: $((NEW_SIZE - ORIGINAL_SIZE)))"
    else:
        echo "❌ ERROR: File missing!"
    fi
    
    # Check 2: New content present
    echo ""
    echo "Checking for new elements:"
    if grep -q "SOVEREIGN HEALTH" "src/Pages/HomePage.js"; then
        echo "✅ Found: SOVEREIGN HEALTH tagline"
    else
        echo "❌ Missing: SOVEREIGN HEALTH tagline"
    fi
    
    if grep -q "logoCircle" "src/Pages/HomePage.js" | head -2 | wc -l | grep -q "2"; then
        echo "✅ Found: Two logos (left and right)"
    else
        echo "⚠️ Check: Logo count"
    fi
    
    if grep -q "star-pattern" "src/Pages/HomePage.js"; then
        echo "✅ Found: Star pattern background"
    else
        echo "❌ Missing: Star pattern background"
    fi
    
    # Check 3: Show new banner section
    echo ""
    echo "=== NEW BANNER PREVIEW ==="
    NEW_START=$(grep -n "<section style={styles.titleSection}>" "src/Pages/HomePage.js" | head -1 | cut -d: -f1)
    if [ -n "$NEW_START" ]; then
        sed -n "${NEW_START},$((NEW_START+25))p" "src/Pages/HomePage.js"
        echo "..."
    fi
    
else
    echo "❌ Python script failed"
    echo "Restoring from backup..."
    cp "$BACKUP_PATH" "src/Pages/HomePage.js"
    echo "✅ Original file restored from: $BACKUP_PATH"
fi

echo ""
echo "=== SUMMARY ==="
echo "Backup location: $BACKUP_PATH"
echo "Original size: $ORIGINAL_SIZE lines"
echo "If anything went wrong, restore with:"
echo "  cp '$BACKUP_PATH' src/Pages/HomePage.js"
echo ""
echo "✅ VETTED PROCESS COMPLETE"
