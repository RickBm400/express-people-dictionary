import { Router } from "express";
const AsyncHandler = require("express-async-handler");
import userController from "../controllers/user.Controller";
let userRouter = Router();

userRouter.get("/", AsyncHandler(userController.getUsers));

userRouter.post("/login", AsyncHandler(userController.login));

userRouter.post("/create-user", AsyncHandler(userController.postNewUser));

export default userRouter;
