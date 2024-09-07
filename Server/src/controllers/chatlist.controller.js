import Chat from "../models/chat.model.js";

const chatlist = async (req, res) => {
    try {
        const chatlist = await Chat.find();
        res.status(200).json(chatlist);
    } catch (error) {
        res.status(400).json({ message: "Failed to get chatlist!!" })
    }
}

export default chatlist;