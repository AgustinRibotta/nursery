import { pool } from "../config/dbconfig.js";

const AboutUs = {};

AboutUs.create = async (aboutUs) => {
  const { title, text, image, active } = aboutUs;
  const checkQuery = `
    SELECT *
    FROM us
    WHERE title = $1 AND text = $2`;
  const usQuery = `
    INSERT INTO us (title, text, image, active)
    VALUES ($1, $2, $3, $4)
    RETURNING id, title, text, image, active`;
  const values = [title, text, image, active];

  try {
    // Check if the About Us already exists
    const check = await pool.query(checkQuery, [title, text]);
    if (check.rows.length > 0) {
      throw new Error("About Us already exists");
    }

    // Insert the new About Us
    const result = await pool.query(usQuery, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error creating About Us", err);
    throw err;
  }
};

//  Update
AboutUs.update = async (aboutUsId, aboutUs) => {
  const { title, text, image, active } = aboutUs;
  const query = `
  UPDATE us
  SET title = $1, text = $2, image = $3, active = $4
  WHERE id = $5
  RETURNING id, title, text, image, active`;
  const values = [title, text, image, active, aboutUsId];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error(`No record found with id ${aboutUsId}`);
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error updating About Us:", error);
    throw error;
  }
};

//  List active

AboutUs.active = async () => {
  const query = `
  SELECT *
  FROM us
  WHERE active = true`;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("No active Us");
    throw error;
  }
};

export default AboutUs;
