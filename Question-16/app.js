const mongoose = require('mongoose');


function connectToMongoDB() {
  const MONGO_URI = 'mongodb://localhost:27017/scaler'; 

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB connection successful!');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });
}

// Example usage:
connectToMongoDB();

module.exports = connectToMongoDB;
