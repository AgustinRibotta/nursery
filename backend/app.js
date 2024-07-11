import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { pool } from "./src/config/dbconfig.js";

// Enviroment Variables
dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
