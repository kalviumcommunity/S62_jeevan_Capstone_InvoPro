const productModel = require("../model/product.model");

const getProductController = async (req, res) => {
  try {
    const data = await productModel.find();

    return res
      .status(200)
      .send({ message: "Product Data fetched successfully ", data: data });
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
      .send({ message: "Product Data fetched successfully ", data: data });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", success: false });
  }
};

const createProductController = async (req, res) => {
  const { name, price, description, quantity } = req.body;
  try {
    if (!name || !price || !description || !quantity) {
      return res
        .status(400)
        .send({ message: "Please fill all fields", success: false });
    }
    const data = await productModel.create({
      name,
      price,
      description,
      quantity,
    });

    return res
      .status(201)
      .send({ message: "Product created successfully", data: data });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", success: false });
  }
};

const updateProductController = async (req, res) => {
  const { name, price, description, quantity } = req.body;
  const { id } = req.query;
  try {
    if (!name || !price || !description || !quantity) {
      return res
        .status(400)
        .send({ message: "Please fill all fields", success: false });
    }

    const checkProductPresent = await productModel.findOne({ _id: id });
    if (!checkProductPresent) {
      return res
        .status(400)
        .send({ message: "Product not present", success: false });
    }
    const data = await productModel.findByIdAndUpdate(
      { _id: id },
      {
        name,
        price,
        description,
        quantity,
      },
      { new: true }
    );

    return res.status(201).send({
      message: "data updated successfully",
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getProductController,
  getSingleProductController,
  createProductController,
  updateProductController,
};
