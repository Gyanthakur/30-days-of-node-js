const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scaler', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Error connecting to MongoDB:', err));
