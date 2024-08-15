import User from "../models/user.model.js";
import cloudinary from "cloudinary";
import fs from "fs";

export const profileUpload = async (req, res) => {
    try {
        res.status(200).json({ message: "Profile uploaded successfully!!" });

        // Upload an image to cloudinary
        const uploadResult = await cloudinary.uploader.upload(req.file.path);

        // Deleting the image from the server
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File deleted!!")
            }
        });
    } catch (error) {
        res.status(400).json({ message: "Failed to upload profile!!" })
    }
}