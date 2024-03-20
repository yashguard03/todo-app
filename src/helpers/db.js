import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "TODO",
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect with database");
  }
};
