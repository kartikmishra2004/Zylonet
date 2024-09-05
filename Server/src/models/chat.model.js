import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    roomName: { type: String, required: true },  // Add this field for room name
    messages: [
        {
            senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            message: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
