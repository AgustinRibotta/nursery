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
  "/update/:id",
  // requireAuth,
  upload.single("image"),
  aboutUsController.update
);

router.get(
  "/active",
  // requireAuth,
  aboutUsController.listActive
);

router.delete(
  "/delete/:id",
  // requireAuth,
  aboutUsController.delete
);

export default router;
