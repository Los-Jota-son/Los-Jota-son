import { getAllPost, getPostById, createPost, updatePost, deletePost } from "../controllers/post.controllers.js";
import { verifyToken } from "../middlewares/auth.js";
import { Router } from "express";

export const postRouter = Router();

postRouter.get('/post', verifyToken, getAllPost);
postRouter.get('/post/:id', verifyToken, getPostById);
postRouter.post('/post', verifyToken, createPost);
postRouter.put('/post/:id', verifyToken, updatePost);
postRouter.delete('/post/:id', verifyToken, deletePost);