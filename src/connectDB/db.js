import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected to Mongodb");
    });
    connection.on("error", (error) => {
      console.log("Something is wrong" + error);
    });
  } catch (error) {
    console.log("Something is Wrong", error);
  }
}
export default connectDB;
