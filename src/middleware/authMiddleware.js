import {
  addTokenToBlacklist,
  isTokenBlacklisted,
} from "../models/tockenBlacklist.js";
import jwt from "jsonwebtoken";

const requireAuth = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
      status: "error",
    });
  }

  try {
    const isBlacklisted = await isTokenBlacklisted(token);
    if (isBlacklisted) {
      return res.status(401).json({
        message: "Invalid token",
        status: "error",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
      status: "error",
    });
  }
};

export default requireAuth;
