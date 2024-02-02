import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using an existing connection");
      return;
    }

    const mongoURI = process.env.MONGO;

    if (!mongoURI) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables."
      );
    }
    const options = {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const db = await mongoose.connect(mongoURI, options);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    const errorMessage = error as string;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};
