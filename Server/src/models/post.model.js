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
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;