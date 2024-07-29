import { Request, Response } from "express";
import userService from "../services/user.service";
import { IUser } from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    const newUser = await userService.create(user);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
