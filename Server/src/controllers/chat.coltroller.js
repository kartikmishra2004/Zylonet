import Chat from "../models/chat.model.js";

const chat = async (req, res) => {
    try {
        const { roomName } = req.params;
        const chat = await Chat.findOne({ _id: roomName })
            .populate("messages")
            .exec();

        if (!chat) {
            return res.status(200).json({ messages: [] });
        }
        res.status(200).json({ messages: chat.messages });
    } catch (error) {
        res.status(400).json({ message: "Server error while fetching chat history" });
    }
}

export default chat;