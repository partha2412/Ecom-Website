import express from 'express'
import {login, signup} from '../authRouter/auth.js'
import { verify_cookie } from '../authRouter/tokenHandle.js';
import home from '../controller/home.js';

const router = express.Router();

router.post('/login',login)
router.post('/signup',signup)
router.get('/home',verify_cookie,home)

router.get('/me', verify_cookie, (req, res) => {
    res.json({ id: req.userId, name: req.userName }); // or full user object
});

export default router