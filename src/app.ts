import express, { Express, Request, Response } from "express";
import router from "./routes";
import { connectDB } from "./config/db";
import type { env } from "./types/env.types";
let morgan = require("morgan");
require("dotenv").config();

// dotenv variables
const { DB_CONNECTION, PORT }: env = process.env as any;

// declare express aplication
const app: Express = express();

// Express middleware
app.use(morgan(":method :url :response-time :remote-user"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set API routes
app.use("/api/", router);

// MongoDb connection
connectDB(DB_CONNECTION);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Set http server
app.listen(PORT, () => {
  console.log(`Listen app on port ${PORT}`);
});

export default app;
