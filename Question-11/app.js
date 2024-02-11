const express = require('express');
const authenticationMiddleware = require('./authenticationMiddleware');

const app = express();

// Apply the middleware to protected routes
app.get('/protected-route', authenticationMiddleware, (req, res) => {
  // Access authenticated user data from req.user
  res.json({ message: 'Authenticated user data:', user: req.user });
});

// ... other routes
