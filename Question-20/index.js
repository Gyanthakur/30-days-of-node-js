const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/scaler', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/users', routes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
