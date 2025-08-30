import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import auth from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import productRouter from './routes/productRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import authRouter from './routes/authRoutes.js'

dotenv.config();

connectDB()
const app = express();
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173", // || "process.env.ORIGIN" , // process.env.ORIGIN
    credentials: true
}))

app.use(express.json())

//  path: "/api/auth/login"


app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)



const port = process.env.PORT
app.listen(port, () => console.log(`Started at: http://localhost:${port}`))