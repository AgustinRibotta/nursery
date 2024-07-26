import express from "express";
import seasonController from "../controller/seasonControllers.js";
import upload from "../middleware/uploadMiddleware.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//  Create
router.post(
  "/",
  //   requireAuth,
  seasonController.create
);

// Update
router.patch(
  "/:id",
  // requireAuth,
  seasonController.update
);

router.get(
  "/active",
  // requireAuth,
  seasonController.listActive
);

// Delete
router.delete(
  "/:id",
  // requireAuth,
  seasonController.delete
);

export default router;
