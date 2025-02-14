const express = require("express");
const {
  getProductController,
  getSingleProductController,
  createProductController,
  updateProductController,
} = require("../controller/product.controller");
const router = express.Router();

router.get("/get-product/", getProductController);
router.get("/get-single-product/", getSingleProductController);

router.post("/create-product/", createProductController);

router.put("/update-product/", updateProductController);

module.exports = router;
