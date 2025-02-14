const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, default: 0, min: 0 },
    description: { type: String, required: false },
    quantity: { type: Number, default: 0, min: 0 },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
