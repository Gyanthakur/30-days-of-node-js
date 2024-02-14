const express = require('express');
const cachingMiddleware = require('./middleware/caching');

const app = express();

app.use(cachingMiddleware);



app.listen(3000, () => console.log('Server listening on port 3000'));
