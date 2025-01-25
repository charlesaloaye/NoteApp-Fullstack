import express from "express";
import { CreateNote, ReadNotes } from "../controllers/NoteController.js";
import Middleware from "../middleware/Middleware.js";
const router = express.Router();

// New Note
router.post("/add", Middleware, CreateNote);

// New Note
router.get("/", Middleware, ReadNotes);

export default router;
