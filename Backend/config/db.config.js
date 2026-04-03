import mongoose from "mongoose";


export async function connectDatabase(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB is Connected")
    } catch (error) {
        console.log(error?.message)
        process.exit(1)
    }
}

