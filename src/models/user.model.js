import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

// Securing password using bcrypt
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        console.log("error hashing password!!");
    }
});

// Comparing password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

// Generating JSON Web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            username: this.username,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        );
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model("User", userSchema);

export default User;