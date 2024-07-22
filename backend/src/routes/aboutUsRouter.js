import express from "express";
import aboutUsController from "../controller/aboustUsControllers.js";
import upload from "../middleware/uploadMiddleware.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/create",
  //   requireAuth,
  upload.single("image"),
  aboutUsController.create
);

router.patch(
  "/update",
  // requireAuth,
  upload.single("image"),
  aboutUsController.update
);

router.get("/active", aboutUsController.listActive);

export default router;
