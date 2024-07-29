import { describe, expect, test, beforeEach } from "@jest/globals";
import userService from "../services/user.service";
import User, { IUser } from "../models/user.model";
import dotenv from "dotenv";

dotenv.config();
describe("init mongoDB", () => {
  beforeEach(async () => {
    await User.deleteMany();
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
