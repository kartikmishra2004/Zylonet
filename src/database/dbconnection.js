import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Failed to connect MongoDB!!");
    }
}

export default connectDb;