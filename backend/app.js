import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRouter.js";
import aboutUsRouter from "./src/routes/aboutUsRouter.js";

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
app.use("/api/about-us", aboutUsRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
