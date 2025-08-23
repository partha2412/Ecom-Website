import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const URL = process.env.MONGO_URL
export default () => {
    mongoose.connect(URL)
    .then(() => console.log("DB Connected !"))
    .catch((err) => console.log("DB Connection faled !!", err))
}
