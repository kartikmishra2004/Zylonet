import Post from "../models/post.model.js";
import cloudinary from "cloudinary";
import fs from "fs";

// Logic for creating a post
export const createPost = async (req, res) => {
    try {
        const userData = req.user;
        if (!userData) {
            console.log("Failed to find user!!");
        } else {
            // Upload image to cloudinary
            const uploadResult = await cloudinary.uploader.upload(req.file.path);

            // Saving post to db 
            const { title, caption } = req.body;
            const author = req.user._id;
            const imageUpload = await Post.create({ image: uploadResult.secure_url, author, title, caption });
            res.status(200).json({ message: "Uploaded successfully!!" });

            // Deleting the image from the server
            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    } catch (error) {
        res.status(400).json({ message: "Failed to create post!!" });
    }
}

// Logic for reading all posts of logged in user
export const readPost = async (req, res) => {
    try {
        const author = req.user._id;
        const findPosts = await Post.find({ author: author });
        res.status(200).json(findPosts);
    } catch (error) {
        res.status(400).json({ message: "Failed to load posts!!" })
    }
}

// Logic for reading all posts of logged in user
export const deletePost = async (req, res) => {
    try {
        //    Find post to be deleted and delete it 
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).json({ message: "Failed to find post!!" });
        }
        if (post.author.toString() != req.user._id) {
            res.status(401).json({ message: "Unauthorized!!" });
        } else {
            const deletePost = await Post.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Post deleted successfully!!" });
        }
    } catch (error) {
        res.status(400).json({ message: "Failed to delete post!!" });
    }
}