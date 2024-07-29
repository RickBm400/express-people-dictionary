import { Router } from "express";
import userRouter from "./routes/user.routes";
let router = Router();

router.use("/user", userRouter);
export default router;
