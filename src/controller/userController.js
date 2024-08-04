import userServices from "../services/userServices.js";
import { addTokenToBlacklist } from "../models/tockenBlacklist.js";
import jwt from "jsonwebtoken";

const userController = {};

// Controller to Create
userController.create = async (req, res) => {
  const user = req.body;

  try {
    // Create User
    const newUser = await userServices.create(user);
    res.status(201).json({
      message: "User created successfully",
      status: "success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      status: "error",
      error: error.message,
    });
  }
};

// Controller to Login
userController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await userServices.login(email, password);
    res.status(200).json({
      message: "Login successful",
      status: "success",
      user: {
        id: user.id,
        email: user.email,
        fname: user.fname,
        lname: user.lname,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in",
      status: "error",
      error: error.message,
    });
  }
};

// Controller to Update
userController.update = async (req, res) => {
  const userData = req.body;
  const userId = req.params.id;

  try {
    if (req.user.id !== parseInt(userId, 10)) {
      return res.status(403).json({
        message: "Forbidden",
        status: "error",
      });
    }

    const updatedUser = await userServices.update(userId, userData);
    res.status(200).json({
      message: "User updated successfully",
      status: "success",
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        fname: updatedUser.fname,
        lname: updatedUser.lname,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      status: "error",
      error: error.message,
    });
  }
};

// Conmtroler to Logout
userController.logout = async (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
      status: "error",
    });
  }

  addTokenToBlacklist(token);

  res.status(200).json({
    message: "Logout successful",
    status: "success",
  });
};

// Controler to list
userController.list = async (req, res) => {
  try {
    const listUSer = await userServices.list();
    res.status(200).json({
      message: "User list ",
      status: "success",
      user: listUSer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error list user",
      status: "error",
      error: error.message,
    });
  }
};

export default userController;
