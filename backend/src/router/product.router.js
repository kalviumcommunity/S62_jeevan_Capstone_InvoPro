const express = require("express");
const {
  getProductController,
  getSingleProductController,
  createProductController,
} = require("../controller/product.controller");
const router = express.Router();

router.get("/get-product/", getProductController);
router.get("/get-single-product/", getSingleProductController);

router.post("/create-product/", createProductController);

module.exports = router;
