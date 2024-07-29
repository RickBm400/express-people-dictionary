import { Router } from "express";
const AsyncHandler = require("express-async-handler");
import { getUsers, postNewUser } from "../controllers/user.Controller";
let userRouter = Router();

userRouter.get("/", AsyncHandler(getUsers));

userRouter.post("/create-user", AsyncHandler(postNewUser));
export default userRouter;
