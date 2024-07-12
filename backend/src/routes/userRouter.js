import express from "express";
import { createUserHandler } from "../controller/userController.js";
const router = express.Router();

// Route to create a new user
router.post("/user-admin", createUserHandler);

export default router;
