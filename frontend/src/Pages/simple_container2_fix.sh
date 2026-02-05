#!/bin/bash

FILE="src/pages/HomePage.js"

echo "=== MAKING SIMPLE, DIRECT FIX FOR CONTAINER 2 ==="

# First, let's find ANY Container 2 section
START_LINE=$(grep -n "CONTAINER 2" "$FILE" | head -1 | cut -d: -f1)

if [ -z "$START_LINE" ]; then
    echo "ERROR: No Container 2 found in file!"
    echo "Let me check the file structure..."
    grep -n "section" "$FILE" | head -10
    exit 1
fi

echo "Found Container 2 at line: $START_LINE"

# Find where this section ends (look for next section or closing tag)
END_LINE=$(sed -n "$START_LINE,\$p" "$FILE" | grep -n -m1 "{\/\*\|</section>" | head -1 | cut -d: -f1)
END_LINE=$((START_LINE + END_LINE - 1))
echo "Container 2 ends at line: $END_LINE"

# Create backup
cp "$FILE" "${FILE}.backup-$(date +%s)"

# Create temporary file
TEMP_FILE=$(mktemp)

# Copy everything before Container 2
head -n $((START_LINE - 1)) "$FILE" > "$TEMP_FILE"

# Add the NEW, CORRECT Container 2
cat >> "$TEMP_FILE" << 'NEW_CONTAINER2'
      {/* CONTAINER 2: WEBSITE BANNER - STICKY ON ALL PAGES */}
      <section style={{
        position: 'fixed',
        top: '88px',
        left: 0,
        right: 0,
        zIndex: 1700,
        backgroundImage: 'url(/images/star-pattern.png)',
        backgroundSize: '100px',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.96)',
        backgroundBlendMode: 'overlay',
        border: '3px solid',
        borderImage: 'linear-gradient(90deg, violet, indigo, blue, green, yellow, orange, red) 1',
        padding: '15px 20px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 25px rgba(0,0,0,0.9)',
        minHeight: '200px',
        maxHeight: '200px'
      }}>

        {/* ROW 1: LARGE COMPANY NAME */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 2.8rem)',
          fontWeight: '900',
          color: '#FFD700',
          textAlign: 'center',
          margin: '0 0 10px',
          letterSpacing: '2.5px',
          textShadow: '0 0 25px rgba(255,215,0,0.95)',
          lineHeight: '1.1',
          whiteSpace: 'nowrap'
        }}>
          💦 MY ALKALINE VEGAN JOURNEY 💦
        </h1>

        {/* ROW 2: LOGO WITH SIDE BOXES AT EXTREMES */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          margin: '5px 0 10px',
          padding: '0 10px'
        }}>

          {/* LEFT BOX */}
          <div style={{
            background: 'linear-gradient(135deg, violet, indigo, blue, green, yellow, orange, red)',
            borderRadius: '6px',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            minWidth: '150px',
            maxWidth: '180px'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.96)',
              borderRadius: '4px',
              padding: '8px 10px',
              fontSize: '0.75rem',
              fontWeight: '800',
              color: '#FFD700',
              lineHeight: '1.2',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '3px',
              width: '100%'
            }}>
              <div>Quantum Based</div>
              <div>Scientifically Backed</div>
              <div>Frequency Focused</div>
            </div>
          </div>

          {/* CENTER LOGO - LARGER */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '3px solid #FFD700',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 0 30px rgba(255,215,0,0.9)',
            animation: 'heartbeat 1.4s ease-in-out infinite',
            flexShrink: 0
          }}>
            <img
              src="/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '6px'
              }}
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/star-pattern.png'; }}
            />
          </div>

          {/* RIGHT BOX */}
          <div style={{
            background: 'linear-gradient(135deg, violet, indigo, blue, green, yellow, orange, red)',
            borderRadius: '6px',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            minWidth: '150px',
            maxWidth: '180px'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.96)',
              borderRadius: '4px',
              padding: '8px 10px',
              fontSize: '0.75rem',
              fontWeight: '800',
              color: '#FFD700',
              lineHeight: '1.2',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '3px',
              width: '100%'
            }}>
              <div>Where Quantum Physics</div>
              <div>Meets Ancient Wisdom</div>
              <div>And Nutrition</div>
            </div>
          </div>
        </div>

        {/* ROW 3: PAGE TITLE */}
        <div style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
          fontWeight: '900',
          color: '#00d4ff',
          textAlign: 'center',
          margin: '5px 0 8px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          textShadow: '0 0 12px rgba(0,212,255,0.7)',
          whiteSpace: 'nowrap'
        }}>
          YOU ARE HOME
        </div>

        {/* ROW 4: TAGLINE */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          margin: '5px 0',
          fontSize: '0.85rem',
          fontWeight: '800',
          flexWrap: 'wrap'
        }}>
          <span style={{color: '#FF0000', whiteSpace: 'nowrap', textShadow: '0 0 8px rgba(255,0,0,0.5)'}}>Sovereign Living</span>
          <span style={{color: '#FFD700', margin: '0 3px', fontWeight: '900'}}>—</span>
          <span style={{color: '#00FF00', whiteSpace: 'nowrap', textShadow: '0 0 8px rgba(0,255,0,0.5)'}}>Frequency Transformation</span>
          <span style={{color: '#FFD700', margin: '0 3px', fontWeight: '900'}}>—</span>
          <span style={{color: '#0000FF', whiteSpace: 'nowrap', textShadow: '0 0 8px rgba(0,0,255,0.5)'}}>Ancestral Nutrition</span>
        </div>

        {/* ROW 5: AI DECLARATION */}
        <div style={{
          fontSize: '0.9rem',
          fontWeight: '900',
          color: '#FFD700',
          textAlign: 'center',
          margin: '8px 0 0',
          textShadow: '0 0 10px rgba(255,215,0,0.8)',
          whiteSpace: 'nowrap',
          letterSpacing: '1px'
        }}>
          🤖 AI-POWERED QUANTUM ENTERPRISE 🤖
        </div>

      </section>
NEW_CONTAINER2

# Copy everything after Container 2
tail -n +$((END_LINE + 1)) "$FILE" >> "$TEMP_FILE"

# Replace the file
mv "$TEMP_FILE" "$FILE"

echo "✅ Container 2 REPLACED with new version!"

# Update mainContainer padding
echo "Updating page padding..."
sed -i "s/paddingTop: '.*px'/paddingTop: '300px'/g" "$FILE"

# Add CSS animation
echo "Adding CSS animation..."
if ! grep -q "@keyframes heartbeat" "$FILE"; then
    # Add at the end of the style section
    sed -i '/<\/style>/i\
        @keyframes heartbeat {\
          0%, 100% { transform: scale(1); box-shadow: 0 0 16px rgba(255,215,0,0.85); }\
          14% { transform: scale(1.13); box-shadow: 0 0 24px rgba(255,215,0,1); }\
          28% { transform: scale(1); box-shadow: 0 0 16px rgba(255,215,0,0.85); }\
          42% { transform: scale(1.09); box-shadow: 0 0 22px rgba(255,215,0,0.95); }\
          70% { transform: scale(1); box-shadow: 0 0 16px rgba(255,215,0,0.85); }\
        }' "$FILE"
fi

echo ""
echo "🎉 CONTAINER 2 COMPLETELY REPLACED!"
echo ""
echo "NEW CONTAINER 2 FEATURES:"
echo "1. 💦 MY ALKALINE VEGAN JOURNEY 💦 (LARGE at top)"
echo "2. Side boxes at FAR LEFT and FAR RIGHT"
echo "3. Large 80px logo in center"
echo "4. Page title: YOU ARE HOME"
echo "5. Tagline: Sovereign Living — Frequency Transformation — Ancestral Nutrition"
echo "6. AI: 🤖 AI-POWERED QUANTUM ENTERPRISE 🤖"
echo "7. FOUR-SIDED rainbow border"
echo "8. Star pattern background"
echo "9. Positioned at 88px (below menu)"
echo "10. 200px height"
echo "11. Page padding: 300px"
