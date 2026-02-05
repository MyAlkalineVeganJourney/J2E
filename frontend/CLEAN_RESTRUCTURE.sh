#!/bin/bash
echo "=== CLEAN BANNER RESTRUCTURE ==="
echo ""

# 1. Create fresh backup
BACKUP="src/Pages/HomePage.js.backup.clean_$(date +%Y%m%d_%H%M%S)"
cp src/Pages/HomePage.js "$BACKUP"
echo "✅ Fresh backup: $BACKUP"
echo ""

# 2. Show EXACTLY what we're replacing
echo "=== CURRENT BANNER (lines 2464-2517) ==="
sed -n '2464,2517p' src/Pages/HomePage.js
echo ""
echo "=== PROPOSED NEW BANNER ==="
cat << 'NEWBANNER'
      {/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
      <section style={styles.titleSection}>

        {/* SINGLE ROW: LEFT LOGO + LEFT BOX + COMPANY NAME + RIGHT BOX + RIGHT LOGO */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",  // SPACING FROM TOP BORDER
          padding: "0 8px",
          flexWrap: "nowrap"
        }}>
          
          {/* LEFT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
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
          
          {/* CENTER COMPANY NAME (MOVED DOWN FROM BORDER) */}
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
              onError={(e) => { e.target.onerror = null; e.target.src = "/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
            />
          </div>
          
        </div>
        
        {/* SOVEREIGN HEALTH TAGLINE ROW */}
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
NEWBANNER

echo ""
echo "=== CHANGES SUMMARY ==="
echo "1. ✅ Removed center logo from middle"
echo "2. ✅ Added logos on BOTH sides of company name"
echo "3. ✅ Company name moved down (marginTop)"
echo "4. ✅ Added Sovereign Health tagline"
echo "5. ✅ Maintains multicolor border"
echo ""
echo "=== ALSO NEED TO ADD STAR PATTERN ==="
echo "Need to update titleSection style to add star pattern background"
echo ""
read -p "Press Enter to apply these changes, or Ctrl+C to cancel..."

# 3. Find and replace the entire banner section
START_LINE=$(grep -n "<section style={styles.titleSection}>" src/Pages/HomePage.js | cut -d: -f1)
END_LINE=$(grep -n "</section>" src/Pages/HomePage.js | awk -v start="$START_LINE" '$1 > start {print $1; exit}')

if [ -z "$START_LINE" ] || [ -z "$END_LINE" ]; then
    echo "❌ ERROR: Could not find banner section"
    exit 1
fi

echo "Replacing lines $START_LINE to $END_LINE..."

# Create the new banner with proper escaping
NEW_BANNER='      {/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
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
              onError={(e) => { e.target.onerror = null; e.target.src = "/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
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
              onError={(e) => { e.target.onerror = null; e.target.src = "/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
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

      </section>'

# Replace the section
sed -i '' "${START_LINE},${END_LINE}d" src/Pages/HomePage.js
echo "$NEW_BANNER" | sed -i '' "${START_LINE}r /dev/stdin" src/Pages/HomePage.js

echo "✅ Banner replaced!"
echo ""

# 4. Add star pattern to titleSection style
echo "=== ADDING STAR PATTERN BACKGROUND ==="
echo "Current titleSection style line: $(grep -n "titleSection: {" src/Pages/HomePage.js | cut -d: -f1)"
echo ""

# Find the line with borderImage in titleSection
BORDER_LINE=$(grep -n "borderImage: \"linear-gradient(45deg, violet" src/Pages/HomePage.js)
if [ -n "$BORDER_LINE" ]; then
    LINE_NUM=$(echo "$BORDER_LINE" | cut -d: -f1)
    echo "Found borderImage at line $LINE_NUM"
    echo "Adding star pattern background after it..."
    
    # Insert star pattern properties
    sed -i '' "$((LINE_NUM+1))i\\
      backgroundImage: \"url(/images/star-pattern.png), linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))\",\\
      backgroundSize: \"100px, cover\",\\
      backgroundPosition: \"center\",\\
      backgroundBlendMode: \"overlay\"," src/Pages/HomePage.js
    
    echo "✅ Star pattern added"
else
    echo "⚠️ Could not find borderImage line"
fi

echo ""
echo "=== VERIFICATION ==="
echo "New banner preview (first 20 lines):"
NEW_START=$(grep -n "<section style={styles.titleSection}>" src/Pages/HomePage.js | cut -d: -f1)
sed -n "${NEW_START},$((NEW_START+20))p" src/Pages/HomePage.js
echo ""
echo "✅ RESTRUCTURE COMPLETE!"
echo "Check your React app to see the new banner."
