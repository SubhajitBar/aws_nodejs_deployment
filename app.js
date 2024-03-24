import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import dataRoutes from "./routes/dataRoutes.js";

config({
    path: "./config/config.env"
})
const app = express();

app.use("/api", dataRoutes);

export default app;

app.get("/hint/get", (req, res) => res.send(
    `<h5>enter /api/data to get all data</h5>`
    // `<h5>enter /api/data/10 to get 10 data</h5>`
    )
);

app.use(ErrorMiddleware);