import { getAllUser, getUserById, uptadeUser, deleteUser } from "../controllers/user.controller.js";
import { Router } from "express";

export const userRouter = Router()

userRouter.get('/user', getAllUser);
userRouter.get('/user/:id', getUserById);
userRouter.put('user/:id', uptadeUser);
userRouter.delete('user/:id', deleteUser);