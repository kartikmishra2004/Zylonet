import User from "../models/user.model.js";

// Logic for following
export const follow = async (req, res) => {
    try {
        const { userId, targetUserId } = req.body;
        const user = await User.findById(userId);
        const targetUser = await User.findById(targetUserId);
        if (!user || !targetUser) {
            res.status(404).json({ message: "User not found!!" });
        }
        if (!user.following.includes(targetUserId)) {
            user.following.push((targetUserId));
            targetUser.followers.push(userId);
            await user.save();
            await targetUser.save();
        }
        res.status(200).json({ message: "Followed successfully!!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to follow!!" });
    }
}

export const unfollow = async (req, res) => {
    try {
        const { userId, targetUserId } = req.body;
        const user = await User.findById(userId);
        const targetUser = await User.findById(targetUserId);
        if (!user || !targetUser) {
            res.status(404).json({ message: "User not found!!" });
        }
        user.following = user.following.filter(id => !id.equals(targetUserId));
        targetUser.followers = targetUser.followers.filter(id => !id.equals(userId));
        await user.save();
        await targetUser.save();
        res.status(200).json({ message: "Unfollowed successfully!!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to unfollow!!" })
    }
}