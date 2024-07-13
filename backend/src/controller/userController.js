import userServices from "../services/userServices.js";

const userController = {};

// Controller to create a new user
userController.create = async (req, res) => {
  const user = req.body;

  try {
    // Create User
    const newUser = await userServices.create(user);
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

// Controller to login User

userController.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    // User verification and password control
    const loggedInUser = await userServices.login(email, password);
    res.status(200).json({
      message: "Login successful",
      status: "success",
      user: {
        id: loggedInUser.id,
        email: loggedInUser.email,
        fname: loggedInUser.fname,
        lname: loggedInUser.lname,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error login",
      status: "error",
      error: error.message,
    });
  }
};

export default userController;
