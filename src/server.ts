import {Request,Response} from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/mongo.config";
import { app } from "./app";

dotenv.config();
connectDB();
app.get('/',(req:Request,res:Response)=>{
res.status(200).json({
    message:"request received"
})
});

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("Listening on port",PORT);
    
})