const express = require('express');
const app = express();
const path = require('path');

// Serve static files (your HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Start the server on port 8080
app.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
