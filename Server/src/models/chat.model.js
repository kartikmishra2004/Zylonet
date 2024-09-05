// chat.model.js
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // roomName as _id
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }] // messages as an array of Message references
}, { timestamps: true });

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
