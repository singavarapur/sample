// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI (replace <username>, <password>, and <dbname> with your actual values)
const mongoURI = 'mongodb+srv://rathanjayanath:dl39bfyNEqT9tr6T@cs696a.k4n1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a User model
const User = mongoose.model('User ', userSchema);

// POST endpoint to add a user
app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;

  const newUser  = new User({ name, email, age });

  try {
    await newUser .save();
    res.status(201).json({ message: 'User  details stored successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to store user details.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});