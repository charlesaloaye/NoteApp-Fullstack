import express from "express";
import { Login, Register } from "../controllers/AuthController.js";
import Middleware from "../middleware/Middleware.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);

router.get("/authenticate", Middleware, async (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "authenticated", user: req.user });
});

export default router;
