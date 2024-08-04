import { query } from "express";
import { pool } from "../config/dbconfig.js";

const User = {};

// Create a new user
User.create = async (user) => {
  const { fname, lname, email, password } = user;
  const checkUserQuery = `
    SELECT * 
    FROM useradmin 
    WHERE email = $1`;
  const insertUserQuery = `
    INSERT INTO useradmin (fname, lname, email, password) 
    VALUES($1, $2, $3, $4) 
    RETURNING id, fname, lname, email`;
  const values = [fname, lname, email, password];

  try {
    // Check if the user already exists
    const check = await pool.query(checkUserQuery, [email]);
    if (check.rows.length > 0) {
      throw new Error("User already exists with this email");
    }

    // Insert the new user
    const result = await pool.query(insertUserQuery, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error creating user", err);
    throw err;
  }
};

// Login
User.findByEmail = async (email) => {
  const query = `
    SELECT * 
    FROM useradmin 
    WHERE email = $1`;
  const values = [email];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error finding user by email", error);
    throw error;
  }
};

// Update user
User.update = async (userId, userData) => {
  const { fname, lname, email, password } = userData;
  const query = `
    UPDATE useradmin
    SET fname = $1, lname = $2, email = $3, password = $4
    WHERE id = $5
    RETURNING id, fname, lname, email`;
  const values = [fname, lname, email, password, userId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error updating user: ", error);
    throw error;
  }
};

// List Users
User.list = async () => {
  const query = `
      SELECT *
      FROM useradmin
      RETURNING id, fname, lname, email`;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error list users", error);
    throw error;
  }
};

export default User;
