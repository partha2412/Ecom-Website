import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv"
configDotenv();

const jwt_secret = process.env.JWT_SECRET

export const generateToken = (userId) => {
    const duration = process.env.SESSION_DURATION;
    try {
        const token = jwt.sign({ id: userId }, jwt_secret, { expiresIn: `${duration}m` })
        return token
    }
    catch (err) {
        return err
    }
    //res.cookie('jwt', token, { httpOnly: true, secure: false, maxAge: duration * 60000 })
}

export const verifyToken = (token) => {
    //const session_cookie = req.cookies.token;
    try {
        const decoded = jwt.verify(token, jwt_secret)
        return decoded;
        // req.userId = decoded.id;
        // next()
    } catch (error) {
        console.log(error)
    }
}