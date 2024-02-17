const mongoose = require('mongoose');

// Define the Mongoose schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});


const User = mongoose.model('User', userSchema);


function addUserToDatabase(user) {
  try {
    const newUser = new User(user);
    newUser.save()
      .then(() => {
        console.log('User added successfully!');
      })
      .catch((err) => {
        console.error('Error adding user:', err);
      });
  } catch (err) {
    console.error('Error creating user:', err);
  }
}

mongoose.connect('mongodb://localhost:27017/scaler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


addUserToDatabase({ username: 'john_doe', email: 'john@example.com' });
