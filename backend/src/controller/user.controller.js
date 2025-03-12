const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");

const getUserController = async (req, res) => {
  try {
    const data = await UserModel.find();

    res
      .status(200)
      .send({ message: "user data fetched successfully", data: data });
  } catch (error) {
    return res.status(500).send({
      message: "internal server error",
      success: false,
      error: error.message,
    });
  }
};

const getSingleUserController = async (req, res) => {
const { email, password } = req.query;
  try {
    const data = await UserModel.findOne({ email: email });

    if (!data) {
      return res
        .status(400)
        .send({ message: "user data not found", data: data });
    }


    const isPasswordMatch = await bcrypt.compare(password, data.password);
    if (!isPasswordMatch) {
      return res.status(400).send({ message: "invalid password" });
    }

    res.status(200).send({
      message: "user data fetched successfully",
      data: data,
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "internal server error",
      success: false,
      error: error.message,
    });
  }
};

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).send({ message: "all fields are required" });
    }

    const checkUserPresent = await UserModel.findOne({ email: email });
    if (checkUserPresent) {
      return res.status(400).send({ message: "user already present" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .send({ message: "New user created successfully", success: true, data });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

const updateUserController = async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.query;
  try {
    if (!id) {
      return res.status(400).send({ message: "id is required" });
    }

    if (!name || !email || !password) {
      return res.status(400).send({ message: "all fields are required" });
    }

    const checkUserPresent = await UserModel.findOne({ email: email });
    if (!checkUserPresent) {
      return res.status(400).send({ message: "user not present" });
    }

    const data = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        name,
        email,
        password,
      },
      { new: true }
    );

    return res.status(201).send({
      message: "user data updated successfully",
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

const deleteUserController = async (req, res) => {
  const { id } = req.query;
  try {
    const checkUserPresent = await UserModel.findOne({ _id: id });
    if (!checkUserPresent) {
      return res.status(404).send({
        message: "User Not Found",
        success: false,
      });
    }

    const data = await UserModel.findByIdAndDelete(id);
    return res.status(200).send({
      message: "user deleted successfully",
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
  getUserController,
  getSingleUserController,
  createUserController,
  updateUserController,
  deleteUserController,
};
