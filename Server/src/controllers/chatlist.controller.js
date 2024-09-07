import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";

const chatlist = async (req, res) => {
    try {
        const userId = req.user._id;
        const chatlist = await Chat.find({ _id: { $regex: userId } });

        if (chatlist.length > 0) {
            // Extract user IDs from chatlist
            const userIds = chatlist.map(chat => chat._id.split('_')[1]);

            // Fetch user details for those IDs
            const users = await User.find({ _id: { $in: userIds } });

            // Map users to a dictionary for quick lookup
            const userMap = users.reduce((acc, user) => {
                acc[user._id] = { fullName: user.fullName, username: user.username, profile: user.profile };
                return acc;
            }, {});

            // Populate chatlist with user details
            const populatedChatlist = chatlist.map(chat => ({
                ...chat.toObject(),
                user: userMap[chat._id.split('_')[1]] || {}
            }));

            res.status(200).json(populatedChatlist);
        } else {
            res.status(404).json({ message: "No chat found!" });
        }
    } catch (error) {
        res.status(400).json({ message: "Failed to get chatlist!", error });
    }
}

export default chatlist;
