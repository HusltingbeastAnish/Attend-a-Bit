const mongoose = require("mongoose");
const dotenv = require("dotenv");

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`Your backended is connected to Mongo ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    // console.log(`Backend is not connected`);
    // Termination of the connection process
    process.exit(1);
  }
};

module.exports = ConnectDB;
