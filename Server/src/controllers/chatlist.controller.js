import User from "../models/user.model.js";

const chatlist = async (req, res) => {
    try {
        const userId = req.user;
        if (userId) {
            const users = await User.find();
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(400).json({ message: "Failed to get chatlist!", error });
    }
}

export default chatlist;
