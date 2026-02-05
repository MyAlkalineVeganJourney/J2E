const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Add top margin to companyName style
code = code.replace(
  /companyName: \{([^}]+)margin: "([^"]+)"/,
  'companyName: {$1margin: "15px 0 8px"'
);

fs.writeFileSync("HomePage.js", code);
console.log("✅ Added 15px space above company name");
