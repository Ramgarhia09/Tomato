import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://akshit07plp:Ramgarhia09@cluster0.jjykt.mongodb.net/").then(()=>{console.log("DB Connected")})
}