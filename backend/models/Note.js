import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
  title: { type: String, require: true },
  body: { type: String, require: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date },
});

const Note = new mongoose.model("Note", NoteSchema);

export default Note;
