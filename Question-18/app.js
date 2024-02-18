const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Assuming your User model is in a models folder

const app = express();


mongoose.connect('mongodb://localhost:27017/scaler', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching users' });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
