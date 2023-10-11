const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mongo_node', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the 'users' collection
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route that renders all users
app.get('/', async (req, res) => {
  try {
    // Query all users from the database
    const users = await User.find({});
    
    // Render the 'index' EJS template with the user data
    res.render('index', { users });
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
