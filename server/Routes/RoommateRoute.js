import express from "express";
import { createRoommate, deleteRoommate, getRoommate, getAllRoommate, updateRoommate } from "../Controllers/RoommateController.js";
import { rateLimiter_10min_10req, rateLimiter_10min_100req } from "../Middlewares/rateLimiter.js";
import { isAdmin } from '../Middlewares/isAdmin.js';
import { dontExecuteAtProduction } from '../Middlewares/dontExecuteAtProduction.js';
import { verifyJWT_withuserId, verifyJWTForGetRequest } from "../Middlewares/verifyJWT.js";

const router = express.Router()

router.get('/all', rateLimiter_10min_100req, getAllRoommate);
router.post('/:userid', rateLimiter_10min_10req, verifyJWT_withuserId, createRoommate);
router.post('/my/:userid', rateLimiter_10min_100req, verifyJWT_withuserId, getRoommate);
router.put('/:id', rateLimiter_10min_10req, isAdmin, dontExecuteAtProduction, updateRoommate);
router.delete("/:id", rateLimiter_10min_100req, verifyJWT_withuserId, deleteRoommate);

export default router;