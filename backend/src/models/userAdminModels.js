import { pool } from "../config/dbconfig.js";

// Models to create a new user
const createUserModel = async (user) => {
  const { fname, lname, email, password } = user;
  const checkuser = "SELECT * FROM useradmin WHERE email = $1 ";
  const text =
    "INSERT INTO useradmin (fname, lname, email, password) VALUES($1, $2, $3, $4) RETURNING fname, lname, email";
  const values = [fname, lname, email, password];

  try {
    // Check if the user already exists
    const check = await pool.query(checkuser, [email]);
    if (check.rows.length > 0) {
      throw new Error("User already exists with this email");
    }

    // Insert the new user
    const res = await pool.query(text, values);
    return res.rows[0];
  } catch (err) {
    console.error("Error creating user", err);
    throw err;
  }
};

export { createUserModel };
