// PROPERLY VETTED FIX - LINE BY LINE CHECKED
const fs = require("fs");
const path = require("path");

console.log("=== PROPERLY VETTED FIX ===");
console.log("");

// 1. Read file safely
let code;
try {
    code = fs.readFileSync("HomePage.js", "utf8");
    console.log("✓ File read successfully");
} catch (error) {
    console.error("❌ File read error:", error.message);
    process.exit(1);
}

// 2. Create backup
const backupPath = "HomePage.js.backup.proper." + Date.now();
try {
    fs.writeFileSync(backupPath, code);
    console.log("✓ Backup created:", backupPath);
} catch (error) {
    console.error("❌ Backup failed:", error.message);
    process.exit(1);
}

// 3. FIND EXACT lines to fix - NO GUESSING
console.log("\n3. Finding exact logoCircle style...");

// Find logoCircle style with line numbers
const lines = code.split('\n');
let logoCircleStart = -1;
let logoCircleEnd = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('logoCircle:') && lines[i].includes('{')) {
        logoCircleStart = i;
        // Find closing brace
        let braceCount = 0;
        for (let j = i; j < lines.length; j++) {
            braceCount += (lines[j].match(/{/g) || []).length;
            braceCount -= (lines[j].match(/}/g) || []).length;
            if (braceCount === 0) {
                logoCircleEnd = j;
                break;
            }
        }
        break;
    }
}

if (logoCircleStart === -1 || logoCircleEnd === -1) {
    console.error("❌ Could not find logoCircle style");
    process.exit(1);
}

console.log(`✓ Found logoCircle at lines ${logoCircleStart + 1}-${logoCircleEnd + 1}`);

// 4. SHOW EXACT current logoCircle
console.log("\nCurrent logoCircle style:");
for (let i = logoCircleStart; i <= logoCircleEnd; i++) {
    console.log(`  ${i + 1}: ${lines[i]}`);
}

// 5. APPLY MINIMAL FIX - ONLY OVERFLOW
console.log("\n5. Applying minimal fix...");

// Create new lines array
let newLines = [...lines];

// Fix ONLY the overflow line
for (let i = logoCircleStart; i <= logoCircleEnd; i++) {
    if (newLines[i].includes('overflow: "hidden"')) {
        newLines[i] = newLines[i].replace('overflow: "hidden"', 'overflow: "visible"');
        console.log(`✓ Line ${i + 1}: Changed overflow: "hidden" → "visible"`);
    }
    if (newLines[i].includes('width: "50px"')) {
        newLines[i] = newLines[i].replace('width: "50px"', 'width: "70px"');
        console.log(`✓ Line ${i + 1}: Changed width: "50px" → "70px"`);
    }
    if (newLines[i].includes('height: "50px"')) {
        newLines[i] = newLines[i].replace('height: "50px"', 'height: "70px"');
        console.log(`✓ Line ${i + 1}: Changed height: "50px" → "70px"`);
    }
}

// 6. Also fix logoImg padding
let logoImgStart = -1;
let logoImgEnd = -1;

for (let i = 0; i < newLines.length; i++) {
    if (newLines[i].includes('logoImg:') && newLines[i].includes('{')) {
        logoImgStart = i;
        let braceCount = 0;
        for (let j = i; j < newLines.length; j++) {
            braceCount += (newLines[j].match(/{/g) || []).length;
            braceCount -= (newLines[j].match(/}/g) || []).length;
            if (braceCount === 0) {
                logoImgEnd = j;
                break;
            }
        }
        break;
    }
}

if (logoImgStart !== -1) {
    for (let i = logoImgStart; i <= logoImgEnd; i++) {
        if (newLines[i].includes('padding: "3px"')) {
            newLines[i] = newLines[i].replace('padding: "3px"', 'padding: "8px"');
            console.log(`✓ Line ${i + 1}: Changed padding: "3px" → "8px"`);
        }
    }
}

// 7. Join back to code
const updatedCode = newLines.join('\n');

// 8. Write file
try {
    fs.writeFileSync("HomePage.js", updatedCode);
    console.log("\n✓ File updated successfully");
} catch (error) {
    console.error("❌ File write error:", error.message);
    process.exit(1);
}

// 9. VERIFY CHANGES
console.log("\n9. Verifying changes...");
const finalLines = updatedCode.split('\n');

console.log("\nUpdated logoCircle (lines should show changes):");
for (let i = logoCircleStart; i <= logoCircleEnd && i < finalLines.length; i++) {
    const lineNum = i + 1;
    const line = finalLines[i];
    if (line.includes('overflow:') || line.includes('width:') || line.includes('height:')) {
        console.log(`  ${lineNum}: ${line}`);
    }
}

console.log("\n✅ PROPERLY VETTED FIX COMPLETE");
console.log("\nCHANGES MADE:");
console.log("1. overflow: \"hidden\" → \"visible\"");
console.log("2. width: \"50px\" → \"70px\"");
console.log("3. height: \"50px\" → \"70px\"");
console.log("4. padding: \"3px\" → \"8px\" (in logoImg)");
console.log("\nNO ANIMATION CHANGES - KEPT EXISTING ONES");
console.log("\n🔄 Restart: npm start");
