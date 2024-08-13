import User from "../models/user.model.js";

// Signup logic
const signup = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400).json({ message: "Email already exists!!" });
        } else {
            const userCreated = await User.create({ fullName, username, email, password });
        }
        res.status(200).json({ message: "Registration successful!!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to signup!!" });
    }
}

export default signup;