import express from "express";
import userController from "../controller/userController.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to create a new user
router.post("/create", userController.create);
router.post("/login", userController.login);
router.patch("/update/:id", requireAuth, userController.update);
router.post("/logout", requireAuth, userController.logout);
router.get("/list", requireAuth, userController.list);

export default router;
