import validator from "validator";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Register Controller
export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      res
        .status(401)
        .json({ success: false, message: "Please name must be a string" });
      return;
    }

    if (!email || !validator.isEmail(email)) {
      res.status(401).json({
        success: false,
        message: "Please enter a valid email",
      });
      return;
    }

    if (!password || !validator.isStrongPassword(password)) {
      res.status(401).json({
        success: false,
        message:
          "Please password must be at least 8 characters, miexed with special characters, upper and lowercase with numbers",
      });
      return;
    }

    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json({
        success: false,
        message: "Account already exist, please login",
      });
      return;
    }

    const securedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, name, password: securedPassword });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Account created successfully!",
    });
    return;
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    return;
  }
};

// Login Controller
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !validator.isEmail(email)) {
      res.status(401).json({
        success: false,
        message: "Please enter a valid email",
      });
      return;
    }

    if (!password) {
      res.status(401).json({
        success: false,
        message: "Please enter password.",
      });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({
        success: false,
        message: "Account does not exist, please create a new one",
      });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.AUTH_TOKEN, {
      expiresIn: "3h",
    });

    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      token: token,
      user: {
        name: user.name,
      },
    });
    return;
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    return;
  }
};
