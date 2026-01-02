import re

with open('src/Pages/HomePage.js', 'r') as f:
    content = f.read()

# Comment out the problematic imports
content = re.sub(r"import.*LanguageContext.*", "// import { LanguageContext } from '../contexts/LanguageContext';", content)
content = re.sub(r"import.*UserContext.*", "// import { UserContext } from '../contexts/UserContext';", content)

# Add dummy contexts at the top
new_imports = '''
// TEMPORARY DUMMY CONTEXTS
const LanguageContext = React.createContext();
const UserContext = React.createContext();
'''

# Insert after React import
content = content.replace(
    "import React, { useState, useContext, useCallback, useRef, useEffect } from 'react';",
    "import React, { useState, useContext, useCallback, useRef, useEffect } from 'react';\n" + new_imports
)

with open('src/Pages/HomePage.js', 'w') as f:
    f.write(content)

print("Patched HomePage.js - contexts commented out")
