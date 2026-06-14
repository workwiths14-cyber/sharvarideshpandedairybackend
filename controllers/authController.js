const User = require("../models/User");


// REGISTER
const registerUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check user
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Create user
    const user = await User.create({
      email,
      password,
    });

    res.status(201).json({
      message: "User Registered",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// LOGIN
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    res.status(200).json({
      message: "Login Success",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  registerUser,
  loginUser,
};