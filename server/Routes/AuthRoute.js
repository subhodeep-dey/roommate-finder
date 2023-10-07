import express from "express";
import bodyParser from "body-parser";
import { loginUser, registerUser } from "../Controllers/AuthController.js";

const router = express.Router()
router.use(bodyParser.json());

router.post('/register', registerUser)
router.post('/login', loginUser)
export default router