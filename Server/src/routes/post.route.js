import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import cloudinary from "cloudinary";
import authMiddleware from "../middlewares/auth.middleware.js";
import { createPost, readPost, deletePost } from "../controllers/post.controller.js"

const router = express.Router();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads/posts');
    },
    filename: function (req, file, cb) {
        const random = uuidv4();
        cb(null, random + "" + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route for create post
router.route("/createpost").post(upload.single('post'), authMiddleware, createPost);

// Route for read all posts of logged in user
router.route("/readpost").get(authMiddleware, readPost);

// Route for delete post
router.route("/deletepost/:id").delete(authMiddleware, deletePost);

export default router; 