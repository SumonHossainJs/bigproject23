import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import userRoute from './routes/user.route.js';
// import videoRoute from './routes/video.route.js';
// import authRoute from './routes/auth.route.js';
// import commentRoute from './routes/commnet.route.js';
import cookieParser from 'cookie-parser';



const app = express();
dotenv.config();


// Error handler


app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    return res.status(status).json({
        success: false, 
        status, 
        message,
    })
})

const connect = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to db");
    }).catch((err)=>{
        throw err;
    })
}


app.listen(8000, () =>{

    connect();
    console.log("Connected to Server");
})