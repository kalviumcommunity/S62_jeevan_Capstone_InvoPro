const express = require("express");
const {
  getUserController,
  getSingleUserController,
  createUserController,
  updateUserController,
  deleteUserController,
} = require("../controller/user.controller");
const router = express.Router();

router.get("/get-user/", getUserController);
router.get("/get-single-user/", getSingleUserController);

router.post("/create-user/", createUserController);

router.put("/update-user/", updateUserController);

router.delete("/", deleteUserController);

module.exports = router;
