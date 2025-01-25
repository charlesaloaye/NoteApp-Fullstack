import User from "../models/User.js";
import jwt from "jsonwebtoken";
const Middleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized", token });
    }
    const decoded = jwt.verify(token, process.env.AUTH_TOKEN);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided", token });
    }

    const user = await User.findById({ _id: decoded.id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No user!",
      });
    }

    const authUser = { name: user.name, id: user._id };

    req.user = authUser;

    next();
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default Middleware;
