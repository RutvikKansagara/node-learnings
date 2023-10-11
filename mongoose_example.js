//example of how to connect with mongodb in node js with using mongoose package.

const mongoose = require('mongoose');
const http = require('http');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mongo_node', { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB');

  // schema for the 'users' collection
  const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
  });

  // model based on the schema
  const User = mongoose.model('User', userSchema);

  // Query the database and log the results
  const allUsers = async () => {
    try {
      const users = await User.find({});
      console.log('Database Query Results:', users);
    } catch (error) {
      console.error('Error querying the database:', error);
    } finally {
      // Close the MongoDB connection after querying
      mongoose.connection.close();
    }
  };
//above function will find all users which are there in database

  allUsers();
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
