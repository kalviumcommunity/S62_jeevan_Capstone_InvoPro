const express = require("express");
const {
  getProductController,
  getSingleProductController,
} = require("../controller/product.controller");
const router = express.Router();

router.get("/get-product/", getProductController);
router.get("/get-single-product/", getSingleProductController);

module.exports = router;
