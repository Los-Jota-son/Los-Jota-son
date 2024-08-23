import { register, login } from "../controllers/auth.controllers.js";
import { Router } from "express";

export const authRouter = Router()

authRouter.post('/register', register);
authRouter.post('/login', login);