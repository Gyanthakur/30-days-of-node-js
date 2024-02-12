const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rateLimiter = require('./middleware/rateLimiter');

const limit = 690000; // Customize this value as needed

// Apply rate limiting middleware to all routes
app.use(rateLimiter(limit));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
