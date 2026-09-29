import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();
const app= express();

app.use('/' , async (req,res)=>{
    res.send("<h1>Serevr is running....</h1>")
})
try{
    const port=process.env.PORT;
    connectDB().then(()=>{
        app.listen(port, ()=>{
        console.log(`The server is running on http://localhost:${port}`);
        })
    })

}catch(err){
    console.log("Database connection failed",err.message);
    process.exit(1);

}

