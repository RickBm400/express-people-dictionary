import { describe, expect } from "@jest/globals";
import { connect, connection } from "mongoose";
import userService from "../services/user.service";
import User, { IUser } from "../models/user.model";
import dotenv from "dotenv";
import type { env } from "../types/env.types";

dotenv.config();
const { DB_CONNECTION, PORT }: env = process.env as any;
let db: any;

describe("init mongoDB", () => {
  beforeAll(async () => {
    console.log(DB_CONNECTION);
    db = await connect(DB_CONNECTION);
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it("should insert a doc into collection", async () => {
    const mockUser: IUser = new User({
      name: "carlos",
      email: "rjj@gmail.com",
    });
    await userService.create(mockUser as IUser);

    const insertedUser: any = await User.findOne({
      email: mockUser.email,
    });
    expect(insertedUser).not.toBeNull();
    expect(insertedUser.name).toEqual(mockUser.name);
  });
});
