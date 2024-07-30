import { describe, expect } from "@jest/globals";
import request from "supertest";
import app from "../app";
import User from "../models/user.model";
import dotenv from "dotenv";

dotenv.config();
describe("TEST: User endpoints", () => {
  const mockUser: any = {
    name: "mocking",
    email: "mock@gmail.com",
    lastName: "mock",
    password: "test1234",
  };

  afterAll(async () => {
    await User.deleteOne({ email: "mock@gmail.com" });
  });

  it("should insert a doc in collection", async () => {
    await request(app)
      .post("/api/user/create-user")
      .send(mockUser)
      .expect("Content-type", /json/)
      .expect(200);
  });

  it("should login user", async () => {
    await request(app)
      .post("/api/user/login")
      .send({ email: mockUser.email, password: mockUser.password })
      .expect("Content-type", /json/)
      .expect(200);
  });

  it("should set error if bad login", async () => {
    const res = await request(app)
      .post("/api/user/login")
      .expect("Content-type", /text/)
      .send({ email: mockUser.email, password: "test12345" })
      .expect(400);
    expect(res.text).toMatch(/Incorrect Password/i);
  });
});
