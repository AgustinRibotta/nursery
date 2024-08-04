import { readFile } from "fs/promises";
import { pool } from "../config/dbconfig.js"; // Asegúrate de que esta ruta sea correcta

async function createTables() {
  try {
    const sql = await readFile(
      new URL("./createTable.sql", import.meta.url),
      "utf-8"
    );
    await pool.query(sql);
    console.log("Tables created successfully");
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    await pool.end();
  }
}

createTables();
