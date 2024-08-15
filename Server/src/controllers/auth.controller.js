import User from "../models/user.model.js";

// Signup logic
export const signup = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;
        const emailExist = await User.findOne({ email });
        const usernameExist = await User.findOne({ username });
        if (emailExist) {
            res.status(400).json({ message: "Email already exists!!" });
        }
        if (usernameExist) {
            res.status(400).json({ message: "Username already exists!!" });
        }
        const userCreated = await User.create({ fullName, username, email, password });
        res.status(200).json({
            message: "Registration successful!!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        res.status(400).json({ message: "Failed to signup!!" });
    }
}

// Login logic
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExist = await User.findOne({ username });
        if (!userExist) {
            res.status(400).json({ message: "Invalid username or password!!" });
        }
        const user = await userExist.comparePassword(password);
        if (user) {
            res.status(201).json({
                message: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
    } catch (error) {
        res.status(400).json({ message: "Failed to Login!!" });
    }
}

// Authentication logic
export const userauth = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData });
    } catch (error) {
        console.log("Error from the userauth route", error)
    }
}