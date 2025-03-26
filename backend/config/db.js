import mongoose from "mongoose";


 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://halloweengaming9823:Shadab9823@cluster0.hbfv2.mongodb.net/Dawat_E_Zaika').then(()=>console.log("Db is connect succesfully"))
}