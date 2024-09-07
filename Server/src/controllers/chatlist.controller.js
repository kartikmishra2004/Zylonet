import Chat from "../models/chat.model.js";

const chatlist = async (req, res) => {
    try {
        const userId = req.user._id;
        const chatlist = await Chat.find({ _id: { $regex: userId } });
        if (chatlist) {
            res.status(200).json(chatlist);
        } else {
            res.status(400).json({ message: "Error!!!" });
        }
    } catch (error) {
        res.status(400).json({ message: "Failed to get chatlist!!" });
    }
}

export default chatlist;