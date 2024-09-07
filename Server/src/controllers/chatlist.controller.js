import Chat from "../models/chat.model.js";

const chatlist = async (req, res) => {
    try {
        const userId = req.user._id;
        const chatlist = await Chat.find({
            _id: new RegExp(userId)
        }).toArray((err, docs) => {
            if (err) {
                res.status(400).json({ message: "Failed to get chatlist!!" });
            } else {
                res.status(200).json(docs);
            }
        });
    } catch (error) {
        res.status(400).json({ message: "Failed to get chatlist!!" });
    }
}

export default chatlist;