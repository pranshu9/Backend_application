// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('./models_user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sign-up
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//sign in updated


// Sign-in route
router.post('/signin', async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;

    // Check if the user with the given email exists
    const user = await User.findOne({ email });

    // If user does not exist, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If passwords do not match, return an error
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create a JWT token with the user's ID as the payload
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '10h' });

    // Return the token in the response
    res.json({ token });
  } catch (error) {
    console.error('Error during user authentication:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;

