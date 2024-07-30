import dotenv from "dotenv";
import type { env } from "../types/env.types";
import { connectDB, disconnectDB } from "../config/db";
import { beforeAll, afterAll } from "@jest/globals";

dotenv.config();
const { DB_CONNECTION }: env = process.env as any;

beforeAll(async () => {
  await connectDB(DB_CONNECTION);
});

afterAll(async () => {
  await disconnectDB();
});
