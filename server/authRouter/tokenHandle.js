import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv"
configDotenv();

const jwt_secret = process.env.JWT_SECRET

export const generate_cookie =  (id,res)=>{
    const duration = process.env.SESSION_DURATION;
    const token = jwt.sign({id},jwt_secret,{expiresIn: `${duration}m`})
    res.cookie('jwt', token, { httpOnly: true, secure: false, maxAge: duration*60000 })
}

export const verify_cookie = (req,res,next)=>{
    const session_cookie = req.cookies.jwt;
    try {
        const decoded = jwt.verify(session_cookie,jwt_secret)
        req.userId = decoded.id;
        next()
    } catch (error) {
        console.log(error)
    }
}