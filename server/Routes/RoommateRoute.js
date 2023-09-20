import express from "express";
import { createRoommate, deleteRoommate, getRoommate, getAllRoommate, updateRoommate } from "../Controllers/RoommateController.js";
const router = express.Router()

router.get('/all', getAllRoommate);
router.post('/:userid', createRoommate);
router.post('/my/:userid', getRoommate);
router.put('/:id', updateRoommate);
router.delete("/:id", deleteRoommate);

export default router;