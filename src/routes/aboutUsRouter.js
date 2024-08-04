import express from "express";
import aboutUsController from "../controller/aboustUsControllers.js";
import upload from "../middleware/uploadMiddleware.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//  Create
router.post(
  "/",
  //   requireAuth,
  upload.single("image"),
  aboutUsController.create
);

// Update
router.patch(
  "/:id",
  // requireAuth,
  upload.single("image"),
  aboutUsController.update
);

router.get(
  "/active",
  // requireAuth,
  aboutUsController.listActive
);

// Delete
router.delete(
  "/:id",
  // requireAuth,
  aboutUsController.delete
);

export default router;
