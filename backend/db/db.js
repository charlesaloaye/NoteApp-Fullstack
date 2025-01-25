import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URI);
  } catch (error) {
    console.log("Unable to connect to DB");
  }
};

export default connectMongoDB;
