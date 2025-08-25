import UserModel from "../models/UserDB.js"
import { verifyToken } from "../utils/tokenUtils.js"

export async function protect(req, res, next) {
    
    const token = req.cookies.token
    if (!token)
        return res.status(400).send({ message: "Unauthorized user" })
    try {
        const decoded = verifyToken(token)
        req.user = await UserModel.findById(decoded.id).select("-password");
        next()
    } catch (error) {
        res.status(500).send({message: "Authentication Error, Invalid token"})
    }
}