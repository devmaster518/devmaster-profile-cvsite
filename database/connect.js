import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING);
    console.log("Mongo Database Connected");
  } catch (error) {
    console.log(error);
  }
};
