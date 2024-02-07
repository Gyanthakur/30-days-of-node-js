const express = require('express');
const app = express();

// Use the middleware function
app.use(requestLoggerMiddleware);

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
