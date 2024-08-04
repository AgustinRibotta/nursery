import express from "express";
import plantController from "../controller/plantControllers.js";
import upload from "../middleware/uploadMiddleware.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//  Create
router.post(
  "/",
  //   requireAuth,
  upload.single("image"),
  plantController.create
);

// Update
router.patch(
  "/:id",
  // requireAuth,
  upload.single("image"),
  plantController.update
);

//  List
router.get(
  "/",
  // requireAuth,
  plantController.list
);

// Delete
router.delete(
  "/:id",
  // requireAuth,
  plantController.delete
);

export default router;
