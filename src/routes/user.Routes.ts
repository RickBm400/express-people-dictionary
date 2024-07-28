import { Router } from "express";
const AsyncHandler = require("express-async-handler");
let { getUser } = require("../controllers/user.Controller");
let userRouter = Router();

userRouter.get("/", AsyncHandler(getUser));
export default userRouter;
