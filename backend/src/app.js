const express = require("express");
const cors = require("cors");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/config/.env",

  });
}

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my backend");
});

module.exports = app;
