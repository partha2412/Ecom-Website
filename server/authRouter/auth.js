import UserModel from "../models/UserDB.js";
import { generate_cookie } from "./tokenHandle.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user)
            return res.status(404).send({ message: "User Not Found" })
        if (user.password === password) {
            generate_cookie(user._id, res);
            return res.status(200).send({ message: "Logged in" })
        }
    } catch (error) {
        console.log(error);
        
        return res.status(500).send({ message: "server error ok", error })
    }
}

export const signup = async (req, res) => {
    const { f_name, l_name, email, password, phone_no, dob, address } = req.body
    if (!f_name || !l_name || !email || !password)
        return res.status(400).send({ message: "enter data to Create an account" })
    try {
        const check = await UserModel.findOne({ email: email })
        console.log(check);

        if (check)
            return res.status(400).send({ message: "User Already Exists" })
        const user = await UserModel.create({
            f_name, l_name, email, password, phone_no, dob, address
        })
        if (!user)
            return res.status(400).send({ message: "Not Sucess" })
        console.log("User Created");
        return res.status(200).send({ message: "User Created !" })
    } catch (error) {
        return res.status(500).send({ message: "server error", error })
    }
}