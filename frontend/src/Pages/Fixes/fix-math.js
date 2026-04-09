const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// backup
fs.writeFileSync("HomePage.js.bak-mathfix", code);

// ============================================================
// 1) Fix the translation question text
// ============================================================
code = code.replace(
  "question: '40 days + 6 herbs = ?'",
  "question: '40 day reset, 3 of those days were dry = ?',\n        hint: '💡 Hint: 1 dry day = 3 water days'"
);

// ============================================================
// 2) Fix the answer choices in JSX
//    Old: ['40', '46', '34']
//    New: ['40', '46', '49']
// ============================================================
code = code.replace(
  "['40', '46', '34'].map",
  "['40', '46', '49'].map"
);

// ============================================================
// 3) Fix the correct answer feedback
// ============================================================
code = code.replace(
  "feedback: isCorrect ? '🎉 CORRECT! 40 + 6 = 46' : '💫 Try again'",
  "feedback: isCorrect ? '🎉 CORRECT! 37 water days + 3 dry days (x3 each) = 37 + 9 = 46!' : '💫 Remember the hint and try again'"
);

// ============================================================
// 4) Fix the JSX fallback text in the rendered question
// ============================================================
code = code.replace(
  "|| '40 days + 6 herbs = ?'}",
  "|| '40 day reset, 3 of those days were dry = ?'}"
);

// ============================================================
// 5) Insert hint paragraph after the question paragraph
//    We find the question text we just put in step 4,
//    then find the </p> right after it, and insert a hint <p>
// ============================================================
const marker = "|| '40 day reset, 3 of those days were dry = ?'}";
const markerPos = code.indexOf(marker);

if (markerPos === -1) { console.log("ERROR: Could not find question marker"); process.exit(1); }

const closingP = code.indexOf("</p>", markerPos);

const hintBlock =
`</p>
            <p style={{marginBottom: '10px', color: '#00d4ff', fontSize: '0.78rem', fontStyle: 'italic', textAlign: 'center'}}>
              {translations[currentLanguage]?.games?.math?.hint || '💡 Hint: 1 dry day = 3 water days'}
            </p`;

// replace just that one </p> with our hint block
code = code.slice(0, closingP) + hintBlock + code.slice(closingP + 4);

// ============================================================
// WRITE
// ============================================================
fs.writeFileSync("HomePage.js", code);
console.log("✅  Quantum Reset Math game updated successfully.");
