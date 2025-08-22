import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const dbCon=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log("Database connection success") 
    } catch (error) {
        console.log(error);
    }
}

export default dbCon