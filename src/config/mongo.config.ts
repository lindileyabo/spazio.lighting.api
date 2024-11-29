import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let mongoURI:string = "mongodb+srv://lindile:<db_password>@cluster0.iqp8q.mongodb.net/";
const mongoPassword:string = process.env.MONGO_PASSWORD as string;
console.log(mongoURI);
if (mongoURI.includes("<db_password>")) {
    console.log("it does include");
    
   mongoURI = mongoURI.replace("<db_password>","pTYgI3TmKrw3OWDN");
    
};

export const connectDB = async ()=>{
   
    try {
        
        await mongoose.connect(mongoURI,{});
        console.log("mongoDb connected....");
        

    } catch (error) {
        console.log("mongoDB failed to connect");

       process.exit(1); 
    }
}