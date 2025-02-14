const express = require("express");
const {
  getUserController,
  getSingleUserController,
  createUserController,
} = require("../controller/user.controller");
const router = express.Router();

router.get("/get-user/", getUserController);
router.get("/get-single-user/", getSingleUserController);

router.post("/create-user/", createUserController);

module.exports = router;
