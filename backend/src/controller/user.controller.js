const UserModel = require("../model/user.model");

const getUserController = async (req, res) => {
  try {
    const data = await UserModel.find();

    res
      .status(200)
      .send({ message: "user data fetched successfully", data: data });
  } catch (error) {
    return res
      .status(500)
      .send({
        message: "internal server error",
        success: false,
        error: error.message,
      });
  }
};
const getSingleUserController = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await UserModel.findOne({ _id: id });

    if (!data) {
      return res.status(400).send({ message: "data not found" });
    }

    res.status(200).send({
      message: "user data fetched successfully",
      data: data,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", success: false });
  }
};

module.exports = { getUserController, getSingleUserController };
