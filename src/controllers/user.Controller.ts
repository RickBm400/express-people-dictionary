import { Request, Response } from "express";
import { userService, bcryptService } from "../services";
import { IUser } from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const postNewUser = async (req: Request, res: Response) => {
  try {
    let user: IUser = req.body;
    user.password = await bcryptService.makeHash(user.password);
    const newUSer = await userService.create(user);
    res.json({ message: "user created", user: newUSer });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
