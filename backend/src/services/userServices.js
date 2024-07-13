import User from "../models/userAdmin.js";
import bcrypt from "bcrypt";

const userServices = {};

userServices.create = async (user) => {
  // Encrypt user password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  user.password = hashedPassword;

  const newUser = await User.create(user);

  return newUser;
};

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

    return user;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export default userServices;
