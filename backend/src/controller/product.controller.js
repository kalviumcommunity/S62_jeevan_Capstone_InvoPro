const productModel = require("../model/product.model");

const getProductController = async (req, res) => {
  try {
    const data = await productModel.find();

    return res
      .status(200)
      .send({ message: "Data fetched successfully ", data: data });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", success: false });
  }
};
const getSingleProductController = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await productModel.findOne({ _id: id });
    if (!data) {
      return res
        .status(404)
        .send({ message: "Product not found", data: data, success: false });
    }

    return res
      .status(200)
      .send({ message: "Data fetched successfully ", data: data });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", success: false });
  }
};

module.exports = { getProductController, getSingleProductController };
