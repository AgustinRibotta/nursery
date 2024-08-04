import { pool } from "../config/dbconfig.js";

const Plant = {};

// Create plant
Plant.create = async (plant) => {
  const { name, text, image, season_id } = plant;
  const checkQuery = `
    SELECT *
    FROM Plant
    WHERE name = $1`;
  const insertQuery = `
    INSERT INTO Plant (name, text, image, season_id)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, text, image, season_id`;
  const values = [name, text, image, season_id];

  try {
    const check = await pool.query(checkQuery, [name]);
    if (check.rows.length > 0) {
      throw new Error("La planta ya existe");
    }

    const result = await pool.query(insertQuery, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error al crear la planta:", err.message);
    throw new Error(`Error al crear la planta: ${err.message}`);
  }
};

Plant.update = async (plantId, plant) => {
  const { name, text, image, season_id } = plant;

  let setClause = [];
  let values = [];
  let index = 1;

  if (name !== undefined && name !== null && name.trim() !== "") {
    setClause.push(`name = $${index++}`);
    values.push(name);
  }
  if (text !== undefined && text !== null && text.trim() !== "") {
    setClause.push(`text = $${index++}`);
    values.push(text);
  }
  if (image !== undefined && image !== null && image.trim() !== "") {
    setClause.push(`image = $${index++}`);
    values.push(image);
  }
  if (season_id !== undefined && season_id !== null && !isNaN(season_id)) {
    setClause.push(`season_id = $${index++}`);
    values.push(parseInt(season_id, 10));
  }

  if (setClause.length === 0) {
    throw new Error("No fields to update");
  }

  const query = `
    UPDATE Plant
    SET ${setClause.join(", ")}
    WHERE id = $${index}
    RETURNING id, name, text, image, season_id`;

  values.push(plantId);

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error(`No se encontró una planta con el id ${plantId}`);
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error al actualizar la planta:", error.message);
    throw new Error(
      `Error al actualizar la planta con id ${plantId}: ${error.message}`
    );
  }
};

// List plant for id
Plant.listBySeason = async (seasonId) => {
  const query = `
  SELECT *
  FROM Plant
  WHERE season_id = $1`;

  try {
    const result = await pool.query(query, [seasonId]);
    return result.rows;
  } catch (error) {
    console.error("Error al recuperar plantas por temporada:", error.message);
    throw new Error(
      `Error al recuperar plantas por temporada: ${error.message}`
    );
  }
};

// Delete plant
Plant.delete = async (plantId) => {
  const query = `
  DELETE FROM Plant
  WHERE id = $1`;
  const value = [plantId];

  try {
    const result = await pool.query(query, value);
    if (result.rowCount === 0) {
      throw new Error(`No se encontró una planta con el id ${plantId}`);
    }
    return result.rowCount;
  } catch (error) {
    console.error(
      "Error al eliminar la planta con id:",
      plantId,
      error.message
    );
    throw new Error(
      `Error al eliminar la planta con id ${plantId}: ${error.message}`
    );
  }
};

export default Plant;
