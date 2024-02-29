const express = require('express');
const errorHandler = require('./errorHandler');

const app = express();

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
