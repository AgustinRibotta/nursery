import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRouter.js";
import aboutUsRouter from "./src/routes/aboutUsRouter.js";
import seasonRouter from "./src/routes/seasonRouter.js";

// Env
dotenv.config();

// App express
const app = express();
const port = process.env.APP_PORT;

// Middleware
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// Use user routes
app.use("/api/user", userRoutes);
// About Us Router
app.use("/api/about-us", aboutUsRouter);
// Season Router
app.use("/api/season", seasonRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
