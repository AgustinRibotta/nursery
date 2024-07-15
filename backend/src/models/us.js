import { pool } from "../config/dbconfig.js";

const AboutUs = {};

// Create
AboutUs.create = async (aboutUs) => {
  const { title, text, image } = aboutUs;
  const checkQuery = `
    SELECT *
    FROM us
    WHERE title = $1 AND text = $2`;
  const usQuery = `
    INSERT INTO us (title, text, image)
    VALUES ($1, $2, $3)
    RETURNING id, title, text, image`;
  const values = [title, text, image];

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
  const { title, text, image } = aboutUs;
  const query = `
  UPDATE us
  SET title = $1, text = $2, image = $3
  WHERE id = $4
  RETURNING id, title, text, image`;
  const values = [title, text, image, aboutUsId];

  try {
    const result = await pool.query(query, values);
    return result[0];
  } catch (error) {
    console.error("Error update aboust us");
    throw error;
  }
};

export default AboutUs;
