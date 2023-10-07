import express from "express";
import bodyParser from "body-parser";
import { loginUser, registerUser, verifyEmail } from "../Controllers/AuthController.js";

const router = express.Router()
router.use(bodyParser.json());

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/verify-email', verifyEmail)
export default router