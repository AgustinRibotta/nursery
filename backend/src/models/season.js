import { pool } from "../config/dbconfig.js";

const Season = {};

Season.create = async (season) => {
  const { title, active } = season;
  const checkQuery = `
    SELECT *
    FROM season
    WHERE title = $1`;
  const seasonQuery = `
    INSERT INTO season (title, active)
    VALUES ($1, $2)
    RETURNING id, title, active`;
  const values = [title, active];

  try {
    // Check if the Season already exists
    const check = await pool.query(checkQuery, [title]);
    if (check.rows.length > 0) {
      throw new Error("The Season record already exists");
    }

    // Check if there are multiple active records
    const activeRecords = await Season.active();
    if (activeRecords.length > 0 && active) {
      throw new Error(
        "Cannot add a new active Season record as one already exists"
      );
    }

    // Insert the new Season
    const result = await pool.query(seasonQuery, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error creating the Season record:", err.message);
    throw new Error(`Error creating the Season record: ${err.message}`);
  }
};

//  Update
Season.update = async (seasonId, season) => {
  const { title, active } = season;
  const query = `
  UPDATE season
  SET title = $1, active = $2
  WHERE id = $3
  RETURNING id, title, active`;
  const values = [title, active, seasonId];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error(
        `Update failed: No Season record found with id ${seasonId}`
      );
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error updating Season:", error.message);
    throw new Error(
      `Error updating Season with id ${season}: ${error.message}`
    );
  }
};

//  List active
Season.active = async () => {
  const query = `
  SELECT s.id AS season_id, s.title AS season_title, 
         p.id AS plant_id, p.image AS plant_image, 
         p.name AS plant_name, p.text AS plant_text
  FROM season s
  LEFT JOIN plant p ON s.id = p.season_id
  WHERE s.active = true
  LIMIT 3;
  `;

  try {
    const result = await pool.query(query);

    if (result.rows.length === 0) {
      // No active season found
      return null;
    }

    const row = result.rows[0];
    const season = {
      id: row.season_id,
      title: row.season_title,
      plants: [],
    };

    if (row.plant_id) {
      season.plants.push({
        id: row.plant_id,
        image: row.plant_image,
        name: row.plant_name,
        text: row.plant_text,
      });
    }

    for (let i = 1; i < result.rows.length; i++) {
      const additionalRow = result.rows[i];
      if (additionalRow.plant_id) {
        season.plants.push({
          id: additionalRow.plant_id,
          image: additionalRow.plant_image,
          name: additionalRow.plant_name,
          text: additionalRow.plant_text,
        });
      }
    }

    return season;
  } catch (error) {
    console.error("Error retrieving the active season:", error.message);
    throw new Error(`Error retrieving the active season: ${error.message}`);
  }
};

// Delete
Season.delete = async (seasonId) => {
  const query = `
  DELETE FROM season
  WHERE id = $1`;
  const value = [seasonId];

  try {
    const result = await pool.query(query, value);
    if (result.rowCount === 0) {
      throw new Error(
        `Deletion failed: No Season record found with id ${seasonId}`
      );
    }
    return result.rows;
  } catch (error) {
    console.error(
      "Error deleting Season record with id:",
      seasonId,
      error.message
    );
    throw new Error(
      `Error deleting Season record with id ${seasonId}: ${error.message}`
    );
  }
};

export default Season;
