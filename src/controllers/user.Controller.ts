import { Request, response, Response } from "express";
import { userService, bcryptService } from "../repository";
import { setWebToken } from "../utils/jwt";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const postNewUser = async (req: Request, res: Response) => {
  try {
    let user: any = req.body;
    if (!user.password || !user.email) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }
    user.password = await bcryptService.makeHash(user.password);
    const newUSer = await userService.create(user);
    res
      .status(200)
      .json({ message: "user created, redirect to dashboard", user: newUSer });
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: any = await userService.findOne(email);
    if (!user) throw new Error("user doesn't exist");

    const isPassword = bcryptService.compareHash(password, user.password);
    if (!isPassword) throw new Error("Incorrect password");

    const jwt = setWebToken({ id: user.id, email: user.email });
    return res.status(200).json({
      message: "Redirect to user dashboard",
      token: jwt,
    });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export default {
  getUsers,
  postNewUser,
  login,
};
