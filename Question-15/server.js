const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Enhanced logging middleware function
function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const headers = JSON.stringify(req.headers);
  const body = JSON.stringify(req.body);

  console.log(`
    -------------------
    ${timestamp} - ${method} ${url}
    Request Headers:
      ${headers}
    Request Body:
      ${body}
    -------------------
  `);

  next();
}

// Apply logging middleware before routes
app.use(loggingMiddleware);

// Body parser for JSON-formatted requests
app.use(bodyParser.json());

// Routes (replace with your specific routes)
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/data', (req, res) => {
  console.log('Received data:', req.body); // Access processed data if needed
  res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
