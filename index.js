// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./route_auth');
const noteRoutes = require('./notes');
const app = express();
const PORT = process.env.PORT || 5010;

app.use(bodyParser.json());

// Connect to MongoDB
  mongoose.connect('mongodb+srv://subhabrata:kanjilal@cluster0.gudeena.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, // Remove this line (deprecated)
  useUnifiedTopology: true, // Remove this line (deprecated)
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Use authentication and note management routes
    app.use('/auth', authRoutes);
    app.use('/notes', noteRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => console.error('MongoDB connection error:', error));
