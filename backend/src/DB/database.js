if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/config/.env",
  });
}

const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`database connected successfully:${data.connection.host} `);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = connectDB;
