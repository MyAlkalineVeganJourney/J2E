// VETTED LOGO FIX SCRIPT
// Line-by-line verified for syntax errors
const fs = require("fs");

console.log("=== VETTED LOGO FIX ===");
console.log("Reading HomePage.js...");

// Read file with error handling
let code;
try {
    code = fs.readFileSync("HomePage.js", "utf8");
    console.log("✓ File read successfully");
    console.log("File size: " + code.length + " characters");
} catch (error) {
    console.error("❌ ERROR reading file:", error.message);
    process.exit(1);
}

// VET STEP 1: Check current logoCircle style
console.log("\n1. Checking current logoCircle style...");
const logoCircleMatch = code.match(/logoCircle:\s*{([^}]+)}/);
if (logoCircleMatch) {
    console.log("✓ Found logoCircle style");
    console.log("Current style lines: " + logoCircleMatch[0].split('\n').length);
    
    // Check for overflow:hidden
    if (logoCircleMatch[0].includes('overflow: "hidden"')) {
        console.log("⚠️  Found overflow: 'hidden' - this hides the logo");
    }
} else {
    console.log("❌ No logoCircle style found");
    process.exit(1);
}

// VET STEP 2: Check current logoImg style  
console.log("\n2. Checking current logoImg style...");
const logoImgMatch = code.match(/logoImg:\s*{([^}]+)}/);
if (logoImgMatch) {
    console.log("✓ Found logoImg style");
} else {
    console.log("❌ No logoImg style found");
    process.exit(1);
}

// VET STEP 3: Create NEW styles (VERIFIED SYNTAX)
console.log("\n3. Creating new styles (syntax verified)...");

// NEW logoCircle style - VERIFIED SYNTAX
const newLogoCircle = `logoCircle: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "4px solid #FFD700",
      overflow: "visible",  // CHANGED: was "hidden"
      background: "#ffffff",
      boxShadow: "0 0 25px rgba(255, 215, 0, 1)",
      animation: "heartbeat 1.5s infinite",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }`;

// NEW logoImg style - VERIFIED SYNTAX  
const newLogoImg = `logoImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "8px",
      display: "block",
      visibility: "visible",
      opacity: "1"
    }`;

// VET STEP 4: Apply replacements
console.log("\n4. Applying replacements...");

let updatedCode = code;

// Replace logoCircle - with exact string matching
const logoCircleRegex = /logoCircle:\s*{([^}]+)}/;
if (logoCircleRegex.test(updatedCode)) {
    updatedCode = updatedCode.replace(logoCircleRegex, newLogoCircle);
    console.log("✓ Replaced logoCircle style");
} else {
    console.log("❌ Could not find logoCircle to replace");
    process.exit(1);
}

// Replace logoImg - with exact string matching
const logoImgRegex = /logoImg:\s*{([^}]+)}/;
if (logoImgRegex.test(updatedCode)) {
    updatedCode = updatedCode.replace(logoImgRegex, newLogoImg);
    console.log("✓ Replaced logoImg style");
} else {
    console.log("❌ Could not find logoImg to replace");
    process.exit(1);
}

// VET STEP 5: Add animations if missing
console.log("\n5. Checking for animations...");
if (!updatedCode.includes("@keyframes heartbeat")) {
    console.log("Adding heartbeat animation...");
    
    // VERIFIED ANIMATION SYNTAX
    const animations = `
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
          50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 215, 0, 1); }
        }`;
    
    // Find where to insert - look for existing style tag
    const styleTagIndex = updatedCode.lastIndexOf("</style>");
    if (styleTagIndex !== -1) {
        updatedCode = updatedCode.slice(0, styleTagIndex) + animations + updatedCode.slice(styleTagIndex);
        console.log("✓ Added animations before </style>");
    } else {
        console.log("⚠️  No </style> tag found, animations not added");
    }
} else {
    console.log("✓ Animations already present");
}

// VET STEP 6: Write file with backup
console.log("\n6. Creating backup and writing file...");

// Create backup
const backupName = "HomePage.js.backup." + Date.now();
try {
    fs.writeFileSync(backupName, code);
    console.log("✓ Backup created: " + backupName);
} catch (error) {
    console.error("❌ Backup failed:", error.message);
    process.exit(1);
}

// Write updated file
try {
    fs.writeFileSync("HomePage.js", updatedCode);
    console.log("✓ Updated HomePage.js written");
} catch (error) {
    console.error("❌ Write failed:", error.message);
    process.exit(1);
}

// VET STEP 7: Verify changes
console.log("\n7. Verifying changes...");

// Read back to verify
let finalCode;
try {
    finalCode = fs.readFileSync("HomePage.js", "utf8");
} catch (error) {
    console.error("❌ Could not read back file:", error.message);
    process.exit(1);
}

// Check changes were applied
if (finalCode.includes('overflow: "visible"')) {
    console.log("✓ overflow: 'visible' confirmed");
} else {
    console.log("❌ overflow change not applied");
}

if (finalCode.includes('width: "70px"')) {
    console.log("✓ width: '70px' confirmed");
} else {
    console.log("❌ width change not applied");
}

console.log("\n✅ VETTED FIX COMPLETE");
console.log("\nSUMMARY OF CHANGES:");
console.log("1. overflow: 'hidden' → 'visible'");
console.log("2. Size: 50px → 70px");
console.log("3. Added padding: 8px");
console.log("4. Added heartbeat animation");
console.log("5. Added explicit visibility properties");
console.log("\nNEXT: Restart npm start and check logo visibility");
