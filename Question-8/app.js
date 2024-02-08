const express = require('express');
const app = express();

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.message === 'Invalid number parameter') {
    res.status(400).send('Invalid number parameter: Number must be a positive integer.');
  } else {
    next(err); // Pass other errors down the middleware chain
  }
});

// Route handler
function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);

  if (isNaN(number) || number <= 0) {
    throw new Error('Invalid number parameter');
  }

  res.send(`Success! You provided a positive integer: ${number}`);
}

app.get('/positive', positiveIntegerHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
