import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, token not provided!!" });
    }

    const jwtToken = token.replace("Bearer", "").trim();

    // JWT verification
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ username: isVerified.username }).select({ password: 0 });

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
    } catch (error) {
        res.status(401).json({ message: "Unauthorized, invalid token!!" });
    }
    next();
}

export default authMiddleware;