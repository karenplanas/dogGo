import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1/doggo"

const connect = async () => {
  console.log('Connecting to database...');
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected sucessfully to database');
  } catch (e) {
    console.error('Error connecting to database:', e);
    throw e;
  }
}

const disconnect = async () => {
  try {
    await mongoose.disconnect()
    console.log('Disconnecting from database');
  } catch (e) {
    console.error('Error disconnecting from database:', e);
    throw e;
  }
}


export { connect, disconnect }
