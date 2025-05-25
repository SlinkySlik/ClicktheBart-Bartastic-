// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files if needed

app.get('/', (req, res) => {
  res.send('Click the Bart - Bartastic is live!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
