import { register, login, getAllUser } from "../controllers/user.controller.js";
import { Router } from "express";

export const userRouter = Router()

userRouter.post('/register', register);

userRouter.post('/login', login)

userRouter.get('/user', getAllUser)