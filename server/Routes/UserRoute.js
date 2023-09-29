import express from "express";
import { deleteUser, followUser, getAllUser, getUser, UnFollowUser, updateUser, likeRoom, likeRoommate } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/all', getAllUser)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)
router.put('/:id/likesroom', likeRoom)
router.put('/:id/likesroommate', likeRoommate)
export default router;