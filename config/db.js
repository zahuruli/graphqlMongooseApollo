const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  try {
    const connectDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Db has connected successfully ✌ `.bgMagenta);
  } catch (error) {
    console.log(`error while connecting to db: ${error} `);
  }
};

module.exports = connectDb;
