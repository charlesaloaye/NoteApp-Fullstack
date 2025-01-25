import express from "express";
import cors from "cors";
import morgan from "morgan";
import Auth from "./routes/Auth.js";
import Note from "./routes/Note.js";
import connectMongoDB from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", Auth);
app.use("/api/note", Note);

app.listen(PORT, (error) => {
  if (error) throw error;

  connectMongoDB();
  console.log(`Server running on port ${PORT}`);
});
