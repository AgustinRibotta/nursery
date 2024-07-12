import { createUserModel } from "../models/userAdminModels.js";
import bcrypt from "bcrypt";

const createUser = async (user) => {
  // Encrypt user password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  user.password = hashedPassword;

  const newUser = await createUserModel(user);
  return newUser;
};

export { createUser };
