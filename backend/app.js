import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRouter.js";

// Env
dotenv.config();

// App express
const app = express();
const port = process.env.APP_PORT;

// Middleware
app.use(bodyParser.json());

// Use user routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
