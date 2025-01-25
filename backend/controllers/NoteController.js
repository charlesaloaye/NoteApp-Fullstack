import Note from "../models/Note.js";
// Add Note
export const CreateNote = async (req, res) => {
  try {
    const { title, body } = req.body;

    if (!title) {
      return res
        .status(401)
        .json({ success: false, message: "Please enter a title" });
    }

    if (!body) {
      return res
        .status(401)
        .json({ success: false, message: "Please enter a note" });
    }

    const note = await Note.findOne({ title });

    if (note) {
      return res.status(401).json({
        success: false,
        message: "Note with this title already exist",
      });
    }

    const newNote = new Note({ title, body, userId: req.user.id });

    newNote.save();
    return res.status(200).json({
      success: true,
      message: "Note added successfulyl",
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Read Notes
export const ReadNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    // console.log(notes);

    if (!notes) {
      return res
        .status(401)
        .json({ success: false, message: "Unable to retrieve notes" });
    }

    return res.status(200).json({
      success: true,
      message: "Note retrieved successfulyl",
      notes,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Read Note
export const ReadNote = async (req, res) => {};

// Update Note
export const UpdateNote = async (req, res) => {};

// Delete Note
export const DeleteNote = async (req, res) => {};
