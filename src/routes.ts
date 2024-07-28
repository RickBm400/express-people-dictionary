import { Router } from "express";
import userRouter from "./routes/user.Routes";
let router = Router();

router.use("/user", userRouter);
export default router;
