const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Find the math game hint paragraph (the one we added)
const hintMarker = "💡 Hint: 1 dry day = 3 water days'}";
const hintPos = code.indexOf(hintMarker);

if (hintPos === -1) {
  console.log("ERROR: Could not find hint text");
  process.exit(1);
}

// Find the closing </p after the hint
const hintClosingP = code.indexOf("</p", hintPos);

// The problem: after </p there should be >
// Then a blank line
// Then {!quizState.math.submitted ? (

// Find where the ternary should start
const ternaryStart = code.indexOf("{!quizState.math.submitted", hintClosingP);

if (ternaryStart === -1) {
  console.log("ERROR: Could not find ternary operator");
  process.exit(1);
}

// Replace everything between the hint closing tag and the ternary
// with proper structure
const beforeFix = code.slice(0, hintClosingP);
const afterFix = code.slice(ternaryStart);

const fixedMiddle = `</p>
            
            {!quizState.math.submitted`;

code = beforeFix + fixedMiddle + afterFix.slice(afterFix.indexOf(" ? ("));

fs.writeFileSync("HomePage.js", code);
console.log("✅ Fixed MATH GAME ternary structure");
