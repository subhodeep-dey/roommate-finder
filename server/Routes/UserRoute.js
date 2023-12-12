import express from "express";
import { isAdmin } from '../Middlewares/isAdmin.js';
import { dontExecuteAtProduction } from '../Middlewares/dontExecuteAtProduction.js';
import { nameFormat } from "../Middlewares/Format/nameFormat.js";
import { rateLimiter_10min_10req, rateLimiter_10min_100req } from "../Middlewares/rateLimiter.js";
import { verifyJWT_withuserId, verifyJWTForGetRequest, verifyJWT_withcurrentUserId, verifyJWT_withadminUsername } from "../Middlewares/verifyJWT.js";
import { deleteUser, followUser, getAllUser, getUser, getPersonalUser, UnFollowUser, updateUser, updateUserByAdmin, likeRoom, likeRoommate } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/all', rateLimiter_10min_100req, dontExecuteAtProduction, getAllUser)
router.get('/:id', rateLimiter_10min_100req, getUser)
router.get('/personal/:id', rateLimiter_10min_100req, getPersonalUser)
router.put('/:id', rateLimiter_10min_10req, verifyJWT_withcurrentUserId, nameFormat, updateUser)
router.put('/admin/:username', rateLimiter_10min_100req, dontExecuteAtProduction, verifyJWT_withadminUsername, updateUserByAdmin)
router.delete('/:id', rateLimiter_10min_100req, dontExecuteAtProduction, deleteUser)
router.put('/:id/follow', rateLimiter_10min_100req, followUser)
router.put('/:id/unfollow', rateLimiter_10min_100req, UnFollowUser)
router.put('/:id/likesroom', rateLimiter_10min_100req, likeRoom)
router.put('/:id/likesroommate', rateLimiter_10min_100req, likeRoommate)
export default router;