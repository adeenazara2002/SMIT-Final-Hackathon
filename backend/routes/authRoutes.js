const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const jwt = require("jwt-simple");
const bcrypt = require("bcryptjs");

// Register new user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    const payload = { user: { id: user._id } };
    const token = jwt.encode(payload, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: "Error registering user" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const payload = { user: { id: user._id } };
    const token = jwt.encode(payload, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
