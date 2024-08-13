import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    username: {
        type: String,
        lowercase: true,
    },
    email: {
        type: String,
        lowercase: true,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;