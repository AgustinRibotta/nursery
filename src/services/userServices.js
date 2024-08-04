import User from "../models/userAdmin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userServices = {};

// Service to create a new user
userServices.create = async (user) => {
  // Encrypt user password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  user.password = hashedPassword;

  const newUser = await User.create(user);
  return newUser;
};

// Service to log in a user
userServices.login = async (email, password) => {
  try {
    // Search for user by email in the database
    const user = await User.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { user, token };
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

// Service to update a user
userServices.update = async (userId, userData) => {
  if (userData.password) {
    // Encrypt new user password if provided
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;
  }

  const updatedUser = await User.update(userId, userData);
  return updatedUser;
};

// Service to list user
userServices.list = async () => {
  const listUSer = await User.list();
  console.log(listUSer);
  return listUSer;
};

export default userServices;
