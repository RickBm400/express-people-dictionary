import dotenv from "dotenv";
import type { env } from "../types/env.types";
import { connect, connection } from "mongoose";
import { beforeAll, afterAll } from "@jest/globals";

dotenv.config();
const { DB_CONNECTION }: env = process.env as any;
let db: any;

beforeAll(async () => {
  db = await connect(DB_CONNECTION);
});

afterAll(async () => {
  await connection.close();
});
