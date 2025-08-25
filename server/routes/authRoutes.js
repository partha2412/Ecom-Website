import express from 'express'
import { protect } from '../middleware/authMiddleware.js';
import { login, logout, me, signup } from '../controller/authController.js';

const router = express.Router();

router.post('/login',login)
router.post('/signup',signup)
router.get('/me', protect, me);
router. post('/logout',logout);

export default router