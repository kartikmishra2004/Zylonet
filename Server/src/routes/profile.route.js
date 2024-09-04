import express from "express";
import multer from "multer";
import { profileUpload } from "../controllers/auth.controller.js";
import { v4 as uuidv4 } from 'uuid';
import cloudinary from "cloudinary";
import authMiddleware from "../middlewares/auth.middleware.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Ensure uploads directory exists
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../uploads');
        
        // Check if the directory exists, if not, create it
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const random = uuidv4();
        cb(null, random + "" + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route for uploading profile avatar
router.route("/upload").post(upload.single('avatar'), authMiddleware, profileUpload);

export default router;
