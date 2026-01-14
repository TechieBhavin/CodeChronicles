import express from "express";
import * as postController from "../controllers/post.controller.js";


const router = express.Router();
    
router.post("/posts", postController.createPost);
router.get("/posts", postController.getAllPosts);

export default router;
