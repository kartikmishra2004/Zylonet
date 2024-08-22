import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    caption: {
        type: String,
    },
    image: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Array,
        default: [],
    },

}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;