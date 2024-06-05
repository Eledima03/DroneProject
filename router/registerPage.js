const express = require('express');
const router = express.Router();
const User = require('../models/users');
// we wont see user password
const bcrypt = require('bcryptjs');

// POST request for signup (corrected path)
router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields: username, email, and password.' });
    }

    // Check if the email is a Gmail address
    const gmailRgx = /@gmail.com$/;
    if (!gmailRgx.test(email)) {
      console.log("Not a valid Gmail address");
      return res.status(400).json({
        case: false,
        message: "Wrong template of email"
      });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        case: false,
        message: "Email already in use"
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save().then((data)=>{
      const ID=data._id;
<<<<<<< HEAD
        //req.session.userId=ID.toString();
=======
        req.session.userId=ID.toString();
>>>>>>> 1169d3f63d3eac2b1e5a71a8da7609b1ced60d80
    })

    res.status(201).json({ message: 'User successfully registered!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error occurred during registration.' });
  }
});

module.exports = router;
