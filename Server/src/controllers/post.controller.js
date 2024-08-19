import Post from "../models/post.model.js";
import cloudinary from "cloudinary";
import fs from "fs";

// Logic for creating a post
const createPost = async (req, res) => {
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

export default createPost;