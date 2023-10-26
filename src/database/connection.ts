import mongoose from "mongoose";

const mongo_url = process.env.NEXT_PUBLIC_MONGO_URL;

export const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(`${mongo_url}`);
    if (connection.readyState === 1) {
      console.log("database connected");
    }
  } catch (error) {
    return Promise.reject();
  }
};

export default connectMongo;
