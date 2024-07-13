import express from "express";
import userController from "../controller/userController.js";
const router = express.Router();

// Route to create a new user
router.post("/user-create", userController.create);
router.post("/user-login", userController.login);

export default router;
