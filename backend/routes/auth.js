const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// -------------REGISTER ROUTE-------------- //
router.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Check if email or username already exist
    const doesExistEmail = await User.findOne({ email });
    const doesExistUsername = await User.findOne({ username });
    if (doesExistEmail) {
      res.status(401).json({
        message: "Email Already Exists",
      });
    }

    if (doesExistUsername) {
      res.status(401).json({
        message: "Username Already Taken",
      });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    // Create new User
    const newUser = new User({
      username,
      email,
      password: hashPass,
    });

    // Save user & send response
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    // Send error (if any)
    res.status(500).json(error);
  }
});

// -------------LOGIN ROUTE-------------- //
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email is correct
    const isUser = await User.findOne({ email });
    !isUser &&
      res.status(404).json({
        message: "Invalid Credentials",
      });

    // verify Password
    const verifyPass = await bcrypt.compare(password, isUser.password);
    !verifyPass &&
      res.status(400).json({
        message: "Invalid Credentials",
      });

    // send response if the details are valid
    res.status(200).json(isUser);
  } catch (error) {
    // Send error (if any)
    res.status(500).json(error);
  }
});

module.exports = router;
