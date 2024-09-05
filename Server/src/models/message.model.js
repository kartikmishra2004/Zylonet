import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;