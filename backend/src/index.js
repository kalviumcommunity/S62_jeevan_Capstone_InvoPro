if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/config/.env",
  });
}

const app = require("./app.js");

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`App is running on port ${port} URL: http://localhost:${port}`);
});
