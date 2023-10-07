import express from "express";
import bodyParser from "body-parser";
import { loginUser, registerUser, verifyEmail, requestPasswordReset, updatePassword } from "../Controllers/AuthController.js";

const router = express.Router();

router.use(bodyParser.json());

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-email', verifyEmail);
router.post('/password-reset', requestPasswordReset);
router.post('/update-password', updatePassword);

export default router;