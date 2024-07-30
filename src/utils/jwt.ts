import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env as any;

export function setWebToken(input: object): string {
  return Jwt.sign(input, JWT_SECRET, { expiresIn: "1d" });
}
