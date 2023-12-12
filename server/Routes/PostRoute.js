import express from "express";
import { isAdmin } from '../Middlewares/isAdmin.js';
import { dontExecuteAtProduction } from '../Middlewares/dontExecuteAtProduction.js';
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController.js";
const router = express.Router()

router.post('/', dontExecuteAtProduction, createPost)
router.get('/:id', dontExecuteAtProduction, getPost)
router.put('/:id', dontExecuteAtProduction, updatePost)
router.delete("/:id", dontExecuteAtProduction, deletePost)
router.put("/:id/like", dontExecuteAtProduction, likePost)
router.get("/:id/timeline", dontExecuteAtProduction, getTimelinePosts)
export default router;