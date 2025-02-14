const express = require("express");
const cors = require("cors");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/config/.env",
  });
}

const userRoute = require("./router/user.router.js");
const productRoute = require("./router/product.router.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my backend");
});

app.use("/user", userRoute);
app.use("/product", productRoute);

module.exports = app;
