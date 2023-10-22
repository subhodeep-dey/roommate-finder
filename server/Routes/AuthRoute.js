import express from "express";
import bodyParser from "body-parser";
import { loginUser, registerUser, verifyEmail, resendVerificationEmail, requestPasswordReset, updatePassword } from "../Controllers/AuthController.js";

const router = express.Router();

router.use(bodyParser.json());

router.post('/register', async (req, res) => {
    await registerUser(req, res);
  });
  
  router.post('/login', async (req, res) => {
    await loginUser(req, res);
  });
  
  router.post('/verify-email', async (req, res) => {
    await verifyEmail(req, res);
  });
  
  router.post('/resend-verify-email', async (req, res) => {
    await resendVerificationEmail(req, res);
  });
  
  router.post('/password-reset', async (req, res) => {
    await requestPasswordReset(req, res);
  });
  
  router.post('/update-password', async (req, res) => {
    await updatePassword(req, res);
  });

export default router;