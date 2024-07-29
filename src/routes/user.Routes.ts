import { Router } from "express";
const AsyncHandler = require("express-async-handler");
import { getUsers, addUser } from "../controllers/user.Controller";
let userRouter = Router();

userRouter.get("/", AsyncHandler(getUsers));
export default userRouter;
