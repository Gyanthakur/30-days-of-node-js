const express = require('express');
const User = require('../models/user'); // Assuming you have a User model

const router = express.Router();

router.get('/average-age', async (req, res) => {
  try {
    const averageAge = await User.aggregate([
      { $match: { age: { $exists: true, $ne: null } } }, // Filter for valid age values
      { $group: { _id: null, averageAge: { $avg: '$age' } } }
    ]);

    if (averageAge.length === 0) {
      return res.json({ message: 'No users with valid age found' });
    }

    res.json({ averageAge: averageAge[0].averageAge });
  } catch (err) {
    console.error('Error calculating average age:', err);
    res.status(500).json({ message: 'Error calculating average age' });
  }
});

module.exports = router;
