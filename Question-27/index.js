const express = require('express');
const app = express();

// Replace with your actual secret key for JWT signing
const SECRET_KEY = 'your_secret_key';
process.env.JWT_SECRET = SECRET_KEY;

const authenticateAndAuthorize = require('./authenticateAndAuthorize');

// Sample route protected for admin users only
app.get('/admin', authenticateAndAuthorize(['admin']), (req, res) => {
  res.send('Welcome, admin user!');
});

app.get('/protected', authenticateAndAuthorize(), (req, res) => {
  res.send('Welcome, authenticated user!');
});

app.get('/', (req, res) => {
  res.send('Public route');
});
app.get('/protected', (req, res) => {
  res.send('protected route');
});
app.get('/admin', (req, res) => {
  res.send('Admin route');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
