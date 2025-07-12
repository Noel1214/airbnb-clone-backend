const mongoose = require("mongoose");

const connect = async () => {
  try {
    const URI = process.env.DB_URI;
    if (!URI) {
      console.log("DB connection string not found");
      throw new Error("DB URI not found");
    }
    await mongoose.connect(URI);
    console.log("Database connection successfull");
  } catch (error) {
    console.log("Error in DB connection");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect;