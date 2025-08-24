import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import auth from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

connectDB()
const app = express();
app.use(cookieParser());

app.use(cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use('/api',auth)



const port = process.env.PORT
app.listen(port,()=>console.log(`Started at: http://localhost:${port}`))