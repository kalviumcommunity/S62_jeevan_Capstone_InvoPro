const express = require("express");
const {
  getUserController,
  getSingleUserController,
} = require("../controller/user.controller");
const router = express.Router();

router.get("/get-user/", getUserController);
router.get("get-single-user/", getSingleUserController);

module.exports = router;
