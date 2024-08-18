import express from "express";
import createPost from "../controllers/post.controller.js"

const router = express.Router();

router.route("/createpost").post(createPost);

export default router;