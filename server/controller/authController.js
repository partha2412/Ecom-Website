import UserModel from "../models/UserDB.js";
import { generateToken } from "../utils/tokenUtils.js";
import { configDotenv } from "dotenv";
configDotenv();


// Login End point and emit token
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user)
            return res.status(404).send({ message: "User Not Found" })
        if (user.password === password) {
            const token = generateToken(user._id)
            const duration = process.env.SESSION_DURATION;
            console.log("logged in")
            res.cookie('token', token, { httpOnly: true, secure: false, maxAge: duration * 60000 })
            return res.status(200).send({ message: "Logged in", data: { id: user._id, name: user.name } })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "server error", error })
    }
}


// signuo end point
export const signup = async (req, res) => {
    const { name, email, phone_no, dob, address, password } = req.body
    if (!name || !email || !password)
        return res.status(400).send({ message: "enter data to Create an account" })
    try {
        const check = await UserModel.findOne({ email: email })
        //console.log(check);

        if (check)
            return res.status(400).send({ message: "User Already Exists" })
        const user = await UserModel.create({
            name, email, password, phone_no, dob, address
        })
        if (!user)
            return res.status(400).send({ message: "Not Sucess" })
        
        const token = generateToken(user._id)
        const duration = process.env.SESSION_DURATION;
        res.cookie('token', token, { httpOnly: true, secure: false, maxAge: duration * 60000 })

        console.log("User Created");
        return res.status(200).send({ message: "User Created !", data: { id: user._id, name: user.name } })
    } catch (error) {
        return res.status(500).send({ message: "server error", error })
    }
}

export const me = async (req, res) => {
    res.json(req.user)
}

export async function logout(req, res) {
    console.log("loggd out")
    res.clearCookie("token");
    res.json({ message: "Logged out" });
}