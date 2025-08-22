import express from "express"
import authRouter from "./auth.router.js";
import taskRouter from "./task.router.js";
import { Auth } from "../middleware/auth.js";
const router=express.Router();

router.use(authRouter);
router.use(taskRouter);

export default router