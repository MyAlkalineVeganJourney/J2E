#!/bin/bash
FILE="src/Pages/HomePage.js"

echo "=== REPLACING WITH COMPLETE LAYOUT ==="
echo ""

# Find the titleSection
START_LINE=$(grep -n "<section style={styles.titleSection}>" "$FILE" | head -1 | cut -d: -f1)
if [ -z "$START_LINE" ]; then
    echo "ERROR: Could not find titleSection start"
    exit 1
fi

# Find the closing </section>
END_LINE=$(grep -n "</section>" "$FILE" | awk -v start="$START_LINE" '$1 > start {print $1; exit}')
if [ -z "$END_LINE" ]; then
    echo "ERROR: Could not find titleSection end"
    exit 1
fi

echo "Replacing lines $START_LINE to $END_LINE"

# Create the complete layout
COMPLETE_LAYOUT='      {/* CONTAINER 2: WEBSITE BANNER - COMPLETE LAYOUT */}
      <section style={styles.titleSection}>
        {/* ROW 1: COMPANY NAME WITH SPACING */}
        <h1 style={{
          ...styles.companyName,
          margin: "8px 0 12px 0",
          fontSize: "clamp(1.8rem, 4vw, 2.4rem)"
        }}>
          💦 MY ALKALINE VEGAN JOURNEY 💦
        </h1>

        {/* ROW 2: SYMMETRICAL LOGO ROW */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "8px"
        }}>
          {/* LEFT TEXT BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum || "Quantum Based"}</div>
              <div>{translations[currentLanguage]?.title?.scientific || "Scientifically Backed"}</div>
              <div>{translations[currentLanguage]?.title?.frequency || "Frequency Focused"}</div>
            </div>
          </div>

          {/* LEFT LOGO */}
          <div style={{...styles.logoCircle, margin: "0 15px"}}>
            <img
              src="/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "/images/MAVJLogo.jpg"; }}
            />
          </div>

          {/* CENTER SPACER */}
          <div style={{flex: 1}}></div>

          {/* RIGHT LOGO */}
          <div style={{...styles.logoCircle, margin: "0 15px"}}>
            <img
              src="/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "/images/MAVJLogo.jpg"; }}
            />
          </div>

          {/* RIGHT TEXT BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum_physics || "Where Quantum Physics"}</div>
              <div>{translations[currentLanguage]?.title?.ancient_wisdom || "Meets Ancient Wisdom"}</div>
              <div>{translations[currentLanguage]?.title?.nutrition || "And Nutrition"}</div>
            </div>
          </div>
        </div>

        {/* ROW 3: MISSING TAGLINE - RESTORED */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          margin: "5px 0 10px 0"
        }}>
          <span style={{
            color: "#FF0000",
            fontSize: "0.9rem",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: "0 0 6px rgba(255,0,0,0.8)"
          }}>SOVEREIGN HEALTH</span>
          <span style={{
            color: "#FFD700",
            fontSize: "1rem",
            fontWeight: "900"
          }}>•</span>
          <span style={{
            color: "#00FF00",
            fontSize: "0.9rem",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: "0 0 6px rgba(0,255,0,0.8)"
          }}>VIBRATIONAL HEALING</span>
          <span style={{
            color: "#FFD700",
            fontSize: "1rem",
            fontWeight: "900"
          }}>•</span>
          <span style={{
            color: "#0000FF",
            fontSize: "0.9rem",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: "0 0 6px rgba(0,0,255,0.8)"
          }}>ANCESTRAL NUTRITION</span>
        </div>

        {/* ROW 4: PAGE TITLE ON CONTAINER BORDER */}
        <div style={{
          position: "absolute",
          bottom: "-22px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1800
        }}>
          <div style={styles.pageTitleWrapper}>
            <div style={styles.pageTitleInner}>
              {translations[currentLanguage]?.title?.home || "YOU ARE HOME"}
            </div>
          </div>
        </div>
      </section>'

# Replace the section
TEMP_FILE="${FILE}.temp"
awk -v start="$START_LINE" -v end="$END_LINE" -v new="$COMPLETE_LAYOUT" '
NR < start { print }
NR == start { print new }
NR > end { print }
' "$FILE" > "$TEMP_FILE"

mv "$TEMP_FILE" "$FILE"
echo "✓ Complete layout installed!"
echo ""
echo "Includes:"
echo "1. Company name (top with spacing)"
echo "2. Text Box → Logo → [space] → Logo → Text Box"
echo "3. SOVEREIGN HEALTH • VIBRATIONAL HEALING • ANCESTRAL NUTRITION"
echo "4. Page title on container border"
