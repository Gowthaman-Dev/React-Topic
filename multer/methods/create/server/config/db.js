import mongoose from "mongoose";

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDb is Connected ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Mongodb Failed to Connect`);
    }

}

export default connectdb