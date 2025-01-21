const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const app = express();

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  // Signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    const newUser = new User({
      email,
      password,
    });
  
    await newUser.save();
  
    res.send('Signup successful');
  });
  
  // Login route
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(401).send('User not found');
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return res.status(401).send('Invalid password');
    }
  
    res.send('Login successful');
  });
  