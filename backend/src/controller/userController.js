import { createUser } from "../services/userServices.js";

// Controller to create a new user
const createUserHandler = async (req, res) => {
  const user = req.body;

  try {
    // Create User
    const newUser = await createUser(user);
    res.status(201).json({
      message: "User created successfully",
      status: "success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      status: "error",
      error: error.message,
    });
  }
};

export { createUserHandler };
