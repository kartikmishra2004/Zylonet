import Chat from "../models/chat.model.js";

const chatlist = async (req, res) => {
    try {
        const userId = req.user._id;
        const chatlist = await Chat.find({ _id: { $regex: userId } })
        if (chatlist.length > 0) {
            res.status(200).json(chatlist);
        } else {
            res.status(404).json({ message: "No chat found!" });
        }
    } catch (error) {
        res.status(400).json({ message: "Failed to get chatlist!", error });
    }
}

export default chatlist;
