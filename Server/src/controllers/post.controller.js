import Post from "../models/post.model.js";

const createPost = async (req, res) => {
    try {
        const { title, caption, image } = req.body;
    } catch (error) {
        res.status(400).json({message: "Failed to create post!!"});
    }
}

export default createPost;