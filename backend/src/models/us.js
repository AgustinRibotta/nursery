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
      throw new Error("The About Us record already exists");
    }

    // Check if there are multiple active records
    const activeRecords = await AboutUs.active();
    if (activeRecords.length > 0 && active) {
      throw new Error(
        "Cannot add a new active About Us record as one already exists"
      );
    }

    // Insert the new About Us
    const result = await pool.query(usQuery, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error creating the About Us record:", err.message);
    throw new Error(`Error creating the About Us record: ${err.message}`);
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
      throw new Error(
        `Update failed: No About Us record found with id ${aboutUsId}`
      );
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error updating About Us:", error.message);
    throw new Error(
      `Error updating About Us with id ${aboutUsId}: ${error.message}`
    );
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
    if (result.rows.length > 1) {
      throw new Error("Se encontraron múltiples registros activos de About Us");
    }
    return result.rows;
  } catch (error) {
    console.error(
      "Error al recuperar registros activos de About Us:",
      error.message
    );
    throw new Error(
      `Error al recuperar registros activos de About Us: ${error.message}`
    );
  }
};

// Delete
AboutUs.delete = async (aboutUsId) => {
  const query = `
  DELETE FROM us
  WHERE id = $1`;
  const value = [aboutUsId];

  try {
    const result = await pool.query(query, value);
    if (result.rowCount === 0) {
      throw new Error(
        `Deletion failed: No About Us record found with id ${aboutUsId}`
      );
    }
    return result.rows;
  } catch (error) {
    console.error(
      "Error deleting About Us record with id:",
      aboutUsId,
      error.message
    );
    throw new Error(
      `Error deleting About Us record with id ${aboutUsId}: ${error.message}`
    );
  }
};

export default AboutUs;
