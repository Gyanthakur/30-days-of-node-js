const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: 'Please enter a valid email address.',
    },
  },
});

userSchema.post('save', (doc, next) => {
  console.log(`User with username: ${doc.username} and email: ${doc.email} is created successfully!`);
  next();
});

module.exports = mongoose.model('User', userSchema);
