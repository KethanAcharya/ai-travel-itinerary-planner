import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "travelplanner"
    });
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};