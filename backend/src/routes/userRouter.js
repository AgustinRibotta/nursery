import express from "express";
import userController from "../controller/userController.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to create a new user
// Create
router.post("/", userController.create);
// Login
router.post("/login", userController.login);
// Update
router.patch("/:id", requireAuth, userController.update);
// Logout
router.post("/logout", requireAuth, userController.logout);
// List
router.get("/", requireAuth, userController.list);

export default router;
